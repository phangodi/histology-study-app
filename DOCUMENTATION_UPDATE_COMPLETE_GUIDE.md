# 📋 COMPLETE DOCUMENTATION UPDATE GUIDE
**Status:** Ready for implementation  
**Date:** October 21, 2025

---

## 🎯 PURPOSE

This guide contains ALL information needed to update the 3 content generation documentation files to match the redesigned site. After reviewing all 3 formats (Hierarchical, Quick Cards, Relationships), here are the exact specifications for data structure and generation.

---

## ✅ FORMATS REVIEWED

1. **Hierarchical Format** - Complete with recursive nesting
2. **Quick Cards Format** - Clean design with proper nested children
3. **Relationships Format** - Validated data structure compatibility
4. **Ultra-Minimal Format** - DISABLED (only using 3 main formats)

---

## 📊 DATA STRUCTURE REQUIREMENTS

### **1. examEssentialStructures (CORE STRUCTURE)**

```javascript
examEssentialStructures: {
  grouped: [
    {
      parent: "bundle of nerve fibers",        // REQUIRED
      where: "...",                            // OPTIONAL but recommended
      appearance: "...",                       // OPTIONAL but recommended
      function: "...",                         // OPTIONAL but recommended
      quickID: "...",                          // OPTIONAL but recommended
      children: [                              // REQUIRED - Can be strings OR objects
        // NEW FORMAT (supports infinite nesting):
        {
          name: "axon",                        // REQUIRED
          description: "...",                  // REQUIRED
          level: 1,                            // OPTIONAL
          relationship: "...",                 // OPTIONAL → shows badge
          clinicalNote: "...",                 // OPTIONAL → shows red box
          children: [                          // OPTIONAL → recursive nesting
            {
              name: "myelin sheath",
              description: "...",
              children: [
                {
                  name: "node of Ranvier",
                  description: "...",
                  relationship: "GAP in myelin sheath",
                  clinicalNote: "Disrupted in MS, Guillain-Barré"
                }
              ]
            }
          ]
        },
        // OLD FORMAT (backwards compatible):
        "axon",
        "myelin sheath",
        "Schwann cells"
      ]
    }
  ],
  layers: ["endoneurium", "perineurium", "epineurium"],  // REQUIRED - Order matters!
  additional: ["fibrocytes", "adipocytes"]                // OPTIONAL
}
```

**CRITICAL NOTES:**
- `grouped[0].children` can be **strings** (old format) OR **objects** (new nested format)
- Object format enables **infinite nesting** (6-8+ levels supported)
- All 3 formats check: `typeof child === 'object' && child.name` to detect format
- **Order matters:** layers array determines display order (Endo → Peri → Epi)

---

### **2. layers Array (ALL FIELDS DISPLAYED)**

```javascript
layers: [
  {
    name: "Endoneurium",                       // REQUIRED
    level: "Innermost layer (Level 1)",       // REQUIRED - shown in all formats
    wraps: "Individual nerve fiber",           // REQUIRED - shown in all formats
    appearance: "Very thin pink tissue...",    // REQUIRED - shown in all formats
    composition: "Delicate loose CT...",       // OPTIONAL - shown if present
    contains: "Capillaries, fibroblasts",      // OPTIONAL - shown if present
    function: "Provides microenvironment",     // OPTIONAL - shown if present
    quickID: "Thinnest pink layer...",         // OPTIONAL - shown if present
    cnsEquivalent: "Pia mater"                 // OPTIONAL - shown in blue if present
  },
  // ... Perineurium, Epineurium
]
```

**CRITICAL NOTES:**
- **ALL fields are displayed** in Hierarchical and Quick Cards formats
- Relationships format uses: name, level, appearance, cnsEquivalent, function
- **Order determines numbering:** layers[0] = #2, layers[1] = #3, layers[2] = #4
- **Nothing is hidden** - generate complete data for all fields

---

### **3. aroundOrOutside Array (FOR SUBLAYERS)**

```javascript
aroundOrOutside: [
  {
    structure: "Adipocytes",                   // REQUIRED
    description: "Large white circular spaces (negative image of lipid content); much larger than myelin profiles",  // REQUIRED
    function: "Energy storage and cushioning", // OPTIONAL - shown if present
    spotIt: "Look for large white circles..."  // OPTIONAL - shown if present
  }
]
```

**USAGE:**
- Used to populate adipocytes when nested under Epineurium
- Used to populate other structures in aroundOrOutside sections
- **Hierarchical:** Shows description, function, spotIt
- **Quick Cards:** Shows description only (as sublayer)
- **Relationships:** Shows function in summary

---

### **4. insideTheFascicles Array (SUPPORTING DATA)**

```javascript
insideTheFascicles: [
  {
    structure: "Fibroblast nuclei (Fibrocytes)",  // REQUIRED
    description: "Scattered elongated blue nuclei in endoneurium; maintain CT matrix, produce collagen",  // REQUIRED
    function: "...",                               // OPTIONAL
    keyFeature: "...",                             // OPTIONAL
    spotIt: "..."                                  // OPTIONAL
  }
]
```

**USAGE:**
- Used for Fibrocytes card details
- Used as fallback for Bundle appearance if `grouped[0].appearance` missing
- Provides educational context for structures

---

### **5. bigPicture (STRING - ENHANCED IN HIERARCHICAL)**

```javascript
bigPicture: "Peripheral nerve = axons wrapped in 3 protective CT layers"
```

**HIERARCHICAL FORMAT ONLY:**
- Displayed in large white card with `text-2xl` font
- Blue-indigo gradient background
- Can trigger slide-specific KEY VISUAL INSIGHT (e.g., Slide 73 staining cards)

**SLIDE-SPECIFIC INSIGHTS:**
For certain slides (e.g., Slide 73), the UI adds special visual cards:
```javascript
// UI checks: data.slideNumber === "73"
// Then shows: ⚫ Myelin = BLACK, ⚪ Axon = WHITE, ⭕ Nodes = GAPS
```

**QUESTION:** Should we add a `bigPictureInsight` field to data for this?

---

### **6. criticalRelationships (ARRAY - HIERARCHICAL ONLY)**

```javascript
criticalRelationships: [
  {
    title: "CNS-PNS Transition (HIGH-YIELD!)",     // REQUIRED
    content: "The three layers transition...",     // REQUIRED
    details: [                                      // REQUIRED - array of strings
      "Endoneurium → Pia mater",
      "Perineurium → Arachnoid mater",
      "Epineurium → Dura mater",
      // 4-6 detail strings
    ],
    emphasis: "Why this is critical..."            // OPTIONAL - shown in "WHY CRITICAL" box
  }
]
```

**HIERARCHICAL FORMAT DISPLAY:**
- 5 rotating colors: Red → Blue → Green → Purple → Orange (repeats)
- Numbered badges (1, 2, 3...) matching card color
- Auto-detecting badges:
  - "HIGH-YIELD" (always shown, amber badge)
  - "🎯 EXAM FAVORITE" (if title contains "EXAM", red badge)
- "WHY CRITICAL" box with 💡 icon if `emphasis` present

---

### **7. relationshipsSummary (ARRAY - RELATIONSHIPS FORMAT ONLY)**

```javascript
relationshipsSummary: [
  {
    title: "Layer Protection Cascade",
    summary: "Brief italic explanation",
    keyPoints: [
      "Point 1",
      "Point 2",
      "Point 3"
    ]
  }
]
```

**RELATIONSHIPS FORMAT ONLY:**
- Optional field
- Shown at bottom as "🔑 CRITICAL RELATIONSHIPS"
- Blue cards with white boxes

---

## 🎨 VISUAL DESIGN SPECIFICATIONS

### **HIERARCHICAL FORMAT**

**Exam Essentials Section:**
- White background with red border: `border-4 border-red-500`
- Numbered sequential cards (1, 2, 3, 4...)
- Color scheme:
  - Bundle (#1) → Blue (`from-blue-50 to-blue-100`, `border-blue-500`)
  - Endoneurium (#2) → Pink (`from-pink-50 to-pink-100`, `border-pink-500`)
  - Perineurium (#3) → Orange (`from-orange-50 to-orange-100`, `border-orange-500`)
  - Epineurium (#4) → Green (`from-green-50 to-green-100`, `border-green-500`)
  - Additional (#5+) → Gray (if needed)

**Numbered Badges:**
- Circular: `w-8 h-8 rounded-full text-white font-bold`
- Color matches card border color

**Nested Children:**
- `RenderNestedStructure` component handles recursion
- White boxes: `bg-white/70 rounded-lg p-4 shadow`
- Depth indicators: blue-600 → blue-500 → blue-400 bullets
- Connecting lines: `border-l-2 border-gray-400 pl-4`
- Relationship badges: `bg-yellow-100 text-yellow-900`
- Clinical notes: `bg-red-50 text-red-700`

**Adipocytes Under Epineurium:**
- Shown as sublayer within Epineurium card
- Same white box style as nested children
- Green bullet: `bg-green-600`

**Big Picture:**
- Gradient: `from-blue-600 via-blue-700 to-indigo-800`
- Frosted glass icon badge: `bg-white/20 backdrop-blur`
- White message card: `bg-white rounded-xl p-6` with `text-2xl font-bold`
- Hierarchy boxes: `bg-white/10 backdrop-blur-sm`

**Critical Relationships:**
- Container: `from-amber-50 via-orange-50 to-yellow-50`
- 5-color rotation for cards
- Numbered badges, auto-detecting badges
- "WHY CRITICAL" emphasis box

---

### **QUICK CARDS FORMAT**

**Overall Design:**
- **NO bright gradients** - white backgrounds only
- **BLACK text** everywhere (`text-gray-900`, `text-gray-800`)
- **Subtle colored borders** for categorization
- **Pastel section backgrounds** (`bg-blue-50`, `bg-pink-50`)

**Color Scheme:**
- Bundle → `border-blue-300`, sections with `bg-blue-50 border-blue-200`
- Endoneurium → `border-pink-300`, sections with `bg-pink-50 border-pink-200`
- Perineurium → `border-orange-300`, sections with `bg-orange-50 border-orange-200`
- Epineurium → `border-green-300`, sections with `bg-green-50 border-green-200`
- Fibrocytes → `border-cyan-300`, sections with `bg-cyan-50 border-cyan-200`

**NO Pictograms/Emojis:**
- ❌ Removed all: ⚡, 🔬, ⭐, 🔹, 🌸, 📦, 🛡️, 🔴, 🧠, 🎯, ↳
- ✅ Clean text-only labels

**NO "EXAM ESSENTIALS" Header:**
- Cards start immediately with Bundle card
- No red banner section

**Card Structure:**
```javascript
<div className="bg-white border-2 border-{color}-300 rounded-xl p-6 shadow">
  <div className="mb-4">
    <h3 className="text-2xl font-black text-gray-900">{NAME}</h3>
  </div>
  <div className="space-y-3">
    <div className="bg-{color}-50 border border-{color}-200 rounded-lg p-3">
      <div className="font-bold text-sm text-gray-900 mb-1">LABEL:</div>
      <div className="text-gray-800">{content}</div>
    </div>
    // More sections...
  </div>
  <div className="mt-4 bg-{color}-100 border-2 border-{color}-400 rounded-lg p-3">
    <div className="font-bold text-sm text-gray-900">SPOT IT: {text}</div>
  </div>
</div>
```

**Nested Children in Bundle:**
- `RenderNestedChild` component (same as Hierarchical)
- Gray boxes: `bg-gray-50 rounded-lg p-3 border border-gray-200`
- Recursively renders infinite depth
- Relationship badges: `bg-yellow-100 text-yellow-900`

**Adipocytes Under Epineurium:**
- NOT a separate card
- Shown INSIDE Epineurium card frame
- New section: "FOUND WITHIN EPINEURIUM:"
- Uses same pastel background as other Epineurium sections
- White box: `bg-white rounded-lg p-2 border border-gray-300`
- Format: **Adipocytes:** {description}

---

### **RELATIONSHIPS FORMAT**

**Overall Design:**
- Uses emoji indicators (kept for this format)
- Bright colored sections for categorization
- Table-based relationship matrix
- Visual nested structure diagram

**Exam Essentials Section:**
- Yellow/orange gradient container
- Three colored boxes:
  - Blue (`bg-blue-50 border-blue-400`) → INSIDE FASCICLES
  - Orange (`bg-orange-50 border-orange-400`) → AROUND FASCICLES
  - Green (`bg-green-50 border-green-400`) → OUTSIDE FASCICLES

**Handles Both String and Object Children:**
```javascript
safe(group.children).map((child, childIdx) => (
  <div key={childIdx} className="capitalize">
    → {typeof child === 'string' ? child : child?.name || String(child)}
  </div>
))
```

**Nested Structure Visualization:**
- Concentric boxes showing layers
- Green (Epineurium) → Orange (Perineurium) → Pink (Endoneurium) → Blue (Bundle)

**Relationship Matrix Table:**
- Columns: Structure, Location, Appearance, CNS Equivalent (if present)
- Bundle row first, then layers in order
- Pastel row backgrounds match structure colors

**Data Usage:**
- Reads `examEssentialStructures` for all content
- Falls back to `insideTheFascicles` for Bundle appearance if missing
- Uses `layers` array for layer details
- Uses `aroundOrOutside` for adipocytes

---

## 🔄 BACKWARDS COMPATIBILITY

All formats support BOTH data structures:

### **Old Format (Strings):**
```javascript
children: ["axon", "myelin sheath", "Schwann cells"]
```

### **New Format (Objects with Nesting):**
```javascript
children: [
  {
    name: "axon",
    description: "...",
    children: [...]
  }
]
```

**Detection Logic:**
```javascript
const isNestedFormat = typeof child === 'object' && child.name;

if (isNestedFormat) {
  // Use recursive component
  return <RenderNestedStructure item={child} depth={0} />;
} else {
  // Simple display
  return <div>{child}</div>;
}
```

---

## 📝 GENERATION RULES FOR EACH FORMAT

### **HIERARCHICAL FORMAT**

**Must Generate:**
1. `examEssentialStructures` with `grouped`, `layers`, `additional`
2. `layers` array with ALL fields populated
3. `aroundOrOutside` array for adipocytes
4. `insideTheFascicles` array for fibrocytes
5. `bigPicture` string
6. `criticalRelationships` array (4-6 relationships)
7. `stainingInfo` object

**Children Format:**
- Use **object format** for structures with nesting (e.g., axon → myelin → node of Ranvier)
- Use **string format** for simple lists
- Include `relationship` and `clinicalNote` fields when relevant

**Display Features:**
- Shows ALL data fields (nothing hidden)
- Numbered sequential cards
- Recursive nesting with visual depth indicators
- Adipocytes as sublayer under Epineurium
- Big Picture with gradient background
- Critical Relationships with color rotation

---

### **QUICK CARDS FORMAT**

**Must Generate:**
1. `examEssentialStructures` with `grouped`, `layers`, `additional`
2. `layers` array with: name, wraps, appearance, composition, cnsEquivalent, quickID
3. `aroundOrOutside` array for adipocytes
4. `insideTheFascicles` array for fibrocytes
5. `stainingInfo` object

**Children Format:**
- Same as Hierarchical - supports both string and object formats
- Use object format for nesting

**Display Features:**
- Individual flashcards for each structure
- Clean white backgrounds with subtle borders
- NO emojis/pictograms
- NO "EXAM ESSENTIALS" header banner
- Adipocytes shown INSIDE Epineurium card as "FOUND WITHIN EPINEURIUM"
- Black text, pastel section backgrounds
- Section labels: WHERE, LOOKS LIKE, KEY FEATURE, FUNCTION, CNS=, SPOT IT

---

### **RELATIONSHIPS FORMAT**

**Must Generate:**
1. `examEssentialStructures` with `grouped`, `layers`, `additional`
2. `layers` array with: name, level, appearance, function, cnsEquivalent
3. `insideTheFascicles` array (for Bundle appearance fallback)
4. `aroundOrOutside` array for adipocytes
5. `relationshipsSummary` array (optional)

**Children Format:**
- Supports both string and object formats
- Uses `safeVal()` helper to extract names from either format

**Display Features:**
- WHERE & HOW THEY RELATE section with 3 colored boxes
- Nested structure visualization (concentric boxes)
- Relationship matrix table
- Size comparison diagrams
- Handles both formats gracefully with safe accessors

---

## ⚠️ CRITICAL IMPLEMENTATION NOTES

### **1. Adipocytes Placement**

**CORRECT:**
- ✅ Listed in `examEssentialStructures.additional`
- ✅ Details in `aroundOrOutside` array
- ✅ Shown as sublayer WITHIN Epineurium card (Hierarchical & Quick Cards)
- ✅ Shown in OUTSIDE FASCICLES section (Relationships)

**INCORRECT:**
- ❌ As separate standalone card outside Epineurium frame
- ❌ Using "CONTAINS:" label (not medically accurate)
- ❌ Full multi-section card in Quick Cards format

### **2. Nested Children**

**CORRECT:**
- ✅ Object format: `{name, description, relationship, clinicalNote, children}`
- ✅ Recursive rendering for infinite depth
- ✅ Visual connecting lines and depth indicators
- ✅ Relationship badges (yellow) and clinical notes (red)

**INCORRECT:**
- ❌ Only supporting flat string arrays
- ❌ Limited to 2-3 levels of nesting
- ❌ No visual indicators for nesting depth

### **3. Data Field Display**

**CORRECT:**
- ✅ ALL layer fields displayed in Hierarchical format
- ✅ All section content pulled from data arrays
- ✅ Smart fallbacks to alternative arrays if primary missing

**INCORRECT:**
- ❌ Hiding any layer fields
- ❌ Hardcoded content strings
- ❌ Generic fallbacks instead of data-driven content

### **4. Color and Design**

**HIERARCHICAL:**
- ✅ Gradients for Big Picture and Critical Relationships
- ✅ Numbered badges matching card colors
- ✅ Red badges removed (too distracting)

**QUICK CARDS:**
- ✅ White backgrounds, subtle borders
- ✅ BLACK text everywhere
- ✅ Pastel section backgrounds
- ✅ NO emojis/pictograms
- ✅ NO "EXAM ESSENTIALS" header

**RELATIONSHIPS:**
- ✅ Colored sections maintained
- ✅ Emojis kept for this format
- ✅ Table-based displays

---

## 📚 FILES TO UPDATE

### **1. UPDATED_MASTER_PROMPT_Histology_Generation.md**

**Sections to Update:**
- **Line ~135:** bigPicture usage → Add slide-specific insights documentation
- **Line ~210:** HIERARCHICAL FORMAT → Add numbered cards, remove red badges, add color system
- **Line ~303:** examEssentialStructures → Document nested children format, remove red badge references
- **Line ~646:** criticalRelationships → Document 5-color rotation, auto-badges
- **NEW SECTION:** Nested structure support (RenderNestedStructure, infinite depth, relationship badges, clinical notes)
- **NEW SECTION:** Quick Cards design specs (white backgrounds, black text, no emojis, adipocytes placement)

**Key Points:**
- Document BOTH string and object formats for children
- Explain how to generate nested structures (6-8+ levels)
- Specify when to use relationship and clinicalNote fields
- Document adipocytes placement (sublayer of Epineurium)
- Explain Quick Cards visual redesign (no bright colors)

---

### **2. UPDATED_HISTOLOGY_AUTOMATION_GUIDE.md**

**New Sections Needed:**
- **HIERARCHICAL FORMAT VISUAL SPEC:**
  - Color mapping table (Blue/Pink/Orange/Green)
  - Numbered badge specifications
  - Nested structure rendering rules
  - Big Picture gradient specifications
  - Critical Relationships color rotation rules

- **QUICK CARDS FORMAT VISUAL SPEC:**
  - Clean design principles (white bg, black text)
  - Border color mapping (border-blue-300, border-pink-300, etc)
  - Section background colors (bg-blue-50, etc)
  - NO emojis rule
  - NO header banner rule
  - Adipocytes integration (FOUND WITHIN EPINEURIUM)

- **RELATIONSHIPS FORMAT VISUAL SPEC:**
  - Three-box layout (INSIDE/AROUND/OUTSIDE)
  - Concentric box diagram
  - Table structure
  - Safe accessor patterns

- **NESTED CHILDREN DATA STRUCTURE:**
  - Object format specification
  - Infinite depth support (6-8+ levels)
  - Relationship badge rules
  - Clinical note rules
  - Backwards compatibility with strings

- **SUBLAYER IMPLEMENTATION:**
  - Adipocytes under Epineurium
  - Node of Ranvier under myelin
  - Data requirements from aroundOrOutside array
  - Visual nesting with border-lines

---

### **3. EXAM_ESSENTIALS_VISUALIZATION.md**

**Complete Rewrite Required:**

**HIERARCHICAL FORMAT Section (Line ~48-100):**
- ❌ DELETE: Old INSIDE/AROUND/OUTSIDE groupings
- ✅ ADD: Numbered sequential card system
- ✅ ADD: Color mapping (5 structure types → 5 colors)
- ✅ ADD: RenderNestedStructure documentation
- ✅ ADD: All data fields display requirements
- ✅ ADD: Adipocytes as sublayer example

**QUICK CARDS FORMAT Section (Line ~103-182):**
- ✅ UPDATE: Document clean design (white bg, black text)
- ✅ UPDATE: Remove emoji references
- ✅ UPDATE: Remove "EXAM ESSENTIALS" header section
- ✅ UPDATE: Document adipocytes placement (INSIDE Epineurium card)
- ✅ UPDATE: "FOUND WITHIN EPINEURIUM:" label specification
- ✅ ADD: RenderNestedChild component documentation

**RELATIONSHIPS FORMAT Section (Line ~185-231):**
- ✅ VERIFY: Current structure matches implementation
- ✅ UPDATE: Document handling of both string and object children
- ✅ UPDATE: Safe accessor usage (safeVal, safe)

**ULTRA-MINIMAL FORMAT Section:**
- ❌ REMOVE: Format is disabled

**Implementation Rules Section (Line ~299-326):**
- ✅ UPDATE: Remove old INSIDE/AROUND/OUTSIDE rules
- ✅ ADD: Numbered card rules
- ✅ ADD: Color mapping rules
- ✅ ADD: Sublayer nesting rules
- ✅ ADD: Clean design rules for Quick Cards

---

## 🎯 VALIDATION CHECKLIST

When updating documentation, verify:

### **Data Structure:**
- [ ] Documented both string and object formats for children
- [ ] Explained infinite nesting support (6-8+ levels)
- [ ] Specified all required and optional fields
- [ ] Documented adipocytes placement (additional array + aroundOrOutside details)
- [ ] Explained layer order importance
- [ ] Documented all data sources (grouped, layers, additional, insideTheFascicles, aroundOrOutside)

### **Visual Specifications:**
- [ ] Hierarchical: Numbered cards, color mapping, no red badges
- [ ] Quick Cards: White backgrounds, black text, no emojis, no header
- [ ] Relationships: Three-box layout, table structure
- [ ] All color codes specified (border-{color}-300, bg-{color}-50, etc)
- [ ] Gradient specifications for Big Picture and Critical Relationships
- [ ] Badge specifications (numbered, auto-detecting)

### **Component Behavior:**
- [ ] Documented RenderNestedStructure (Hierarchical)
- [ ] Documented RenderNestedChild (Quick Cards)
- [ ] Explained relationship badges (yellow)
- [ ] Explained clinical notes (red boxes)
- [ ] Documented adipocytes sublayer rendering
- [ ] Explained backwards compatibility checks

### **Generation Rules:**
- [ ] What data each format requires
- [ ] When to use nested object format vs strings
- [ ] When to include relationship and clinicalNote fields
- [ ] How to structure adipocytes data
- [ ] How to generate criticalRelationships (Hierarchical only)
- [ ] How to generate relationshipsSummary (Relationships only)

---

## 🚀 IMPLEMENTATION STEPS

1. **Review this guide thoroughly**
2. **Update UPDATED_MASTER_PROMPT_Histology_Generation.md** first (main generation rules)
3. **Update UPDATED_HISTOLOGY_AUTOMATION_GUIDE.md** second (visual specifications)
4. **Update EXAM_ESSENTIALS_VISUALIZATION.md** third (format-specific integration)
5. **Test with Claude** to ensure it can generate compatible content
6. **Create example slides** to validate all features work
7. **Update any template files** with new examples

---

## 📌 QUICK REFERENCE

**3 Active Formats:**
1. Hierarchical - Complete learning (numbered cards, recursive nesting, all fields)
2. Quick Cards - Flashcards (clean design, white bg, black text, no emojis)
3. Relationships - Connections (colored boxes, tables, safe accessors)

**Key Data Arrays:**
- `examEssentialStructures` → Core structure list
- `layers` → Full layer details
- `insideTheFascicles` → Supporting structures
- `aroundOrOutside` → Adipocytes and external structures

**Nested Children:**
- Object format: `{name, description, relationship, clinicalNote, children}`
- Infinite depth support
- Backwards compatible with strings

**Adipocytes:**
- Listed in `additional` array
- Details in `aroundOrOutside` array
- Shown INSIDE Epineurium card (Hierarchical & Quick Cards)
- "FOUND WITHIN EPINEURIUM:" label (Quick Cards)

---

**Status:** Documentation update guide complete! Ready to update all 3 files. 🎯
