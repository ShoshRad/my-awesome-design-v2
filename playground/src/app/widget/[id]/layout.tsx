export function generateStaticParams() {
  return [
    { id: 'premium-feed' },
    { id: 'regular-feed' },
    { id: 'deeper-dive' },
    { id: 'read-more' },
  ];
}

export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
