# FOUNDER PROFILE UPDATES - GRAFILLIUM WEBSITE

**Date:** 2026-02-03
**Source of Truth:** Nexerg website founder profiles (verified correct)
**Target:** Grafillium website founder profiles

---

## OVERVIEW

The Nexerg website has the correct and finalized founder profile structure. This document provides exact instructions to update the Grafillium website's founder profiles to match.

**File to Update:** `src/data/about.js`

---

## UPDATE INSTRUCTIONS

### 1. VIEVEK JAIN
**Location:** Lines 133-150

#### Current State (GRAFILLIUM):
```javascript
{
    name: "Vievek Jain",
    title: "Co-Founder",
    subtitle: "Chief Finance Officer",
    // ... rest of fields
}
```

#### Required Changes:
✅ **NO CHANGES NEEDED** - Already matches Nexerg format perfectly

---

### 2. VIKAS JAIN
**Location:** Lines 153-171

#### Current State (GRAFILLIUM):
```javascript
{
    name: "Vikas Jain",
    title: "Co-Founder",
    subtitle: "CEO & Chief Manufacturing Officer",
    // ... rest
}
```

#### ⚠️ CHANGE REQUIRED:

**Action:** Update `subtitle` field at line 155

**From:**
```javascript
subtitle: "CEO & Chief Manufacturing Officer",
```

**To:**
```javascript
subtitle: "Chief Executive and Manufacturing Officer",
```

**Reasoning:** Standardize title format across both websites. "Chief Executive and Manufacturing Officer" is the full, formal version.

---

### 3. ISHAT JAIN
**Location:** Lines 174-194

#### Current State (GRAFILLIUM):
```javascript
{
    name: "Ishat Jain",
    title: "Co-Founder",
    subtitle: "Business Operations & Digital Growth",
    // ... rest
}
```

#### ⚠️ CHANGE REQUIRED:

**Action:** Update `subtitle` field at line 176

**From:**
```javascript
subtitle: "Business Operations & Digital Growth",
```

**To:**
```javascript
subtitle: "Chief Business Development Officer",
```

**Reasoning:** Use formal executive title instead of descriptive role summary. This matches corporate positioning and consistency.

---

## IMPLEMENTATION CHECKLIST

### Step 1: Backup Current File
```bash
cd C:\Users\globql-ws\Documents\project-sushant\grafillium-website
cp src/data/about.js src/data/about.js.backup
```

### Step 2: Make Changes to `src/data/about.js`

**Change 1 - Vikas Jain (Line 155):**
```javascript
// OLD:
subtitle: "CEO & Chief Manufacturing Officer",

// NEW:
subtitle: "Chief Executive and Manufacturing Officer",
```

**Change 2 - Ishat Jain (Line 176):**
```javascript
// OLD:
subtitle: "Business Operations & Digital Growth",

// NEW:
subtitle: "Chief Business Development Officer",
```

### Step 3: Verify Changes
After making updates, verify:
- [ ] Vikas Jain's subtitle reads: "Chief Executive and Manufacturing Officer"
- [ ] Ishat Jain's subtitle reads: "Chief Business Development Officer"
- [ ] All other fields remain unchanged
- [ ] No syntax errors in the file

### Step 4: Test
```bash
npm run dev
```
Navigate to the About page and check:
- [ ] All founder profiles display correctly
- [ ] New subtitles render properly
- [ ] No console errors
- [ ] Images load correctly

---

## EXACT FILE EDITS NEEDED

### Edit 1: Vikas Jain Subtitle
**File:** `src/data/about.js`
**Line:** 155
**Old String:**
```javascript
                subtitle: "CEO & Chief Manufacturing Officer",
```
**New String:**
```javascript
                subtitle: "Chief Executive and Manufacturing Officer",
```

---

### Edit 2: Ishat Jain Subtitle
**File:** `src/data/about.js`
**Line:** 176
**Old String:**
```javascript
                subtitle: "Business Operations & Digital Growth",
```
**New String:**
```javascript
                subtitle: "Chief Business Development Officer",
```

---

## FINAL STRUCTURE REFERENCE

After updates, all three founders should have this structure:

### Vievek Jain
- **Title:** Co-Founder
- **Subtitle:** Chief Finance Officer
- **Status:** ✓ Already correct

### Vikas Jain
- **Title:** Co-Founder
- **Subtitle:** Chief Executive and Manufacturing Officer
- **Status:** ⚠️ Needs update

### Ishat Jain
- **Title:** Co-Founder
- **Subtitle:** Chief Business Development Officer
- **Status:** ⚠️ Needs update

---

## VALIDATION

After completing updates, both websites should have identical founder title structures:

| Founder | Title | Subtitle |
|---------|-------|----------|
| Vievek Jain | Co-Founder | Chief Finance Officer |
| Vikas Jain | Co-Founder | Chief Executive and Manufacturing Officer |
| Ishat Jain | Co-Founder | Chief Business Development Officer |

---

## NOTES

1. **All other fields** (bio, background, leadership, education, expertise, etc.) remain unchanged
2. Only the `subtitle` fields for Vikas and Ishat need updates
3. The leadership text correctly references "Grafillium" (not Nexerg) - this is intentional and correct
4. Company names in the `companies` field correctly list "Grafillium" - this is also intentional

---

## COMPLETION CONFIRMATION

Once updates are complete, confirm:
- [ ] Both subtitle fields updated
- [ ] File saved successfully
- [ ] No syntax errors
- [ ] Website runs without errors
- [ ] About page displays correctly
- [ ] All three founder profiles visible with correct titles

---

**Document Created By:** Claude (AI Agent)
**Date:** 2026-02-03
**Priority:** Medium
**Estimated Time:** 5 minutes
