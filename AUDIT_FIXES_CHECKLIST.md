# Data Audit Fixes Checklist

**Generated**: 2026-02-01
**Status**: 7 Critical, 8 Moderate, 7 Enhancement Issues

---

## 🔴 CRITICAL FIXES (DO FIRST)

### [ ] 1. Fix Coalorix Dosage (5x Discrepancy)
- **File**: `src/data/products.js:20`
- **Current**: `dose: "up to 0.5%"`
- **Content Says**: 0.1% (w/w) or 50-150 ppm
- **Action**:
  - [ ] Verify correct dosage with engineering team
  - [ ] Update to `dose: "0.1% (50-150 ppm)"`
  - [ ] Update dosage in `doseAndUse` section as well (line 55)

---

### [ ] 2. Fix Ignitron D Dosage (8x Discrepancy)
- **File**: `src/data/products.js:154, 191`
- **Current**: `dose: "0.01%"`
- **Content Says**: 0.0012% (v/v) or ~10 ppm
- **Math Check**: 10g/1000L = 10ppm ≈ 0.001% ✓
- **Action**:
  - [ ] Change `dose: "0.01%"` → `dose: "0.001%" (line 154)`
  - [ ] Change `dosage: "0.01% (~10 ppm)"` → `dosage: "~10 ppm (0.001%)"` (line 191)

---

### [ ] 3. Resolve Ignitron D Marketing Savings (15% vs 20%)
- **Content Header**: "Up to 15% Savings" (line 98)
- **Content Body**: "~20% optimized" (line 117)
- **Website**: "Up to 20% Savings"
- **Action**: CHOOSE ONE:
  - [ ] **Option A**: Content is wrong, update content header to 20%
  - [ ] **Option B**: Website is wrong, update website to 15% at `products.js:151`
  - [ ] **Option C**: Use "Up to 20%" but clarify "15% typical, 20% optimized"

---

### [ ] 4. Fix Bitumax Carbon Footprint (20x Discrepancy!)
- **File**: `src/data/products.js:483`
- **Current**: `india: "20–40 MMT CO₂/year avoided"`
- **Content Says**: 0.8–1.5 MMT CO₂/year avoided
- **Action**:
  - [ ] **URGENT**: Verify correct value with engineering team
  - [ ] Update products.js OR content document to match
  - [ ] This is a MASSIVE difference - one must be wrong

---

### [ ] 5. Fix Home Page Hero Metrics (Mislabeled!)
- **File**: `src/pages/Home.jsx:17-21`
- **Problem**: Shows diesel metrics labeled as "Coal Savings"
- **Current**:
```javascript
{ label: "Coal Savings", value: "15.4M", suffix: "tonnes" }  // ❌ This is diesel!
{ label: "CO₂ Reduction", value: "49M+", suffix: "tonnes" }  // ❌ This is diesel!
{ label: "Economic Value", value: "₹67k", suffix: "crore" }  // ❌ This is diesel forex!
```
- **Action**: CHOOSE ONE:
  - [ ] **Option A**: Relabel as diesel-specific
    ```javascript
    { label: "Diesel Fuel Saved", value: "15.4M", suffix: "tonnes" }
    { label: "Diesel CO₂ Avoided", value: "49M+", suffix: "tonnes" }
    { label: "Forex Savings (Diesel)", value: "₹67k", suffix: "crore" }
    ```
  - [ ] **Option B**: Calculate aggregate metrics across all products
  - [ ] **Option C**: Remove this section entirely

---

### [ ] 6. Lubritron Oil Life Extension (Not in Content)
- **File**: `src/data/products.js:250-251`
- **Website Claims**: "Up to 50% Extended Oil Life"
- **Content**: Not mentioned
- **Action**: CHOOSE ONE:
  - [ ] **Option A**: Verify claim and add to content document
  - [ ] **Option B**: Remove from website (lines 250-251, 279)

---

### [ ] 7. AgniShield Product (Entire Product Not in Content)
- **File**: `src/data/products.js:594-648`
- **Website**: Full product details (55 lines)
- **Content**: No mention at all
- **Action**: CHOOSE ONE:
  - [ ] **Option A**: Add AgniShield to content document
  - [ ] **Option B**: Remove from website products.js
  - [ ] **Option C**: Move to "Internal Only" pipeline if not ready

---

## ⚠️ HIGH PRIORITY FIXES (DO NEXT)

### [ ] 8. Add Data Ranges Back to All Products
- **Files**: `src/data/products.js` (all products)
- **Problem**: Website shows "up to 35%" but content shows "20-35%"
- **Products Affected**: Coalorix, Ignitron D, Ignitron P, Lubritron
- **Action**: For each product, change:
  - ❌ `"PM ↓up to 35%"`
  - ✅ `"PM ↓20-35%"`

**Detailed Changes**:

**Coalorix** (`products.js:43`):
```javascript
// Current
pollutants: "PM/soot & CO ↓up to 35%; NOₓ ↓up to 10%; SO₂ ↓up to 8%"

// Change to
pollutants: "PM/soot & CO ↓20-35%; NOₓ ↓5-10%; SO₂ ↓3-8%; Mercury proportional"
```

**Ignitron D** (`products.js:182`):
```javascript
// Current
emissions: "PM ↓up to 40%; CO ↓up to 20%; HC ↓up to 40%; NOₓ ↓up to 10%"

// Change to
emissions: "PM ↓20-40%; CO ↓10-20%; HC ↓20-40%; NOₓ ↓0-10%"
```

**Ignitron P** (`products.js:359`):
```javascript
// Current
emissions: "CO ↓up to 20%; HC ↓up to 30%; Particulates ↓up to 20%; NOₓ neutral to ↓up to 5%"

// Change to
emissions: "CO ↓10-20%; HC ↓15-30%; Particulates ↓10-20%; NOₓ neutral to ↓5%"
```

**Lubritron** (`products.js:281`):
```javascript
// Current
emissions: "CO₂ ↓up to 6%; PM/smoke ↓up to 25%; NOₓ ↓up to 10%"

// Change to
emissions: "CO₂ ↓~6%; PM/smoke ↓15-25%; NOₓ ↓5-10%"
```

---

### [ ] 9. Add InsuShield Carbon & Market Data to Content
- **Current**: Website has data, content doesn't
- **Missing from Content**:
  - India CO₂: 10-15 MtCO₂/year avoided
  - Global CO₂: 1-2 GtCO₂/year avoided
  - Global Market: $31-36B (2026) → $52-56B (2034)
  - India Market: $1-2B (2026), CAGR 12-15%
- **Action**:
  - [ ] Verify these numbers are approved
  - [ ] Add to content document section on InsuShield

---

### [ ] 10. Update Plume Dynamics Content with Specifics
- **Current Content**: "Significant water cost reduction and high ROI" (vague)
- **Website Shows**: "10-30% reduction" and "2-3 year ROI" (specific)
- **Action**:
  - [ ] Update content document line 245-249 with specific numbers
  - [ ] Change "Significant" → "10-30%"
  - [ ] Change "high ROI" → "typical ROI within 2-3 years"

---

## 📋 MEDIUM PRIORITY (WITHIN 1 MONTH)

### [ ] 11. Add Alternative Dosage Formats to Website

**Coalorix** (`products.js:54-58`):
```javascript
doseAndUse: {
    dosage: "0.1% (50-150 ppm) or 1 kg per 1,000 kg",  // Add all formats
    deployment: "Dosing at conveyor/bunker",
    compatibility: "Compatible with ESP, Baghouse, FGD, SNCR/SCR"
}
```

**Ignitron D** (`products.js:190-194`):
```javascript
doseAndUse: {
    dosage: "~10 ppm (5-20 range) or 10g per 1,000L",  // Add g/L format
    deployment: "Dosed at refineries/depots",
    compatibility: "Compatible with ULSD, BS-VI, DPF, SCR"
}
```

**Ignitron P** (`products.js:369-373`):
```javascript
doseAndDeployment: {
    dosage: "2.5 L per 1,000 L (0.25%, range 2.0-3.0 L)",  // Add range
    deployment: "Refinery/terminal dosing",
    compatibility: "Compatible with BS-VI, catalytic converters, GDI/MPFI, ethanol blends (E10/E20)"
}
```

---

### [ ] 12. Standardize Currency (Bitumax)
- **File**: `src/data/products.js:489`
- **Content**: Uses $ for hidden costs
- **Website**: Uses ₹ for hidden costs
- **Action**: CHOOSE ONE:
  - [ ] Change website to use $ (match content)
  - [ ] Change content to use ₹ (match website)
  - [ ] Show both: "₹40,000-85,000 Cr ($40-85B)"

---

### [ ] 13. Add Typical vs Optimized Context

**Coalorix** (`products.js:41`):
```javascript
// Current
coalReduction: "up to 15% optimized"

// Change to
coalReduction: "3-8% typical, 10-15% optimized"
```

**Ignitron D** (`products.js:180`):
```javascript
// Current
fuelEconomy: "up to 20% optimized"

// Change to
fuelEconomy: "3-8% typical, up to 20% optimized"
```

**Ignitron P** (`products.js:358`):
```javascript
// Current
fuelEconomy: "up to 10%"

// Change to
fuelEconomy: "4-7% mixed driving, up to 10% highway"
```

---

### [ ] 14. Add Global Coal Mining Stat to Website
- **Content**: "global coal mining hit a record 8.8 billion tonnes per annum (2024)"
- **Website**: Not mentioned
- **Action**: Add to `products.js:71-73` in Coalorix energyReality.global

---

### [ ] 15. Add Detailed India Emission Breakdowns
- **Content Has** (lines 69-72):
  - SO₂: 45-60% from coal
  - NOₓ: ~30% from coal
  - PM2.5: >15% from coal
  - Mercury: ~80% from coal
- **Website**: These details not shown
- **Action**: Consider adding to Coalorix "trueCost" section for depth

---

## 🔧 QUALITY ASSURANCE PROCESS

### [ ] 16. Establish Single Source of Truth
- [ ] Decide: Is content.md the master or website data files?
- [ ] Create update workflow
- [ ] Require both to be updated for any change

---

### [ ] 17. Create Automated Validation
- [ ] Write script to compare content.md vs website data
- [ ] Run before each deployment
- [ ] Flag any new discrepancies

---

### [ ] 18. Version Control & Change Log
- [ ] Create CHANGELOG.md
- [ ] Document all spec changes
- [ ] Require approval for technical changes

---

## PRIORITY LEVELS

| Priority | Issues | Est. Time | Deadline |
|----------|--------|-----------|----------|
| 🔴 Critical | 1-7 | 4-8 hours | 24 hours |
| ⚠️ High | 8-10 | 2-4 hours | 1 week |
| 📋 Medium | 11-15 | 4-6 hours | 1 month |
| 🔧 Process | 16-18 | 2-3 hours | Ongoing |

---

## QUICK FIX SUMMARY

**Files to Edit** (Critical Fixes Only):
1. `src/data/products.js` - Lines 20, 43, 154, 182, 191, 250-251, 359, 483
2. `src/pages/Home.jsx` - Lines 17-21
3. `grafillium-content/new-content-updated.md` - Line 98 OR verify website
4. Consider removing `products.js:594-648` (AgniShield)

**Key Decisions Needed**:
- [ ] Coalorix: 0.1% or 0.5%?
- [ ] Ignitron D: 15% or 20% max savings?
- [ ] Bitumax: 0.8-1.5 MMT or 20-40 MMT carbon?
- [ ] Lubritron: Keep or remove 50% oil life claim?
- [ ] AgniShield: Add to content or remove from website?
- [ ] Home metrics: Relabel, aggregate, or remove?

---

**Once all critical issues are fixed, run the audit again to verify.**

---

*Checklist Generated: 2026-02-01*
