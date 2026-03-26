import type { PublisherProfile } from '../types';
import { businessInsider } from './business-insider';
import { newsLive } from './news-live';
import { tOnline } from './t-online';
import { usaToday } from './usa-today';
import { cbsNews } from './cbs-news';
import { generic } from './generic';

export { businessInsider } from './business-insider';
export { newsLive } from './news-live';
export { tOnline } from './t-online';
export { usaToday } from './usa-today';
export { cbsNews } from './cbs-news';
export { generic } from './generic';

export const PUBLISHER_PROFILES: PublisherProfile[] = [
  businessInsider,
  cbsNews,
  newsLive,
  tOnline,
  usaToday,
  generic,
];

export function getPublisher(id: string): PublisherProfile | undefined {
  return PUBLISHER_PROFILES.find((p) => p.id === id);
}

export function getPublisherList(): { id: string; name: string; logo: string; category: string }[] {
  return PUBLISHER_PROFILES.map((p) => ({
    id: p.id,
    name: p.name,
    logo: p.logo,
    category: p.category,
  }));
}
