window.SITE_DATA = {
 "generated": "2026-09-22 19:31",
 "dataset": {
  "Name": "Animal Brain Collection Project",
  "BIDSVersion": "1.9.0",
  "License": "CC0",
  "Authors": [
   "Kumamoto, T",
   "Komaki, Y",
   "Tsurugizawa, T"
  ],
  "Acknowledgements": "Animal samples were provided by Nasu Animal Kingdom, Kobe Animal Kingdom, RIKEN BDR, Hyogo Medical University, Utsunomiya University, National Yang Ming Chiao Tung University, and private breeders. For further details, please refer to the upcoming publication.",
  "HowToAcknowledge": "Please cite our upcoming publication.",
  "Description": "We are collecting MRI data of various species including hugfishs, turtles, crows, and etc...",
  "DatasetDOI": "doi:10.18112/openneuro.ds005431.v1.3.0"
 },
 "subjects": [
  {
   "id": "sub-01MouseAdult",
   "label": "Mouse, adult",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-01MouseAdult/anat/sub-01MouseAdult_run-01_T2w.nii.gz",
     "shape": [
      221,
      251,
      151
     ],
     "vox": [
      0.05,
      0.05,
      0.05
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-01MouseAdult/anat/sub-01MouseAdult_run-02_T2w.nii.gz",
     "shape": [
      221,
      251,
      151
     ],
     "vox": [
      0.05,
      0.05,
      0.05
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-01MouseAdult/derivatives/brainmask/sub-01MouseAdult_meanb0.nii.gz",
     "shape": [
      86,
      86,
      64
     ],
     "vox": [
      0.1488,
      0.1488,
      0.15
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-01MouseAdult/derivatives/brainmask/sub-01MouseAdult_meandwi.nii.gz",
     "shape": [
      86,
      86,
      64
     ],
     "vox": [
      0.1488,
      0.1488,
      0.15
     ],
     "png": "dwi_meandwi.png"
    }
   ],
   "mask": {
    "overlay": "mask_overlay.png",
    "ortho_meandwi": "mask_ortho_meandwi.png",
    "ortho_meanb0": "mask_ortho_meanb0.png",
    "mont_x": "mask_mont_x.png",
    "mont_y": "mask_mont_y.png",
    "mont_z": "mask_mont_z.png"
   },
   "glass": {
    "white_png": "glass_white.png",
    "white_mp4": "glass_white.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4"
   },
   "params": "sub-01MouseAdult mode=brain seed=none vox=0.149225mm L=6.77027mm otsu=10627.200195  n_ero=2 n_open=1 n_grow=7\nmask_mm3=308.687775",
   "status": "PASS",
   "mode": "brain",
   "voxel_mm": "0.149225",
   "head_size_mm": "6.77027",
   "mask_mm3": "308.687775",
   "note": "excised brain; brain mode",
   "dwi_raw": {
    "src": "sub-01MouseAdult/dwi/sub-01MouseAdult_dwi.nii",
    "shape": [
     86,
     86,
     64,
     35
    ],
    "vox": [
     0.1488,
     0.1488,
     0.15
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.55
   }
  },
  {
   "id": "sub-53JMacaque",
   "label": "Japanese macaque",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-53JMacaque/anat/sub-53JMacaque_T2w.nii.gz",
     "shape": [
      64,
      64,
      1,
      8
     ],
     "vox": [
      1.25,
      1.25,
      5.0
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-53JMacaque/derivatives/brainmask/sub-53JMacaque_meanb0.nii.gz",
     "shape": [
      128,
      150,
      90
     ],
     "vox": [
      0.5,
      0.5,
      0.5
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-53JMacaque/derivatives/brainmask/sub-53JMacaque_meandwi.nii.gz",
     "shape": [
      128,
      150,
      90
     ],
     "vox": [
      0.5,
      0.5,
      0.5
     ],
     "png": "dwi_meandwi.png"
    }
   ],
   "mask": {
    "overlay": "mask_overlay.png",
    "ortho_meandwi": "mask_ortho_meandwi.png",
    "ortho_meanb0": "mask_ortho_meanb0.png",
    "mont_x": "mask_mont_x.png",
    "mont_y": "mask_mont_y.png",
    "mont_z": "mask_mont_z.png"
   },
   "glass": {
    "white_png": "glass_white.png",
    "white_mp4": "glass_white.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4"
   },
   "params": "sub-53JMacaque mode=brain seed=none vox=0.5mm L=42.4887mm otsu=527.112549  n_ero=4 n_open=3 n_grow=14\nmask_mm3=70928.375000",
   "status": "PASS",
   "mode": "brain",
   "voxel_mm": "0.5",
   "head_size_mm": "42.4887",
   "mask_mm3": "70928.375000",
   "note": "excised brain; brain mode; a few small leak blobs",
   "dwi_raw": {
    "src": "sub-53JMacaque/dwi/sub-53JMacaque_dwi.nii.gz",
    "shape": [
     128,
     150,
     90,
     35
    ],
    "vox": [
     0.5,
     0.5,
     0.5
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2004.2376750288195
   }
  },
  {
   "id": "sub-42ALamprey",
   "label": "Arctic lamprey",
   "class": "fish",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-42ALamprey/anat/sub-42ALamprey_T2w.nii.gz",
     "shape": [
      320,
      512,
      320
     ],
     "vox": [
      0.075,
      0.075,
      0.075
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-42ALamprey/derivatives/brainmask/sub-42ALamprey_meanb0.nii.gz",
     "shape": [
      160,
      256,
      160
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-42ALamprey/derivatives/brainmask/sub-42ALamprey_meandwi.nii.gz",
     "shape": [
      160,
      256,
      160
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "dwi_meandwi.png"
    }
   ],
   "mask": {
    "overlay": "mask_overlay.png",
    "ortho_meandwi": "mask_ortho_meandwi.png",
    "ortho_meanb0": "mask_ortho_meanb0.png",
    "mont_x": "mask_mont_x.png",
    "mont_y": "mask_mont_y.png",
    "mont_z": "mask_mont_z.png"
   },
   "glass": {},
   "params": "sub-42ALamprey vox=0.15mm L=16.1971mm otsu=322.533325  n_ero=5 n_open=4 n_grow=17\nmask_mm3=26.318254",
   "status": "CHECK",
   "mode": "head",
   "voxel_mm": "0.15",
   "head_size_mm": "16.1971",
   "mask_mm3": "26.318254",
   "note": "tiny mask; lamprey brain is very small and elongated",
   "dwi_raw": {
    "src": "sub-42ALamprey/dwi/sub-42ALamprey_dwi.nii",
    "shape": [
     160,
     256,
     160,
     35
    ],
    "vox": [
     0.15,
     0.15,
     0.15
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.4
   }
  }
 ]
};
