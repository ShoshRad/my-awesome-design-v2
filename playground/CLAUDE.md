# Premium Feed Playground

## Two Roles — Read Carefully

This project has TWO distinct user roles. Before making ANY changes, determine which role applies.

### Role 1: ARCHITECT (Registry Owner)
**Who:** Design system maintainers who add/update card types and components.

**Permissions:**
- CAN modify `src/design-system/registry/` — add new cards, update existing ones
- CAN modify `src/design-system/tokens/` — add/update design tokens
- CAN modify `src/design-system/utils/healthRegistry.ts` — register new components
- CAN modify `src/design-system/registry/index.ts` — export new components
- CAN create new card types following the established pattern
- MUST update the health registry when adding components
- MUST follow the component file structure: `ComponentName/ComponentName.tsx`, `ComponentName.styles.css`, `index.ts`

**FORBIDDEN for Architect:**
- Do NOT modify sandbox experiments (those belong to sandbox users)
- Do NOT break existing component APIs without updating all usages

### Role 2: SANDBOX (Feed Experimenter)
**Who:** Anyone who clones this repo to mock up publisher feeds.

**Permissions:**
- CAN create files in `src/design-system/sandbox/` — new publisher feed mockups
- CAN create new routes in `src/app/` — preview pages for mockups
- CAN import and compose any component from the registry
- CAN use a vibe coding platform to build feeds visually

**FORBIDDEN for Sandbox:**
- Do NOT modify anything in `src/design-system/registry/`
- Do NOT modify design tokens in `src/design-system/tokens/`
- Do NOT modify `src/design-system/utils/healthRegistry.ts`
- Do NOT modify the registry index files

## Project Structure

```
src/
├── app/                          # Next.js app routes
│   ├── page.tsx                  # Registry catalog (landing page)
│   └── preview/page.tsx          # Full feed preview
├── design-system/
│   ├── tokens/                   # Design tokens (ARCHITECT only)
│   │   ├── feed-tokens.css       # CSS custom properties
│   │   └── index.ts              # Typed token exports
│   ├── registry/                 # Component registry (ARCHITECT only)
│   │   ├── cards/                # Card components
│   │   │   ├── Card1x1/          # Full-width feature card
│   │   │   ├── Card2x1/          # Two-column card
│   │   │   ├── Card3x1/          # Three-column card
│   │   │   ├── CardTrending/     # Horizontal trending card
│   │   │   ├── CardSpotlight/    # Video spotlight with stepper
│   │   │   ├── CardVideoReel/    # Vertical video card
│   │   │   └── CardPicksCarousel/# Branded carousel
│   │   ├── primitives/           # Shared sub-components
│   │   │   ├── BrandRow           # Brand icon + name
│   │   │   ├── CardCta            # CTA button
│   │   │   └── SponsorBar         # Sponsor bar above image
│   │   ├── layouts/              # Layout wrappers
│   │   │   ├── FeedSection        # Section wrapper
│   │   │   ├── CardGrid           # 2/3 column grid
│   │   │   ├── SectionHeader      # Section title
│   │   │   └── TrendingGrid       # 2x2 trending grid
│   │   └── index.ts              # Central registry export
│   ├── sandbox/                  # Experiments (SANDBOX users)
│   ├── blueprints/               # Promoted layouts (ARCHITECT)
│   └── utils/
│       └── healthRegistry.ts     # Component tracking
└── public/assets/                # Images, videos, icons
```

## Adding a New Card Type (ARCHITECT)

1. Create directory: `src/design-system/registry/cards/CardNewType/`
2. Create files:
   - `CardNewType.tsx` — React component with typed props
   - `CardNewType.styles.css` — Plain CSS with BEM naming
   - `index.ts` — Named export
3. Export from `src/design-system/registry/cards/index.ts`
4. Register in `src/design-system/utils/healthRegistry.ts`
5. Add preview to `src/app/page.tsx` registry catalog

## Creating a Publisher Feed Mockup (SANDBOX)

1. Create: `src/design-system/sandbox/PublisherName/PublisherFeed.tsx`
2. Import cards from registry: `import { Card1x1, Card2x1, CardGrid } from '@/design-system/registry'`
3. Compose your feed layout
4. Optionally create a route: `src/app/publisher-name/page.tsx`

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4 (for layout/utility, NOT for card component internals)
- Plain CSS with CSS custom properties for card components
- Desktop only (1920px viewport, 867px main column)

## Design Tokens

All tokens come from the Figma Premium Feed design. They are defined as CSS custom properties in `tokens/feed-tokens.css` and as TypeScript constants in `tokens/index.ts`.

Cards use plain CSS with these variables — NOT Tailwind classes for core card styling. Tailwind is used for page layout and utility purposes only.
