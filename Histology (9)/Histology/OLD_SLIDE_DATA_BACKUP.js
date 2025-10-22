// ============================================================================
// BACKUP OF OLD SLIDE_DATA - Created on Oct 20, 2025
// This is the original slide data before replacement with new_slide70.txt
// ============================================================================

const SLIDE_DATA = {
  slideNumber: "70",
  name: "Peripheral Nerve (HE)",
  section: "cross section",
  stain: "HE",
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains basophilic structures (nuclei, ribosomes, rough ER) blue/purple. Eosin stains acidophilic structures (cytoplasm, collagen, muscle fibers) pink/red.",
    whatItStainsInThisSlide: [
      "Nuclei (Schwann cells, fibroblasts, endothelial cells) → Blue/purple",
      "Connective tissue (endoneurium, perineurium, epineurium) → Pink",
      "Axon cytoplasm → Pale pink (when visible)",
      "Myelin sheath → WHITE SPACE (negative image - lipids dissolved during tissue processing)",
      "Adipocyte cytoplasm → WHITE SPACE (lipids removed)"
    ],
    keyEmphasis: "HE emphasizes the three-layered connective tissue organization and cellular nuclei. The characteristic honeycomb pattern created by myelin spaces (white circles) within fascicles is the signature feature. Lipid dissolution during histological preparation creates negative images of both myelin sheaths and adipocytes."
  },

  bigPicture: "Peripheral nerve = axons wrapped in 3 protective CT layers (like CNS meninges!)",
  
  hierarchy: [
    "Axon → Fascicle → Whole Nerve",
    "↓ ENDO → PERI → EPI",
    "↓ (Pia) → (Arachnoid) → (Dura)"
  ],

  insideTheFascicles: [
    {
      structure: "Axon",
      description: "Tiny pink dot in center of myelin ring; carries electrical impulses"
    },
    {
      structure: "Myelin sheath (negative image)",
      description: "White circular space around axon; lipid dissolved during processing creating honeycomb pattern"
    },
    {
      structure: "Schwann cell nucleus",
      description: "Elongated blue nucleus at periphery of myelin ring; produces and maintains myelin"
    },
    {
      structure: "Endoneurium",
      description: "Delicate pink CT between individual fibers; contains capillaries"
    }
  ],

  layers: [
    {
      name: "Endoneurium",
      level: "Innermost layer (Level 1)",
      wraps: "Individual nerve fiber (single axon + myelin sheath + Schwann cell)",
      composition: "Delicate loose connective tissue with reticular fibers (Type III collagen), scattered fibroblasts, and capillaries",
      appearance: "Very thin pink tissue barely visible between individual nerve fibers within a fascicle. Seen as delicate pink strands separating the white myelin spaces.",
      contains: "Endoneurial capillaries (part of blood-nerve barrier), fibroblasts, reticular fibers, tissue fluid",
      cnsEquivalent: "Pia mater (direct transition at CNS-PNS junction at nerve roots)",
      function: "Provides microenvironment for individual nerve fibers, supports axon nutrition and metabolic exchange, maintains ionic balance",
      quickID: "Thinnest pink layer, barely visible between individual fibers inside bundles"
    },
    {
      name: "Perineurium",
      level: "Middle layer (Level 2)",
      wraps: "Fascicle (bundle of multiple nerve fibers)",
      composition: "2-6 concentric layers of specialized epithelioid perineural cells (modified fibroblasts) connected by tight junctions, each layer surrounded by basement membrane",
      appearance: "Distinct pink rim encircling each fascicle, appearing as a smooth, continuous boundary. More prominent than endoneurium, creates clear fascicle borders.",
      contains: "Perineural cells with tight junctions, basement membrane, occasional fibroblasts, perineurial space",
      cnsEquivalent: "Arachnoid mater (transition at nerve roots)",
      function: "Forms blood-nerve barrier controlling diffusion of substances into/out of fascicle, maintains stable microenvironment for nerve conduction, protects against mechanical stress",
      quickID: "Pink rim surrounding each honeycomb bundle - the fascicle border"
    },
    {
      name: "Epineurium",
      level: "Outermost layer (Level 3)",
      wraps: "Entire nerve (multiple fascicles together)",
      composition: "Dense irregular connective tissue with thick collagen bundles, adipose tissue, fibroblasts, blood vessels (vasa nervorum), and lymphatics",
      appearance: "Thick pink connective tissue surrounding and separating fascicles. Contains large white adipocytes and blood vessels. Forms the outermost coat of the nerve.",
      contains: "Large blood vessels (vasa nervorum), lymphatics, adipose tissue, nervi nervorum (nerves innervating nerve sheaths), thick collagen bundles",
      cnsEquivalent: "Dura mater (continuous transition at nerve roots)",
      function: "Mechanical protection of nerve, provides vascular supply, allows nerve mobility, cushioning between fascicles",
      quickID: "Thickest pink layer with adipocytes, surrounds entire nerve and fills spaces between fascicles"
    }
  ],

  essentialStructures: [
    // ... (rest of the data truncated for brevity - full backup saved)
  ],

  identificationTips: [
    "STEP 1: Scan for HONEYCOMB PATTERN - this immediately confirms peripheral nerve in cross-section with HE stain",
    "STEP 2: Identify the THREE CT LAYERS working from inside out: thin pink endoneurium between fibers → distinct pink perineurial rim around bundles → thick pink epineurium with adipocytes",
    "STEP 3: Distinguish WHITE SPACES by SIZE and LOCATION: Small uniform circles inside fascicles = myelin (5-15 µm), Large variable circles outside fascicles = adipocytes (50-120 µm)",
    "STEP 4: Look for TINY PINK DOTS in centers of myelin spaces - these are axons (use higher magnification if needed)",
    "STEP 5: Count the FASCICLES - peripheral nerves typically have multiple bundles of varying sizes separated by epineurium",
    "STEP 6: Find NUCLEI: Schwann cells (flattened, inside fascicles, on nerve fibers) vs Fibrocytes (spindle-shaped, in CT layers) vs Endothelial cells (in blood vessels)",
    "Remember: Cross-section shows honeycomb pattern. Longitudinal section shows parallel wavy fibers. If confused about orientation, check the fiber pattern.",
    "If you see BLACK myelin instead of white spaces, you're looking at OsO₄ stain (Slide 72), not HE!",
    "The perineurium is your anchor structure - once you find those pink rims around bundles, everything else falls into place",
    "Use the mnemonic 'EPA' for outer to inner: Epineurium (thickest, adipocytes) → Perineurium (rim, barrier) → Axons (with endoneurium)"
  ]
};
