window.SITE_DATA = {
 "generated": "2026-09-22 19:47",
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
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
   "id": "sub-02MouseICR",
   "label": "Mouse, ICR strain",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-02MouseICR/anat/sub-02MouseICR_T2w.nii.gz",
     "shape": [
      220,
      230,
      200
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-02MouseICR/derivatives/brainmask/sub-02MouseICR_meanb0.nii.gz",
     "shape": [
      110,
      115,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-02MouseICR/derivatives/brainmask/sub-02MouseICR_meandwi.nii.gz",
     "shape": [
      110,
      115,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-02MouseICR vox=0.2mm L=11.5665mm otsu=1407.466675  n_ero=3 n_open=2 n_grow=9\nmask_mm3=543.920044",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "11.5665",
   "mask_mm3": "543.920044",
   "note": "",
   "dwi_raw": {
    "src": "sub-02MouseICR/dwi/sub-02MouseICR_dwi.nii",
    "shape": [
     110,
     115,
     100,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.48
   }
  },
  {
   "id": "sub-03LJFMouseAdult",
   "label": "Large Japanese field mouse, adult",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-03LJFMouseAdult/anat/sub-03LJFMouseAdult_run-01_T2w.nii.gz",
     "shape": [
      221,
      255,
      255
     ],
     "vox": [
      0.0905,
      0.0905,
      0.0905
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-03LJFMouseAdult/anat/sub-03LJFMouseAdult_run-02_T2w.nii.gz",
     "shape": [
      267,
      281,
      81
     ],
     "vox": [
      0.075,
      0.075,
      0.3
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-03LJFMouseAdult/derivatives/brainmask/sub-03LJFMouseAdult_meanb0.nii.gz",
     "shape": [
      80,
      80,
      80
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-03LJFMouseAdult/derivatives/brainmask/sub-03LJFMouseAdult_meandwi.nii.gz",
     "shape": [
      80,
      80,
      80
     ],
     "vox": [
      0.25,
      0.25,
      0.25
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
   "params": "sub-03LJFMouseAdult vox=0.25mm L=12.7482mm otsu=1818.766724  n_ero=3 n_open=2 n_grow=9\nmask_mm3=1135.640625",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.25",
   "head_size_mm": "12.7482",
   "mask_mm3": "1135.640625",
   "note": "mask covers most of the head; muscle not suppressed on mean DWI. Try seed.",
   "dwi_raw": {
    "src": "sub-03LJFMouseAdult/dwi/sub-03LJFMouseAdult_dwi.nii",
    "shape": [
     80,
     80,
     80,
     35
    ],
    "vox": [
     0.25,
     0.25,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.48
   }
  },
  {
   "id": "sub-04Rat4w",
   "label": "Rat, 4 weeks",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-04Rat4w/anat/sub-04Rat4w_T2w.nii.gz",
     "shape": [
      155,
      230,
      110
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-04Rat4w/derivatives/brainmask/sub-04Rat4w_meanb0.nii.gz",
     "shape": [
      103,
      153,
      74
     ],
     "vox": [
      0.1503,
      0.1505,
      0.1486
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-04Rat4w/derivatives/brainmask/sub-04Rat4w_meandwi.nii.gz",
     "shape": [
      103,
      153,
      74
     ],
     "vox": [
      0.1503,
      0.1505,
      0.1486
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-04Rat4w mode=brain seed=none vox=0.14982mm L=11.006mm otsu=5371.399902  n_ero=4 n_open=2 n_grow=12\nmask_mm3=1310.547241",
   "status": "PASS",
   "mode": "brain",
   "voxel_mm": "0.14982",
   "head_size_mm": "11.006",
   "mask_mm3": "1310.547241",
   "note": "excised brain; brain mode",
   "dwi_raw": {
    "src": "sub-04Rat4w/dwi/sub-04Rat4w_dwi.nii",
    "shape": [
     103,
     153,
     74,
     35
    ],
    "vox": [
     0.1503,
     0.1505,
     0.1486
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.86
   }
  },
  {
   "id": "sub-05CBRatAdult",
   "label": "Chinese bamboo rat, adult",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-05CBRatAdult/anat/sub-05CBRatAdult_run-01_T2w.nii.gz",
     "shape": [
      407,
      357,
      307
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-05CBRatAdult/anat/sub-05CBRatAdult_run-02_T2w.nii.gz",
     "shape": [
      407,
      281,
      361
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-05CBRatAdult/derivatives/brainmask/sub-05CBRatAdult_meanb0.nii.gz",
     "shape": [
      96,
      96,
      35
     ],
     "vox": [
      1.0417,
      1.0417,
      1.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-05CBRatAdult/derivatives/brainmask/sub-05CBRatAdult_meandwi.nii.gz",
     "shape": [
      96,
      96,
      35
     ],
     "vox": [
      1.0417,
      1.0417,
      1.2
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
   "params": "sub-05CBRatAdult vox=1.09444mm L=35.7764mm otsu=62.906250  n_ero=2 n_open=1 n_grow=6\nmask_mm3=40195.566406",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "1.09444",
   "head_size_mm": "35.7764",
   "mask_mm3": "40195.566406",
   "note": "1 mm voxels, 35 slices, single b0; mask is a rough blob around the brain",
   "dwi_raw": {
    "src": "sub-05CBRatAdult/dwi/sub-05CBRatAdult_dwi.nii",
    "shape": [
     96,
     96,
     35,
     33
    ],
    "vox": [
     1.0417,
     1.0417,
     1.2
    ],
    "n_b0": 1,
    "n_dwi": 32,
    "bmax": 2000.0
   }
  },
  {
   "id": "sub-06RabbitAdult",
   "label": "Rabbit, adult",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-06RabbitAdult/anat/sub-06RabbitAdult_run-01_T2w.nii.gz",
     "shape": [
      271,
      211,
      436
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-06RabbitAdult/anat/sub-06RabbitAdult_run-02_T2w.nii.gz",
     "shape": [
      271,
      436,
      216
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-06RabbitAdult/derivatives/brainmask/sub-06RabbitAdult_meanb0.nii.gz",
     "shape": [
      140,
      210,
      105
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-06RabbitAdult/derivatives/brainmask/sub-06RabbitAdult_meandwi.nii.gz",
     "shape": [
      140,
      210,
      105
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-06RabbitAdult mode=head seed=none vox=0.2mm L=18.4878mm otsu=1127.533325  n_ero=5 n_open=3 n_grow=15\nmask_mm3=5479.928223",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "18.4878",
   "mask_mm3": "5479.928223",
   "note": "whole head has uniform intensity; mask = whole head. Try seed.",
   "dwi_raw": {
    "src": "sub-06RabbitAdult/dwi/sub-06RabbitAdult_dwi.nii",
    "shape": [
     140,
     210,
     105,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.81
   }
  },
  {
   "id": "sub-07ERousetteAdult",
   "label": "Egyptian rousette (fruit bat), adult",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-07ERousetteAdult/anat/sub-07ERousetteAdult_run-01_T2w.nii.gz",
     "shape": [
      271,
      251,
      281
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-07ERousetteAdult/anat/sub-07ERousetteAdult_run-02_T2w.nii.gz",
     "shape": [
      271,
      281,
      226
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-07ERousetteAdult/derivatives/brainmask/sub-07ERousetteAdult_meanb0.nii.gz",
     "shape": [
      108,
      120,
      100
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-07ERousetteAdult/derivatives/brainmask/sub-07ERousetteAdult_meandwi.nii.gz",
     "shape": [
      108,
      120,
      100
     ],
     "vox": [
      0.25,
      0.25,
      0.25
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-07ERousetteAdult vox=0.25mm L=14.1246mm otsu=2837.366699  n_ero=3 n_open=2 n_grow=9\nmask_mm3=1935.062500",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.25",
   "head_size_mm": "14.1246",
   "mask_mm3": "1935.062500",
   "note": "",
   "dwi_raw": {
    "src": "sub-07ERousetteAdult/dwi/sub-07ERousetteAdult_dwi.nii",
    "shape": [
     108,
     120,
     100,
     35
    ],
    "vox": [
     0.25,
     0.25,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.84
   }
  },
  {
   "id": "sub-08JSquirrelP4",
   "label": "Japanese squirrel, P4",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-08JSquirrelP4/anat/sub-08JSquirrelP4_run-01_T2w.nii.gz",
     "shape": [
      187,
      201,
      71
     ],
     "vox": [
      0.075,
      0.075,
      0.3
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-08JSquirrelP4/anat/sub-08JSquirrelP4_run-02_T2w.nii.gz",
     "shape": [
      187,
      254,
      61
     ],
     "vox": [
      0.075,
      0.075,
      0.3
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-08JSquirrelP4/derivatives/brainmask/sub-08JSquirrelP4_meanb0.nii.gz",
     "shape": [
      75,
      80,
      64
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-08JSquirrelP4/derivatives/brainmask/sub-08JSquirrelP4_meandwi.nii.gz",
     "shape": [
      75,
      80,
      64
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-08JSquirrelP4 vox=0.2mm L=8.05693mm otsu=4451.533203  n_ero=2 n_open=1 n_grow=6\nmask_mm3=432.544037",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "8.05693",
   "mask_mm3": "432.544037",
   "note": "small leak anterior/ventral into snout region",
   "dwi_raw": {
    "src": "sub-08JSquirrelP4/dwi/sub-08JSquirrelP4_dwi.nii",
    "shape": [
     75,
     80,
     64,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.75
   }
  },
  {
   "id": "sub-09JSquirrelNewBorn",
   "label": "Japanese squirrel, newborn",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-09JSquirrelNewBorn/anat/sub-09JSquirrelNewBorn_run-01_T2w.nii.gz",
     "shape": [
      201,
      207,
      247
     ],
     "vox": [
      0.075,
      0.075,
      0.075
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-09JSquirrelNewBorn/anat/sub-09JSquirrelNewBorn_run-02_T2w.nii.gz",
     "shape": [
      201,
      254,
      214
     ],
     "vox": [
      0.075,
      0.075,
      0.075
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-09JSquirrelNewBorn/derivatives/brainmask/sub-09JSquirrelNewBorn_meanb0.nii.gz",
     "shape": [
      94,
      120,
      107
     ],
     "vox": [
      0.15,
      0.1489,
      0.1495
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-09JSquirrelNewBorn/derivatives/brainmask/sub-09JSquirrelNewBorn_meandwi.nii.gz",
     "shape": [
      94,
      120,
      107
     ],
     "vox": [
      0.15,
      0.1489,
      0.1495
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
   "params": "sub-09JSquirrelNewBorn vox=0.14949mm L=5.90159mm otsu=3953.433350  n_ero=2 n_open=1 n_grow=6\nmask_mm3=148.868378",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.14949",
   "head_size_mm": "5.90159",
   "mask_mm3": "148.868378",
   "note": "neonate; brain not separable by intensity, mask wanders into neck",
   "dwi_raw": {
    "src": "sub-09JSquirrelNewBorn/dwi/sub-09JSquirrelNewBorn_dwi.nii",
    "shape": [
     94,
     120,
     107,
     35
    ],
    "vox": [
     0.15,
     0.1489,
     0.1495
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.74
   }
  },
  {
   "id": "sub-10JSquirrelAdult",
   "label": "Japanese squirrel, adult",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-10JSquirrelAdult/anat/sub-10JSquirrelAdult_run-01_T2w.nii.gz",
     "shape": [
      145,
      143,
      161
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-10JSquirrelAdult/anat/sub-10JSquirrelAdult_run-02_T2w.nii.gz",
     "shape": [
      145,
      169,
      149
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-10JSquirrelAdult/derivatives/brainmask/sub-10JSquirrelAdult_meanb0.nii.gz",
     "shape": [
      127,
      140,
      120
     ],
     "vox": [
      0.3,
      0.2992,
      0.3
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-10JSquirrelAdult/derivatives/brainmask/sub-10JSquirrelAdult_meandwi.nii.gz",
     "shape": [
      127,
      140,
      120
     ],
     "vox": [
      0.3,
      0.2992,
      0.3
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
   "params": "sub-10JSquirrelAdult vox=0.299738mm L=20.7283mm otsu=1368.233276  n_ero=3 n_open=2 n_grow=11\nmask_mm3=5974.533203",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.299738",
   "head_size_mm": "20.7283",
   "mask_mm3": "5974.533203",
   "note": "leak along optic/olfactory region anteriorly",
   "dwi_raw": {
    "src": "sub-10JSquirrelAdult/dwi/sub-10JSquirrelAdult_dwi.nii",
    "shape": [
     127,
     140,
     120,
     35
    ],
    "vox": [
     0.3,
     0.2992,
     0.3
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.27
   }
  },
  {
   "id": "sub-11HShrew",
   "label": "House shrew",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-11HShrew/anat/sub-11HShrew_run-01_T2w.nii.gz",
     "shape": [
      160,
      114,
      149
     ],
     "vox": [
      0.1754,
      0.175,
      0.1745
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-11HShrew/anat/sub-11HShrew_run-02_T2w.nii.gz",
     "shape": [
      160,
      114,
      149
     ],
     "vox": [
      0.1754,
      0.175,
      0.1745
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-11HShrew/derivatives/brainmask/sub-11HShrew_meanb0.nii.gz",
     "shape": [
      160,
      114,
      149
     ],
     "vox": [
      0.1754,
      0.175,
      0.1745
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-11HShrew/derivatives/brainmask/sub-11HShrew_meandwi.nii.gz",
     "shape": [
      160,
      114,
      149
     ],
     "vox": [
      0.1754,
      0.175,
      0.1745
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
   "params": "sub-11HShrew vox=0.174978mm L=9.40045mm otsu=1275.466675  n_ero=3 n_open=2 n_grow=9\nmask_mm3=453.410797",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.174978",
   "head_size_mm": "9.40045",
   "mask_mm3": "453.410797",
   "note": "largest bright object is not the brain. Try seed.",
   "dwi_raw": {
    "src": "sub-11HShrew/dwi/sub-11HShrew_dwi.nii",
    "shape": [
     160,
     114,
     149,
     35
    ],
    "vox": [
     0.1754,
     0.175,
     0.1745
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.37
   }
  },
  {
   "id": "sub-12Ferret",
   "label": "Ferret",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-12Ferret/anat/sub-12Ferret_run-01_T2w.nii.gz",
     "shape": [
      201,
      179,
      135
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-12Ferret/anat/sub-12Ferret_run-02_T2w.nii.gz",
     "shape": [
      201,
      181,
      171
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-12Ferret/derivatives/brainmask/sub-12Ferret_meanb0.nii.gz",
     "shape": [
      205,
      184,
      172
     ],
     "vox": [
      0.25,
      0.2498,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-12Ferret/derivatives/brainmask/sub-12Ferret_meandwi.nii.gz",
     "shape": [
      205,
      184,
      172
     ],
     "vox": [
      0.25,
      0.2498,
      0.25
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-12Ferret vox=0.249919mm L=20.6938mm otsu=920.733337  n_ero=4 n_open=3 n_grow=13\nmask_mm3=4773.992188",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.249919",
   "head_size_mm": "20.6938",
   "mask_mm3": "4773.992188",
   "note": "",
   "dwi_raw": {
    "src": "sub-12Ferret/dwi/sub-12Ferret_dwi.nii",
    "shape": [
     205,
     184,
     172,
     35
    ],
    "vox": [
     0.25,
     0.2498,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.22
   }
  },
  {
   "id": "sub-13GSOpossum",
   "label": "Gray short-tailed opossum",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-13GSOpossum/anat/sub-13GSOpossum_run-01_T2w.nii.gz",
     "shape": [
      152,
      113,
      159
     ],
     "vox": [
      0.2212,
      0.2204,
      0.2201
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-13GSOpossum/anat/sub-13GSOpossum_run-02_T2w.nii.gz",
     "shape": [
      152,
      113,
      159
     ],
     "vox": [
      0.2212,
      0.2204,
      0.2201
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-13GSOpossum/derivatives/brainmask/sub-13GSOpossum_meanb0.nii.gz",
     "shape": [
      152,
      113,
      159
     ],
     "vox": [
      0.2212,
      0.2204,
      0.2201
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-13GSOpossum/derivatives/brainmask/sub-13GSOpossum_meandwi.nii.gz",
     "shape": [
      152,
      113,
      159
     ],
     "vox": [
      0.2212,
      0.2204,
      0.2201
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-13GSOpossum vox=0.220586mm L=13.0118mm otsu=1861.599976  n_ero=3 n_open=2 n_grow=9\nmask_mm3=857.271606",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.220586",
   "head_size_mm": "13.0118",
   "mask_mm3": "857.271606",
   "note": "",
   "dwi_raw": {
    "src": "sub-13GSOpossum/dwi/sub-13GSOpossum_dwi.nii",
    "shape": [
     152,
     113,
     159,
     35
    ],
    "vox": [
     0.2212,
     0.2204,
     0.2201
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.27
   }
  },
  {
   "id": "sub-14GPig",
   "label": "Guinea pig",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-14GPig/anat/sub-14GPig_T2w.nii.gz",
     "shape": [
      221,
      136,
      361
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    },
    {
     "label": "run-01_T2w",
     "src": "sub-14GPig/anat/sub-14GPig_run-01_T2w.nii.gz",
     "shape": [
      221,
      136,
      361
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-14GPig/anat/sub-14GPig_run-02_T2w.nii.gz",
     "shape": [
      221,
      361,
      136
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-14GPig/derivatives/brainmask/sub-14GPig_meanb0.nii.gz",
     "shape": [
      120,
      190,
      80
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-14GPig/derivatives/brainmask/sub-14GPig_meandwi.nii.gz",
     "shape": [
      120,
      190,
      80
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-14GPig vox=0.2mm L=13.4404mm otsu=1385.666626  n_ero=3 n_open=2 n_grow=11\nmask_mm3=1060.472046",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "13.4404",
   "mask_mm3": "1060.472046",
   "note": "skin/skull brighter than brain on mean DWI; mask is fragmented boxes. Try seed.",
   "dwi_raw": {
    "src": "sub-14GPig/dwi/sub-14GPig_dwi.nii",
    "shape": [
     120,
     190,
     80,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.74
   }
  },
  {
   "id": "sub-15MarmosetE100",
   "label": "Marmoset, E100",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-15MarmosetE100/anat/sub-15MarmosetE100_run-01_T2w.nii.gz",
     "shape": [
      161,
      171,
      176
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-15MarmosetE100/anat/sub-15MarmosetE100_run-02_T2w.nii.gz",
     "shape": [
      161,
      191,
      171
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-15MarmosetE100/derivatives/brainmask/sub-15MarmosetE100_meanb0.nii.gz",
     "shape": [
      85,
      95,
      75
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-15MarmosetE100/derivatives/brainmask/sub-15MarmosetE100_meandwi.nii.gz",
     "shape": [
      85,
      95,
      75
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-15MarmosetE100 vox=0.2mm L=8.5635mm otsu=3889.633301  n_ero=2 n_open=1 n_grow=7\nmask_mm3=466.256012",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "8.5635",
   "mask_mm3": "466.256012",
   "note": "fetal head, no intensity separation; mask wanders",
   "dwi_raw": {
    "src": "sub-15MarmosetE100/dwi/sub-15MarmosetE100_dwi.nii",
    "shape": [
     85,
     95,
     75,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.63
   }
  },
  {
   "id": "sub-16MarmosetP8",
   "label": "Marmoset, P8",
   "class": "mammal",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-16MarmosetP8/anat/sub-16MarmosetP8_run-01_T2w.nii.gz",
     "shape": [
      161,
      167,
      237
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-16MarmosetP8/anat/sub-16MarmosetP8_run-02_T2w.nii.gz",
     "shape": [
      161,
      221,
      171
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-16MarmosetP8/derivatives/brainmask/sub-16MarmosetP8_meanb0.nii.gz",
     "shape": [
      100,
      128,
      96
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-16MarmosetP8/derivatives/brainmask/sub-16MarmosetP8_meandwi.nii.gz",
     "shape": [
      100,
      128,
      96
     ],
     "vox": [
      0.25,
      0.25,
      0.25
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
   "params": "sub-16MarmosetP8 vox=0.25mm L=16.9482mm otsu=1342.133301  n_ero=3 n_open=2 n_grow=11\nmask_mm3=3328.390625",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.25",
   "head_size_mm": "16.9482",
   "mask_mm3": "3328.390625",
   "note": "neonate head; mask = whole head",
   "dwi_raw": {
    "src": "sub-16MarmosetP8/dwi/sub-16MarmosetP8_dwi.nii",
    "shape": [
     100,
     128,
     96,
     35
    ],
    "vox": [
     0.25,
     0.25,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.4
   }
  },
  {
   "id": "sub-17ChickE18",
   "label": "Chick embryo, E18",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-17ChickE18/anat/sub-17ChickE18_run-01_T2w.nii.gz",
     "shape": [
      141,
      86,
      171
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-17ChickE18/anat/sub-17ChickE18_run-02_T2w.nii.gz",
     "shape": [
      141,
      166,
      91
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-17ChickE18/derivatives/brainmask/sub-17ChickE18_meanb0.nii.gz",
     "shape": [
      119,
      131,
      74
     ],
     "vox": [
      0.1298,
      0.1303,
      0.1297
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-17ChickE18/derivatives/brainmask/sub-17ChickE18_meandwi.nii.gz",
     "shape": [
      119,
      131,
      74
     ],
     "vox": [
      0.1298,
      0.1303,
      0.1297
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
   "params": "sub-17ChickE18 mode=head seed=none vox=0.129918mm L=8.67657mm otsu=5026.399902  n_ero=3 n_open=2 n_grow=11\nmask_mm3=620.611145",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.129918",
   "head_size_mm": "8.67657",
   "mask_mm3": "620.611145",
   "note": "embryo head; mask includes eyes and skin (whole head)",
   "dwi_raw": {
    "src": "sub-17ChickE18/dwi/sub-17ChickE18_dwi.nii",
    "shape": [
     119,
     131,
     74,
     35
    ],
    "vox": [
     0.1298,
     0.1303,
     0.1297
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.99
   }
  },
  {
   "id": "sub-18ChickE20",
   "label": "Chick embryo, E20",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-18ChickE20/anat/sub-18ChickE20_run-01_T2w.nii.gz",
     "shape": [
      214,
      154,
      234
     ],
     "vox": [
      0.075,
      0.075,
      0.075
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-18ChickE20/anat/sub-18ChickE20_run-02_T2w.nii.gz",
     "shape": [
      214,
      227,
      154
     ],
     "vox": [
      0.075,
      0.075,
      0.075
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-18ChickE20/derivatives/brainmask/sub-18ChickE20_meanb0.nii.gz",
     "shape": [
      106,
      120,
      73
     ],
     "vox": [
      0.15,
      0.1509,
      0.1507
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-18ChickE20/derivatives/brainmask/sub-18ChickE20_meandwi.nii.gz",
     "shape": [
      106,
      120,
      73
     ],
     "vox": [
      0.15,
      0.1509,
      0.1507
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
   "params": "sub-18ChickE20 mode=head seed=none vox=0.150543mm L=9.54453mm otsu=4075.899902  n_ero=3 n_open=2 n_grow=10\nmask_mm3=841.318176",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.150543",
   "head_size_mm": "9.54453",
   "mask_mm3": "841.318176",
   "note": "embryo head; mask includes eyes and skin (whole head)",
   "dwi_raw": {
    "src": "sub-18ChickE20/dwi/sub-18ChickE20_dwi.nii",
    "shape": [
     106,
     120,
     73,
     35
    ],
    "vox": [
     0.15,
     0.1509,
     0.1507
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.86
   }
  },
  {
   "id": "sub-19ChickenP7",
   "label": "Chicken, P7",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-19ChickenP7/anat/sub-19ChickenP7_run-01_T2w.nii.gz",
     "shape": [
      134,
      161,
      241
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-19ChickenP7/anat/sub-19ChickenP7_run-02_T2w.nii.gz",
     "shape": [
      134,
      237,
      167
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-19ChickenP7/derivatives/brainmask/sub-19ChickenP7_meanb0.nii.gz",
     "shape": [
      112,
      140,
      104
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-19ChickenP7/derivatives/brainmask/sub-19ChickenP7_meandwi.nii.gz",
     "shape": [
      112,
      140,
      104
     ],
     "vox": [
      0.25,
      0.25,
      0.25
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
   "params": "sub-19ChickenP7 vox=0.25mm L=16.5662mm otsu=811.200012  n_ero=3 n_open=2 n_grow=11\nmask_mm3=1341.390625",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.25",
   "head_size_mm": "16.5662",
   "mask_mm3": "1341.390625",
   "note": "small rectangular leaks near ear/neck",
   "dwi_raw": {
    "src": "sub-19ChickenP7/dwi/sub-19ChickenP7_dwi.nii",
    "shape": [
     112,
     140,
     104,
     35
    ],
    "vox": [
     0.25,
     0.25,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.37
   }
  },
  {
   "id": "sub-20ChickenP14",
   "label": "Chicken, P14",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-20ChickenP14/anat/sub-20ChickenP14_run-01_T2w.nii.gz",
     "shape": [
      147,
      181,
      241
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-20ChickenP14/anat/sub-20ChickenP14_run-02_T2w.nii.gz",
     "shape": [
      147,
      241,
      181
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-20ChickenP14/derivatives/brainmask/sub-20ChickenP14_meanb0.nii.gz",
     "shape": [
      112,
      140,
      104
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-20ChickenP14/derivatives/brainmask/sub-20ChickenP14_meandwi.nii.gz",
     "shape": [
      112,
      140,
      104
     ],
     "vox": [
      0.25,
      0.25,
      0.25
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
   "params": "sub-20ChickenP14 vox=0.25mm L=18.5084mm otsu=1581.366699  n_ero=4 n_open=2 n_grow=12\nmask_mm3=1719.859375",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.25",
   "head_size_mm": "18.5084",
   "mask_mm3": "1719.859375",
   "note": "small leak near ear",
   "dwi_raw": {
    "src": "sub-20ChickenP14/dwi/sub-20ChickenP14_dwi.nii",
    "shape": [
     112,
     140,
     104,
     35
    ],
    "vox": [
     0.25,
     0.25,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.37
   }
  },
  {
   "id": "sub-21ChickenP21",
   "label": "Chicken, P21",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-21ChickenP21/anat/sub-21ChickenP21_T2w.nii.gz",
     "shape": [
      221,
      261,
      386
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    },
    {
     "label": "run-01_T2w",
     "src": "sub-21ChickenP21/anat/sub-21ChickenP21_run-01_T2w.nii.gz",
     "shape": [
      221,
      261,
      386
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-21ChickenP21/anat/sub-21ChickenP21_run-02_T2w.nii.gz",
     "shape": [
      221,
      401,
      251
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-21ChickenP21/derivatives/brainmask/sub-21ChickenP21_meanb0.nii.gz",
     "shape": [
      104,
      130,
      97
     ],
     "vox": [
      0.2692,
      0.2692,
      0.268
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-21ChickenP21/derivatives/brainmask/sub-21ChickenP21_meandwi.nii.gz",
     "shape": [
      104,
      130,
      97
     ],
     "vox": [
      0.2692,
      0.2692,
      0.268
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-21ChickenP21 vox=0.268834mm L=16.0295mm otsu=1572.099976  n_ero=3 n_open=2 n_grow=10\nmask_mm3=1477.073364",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.268834",
   "head_size_mm": "16.0295",
   "mask_mm3": "1477.073364",
   "note": "",
   "dwi_raw": {
    "src": "sub-21ChickenP21/dwi/sub-21ChickenP21_dwi.nii",
    "shape": [
     104,
     130,
     97,
     35
    ],
    "vox": [
     0.2692,
     0.2692,
     0.268
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.37
   }
  },
  {
   "id": "sub-22ChickenAdult",
   "label": "Chicken, adult",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-22ChickenAdult/anat/sub-22ChickenAdult_T2w.nii.gz",
     "shape": [
      113,
      100,
      95
     ],
     "vox": [
      0.4,
      0.3982,
      0.4
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-22ChickenAdult/derivatives/brainmask/sub-22ChickenAdult_meanb0.nii.gz",
     "shape": [
      113,
      100,
      95
     ],
     "vox": [
      0.4,
      0.3982,
      0.4
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-22ChickenAdult/derivatives/brainmask/sub-22ChickenAdult_meandwi.nii.gz",
     "shape": [
      113,
      100,
      95
     ],
     "vox": [
      0.4,
      0.3982,
      0.4
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
   "params": "sub-22ChickenAdult vox=0.39941mm L=18.5462mm otsu=2412.833252  n_ero=2 n_open=2 n_grow=7\nmask_mm3=2878.852539",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.39941",
   "head_size_mm": "18.5462",
   "mask_mm3": "2878.852539",
   "note": "small solid leak ventral to brain",
   "dwi_raw": {
    "src": "sub-22ChickenAdult/dwi/sub-22ChickenAdult_dwi.nii",
    "shape": [
     113,
     100,
     95,
     35
    ],
    "vox": [
     0.4,
     0.3982,
     0.4
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.91
   }
  },
  {
   "id": "sub-24CPatridge",
   "label": "Chukar partridge",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-24CPatridge/anat/sub-24CPatridge_run-01_T2w.nii.gz",
     "shape": [
      201,
      194,
      226
     ],
     "vox": [
      0.08,
      0.08,
      0.08
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-24CPatridge/anat/sub-24CPatridge_run-02_T2w.nii.gz",
     "shape": [
      201,
      226,
      194
     ],
     "vox": [
      0.08,
      0.08,
      0.08
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-24CPatridge/derivatives/brainmask/sub-24CPatridge_meanb0.nii.gz",
     "shape": [
      80,
      80,
      80
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-24CPatridge/derivatives/brainmask/sub-24CPatridge_meandwi.nii.gz",
     "shape": [
      80,
      80,
      80
     ],
     "vox": [
      0.25,
      0.25,
      0.25
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
   "params": "sub-24CPatridge vox=0.25mm L=12.7482mm otsu=1818.766724  n_ero=3 n_open=2 n_grow=9\nmask_mm3=1135.640625",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.25",
   "head_size_mm": "12.7482",
   "mask_mm3": "1135.640625",
   "note": "DWI file is byte-identical to sub-03LJFMouseAdult (dataset issue)",
   "dwi_raw": {
    "src": "sub-24CPatridge/dwi/sub-24CPatridge_dwi.nii",
    "shape": [
     80,
     80,
     80,
     35
    ],
    "vox": [
     0.25,
     0.25,
     0.25
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.48
   }
  },
  {
   "id": "sub-25LCrowAdult",
   "label": "Large-billed crow, adult",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-25LCrowAdult/anat/sub-25LCrowAdult_run-01_T2w.nii.gz",
     "shape": [
      300,
      360,
      300
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-25LCrowAdult/anat/sub-25LCrowAdult_run-02_T2w.nii.gz",
     "shape": [
      300,
      360,
      300
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-25LCrowAdult/derivatives/brainmask/sub-25LCrowAdult_meanb0.nii.gz",
     "shape": [
      190,
      190,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-25LCrowAdult/derivatives/brainmask/sub-25LCrowAdult_meandwi.nii.gz",
     "shape": [
      190,
      190,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-25LCrowAdult vox=0.2mm L=12.7873mm otsu=526.633362  n_ero=3 n_open=2 n_grow=10\nmask_mm3=1700.127930",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "12.7873",
   "mask_mm3": "1700.127930",
   "note": "jagged outline; verify extent",
   "dwi_raw": {
    "src": "sub-25LCrowAdult/dwi/sub-25LCrowAdult_dwi.nii",
    "shape": [
     190,
     190,
     150,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.32
   }
  },
  {
   "id": "sub-26NRHornbillAdult",
   "label": "Northern red-billed hornbill, adult",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-26NRHornbillAdult/anat/sub-26NRHornbillAdult_run-01_T2w.nii.gz",
     "shape": [
      201,
      254,
      247
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-26NRHornbillAdult/anat/sub-26NRHornbillAdult_run-02_T2w.nii.gz",
     "shape": [
      214,
      281,
      221
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-26NRHornbillAdult/derivatives/brainmask/sub-26NRHornbillAdult_meanb0.nii.gz",
     "shape": [
      190,
      190,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-26NRHornbillAdult/derivatives/brainmask/sub-26NRHornbillAdult_meandwi.nii.gz",
     "shape": [
      190,
      190,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-26NRHornbillAdult vox=0.2mm L=12.7873mm otsu=526.633362  n_ero=3 n_open=2 n_grow=10\nmask_mm3=1700.127930",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "12.7873",
   "mask_mm3": "1700.127930",
   "note": "DWI file is byte-identical to sub-25LCrowAdult (dataset issue); same mask",
   "dwi_raw": {
    "src": "sub-26NRHornbillAdult/dwi/sub-26NRHornbillAdult_dwi.nii",
    "shape": [
     190,
     190,
     150,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.32
   }
  },
  {
   "id": "sub-27NRHornbillAdult",
   "label": "Northern red-billed hornbill, adult",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-27NRHornbillAdult/anat/sub-27NRHornbillAdult_run-01_T2w.nii.gz",
     "shape": [
      281,
      291,
      451
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-27NRHornbillAdult/anat/sub-27NRHornbillAdult_run-02_T2w.nii.gz",
     "shape": [
      281,
      376,
      281
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-27NRHornbillAdult/derivatives/brainmask/sub-27NRHornbillAdult_meanb0.nii.gz",
     "shape": [
      225,
      200,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-27NRHornbillAdult/derivatives/brainmask/sub-27NRHornbillAdult_meandwi.nii.gz",
     "shape": [
      225,
      200,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-27NRHornbillAdult vox=0.2mm L=14.4595mm otsu=1111.500000  n_ero=4 n_open=2 n_grow=12\nmask_mm3=2770.872314",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "14.4595",
   "mask_mm3": "2770.872314",
   "note": "",
   "dwi_raw": {
    "src": "sub-27NRHornbillAdult/dwi/sub-27NRHornbillAdult_dwi.nii",
    "shape": [
     225,
     200,
     150,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.32
   }
  },
  {
   "id": "sub-28BLapwing",
   "label": "Blacksmith lapwing",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-28BLapwing/anat/sub-28BLapwing_run-01_T2w.nii.gz",
     "shape": [
      147,
      194,
      194
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-28BLapwing/anat/sub-28BLapwing_run-02_T2w.nii.gz",
     "shape": [
      147,
      194,
      194
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-28BLapwing/derivatives/brainmask/sub-28BLapwing_meanb0.nii.gz",
     "shape": [
      80,
      80,
      80
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-28BLapwing/derivatives/brainmask/sub-28BLapwing_meandwi.nii.gz",
     "shape": [
      80,
      80,
      80
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-28BLapwing vox=0.2mm L=8.82315mm otsu=4120.700195  n_ero=2 n_open=1 n_grow=7\nmask_mm3=552.280029",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "8.82315",
   "mask_mm3": "552.280029",
   "note": "slight anterior over-inclusion",
   "dwi_raw": {
    "src": "sub-28BLapwing/dwi/sub-28BLapwing_dwi.nii",
    "shape": [
     80,
     80,
     80,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.74
   }
  },
  {
   "id": "sub-29BLapwing",
   "label": "Blacksmith lapwing",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-29BLapwing/anat/sub-29BLapwing_run-01_T2w.nii.gz",
     "shape": [
      161,
      191,
      227
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-29BLapwing/anat/sub-29BLapwing_run-02_T2w.nii.gz",
     "shape": [
      161,
      234,
      201
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-29BLapwing/derivatives/brainmask/sub-29BLapwing_meanb0.nii.gz",
     "shape": [
      109,
      109,
      91
     ],
     "vox": [
      0.2752,
      0.2752,
      0.2747
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-29BLapwing/derivatives/brainmask/sub-29BLapwing_meandwi.nii.gz",
     "shape": [
      109,
      109,
      91
     ],
     "vox": [
      0.2752,
      0.2752,
      0.2747
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-29BLapwing vox=0.275061mm L=13.9952mm otsu=2427.366699  n_ero=3 n_open=2 n_grow=9\nmask_mm3=1639.258423",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.275061",
   "head_size_mm": "13.9952",
   "mask_mm3": "1639.258423",
   "note": "",
   "dwi_raw": {
    "src": "sub-29BLapwing/dwi/sub-29BLapwing_dwi.nii",
    "shape": [
     109,
     109,
     91,
     35
    ],
    "vox": [
     0.2752,
     0.2752,
     0.2747
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.84
   }
  },
  {
   "id": "sub-30MDuck",
   "label": "Mandarin duck",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-30MDuck/anat/sub-30MDuck_run-01_T2w.nii.gz",
     "shape": [
      181,
      196,
      196
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-30MDuck/anat/sub-30MDuck_run-02_T2w.nii.gz",
     "shape": [
      181,
      196,
      186
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-30MDuck/derivatives/brainmask/sub-30MDuck_meanb0.nii.gz",
     "shape": [
      107,
      107,
      100
     ],
     "vox": [
      0.1794,
      0.1794,
      0.18
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-30MDuck/derivatives/brainmask/sub-30MDuck_meandwi.nii.gz",
     "shape": [
      107,
      107,
      100
     ],
     "vox": [
      0.1794,
      0.1794,
      0.18
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-30MDuck vox=0.179626mm L=10.9767mm otsu=2571.166748  n_ero=3 n_open=2 n_grow=10\nmask_mm3=1069.423218",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.179626",
   "head_size_mm": "10.9767",
   "mask_mm3": "1069.423218",
   "note": "",
   "dwi_raw": {
    "src": "sub-30MDuck/dwi/sub-30MDuck_dwi.nii",
    "shape": [
     107,
     107,
     100,
     35
    ],
    "vox": [
     0.1794,
     0.1794,
     0.18
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.77
   }
  },
  {
   "id": "sub-31MDuck",
   "label": "Mandarin duck",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-31MDuck/anat/sub-31MDuck_run-01_T2w.nii.gz",
     "shape": [
      171,
      231,
      236
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-31MDuck/anat/sub-31MDuck_run-02_T2w.nii.gz",
     "shape": [
      171,
      241,
      216
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-31MDuck/derivatives/brainmask/sub-31MDuck_meanb0.nii.gz",
     "shape": [
      109,
      109,
      91
     ],
     "vox": [
      0.2752,
      0.2752,
      0.2747
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-31MDuck/derivatives/brainmask/sub-31MDuck_meandwi.nii.gz",
     "shape": [
      109,
      109,
      91
     ],
     "vox": [
      0.2752,
      0.2752,
      0.2747
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-31MDuck vox=0.275061mm L=13.9952mm otsu=2427.366699  n_ero=3 n_open=2 n_grow=9\nmask_mm3=1639.258423",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.275061",
   "head_size_mm": "13.9952",
   "mask_mm3": "1639.258423",
   "note": "DWI file is byte-identical to sub-29BLapwing (dataset issue); same mask",
   "dwi_raw": {
    "src": "sub-31MDuck/dwi/sub-31MDuck_dwi.nii",
    "shape": [
     109,
     109,
     91,
     35
    ],
    "vox": [
     0.2752,
     0.2752,
     0.2747
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.84
   }
  },
  {
   "id": "sub-32Mallard",
   "label": "Mallard",
   "class": "bird",
   "label_guess": false,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-32Mallard/anat/sub-32Mallard_run-01_T2w.nii.gz",
     "shape": [
      301,
      436,
      561
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-32Mallard/anat/sub-32Mallard_run-02_T2w.nii.gz",
     "shape": [
      301,
      521,
      481
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-32Mallard/derivatives/brainmask/sub-32Mallard_meanb0.nii.gz",
     "shape": [
      225,
      200,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-32Mallard/derivatives/brainmask/sub-32Mallard_meandwi.nii.gz",
     "shape": [
      225,
      200,
      150
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-32Mallard vox=0.2mm L=17.2994mm otsu=717.133362  n_ero=4 n_open=3 n_grow=14\nmask_mm3=3251.672363",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "17.2994",
   "mask_mm3": "3251.672363",
   "note": "small ventral leak",
   "dwi_raw": {
    "src": "sub-32Mallard/dwi/sub-32Mallard_dwi.nii",
    "shape": [
     225,
     200,
     150,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.32
   }
  },
  {
   "id": "sub-33BStilt",
   "label": "Black-winged stilt",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-33BStilt/anat/sub-33BStilt_run-01_T2w.nii.gz",
     "shape": [
      201,
      231,
      231
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-33BStilt/anat/sub-33BStilt_run-02_T2w.nii.gz",
     "shape": [
      201,
      241,
      211
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-33BStilt/derivatives/brainmask/sub-33BStilt_meanb0.nii.gz",
     "shape": [
      115,
      115,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-33BStilt/derivatives/brainmask/sub-33BStilt_meandwi.nii.gz",
     "shape": [
      115,
      115,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-33BStilt vox=0.2mm L=11.4706mm otsu=3833.233398  n_ero=3 n_open=2 n_grow=9\nmask_mm3=1140.703979",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "11.4706",
   "mask_mm3": "1140.703979",
   "note": "ventral leak",
   "dwi_raw": {
    "src": "sub-33BStilt/dwi/sub-33BStilt_dwi.nii",
    "shape": [
     115,
     115,
     100,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.48
   }
  },
  {
   "id": "sub-34BStilt",
   "label": "Black-winged stilt",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-34BStilt/anat/sub-34BStilt_run-01_T2w.nii.gz",
     "shape": [
      201,
      256,
      266
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-34BStilt/anat/sub-34BStilt_run-02_T2w.nii.gz",
     "shape": [
      191,
      266,
      246
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-34BStilt/derivatives/brainmask/sub-34BStilt_meanb0.nii.gz",
     "shape": [
      115,
      115,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-34BStilt/derivatives/brainmask/sub-34BStilt_meandwi.nii.gz",
     "shape": [
      115,
      115,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-34BStilt vox=0.2mm L=11.278mm otsu=2342.066650  n_ero=3 n_open=2 n_grow=9\nmask_mm3=765.328064",
   "status": "FAIL",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "11.278",
   "mask_mm3": "765.328064",
   "note": "heavy leaks into surrounding tissue",
   "dwi_raw": {
    "src": "sub-34BStilt/dwi/sub-34BStilt_dwi.nii",
    "shape": [
     115,
     115,
     100,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.48
   }
  },
  {
   "id": "sub-35TToucanAdult",
   "label": "Toco toucan, adult",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-35TToucanAdult/anat/sub-35TToucanAdult_run-01_T2w.nii.gz",
     "shape": [
      374,
      287,
      281
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-35TToucanAdult/anat/sub-35TToucanAdult_run-02_T2w.nii.gz",
     "shape": [
      374,
      287,
      281
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-35TToucanAdult/derivatives/brainmask/sub-35TToucanAdult_meanb0.nii.gz",
     "shape": [
      116,
      80,
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
     "src": "sub-35TToucanAdult/derivatives/brainmask/sub-35TToucanAdult_meandwi.nii.gz",
     "shape": [
      116,
      80,
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-35TToucanAdult vox=0.5mm L=19.6784mm otsu=2231.733398  n_ero=2 n_open=1 n_grow=6\nmask_mm3=6101.375000",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.5",
   "head_size_mm": "19.6784",
   "mask_mm3": "6101.375000",
   "note": "",
   "dwi_raw": {
    "src": "sub-35TToucanAdult/dwi/sub-35TToucanAdult_dwi.nii",
    "shape": [
     116,
     80,
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
    "bmax": 2002.93
   }
  },
  {
   "id": "sub-36BHeronAdult",
   "label": "Boat-billed heron, adult",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-36BHeronAdult/anat/sub-36BHeronAdult_run-01_T2w.nii.gz",
     "shape": [
      221,
      176,
      216
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-36BHeronAdult/anat/sub-36BHeronAdult_run-02_T2w.nii.gz",
     "shape": [
      221,
      211,
      191
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-36BHeronAdult/derivatives/brainmask/sub-36BHeronAdult_meanb0.nii.gz",
     "shape": [
      113,
      100,
      95
     ],
     "vox": [
      0.4,
      0.3982,
      0.4
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-36BHeronAdult/derivatives/brainmask/sub-36BHeronAdult_meandwi.nii.gz",
     "shape": [
      113,
      100,
      95
     ],
     "vox": [
      0.4,
      0.3982,
      0.4
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-36BHeronAdult vox=0.39941mm L=19.8955mm otsu=1797.233276  n_ero=2 n_open=2 n_grow=8\nmask_mm3=6320.961426",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.39941",
   "head_size_mm": "19.8955",
   "mask_mm3": "6320.961426",
   "note": "",
   "dwi_raw": {
    "src": "sub-36BHeronAdult/dwi/sub-36BHeronAdult_dwi.nii",
    "shape": [
     113,
     100,
     95,
     35
    ],
    "vox": [
     0.4,
     0.3982,
     0.4
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.91
   }
  },
  {
   "id": "sub-37GPenguin",
   "label": "Gentoo penguin",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-37GPenguin/anat/sub-37GPenguin_run-01_T2w.nii.gz",
     "shape": [
      174,
      187,
      187
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-37GPenguin/anat/sub-37GPenguin_run-02_T2w.nii.gz",
     "shape": [
      174,
      187,
      194
     ],
     "vox": [
      0.15,
      0.15,
      0.15
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-37GPenguin/derivatives/brainmask/sub-37GPenguin_meanb0.nii.gz",
     "shape": [
      103,
      112,
      103
     ],
     "vox": [
      0.2485,
      0.25,
      0.2485
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-37GPenguin/derivatives/brainmask/sub-37GPenguin_meandwi.nii.gz",
     "shape": [
      103,
      112,
      103
     ],
     "vox": [
      0.2485,
      0.25,
      0.2485
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-37GPenguin vox=0.249029mm L=15.3689mm otsu=3405.433350  n_ero=3 n_open=2 n_grow=10\nmask_mm3=2241.196045",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.249029",
   "head_size_mm": "15.3689",
   "mask_mm3": "2241.196045",
   "note": "reference subject used to tune parameters",
   "dwi_raw": {
    "src": "sub-37GPenguin/dwi/sub-37GPenguin_dwi.nii",
    "shape": [
     103,
     112,
     103,
     35
    ],
    "vox": [
     0.2485,
     0.25,
     0.2485
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.85
   }
  },
  {
   "id": "sub-38HPenguin1w",
   "label": "Humboldt penguin, 1 week",
   "class": "bird",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-38HPenguin1w/anat/sub-38HPenguin1w_T2w.nii.gz",
     "shape": [
      161,
      178,
      195
     ],
     "vox": [
      0.175,
      0.175,
      0.175
     ],
     "png": "anat_T2w.png"
    },
    {
     "label": "run-01_T2w",
     "src": "sub-38HPenguin1w/anat/sub-38HPenguin1w_run-01_T2w.nii.gz",
     "shape": [
      161,
      178,
      195
     ],
     "vox": [
      0.175,
      0.175,
      0.175
     ],
     "png": "anat_run-01_T2w.png"
    },
    {
     "label": "run-02_T2w",
     "src": "sub-38HPenguin1w/anat/sub-38HPenguin1w_run-02_T2w.nii.gz",
     "shape": [
      161,
      212,
      195
     ],
     "vox": [
      0.175,
      0.175,
      0.175
     ],
     "png": "anat_run-02_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-38HPenguin1w/derivatives/brainmask/sub-38HPenguin1w_meanb0.nii.gz",
     "shape": [
      160,
      170,
      145
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-38HPenguin1w/derivatives/brainmask/sub-38HPenguin1w_meandwi.nii.gz",
     "shape": [
      160,
      170,
      145
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-38HPenguin1w vox=0.2mm L=15.7203mm otsu=2808.699951  n_ero=4 n_open=3 n_grow=13\nmask_mm3=3444.376221",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "15.7203",
   "mask_mm3": "3444.376221",
   "note": "possible extension into neck",
   "dwi_raw": {
    "src": "sub-38HPenguin1w/dwi/sub-38HPenguin1w_dwi.nii",
    "shape": [
     160,
     170,
     145,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.33
   }
  },
  {
   "id": "sub-39JFSalamander",
   "label": "Japanese fire-bellied salamander (newt)",
   "class": "amphibian",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-39JFSalamander/anat/sub-39JFSalamander_T2w.nii.gz",
     "shape": [
      170,
      200,
      93
     ],
     "vox": [
      0.0753,
      0.075,
      0.0753
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-39JFSalamander/derivatives/brainmask/sub-39JFSalamander_meanb0.nii.gz",
     "shape": [
      86,
      100,
      47
     ],
     "vox": [
      0.15,
      0.1488,
      0.1489
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-39JFSalamander/derivatives/brainmask/sub-39JFSalamander_meandwi.nii.gz",
     "shape": [
      86,
      100,
      47
     ],
     "vox": [
      0.15,
      0.1488,
      0.1489
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
   "params": "sub-39JFSalamander vox=0.149258mm L=4.16358mm otsu=2608.266602  n_ero=1 n_open=1 n_grow=4\nmask_mm3=21.004519",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.149258",
   "head_size_mm": "4.16358",
   "mask_mm3": "21.004519",
   "note": "includes olfactory/nasal region anteriorly",
   "dwi_raw": {
    "src": "sub-39JFSalamander/dwi/sub-39JFSalamander_dwi.nii",
    "shape": [
     86,
     100,
     47,
     35
    ],
    "vox": [
     0.15,
     0.1488,
     0.1489
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.37
   }
  },
  {
   "id": "sub-40MGGeckoAdult",
   "label": "Madagascar ground gecko, adult",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-40MGGeckoAdult/anat/sub-40MGGeckoAdult_T2w.nii.gz",
     "shape": [
      116,
      170,
      93
     ],
     "vox": [
      0.0754,
      0.0753,
      0.0753
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-40MGGeckoAdult/derivatives/brainmask/sub-40MGGeckoAdult_meanb0.nii.gz",
     "shape": [
      59,
      86,
      47
     ],
     "vox": [
      0.1488,
      0.1483,
      0.1489
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-40MGGeckoAdult/derivatives/brainmask/sub-40MGGeckoAdult_meandwi.nii.gz",
     "shape": [
      59,
      86,
      47
     ],
     "vox": [
      0.1488,
      0.1483,
      0.1489
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
   "params": "sub-40MGGeckoAdult vox=0.148693mm L=3.63766mm otsu=3637.266602  n_ero=1 n_open=1 n_grow=4\nmask_mm3=24.219048",
   "status": "MINOR",
   "mode": "head",
   "voxel_mm": "0.148693",
   "head_size_mm": "3.63766",
   "mask_mm3": "24.219048",
   "note": "includes some spinal cord",
   "dwi_raw": {
    "src": "sub-40MGGeckoAdult/dwi/sub-40MGGeckoAdult_dwi.nii",
    "shape": [
     59,
     86,
     47,
     35
    ],
    "vox": [
     0.1488,
     0.1483,
     0.1489
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2002.37
   }
  },
  {
   "id": "sub-41CSTurtle",
   "label": "Chinese softshell turtle",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "run-01_T2w",
     "src": "sub-41CSTurtle/anat/sub-41CSTurtle_run-01_T2w.nii.gz",
     "shape": [
      141,
      247,
      127
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
     "src": "sub-41CSTurtle/anat/sub-41CSTurtle_run-02_T2w.nii.gz",
     "shape": [
      161,
      129,
      243
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
     "src": "sub-41CSTurtle/derivatives/brainmask/sub-41CSTurtle_meanb0.nii.gz",
     "shape": [
      54,
      86,
      54
     ],
     "vox": [
      0.1488,
      0.1481,
      0.1481
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-41CSTurtle/derivatives/brainmask/sub-41CSTurtle_meandwi.nii.gz",
     "shape": [
      54,
      86,
      54
     ],
     "vox": [
      0.1488,
      0.1481,
      0.1481
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
   "params": "sub-41CSTurtle vox=0.148378mm L=4.75853mm otsu=3395.800049  n_ero=2 n_open=1 n_grow=6\nmask_mm3=48.212475",
   "status": "CHECK",
   "mode": "head",
   "voxel_mm": "0.148378",
   "head_size_mm": "4.75853",
   "mask_mm3": "48.212475",
   "note": "jagged; small brain, verify visually",
   "dwi_raw": {
    "src": "sub-41CSTurtle/dwi/sub-41CSTurtle_dwi.nii",
    "shape": [
     54,
     86,
     54,
     65
    ],
    "vox": [
     0.1488,
     0.1481,
     0.1481
    ],
    "n_b0": 5,
    "n_dwi": 60,
    "bmax": 2004.21
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
  },
  {
   "id": "sub-43Hagfish",
   "label": "Hagfish",
   "class": "fish",
   "label_guess": false,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-43Hagfish/anat/sub-43Hagfish_T2w.nii.gz",
     "shape": [
      220,
      360,
      200
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-43Hagfish/derivatives/brainmask/sub-43Hagfish_meanb0.nii.gz",
     "shape": [
      110,
      180,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-43Hagfish/derivatives/brainmask/sub-43Hagfish_meandwi.nii.gz",
     "shape": [
      110,
      180,
      100
     ],
     "vox": [
      0.2,
      0.2,
      0.2
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
   "params": "sub-43Hagfish vox=0.2mm L=6.99254mm otsu=1755.066650  n_ero=2 n_open=1 n_grow=6\nmask_mm3=93.944008",
   "status": "CHECK",
   "mode": "head",
   "voxel_mm": "0.2",
   "head_size_mm": "6.99254",
   "mask_mm3": "93.944008",
   "note": "tiny mask; verify visually",
   "dwi_raw": {
    "src": "sub-43Hagfish/dwi/sub-43Hagfish_dwi.nii",
    "shape": [
     110,
     180,
     100,
     35
    ],
    "vox": [
     0.2,
     0.2,
     0.2
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.48
   }
  },
  {
   "id": "sub-44BDragon",
   "label": "Bearded dragon",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-44BDragon/anat/sub-44BDragon_T2w.nii.gz",
     "shape": [
      240,
      340,
      160
     ],
     "vox": [
      0.0542,
      0.0471,
      0.0625
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-44BDragon/derivatives/brainmask/sub-44BDragon_meanb0.nii.gz",
     "shape": [
      130,
      160,
      100
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-44BDragon/derivatives/brainmask/sub-44BDragon_meandwi.nii.gz",
     "shape": [
      130,
      160,
      100
     ],
     "vox": [
      0.1,
      0.1,
      0.1
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-44BDragon vox=0.1mm L=4.56292mm otsu=0.378976  n_ero=2 n_open=2 n_grow=7\nmask_mm3=72.844002",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.1",
   "head_size_mm": "4.56292",
   "mask_mm3": "72.844002",
   "note": "",
   "dwi_raw": {
    "src": "sub-44BDragon/dwi/sub-44BDragon_dwi.nii",
    "shape": [
     130,
     160,
     100,
     35
    ],
    "vox": [
     0.1,
     0.1,
     0.1
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.95052595669
   }
  },
  {
   "id": "sub-45JRaccoonDog",
   "label": "Japanese raccoon dog",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-45JRaccoonDog/anat/sub-45JRaccoonDog_T2w.nii.gz",
     "shape": [
      307,
      400,
      233
     ],
     "vox": [
      0.1498,
      0.15,
      0.1502
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-45JRaccoonDog/derivatives/brainmask/sub-45JRaccoonDog_meanb0.nii.gz",
     "shape": [
      115,
      150,
      88
     ],
     "vox": [
      0.4,
      0.4,
      0.3977
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-45JRaccoonDog/derivatives/brainmask/sub-45JRaccoonDog_meandwi.nii.gz",
     "shape": [
      115,
      150,
      88
     ],
     "vox": [
      0.4,
      0.4,
      0.3977
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-45JRaccoonDog mode=brain seed=none vox=0.399242mm L=30.0604mm otsu=736.171326  n_ero=4 n_open=2 n_grow=12\nmask_mm3=25634.300781",
   "status": "PASS",
   "mode": "brain",
   "voxel_mm": "0.399242",
   "head_size_mm": "30.0604",
   "mask_mm3": "25634.300781",
   "note": "excised brain; brain mode",
   "dwi_raw": {
    "src": "sub-45JRaccoonDog/dwi/sub-45JRaccoonDog_dwi.nii",
    "shape": [
     115,
     150,
     88,
     35
    ],
    "vox": [
     0.4,
     0.4,
     0.3977
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2008.7873452595966
   }
  },
  {
   "id": "sub-46MPalmCivet",
   "label": "Masked palm civet",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-46MPalmCivet/anat/sub-46MPalmCivet_T2w.nii.gz",
     "shape": [
      350,
      600,
      320
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-46MPalmCivet/derivatives/brainmask/sub-46MPalmCivet_meanb0.nii.gz",
     "shape": [
      117,
      200,
      107
     ],
     "vox": [
      0.2991,
      0.3,
      0.2991
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-46MPalmCivet/derivatives/brainmask/sub-46MPalmCivet_meandwi.nii.gz",
     "shape": [
      117,
      200,
      107
     ],
     "vox": [
      0.2991,
      0.3,
      0.2991
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
   "params": "sub-46MPalmCivet mode=brain seed=none vox=0.299404mm L=25.8069mm otsu=447.711731  n_ero=4 n_open=3 n_grow=14\nmask_mm3=6351.724609",
   "status": "MINOR",
   "mode": "brain",
   "voxel_mm": "0.299404",
   "head_size_mm": "25.8069",
   "mask_mm3": "6351.724609",
   "note": "excised brain; brain mode; cerebellum not included",
   "dwi_raw": {
    "src": "sub-46MPalmCivet/dwi/sub-46MPalmCivet_dwi.nii",
    "shape": [
     117,
     200,
     107,
     35
    ],
    "vox": [
     0.2991,
     0.3,
     0.2991
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2017.9987650064236
   }
  },
  {
   "id": "sub-47CGecko",
   "label": "Crested gecko",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-47CGecko/anat/sub-47CGecko_T2w.nii.gz",
     "shape": [
      240,
      340,
      160
     ],
     "vox": [
      0.05,
      0.05,
      0.05
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-47CGecko/derivatives/brainmask/sub-47CGecko_meanb0.nii.gz",
     "shape": [
      120,
      170,
      80
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-47CGecko/derivatives/brainmask/sub-47CGecko_meandwi.nii.gz",
     "shape": [
      120,
      170,
      80
     ],
     "vox": [
      0.1,
      0.1,
      0.1
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-47CGecko vox=0.1mm L=3.83706mm otsu=0.580242  n_ero=2 n_open=1 n_grow=6\nmask_mm3=35.389004",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.1",
   "head_size_mm": "3.83706",
   "mask_mm3": "35.389004",
   "note": "",
   "dwi_raw": {
    "src": "sub-47CGecko/dwi/sub-47CGecko_dwi.nii",
    "shape": [
     120,
     170,
     80,
     35
    ],
    "vox": [
     0.1,
     0.1,
     0.1
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2004.18839082972
   }
  },
  {
   "id": "sub-48PChameleon",
   "label": "Panther chameleon",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-48PChameleon/anat/sub-48PChameleon_T2w.nii.gz",
     "shape": [
      360,
      512,
      400
     ],
     "vox": [
      0.05,
      0.05,
      0.05
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-48PChameleon/derivatives/brainmask/sub-48PChameleon_meanb0.nii.gz",
     "shape": [
      180,
      256,
      200
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-48PChameleon/derivatives/brainmask/sub-48PChameleon_meandwi.nii.gz",
     "shape": [
      180,
      256,
      200
     ],
     "vox": [
      0.1,
      0.1,
      0.1
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-48PChameleon vox=0.1mm L=5.13509mm otsu=0.026892  n_ero=3 n_open=2 n_grow=9\nmask_mm3=92.127998",
   "status": "PASS",
   "mode": "head",
   "voxel_mm": "0.1",
   "head_size_mm": "5.13509",
   "mask_mm3": "92.127998",
   "note": "",
   "dwi_raw": {
    "src": "sub-48PChameleon/dwi/sub-48PChameleon_dwi.nii.gz",
    "shape": [
     180,
     256,
     200,
     35
    ],
    "vox": [
     0.1,
     0.1,
     0.1
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.47525160558
   }
  },
  {
   "id": "sub-49PChameleon",
   "label": "Panther chameleon",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-49PChameleon/anat/sub-49PChameleon_T2w.nii.gz",
     "shape": [
      360,
      512,
      400
     ],
     "vox": [
      0.05,
      0.05,
      0.05
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-49PChameleon/derivatives/brainmask/sub-49PChameleon_meanb0.nii.gz",
     "shape": [
      180,
      256,
      200
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-49PChameleon/derivatives/brainmask/sub-49PChameleon_meandwi.nii.gz",
     "shape": [
      180,
      256,
      200
     ],
     "vox": [
      0.1,
      0.1,
      0.1
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
   "params": "sub-49PChameleon vox=0.1mm L=4.63497mm otsu=0.020187  n_ero=2 n_open=2 n_grow=7\nmask_mm3=20.562000",
   "status": "CHECK",
   "mode": "head",
   "voxel_mm": "0.1",
   "head_size_mm": "4.63497",
   "mask_mm3": "20.562000",
   "note": "noisy data; small mask, verify visually",
   "dwi_raw": {
    "src": "sub-49PChameleon/dwi/sub-49PChameleon_dwi.nii.gz",
    "shape": [
     180,
     256,
     200,
     35
    ],
    "vox": [
     0.1,
     0.1,
     0.1
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.47525160558
   }
  },
  {
   "id": "sub-50JRFox",
   "label": "Japanese red fox",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-50JRFox/anat/sub-50JRFox_T2w.nii.gz",
     "shape": [
      350,
      600,
      320
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-50JRFox/derivatives/brainmask/sub-50JRFox_meanb0.nii.gz",
     "shape": [
      125,
      195,
      95
     ],
     "vox": [
      0.4,
      0.4,
      0.4
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-50JRFox/derivatives/brainmask/sub-50JRFox_meandwi.nii.gz",
     "shape": [
      125,
      195,
      95
     ],
     "vox": [
      0.4,
      0.4,
      0.4
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
   "params": "sub-50JRFox mode=brain seed=none vox=0.4mm L=35.2884mm otsu=351.519897  n_ero=4 n_open=3 n_grow=14\nmask_mm3=38015.167969",
   "status": "FAIL",
   "mode": "brain",
   "voxel_mm": "0.4",
   "head_size_mm": "35.2884",
   "mask_mm3": "38015.167969",
   "note": "excised brain; strong intensity gradient; brain mode still fragmented",
   "dwi_raw": {
    "src": "sub-50JRFox/dwi/sub-50JRFox_dwi.nii.gz",
    "shape": [
     125,
     195,
     95,
     35
    ],
    "vox": [
     0.4,
     0.4,
     0.4
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2008.5578099546244
   }
  },
  {
   "id": "sub-51JBoar",
   "label": "Japanese wild boar",
   "class": "mammal",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-51JBoar/anat/sub-51JBoar_T2w.nii.gz",
     "shape": [
      256,
      320,
      200
     ],
     "vox": [
      0.25,
      0.25,
      0.25
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-51JBoar/derivatives/brainmask/sub-51JBoar_meanb0.nii.gz",
     "shape": [
      128,
      160,
      100
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
     "src": "sub-51JBoar/derivatives/brainmask/sub-51JBoar_meandwi.nii.gz",
     "shape": [
      128,
      160,
      100
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
   },
   "params": "sub-51JBoar mode=brain seed=none vox=0.5mm L=41.9085mm otsu=240.067245  n_ero=4 n_open=3 n_grow=13\nmask_mm3=63692.625000",
   "status": "PASS",
   "mode": "brain",
   "voxel_mm": "0.5",
   "head_size_mm": "41.9085",
   "mask_mm3": "63692.625000",
   "note": "excised brain; brain mode",
   "dwi_raw": {
    "src": "sub-51JBoar/dwi/sub-51JBoar_dwi.nii.gz",
    "shape": [
     128,
     160,
     100,
     35
    ],
    "vox": [
     0.5,
     0.5,
     0.5
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2004.206536102282
   }
  },
  {
   "id": "sub-52JSSnake",
   "label": "Japanese striped snake",
   "class": "reptile",
   "label_guess": true,
   "anat": [
    {
     "label": "T2w",
     "src": "sub-52JSSnake/anat/sub-52JSSnake_T2w.nii.gz",
     "shape": [
      200,
      343,
      128
     ],
     "vox": [
      0.075,
      0.0746,
      0.075
     ],
     "png": "anat_T2w.png"
    }
   ],
   "dwi": [
    {
     "label": "mean b0 (b<100)",
     "src": "sub-52JSSnake/derivatives/brainmask/sub-52JSSnake_meanb0.nii.gz",
     "shape": [
      150,
      256,
      96
     ],
     "vox": [
      0.1,
      0.1,
      0.1
     ],
     "png": "dwi_meanb0.png"
    },
    {
     "label": "mean DWI (b>1500)",
     "src": "sub-52JSSnake/derivatives/brainmask/sub-52JSSnake_meandwi.nii.gz",
     "shape": [
      150,
      256,
      96
     ],
     "vox": [
      0.1,
      0.1,
      0.1
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
   "params": "sub-52JSSnake vox=0.1mm L=4.81909mm otsu=0.207307  n_ero=2 n_open=2 n_grow=8\nmask_mm3=44.707005",
   "status": "CHECK",
   "mode": "head",
   "voxel_mm": "0.1",
   "head_size_mm": "4.81909",
   "mask_mm3": "44.707005",
   "note": "elongated mask along head; verify extent",
   "dwi_raw": {
    "src": "sub-52JSSnake/dwi/sub-52JSSnake_dwi.nii.gz",
    "shape": [
     150,
     256,
     96,
     35
    ],
    "vox": [
     0.1,
     0.1,
     0.1
    ],
    "n_b0": 5,
    "n_dwi": 30,
    "bmax": 2003.99015956064
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
    "white_rev_mp4": "glass_white_rev.mp4",
    "black_png": "glass_black.png",
    "black_mp4": "glass_black.mp4",
    "black_rev_mp4": "glass_black_rev.mp4"
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
  }
 ]
};
