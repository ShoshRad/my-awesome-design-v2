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
import { BrandRow, CardCta, SponsorBar } from '@/design-system/registry/primitives';
import { FeedSection } from '@/design-system/registry/layouts/FeedSection';
import { CardGrid } from '@/design-system/registry/layouts/CardGrid';
import { SectionHeader } from '@/design-system/registry/layouts/SectionHeader';
import { TrendingGrid } from '@/design-system/registry/layouts/TrendingGrid';

/* ------------------------------------------------------------------ */
/*  Category groupings                                                 */
/* ------------------------------------------------------------------ */

const CATEGORIES: { label: string; key: string; ids: string[] }[] = [
  {
    label: 'Cards',
    key: 'cards',
    ids: [
      'card-1x1',
      'card-2x1',
      'card-3x1',
      'card-trending',
      'card-spotlight',
      'card-video-reel',
      'card-picks-carousel',
    ],
  },
  {
    label: 'Primitives',
    key: 'primitives',
    ids: ['brand-row', 'card-cta', 'sponsor-bar'],
  },
  {
    label: 'Layouts',
    key: 'layouts',
    ids: ['feed-section', 'card-grid', 'section-header', 'trending-grid'],
  },
];

function getEntry(id: string): ComponentEntry | undefined {
  return COMPONENT_REGISTRY.find((c) => c.id === id);
}

/* ------------------------------------------------------------------ */
/*  Component preview renderer                                         */
/* ------------------------------------------------------------------ */

function renderPreview(id: string) {
  switch (id) {
    case 'card-1x1':
      return (
        <Card1x1
          title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan"
          description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking."
          imageSrc="/assets/images/img-07-compare.png"
          ctaLabel="learn more"
          sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
        />
      );
    case 'card-2x1':
      return (
        <Card2x1
          title="The most relaxing Farm Game. No Install"
          description="Enjoy farming, stock up and make friends."
          imageSrc="/assets/images/img-04-card1.png"
          brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }}
        />
      );
    case 'card-3x1':
      return (
        <Card3x1
          title="ADT pro install gives you more time to enjoy the holidays"
          imageSrc="/assets/images/img-adt-5ff0bd.png"
          brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }}
          ctaLabel="Shop Now"
        />
      );
    case 'card-trending':
      return (
        <CardTrending
          title="McDonald's rolls out all-new menu item with The Grinch Meal"
          imageSrc="/assets/images/img-trending1.png"
          brand={{ iconSrc: '/assets/icon-ad.svg', name: 'McDonald' }}
          category="Food"
        />
      );
    case 'card-spotlight':
      return (
        <CardSpotlight
          title="Beyond the Finish Line: Marathon Runner"
          brand={{ iconSrc: '/assets/icon-ad.svg', name: 'NEWS LIVE' }}
          videoSources={[
            '/assets/videos/spotlight-1.mp4',
            '/assets/videos/spotlight-2.mp4',
            '/assets/videos/spotlight-3.mp4',
            '/assets/videos/spotlight-4.mp4',
          ]}
        />
      );
    case 'card-video-reel':
      return (
        <CardVideoReel
          title="Making these FLUFFY American Pancakes at home"
          brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Honey & milk' }}
          imageSrc="/assets/images/img-08-video1.png"
          videoSrc="/assets/videos/reel-1.mp4"
          duration="1:54"
        />
      );
    case 'card-picks-carousel':
      return (
        <CardPicksCarousel
          brand={{ iconSrc: '/assets/icon-ad.svg', name: 'verizon' }}
          items={[
            { imageSrc: '/assets/images/img-carousel1.png', title: 'Top picks for the holiday season' },
            { imageSrc: '/assets/images/img-carousel2.png', title: 'New arrivals you will love' },
          ]}
        />
      );
    case 'brand-row':
      return (
        <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}>
          <BrandRow brandIcon="/assets/icon-ad.svg" brandName="Example Brand" />
        </div>
      );
    case 'card-cta':
      return (
        <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb', display: 'flex', gap: 16 }}>
          <CardCta label="Learn More" variant="bordered" />
          <CardCta label="Shop Now" variant="inline" />
        </div>
      );
    case 'sponsor-bar':
      return (
        <div style={{ padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e5e7eb' }}>
          <SponsorBar iconSrc="/assets/icon-ad.svg" sponsorName="portal to compare" />
        </div>
      );
    case 'feed-section':
      return (
        <FeedSection>
          <div style={{ padding: 24, background: 'white', borderRadius: 8, border: '2px dashed #d1d5db', textAlign: 'center', color: '#9ca8b5', fontFamily: 'system-ui' }}>
            FeedSection wrapper — children go here
          </div>
        </FeedSection>
      );
    case 'card-grid':
      return (
        <CardGrid columns={3}>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ padding: 24, background: 'white', borderRadius: 8, border: '2px dashed #d1d5db', textAlign: 'center', color: '#9ca8b5', fontFamily: 'system-ui' }}>
              Col {n}
            </div>
          ))}
        </CardGrid>
      );
    case 'section-header':
      return <SectionHeader title="Trending Now" />;
    case 'trending-grid':
      return (
        <TrendingGrid>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ padding: 24, background: 'white', borderRadius: 8, border: '2px dashed #d1d5db', textAlign: 'center', color: '#9ca8b5', fontFamily: 'system-ui' }}>
              Cell {n}
            </div>
          ))}
        </TrendingGrid>
      );
    default:
      return <div style={{ color: '#9ca8b5', fontFamily: 'system-ui' }}>No preview available</div>;
  }
}

/* ------------------------------------------------------------------ */
/*  Chevron SVG                                                        */
/* ------------------------------------------------------------------ */

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{
        transition: 'transform 150ms ease',
        transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
        flexShrink: 0,
      }}
    >
      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#9ca8b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Category badge color helper                                        */
/* ------------------------------------------------------------------ */

function categoryBadge(category: string) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 9999,
        fontSize: 11,
        fontWeight: 500,
        background: '#f3f4f6',
        color: '#4c5560',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page component                                                */
/* ------------------------------------------------------------------ */

export default function RegistryPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    cards: true,
    primitives: true,
    layouts: true,
  });

  const selectedEntry = selectedId ? getEntry(selectedId) : null;

  const toggleCategory = (key: string) => {
    setExpandedCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalComponents = COMPONENT_REGISTRY.length;
  const latestUpdate = COMPONENT_REGISTRY.reduce(
    (latest, c) => (c.lastUpdated > latest ? c.lastUpdated : latest),
    '',
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* ── Header ── */}
      <header
        style={{
          height: 56,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 24,
          paddingRight: 24,
          borderBottom: '1px solid #e5e7eb',
          background: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#212832', margin: 0 }}>
          Premium Feed Playground
        </h1>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* ── SideNav ── */}
        <aside
          style={{
            width: 288,
            minWidth: 288,
            background: 'white',
            borderRight: '1px solid #e5e7eb',
            position: 'sticky',
            top: 56,
            height: 'calc(100vh - 56px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* COMPONENTS section */}
          <div style={{ padding: '20px 16px 8px' }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#9ca8b5',
                marginBottom: 12,
              }}
            >
              Components
            </div>

            {CATEGORIES.map((cat) => {
              const expanded = expandedCategories[cat.key] ?? false;
              const items = cat.ids.map(getEntry).filter(Boolean) as ComponentEntry[];

              return (
                <div key={cat.key} style={{ marginBottom: 4 }}>
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategory(cat.key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      width: '100%',
                      padding: '6px 8px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#212832',
                      fontFamily: 'inherit',
                    }}
                  >
                    <ChevronIcon expanded={expanded} />
                    <span>{cat.label}</span>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontSize: 11,
                        fontWeight: 500,
                        background: '#f3f4f6',
                        color: '#4c5560',
                        borderRadius: 9999,
                        padding: '1px 8px',
                        lineHeight: '18px',
                      }}
                    >
                      {items.length}
                    </span>
                  </button>

                  {/* Items */}
                  {expanded && (
                    <div style={{ paddingLeft: 12 }}>
                      {items.map((entry) => {
                        const isSelected = selectedId === entry.id;
                        return (
                          <button
                            key={entry.id}
                            onClick={() => setSelectedId(entry.id)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              width: '100%',
                              padding: '5px 10px',
                              border: 'none',
                              background: isSelected ? '#f0fdf4' : 'transparent',
                              color: isSelected ? '#174f4c' : '#4c5560',
                              fontWeight: isSelected ? 600 : 400,
                              cursor: 'pointer',
                              borderRadius: 6,
                              fontSize: 13,
                              fontFamily: 'inherit',
                              textAlign: 'left',
                            }}
                          >
                            <span
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: '#10b981',
                                flexShrink: 0,
                              }}
                            />
                            {entry.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #e5e7eb', margin: '8px 16px' }} />

          {/* SANDBOX section */}
          <div style={{ padding: '8px 16px 20px' }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#9ca8b5',
                marginBottom: 12,
              }}
            >
              Sandbox
            </div>

            <a
              href="/preview"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 10px',
                borderRadius: 6,
                textDecoration: 'none',
                color: '#212832',
                fontSize: 13,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#f59e0b',
                  flexShrink: 0,
                }}
              />
              Demo Publisher Feed
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: 10,
                  fontWeight: 600,
                  background: '#fff7ed',
                  color: '#ea580c',
                  borderRadius: 9999,
                  padding: '1px 7px',
                  lineHeight: '18px',
                }}
              >
                Preview
              </span>
            </a>

            <p
              style={{
                fontSize: 11,
                color: '#9ca8b5',
                margin: '12px 10px 0',
                lineHeight: 1.5,
              }}
            >
              Clone repo &amp; create your own mockups
            </p>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main
          style={{
            flex: 1,
            background: '#f6f7f8',
            minHeight: 'calc(100vh - 56px)',
          }}
        >
          {/* Content header */}
          <div
            style={{
              padding: '24px 32px 20px',
              borderBottom: '1px solid #e5e7eb',
              background: 'white',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
              {selectedEntry && (
                <button
                  onClick={() => setSelectedId(null)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 18,
                    color: '#4c5560',
                    padding: '2px 4px',
                    borderRadius: 4,
                    lineHeight: 1,
                    fontFamily: 'inherit',
                  }}
                  aria-label="Back to catalog"
                >
                  &larr;
                </button>
              )}
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#212832', margin: 0 }}>
                {selectedEntry ? selectedEntry.name : 'Component Registry'}
              </h2>
            </div>
            <p style={{ fontSize: 13, color: '#9ca8b5', margin: 0 }}>
              {selectedEntry
                ? selectedEntry.description
                : `${totalComponents} components \u00B7 Last updated ${latestUpdate}`}
            </p>
          </div>

          {/* Content body */}
          <div style={{ padding: 32 }}>
            {selectedEntry ? (
              /* ── Preview canvas ── */
              <div
                style={{
                  background: '#f6f7f8',
                  borderRadius: 12,
                  border: '1px solid #e5e7eb',
                  padding: 40,
                  backgroundImage:
                    'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ maxWidth: 500, width: '100%' }}>
                  {renderPreview(selectedEntry.id)}
                </div>
              </div>
            ) : (
              /* ── Catalog grid ── */
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: 20,
                }}
              >
                {COMPONENT_REGISTRY.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedId(entry.id)}
                    style={{
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'box-shadow 150ms ease, border-color 150ms ease',
                      fontFamily: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        '0 4px 12px rgba(0,0,0,0.08)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#d1d5db';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#212832' }}>
                        {entry.name}
                      </span>
                      {categoryBadge(entry.category)}
                    </div>

                    <p style={{ fontSize: 13, color: '#4c5560', margin: 0, lineHeight: 1.5 }}>
                      {entry.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: entry.figmaMatch ? '#10b981' : '#f59e0b',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 12, color: '#9ca8b5' }}>
                        {entry.figmaMatch ? 'Figma Match' : 'Pending'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
