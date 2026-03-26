'use client';

import { useState } from 'react';
import { COMPONENT_REGISTRY, type ComponentEntry } from '@/design-system/utils/healthRegistry';
import { Card1x1 } from '@/design-system/registry/cards/Card1x1';
import { Card2x1 } from '@/design-system/registry/cards/Card2x1';
import { Card3x1 } from '@/design-system/registry/cards/Card3x1';
import { CardTrending } from '@/design-system/registry/cards/CardTrending';
import { CardSpotlight } from '@/design-system/registry/cards/CardSpotlight';
import { CardVideoReel } from '@/design-system/registry/cards/CardVideoReel';
import { CardPicksCarousel } from '@/design-system/registry/cards/CardPicksCarousel';
import { CardStreamMobile } from '@/design-system/registry/cards/CardStreamMobile';
import { BrandRow, CardCta, SponsorBar, PublisherLogos } from '@/design-system/registry/primitives';
import { FeedSection } from '@/design-system/registry/layouts/FeedSection';
import { CardGrid } from '@/design-system/registry/layouts/CardGrid';
import { SectionHeader } from '@/design-system/registry/layouts/SectionHeader';
import { TrendingGrid } from '@/design-system/registry/layouts/TrendingGrid';
import { useParams } from 'next/navigation';

/* ------------------------------------------------------------------ */
/*  Widget catalog                                                      */
/* ------------------------------------------------------------------ */

type WidgetStatus = 'active' | 'placeholder' | 'coming-soon';

interface WidgetDefinition {
  id: string;
  name: string;
  status: WidgetStatus;
  description: string;
  viewports: string[];
  components?: string[];
  primitives?: string[];
  layouts?: string[];
}

const WIDGET_CATALOG: WidgetDefinition[] = [
  {
    id: 'premium-feed',
    name: 'Premium Feed',
    status: 'active',
    description: 'Full premium feed experience with spotlight, trending grid, video reels, and branded carousels. The flagship Taboola widget for below-article placement.',
    viewports: ['desktop'],
    components: ['card-1x1', 'card-2x1', 'card-3x1', 'card-trending', 'card-spotlight', 'card-video-reel', 'card-picks-carousel', 'card-stream-mobile'],
    primitives: ['brand-row', 'card-cta', 'sponsor-bar', 'publisher-logos'],
    layouts: ['feed-section', 'card-grid', 'section-header', 'trending-grid'],
  },
  {
    id: 'regular-feed',
    name: 'Regular Feed',
    status: 'placeholder',
    description: 'Standard feed widget using a simplified card set. Suitable for publishers who want a lighter integration without spotlight or video reels.',
    viewports: ['desktop', 'mobile'],
  },
  {
    id: 'deeper-dive',
    name: 'Deeper Dive',
    status: 'placeholder',
    description: 'Content-recommendation widget that surfaces long-form articles and deep reads related to the current page context.',
    viewports: ['desktop'],
  },
  {
    id: 'read-more',
    name: 'Read More',
    status: 'coming-soon',
    description: 'End-of-article recommendation widget that encourages readers to continue exploring related content on the same site.',
    viewports: ['desktop', 'mobile'],
  },
];

/* ------------------------------------------------------------------ */
/*  Publisher demos config                                              */
/* ------------------------------------------------------------------ */

interface DemoLink {
  publisher: string;
  label: string;
  href: string;
}

const WIDGET_DEMOS: Record<string, DemoLink[]> = {
  'premium-feed': [
    { publisher: 'News Live', label: 'Premium Feed', href: '/demo/news-live/premium-feed' },
    { publisher: 'Business Insider', label: 'Full Experience', href: '/demo/business-insider/premium-feed' },
    { publisher: 'Business Insider', label: 'Current Feed', href: '/demo/business-insider/premium-feed-current' },
    { publisher: 't-online', label: 'Premium Feed', href: '/demo/t-online/premium-feed' },
    { publisher: 'USA TODAY', label: 'Premium Feed', href: '/demo/usa-today/premium-feed' },
    { publisher: 'CBS News', label: 'Premium Feed', href: '/demo/cbs-news/premium-feed' },
  ],
  'regular-feed': [],
  'deeper-dive': [],
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

function getEntry(id: string): ComponentEntry | undefined {
  return COMPONENT_REGISTRY.find((c) => c.id === id);
}

/* ------------------------------------------------------------------ */
/*  Component preview renderer                                         */
/* ------------------------------------------------------------------ */

const MOBILE_SUPPORTED = new Set(['card-1x1', 'card-trending', 'card-spotlight', 'card-stream-mobile']);

function renderPreview(id: string, viewport: 'desktop' | 'mobile' = 'desktop') {
  if (viewport === 'mobile') {
    return renderMobilePreview(id);
  }
  switch (id) {
    case 'card-1x1':
      return <Card1x1 title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan" description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking." imageSrc="/assets/images/img-07-compare.png" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />;
    case 'card-2x1':
      return (
        <CardGrid columns={2}>
          <Card2x1 title="The most relaxing Farm Game. No Install" description="Enjoy farming, stock up and make friends." imageSrc="/assets/images/img-04-card1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }} />
          <Card2x1 title="We Tried HelloFresh &amp; Home Chef. Here's Our Review." description="Meal Kit Face-Off: The Best Options for Your Dinner Plans" imageSrc="/assets/images/img-05-card2-264a45.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Topdust' }} ctaLabel="learn more" />
        </CardGrid>
      );
    case 'card-3x1':
      return (
        <CardGrid columns={3}>
          <Card3x1 title="ADT pro install gives you more time to enjoy the" description="Your holiday dinner looks picture perfect..." imageSrc="/assets/images/img-adt-5ff0bd.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }} ctaLabel="Shop Now" />
          <Card3x1 title="7 Ways to Retire Comfortably With $1M" description="How long does $1,000,000 last in retirement?" imageSrc="/assets/images/img-fisher-5cb145.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Fisher Investments' }} />
          <Card3x1 title="US upgrades probe into 129,000 Ford vehicles following fatal collisions" imageSrc="/assets/images/img-ford.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'NEWS LIVE' }} />
        </CardGrid>
      );
    case 'card-trending':
      return <CardTrending title="McDonald's rolls out all-new menu item with The Grinch Meal" imageSrc="/assets/images/img-trending1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'McDonald' }} category="Food" />;
    case 'card-spotlight':
      return <CardSpotlight title="Beyond the Finish Line: Marathon Runner" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'NEWS LIVE' }} videoSources={['/assets/videos/spotlight-1.mp4', '/assets/videos/spotlight-2.mp4', '/assets/videos/spotlight-3.mp4', '/assets/videos/spotlight-4.mp4']} />;
    case 'card-video-reel':
      return <CardVideoReel title="Making these FLUFFY American Pancakes at home" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Honey & milk' }} imageSrc="/assets/images/img-08-video1.png" videoSrc="/assets/videos/reel-1.mp4" duration="1:54" />;
    case 'card-picks-carousel':
      return <CardPicksCarousel brand={{ iconSrc: '/assets/icon-ad.svg', name: 'verizon' }} items={[{ imageSrc: '/assets/images/img-carousel1.png', title: 'Top picks for the holiday season' }, { imageSrc: '/assets/images/img-carousel2.png', title: 'New arrivals you will love' }]} />;
    case 'card-stream-mobile':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 374 }}>
          <CardStreamMobile title="Lamar Jackson will likely be NFL MVP, but should we redefine award?" imageSrc="/assets/images/img-trending1.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
          <CardStreamMobile title="Is your dog under the age of 8? Now is the time to get pet health insurance!" imageSrc="/assets/images/img-trending2.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'chayuta' }} ctaLabel="learn more" />
        </div>
      );
    case 'brand-row':
      return <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}><BrandRow brandIcon="/assets/icon-ad.svg" brandName="Example Brand" /></div>;
    case 'card-cta':
      return <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb', display: 'flex', gap: 16 }}><CardCta label="Learn More" variant="bordered" /><CardCta label="Shop Now" variant="inline" /></div>;
    case 'sponsor-bar':
      return <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}><SponsorBar iconSrc="/assets/icon-ad.svg" sponsorName="portal to compare" /></div>;
    case 'publisher-logos':
      return <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}><PublisherLogos /></div>;
    case 'feed-section':
      return <FeedSection><div style={{ padding: 24, background: 'white', borderRadius: 8, border: '2px dashed #d1d5db', textAlign: 'center', color: '#9ca8b5', fontFamily: 'system-ui' }}>FeedSection wrapper — children go here</div></FeedSection>;
    case 'card-grid':
      return <CardGrid columns={3}>{[1, 2, 3].map((n) => <div key={n} style={{ padding: 24, background: 'white', borderRadius: 8, border: '2px dashed #d1d5db', textAlign: 'center', color: '#9ca8b5', fontFamily: 'system-ui' }}>Col {n}</div>)}</CardGrid>;
    case 'section-header':
      return <SectionHeader title="Trending Now" />;
    case 'trending-grid':
      return <TrendingGrid>{[1, 2, 3, 4].map((n) => <div key={n} style={{ padding: 24, background: 'white', borderRadius: 8, border: '2px dashed #d1d5db', textAlign: 'center', color: '#9ca8b5', fontFamily: 'system-ui' }}>Cell {n}</div>)}</TrendingGrid>;
    default:
      return <div style={{ color: '#9ca8b5', fontFamily: 'system-ui' }}>No preview available</div>;
  }
}

function renderMobilePreview(id: string) {
  switch (id) {
    case 'card-1x1':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca8b5', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Default (16:9)</div>
          <Card1x1 title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan" description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking." imageSrc="/assets/images/img-07-compare.png" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
          <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca8b5', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 8 }}>Social (1:1)</div>
          <Card1x1 variant="social" title="The Most Relaxing Farm Game of 2026 — No Install Needed" imageSrc="/assets/images/img-04-card1.png" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: Island Farm' }} />
          <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca8b5', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 8 }}>Social Tall (4:7)</div>
          <Card1x1 variant="social-tall" title="Redesign Any Room in Minutes with AI" description="Upload a photo of your space and watch it transform. Choose from 50+ designer styles." imageSrc="/assets/images/img-25-tech.png" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Roomvo' }} />
        </div>
      );
    case 'card-trending':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CardStreamMobile title="McDonald's rolls out all-new menu item with The Grinch Meal" imageSrc="/assets/images/img-trending1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'McDonald' }} ctaLabel="Learn More" />
          <CardStreamMobile title="Discover the Enchanting Coasts of Italy" imageSrc="/assets/images/img-trending2.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
          <CardStreamMobile title="Festive Home Decor Inspired by The Grinch" imageSrc="/assets/images/img-trending3.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
          <CardStreamMobile title="Introducing the latest sensation from electric cars revolution" imageSrc="/assets/images/img-trending4.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'bmw' }} ctaLabel="Learn More" />
        </div>
      );
    case 'card-spotlight':
      return (
        <CardSpotlight
          variant="mobile"
          items={[
            { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Beyond the Finish Line: Marathon Runner', brand: { iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }, ctaLabel: 'Read More' },
            { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Just Do It — Spring Collection 2026', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' }, ctaLabel: 'Read More' },
            { videoSrc: '/assets/videos/spotlight1.mp4', title: 'How One Runner Broke the 2-Hour Barrier', brand: { iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }, ctaLabel: 'Read More' },
            { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Air Max: Engineered for Every Stride', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' }, ctaLabel: 'Read More' },
          ]}
        />
      );
    case 'card-stream-mobile':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CardStreamMobile title="Lamar Jackson will likely be NFL MVP, but should we redefine award?" imageSrc="/assets/images/img-trending1.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
          <CardStreamMobile title="Is your dog under the age of 8? Now is the time to get pet health insurance!" imageSrc="/assets/images/img-trending2.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'chayuta' }} ctaLabel="learn more" />
          <CardStreamMobile title="Workers are coffee badging to get around return-to-office mandates" imageSrc="/assets/images/img-trending3.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
          <CardStreamMobile title='This "Botox In a Bottle" Sold Out at Target (And This is Why)' imageSrc="/assets/images/img-trending4.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'beautylovelaugh' }} ctaLabel="learn more" />
        </div>
      );
    default:
      return (
        <div style={{ background: 'white', borderRadius: 12, border: '2px dashed #e5e7eb', padding: 48, textAlign: 'center' }}>
          <div style={{ width: 40, height: 64, borderRadius: 8, border: '2px solid #d1d5db', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 12, height: 2, borderRadius: 1, background: '#d1d5db' }} />
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#212832', margin: '0 0 8px' }}>Mobile variant — coming soon</h3>
          <p style={{ fontSize: 13, color: '#9ca8b5', margin: 0, lineHeight: 1.5 }}>Mobile-optimized preview is in development.</p>
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Chevron SVG                                                        */
/* ------------------------------------------------------------------ */

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 150ms ease', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0 }}>
      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#9ca8b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Widget Detail Page                                                  */
/* ------------------------------------------------------------------ */

export default function WidgetDetailPage() {
  const params = useParams();
  const widgetId = params.id as string;
  const widget = WIDGET_CATALOG.find((w) => w.id === widgetId);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [cardsExpanded, setCardsExpanded] = useState(true);
  const [primitivesExpanded, setPrimitivesExpanded] = useState(true);
  const [layoutsExpanded, setLayoutsExpanded] = useState(true);

  if (!widget) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 20, color: '#212832' }}>Widget not found</h2>
          <a href="/" style={{ color: '#4c5560', fontSize: 14 }}>&larr; Back to Showcase</a>
        </div>
      </div>
    );
  }

  const demos = WIDGET_DEMOS[widget.id] || [];
  const cardComponents = (widget.components ?? []).map(getEntry).filter(Boolean) as ComponentEntry[];
  const primitiveComponents = (widget.primitives ?? []).map(getEntry).filter(Boolean) as ComponentEntry[];
  const layoutComponents = (widget.layouts ?? []).map(getEntry).filter(Boolean) as ComponentEntry[];
  const selectedEntry = selectedComponent ? getEntry(selectedComponent) : null;

  const statusConfig: Record<WidgetStatus, { dotColor: string; label: string; bg: string; color: string }> = {
    active: { dotColor: '#10b981', label: 'Active', bg: '#f0fdf4', color: '#166534' },
    placeholder: { dotColor: '#f59e0b', label: 'Placeholder', bg: '#fffbeb', color: '#92400e' },
    'coming-soon': { dotColor: '#9ca3af', label: 'Coming Soon', bg: '#f3f4f6', color: '#6b7280' },
  };
  const sc = statusConfig[widget.status];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ height: 56, display: 'flex', alignItems: 'center', paddingLeft: 24, paddingRight: 24, borderBottom: '1px solid #e5e7eb', background: 'white', position: 'sticky', top: 0, zIndex: 50, gap: 12 }}>
        <a href="/" style={{ color: '#4c5560', textDecoration: 'none', fontSize: 18, lineHeight: 1 }}>&larr;</a>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#212832', margin: 0 }}>{widget.name}</h1>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 9999, fontSize: 11, fontWeight: 500, background: sc.bg, color: sc.color }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: sc.dotColor }} />
          {sc.label}
        </span>
        <div style={{ flex: 1 }} />
        <a href="/sandbox" style={{ padding: '6px 16px', borderRadius: 8, background: '#212832', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>Sandbox</a>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <aside style={{ width: 288, minWidth: 288, background: 'white', borderRight: '1px solid #e5e7eb', position: 'sticky', top: 56, height: 'calc(100vh - 56px)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* Widget description */}
          <div style={{ padding: '20px 16px 12px' }}>
            <p style={{ fontSize: 13, color: '#4c5560', margin: 0, lineHeight: 1.5 }}>{widget.description}</p>
            <div style={{ marginTop: 8, fontSize: 12, color: '#9ca8b5' }}>Viewports: {widget.viewports.join(', ')}</div>
          </div>

          {widget.status === 'active' && (
            <>
              <div style={{ borderTop: '1px solid #e5e7eb', margin: '4px 16px' }} />

              {/* Components section */}
              <div style={{ padding: '12px 16px 8px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca8b5', marginBottom: 12 }}>Components</div>

                {/* Cards */}
                {cardComponents.length > 0 && (
                  <div style={{ marginBottom: 4 }}>
                    <button onClick={() => setCardsExpanded((p) => !p)} style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', padding: '6px 8px', border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 6, fontSize: 13, fontWeight: 600, color: '#212832', fontFamily: 'inherit' }}>
                      <ChevronIcon expanded={cardsExpanded} />
                      <span>Cards</span>
                      <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 500, background: '#f3f4f6', color: '#4c5560', borderRadius: 9999, padding: '1px 8px', lineHeight: '18px' }}>{cardComponents.length}</span>
                    </button>
                    {cardsExpanded && (
                      <div style={{ paddingLeft: 12 }}>
                        {cardComponents.map((entry) => {
                          const isSelected = selectedComponent === entry.id;
                          return (
                            <button key={entry.id} onClick={() => { setSelectedComponent(entry.id); setViewport('desktop'); }} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '5px 10px', border: 'none', background: isSelected ? '#f0fdf4' : 'transparent', color: isSelected ? '#174f4c' : '#4c5560', fontWeight: isSelected ? 600 : 400, cursor: 'pointer', borderRadius: 6, fontSize: 13, fontFamily: 'inherit', textAlign: 'left' }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                              {entry.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Primitives */}
                {primitiveComponents.length > 0 && (
                  <div style={{ marginBottom: 4 }}>
                    <button onClick={() => setPrimitivesExpanded((p) => !p)} style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', padding: '6px 8px', border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 6, fontSize: 13, fontWeight: 600, color: '#212832', fontFamily: 'inherit' }}>
                      <ChevronIcon expanded={primitivesExpanded} />
                      <span>Primitives</span>
                      <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 500, background: '#f3f4f6', color: '#4c5560', borderRadius: 9999, padding: '1px 8px', lineHeight: '18px' }}>{primitiveComponents.length}</span>
                    </button>
                    {primitivesExpanded && (
                      <div style={{ paddingLeft: 12 }}>
                        {primitiveComponents.map((entry) => {
                          const isSelected = selectedComponent === entry.id;
                          return (
                            <button key={entry.id} onClick={() => { setSelectedComponent(entry.id); setViewport('desktop'); }} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '5px 10px', border: 'none', background: isSelected ? '#f0fdf4' : 'transparent', color: isSelected ? '#174f4c' : '#4c5560', fontWeight: isSelected ? 600 : 400, cursor: 'pointer', borderRadius: 6, fontSize: 13, fontFamily: 'inherit', textAlign: 'left' }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                              {entry.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Layouts */}
                {layoutComponents.length > 0 && (
                  <div style={{ marginBottom: 4 }}>
                    <button onClick={() => setLayoutsExpanded((p) => !p)} style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', padding: '6px 8px', border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: 6, fontSize: 13, fontWeight: 600, color: '#212832', fontFamily: 'inherit' }}>
                      <ChevronIcon expanded={layoutsExpanded} />
                      <span>Layouts</span>
                      <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 500, background: '#f3f4f6', color: '#4c5560', borderRadius: 9999, padding: '1px 8px', lineHeight: '18px' }}>{layoutComponents.length}</span>
                    </button>
                    {layoutsExpanded && (
                      <div style={{ paddingLeft: 12 }}>
                        {layoutComponents.map((entry) => {
                          const isSelected = selectedComponent === entry.id;
                          return (
                            <button key={entry.id} onClick={() => { setSelectedComponent(entry.id); setViewport('desktop'); }} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '5px 10px', border: 'none', background: isSelected ? '#f0fdf4' : 'transparent', color: isSelected ? '#174f4c' : '#4c5560', fontWeight: isSelected ? 600 : 400, cursor: 'pointer', borderRadius: 6, fontSize: 13, fontFamily: 'inherit', textAlign: 'left' }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                              {entry.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Publisher Demos */}
          {demos.length > 0 && (
            <>
              <div style={{ borderTop: '1px solid #e5e7eb', margin: '8px 16px' }} />
              <div style={{ padding: '8px 16px 20px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca8b5', marginBottom: 12 }}>Publisher Demos</div>
                {demos.map((demo) => (
                  <a key={demo.href} href={demo.href} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 6, textDecoration: 'none', color: '#212832', fontSize: 13 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                    <span>{demo.publisher}</span>
                    <span style={{ color: '#9ca8b5' }}>&mdash;</span>
                    <span style={{ color: '#4c5560' }}>{demo.label}</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, background: '#f6f7f8', minHeight: 'calc(100vh - 56px)' }}>
          {widget.status !== 'active' ? (
            /* Placeholder widget */
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 32 }}>
              <div style={{ background: 'white', border: '2px dashed #e5e7eb', borderRadius: 12, padding: 48, textAlign: 'center', maxWidth: 560 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22 }}>
                  <span role="img" aria-label="design">&#9998;</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#212832', margin: '0 0 8px' }}>{widget.name}</h3>
                <p style={{ fontSize: 14, color: '#4c5560', margin: '0 0 16px', lineHeight: 1.6 }}>{widget.description}</p>
                <div style={{ marginTop: 20, padding: '12px 20px', background: '#fffbeb', borderRadius: 8, border: '1px solid #fde68a', fontSize: 13, color: '#92400e' }}>This widget is being designed</div>
              </div>
            </div>
          ) : selectedEntry ? (
            /* Component preview */
            <div style={{ padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <button onClick={() => setSelectedComponent(null)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 16, color: '#4c5560', padding: '2px 4px', borderRadius: 4, lineHeight: 1, fontFamily: 'inherit' }}>&larr;</button>
                    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#212832', margin: 0 }}>{selectedEntry.name}</h2>
                  </div>
                  <p style={{ fontSize: 13, color: '#9ca8b5', margin: 0, paddingLeft: 32 }}>{selectedEntry.description}</p>
                </div>
                <div style={{ display: 'inline-flex', borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  {(['desktop', 'mobile'] as const).map((vp) => (
                    <button key={vp} onClick={() => setViewport(vp)} style={{ padding: '6px 16px', border: 'none', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 150ms ease, color 150ms ease', borderRadius: vp === 'desktop' ? '7px 0 0 7px' : '0 7px 7px 0', background: viewport === vp ? '#212832' : 'transparent', color: viewport === vp ? '#ffffff' : '#9ca8b5' }}>
                      {vp.charAt(0).toUpperCase() + vp.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {viewport === 'desktop' ? (
                <div style={{ background: '#f6f7f8', borderRadius: 12, border: '1px solid #e5e7eb', padding: 40, backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ maxWidth: 867, width: '100%' }}>{renderPreview(selectedEntry.id, 'desktop')}</div>
                </div>
              ) : (
                <div style={{ background: '#f6f7f8', borderRadius: 12, border: '1px solid #e5e7eb', padding: 40, backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ maxWidth: 390, width: '100%' }}>{renderPreview(selectedEntry.id, 'mobile')}</div>
                </div>
              )}
            </div>
          ) : (
            /* Widget overview — show components grouped by type */
            <div style={{ padding: 32 }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, color: '#212832', margin: '0 0 16px' }}>Widget Composition</h2>
              <p style={{ fontSize: 13, color: '#4c5560', margin: '0 0 24px', lineHeight: 1.6 }}>
                This widget uses the following cards, primitives, and layouts. Click any component in the sidebar to preview it, or view a publisher demo to see the full widget in context.
              </p>

              {/* Cards */}
              {cardComponents.length > 0 && (
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 600, color: '#212832', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px', paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>Cards <span style={{ fontWeight: 400, color: '#9ca8b5', textTransform: 'none', letterSpacing: 0 }}>({cardComponents.length})</span></h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                    {cardComponents.map((entry) => (
                      <button key={entry.id} onClick={() => { setSelectedComponent(entry.id); setViewport('desktop'); }} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 150ms ease, box-shadow 150ms ease' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#212832' }}>{entry.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Primitives */}
              {primitiveComponents.length > 0 && (
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 600, color: '#212832', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px', paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>Primitives <span style={{ fontWeight: 400, color: '#9ca8b5', textTransform: 'none', letterSpacing: 0 }}>({primitiveComponents.length})</span></h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                    {primitiveComponents.map((entry) => (
                      <button key={entry.id} onClick={() => { setSelectedComponent(entry.id); setViewport('desktop'); }} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 150ms ease, box-shadow 150ms ease' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#212832' }}>{entry.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Layouts */}
              {layoutComponents.length > 0 && (
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 600, color: '#212832', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px', paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>Layouts <span style={{ fontWeight: 400, color: '#9ca8b5', textTransform: 'none', letterSpacing: 0 }}>({layoutComponents.length})</span></h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                    {layoutComponents.map((entry) => (
                      <button key={entry.id} onClick={() => { setSelectedComponent(entry.id); setViewport('desktop'); }} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: '12px 16px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 150ms ease, box-shadow 150ms ease' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#212832' }}>{entry.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
