# MASTER PROMPT: Histology Slide Content Generation v4.0
**Updated for 3-format study app (Hierarchical, Quick Cards, Relationships)**
**Last Updated:** October 21, 2025

---

## 📋 OBJECTIVE

Generate a complete JavaScript object for a histology slide with comprehensive exam-ready content optimized for 3 study formats:
1. **Hierarchical** - Complete learning format with numbered cards
2. **Quick Cards** - Clean flashcards for memorization
3. **Relationships** - Spatial organization and connections

---

## 🚨 CRITICAL: SCHOOL'S ESSENTIAL LIST STRUCTURE

**MANDATORY ORDER for all peripheral nerve slides:**
1. **Bundle of Nerve Fibers** (with nested children: axon → myelin → node of Ranvier)
2. **Endoneurium** 
3. **Perineurium**
4. **Epineurium** (with adipocytes as sublayer INSIDE)
5. **Fibrocytes**

This order reflects the school's official exam essential list and **MUST be followed exactly**.

---

## 📊 EXAM ESSENTIALS DATA STRUCTURE

### **examEssentialStructures (MANDATORY)**

```javascript
examEssentialStructures: {
  grouped: [{
    parent: "bundle of nerve fibers",
    where: "Inside each fascicle...",              // REQUIRED for Quick Cards
    appearance: "Honeycomb pattern...",            // REQUIRED for Quick Cards  
    function: "Conducts electrical impulses...",   // REQUIRED for Quick Cards
    quickID: "Look for honeycomb pattern...",      // REQUIRED for Quick Cards
    children: [
      // NEW NESTED FORMAT (supports infinite depth 6-8+ levels):
      {
        name: "axon",                              // REQUIRED
        description: "Central fiber...",           // REQUIRED
        relationship: "core of nerve fiber",       // OPTIONAL → yellow badge
        clinicalNote: "Disrupted in neuropathy",   // OPTIONAL → red box
        children: [                                // OPTIONAL → recursive nesting
          {
            name: "myelin sheath",
            description: "Insulating layer...",
            children: [
              {
                name: "node of Ranvier",
                description: "Gaps between segments",
                relationship: "GAP in myelin sheath",
                clinicalNote: "Disrupted in MS, Guillain-Barré"
              }
            ]
          }
        ]
      },
      // OLD FORMAT (backwards compatible):
      "axon", "myelin sheath", "Schwann cells"
    ]
  }],
  layers: ["endoneurium", "perineurium", "epineurium"],  // REQUIRED - order matters!
  additional: ["fibrocytes", "adipocytes"]                // OPTIONAL
}
```

**KEY POINTS:**
- `children` can be **strings** (simple) OR **objects** (nested with infinite depth)
- Object format: `{name, description, relationship, clinicalNote, children}`
- All formats detect type: `typeof child === 'object' && child.name`
- Hierarchical & Quick Cards use `RenderNestedStructure/RenderNestedChild` components
- **Order in layers array determines display numbering**

---

### **layers Array (ALL FIELDS DISPLAYED)**

```javascript
layers: [{
  name: "Endoneurium",                     // REQUIRED
  level: "Innermost layer (Level 1)",     // REQUIRED - shown in all formats
  wraps: "Individual nerve fiber",         // REQUIRED - shown in all formats
  appearance: "Very thin pink tissue...",  // REQUIRED - shown in all formats
  composition: "Delicate loose CT...",     // OPTIONAL - shown if present
  contains: "Capillaries, fibroblasts",    // OPTIONAL - shown if present
  function: "Provides microenvironment",   // OPTIONAL - shown if present
  quickID: "Thinnest pink layer...",       // OPTIONAL - shown if present
  cnsEquivalent: "Pia mater"               // OPTIONAL - shown in blue if present
}]
```

**CRITICAL:** ALL fields are displayed in Hierarchical and Quick Cards. Nothing is hidden.

---

### **aroundOrOutside Array (FOR ADIPOCYTES)**

```javascript
aroundOrOutside: [{
  structure: "Adipocytes",                               // REQUIRED
  description: "Large white circular spaces (negative image of lipid content); much larger than myelin profiles",  // REQUIRED
  function: "Energy storage and cushioning",             // OPTIONAL
  spotIt: "Look for large white circles..."              // OPTIONAL
}]
```

**USAGE:**
- **Hierarchical:** Shows description, function, spotIt in sublayer box under Epineurium
- **Quick Cards:** Shows description only in "FOUND WITHIN EPINEURIUM" section inside Epineurium card
- **Relationships:** Shows function in OUTSIDE FASCICLES section

---

### **insideTheFascicles Array (FOR FIBROCYTES)**

```javascript
insideTheFascicles: [{
  structure: "Fibroblast nuclei (Fibrocytes)",
  description: "Scattered elongated blue nuclei in endoneurium...",
  function: "Maintain CT...",
  keyFeature: "Support cells",
  spotIt: "Small dark nuclei..."
}]
```

---

## 🎨 FORMAT-SPECIFIC REQUIREMENTS

### **1. HIERARCHICAL FORMAT**

**Section Order:**
1. Staining Info (purple gradient)
2. **EXAM ESSENTIALS** (white bg, red border-4)
3. Big Picture (blue-indigo gradient) 
4. Critical Relationships (5-color rotation)

**EXAM ESSENTIALS Section:**
- **Header:** Red badge with "⭐ EXAM ESSENTIALS"
- **NO red badges on individual cards** (removed for cleaner design)
- **Numbered sequential cards:** 1, 2, 3, 4, 5...
- **Color coding:**
  - Bundle (#1) → Blue (`from-blue-50 to-blue-100`, `border-blue-500`)
  - Endoneurium (#2) → Pink
  - Perineurium (#3) → Orange
  - Epineurium (#4) → Green
  - Fibrocytes (#5) → Cyan

**Nested Children:**
- Uses `RenderNestedStructure` component
- White boxes: `bg-white/70 rounded-lg p-4 shadow`
- Depth bullets: `bg-blue-600` → `bg-blue-500` → `bg-blue-400`
- Connecting lines: `border-l-2 border-gray-400 pl-4`
- Relationship badges: `bg-yellow-100 text-yellow-900`
- Clinical notes: `bg-red-50 text-red-700`
- **Infinite depth support** (6-8+ levels)

**Layer Cards:**
- ALL fields displayed: Level, Wraps, Appearance, Composition, Contains, Function, Quick ID, CNS Equivalent
- Adipocytes shown as sublayer INSIDE Epineurium card

**Big Picture:**
- Gradient: `from-blue-600 via-blue-700 to-indigo-800`
- Large white message card with `text-2xl font-bold`
- Optional slide-specific visual insights

**Critical Relationships:**
- 5-color rotation: Red → Blue → Green → Purple → Orange
- Numbered badges matching card color
- Auto-badges: "HIGH-YIELD" (always), "🎯 EXAM FAVORITE" (if "EXAM" in title)
- "WHY CRITICAL" box with 💡 icon

---

### **2. QUICK CARDS FORMAT**

**DESIGN PHILOSOPHY:**
- **WHITE backgrounds** with subtle colored borders
- **BLACK text** everywhere (`text-gray-900`, `text-gray-800`)
- **NO emojis/pictograms** (all removed)
- **NO "EXAM ESSENTIALS" header banner**
- **Pastel section backgrounds** (`bg-blue-50`, `bg-pink-50`)
- **Professional, readable, easy on eyes**

**Card Structure:**
```
<div className="bg-white border-2 border-{color}-300">
  <h3>{NAME}</h3>
  Sections with bg-{color}-50 border-{color}-200
  SPOT IT box with border-{color}-400
</div>
```

**Bundle Card Sections:** WHERE, LOOKS LIKE, CONTAINS, FUNCTION, SPOT IT

**CONTAINS Section:**
- Uses `RenderNestedChild` component for recursive nesting
- Gray boxes: `bg-gray-50 rounded-lg p-3 border border-gray-200`
- Relationship badges: `bg-yellow-100 text-yellow-900`
- Infinite depth support

**Layer Card Sections:** WRAPS, LOOKS LIKE, KEY FEATURE, CNS=, SPOT IT

**ADIPOCYTES PLACEMENT (CRITICAL):**
- Shown INSIDE Epineurium card frame (NOT separate card)
- New section: "FOUND WITHIN EPINEURIUM:"
- Same pastel green background as other Epineurium sections
- White box: `bg-white rounded-lg p-2 border border-gray-300`
- Format: **Adipocytes:** {description}

**Color Borders:**
- Bundle → `border-blue-300`
- Endoneurium → `border-pink-300`
- Perineurium → `border-orange-300`
- Epineurium → `border-green-300`
- Fibrocytes → `border-cyan-300`

---

### **3. RELATIONSHIPS FORMAT**

**Section Order:**
1. Staining Context
2. EXAM ESSENTIALS - WHERE & HOW THEY RELATE (3 colored boxes)
3. Nested Structure Visualization (concentric boxes)
4. Relationship Matrix Table
5. Size Comparison
6. Relationships Summary (optional)

**EXAM ESSENTIALS Section:**
- Three colored boxes: INSIDE / AROUND / OUTSIDE FASCICLES
- Handles both string and object children gracefully
- Uses safe accessors (`safeVal`, `safe`)

**Data Requirements:**
- Uses `examEssentialStructures` for all content
- Falls back to `insideTheFascicles` for Bundle appearance if missing
- Uses `layers` array for layer details
- Uses `aroundOrOutside` for adipocytes

---

## 🚨 MANDATORY INCLUSIONS

### **For EVERY Slide:**
- [ ] `slideNumber`, `name`, `section`, `stain`
- [ ] `examEssentialStructures` (grouped, layers, additional)
- [ ] `layers` array with ALL fields
- [ ] `insideTheFascicles` array (for fibrocytes)
- [ ] `aroundOrOutside` array (for adipocytes)
- [ ] `stainingInfo` (complete)
- [ ] `bigPicture` string (concise)
- [ ] `hierarchy` array (3 strings with arrows)
- [ ] `criticalRelationships` (minimum 3-4 sections)
- [ ] `relationshipsSummary` (2-4 concise summaries)
- [ ] `keyIdentifyingFeatures` (4-5 features)
- [ ] `commonMistakes` (4-5 mistakes)

### **For Nervous System Slides:**
- [ ] CNS equivalents in all layers
- [ ] Blood-nerve barrier information
- [ ] Hierarchy arrows showing layer transitions

---

## 📝 CRITICAL RELATIONSHIPS

**Field:** `criticalRelationships` (array of objects)

**THIS IS MANDATORY** - minimum 3-4 sections per slide

```javascript
criticalRelationships: [{
  title: "CNS-PNS Transition (HIGH-YIELD!)",       // REQUIRED with tag
  content: "1-2 sentence explanation...",          // REQUIRED
  details: [                                        // REQUIRED - 4-6 items
    "Endoneurium → Pia mater",
    "Perineurium → Arachnoid mater",
    "Epineurium → Dura mater",
    // More details...
  ],
  emphasis: "Why this is critical for exams..."    // OPTIONAL
}]
```

**Display:**
- 5-color rotation with numbered badges
- Auto-badges: "HIGH-YIELD", "🎯 EXAM FAVORITE"
- "WHY CRITICAL" box if emphasis present

---

## 📝 RELATIONSHIPS SUMMARY

**Field:** `relationshipsSummary` (array of objects)

**DIFFERENT from criticalRelationships** - concise version for Relationships format

```javascript
relationshipsSummary: [{
  title: "CNS-PNS Transition (HIGH-YIELD!)",
  summary: "Brief 1-2 sentence overview (under 150 chars)",
  keyPoints: [
    "Point 1 (under 80 chars)",
    "Point 2 (under 80 chars)",
    "Point 3 (under 80 chars)"
  ]
}]
```

**Requirements:**
- 2-4 summaries (fewer than criticalRelationships)
- REWRITTEN to be concise (NOT copy/paste)
- Focus on exam-critical connections only

---

## ✅ PRE-OUTPUT VALIDATION CHECKLIST

### **Data Structure:**
- [ ] `examEssentialStructures` present with grouped, layers, additional
- [ ] `layers` array has ALL fields (name, level, wraps, appearance, composition, contains, function, quickID, cnsEquivalent)
- [ ] `aroundOrOutside` array has adipocytes with description
- [ ] `insideTheFascicles` array has fibrocytes with description
- [ ] Children can be strings OR objects with nesting

### **Nested Children (if using objects):**
- [ ] Each has `name` and `description`
- [ ] `relationship` and `clinicalNote` included when relevant
- [ ] Infinite depth supported (no arbitrary limits)
- [ ] Backwards compatible with string arrays

### **Adipocytes:**
- [ ] Listed in `additional` array
- [ ] Details in `aroundOrOutside` array
- [ ] Will be shown as sublayer under Epineurium

### **Critical Relationships:**
- [ ] Minimum 3-4 sections
- [ ] Each has title, content, details (4-6 items), optional emphasis
- [ ] Titles have (HIGH-YIELD!) or (EXAM FAVORITE!) tags
- [ ] Includes CNS-PNS connections (if nervous tissue)

### **Relationships Summary:**
- [ ] 2-4 concise summaries
- [ ] Each has title, summary (under 150 chars), keyPoints (3-4 items under 80 chars)
- [ ] Content REWRITTEN to be concise

### **Format Requirements:**
- [ ] School's essential list order (Bundle → Endo → Peri → Epi → Fibrocytes)
- [ ] ALL layer fields populated (nothing hidden)
- [ ] No Ultra-Minimal format content (format disabled)

---

## 🎯 OUTPUT FORMAT

**Output must be:**
- Raw JavaScript object starting with `const SLIDE_DATA_XX = {`
- Ending with `};`
- No markdown code blocks, no extra text
- Valid JavaScript syntax

---

## 💡 KEY PRINCIPLES

1. **School's Essential List Order** - Always follow: Bundle → Endo → Peri → Epi → Fibrocytes
2. **Nested Children Support** - Use objects with {name, description, relationship, clinicalNote, children} for structures with nesting
3. **Adipocytes Placement** - Always in `additional` array with details in `aroundOrOutside`
4. **All Fields Displayed** - Generate complete data; nothing is hidden in Hierarchical/Quick Cards
5. **Three Formats Only** - Hierarchical, Quick Cards, Relationships (Ultra-Minimal disabled)
6. **Clean Design** - Quick Cards use white backgrounds, black text, no emojis
7. **Comprehensive Learning** - Detailed content for exam success

---

## 📋 COMPLETE EXAMPLE

```javascript
const SLIDE_DATA_70 = {
  slideNumber: "70",
  name: "Peripheral Nerve (HE)",
  section: "cross section",
  stain: "HE",
  
  examEssentialStructures: {
    grouped: [{
      parent: "bundle of nerve fibers",
      where: "Inside each fascicle, creating the characteristic honeycomb pattern",
      appearance: "White circular spaces (myelin) with tiny pink dots (axons) and dark nuclei (Schwann cells)",
      function: "Conduct electrical impulses; myelin allows saltatory conduction",
      quickID: "Look for honeycomb pattern = diagnostic of nerve tissue",
      children: [
        {
          name: "axon",
          description: "Central fiber carrying electrical impulses",
          children: [{
            name: "myelin sheath",
            description: "Insulating layer enabling fast conduction",
            children: [{
              name: "node of Ranvier",
              description: "Gaps between myelin segments",
              relationship: "GAP in myelin sheath",
              clinicalNote: "Disrupted in MS, Guillain-Barré"
            }]
          }]
        },
        {
          name: "Schwann cells",
          description: "Produce and maintain myelin sheath"
        }
      ]
    }],
    layers: ["endoneurium", "perineurium", "epineurium"],
    additional: ["fibrocytes", "adipocytes"]
  },
  
  layers: [{
    name: "Endoneurium",
    level: "Innermost layer (Level 1)",
    wraps: "Individual nerve fiber",
    appearance: "Very thin pink tissue between fibers",
    composition: "Delicate loose CT with reticular fibers",
    contains: "Capillaries, fibroblasts, reticular fibers",
    function: "Provides microenvironment, supports nutrition",
    quickID: "Thinnest pink layer barely visible",
    cnsEquivalent: "Pia mater"
  }, {
    name: "Perineurium",
    level: "Middle layer (Level 2)",
    wraps: "Bundle of multiple nerve fibers (fascicle)",
    appearance: "Distinct pink rim encircling each fascicle",
    composition: "5-15 concentric layers with tight junctions",
    contains: "Perineural cells, basement membrane",
    function: "Forms blood-nerve barrier",
    quickID: "Obvious dark rim around each fascicle bundle",
    cnsEquivalent: "Arachnoid mater"
  }, {
    name: "Epineurium",
    level: "Outermost layer (Level 3)",
    wraps: "Entire nerve (all fascicles together)",
    appearance: "Thick pink CT surrounding entire nerve",
    composition: "Dense irregular CT with thick collagen",
    contains: "Blood vessels, lymphatics, adipose tissue",
    function: "Mechanical protection, vascular supply",
    quickID: "Thick outer layer with prominent large white adipocytes",
    cnsEquivalent: "Dura mater"
  }],
  
  insideTheFascicles: [{
    structure: "Fibroblast nuclei (Fibrocytes)",
    description: "Scattered elongated blue nuclei in endoneurium; maintain CT matrix, produce collagen"
  }],
  
  aroundOrOutside: [{
    structure: "Adipocytes",
    description: "Large white circular spaces (negative image of lipid content); much larger than myelin profiles, provide cushioning and energy storage"
  }],
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains nuclei blue/purple. Eosin stains cytoplasm and collagen pink/red.",
    whatItStainsInThisSlide: [
      "Nuclei (Schwann cells, fibroblasts) → Blue/purple",
      "Connective tissue (endo, peri, epi) → Pink",
      "Myelin sheath → WHITE (lipids dissolved)",
      "Adipocytes → WHITE (lipids removed)"
    ],
    keyEmphasis: "HE emphasizes three-layered CT organization. Honeycomb pattern from myelin spaces is diagnostic."
  },
  
  bigPicture: "Peripheral nerve = axons wrapped in 3 protective CT layers (like CNS meninges!)",
  
  hierarchy: [
    "Axon → Fascicle → Whole Nerve",
    "↓ ENDO → PERI → EPI",
    "↓ (Pia) → (Arachnoid) → (Dura)"
  ],
  
  criticalRelationships: [{
    title: "CNS-PNS Transition Zone (HIGH-YIELD!)",
    content: "At nerve roots, the three CT layers transition directly to the three meningeal layers",
    details: [
      "Endoneurium → Pia mater (innermost)",
      "Perineurium → Arachnoid mater (middle, barrier)",
      "Epineurium → Dura mater (outermost)",
      "Blood-nerve barrier continuous with BBB"
    ],
    emphasis: "This parallel 3-layer system is ESSENTIAL for exams!"
  }, {
    title: "Size Comparison: Myelin vs Adipocytes (CRITICAL!)",
    content: "Both appear as white spaces but are easily distinguished",
    details: [
      "MYELIN: Small (5-15 μm), inside fascicles, honeycomb",
      "ADIPOCYTES: Large (50-150 μm), in epineurium, scattered",
      "LOCATION is key: Myelin = inside, Adipocytes = outside"
    ],
    emphasis: "SIZE and LOCATION prevent confusion!"
  }],
  
  relationshipsSummary: [{
    title: "CNS-PNS Transition (HIGH-YIELD!)",
    summary: "Endo→Peri→Epi = Pia→Arachnoid→Dura at nerve roots",
    keyPoints: [
      "Direct transition ensures protection",
      "Blood-nerve barrier ↔ BBB",
      "Essential for board exams"
    ]
  }],
  
  keyIdentifyingFeatures: [
    "Honeycomb pattern inside fascicles = myelin",
    "Distinct pink rim = perineurium",
    "Large white circles outside = adipocytes",
    "Three-layer CT organization"
  ],
  
  commonMistakes: [{
    mistake: "Confusing myelin with adipocytes",
    why: "Both appear white",
    avoid: "Check SIZE and LOCATION - myelin small/inside, adipocytes large/outside"
  }]
};
```

---

**READY TO GENERATE? Use this prompt structure for all slides!**
