'use client';

import { useState } from 'react';

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
}

const WIDGET_CATALOG: WidgetDefinition[] = [
  { id: 'premium-feed', name: 'Premium Feed', status: 'active', description: 'Full premium feed experience with spotlight, trending grid, video reels, and branded carousels. The flagship Taboola widget for below-article placement.', viewports: ['desktop'] },
  { id: 'regular-feed', name: 'Regular Feed', status: 'placeholder', description: 'Standard feed widget using a simplified card set. Suitable for publishers who want a lighter integration without spotlight or video reels.', viewports: ['desktop', 'mobile'] },
  { id: 'deeper-dive', name: 'Deeper Dive', status: 'placeholder', description: 'Content-recommendation widget that surfaces long-form articles and deep reads related to the current page context.', viewports: ['desktop'] },
  { id: 'feature-placement', name: 'Feature Placement', status: 'coming-soon', description: 'Prominent content placement for featured articles and sponsored content in high-visibility positions.', viewports: ['desktop', 'mobile'] },
  { id: 'explore-more', name: 'Explore More', status: 'coming-soon', description: 'Compact inline widget embedded between paragraphs. Shows a small set of contextual recommendations.', viewports: ['desktop', 'mobile'] },
  { id: 'mid-article', name: 'Mid-Article', status: 'coming-soon', description: 'Mid-article placement that blends with editorial content. Appears after the third or fourth paragraph.', viewports: ['desktop', 'mobile'] },
  { id: 'read-more', name: 'Read More', status: 'coming-soon', description: 'End-of-article recommendation widget that encourages readers to continue exploring related content on the same site.', viewports: ['desktop', 'mobile'] },
];

/* ------------------------------------------------------------------ */
/*  Publisher demos                                                     */
/* ------------------------------------------------------------------ */

interface PublisherDemoGroup {
  publisher: string;
  demos: { label: string; href: string }[];
}

const PUBLISHER_DEMOS: PublisherDemoGroup[] = [
  {
    publisher: 'News Live',
    demos: [
      { label: 'Premium Feed', href: '/demo/news-live/premium-feed' },
    ],
  },
  {
    publisher: 'Business Insider',
    demos: [
      { label: 'Premium Feed (Full)', href: '/demo/business-insider/premium-feed' },
      { label: 'Premium Feed (Current)', href: '/demo/business-insider/premium-feed-current' },
      { label: 'Premium Feed (Mobile)', href: '/business-insider-mobile' },
    ],
  },
  {
    publisher: 't-online',
    demos: [
      { label: 'Premium Feed', href: '/demo/t-online/premium-feed' },
    ],
  },
  {
    publisher: 'USA TODAY',
    demos: [
      { label: 'Premium Feed', href: '/demo/usa-today/premium-feed' },
    ],
  },
  {
    publisher: 'CBS News',
    demos: [
      { label: 'Premium Feed', href: '/demo/cbs-news/premium-feed' },
    ],
  },
];

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
/*  Widget status badge                                                 */
/* ------------------------------------------------------------------ */

function widgetStatusBadge(status: WidgetStatus) {
  const config: Record<WidgetStatus, { dotColor: string; label: string; bg: string; color: string }> = {
    active: { dotColor: '#10b981', label: 'Active', bg: '#f0fdf4', color: '#166534' },
    placeholder: { dotColor: '#f59e0b', label: 'Placeholder', bg: '#fffbeb', color: '#92400e' },
    'coming-soon': { dotColor: '#9ca3af', label: 'Coming Soon', bg: '#f3f4f6', color: '#6b7280' },
  };
  const c = config[status];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 9999, fontSize: 11, fontWeight: 500, background: c.bg, color: c.color, fontFamily: 'system-ui, sans-serif' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.dotColor, flexShrink: 0 }} />
      {c.label}
    </span>
  );
}


/* ------------------------------------------------------------------ */
/*  Main page — Widget Showcase                                         */
/* ------------------------------------------------------------------ */

export default function WidgetShowcasePage() {
  const [widgetsExpanded, setWidgetsExpanded] = useState(true);
  const [demosExpanded, setDemosExpanded] = useState(true);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ height: 56, display: 'flex', alignItems: 'center', paddingLeft: 24, paddingRight: 24, borderBottom: '1px solid #e5e7eb', background: 'white', position: 'sticky', top: 0, zIndex: 50 }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#212832', margin: 0 }}>Publisher Product Playground</h1>
        <div style={{ flex: 1 }} />
        <a href="/sandbox" style={{ padding: '6px 16px', borderRadius: 8, background: '#212832', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>Sandbox</a>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <aside style={{ width: 288, minWidth: 288, background: 'white', borderRight: '1px solid #e5e7eb', position: 'sticky', top: 56, height: 'calc(100vh - 56px)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {/* WIDGETS section */}
          <div style={{ padding: '20px 16px 8px' }}>
            <button onClick={() => setWidgetsExpanded((p) => !p)} style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca8b5', marginBottom: 12, fontFamily: 'inherit' }}>
              <ChevronIcon expanded={widgetsExpanded} />
              Widgets
              <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 500, background: '#f3f4f6', color: '#4c5560', borderRadius: 9999, padding: '1px 8px', lineHeight: '18px' }}>{WIDGET_CATALOG.length}</span>
            </button>

            {widgetsExpanded && (
              <div>
                {WIDGET_CATALOG.map((widget) => {
                  const isComingSoon = widget.status === 'coming-soon';
                  return (
                    <a
                      key={widget.id}
                      href={isComingSoon ? undefined : `/widget/${widget.id}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '5px 10px',
                        borderRadius: 6, fontSize: 13, fontFamily: 'inherit', textAlign: 'left', textDecoration: 'none',
                        color: isComingSoon ? '#c4cad2' : '#4c5560',
                        cursor: isComingSoon ? 'default' : 'pointer',
                        opacity: isComingSoon ? 0.6 : 1,
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: widget.status === 'active' ? '#10b981' : widget.status === 'placeholder' ? '#f59e0b' : '#9ca3af', flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{widget.name}</span>
                      <span style={{ fontSize: 10, fontWeight: 500, background: widget.status === 'active' ? '#f0fdf4' : widget.status === 'placeholder' ? '#fffbeb' : '#f3f4f6', color: widget.status === 'active' ? '#166534' : widget.status === 'placeholder' ? '#92400e' : '#6b7280', borderRadius: 9999, padding: '1px 7px', lineHeight: '18px', flexShrink: 0 }}>
                        {widget.status === 'active' ? 'Active' : widget.status === 'placeholder' ? 'Placeholder' : 'Soon'}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', margin: '8px 16px' }} />

          {/* PUBLISHER DEMOS section */}
          <div style={{ padding: '8px 16px 20px' }}>
            <button onClick={() => setDemosExpanded((p) => !p)} style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca8b5', marginBottom: 12, fontFamily: 'inherit' }}>
              <ChevronIcon expanded={demosExpanded} />
              Publisher Demos
            </button>

            {demosExpanded && PUBLISHER_DEMOS.map((group) => (
              <div key={group.publisher} style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#212832', padding: '4px 10px' }}>{group.publisher}</div>
                {group.demos.map((demo) => (
                  <a key={demo.href} href={demo.href} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 10px 5px 20px', borderRadius: 6, textDecoration: 'none', color: '#4c5560', fontSize: 13 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                    {demo.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, background: '#f6f7f8', minHeight: 'calc(100vh - 56px)' }}>
          <div style={{ padding: 32 }}>
            {/* Widget Showcase */}
            <h2 style={{ fontSize: 14, fontWeight: 600, color: '#212832', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px', paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>Widget Showcase</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {WIDGET_CATALOG.map((widget) => {
                const isComingSoon = widget.status === 'coming-soon';
                return (
                  <a
                    key={widget.id}
                    href={isComingSoon ? undefined : `/widget/${widget.id}`}
                    style={{
                      background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20,
                      textAlign: 'left', textDecoration: 'none',
                      cursor: isComingSoon ? 'default' : 'pointer',
                      transition: 'box-shadow 150ms ease, border-color 150ms ease',
                      display: 'flex', flexDirection: 'column', gap: 12,
                      opacity: isComingSoon ? 0.55 : 1,
                    }}
                    onMouseEnter={isComingSoon ? undefined : (e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#d1d5db'; }}
                    onMouseLeave={isComingSoon ? undefined : (e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e5e7eb'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#212832' }}>{widget.name}</span>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {widgetStatusBadge(widget.status)}
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: '#4c5560', margin: 0, lineHeight: 1.5 }}>{widget.description}</p>
                    <div style={{ fontSize: 12, color: '#9ca8b5' }}>Viewports: {widget.viewports.join(', ')}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
