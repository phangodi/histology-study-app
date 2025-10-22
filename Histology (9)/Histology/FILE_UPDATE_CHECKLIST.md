# 📋 FILE UPDATE CHECKLIST - MANDATORY FOR ALL CHANGES

**Purpose:** Ensure ALL related files are updated together when making system changes

**RULE:** Before marking ANY task as complete, verify EVERY file in this checklist!

---

## 🚨 CORE PRINCIPLE

**When you update ONE file, you MUST update ALL related files in the same session!**

Missing even ONE file will break the system or create documentation inconsistencies.

---

## 📁 THE 5 CORE FILES (Always Check These)

### 1. **App.jsx** (UI Implementation)
- **Location:** `src/App.jsx`
- **Purpose:** The actual React code that displays content
- **When to update:** Any UI behavior change, new data field usage, display logic
- **Check:** Does the code safely access all new fields with optional chaining?

### 2. **UPDATED_MASTER_PROMPT_Histology_Generation.md** (Content Generation Instructions)
- **Location:** Root directory
- **Purpose:** Instructions for Claude to generate slide data
- **When to update:** New data fields, format changes, structure requirements
- **Check:** Does it document ALL new required fields with examples?

### 3. **UPDATED_HISTOLOGY_AUTOMATION_GUIDE.md** (Technical Specification)
- **Location:** Root directory
- **Purpose:** Complete technical spec of data structure and formats
- **When to update:** Data structure changes, new field requirements, format specifications
- **Check:** Does it show complete schema with all fields documented?

### 4. **EXAM_ESSENTIALS_VISUALIZATION.md** (Format Documentation)
- **Location:** Root directory
- **Purpose:** Documents how exam essentials are displayed in each format
- **When to update:** UI display changes, new sections, format modifications
- **Check:** Does it show actual examples of what users see in each format?

### 5. **Memory System** (Persistent Knowledge)
- **Location:** create_memory tool
- **Purpose:** Stores critical decisions and requirements for future sessions
- **When to update:** Major architectural decisions, critical requirements
- **Check:** Have you created/updated a memory documenting this change?

---

## ✅ UPDATE CHECKLIST BY CHANGE TYPE

### **A. Adding New Data Fields**

When adding new required fields to the data structure:

1. ☐ **App.jsx** - Update code to read/display new fields
2. ☐ **UPDATED_MASTER_PROMPT** - Document new fields in format section + example
3. ☐ **UPDATED_HISTOLOGY_AUTOMATION_GUIDE** - Update schema + "What YOU Generate" section
4. ☐ **EXAM_ESSENTIALS_VISUALIZATION** - Update data structure example
5. ☐ **Memory** - Create/update memory with new field requirements

**Example:** Adding `where`, `appearance`, `function`, `quickID` to `examEssentialStructures.grouped`

### **B. Changing UI Display Logic**

When changing how something is displayed:

1. ☐ **App.jsx** - Implement new display code
2. ☐ **EXAM_ESSENTIALS_VISUALIZATION** - Update format sections with new examples
3. ☐ **UPDATED_HISTOLOGY_AUTOMATION_GUIDE** - Update format descriptions if needed
4. ☐ **Memory** - Document the UI change if it affects future work

**Example:** Changing Quick Cards from 3 sections to 4-5 sections

### **C. Adding New Formats**

When creating a new display format:

1. ☐ **App.jsx** - Implement new format component
2. ☐ **EXAM_ESSENTIALS_VISUALIZATION** - Add new format section with examples
3. ☐ **UPDATED_HISTOLOGY_AUTOMATION_GUIDE** - Document new format requirements
4. ☐ **UPDATED_MASTER_PROMPT** - Add format-specific generation guidelines
5. ☐ **Memory** - Create memory for new format specifications

### **D. Fixing Bugs**

When fixing a bug:

1. ☐ **App.jsx** - Apply the fix (e.g., add optional chaining)
2. ☐ **BUGFIX documentation** - Create BUGFIX_[NAME].md documenting the issue
3. ☐ **Memory** - Document the bug and fix to prevent recurrence
4. ☐ **Review related docs** - Check if any documentation implied the bug was a feature

---

## 🎯 VERIFICATION PROTOCOL

**Before saying "Done":**

1. **List all files that COULD be affected** by your change
2. **Check each file** - Does it need updating?
3. **Update ALL affected files** in ONE session
4. **Create a summary document** listing what was changed and why
5. **Update memory** with critical information
6. **Test** - Does the site actually work?

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ **Mistake 1: Piecemeal Updates**
- **What:** Updating one file now, another later
- **Result:** Inconsistent documentation, broken site between updates
- **Solution:** Update ALL related files together in ONE session

### ❌ **Mistake 2: Forgetting Documentation**
- **What:** Updating code but not docs
- **Result:** Future contributors (including AI) don't know about the change
- **Solution:** Documentation is as important as code - update both!

### ❌ **Mistake 3: No Optional Chaining on New Fields**
- **What:** Adding code that accesses new fields without `?.`
- **Result:** Site crashes for slides without those fields
- **Solution:** ALWAYS use optional chaining for new fields until all slides regenerated

### ❌ **Mistake 5: Using Generic Fallback Text Instead of Smart Search**
- **What:** Using fallbacks like "Contains X components" or "with X components" when data fields are missing
- **Result:** Students see USELESS generic text with zero educational value
- **Solution:** SEARCH existing data arrays for real descriptions before falling back. Example: If `grouped[0].appearance` is missing, search `insideTheFascicles` array for bundle descriptions. Only use meaningful defaults as last resort, never generic counting.

### ❌ **Mistake 4: Not Creating a Memory**
- **What:** Making important changes without saving to memory
- **Result:** Next session, the AI doesn't know about critical decisions
- **Solution:** Create memory for ANY architectural decision or requirement

---

## 📊 QUICK REFERENCE: File Relationships

```
User Request
    ↓
Identify Change Type (A/B/C/D above)
    ↓
Follow Checklist for That Type
    ↓
Update ALL files in checklist
    ↓
Create summary document
    ↓
Update memory
    ↓
Verify: Does site work?
    ↓
DONE (and actually done!)
```

---

## 💡 FOR THE AI: How to Use This Checklist

1. **When you receive a change request:**
   - Immediately identify which checklist (A/B/C/D) applies
   - List out ALL files you need to update
   - Update them ALL before saying "done"

2. **Before responding "Complete":**
   - Go through the checklist
   - Confirm each ☐ is now ☑
   - Create summary of what was changed

3. **If you realize you missed a file:**
   - Apologize
   - Update the missed file immediately
   - Explain why it was missed
   - Update this checklist if needed

---

## 🎓 FOR THE USER: How to Use This Checklist

**When requesting a change:**

1. **You shouldn't need to specify every file** - the AI should know
2. **If AI says "done" but site is broken** - refer them to this checklist
3. **If documentation is wrong** - point to this checklist and ask "did you follow it?"
4. **For new types of changes** - update this checklist together

**The Goal:** You request a feature/fix ONCE, AI updates EVERYTHING needed automatically.

---

## 📅 Maintenance

**Update this checklist when:**
- New files are added to the project
- New types of changes become common
- A mistake happens that this checklist could have prevented

**Keep this checklist:**
- ✅ Simple and scannable
- ✅ Organized by change type
- ✅ Actionable (checkboxes, not philosophy)
- ✅ Complete (covers all files that interact)

---

## 🚀 Success Criteria

**This checklist is successful when:**
- ✅ User requests ONE change, ALL files get updated automatically
- ✅ Documentation is always synchronized with code
- ✅ Site never breaks due to missing updates
- ✅ Future sessions have complete context via memory
- ✅ Less frustration, more productivity!

**Last Updated:** October 20, 2025  
**Version:** 1.0
