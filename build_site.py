#!/usr/bin/env python3
"""
build_site.py -- assemble the static site (GitHub Pages) for the animal brain collection.

For every sub-* directory in the dataset root it
  * renders orthogonal mid-slice snapshots (sagittal / coronal / axial) of every anat T2w volume
    and of the mean b0 / mean high-b DWI images (derivatives/brainmask),
  * renders the DWI brain mask as a red outline on the mean DWI,
  * copies the FSL QC montages, the glass-brain PNGs and the spinning glass-brain videos,
and writes website/data.js (subject metadata + file lists) which index.html reads.

Run it through the Visualisation_Scripts uv environment (see build.sh):
    uv run python ../website/build_site.py [--force] [--subjects sub-01MouseAdult ...]
Existing snapshot PNGs are reused unless --force is given.
"""
import argparse
import csv
import glob
import json
import os
import shutil
import sys
import time

import nibabel as nib
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy.ndimage import binary_erosion, center_of_mass

SITE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SITE)
ASSETS = os.path.join(SITE, "assets")
PANEL_H = 300          # px height of each orthogonal panel
GAP = 6
BG = (12, 12, 14)
# (volume axis, panel name, (row zoom axis, col zoom axis)) after reorientation to RAS
AXES = [(0, "sagittal", (2, 1)), (1, "coronal", (2, 0)), (2, "axial", (1, 0))]


def get_font(size):
    try:
        return ImageFont.load_default(size=size)
    except TypeError:
        return ImageFont.load_default()


def load_canonical(path):
    """Volume reoriented to RAS (+ zooms). 4-D inputs use their first volume."""
    img = nib.as_closest_canonical(nib.load(path))
    data = np.asanyarray(img.dataobj)
    while data.ndim > 3:
        data = data[..., 0]
    data = np.nan_to_num(data.astype(np.float32))
    zooms = tuple(float(z) for z in img.header.get_zooms()[:3])
    return data, zooms


def header_info(path):
    img = nib.load(path)
    return {"shape": [int(s) for s in img.shape],
            "vox": [round(float(z), 4) for z in img.header.get_zooms()[:3]]}


def window(data):
    nz = data[data > 0]
    if nz.size < 100:
        nz = data.ravel()
    lo, hi = np.percentile(nz, [0.5, 99.8])
    if hi <= lo:
        hi = lo + 1
    return float(lo), float(hi)


def pick_center(data, mask=None):
    if mask is not None and mask.any():
        c = center_of_mass(mask)
    else:
        pos = data[data > 0]
        fg = data > np.percentile(pos, 50) if pos.size else np.zeros(data.shape, bool)
        c = center_of_mass(fg) if fg.any() else [s / 2 for s in data.shape]
    return [int(round(v)) if np.isfinite(v) else s // 2 for v, s in zip(c, data.shape)]


def slice2d(vol, axis, idx):
    """2-D slice with superior (or anterior, for axial) at the top and left on the left."""
    idx = min(max(idx, 0), vol.shape[axis] - 1)
    if axis == 0:
        s = vol[idx, :, :].T[::-1, :]      # rows z, cols y
    elif axis == 1:
        s = vol[:, idx, :].T[::-1, :]      # rows z, cols x
    else:
        s = vol[:, :, idx].T[::-1, :]      # rows y, cols x
    return np.ascontiguousarray(s)


def panel_size(shape2d, zooms2d):
    h_mm = shape2d[0] * zooms2d[0]
    w_mm = shape2d[1] * zooms2d[1]
    w = int(round(PANEL_H * w_mm / h_mm)) if h_mm > 0 else PANEL_H
    return (max(40, min(w, PANEL_H * 3)), PANEL_H)


def render_ortho(vol, zooms, out_png, mask=None):
    lo, hi = window(vol)
    center = pick_center(vol, mask)
    panels = []
    for axis, name, (rz, cz) in AXES:
        s = slice2d(vol, axis, center[axis])
        if min(s.shape) < 4:
            continue
        g = np.clip((s - lo) / (hi - lo), 0, 1)
        im = Image.fromarray((g * 255).astype(np.uint8), "L").convert("RGB")
        size = panel_size(s.shape, (zooms[rz], zooms[cz]))
        im = im.resize(size, Image.LANCZOS)
        if mask is not None:
            m = slice2d(mask, axis, center[axis]).astype(np.uint8) * 255
            mb = np.array(Image.fromarray(m, "L").resize(size, Image.NEAREST)) > 127
            edge = mb & ~binary_erosion(mb, iterations=2)
            arr = np.array(im)
            arr[edge] = (255, 48, 48)
            im = Image.fromarray(arr)
        panels.append((name, im))
    if not panels:
        return None
    W = sum(p.size[0] for _, p in panels) + GAP * (len(panels) + 1)
    H = PANEL_H + 2 * GAP
    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)
    font = get_font(13)
    x = GAP
    for name, p in panels:
        canvas.paste(p, (x, GAP))
        draw.text((x + 6, GAP + 4), name, fill=(205, 205, 215), font=font)
        x += p.size[0] + GAP
    canvas.save(out_png, optimize=True)
    return canvas.size


def read_summary():
    rows = {}
    p = os.path.join(ROOT, "derivatives", "brainmask_summary.tsv")
    if os.path.exists(p):
        with open(p) as f:
            for r in csv.DictReader(f, delimiter="\t"):
                rows[r["subject"]] = {
                    "status": r.get("status", ""), "mode": r.get("mode", ""),
                    "voxel_mm": r.get("voxel_mm", ""), "head_size_mm": r.get("head_size_L_mm", ""),
                    "mask_mm3": r.get("mask_mm3", ""), "note": r.get("note", "")}
    return rows


def read_species():
    p = os.path.join(SITE, "species.json")
    if not os.path.exists(p):
        return {}
    with open(p) as f:
        d = json.load(f)
    return {k: v for k, v in d.items() if not k.startswith("_")}


def copy_if(src, dst):
    if os.path.exists(src):
        if not os.path.exists(dst) or os.path.getmtime(src) > os.path.getmtime(dst):
            shutil.copy2(src, dst)
        return True
    return False


def snapshot(nii, out_png, force, mask=None):
    if os.path.exists(out_png) and not force:
        return True
    vol, zooms = load_canonical(nii)
    m = None
    if mask is not None:
        m, _ = load_canonical(mask)
        m = m > 0
        if m.shape != vol.shape:
            m = None
    return render_ortho(vol, zooms, out_png, m) is not None


def build_subject(sub, summary, species, force):
    sdir = os.path.join(ROOT, sub)
    out = os.path.join(ASSETS, sub)
    os.makedirs(out, exist_ok=True)
    e = {"id": sub, "label": species.get(sub, {}).get("label", ""), "class": species.get(sub, {}).get("class", ""),
         "label_guess": bool(species.get(sub, {}).get("guess", False)),
         "anat": [], "dwi": [], "mask": {}, "glass": {}, "params": ""}
    e.update(summary.get(sub, {}))

    for f in sorted(glob.glob(os.path.join(sdir, "anat", "*.nii*"))):
        label = os.path.basename(f).replace(sub + "_", "").split(".")[0]
        png = f"anat_{label}.png"
        rec = {"label": label, "src": os.path.relpath(f, ROOT), **header_info(f)}
        if snapshot(f, os.path.join(out, png), force):
            rec["png"] = png
        e["anat"].append(rec)

    bm = os.path.join(sdir, "derivatives", "brainmask")
    raw = [p for p in (os.path.join(sdir, "dwi", sub + "_dwi.nii"), os.path.join(sdir, "dwi", sub + "_dwi.nii.gz")) if os.path.exists(p)]
    if raw:
        e["dwi_raw"] = {"src": os.path.relpath(raw[0], ROOT), **header_info(raw[0])}
        bval = os.path.join(sdir, "dwi", sub + "_dwi.bval")
        if os.path.exists(bval):
            b = [float(x) for x in open(bval).read().split()]
            e["dwi_raw"]["n_b0"] = sum(1 for x in b if x < 100)
            e["dwi_raw"]["n_dwi"] = sum(1 for x in b if x >= 100)
            e["dwi_raw"]["bmax"] = max(b) if b else 0
    for key, label in (("meanb0", "mean b0 (b<100)"), ("meandwi", "mean DWI (b>1500)")):
        f = os.path.join(bm, f"{sub}_{key}.nii.gz")
        if os.path.exists(f):
            png = f"dwi_{key}.png"
            rec = {"label": label, "src": os.path.relpath(f, ROOT), **header_info(f)}
            if snapshot(f, os.path.join(out, png), force):
                rec["png"] = png
            e["dwi"].append(rec)

    maskf = os.path.join(bm, f"{sub}_dwi_brainmask.nii.gz")
    meandwi = os.path.join(bm, f"{sub}_meandwi.nii.gz")
    if os.path.exists(maskf) and os.path.exists(meandwi):
        if snapshot(meandwi, os.path.join(out, "mask_overlay.png"), force, mask=maskf):
            e["mask"]["overlay"] = "mask_overlay.png"
    for q in ("ortho_meandwi", "ortho_meanb0", "mont_x", "mont_y", "mont_z"):
        if copy_if(os.path.join(bm, "qc", q + ".png"), os.path.join(out, f"mask_{q}.png")):
            e["mask"][q] = f"mask_{q}.png"
    pt = os.path.join(bm, "params.txt")
    if os.path.exists(pt):
        e["params"] = open(pt).read().strip()

    gb = os.path.join(sdir, "derivatives", "glassbrain")
    for bg in ("white", "black"):
        if copy_if(os.path.join(gb, f"{sub}_glass_{bg}.png"), os.path.join(out, f"glass_{bg}.png")):
            e["glass"][bg + "_png"] = f"glass_{bg}.png"
        for src in (os.path.join(gb, f"{sub}_glass_{bg}.mp4"), os.path.join(ROOT, "videos", f"{sub}_glass_{bg}.mp4")):
            if copy_if(src, os.path.join(out, f"glass_{bg}.mp4")):
                e["glass"][bg + "_mp4"] = f"glass_{bg}.mp4"
                break
    return e


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--subjects", nargs="*", default=None)
    ap.add_argument("--force", action="store_true", help="re-render snapshots even if they exist")
    args = ap.parse_args()
    subs = args.subjects or sorted(os.path.basename(p) for p in glob.glob(os.path.join(ROOT, "sub-*")) if os.path.isdir(p))
    os.makedirs(ASSETS, exist_ok=True)
    summary, species = read_summary(), read_species()
    entries = []
    t0 = time.time()
    for i, sub in enumerate(subs, 1):
        t = time.time()
        try:
            entries.append(build_subject(sub, summary, species, args.force))
            print(f"[{i}/{len(subs)}] {sub}  {time.time() - t:.1f}s", flush=True)
        except Exception as ex:  # keep going, report at the end
            print(f"[{i}/{len(subs)}] {sub}  FAILED: {ex!r}", flush=True)
    for bg in ("white", "black"):
        copy_if(os.path.join(ROOT, "derivatives", f"glassbrain_sheet_{bg}.png"), os.path.join(ASSETS, f"glassbrain_sheet_{bg}.png"))
    desc = {}
    dd = os.path.join(ROOT, "dataset_description.json")
    if os.path.exists(dd):
        desc = json.load(open(dd))
    data = {"generated": time.strftime("%Y-%m-%d %H:%M"), "dataset": desc, "subjects": entries}
    if args.subjects:  # partial rebuild: merge into existing data.js
        prev = os.path.join(SITE, "data.js")
        if os.path.exists(prev):
            old = json.loads(open(prev).read().split("=", 1)[1].rstrip().rstrip(";"))
            keep = [s for s in old["subjects"] if s["id"] not in {e["id"] for e in entries}]
            data["subjects"] = sorted(keep + entries, key=lambda s: s["id"])
    with open(os.path.join(SITE, "data.js"), "w") as f:
        f.write("window.SITE_DATA = " + json.dumps(data, indent=1) + ";\n")
    print(f"wrote data.js with {len(data['subjects'])} subjects in {time.time() - t0:.0f}s")


if __name__ == "__main__":
    main()
