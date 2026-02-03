# Color System Documentation

> **Note:** These are flexible guidelines, not strict rules. UI/UX designers are encouraged to make their own decisions and adapt these principles based on design requirements, brand evolution, and user experience needs. Use this as a starting point and reference, not as absolute constraints.

---

## Product Color Accents

Each product has a unique brand color for visual identity and consistency across the website.

### Product Color Mapping

| Product | Base Color | HEX | Tailwind |
|---------|-----------|-----|----------|
| **Coalorix** | Orange | `#f97316` | `orange-500` |
| **Ignitron D** | Blue | `#3b82f6` | `blue-500` |
| **Ignitron P** | Purple | `#a855f7` | `purple-500` |
| **Lubritron** | Emerald | `#10b981` | `emerald-500` |
| **Pipeline/Future** | Indigo | `#6366f1` | `indigo-500` |

---

## Complete Product Color Systems

### 🔥 Coalorix (Thermal Power)

#### Essential Colors

**Dark Sections (Hero):**
```
Background:  #7c2d12  (orange-950)
Text/Accent: #f97316  (orange-500)
Stats:       #fb923c  (orange-400)
```

**Light Sections (Content):**
```
Card Background: #fff7ed  (orange-50)
Card Border:     #fed7aa  (orange-200)
Headings:        #ea580c  (orange-600)
```

**Main Accent:**
```
Primary: #f97316 (orange-500)
Used for: Borders, icons, highlights
```

#### Quick Reference

| Usage | Shade | HEX |
|-------|-------|-----|
| Dark backgrounds | 950 | `#7c2d12` |
| Main accent | 500 | `#f97316` |
| Stats/numbers | 400 | `#fb923c` |
| Headings | 600 | `#ea580c` |
| Light cards | 50 | `#fff7ed` |
| Card borders | 200 | `#fed7aa` |

---

### 🚛 Ignitron D (Diesel Transport)

#### Essential Colors

**Dark Sections (Hero):**
```
Background:  #172554  (blue-950)
Text/Accent: #3b82f6  (blue-500)
Stats:       #60a5fa  (blue-400)
```

**Light Sections (Content):**
```
Card Background: #eff6ff  (blue-50)
Card Border:     #bfdbfe  (blue-200)
Headings:        #2563eb  (blue-600)
```

**Main Accent:**
```
Primary: #3b82f6 (blue-500)
Used for: Borders, icons, highlights
```

#### Quick Reference

| Usage | Shade | HEX |
|-------|-------|-----|
| Dark backgrounds | 950 | `#172554` |
| Main accent | 500 | `#3b82f6` |
| Stats/numbers | 400 | `#60a5fa` |
| Headings | 600 | `#2563eb` |
| Light cards | 50 | `#eff6ff` |
| Card borders | 200 | `#bfdbfe` |

---

### 🏍️ Ignitron P (Petrol Transport)

#### Essential Colors

**Dark Sections (Hero):**
```
Background:  #581c87  (purple-950)
Text/Accent: #a855f7  (purple-500)
Stats:       #c084fc  (purple-400)
```

**Light Sections (Content):**
```
Card Background: #faf5ff  (purple-50)
Card Border:     #e9d5ff  (purple-200)
Headings:        #9333ea  (purple-600)
```

**Main Accent:**
```
Primary: #a855f7 (purple-500)
Used for: Borders, icons, highlights
```

#### Quick Reference

| Usage | Shade | HEX |
|-------|-------|-----|
| Dark backgrounds | 950 | `#581c87` |
| Main accent | 500 | `#a855f7` |
| Stats/numbers | 400 | `#c084fc` |
| Headings | 600 | `#9333ea` |
| Light cards | 50 | `#faf5ff` |
| Card borders | 200 | `#e9d5ff` |

---

### ⚙️ Lubritron (Engine Oil)

#### Essential Colors

**Dark Sections (Hero):**
```
Background:  #022c22  (emerald-950)
Text/Accent: #10b981  (emerald-500)
Stats:       #34d399  (emerald-400)
```

**Light Sections (Content):**
```
Card Background: #ecfdf5  (emerald-50)
Card Border:     #a7f3d0  (emerald-200)
Headings:        #059669  (emerald-600)
```

**Main Accent:**
```
Primary: #10b981 (emerald-500)
Used for: Borders, icons, highlights
```

#### Quick Reference

| Usage | Shade | HEX |
|-------|-------|-----|
| Dark backgrounds | 950 | `#022c22` |
| Main accent | 500 | `#10b981` |
| Stats/numbers | 400 | `#34d399` |
| Headings | 600 | `#059669` |
| Light cards | 50 | `#ecfdf5` |
| Card borders | 200 | `#a7f3d0` |

---

### 🔮 Pipeline/Future Tech

#### Essential Colors

**Dark Sections (Hero):**
```
Background:  #312e81  (indigo-950)
Text/Accent: #6366f1  (indigo-500)
Stats:       #818cf8  (indigo-400)
```

**Light Sections (Content):**
```
Card Background: #eef2ff  (indigo-50)
Card Border:     #c7d2fe  (indigo-200)
Headings:        #4f46e5  (indigo-600)
```

**Main Accent:**
```
Primary: #6366f1 (indigo-500)
Used for: Borders, icons, highlights
```

#### Quick Reference

| Usage | Shade | HEX |
|-------|-------|-----|
| Dark backgrounds | 950 | `#312e81` |
| Main accent | 500 | `#6366f1` |
| Stats/numbers | 400 | `#818cf8` |
| Headings | 600 | `#4f46e5` |
| Light cards | 50 | `#eef2ff` |
| Card borders | 200 | `#c7d2fe` |

---

## Deriving Color Systems for Other Products

### Formula: Base Color → Full Palette

Starting with any base color (e.g., `blue-500`), derive the full palette:

#### 1. **Dark Theme (Hero Section)**
- **Background:** Use shade **950** (darkest)
- **Text/Accent:** Use shade **500** (base)
- **Stats:** Use shade **400** (slightly lighter)

#### 2. **Light Theme (Content Section)**
- **Card Background:** Use shade **50** (lightest)
- **Card Border:** Use shade **200** (soft border)
- **Headings:** Use shade **600** (darker than base)

#### 3. **Interactive Elements**
- **Active State:** Use shade **600**
- **Hover State:** Use shade **300**
- **Disabled State:** Use shade **200**

---

## General Guidelines

> **Creative Freedom:** These guidelines provide a consistent framework, but designers should feel empowered to experiment, break rules when justified, and create unique solutions that better serve the product's story and user needs.

### Color Shade Usage

```
50  → Light card backgrounds
100 → Gradient backgrounds
200 → Soft borders
300 → Hover states
400 → Stats, highlighted numbers
500 → PRIMARY ACCENT (base color)
600 → Headings, active states
700 → (rarely used)
800 → (rarely used)
900 → Dark gradients
950 → Dark backgrounds (hero sections)
```

### Application Examples

These are common patterns found in the current design - use as reference:

#### Dark Sections (Hero)
- Dark backgrounds (950), bright accents (500), lighter stats (400)

#### Light Sections (Content)
- Light backgrounds (50), soft borders (200), darker headings (600)

#### Interactive Elements
- Active states often use shade 600
- Hover states can use 300 or adjust opacity

---

## Example: Creating Ignitron D (Blue) System

### Step 1: Identify Base Color
```
Base: blue-500 (#3b82f6)
```

### Step 2: Generate Palette

**Dark Sections:**
```
Background:  #172554  (blue-950)
Text/Accent: #3b82f6  (blue-500)
Stats:       #60a5fa  (blue-400)
```

**Light Sections:**
```
Card Background: #eff6ff  (blue-50)
Card Border:     #bfdbfe  (blue-200)
Headings:        #2563eb  (blue-600)
```

### Step 3: Apply to Components

```javascript
const ignitronDTheme = {
  dark: {
    bg: 'bg-blue-950',
    text: 'text-blue-500',
    stats: 'text-blue-400',
  },
  light: {
    bgCard: 'bg-blue-50',
    border: 'border-blue-200',
    heading: 'text-blue-600',
  },
  active: 'text-blue-600 border-blue-600',
};
```

---

## Implementation Checklist

When adding a new product (adapt as needed):

- [ ] Choose base accent color
- [ ] Update theme functions in components
- [ ] Test across sections and ensure good contrast

---

## Color Contrast Requirements

### Accessibility Standards

- **Large text (18px+):** Minimum 3:1 contrast ratio
- **Normal text (16px):** Minimum 4.5:1 contrast ratio
- **Interactive elements:** Minimum 3:1 contrast ratio

### Safe Combinations

✅ **Dark backgrounds (950) + Light text (white, 50, 100)**
✅ **Light backgrounds (50, white) + Dark text (600, 700, 900)**
✅ **Accent borders (500) + White backgrounds**

❌ **Avoid:** 400 text on 50 backgrounds (insufficient contrast)
❌ **Avoid:** 500 backgrounds with 600 text (too similar)

---

## Quick Start: Add New Product Color

```javascript
// 1. Choose your base color
const baseColor = 'emerald'; // or 'purple', 'indigo', etc.

// 2. Apply the formula in ProductDetail.jsx
const getTheme = (productId) => {
  switch(productId) {
    case 'your-product':
      return {
        bg: `bg-${baseColor}-950`,
        text: `text-${baseColor}-500`,
        border: `border-${baseColor}-500/30`,
        gradient: `from-${baseColor}-900/50 to-${baseColor}-950`,
        statsText: `text-${baseColor}-400`,
      };
  }
};

// 3. Update Home.jsx performance metrics
const products = [
  { name: 'Your Product', color: baseColor, ... }
];

// Done! ✅
```

---

## Resources

- **Tailwind Colors:** https://tailwindcss.com/docs/customizing-colors
- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Color Palette Generator:** https://uicolors.app/create

---

## Maintenance

- Keep this document updated when adding new products
- Test color changes across all breakpoints (mobile, tablet, desktop)
- Verify accessibility with contrast checkers
- Document any custom color combinations not following the formula
- **Remember:** These are living guidelines. Update them when better patterns emerge from real design work.
