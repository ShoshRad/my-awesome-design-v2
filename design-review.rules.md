# Design Review Rules — Premium Feed Playground

## Source Documents
- Figma: https://www.figma.com/design/NtkRKYNXj7ijKnAcplpjIK/Premium-Feed-Desktop
- PRD: *(link when available)*
- Spec: *(link when available)*

---

## Publisher Context

The widget mock must look like it belongs on the publisher's actual site. This is reviewed against the **live publisher page**, not Figma.

### Source (in priority order)
1. **Live URL** of the publisher's site (preferred)
2. **Figma HTML/screenshot** of the publisher page (fallback if URL doesn't work)

### What to check against the publisher site
- **Typography feel** — do the card fonts feel consistent with the publisher's editorial typography?
- **Color palette** — does the widget's color scheme complement the publisher's page?
- **Layout density** — does the widget's spacing/density match the publisher's content density?
- **Visual language** — does it feel like a native part of the page, not a foreign embed?
- **Logo accuracy** — does the publisher logo in the widget match what's on their site?
- **Content tone** — do sample card titles/descriptions feel appropriate for this publisher?

### Per-publisher notes
*(Add publisher-specific notes as you mock each one)*

#### Business Insider
- URL: https://www.businessinsider.com
- Font: Garnett (proprietary) → substitute: Source Sans 3
- Style: Clean, modern, high-density content layout

---

## Branding

### Organic Cards (oc)
- Use the **publisher's logo** from `public/assets/logos/`
- Brand name = publisher name (e.g., "Business Insider", "NewsLive")
- Logo must be registered in `PublisherLogos` component
- Logo renders at 20x20px (matching BrandRow icon size)

### Sponsored Cards (sc)
- Use the **gray ad icon** (`/assets/icon-ad.svg`)
- Brand name = advertiser name (e.g., "ADT", "Fisher Investments")
- Uses `sponsor` prop (SponsorBar) or `brand` prop with ad icon

### How to tell the difference
- `sponsor` prop present → it's an ad/sponsored
- Real brand content (ADT, Fisher, Verizon, etc.) → sponsored
- Generic news content (headlines, articles) → organic, use publisher branding

---

## Required Components
- Component library: `src/design-system/registry/`
- Only use components that exist in the registry
- Never invent props or features not defined on the component TypeScript interface
- Never hardcode — always use shared components

---

## Patterns

### Trending Grid (TrendingGrid — 2x2 layout)
- Card 1 (top-left): **Sponsored** — ad icon + advertiser name
- Card 2 (top-right): **Organic** — publisher icon + publisher name
- Card 3 (bottom-left): **Organic** — publisher icon + publisher name
- Card 4 (bottom-right): **Sponsored** — ad icon + advertiser name
- This is the default for all demos unless specified otherwise

### Video Reel (CardVideoReel carousel)
- Card 1: **Organic** — publisher icon + publisher name
- Card 2: **Sponsored** — ad icon + advertiser name
- Card 3: Organic (repeat)
- Card 4: Sponsored (repeat)
- Alternating organic/sponsored pattern continues

### Feed Layout
- Cards stack vertically in feed
- Card gap: 8px (standard)
- Section gap: 24px
- FeedSection wrapper required around card groups

---

## Typography Overrides
- Each publisher overrides card fonts to match their own typography
- Override via CSS custom properties in the publisher's `.XX-feed` wrapper scope:
  - `--font-card-title-l`
  - `--font-card-title-m`
  - `--font-card-title-s`
  - `--font-card-desc`
  - `--font-section-header`
- If publisher font is proprietary, use closest public substitute and flag it
- Example: Business Insider uses Garnett (proprietary) → substitute: Source Sans 3

---

## Component Tiers

### Current Premium Feed (what's deployed)
Only these components are allowed:
- Card1x1, Card2x1, Card3x1
- CardGrid (for 2x1 and 3x1 layouts)
- FeedSection wrapper
- **NOT allowed:** SectionHeader, animations, CardTrending, CardSpotlight, CardVideoReel, CardPicksCarousel

### Premium Full Experience (aspirational)
All components allowed:
- Card1x1, Card2x1, Card3x1
- CardTrending (with TrendingGrid)
- CardSpotlight (video stepper)
- CardVideoReel (video carousel)
- CardPicksCarousel (branded carousel)
- SectionHeader titles
- Animations enabled
- All layout components

**Always confirm which tier is being reviewed before starting.**

---

## Publisher Logos
- Saved in `public/assets/logos/`
- Must be registered in `PUBLISHER_LOGOS` array in `src/design-system/registry/primitives/PublisherLogos/PublisherLogos.tsx`
- Render at 20x20px
- If logo is missing: attempt to fetch from Figma or web, otherwise ask

---

## Animation Requirements
- Premium Full Experience: animations enabled (hover effects, transitions)
- Current Premium Feed: NO animations of any kind, including image hover/zoom
