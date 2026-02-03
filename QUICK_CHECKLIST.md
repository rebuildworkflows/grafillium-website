# ✅ Quick Implementation Checklist

**Print this page and check off items as you complete them**

---

## 📄 STAGE 0: Source Documentation (10 mins) ✅ COMPLETED

### `new-content-updated.md` - Master Content Source

**File:** `C:\Users\globql-ws\Documents\project-sushant\grafillium-content\new-content-updated.md`

- [x] 0.1. Ignitron P hero: "20% Fewer Emissions" → "12% Emission Reduction"
- [x] 0.2. Ignitron P hero: "10% Savings" → "10% Fuel Savings"
- [x] 0.3. Ignitron P national impact: "~11.3M tonnes" → "~11.3 MMT"
- [x] 0.4. Ignitron D national impact: "~49M tonnes" → "~49 MMT"
- [x] 0.5. Lubritron national impact: "~17.5M tonnes" → "~17.5 MMT"
- [x] 0.6. Bitumax carbon footprint: "M tonnes" → "MMT" (both lines)
- [x] 0.7. Verify specific pollutant percentages unchanged (HC, CO, etc.)
- [x] 0.8. Save file

**Why This Matters:**
This is the **single source of truth** for all product content. Must be updated first to ensure consistency across all channels (website, marketing, sales materials).

---

## 🎯 STAGE 1: Data Foundation (30 mins)

### `src/data/products.js` - Ignitron P Section

- [ ] 1. Find Ignitron P definition (lines ~320-399)
- [ ] 2. Search for ALL "20%" → Replace with "12%" (emission-related only)
- [ ] 3. Find "CO₂ Reduction" → Replace with "Emission Reduction"
- [ ] 4. Add "Up to" prefix to fuel economy ("10%" → "Up to 10%")
- [ ] 5. Add "Up to" prefix to emission ("12%" → "Up to 12%")
- [ ] 6. Update status to "Pilot Phase"
- [ ] 7. Find "Mt" → Replace with "MMT" (CO₂ metrics)
- [ ] 8. Save and test in browser
- [ ] 9. Verify all 4 products still work

---

## 🏠 STAGE 2: Homepage (25 mins)

### `src/pages/Home.jsx` - Technology Edge

- [ ] 10. Find Technology Edge section
- [ ] 11. Remove "Graphene-Enhanced Formula"
- [ ] 12. Remove "Made in India Innovation"
- [ ] 13. Add "Nano-particle technology"
- [ ] 14. Add "Emission reduction process"
- [ ] 15. Add "Proprietary formulations"
- [ ] 16. Add "ESG Benefits"
- [ ] 17. Keep "Proprietary patent-pending formulations"
- [ ] 18. Test visual layout

### `src/components/sections/ProductShowcase.jsx`

- [ ] 19. Find "Commercially Deployed"
- [ ] 20. Replace with "Pilot Phase"
- [ ] 21. Test display

---

## 🔧 STAGE 3: Ignitron P Components (90 mins)

### `src/components/ui/IgnitronPStatsCard.jsx`

- [ ] 22. Update Fuel Economy: "Up to 10%"
- [ ] 23. Update Emission Reduction: "Up to 12%"
- [ ] 24. Verify labels (not "CO₂")

### `src/components/ui/IgnitronPROISnapshotWidget.jsx`

- [ ] 25. Change "Mt" → "MMT"
- [ ] 26. Verify CO₂ subscript

### `src/components/infographics/IgnitronPHowItWorks.jsx`

- [ ] 27. Update overall emission to 12%
- [ ] 28. Add "Up to" to fuel consumption
- [ ] 29. Verify specific pollutants unchanged (HC 15-30%, CO 10-20%)
- [ ] 30. Check labels use "Emission" not "CO₂"

### `src/components/infographics/IgnitronPTechnicalSpecs.jsx`

- [ ] 31. Update overall emission to 12%
- [ ] 32. Verify specific pollutants table unchanged
- [ ] 33. Add "Up to" to fuel economy
- [ ] 34. Change "Mt" → "MMT" in national impact
- [ ] 35. Check labels

### `src/components/infographics/IgnitronPDeepDive.jsx`

- [ ] 36. Change "Mt" → "MMT" for CO₂ metrics
- [ ] 37. Verify CO₂ subscript formatting
- [ ] 38. Check emission percentages

### `src/components/infographics/IgnitronPBenefitsROI.jsx`

- [ ] 39. Update primary benefits: "Up to 10%", "Up to 12%"
- [ ] 40. Update performance range (add "Up to" to highway)
- [ ] 41. Change "Mt" → "MMT" in national impact
- [ ] 42. Check cost comparison table
- [ ] 43. Add micro-disclaimer (OPTIONAL):
  ```
  *Actual results may vary based on vehicle condition,
  fuel quality, and driving behavior.
  ```

---

## 🔍 STAGE 4: Verification (80 mins)

### Global Search Checks

- [ ] 44. Search: "20%" in Ignitron P → Should find NONE for overall emissions
- [ ] 45. Search: "graphene" → Should find NONE
- [ ] 46. Search: "Made in India" in homepage → Should find NONE in Tech Edge
- [ ] 47. Search: "Commercially Deployed" → Should find NONE
- [ ] 48. Search: "CO2" (no subscript) → Should be CO₂
- [ ] 49. Search: " Mt" in Ignitron P → Should be "MMT"

### Visual Checks - Homepage

- [ ] 50. Technology Edge: 4 items visible (nano, emission, proprietary, ESG)
- [ ] 51. Technology Edge: No graphene, no Made in India
- [ ] 52. Product Innovations: "Pilot Phase" visible
- [ ] 53. Ignitron P gauge: Shows correctly

### Visual Checks - Ignitron P Page

- [ ] 54. Hero: "Up to 10% Fuel Economy"
- [ ] 55. Hero: "Up to 12% Emission Reduction"
- [ ] 56. Overview tab: Correct stats
- [ ] 57. Benefits & ROI tab: Correct values
- [ ] 58. How It Works tab: Correct percentages
- [ ] 59. Technical Specs tab: Overall 12%, specifics unchanged
- [ ] 60. Deep Dive tab: MMT format
- [ ] 61. ROI widget: "11.3 MMT"
- [ ] 62. Disclaimer visible (if added)

### Browser Testing

- [ ] 63. Chrome: All pages work
- [ ] 64. Firefox: All pages work
- [ ] 65. Safari: All pages work
- [ ] 66. Edge: All pages work

### Mobile Testing

- [ ] 67. iPhone size: Responsive and readable
- [ ] 68. iPad size: Responsive and readable
- [ ] 69. Android: Responsive and readable

### Consistency Final Check

- [ ] 70. ALL fuel economy = "Up to 10%"
- [ ] 71. ALL overall emission = "Up to 12%"
- [ ] 72. ALL CO₂ metrics = "MMT" format
- [ ] 73. ALL labels = "Emission Reduction" (not "CO₂ Reduction")
- [ ] 74. NO instances of "20%" for overall emissions
- [ ] 75. NO "graphene" anywhere
- [ ] 76. NO "Made in India" in Tech Edge
- [ ] 77. Status = "Pilot Phase" everywhere

### Functionality Testing

- [ ] 78. Product navigation works
- [ ] 79. All tabs switch correctly
- [ ] 80. Hover effects work
- [ ] 81. Animations smooth
- [ ] 82. No console errors
- [ ] 83. No broken images
- [ ] 84. Page loads fast

---

## 📸 Documentation

- [ ] 85. Screenshot: Homepage (Before)
- [ ] 86. Screenshot: Homepage (After)
- [ ] 87. Screenshot: Ignitron P Hero (Before)
- [ ] 88. Screenshot: Ignitron P Hero (After)
- [ ] 89. Screenshot: Technical Specs (After)
- [ ] 90. Screenshot: Benefits ROI (After)

---

## 🚀 Deployment

- [ ] 91. Create feature branch
- [ ] 92. Commit all changes with clear messages
- [ ] 93. Push to remote
- [ ] 94. Create pull request
- [ ] 95. Code review completed
- [ ] 96. Deploy to staging
- [ ] 97. Stakeholder sign-off on staging
- [ ] 98. Deploy to production
- [ ] 99. Monitor for 30 mins post-deploy
- [ ] 100. Update documentation

---

## ✅ Sign-Off

**Developer:** _____________________ **Date:** ___________

**QA Tester:** _____________________ **Date:** ___________

**Stakeholder:** ___________________ **Date:** ___________

---

**Total Items:** 108 (8 Stage 0 ✅ Completed + 100 Website Updates)
**Items Completed:** 8/108 (Stage 0: Source Documentation ✅)
**Items Remaining:** 100/108
**Estimated Time:** 4-6 hours
**Status:** [x] In Progress (Stage 0 Complete)  [ ] Fully Completed
