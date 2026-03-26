import { PUBLISHER_PROFILES } from '@/publishers';
import { MockClient } from './MockClient';

export function generateStaticParams() {
  return PUBLISHER_PROFILES.map((p) => ({ publisher: p.id }));
}

export default async function MockPage({ params }: { params: Promise<{ publisher: string }> }) {
  const { publisher } = await params;
  return <MockClient publisherId={publisher} />;
}
