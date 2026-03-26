import { PUBLISHER_PROFILES } from '@/publishers';
import { DemoClient } from './DemoClient';

export function generateStaticParams() {
  const publishers = PUBLISHER_PROFILES.map((p) => p.id);
  const widgets = ['premium-feed', 'premium-feed-current', 'regular-feed', 'deeper-dive'];
  return publishers.flatMap((p) => widgets.map((w) => ({ publisher: p, widget: w })));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ publisher: string; widget: string }>;
}) {
  const { publisher, widget } = await params;
  return <DemoClient publisherId={publisher} widgetId={widget} />;
}
