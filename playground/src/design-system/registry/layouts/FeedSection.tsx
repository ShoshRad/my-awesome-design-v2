import type { ReactNode } from 'react';

interface FeedSectionProps {
  children: ReactNode;
}

export function FeedSection({ children }: FeedSectionProps) {
  return <section className="feed-section">{children}</section>;
}
