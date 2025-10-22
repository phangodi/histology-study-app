# MASTER PROMPT: Histology Slide Content Generation

## 📋 OBJECTIVE
Generate a complete JavaScript object for a histology slide with comprehensive exam-ready content, including staining information, all layers, CNS equivalents, and common mistakes.

## 🎯 INSTRUCTIONS FOR CLAUDE

### STEP 1: Read the Automation Guide
**First action:** Read `/mnt/skills/user/HISTOLOGY_AUTOMATION_GUIDE.md` OR the uploaded `HISTOLOGY_AUTOMATION_GUIDE.md` file to understand the complete schema and requirements.

### STEP 2: Identify the Slide
Search the MTO PDF (`School_s_essential_list_that_includes_all_the_slides_and_essential_structures_on_the_MTO_.pdf`) for the requested slide number to extract:
- Full slide name
- Stain type
- ALL listed structures (including sub-structures with hyphens)

### STEP 3: Find Relevant Documents
Use `OFFICIAL_MTO_DIRECTORY.md` to identify which PDF files contain information about this slide.

### STEP 4: Research Content
1. Search the identified PDF files for detailed information
2. **CRITICAL:** Use general histology knowledge to supplement if documents are incomplete
3. Ensure all mandatory elements are included (see checklist below)

### STEP 5: Generate Complete Object
Create a complete JavaScript object following the exact schema in the Automation Guide.

---

## ⚠️ MANDATORY INCLUSIONS (Check every time!)

### ✅ For EVERY Slide:
- [ ] **Complete staining information** (technique, mechanism, what it stains in THIS slide, key emphasis)
- [ ] **All structures from MTO list**
- [ ] **Minimum 3 identification tips per structure**
- [ ] **Minimum 2 common mistakes per structure**
- [ ] **Critical relationships section**
- [ ] **At least 5 overall identification tips**
- [ ] **Related structures**

### ✅ For Slides with LAYERS:
- [ ] **ALL layers included in `layers` array** (not in essentialStructures)
- [ ] Each layer has: name, level, composition, appearance, function, quickID
- [ ] For nerve slides: Include wraps, contains, CNS equivalent

### ✅ For Nervous System Slides:
- [ ] **CNS equivalents included** (Endoneurium=Pia, Perineurium=Arachnoid, Epineurium=Dura)
- [ ] Blood-nerve barrier information (if peripheral nerve)
- [ ] Gray vs white matter distinction (if CNS)

### ✅ For Slides with Size Distinctions:
- [ ] **Size comparisons** (e.g., myelin spaces vs adipocytes)
- [ ] Clear differentiation in identification tips

---

## 📊 OUTPUT REQUIREMENTS

### Format:
- Output ONLY the JavaScript object
- No explanatory text before or after
- Use double quotes (not single quotes)
- Proper comma placement
- No line breaks within strings

### Content Quality:
- **Specific colors, shapes, patterns** (not vague descriptions)
- **Practical identification focus** (not academic theory)
- **Exam-oriented** (high-yield information prioritized)
- **Complete even if documents lack info** (use histology knowledge)

---

## 🎓 SLIDE-SPECIFIC GUIDELINES

### **Peripheral Nerve Slides (70-73):**
```javascript
{
  // MUST include:
  stainingInfo: {
    // Explain why myelin appears white in HE (lipids dissolved)
    // or black in OsO₄ (osmium stains lipids)
  },
  layers: [
    // ALL 3 layers: Endoneurium, Perineurium, Epineurium
    // Each with CNS equivalent
  ],
  criticalRelationships: [
    {
      title: "CNS-PNS Transition",
      // Explain Endo→Pia, Peri→Arachnoid, Epi→Dura
    },
    {
      title: "Size Comparison: Myelin vs Adipocytes",
      // Explain how to differentiate
    }
  ]
}
```

### **Skin Slides (with sensory endings):**
```javascript
{
  layers: [
    // ALL 5 epidermal layers if visible
    // Both dermis layers (papillary, reticular)
  ],
  essentialStructures: [
    // Receptor structure
    // Its specific location in dermis
  ]
}
```

### **CNS Slides (Brain, Spinal Cord):**
```javascript
{
  layers: [
    // ALL cortical layers (6 for cerebral, 3 for cerebellar)
  ],
  essentialStructures: [
    // Specific neuron types in each layer
    // Gray vs white matter
  ],
  criticalRelationships: [
    // Functional organization
    // Layer-specific functions
  ]
}
```

### **Ganglion Slides:**
```javascript
{
  essentialStructures: [
    // Neuron cell body characteristics
    // Nucleus type (euchromatic vs heterochromatic)
    // Nissl bodies/tigroid granules
    // Satellite cells
    // Capsule
  ]
}
```

---

## 🔍 EXAMPLE: Complete Object Structure

```javascript
{
  slideNumber: "70",
  name: "Peripheral Nerve (HE)",
  section: "cross section",
  stain: "HE",
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains basophilic structures (nuclei) blue/purple. Eosin stains acidophilic structures (cytoplasm, collagen) pink/red.",
    whatItStainsInThisSlide: [
      "Nuclei (Schwann cells, fibroblasts) → Blue/purple",
      "Cytoplasm and connective tissue → Pink",
      "Axons → Pink (when visible)",
      "Myelin sheath → WHITE SPACE (lipids dissolved)"
    ],
    keyEmphasis: "Emphasizes connective tissue organization (3 CT layers) and nuclear detail. Myelin appears as negative space creating characteristic honeycomb pattern."
  },

  layers: [
    {
      name: "Endoneurium",
      level: "Innermost layer",
      wraps: "Individual nerve fiber (1 axon + myelin + Schwann cell)",
      composition: "Delicate loose CT with reticular fibers",
      appearance: "Very thin pink tissue between individual nerve fibers within fascicle",
      contains: "Capillaries, fibroblast nuclei",
      cnsEquivalent: "Pia mater (transition zone at nerve roots)",
      function: "Supports individual nerve fibers; provides microenvironment",
      quickID: "Thinnest layer, inside bundles, between individual fibers"
    },
    // ... include Perineurium and Epineurium
  ],

  essentialStructures: [
    {
      name: "Bundle of Nerve Fibers (Fascicle)",
      definition: "Group of multiple myelinated nerve fibers bundled together and surrounded by perineurium",
      location: "Multiple circular/oval bundles visible throughout cross-section",
      appearance: "Circular to oval with honeycomb pattern - white circles (myelin) with pink centers (axons)",
      function: "Organizes nerve fibers into functional groups",
      identificationTips: [
        "Look for honeycomb pattern (KEY feature)",
        "Each bundle has distinct perineurium rim",
        "Multiple bundles per nerve",
        "Bundles vary in size"
      ],
      commonMistakes: [
        "Confusing single fiber with entire fascicle",
        "Not recognizing perineurium boundary"
      ]
    },
    // ... include all other essential structures
  ],

  relatedStructures: [
    {
      name: "Blood Vessels (Vasa Nervorum)",
      description: "Small arterioles and capillaries supplying the nerve. Found in epineurium and endoneurium."
    }
  ],

  criticalRelationships: [
    {
      title: "CNS-PNS Transition (EXAM FAVORITE!)",
      content: "At nerve roots, CT layers transition to meninges:",
      details: [
        "Endoneurium → Pia mater",
        "Perineurium → Arachnoidea",
        "Epineurium → Dura mater"
      ],
      emphasis: "Same 3-layer protection pattern - HIGH-YIELD!"
    },
    {
      title: "Size Hierarchy",
      content: "Understanding nesting order:",
      details: [
        "1 Axon → wrapped by Endoneurium",
        "Many axons = Fascicle → wrapped by Perineurium",
        "Many fascicles = Nerve → wrapped by Epineurium"
      ]
    },
    {
      title: "Myelin vs Adipocytes",
      content: "Both appear white, but:",
      details: [
        "Myelin: Small circles, inside fascicles, honeycomb",
        "Adipocytes: Large spaces, in epineurium, scattered"
      ],
      emphasis: "SIZE and LOCATION are key!"
    }
  ],

  identificationTips: [
    "Start by finding fascicles (honeycomb pattern)",
    "Identify 3 CT layers: Endo (thin) → Peri (rim) → Epi (thick)",
    "White spaces inside bundles = myelin; outside = adipocytes",
    "Count pattern: honeycomb + distinct rim + thick coat",
    "Size difference: myelin small/uniform, adipocytes large/variable"
  ]
}
```

---

## 🚨 COMMON ERRORS TO AVOID

### ❌ DON'T:
- Give generic staining information (be specific to the slide!)
- Skip layers (they're mandatory!)
- Miss CNS equivalents for nervous tissue
- Forget common mistakes
- Use vague descriptions ("appears different", "varies")
- Only rely on project documents (supplement with knowledge!)
- Include layers in essentialStructures array (use layers array!)

### ✅ DO:
- Be specific with colors, shapes, patterns
- Include all layers in dedicated layers array
- Always mention CNS equivalents for nerve structures
- List concrete common mistakes
- Use comparative descriptions (larger than X, similar to Y)
- Supplement project docs with general histology knowledge
- Focus on practical exam identification

---

## 📝 USAGE EXAMPLES

### Example 1: Basic Request
**User:** "Generate Slide 74"

**Claude Response:**
```javascript
{
  slideNumber: "74",
  name: "Sensory Ganglion (HE)",
  section: null,
  stain: "HE",
  stainingInfo: { /* complete info */ },
  layers: [], // No layers for ganglion
  essentialStructures: [ /* all structures with complete details */ ],
  relatedStructures: [ /* related items */ ],
  criticalRelationships: [ /* relationships */ ],
  identificationTips: [ /* at least 5 tips */ ]
}
```

### Example 2: With Special Instructions
**User:** "Generate Slide 82. Focus on layer organization."

**Claude Response:**
```javascript
{
  slideNumber: "82",
  name: "Cerebellum (HE)",
  // ... standard fields ...
  layers: [
    // ALL 3 cerebellar layers with detailed info
  ],
  criticalRelationships: [
    {
      title: "Layer Organization",
      // Detailed layer-by-layer organization
    }
  ]
}
```

---

## 🎯 FINAL CHECKLIST BEFORE OUTPUT

1. [ ] Read HISTOLOGY_AUTOMATION_GUIDE.md ✓
2. [ ] Searched MTO PDF for slide ✓
3. [ ] Checked OFFICIAL_MTO_DIRECTORY.md ✓
4. [ ] Searched relevant project files ✓
5. [ ] Supplemented with general knowledge ✓
6. [ ] All mandatory sections included ✓
7. [ ] Staining info specific to THIS slide ✓
8. [ ] All layers included (if applicable) ✓
9. [ ] CNS equivalents noted (if nervous tissue) ✓
10. [ ] Minimum 3 tips per structure ✓
11. [ ] Minimum 2 mistakes per structure ✓
12. [ ] Critical relationships section complete ✓
13. [ ] Proper JavaScript syntax ✓
14. [ ] Output is ONLY the JavaScript object ✓

---

## 💡 REMEMBER

**The goal is EXAM SUCCESS, not academic perfection.**
- Focus on practical identification
- Include high-yield information
- Make it comprehensive enough to pass the exam
- Don't just transcribe project documents - ADD essential knowledge!

**Quality over speed:**
- Take time to ensure completeness
- Double-check all mandatory elements
- Verify CNS equivalents for nerve structures
- Confirm all layers are included

**Consistency is key:**
- Every slide should be equally comprehensive
- Follow the same pattern every time
- Maintain the same level of detail

---

**READY TO GENERATE? Just say: "Generate Slide [NUMBER]"**
