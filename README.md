# Animal Brain Collection — viewer

Static site (GitHub Pages) for the ex vivo animal-brain MRI dataset
(OpenNeuro ds005431, Kumamoto / Komaki / Tsurugizawa). One card per subject with four tabs:

| tab   | content |
|-------|---------|
| Brain | spinning glass-brain video of the DWI brain mask (white / black background switch), plus still frames |
| Mask  | brain mask as a red outline on the mean b>1500 DWI, QC status / notes from `derivatives/brainmask_summary.tsv`, FSL QC montages |
| Anat  | orthogonal mid-slices of every T2w volume in `sub-*/anat` |
| DWI   | mean b0 and mean high-b images, shell counts from the bval file |

The page is `index.html` + `data.js` + `assets/<sub>/…`. Nothing is computed in the browser.

## Rebuilding

```bash
./build.sh                         # refresh copies + data.js, keep existing snapshots
./build.sh --force                 # re-render every snapshot PNG
./build.sh --subjects sub-01MouseAdult sub-02MouseICR
```

`build.sh` runs `build_site.py` inside the `Visualisation_Scripts` uv environment (nibabel, numpy, scipy, Pillow).
It expects the BIDS layout one directory up: `../sub-*/anat`, `../sub-*/dwi`,
`../sub-*/derivatives/brainmask`, `../sub-*/derivatives/glassbrain`, `../videos`.

Species display names live in `species.json`; entries marked `"guess": true` were expanded from the subject
ID abbreviation and show a `?` on the page until verified.

## Preview locally

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

## Re-rendering a flipped glass brain

If a spin comes out mirrored or upside-down, re-render with the new `--flip` option (any of x, y, z, comma-separated):

```bash
../code/render_glass.sh sub-01MouseAdult --flip z
../code/render_glass.sh sub-21ChickenP21 --flip x,y
./build.sh --subjects sub-01MouseAdult sub-21ChickenP21
```
