interface RegularFeedProps {
  viewport?: 'desktop' | 'mobile';
}

export function RegularFeed({ viewport = 'desktop' }: RegularFeedProps) {
  return (
    <div
      style={{
        padding: 48,
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        border: '2px dashed #e5e7eb',
        borderRadius: 12,
        background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
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
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca8b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#212832', marginBottom: 6 }}>
          Regular Feed
        </div>
        <div style={{ fontSize: 13, color: '#9ca8b5', maxWidth: 360, lineHeight: 1.5 }}>
          Standard content feed with compact, text-focused cards. Different visual treatment
          from Premium Feed — simpler layouts, denser information.
        </div>
      </div>
      <div
        style={{
          marginTop: 8,
          padding: '6px 16px',
          borderRadius: 9999,
          background: '#fff7ed',
          color: '#ea580c',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Placeholder — {viewport === 'mobile' ? 'Mobile' : 'Desktop'}
      </div>
    </div>
  );
}
