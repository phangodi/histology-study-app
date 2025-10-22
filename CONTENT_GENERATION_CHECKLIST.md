# CONTENT GENERATION CHECKLIST ✅
**Print this and check EVERY item before submitting generated content!**

---

## 🚨 CRITICAL - CHECK FIRST!

### **`criticalRelationships` FIELD:**
- [ ] Field exists in the output
- [ ] Has AT LEAST 3-4 sections
- [ ] Each section has: `title`, `content`, `details` (4-6 items), `emphasis`
- [ ] Titles include **(HIGH-YIELD!)** or **(EXAM FAVORITE!)** tag
- [ ] Includes CNS-PNS connections (if nervous tissue)
- [ ] Includes size comparisons (if applicable)
- [ ] Includes hierarchical organization
- [ ] Includes blood-barrier info (if applicable)

**❌ If ANY checkbox above is unchecked, DO NOT SUBMIT!**

---

## 📋 MANDATORY FIELDS

### **Basic Information:**
- [ ] `slideNumber` 
- [ ] `name`
- [ ] `section`
- [ ] `stain`

### **New Required Fields (v3.0):**
- [ ] `bigPicture` (one sentence, under 100 chars)
- [ ] `hierarchy` (array of exactly 3 strings)
  - [ ] Uses → for horizontal progression
  - [ ] Uses ↓ for vertical transitions
- [ ] `insideTheFascicles` or equivalent (4-5 items)

### **Staining:**
- [ ] `stainingInfo` object complete
  - [ ] `technique`
  - [ ] `description`
  - [ ] `whatItStainsInThisSlide` (4-5 items minimum)
  - [ ] `keyEmphasis` (specific to THIS slide)

### **Layers (if applicable):**
- [ ] `layers` array with ALL layers
- [ ] Each layer has:
  - [ ] `name`
  - [ ] `level`
  - [ ] `wraps`
  - [ ] `composition`
  - [ ] `appearance`
  - [ ] `contains`
  - [ ] `cnsEquivalent` (if nervous tissue)
  - [ ] `function`
  - [ ] `quickID`

### **New Format Fields:**
- [ ] `keyIdentifyingFeatures` (4-5 features)
  - [ ] Each has: `feature`, `description`, `importance`
- [ ] `ultraMinimalFacts` object (all 5 sections)
  - [ ] `staining` (string, concise)
  - [ ] `layers` (array of bullets)
  - [ ] `visualID` (array of 4-5 bullets)
  - [ ] `cnsConnection` or `keyRelationships` (string)
  - [ ] `dontConfuse` (array of bullets)

---

## 📊 RECOMMENDED FIELDS

### **High Value:**
- [ ] `comparisonWithOtherStains` (if multiple stains exist)
- [ ] `commonMistakes` (4-5 mistakes)
  - [ ] Each has: `mistake`, `correction`
- [ ] `clinicalCorrelations` (3-4 conditions)
  - [ ] Each has: `condition`, `relevance`

### **Additional Context:**
- [ ] `functionalContext` (object with key info)
- [ ] `sizeReference` (object with measurements)
- [ ] `examTips` (5-7 practical tips)

---

## 🔍 ULTRA-MINIMAL FACTS VALIDATION

### **Section 1: staining**
- [ ] Concise (under 100 characters)
- [ ] Key fact only, not paragraph
- [ ] Example format: "HE: Myelin = WHITE (lipids dissolved!)"

### **Section 2: layers**
- [ ] Array of bullet points
- [ ] Uses • bullet character
- [ ] Uses = for equivalencies
- [ ] Format: "• ENDO = wraps 1 fiber (Pia)"
- [ ] One line per layer (3-4 layers typical)

### **Section 3: visualID**
- [ ] Array of 4-5 visual cues
- [ ] Uses • bullet character
- [ ] Uses = for descriptions
- [ ] Format: "• Honeycomb = white circles (myelin)"

### **Section 4: cnsConnection OR keyRelationships**
- [ ] Single concise string
- [ ] Uses → for progressions
- [ ] Format: "Endo → Peri → Epi = Pia → Arachnoid → Dura"

### **Section 5: dontConfuse**
- [ ] Array of 3 common mistakes
- [ ] Uses • bullet character
- [ ] Uses ≠ for "not equal to"
- [ ] Format: "• Myelin (small) ≠ Adipocyte (large)"

---

## ✍️ SYNTAX VALIDATION

- [ ] Valid JavaScript object syntax
- [ ] Double quotes (not single quotes)
- [ ] No trailing commas
- [ ] Arrays properly formatted with [ ]
- [ ] Objects properly formatted with { }
- [ ] All strings properly quoted
- [ ] Output is ONLY the JavaScript object (no extra text)

---

## 🎯 CONTENT QUALITY

- [ ] Staining info specific to THIS slide (not generic)
- [ ] All CNS equivalents noted (if nervous tissue)
- [ ] Size comparisons with specific measurements
- [ ] Practical identification tips (not academic theory)
- [ ] Exam-focused language throughout
- [ ] No placeholder text or TODO comments
- [ ] Consistent level of detail across all sections

---

## 📝 FINAL VERIFICATION

### **Before Submitting:**
1. [ ] Searched for "criticalRelationships" in output
2. [ ] Counted sections - is it 3-4 minimum?
3. [ ] Verified each relationship has all 4 fields
4. [ ] Checked titles for (HIGH-YIELD!) tags
5. [ ] Ran output through JSON validator (if available)
6. [ ] No missing commas or syntax errors
7. [ ] Read the entire output once more

### **Double-Check These Common Mistakes:**
- [ ] Did NOT forget `criticalRelationships`
- [ ] Did NOT use paragraphs in `ultraMinimalFacts`
- [ ] Did NOT skip CNS equivalents for nerve layers
- [ ] Did NOT forget arrow symbols in `hierarchy`
- [ ] Did NOT make `bigPicture` too long
- [ ] Did NOT use single quotes instead of double quotes

---

## 🚦 SUBMISSION STATUS

**✅ ALL ITEMS CHECKED = READY TO SUBMIT**

**❌ ANY ITEM UNCHECKED = DO NOT SUBMIT - FIX FIRST**

---

**Remember: This is MEDICAL EDUCATION - accuracy and completeness are NON-NEGOTIABLE! 🎓**
