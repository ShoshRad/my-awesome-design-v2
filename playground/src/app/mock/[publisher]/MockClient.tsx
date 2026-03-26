'use client';

import { useState } from 'react';
import { PUBLISHER_PROFILES, getPublisher } from '@/publishers';
import { ArticlePage } from '@/publishers/templates';
import { WIDGET_CATALOG } from '@/design-system/registry/widgets/catalog';
import { PremiumFeed } from '@/design-system/registry/widgets/PremiumFeed';
import { RegularFeed } from '@/design-system/registry/widgets/RegularFeed';
import { DeeperDive } from '@/design-system/registry/widgets/DeeperDive';
import type { Viewport } from '@/design-system/registry/widgets/types';

function WidgetRenderer({ widgetId, viewport }: { widgetId: string; viewport: Viewport }) {
  switch (widgetId) {
    case 'premium-feed':
      return <PremiumFeed viewport={viewport} />;
    case 'regular-feed':
      return <RegularFeed viewport={viewport} />;
    case 'deeper-dive':
      return <DeeperDive viewport={viewport} />;
    default:
      return (
        <div
          style={{
            padding: 48,
            textAlign: 'center',
            border: '2px dashed #e5e7eb',
            borderRadius: 12,
            color: '#9ca8b5',
            fontFamily: 'system-ui',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 600, color: '#212832', marginBottom: 8 }}>
            {WIDGET_CATALOG.find((w) => w.id === widgetId)?.name || 'Unknown Widget'}
          </div>
          <div style={{ fontSize: 13 }}>Coming soon</div>
        </div>
      );
  }
}

export function MockClient({ publisherId }: { publisherId: string }) {
  const [selectedWidget, setSelectedWidget] = useState('premium-feed');
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [selectedPublisher, setSelectedPublisher] = useState(publisherId);

  const publisher = getPublisher(selectedPublisher) || getPublisher('generic')!;
  const mockableWidgets = WIDGET_CATALOG.filter(
    (w) => w.status === 'active' || w.status === 'placeholder',
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toolbar */}
      <div
        style={{
          height: 48,
          background: '#1e1e2e',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 16,
          paddingRight: 16,
          gap: 16,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          fontFamily: 'system-ui, sans-serif',
          fontSize: 13,
        }}
      >
        <a href="/" style={{ color: '#9ca8b5', textDecoration: 'none', fontSize: 14, marginRight: 8 }}>&larr;</a>
        <span style={{ color: '#ffffff', fontWeight: 600, fontSize: 13 }}>Mock</span>
        <div style={{ width: 1, height: 24, background: '#383850' }} />

        {/* Publisher selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <label style={{ color: '#9ca8b5', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Publisher</label>
          <select
            value={selectedPublisher}
            onChange={(e) => setSelectedPublisher(e.target.value)}
            style={{ background: '#2a2a3e', color: '#ffffff', border: '1px solid #383850', borderRadius: 6, padding: '4px 8px', fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}
          >
            {PUBLISHER_PROFILES.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div style={{ width: 1, height: 24, background: '#383850' }} />

        {/* Widget selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <label style={{ color: '#9ca8b5', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Widget</label>
          <select
            value={selectedWidget}
            onChange={(e) => setSelectedWidget(e.target.value)}
            style={{ background: '#2a2a3e', color: '#ffffff', border: '1px solid #383850', borderRadius: 6, padding: '4px 8px', fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}
          >
            {mockableWidgets.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name} {w.status === 'placeholder' ? '(placeholder)' : ''}
              </option>
            ))}
            <option disabled>──────────</option>
            {WIDGET_CATALOG.filter((w) => w.status === 'coming-soon').map((w) => (
              <option key={w.id} disabled value={w.id}>
                {w.name} (coming soon)
              </option>
            ))}
          </select>
        </div>

        <div style={{ width: 1, height: 24, background: '#383850' }} />

        {/* Viewport toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <label style={{ color: '#9ca8b5', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Viewport</label>
          <div style={{ display: 'flex', borderRadius: 6, overflow: 'hidden', border: '1px solid #383850' }}>
            {(['desktop', 'mobile'] as Viewport[]).map((vp) => (
              <button
                key={vp}
                onClick={() => setViewport(vp)}
                style={{
                  padding: '4px 12px', fontSize: 12, fontWeight: 500, fontFamily: 'inherit', border: 'none', cursor: 'pointer',
                  background: viewport === vp ? '#6366f1' : '#2a2a3e',
                  color: viewport === vp ? '#ffffff' : '#9ca8b5',
                  transition: 'background 150ms, color 150ms',
                }}
              >
                {vp.charAt(0).toUpperCase() + vp.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: WIDGET_CATALOG.find((w) => w.id === selectedWidget)?.status === 'active' ? '#10b981' : '#f59e0b' }} />
          <span style={{ color: '#9ca8b5', fontSize: 12 }}>
            {WIDGET_CATALOG.find((w) => w.id === selectedWidget)?.status === 'active' ? 'Active widget' : 'Placeholder'}
          </span>
        </div>
      </div>

      {/* Mock Content */}
      <div
        style={
          viewport === 'mobile'
            ? { maxWidth: 390, margin: '0 auto', boxShadow: '0 0 0 1px #e5e7eb', minHeight: 'calc(100vh - 48px)' }
            : { minHeight: 'calc(100vh - 48px)' }
        }
      >
        <ArticlePage publisher={publisher}>
          <WidgetRenderer widgetId={selectedWidget} viewport={viewport} />
        </ArticlePage>
      </div>
    </div>
  );
}
