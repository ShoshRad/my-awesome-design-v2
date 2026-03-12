export type AuditStatus = 'passed' | 'gaps_found' | 'not_audited';

export interface ComponentEntry {
  id: string;
  name: string;
  category: 'cards' | 'primitives' | 'layouts';
  description: string;
  filePath: string;
  status: AuditStatus;
  figmaMatch: boolean;
  lastUpdated: string;
}

export const COMPONENT_REGISTRY: ComponentEntry[] = [
  // Cards
  {
    id: 'card-1x1',
    name: 'Card1x1',
    category: 'cards',
    description: 'Full-width feature card with large image, title, description, and optional CTA',
    filePath: 'src/design-system/registry/cards/Card1x1/Card1x1.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-2x1',
    name: 'Card2x1',
    category: 'cards',
    description: 'Two-column card with image, brand/sponsor, title, and optional CTA',
    filePath: 'src/design-system/registry/cards/Card2x1/Card2x1.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-3x1',
    name: 'Card3x1',
    category: 'cards',
    description: 'Three-column compact card with short image and minimal content',
    filePath: 'src/design-system/registry/cards/Card3x1/Card3x1.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-trending',
    name: 'CardTrending',
    category: 'cards',
    description: 'Horizontal card with small image left and content right, used in 2x2 grid',
    filePath: 'src/design-system/registry/cards/CardTrending/CardTrending.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-spotlight',
    name: 'CardSpotlight',
    category: 'cards',
    description: 'Video spotlight with stepper progress and auto-advance',
    filePath: 'src/design-system/registry/cards/CardSpotlight/CardSpotlight.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-video-reel',
    name: 'CardVideoReel',
    category: 'cards',
    description: 'Vertical video card for horizontal carousel, plays on hover',
    filePath: 'src/design-system/registry/cards/CardVideoReel/CardVideoReel.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-picks-carousel',
    name: 'CardPicksCarousel',
    category: 'cards',
    description: 'Branded carousel with horizontally scrolling content cards',
    filePath: 'src/design-system/registry/cards/CardPicksCarousel/CardPicksCarousel.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },

  // Primitives
  {
    id: 'brand-row',
    name: 'BrandRow',
    category: 'primitives',
    description: 'Brand icon and name row displayed below card image',
    filePath: 'src/design-system/registry/primitives/BrandRow.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-cta',
    name: 'CardCta',
    category: 'primitives',
    description: 'Call-to-action button for cards with bordered or inline variants',
    filePath: 'src/design-system/registry/primitives/CardCta.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'sponsor-bar',
    name: 'SponsorBar',
    category: 'primitives',
    description: 'Sponsor bar displayed above card image with icon and sponsor name',
    filePath: 'src/design-system/registry/primitives/SponsorBar.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },

  // Layouts
  {
    id: 'feed-section',
    name: 'FeedSection',
    category: 'layouts',
    description: 'Wrapper for a feed section with consistent vertical spacing',
    filePath: 'src/design-system/registry/layouts/FeedSection.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'card-grid',
    name: 'CardGrid',
    category: 'layouts',
    description: 'Responsive grid layout for 2-column or 3-column card arrangements',
    filePath: 'src/design-system/registry/layouts/CardGrid.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'section-header',
    name: 'SectionHeader',
    category: 'layouts',
    description: 'Section title header used above trending, spotlight, and carousel sections',
    filePath: 'src/design-system/registry/layouts/SectionHeader.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
  {
    id: 'trending-grid',
    name: 'TrendingGrid',
    category: 'layouts',
    description: '2x2 grid layout specifically for trending horizontal cards',
    filePath: 'src/design-system/registry/layouts/TrendingGrid.tsx',
    status: 'passed',
    figmaMatch: true,
    lastUpdated: '2026-03-12',
  },
];
