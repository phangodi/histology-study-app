# 🤖 PROMPT FOR CLAUDE AI - SLIDE GENERATION

**Use this prompt after uploading the 3 documentation files to Claude AI.**

---

## 📋 FILES TO UPLOAD FIRST

Before using this prompt, upload these 3 files to Claude AI:

1. **EXAM_ESSENTIALS_VISUALIZATION.md** - Format-specific display specifications
2. **UPDATED_HISTOLOGY_AUTOMATION_GUIDE.md** - Complete automation guide with visual specs
3. **UPDATED_MASTER_PROMPT_Histology_Generation.md** - Master generation instructions

---

## 🎯 PROMPT FOR CLAUDE AI

```
I need you to generate histology slide content for my 3-format study app (Hierarchical, Quick Cards, Relationships).

STEP 1: Read and understand these 3 documentation files I've uploaded:
- EXAM_ESSENTIALS_VISUALIZATION.md (format specifications)
- UPDATED_HISTOLOGY_AUTOMATION_GUIDE.md (complete automation guide)
- UPDATED_MASTER_PROMPT_Histology_Generation.md (generation instructions)

STEP 2: Follow these CRITICAL requirements for all slides:

**Data Structure:**
✅ examEssentialStructures with grouped, layers, additional arrays
✅ Nested children: support both strings AND objects {name, description, relationship, clinicalNote, children}
✅ All layer fields: name, level, wraps, appearance, composition, contains, function, quickID, cnsEquivalent
✅ aroundOrOutside array for adipocytes
✅ insideTheFascicles array for fibrocytes

**School's Essential List Order (MANDATORY):**
1. Bundle of Nerve Fibers (with nested children)
2. Endoneurium
3. Perineurium
4. Epineurium (with adipocytes as sublayer INSIDE)
5. Fibrocytes

**Format Requirements:**
✅ Hierarchical: Numbered cards (1-5), NO red badges on cards, nested structures with RenderNestedStructure
✅ Quick Cards: White bg, BLACK text, NO emojis, NO "EXAM ESSENTIALS" header, adipocytes INSIDE Epineurium card
✅ Relationships: **ADAPTIVE to tissue type** - detects peripheral nerve vs other tissues, adapts box labels accordingly
  - Peripheral Nerve: "INSIDE FASCICLES" / "AROUND FASCICLES" / "OUTSIDE FASCICLES"
  - Other Tissues: "MAIN COMPONENTS" / "SUPPORTING LAYERS" / "ADDITIONAL STRUCTURES"

**DO NOT Generate:**
❌ Ultra-Minimal content (format disabled)
❌ Red "⭐ ESSENTIAL" badges on individual cards
❌ Emojis/pictograms in Quick Cards
❌ "EXAM ESSENTIALS" header banner in Quick Cards

**Required Fields:**
✅ criticalRelationships (min 3-4 sections with 5-color rotation)
✅ relationshipsSummary (2-4 concise summaries for Relationships format)
✅ bigPicture (concise sentence)
✅ hierarchy (3 strings with arrows)

STEP 3: When I request a slide, generate a complete JavaScript object following the schema exactly.

I'm ready. What slide number would you like me to generate?
```

---

## 📝 EXAMPLE USAGE

**You say to Claude:**
> Generate Slide 70

**Claude will:**
1. Search the school's essential list PDF for Slide 70 structures
2. Generate a complete JavaScript object with all required fields
3. Follow the school's essential list order
4. Support nested children with infinite depth
5. Place adipocytes INSIDE Epineurium (not as separate card)
6. Include all layer fields (nothing hidden)
7. Output raw JavaScript (no markdown blocks)

---

## ✅ VALIDATION AFTER GENERATION

After Claude generates a slide, verify:

**Data Structure:**
- [ ] examEssentialStructures has grouped, layers, additional
- [ ] Layers array has ALL fields (name, level, wraps, appearance, composition, contains, function, quickID, cnsEquivalent)
- [ ] aroundOrOutside has adipocytes
- [ ] insideTheFascicles has fibrocytes

**Order:**
- [ ] Bundle → Endoneurium → Perineurium → Epineurium → Fibrocytes

**Nested Children:**
- [ ] Objects have {name, description, relationship, clinicalNote, children}
- [ ] OR strings for simple cases
- [ ] Backwards compatible

**Critical Relationships:**
- [ ] 3-4 sections minimum
- [ ] 5-color rotation will be applied by UI
- [ ] (HIGH-YIELD!) or (EXAM FAVORITE!) tags in titles

**Format Compatibility:**
- [ ] Will work with Hierarchical (numbered cards, no red badges)
- [ ] Will work with Quick Cards (white bg, black text, no emojis)
- [ ] Will work with Relationships (three colored boxes)

---

## 🔧 TROUBLESHOOTING

**If Claude generates Ultra-Minimal content:**
- Remind: "Ultra-Minimal format is disabled. Do not generate ultraMinimalFacts."

**If adipocytes appear as separate card:**
- Remind: "Adipocytes must be in additional array with details in aroundOrOutside. They display as sublayer INSIDE Epineurium card."

**If nested children are only strings:**
- This is OK for simple structures
- For complex nesting (axon → myelin → node of Ranvier), use object format

**If layer fields are missing:**
- Remind: "ALL layer fields must be populated. Nothing is hidden. Generate: name, level, wraps, appearance, composition, contains, function, quickID, cnsEquivalent."

**If red badges mentioned:**
- Remind: "NO red '⭐ ESSENTIAL' badges on individual cards. Only header has red badge."

---

## 💡 TIPS FOR BEST RESULTS

1. **Be specific:** "Generate Slide 70" or "Generate Slide 73"
2. **Use nested format:** For structures like bundle → axon → myelin → node of Ranvier
3. **Complete data:** Generate all fields even if some formats don't display them
4. **Medical accuracy:** Use proper histological terminology
5. **Exam focus:** Include high-yield relationships and clinical correlations

---

**This prompt ensures Claude AI generates content that's 100% compatible with your redesigned 3-format system!**
