#!/bin/bash
# Rebuild website/assets and website/data.js from the dataset (uses the Visualisation_Scripts uv env).
#   ./build.sh            reuse existing snapshots, refresh copies + data.js
#   ./build.sh --force    re-render every snapshot
#   ./build.sh --subjects sub-01MouseAdult sub-02MouseICR
export _ZO_DOCTOR=0
HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE/../Visualisation_Scripts" && uv run python "$HERE/build_site.py" "$@"
