import type { ReactNode } from 'react';

interface CardGridProps {
  columns: 2 | 3;
  children: ReactNode;
}

export function CardGrid({ columns, children }: CardGridProps) {
  return (
    <div
      className="card-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '16px',
      }}
    >
      {children}
    </div>
  );
}
