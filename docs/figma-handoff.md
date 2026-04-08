# Nexus Strategy — Figma-style design handoff

Use this to recreate or extend the UI in Figma. Native `.fig` files cannot be generated from code; this document mirrors how teams structure **frames**, **variables**, and **components** in Figma.

---

## 1. Frames to create (pages)

| Frame name | Route | Notes |
|------------|-------|--------|
| **Home** | `/` | Hero + Services (3 cards) |
| **Brand** | `/brand` | Pillar template: hero, deliverables grid, process, outcomes, next CTA |
| **Build** | `/build` | Same + “Platforms & stacks” section |
| **Grow** | `/grow` | Same as Brand (no stack section) |

**Responsive frames (optional):** duplicate each at **1440** (desktop), **768** (tablet), **390** (mobile). Max content width **1280px** centered.

---

## 2. Layout grid (desktop)

- **Columns:** 12  
- **Gutter:** 32px (use 40px on wide artboards if it feels tight)  
- **Margins:** 24px (mobile) → 40px (desktop)  
- **Corner radius:** **0** on cards and primary surfaces (“sharp industrial”)

---

## 3. Color variables (Figma: Local variables)

| Token / name | Hex / value | Usage |
|--------------|-------------|--------|
| `agency/base` | `#0f172a` | Page background |
| `agency/surface` | `#1e293b` | Cards, panels |
| `text/primary` | `#ffffff` | Headings |
| `text/secondary` | `#cbd5e1` | Body |
| `text/muted` | `#94a3b8` | Meta |
| `accent/orange` | `#f97316` | Brand pillar, CTAs, signal dots |
| `accent/cyan` | `#06b6d4` | Build pillar, links on hover |
| `border/subtle` | `rgba(255,255,255,0.05)` | Card & section borders |
| `border/hover` | `rgba(255,255,255,0.12)` | Card hover |

**Gradients (for hero / highlights):** orange → cyan linear (text clip or thin rules only; don’t flood large areas).

---

## 4. Text styles (Figma: type styles)

| Style name | Font | Size | Case | Tracking |
|------------|------|------|------|----------|
| **Display / Hero** | Bebas Neue | 56–72 | Uppercase | Tight (−1% to −2%) |
| **Display / Section** | Bebas Neue | 40–48 | Uppercase | Tight |
| **Display / Card title** | Bebas Neue | 22–28 | Uppercase | Tight |
| **Body / Default** | DM Sans | 16 | Sentence | Normal |
| **Body / Large** | DM Sans | 18–20 | Sentence | Normal |
| **Eyebrow** | DM Sans or Mono | 11 | Uppercase | 0.2–0.25em |
| **Mono / Label** | Geist Mono | 10–12 | Uppercase | Wide |

---

## 5. Components (build these in Figma)

### `Header / Site`
- Sticky top, `agency/base` at ~90% opacity + blur (match: `backdrop-blur`)
- Left: wordmark “Nexus Strategy” + orange square
- Right: text links Home · Brand · Build · Grow (mono, wide tracking)

### `Card / Service`
- Fill: `agency/surface`
- Border: 1px `border/subtle`
- Left rail: 2px solid (orange | cyan | orange→cyan gradient for Grow)
- Padding: 32–40px
- Top row: index `01`, pillar name, 56×56 icon frame (1px border)
- Title (Display), body (Body)
- Footer row: “Explore {Pillar} →” with top border separator

### `Section / Hero (Home)`
- Optional blueprint grid (see `globals.css` — fine line grid, masked fade)
- Eyebrow: `/ agency blueprint`
- Headline + gradient word “business growth”
- Primary button + text link

### `Template / Pillar page`
- Breadcrumb: ← Home / Pillar name
- Hero block with left accent rail + headline + subhead + intro
- Section “What we deliver”: 2×2 cards
- Section “How we work”: numbered list (01–04)
- Section “Outcomes”: full-width rows with bullet square
- Footer band: “Next in the system” + button

---

## 6. Effects

- **Shadows:** minimal; prefer **1px borders** over drop shadows  
- **Motion (for Prototype):** 200ms, ease-out (no bounce)  
- **Hover:** card lift −4px (optional in Figma Auto layout + interaction)

---

## 7. Machine-readable tokens

Import or reference: **`design-tokens.json`** at the project root (W3C-style token structure for tools that support JSON).

---

## 8. Quick import path into Figma

1. Create a **file** “Nexus Strategy — Design system”.  
2. Add **variables** from section 3 (colors first).  
3. Add **text styles** from section 4.  
4. Build **components** from section 5.  
5. Duplicate **frames** for each page in section 1 and assemble.

If you use **Figma Tokens** or **Variables import**, map `design-tokens.json` keys to your plugin’s format as needed.
