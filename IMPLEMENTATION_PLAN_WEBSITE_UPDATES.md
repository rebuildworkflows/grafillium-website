# 🎯 Graffilium Website - Implementation Plan for Updates

**Date:** 2026-02-01
**Status:** PLANNING PHASE
**Priority:** HIGH
**Affected Product:** Ignitron P (Primary), Homepage (Secondary)

---

## 📋 Executive Summary

This plan covers **8 critical updates** across the Graffilium website:
1. Homepage Technology Edge content revision
2. Homepage Product Innovations status update
3. Ignitron P emission claim correction (20% → 12%)
4. Ignitron P hero metrics standardization
5. Ignitron P "At a Glance" cards update
6. Global consistency enforcement for Ignitron P
7. Optional micro-disclaimer addition
8. National Impact metric standardization (MMT)

**Total Files to Modify:** 12 files (11 code + 1 source document)
**Estimated Effort:** 4-6 hours (1 developer)
**Risk Level:** MEDIUM (widespread changes across multiple components)

---

## 🗂️ File Modification Breakdown

### **PHASE 0: Source Documentation Update (1 file)** ✅ COMPLETED

#### **0.1 new-content-updated.md** - Master Content Source
**File:** `C:\Users\globql-ws\Documents\project-sushant\grafillium-content\new-content-updated.md`
**Priority:** CRITICAL
**Complexity:** LOW
**Status:** ✅ UPDATED

**Why This File Matters:**
- This is the **master content source document** for all product descriptions
- Must be updated FIRST to ensure content accuracy and consistency
- Serves as single source of truth for marketing, sales, and technical teams

**Changes Made:**

✅ **Ignitron P Hero Metrics (Lines 141-144):**
```markdown
# Before:
- Up to 10% Savings
- Up to 20% Fewer Emissions ❌

# After:
- Up to 10% Fuel Savings
- Up to 12% Emission Reduction ✅
```

✅ **Ignitron P National Impact (Line 164):**
```markdown
# Before:
- CO₂ avoided: ~11.3M tonnes ❌

# After:
- CO₂ avoided: ~11.3 MMT (Million Metric Tons) ✅
```

✅ **Ignitron D National Impact (Line 122):**
```markdown
# Before:
- CO₂ avoided: ~49M tonnes ❌

# After:
- CO₂ avoided: ~49 MMT (Million Metric Tons) ✅
```

✅ **Lubritron National Impact (Line 203):**
```markdown
# Before:
- CO₂ avoided: ~17.5M tonnes ❌

# After:
- CO₂ avoided: ~17.5 MMT (Million Metric Tons) ✅
```

✅ **Bitumax Carbon Footprint (Lines 225-226):**
```markdown
# Before:
- India: 0.8–1.5M tonnes CO₂/year avoided ❌
- Global: 8–20M tonnes CO₂/year avoided ❌

# After:
- India: 0.8–1.5 MMT CO₂/year avoided ✅
- Global: 8–20 MMT CO₂/year avoided ✅
```

**Verification:**
- [x] Ignitron P: 12% emission reduction (not 20%)
- [x] All "Fuel Savings" labeled correctly
- [x] All CO₂ metrics use "MMT" format
- [x] Specific pollutant percentages unchanged (HC 15-30%, CO 10-20%, etc.)
- [x] Ignitron D and Lubritron remain accurate

---

### **PHASE 1: Homepage Updates (2 files)**

#### **1.1 Home.jsx** - Technology Edge Infographic Section
**File:** `src/pages/Home.jsx`
**Location:** Lines 382-406 (Desktop), Lines 437-463 (Mobile)
**Priority:** HIGH
**Complexity:** LOW

**Current State:**
The homepage has an infographic display with a "Technology Edge" section showing:
- Line 389: "Graphene-Enhanced Formula" ❌
- Line 393: "Nano-Particle Technology" ✅ (already there)
- Line 397: "Zero-Emission Process" (needs rewording)
- Line 401: "Made in India Innovation" ❌
- Line 405-406: "Proprietary patent-pending formulations" ✅ (keep)

**Mobile version** (lines 437-463):
- Line 448: "Graphene" ❌
- Line 452: "Nano-Tech" ✅
- Line 456: "Zero-Emission" (needs rewording)
- Line 460: "Made in India" ❌

**Required Changes:**

❌ **REMOVE:**
- Line 389: "Graphene-Enhanced Formula"
- Line 401: "Made in India Innovation"
- Line 448 (mobile): "Graphene"
- Line 460 (mobile): "Made in India"

✅ **UPDATE:**
- Line 397: "Zero-Emission Process" → "Emission reduction process"
- Line 456 (mobile): "Zero-Emission" → "Emission reduction"

✅ **ADD:**
- "Proprietary formulations"
- "ESG Benefits"

✅ **KEEP:**
- Line 393: "Nano-Particle Technology" (already correct)
- Line 405-406: "Proprietary patent-pending formulations" (supporting line)

**Implementation Steps:**

**Desktop Version (Lines 382-406):**
1. Remove line 389: "Graphene-Enhanced Formula"
2. Keep line 393: "Nano-Particle Technology"
3. Update line 397: "Zero-Emission Process" → "Emission reduction process"
4. Replace line 401: "Made in India Innovation" → "Proprietary formulations"
5. Add new item after line 401: "ESG Benefits"
6. Keep line 405-406: "Proprietary patent-pending formulations"

**Mobile Version (Lines 437-463):**
1. Remove line 448: "Graphene"
2. Keep line 452: "Nano-Tech"
3. Update line 456: "Zero-Emission" → "Emission reduction"
4. Replace line 460: "Made in India" → "Proprietary formulations"
5. May need to add "ESG Benefits" or combine due to space

**Code Structure:**
```jsx
// Desktop (lines 386-403)
<div className="space-y-2.5">
    {/* REMOVE this */}
    <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span className="text-xs text-teal-100">Graphene-Enhanced Formula</span>
    </div>

    {/* KEEP this */}
    <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span className="text-xs text-teal-100">Nano-Particle Technology</span>
    </div>

    {/* UPDATE this */}
    <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span className="text-xs text-teal-100">Emission reduction process</span>
    </div>

    {/* REPLACE "Made in India Innovation" with these 2 items */}
    <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span className="text-xs text-teal-100">Proprietary formulations</span>
    </div>

    <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
        <span className="text-xs text-teal-100">ESG Benefits</span>
    </div>
</div>
```

**Verification:**
- [ ] Desktop: No "Graphene-Enhanced Formula" (line 389 removed)
- [ ] Desktop: No "Made in India Innovation" (line 401 replaced)
- [ ] Desktop: "Nano-Particle Technology" still present
- [ ] Desktop: "Zero-Emission Process" → "Emission reduction process"
- [ ] Desktop: "Proprietary formulations" added
- [ ] Desktop: "ESG Benefits" added
- [ ] Desktop: "Proprietary patent-pending formulations" still at bottom
- [ ] Mobile: No "Graphene" (line 448 removed)
- [ ] Mobile: No "Made in India" (line 460 replaced)
- [ ] Mobile: "Nano-Tech" still present
- [ ] Mobile: "Zero-Emission" → "Emission reduction"
- [ ] Mobile: Updates match desktop content
- [ ] Visual layout intact, no broken styling

---

#### **1.2 ProductShowcase.jsx** - Product Innovations Section
**File:** `src/components/sections/ProductShowcase.jsx`
**Priority:** HIGH
**Complexity:** LOW

**Current State:**
- Shows "Commercially Deployed" status for products

**Required Changes:**

❌ **CHANGE FROM:**
- "Commercially Deployed"

✅ **CHANGE TO:**
- "Pilot Phase"

**Implementation Steps:**
1. Search for "Commercially Deployed" text in ProductShowcase.jsx
2. Replace with "Pilot Phase"
3. Check if this is hardcoded or comes from product data
4. If from data file (products.js), update there instead

**Verification:**
- [ ] "Pilot Phase" appears instead of "Commercially Deployed"
- [ ] Styling remains consistent
- [ ] Change applies to correct product(s)

---

### **PHASE 2: Ignitron P Data Updates (1 file)**

#### **2.1 products.js** - Core Product Data
**File:** `src/data/products.js`
**Priority:** CRITICAL
**Complexity:** MEDIUM
**Lines Affected:** 320-399 (Ignitron P definition)

**Current State:**
- Emission reduction: "Up to 20%" or "20%"
- CO₂ Reduction mentioned
- Status may be "In Development"

**Required Changes:**

✅ **UPDATE ALL INSTANCES:**

| Current | New | Field |
|---------|-----|-------|
| "Up to 20%" (emissions) | "Up to 12%" | emission reduction |
| "CO₂ Reduction" | "Emission Reduction" | label text |
| "20% Fewer Emissions" | "12% Emission Reduction" | at-a-glance cards |
| (any) "20%" CO2 | "12%" Emission | all variants |
| "10% Fuel Economy" | "Up to 10% Fuel Economy" | fuel savings |
| "In Development" | "Pilot Phase" | status field |

**Specific Field Updates:**

```javascript
// Example structure (verify actual structure in file)
{
  id: 'ignitron-p',
  name: 'Ignitron P',

  // Hero metrics - UPDATE THESE
  savings: 'Up to 10%',  // ADD "Up to" if missing
  emissions: 'Up to 12%',  // CHANGE from 20% to 12%
  emissionsLabel: 'Emission Reduction',  // CHANGE from "CO₂ Reduction"

  // Status - UPDATE THIS
  status: 'Pilot Phase',  // CHANGE from "In Development" or "Commercially Deployed"

  // Benefits/specs arrays - UPDATE ALL 20% → 12%
  benefits: [
    // Find and update any emission percentages
  ],

  // National impact - VERIFY MMT usage
  nationalImpact: {
    co2Avoided: '11.3 MMT',  // Ensure "MMT" not "Mt"
    // ...
  }
}
```

**Implementation Steps:**
1. Open `src/data/products.js`
2. Navigate to Ignitron P section (lines ~320-399)
3. Search for ALL instances of "20%" in Ignitron P block
4. Replace emission-related 20% with 12%
5. Add "Up to" prefix to fuel economy if missing
6. Change all "CO₂" to "Emission" in labels
7. Update status field to "Pilot Phase"
8. Verify MMT usage in national impact metrics
9. Check for any graphene mentions (should be none)

**Critical Validation:**
- [ ] ALL "20%" emission claims → "12%"
- [ ] "CO₂ Reduction" → "Emission Reduction" (all instances)
- [ ] "Up to" prefix on fuel economy
- [ ] Status = "Pilot Phase"
- [ ] National CO₂ metric uses "MMT" not "Mt"
- [ ] No graphene references

---

### **PHASE 3: Ignitron P Component Updates (8 files)**

#### **3.1 IgnitronPStatsCard.jsx**
**File:** `src/components/ui/IgnitronPStatsCard.jsx`
**Priority:** HIGH
**Complexity:** LOW

**Current Metrics:**
- Fuel Economy: 10%
- Emission Reduction: 30% (HC specific)

**Required Changes:**
- Update to show "Up to 10%" for fuel economy
- Verify emission reduction shows 12% for overall (not HC-specific 30%)
- If this shows HC-specific metrics, keep 30% but clarify "HC Reduction"

**Implementation:**
```jsx
// Before
{ title: 'Fuel Economy', value: '10%', ... }
{ title: 'Emission Reduction', value: '30%', ... }

// After
{ title: 'Fuel Economy', value: 'Up to 10%', ... }
{ title: 'Emission Reduction', value: 'Up to 12%', ... }
// OR if HC-specific:
{ title: 'HC Reduction', value: 'Up to 30%', ... }
```

**Verification:**
- [ ] "Up to" prefix added
- [ ] Correct percentages displayed
- [ ] Labels are accurate (Emission vs CO₂)

---

#### **3.2 IgnitronPROISnapshotWidget.jsx**
**File:** `src/components/ui/IgnitronPROISnapshotWidget.jsx`
**Priority:** MEDIUM
**Complexity:** LOW

**Current Metrics:**
- CO2 Avoided: 11.3Mt

**Required Changes:**
- Change "Mt" to "MMT" (Million Metric Tons)
- Change "CO2" to "CO₂" (proper subscript if not already)

**Implementation:**
```jsx
// Before
{ label: 'CO2 Avoided', value: '11.3Mt', ... }

// After
{ label: 'CO₂ Avoided', value: '11.3 MMT', ... }
```

**Verification:**
- [ ] "MMT" used instead of "Mt"
- [ ] Proper CO₂ subscript formatting

---

#### **3.3 IgnitronPHowItWorks.jsx**
**File:** `src/components/infographics/IgnitronPHowItWorks.jsx`
**Priority:** HIGH
**Complexity:** MEDIUM

**Current State:**
- Before/After comparison shows emission percentages
- May show "Up to 10%" fuel consumption

**Required Changes:**
- Verify all emission percentages are accurate
- Ensure "Up to" prefix on variable metrics
- Update any 20% overall emission claims to 12%
- HC (15-30%), CO (10-20%), Particulates (10-20%) can stay if accurate

**Specific Checks:**
- [ ] Overall emission reduction: 12% (not 20%)
- [ ] Fuel consumption: "Up to 10%"
- [ ] HC specific: 15-30% (OK to keep if accurate)
- [ ] CO specific: 10-20% (OK to keep if accurate)
- [ ] Particulates: 10-20% (OK to keep if accurate)
- [ ] Labels use "Emission" not "CO₂" for overall

---

#### **3.4 IgnitronPTechnicalSpecs.jsx**
**File:** `src/components/infographics/IgnitronPTechnicalSpecs.jsx`
**Priority:** HIGH
**Complexity:** MEDIUM

**Current Metrics:**
- Fuel savings, emission reductions table
- National scale impact with CO2 metric

**Required Changes:**

**Emission Reductions Table:**
```jsx
// VERIFY THESE VALUES:
CO: 10-20%        // ✅ Keep (specific pollutant)
HC: 15-30%        // ✅ Keep (specific pollutant)
Particulates: 10-20%  // ✅ Keep (specific pollutant)
NOx: 0-5%         // ✅ Keep (specific pollutant)

// OVERALL EMISSION REDUCTION (if shown):
Overall: 12%      // ⚠️ UPDATE from 20% if present
```

**Primary Benefits:**
- Fuel Economy: "Up to 10%" (add "Up to" if missing)
- Overall Emission Reduction: "Up to 12%" (change from 20%)
- HC Reduction: "15-30%" (can keep, it's specific)

**National Scale Impact:**
- CO2: 11.3 MMT (change from Mt)

**Verification:**
- [ ] Overall emission: 12% (not 20%)
- [ ] Fuel economy: "Up to 10%"
- [ ] Specific pollutants (HC, CO, etc.) unchanged
- [ ] National CO₂ metric: "MMT" not "Mt"
- [ ] Labels: "Emission Reduction" not "CO₂ Reduction"

---

#### **3.5 IgnitronPDeepDive.jsx**
**File:** `src/components/infographics/IgnitronPDeepDive.jsx`
**Priority:** MEDIUM
**Complexity:** MEDIUM

**Current State:**
- National scale impact metrics
- Global/India CO2 statistics

**Required Changes:**
- Update CO2 metrics to use "MMT"
- Verify emission percentages align with 12% overall claim

**National Scale Impact:**
```jsx
// Before
CO2: 11.3M tonnes

// After
CO₂: 11.3 MMT (Million Metric Tons)
```

**Global Statistics:**
- Ensure consistency in unit terminology
- India CO₂ from Petrol: 110 MMT/year (verify format)

**Verification:**
- [ ] "MMT" used for all CO₂ metrics
- [ ] Proper CO₂ subscript formatting
- [ ] Emission percentages align with 12% claim

---

#### **3.6 IgnitronPBenefitsROI.jsx**
**File:** `src/components/infographics/IgnitronPBenefitsROI.jsx`
**Priority:** HIGH
**Complexity:** MEDIUM

**Current Metrics:**
- Fuel Economy: 10%
- Emission Reduction: 30%
- National scale CO2: 11.3M tonnes

**Required Changes:**

**Primary Benefits Cards:**
```jsx
// Before
{ title: 'Fuel Economy', value: '10%', ... }
{ title: 'Emission Reduction', value: '30%', ... }

// After
{ title: 'Fuel Economy', value: 'Up to 10%', ... }
{ title: 'Emission Reduction', value: 'Up to 12%', ... }
// Note: 30% might be HC-specific, verify context
```

**Performance Range:**
- Mixed Driving: 4-7% (keep)
- Highway: "Up to 10%" (add "Up to" if missing)

**National Scale Impact:**
- CO₂ Avoided: 11.3 MMT (change from M tonnes/Mt)

**Cost Comparison Table:**
- Verify emission reduction column shows 12%

**Verification:**
- [ ] Overall emission: 12% (not 20% or 30%)
- [ ] Fuel economy: "Up to 10%"
- [ ] National CO₂: "MMT" format
- [ ] "Emission Reduction" label (not "CO₂ Reduction")
- [ ] If 30% shown, verify it's HC-specific and labeled correctly

---

#### **3.7 Home.jsx** (Ignitron P Reference)
**File:** `src/pages/Home.jsx`
**Priority:** MEDIUM
**Complexity:** LOW
**Line:** ~92

**Current State:**
- Circular gauge showing Ignitron P at 10%

**Required Changes:**
- Verify this shows "Up to 10%" or update display
- Check if percentage comes from products.js (if yes, will auto-update)

**Verification:**
- [ ] Displays "Up to 10%" or uses data from products.js
- [ ] No hardcoded 20% emission values

---

#### **3.8 ProductDetail.jsx**
**File:** `src/pages/ProductDetail.jsx`
**Priority:** LOW
**Complexity:** LOW

**Current State:**
- Routes to Ignitron P components
- No hardcoded values (just passes product data)

**Required Changes:**
- No direct changes needed (data-driven)
- Verify after products.js update

**Verification:**
- [ ] Ignitron P page displays updated values from products.js
- [ ] All lazy-loaded components render correctly
- [ ] Purple theme intact

---

### **PHASE 4: Optional Enhancements (1 file)**

#### **4.1 Add Micro-Disclaimer**
**Files:**
- `src/components/infographics/IgnitronPBenefitsROI.jsx` (recommended)
- OR `src/components/infographics/IgnitronPTechnicalSpecs.jsx`

**Priority:** OPTIONAL
**Complexity:** LOW

**Disclaimer Text:**
```
*Actual results may vary based on vehicle condition, fuel quality, and driving behavior.
```

**Implementation:**
```jsx
<div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
  <p className="text-xs text-amber-800 italic text-center">
    *Actual results may vary based on vehicle condition, fuel quality, and driving behavior.
  </p>
</div>
```

**Placement:**
- Bottom of primary benefits section
- OR bottom of technical specs section
- OR both

**Verification:**
- [ ] Disclaimer visible but not intrusive
- [ ] Styling consistent with site theme
- [ ] Text legible and professional

---

## 📊 Implementation Order (Recommended)

### **Stage 0: Source Documentation (Completed)** ✅
0. ✅ **new-content-updated.md** - Master content source
   - Ignitron P: 20% → 12% emission reduction
   - All products: M tonnes → MMT format
   - Labels: "Fuel Savings" consistency
   - **Time:** 10 mins
   - **Risk:** LOW
   - **Status:** ✅ COMPLETED

### **Stage 1: Data Foundation (Critical Path)**
1. ✅ **products.js** - Update Ignitron P core data
   - All emission claims: 20% → 12%
   - Add "Up to" prefixes
   - Change "CO₂" → "Emission"
   - Update status to "Pilot Phase"
   - Verify MMT usage
   - **Time:** 30 mins
   - **Risk:** HIGH (affects all components)

### **Stage 2: Homepage Updates**
2. ✅ **Home.jsx** - Technology Edge section
   - Remove graphene, Made in India
   - Add nano-particle, emission reduction, proprietary, ESG
   - **Time:** 20 mins
   - **Risk:** LOW

3. ✅ **ProductShowcase.jsx** - Product Innovations
   - "Commercially Deployed" → "Pilot Phase"
   - **Time:** 5 mins
   - **Risk:** LOW

### **Stage 3: Component Updates (Parallel)**
4. ✅ **IgnitronPStatsCard.jsx** - Stats display
   - Add "Up to" prefixes
   - Update percentages
   - **Time:** 10 mins
   - **Risk:** LOW

5. ✅ **IgnitronPROISnapshotWidget.jsx** - ROI widget
   - Mt → MMT
   - **Time:** 5 mins
   - **Risk:** LOW

6. ✅ **IgnitronPHowItWorks.jsx** - How it works infographic
   - Verify/update percentages
   - Add "Up to" where needed
   - **Time:** 15 mins
   - **Risk:** MEDIUM

7. ✅ **IgnitronPTechnicalSpecs.jsx** - Technical specs
   - Update overall emission to 12%
   - Verify specific pollutants unchanged
   - MMT format
   - **Time:** 20 mins
   - **Risk:** MEDIUM

8. ✅ **IgnitronPDeepDive.jsx** - Deep dive section
   - MMT format for CO₂
   - **Time:** 10 mins
   - **Risk:** LOW

9. ✅ **IgnitronPBenefitsROI.jsx** - Benefits & ROI
   - Update primary benefits
   - MMT format
   - Add disclaimer (optional)
   - **Time:** 15 mins
   - **Risk:** MEDIUM

### **Stage 4: Verification & Testing**
10. ✅ **Cross-browser testing**
    - Chrome, Firefox, Safari, Edge
    - **Time:** 30 mins

11. ✅ **Mobile responsiveness check**
    - iPhone, Android, Tablet
    - **Time:** 20 mins

12. ✅ **Content accuracy review**
    - All 12% instances verified
    - All "Up to" prefixes in place
    - No graphene mentions
    - **Time:** 30 mins

---

## ✅ Pre-Implementation Checklist

### **Development Environment**
- [ ] Git repository backed up
- [ ] Create feature branch: `feature/ignitron-p-updates`
- [ ] Local development server running
- [ ] All dependencies installed (npm install)

### **Documentation**
- [ ] Print this implementation plan
- [ ] Have user requirement doc open
- [ ] Screen recording tool ready (for before/after)

### **Tools Ready**
- [ ] Code editor with search-and-replace
- [ ] Browser DevTools open
- [ ] Screenshot tool ready

---

## 🔍 Verification Checklist (Post-Implementation)

### **Global Search Verification**
Run these searches across the entire codebase:

```bash
# 1. Check for any remaining "20%" in Ignitron P context
grep -r "20%" src/ | grep -i "ignitron"

# 2. Check for "graphene" mentions
grep -ri "graphene" src/

# 3. Check for "Made in India" in homepage
grep -ri "made in india" src/pages/Home.jsx

# 4. Check for "Commercially Deployed"
grep -ri "commercially deployed" src/

# 5. Check for "CO2" without subscript (should be CO₂)
grep -r "CO2" src/ | grep -i "ignitron"

# 6. Check for "Mt" instead of "MMT"
grep -r " Mt" src/ | grep -i "ignitron"
```

### **Visual Verification (Homepage)**
- [ ] Technology Edge shows 4 new items (no graphene, no Made in India)
- [ ] Product Innovations shows "Pilot Phase"
- [ ] Ignitron P circular gauge displays correctly

### **Visual Verification (Ignitron P Page)**
- [ ] Hero section: "Up to 10% Fuel Economy"
- [ ] Hero section: "Up to 12% Emission Reduction"
- [ ] At a Glance cards: Correct values
- [ ] ROI widget: "11.3 MMT"
- [ ] Technical specs: Overall 12%, specific pollutants unchanged
- [ ] Benefits section: Primary benefits show correct %
- [ ] Disclaimer present (if implemented)

### **Consistency Check**
- [ ] ALL Ignitron P instances use same values
- [ ] No instances of "CO₂ Reduction" (should be "Emission Reduction")
- [ ] All fuel economy has "Up to" prefix
- [ ] All emission claims use "Up to" prefix
- [ ] National metrics use "MMT" consistently

### **Functionality Check**
- [ ] Product navigation works
- [ ] All tabs/sections on Ignitron P page work
- [ ] Hover effects/tooltips display correctly
- [ ] Animations work smoothly
- [ ] No console errors
- [ ] No broken images/icons

---

## 🚨 Risk Areas & Mitigation

### **Risk 1: Breaking Changes from products.js**
**Impact:** HIGH
**Mitigation:**
- Make products.js changes first
- Test immediately after change
- Keep backup of original file
- Verify all 4 products still display correctly

### **Risk 2: Inconsistent Wording**
**Impact:** MEDIUM
**Mitigation:**
- Create find-and-replace checklist
- Use exact strings from requirement doc
- Double-check all instances manually

### **Risk 3: Missing "Up to" Prefix**
**Impact:** MEDIUM
**Mitigation:**
- Search for all instances of "10%" and "12%" in Ignitron P files
- Add "Up to" to each one individually
- Verify visually on frontend

### **Risk 4: Specific vs Overall Emission Claims**
**Impact:** HIGH (legal/compliance)
**Mitigation:**
- Clearly distinguish:
  - Overall emission reduction: 12%
  - HC-specific: 15-30% (labeled as "HC Reduction")
  - CO-specific: 10-20% (labeled as "CO Reduction")
  - Particulates: 10-20% (labeled as "Particulate Reduction")
- Never show 30% or 20% as overall emission reduction

### **Risk 5: Homepage Technology Edge Icons**
**Impact:** LOW
**Mitigation:**
- Choose appropriate icons for new items
- Match existing icon style
- Test icon rendering

---

## 📝 Exact Text Strings (Copy-Paste Ready)

### **Technology Edge Items (Homepage)**
```
✅ ADD THESE:
1. Nano-particle technology
2. Emission reduction process
3. Proprietary formulations
4. ESG Benefits

✅ KEEP:
- Proprietary patent-pending formulations

❌ REMOVE:
- Graphene-Enhanced Formula
- Made in India Innovation
```

### **Status Text**
```
❌ OLD: "Commercially Deployed"
❌ OLD: "In Development"
✅ NEW: "Pilot Phase"
```

### **Emission Claims**
```
❌ OLD: "Up to 20% CO₂ Reduction"
❌ OLD: "20% Fewer Emissions"
✅ NEW: "Up to 12% Emission Reduction"
```

### **Fuel Economy**
```
❌ OLD: "10% Fuel Economy"
❌ OLD: "10% Savings"
✅ NEW: "Up to 10% Fuel Economy"
✅ NEW: "Up to 10% Fuel Savings"
```

### **At a Glance Cards**
```
❌ OLD: "Up to 10% Savings"
✅ NEW: "Up to 10% Fuel Savings"

❌ OLD: "Up to 20% Fewer Emissions"
✅ NEW: "Up to 12% Emission Reduction"
```

### **National Impact Metrics**
```
❌ OLD: "11.3M tonnes CO2"
❌ OLD: "11.3Mt CO2"
✅ NEW: "11.3 MMT CO₂"
✅ FULL: "11.3 MMT CO₂ Avoided"
```

### **Micro-Disclaimer (Optional)**
```
*Actual results may vary based on vehicle condition, fuel quality, and driving behavior.
```

---

## 🎨 Design Consistency Guidelines

### **"Up to" Prefix Styling**
- Keep same font weight as percentage
- Example: `<span>Up to <strong>10%</strong></span>`
- OR: `<strong>Up to 10%</strong>` (both bold)
- Be consistent across all components

### **MMT Formatting**
- Use "MMT" in uppercase
- Include space before unit: "11.3 MMT"
- Full form on first mention: "11.3 MMT (Million Metric Tons)"

### **CO₂ Subscript**
- Use proper subscript: CO₂ (not CO2)
- HTML: `CO<sub>2</sub>`
- Or use Unicode: CO₂

---

## 📈 Testing Scenarios

### **Scenario 1: Homepage Load**
1. Navigate to homepage
2. Scroll to Technology Edge
3. Verify 4 new items, no graphene/Made in India
4. Scroll to Product Innovations
5. Verify "Pilot Phase" status

### **Scenario 2: Ignitron P Product Page**
1. Navigate to `/products/ignitron-p`
2. Check hero section metrics
3. Click through all tabs (Overview, Benefits & ROI, How It Works, Technical Specs, Deep Dive)
4. Verify all percentages on each tab
5. Check ROI snapshot widget

### **Scenario 3: Search for Inconsistencies**
1. Use browser search (Ctrl+F) for "20%"
2. Verify none are overall emission claims
3. Search for "CO2" without subscript
4. Search for "Mt" (should be "MMT")

### **Scenario 4: Mobile View**
1. Open DevTools responsive mode
2. Test iPhone 12/13 size
3. Test iPad size
4. Verify all text fits and is readable
5. Check "Up to" prefix doesn't break onto new line awkwardly

---

## 📦 Deliverables

### **Code Changes**
- [ ] 11 modified files committed
- [ ] Commit messages follow convention
- [ ] Branch pushed to remote repository

### **Documentation**
- [ ] This implementation plan (with completion checkmarks)
- [ ] Before/after screenshots (at least 10)
- [ ] Screen recording of full Ignitron P page (optional)

### **Testing Report**
- [ ] Verification checklist completed
- [ ] Browser compatibility results
- [ ] Mobile responsiveness results
- [ ] Known issues documented (if any)

---

## 🚀 Deployment Steps

### **Pre-Deployment**
1. [ ] All tests passing
2. [ ] Code reviewed by team lead
3. [ ] Stakeholder approval on staging environment
4. [ ] Backup of production database/files

### **Deployment**
1. [ ] Merge feature branch to main/develop
2. [ ] Deploy to staging first
3. [ ] Stakeholder sign-off on staging
4. [ ] Deploy to production
5. [ ] Monitor for errors (30 mins post-deploy)

### **Post-Deployment**
1. [ ] Verify live site matches staging
2. [ ] Check analytics for error rates
3. [ ] Update documentation
4. [ ] Close related tickets/issues

---

## 📞 Stakeholder Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| **Product Owner** | | | |
| **Tech Lead** | | | |
| **QA Lead** | | | |
| **Content/Marketing** | | | |

---

## 📚 Related Documentation

- **User Requirements:** (Original update list from stakeholder)
- **Product Data Spec:** `src/data/products.js` structure
- **Color System:** `docs/COLOR-SYSTEM.md`
- **Ignitron P Content Source:** `C:\Users\globql-ws\Documents\project-sushant\graffilium-content\new-content-updated.md`

---

## 🔄 Rollback Plan

**If Issues Arise Post-Deployment:**

1. **Immediate Rollback:**
   ```bash
   git revert <commit-hash>
   git push origin main
   npm run build
   npm run deploy
   ```

2. **Restore from Backup:**
   - Restore products.js from backup
   - Redeploy previous version

3. **Notify Stakeholders:**
   - Send rollback notification
   - Document issue for analysis
   - Schedule fix and re-deployment

---

**Estimated Total Time:** 4-6 hours (single developer, full cycle)
**Recommended Team Size:** 1 developer + 1 QA tester
**Timeline:** Can be completed in 1 working day

---

**Last Updated:** 2026-02-01
**Plan Status:** READY FOR EXECUTION
**Next Step:** Create feature branch and begin Stage 1 (products.js update)
