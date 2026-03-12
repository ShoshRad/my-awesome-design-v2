import type { ReactNode } from 'react';

interface TrendingGridProps {
  children: ReactNode;
}

export function TrendingGrid({ children }: TrendingGridProps) {
  return (
    <div
      className="trending-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
      }}
    >
      {children}
    </div>
  );
}
