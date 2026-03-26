interface DeeperDiveProps {
  viewport?: 'desktop' | 'mobile';
}

export function DeeperDive({ viewport = 'desktop' }: DeeperDiveProps) {
  return (
    <div
      style={{
        padding: 48,
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        border: '2px dashed #e5e7eb',
        borderRadius: 12,
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f0ff 100%)',
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: '#f3f0ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#212832', marginBottom: 6 }}>
          Deeper Dive
        </div>
        <div style={{ fontSize: 13, color: '#9ca8b5', maxWidth: 360, lineHeight: 1.5 }}>
          In-depth content recommendations for engaged readers. Editorial-quality cards
          with rich media, longer descriptions, and curated topic groupings.
        </div>
      </div>
      <div
        style={{
          marginTop: 8,
          padding: '6px 16px',
          borderRadius: 9999,
          background: '#f3f0ff',
          color: '#7c3aed',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Placeholder — {viewport === 'mobile' ? 'Mobile' : 'Desktop'}
      </div>
    </div>
  );
}
