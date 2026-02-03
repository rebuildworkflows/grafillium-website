# Marketing Display Variations Reference

**Purpose:** Multiple representation options for the same data to maximize marketing flexibility

---

## COALORIX - Coal Additive

### Tagline
✅ **Display:** "Less coal. More heat. Cleaner stack."

### Savings Options
- **Technical Range:** `specs.savings` → "3–15%"
- **Marketing Headline:** `specs.savingsMarketing` → "Up to 15% Savings"

### Emissions Options
- **Technical Range:** `specs.emissions` → "20–35%"
- **Marketing Headline:** `specs.emissionsMarketing` → "Up to 35% Fewer Emissions"

### Dose Options (All represent the same amount)
- **Technical:** `specs.dose` → "0.1% w/w"
- **Simple Ratio:** `specs.doseSimple` → "1 kg per 1,000 kg"
- **Marketing:** `specs.doseMarketing` → "1 kg Dose (per 1,000 kg)"

**Marketing Use Cases:**
- Landing page hero: Use `savingsMarketing` + `emissionsMarketing` for impact
- Technical datasheet: Use `savings` + `emissions` + `dose` for precision
- Sales presentation: Use `doseSimple` for easy understanding

---

## IGNITRON D - Diesel Fuel Additive

### Tagline
✅ **Display:** "More miles. Cleaner skies. Stronger economy."

### Savings Options
- **Technical Range:** `specs.savings` → "3–20%"
- **Marketing Headline:** `specs.savingsMarketing` → "Up to 20% Savings"

### Emissions Options
- **Technical Range:** `specs.emissions` → "20–50%"
- **Marketing Headline:** `specs.emissionsMarketing` → "Up to 50% Fewer Emissions"

### Dose Options (All represent the same amount)
- **Technical with Range:** `specs.dose` → "10 ppm (5-20 range)"
- **Simple Ratio:** `specs.doseSimple` → "10 g per 1,000 L"
- **Marketing:** `specs.doseMarketing` → "10 g Dose (per 1,000 L)"
- **Technical Volume:** `specs.doseTechnical` → "0.0012% (v/v)"

**Marketing Use Cases:**
- Homepage: "Up to 20% Savings" + "Up to 50% Fewer Emissions"
- Technical spec sheet: "10 ppm (5-20 range)" + "0.0012% (v/v)"
- Sales pitch: "Just 10 grams per 1,000 litres" (emphasizes tiny dose)

---

## IGNITRON P - Petrol Fuel Additive

### Tagline
✅ **Display:** "Molecular Combustion Enhancer for Petrol."

### Savings Options
- **Technical Range:** `specs.savings` → "4–10%"
- **Marketing Headline:** `specs.savingsMarketing` → "Up to 10% Savings"

### Emissions Options
- **Technical Range:** `specs.emissions` → "10–20%"
- **Marketing Headline:** `specs.emissionsMarketing` → "Up to 20% Fewer Emissions"

### Dose Options (All represent the same amount)
- **Technical Short:** `specs.dose` → "2.5 L/1000L"
- **Simple Ratio:** `specs.doseSimple` → "2.5 L per 1,000 L"
- **Marketing:** `specs.doseMarketing` → "2.5 L Dose (per 1,000 L)"
- **Technical Volume:** `specs.doseTechnical` → "0.25% (v/v)"

**Marketing Use Cases:**
- Two-wheeler campaign: "Up to 10% Savings" + "Just 2.5 litres per 1,000"
- Technical: "0.25% (v/v)" for engineers
- Consumer facing: "2.5 L per 1,000 L" for clarity

---

## LUBRITRON - Engine Oil Additive

### Tagline
✅ **Display:** "Less friction. More miles. Longer engine life."

### Fuel Savings Options
- **Technical Range:** `specs.savings` → "4–6%"
- **Marketing Headline:** `specs.savingsMarketing` → "Up to 6% Fuel Savings"

### Wear Reduction Options
- **Technical:** `specs.wear` → "-40%"
- **Marketing Headline:** `specs.wearMarketing` → "Up to 40% Wear Reduction"

### Oil Life Extension Options
- **Technical Range:** `specs.oilLife` → "+25–50%"
- **Marketing Headline:** `specs.oilLifeMarketing` → "25–50% Longer Oil Life"

**Marketing Use Cases:**
- Fleet operator pitch: "Up to 6% Fuel Savings" + "Up to 40% Wear Reduction"
- Technical datasheet: "4-6%" + "-40%" + "+25-50%"
- Consumer brochure: All marketing versions for maximum clarity

---

## USAGE GUIDELINES

### When to Use Technical Ranges
- Engineering reports
- Technical datasheets
- Peer review documents
- Regulatory submissions
- Academic presentations

### When to Use Marketing Headlines
- Landing page heroes
- Social media posts
- Sales presentations
- Print advertisements
- Email campaigns
- Press releases

### When to Use Simple Ratios
- Sales conversations
- Customer education
- Video scripts
- Explainer content
- "How to Use" guides

### When to Use Technical Volume/Weight
- SDS (Safety Data Sheets)
- Lab protocols
- Manufacturing specs
- Quality control docs
- International standards compliance

---

## IMPLEMENTATION EXAMPLES

### Example 1: Homepage Hero
```jsx
<h2>{product.tagline}</h2>
<p>{product.specs.savingsMarketing}</p>
<p>{product.specs.emissionsMarketing}</p>
```

### Example 2: Technical Datasheet
```jsx
<table>
  <tr>
    <td>Savings Range:</td>
    <td>{product.specs.savings}</td>
  </tr>
  <tr>
    <td>Dose:</td>
    <td>{product.specs.dose}</td>
  </tr>
</table>
```

### Example 3: Sales Presentation
```jsx
<h3>Easy to Use</h3>
<p>Just add {product.specs.doseSimple}</p>
<p>Deliver {product.specs.savingsMarketing}</p>
```

### Example 4: Mixed Approach (Credibility + Impact)
```jsx
<div>
  <h2>{product.specs.savingsMarketing}</h2>
  <p className="small">Typical range: {product.specs.savings}</p>
</div>
```

---

## MATHEMATICAL EQUIVALENCES

### Coalorix
- 1 kg per 1,000 kg = 0.1% w/w ✅

### Ignitron D
- 10 g per 1,000 L ≈ 10 ppm ≈ 0.0012% v/v ✅
  (assuming diesel density ~0.84 kg/L)

### Ignitron P
- 2.5 L per 1,000 L = 0.25% v/v ✅

All representations are mathematically correct, just optimized for different audiences.

---

## BENEFITS OF MULTIPLE REPRESENTATIONS

### For Marketing
✅ Headlines that pop ("Up to 20% Savings!")
✅ Specific enough to be credible
✅ Easy to understand

### For Sales
✅ Can adjust message to audience sophistication
✅ Technical buyers get ranges and ppm
✅ Business buyers get "up to X%" claims

### For Credibility
✅ Show you're not hiding behind "up to" claims
✅ Technical variants prove you know the science
✅ Ranges show honesty about variability

### For Compliance
✅ Regulatory-friendly technical specs available
✅ Can switch between volume/weight as needed
✅ Traceable to source data

---

## UPDATED DATA STRUCTURE

```javascript
specs: {
    // Technical ranges (for engineers)
    savings: "3–15%",
    emissions: "20–35%",
    dose: "0.1% w/w",

    // Marketing variants (for customers)
    savingsMarketing: "Up to 15% Savings",
    emissionsMarketing: "Up to 35% Fewer Emissions",
    doseMarketing: "1 kg Dose (per 1,000 kg)",

    // Simple variants (for sales conversations)
    doseSimple: "1 kg per 1,000 kg",

    // Technical variants (for compliance)
    doseTechnical: "0.0012% (v/v)" // Ignitron D only
}
```

---

**Status:** ✅ ALL PRODUCTS UPDATED
**Marketing Flexibility:** MAXIMUM
**Technical Accuracy:** PRESERVED

---

*Created: January 27, 2026*
*Purpose: Marketing & Sales Display Reference*
*Products Covered: Coalorix, Ignitron D, Ignitron P, Lubritron*
