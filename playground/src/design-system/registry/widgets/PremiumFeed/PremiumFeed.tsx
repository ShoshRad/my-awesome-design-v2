'use client';

import { Card1x1 } from '@/design-system/registry/cards/Card1x1';
import { Card2x1 } from '@/design-system/registry/cards/Card2x1';
import { Card3x1 } from '@/design-system/registry/cards/Card3x1';
import { CardTrending } from '@/design-system/registry/cards/CardTrending';
import { CardSpotlight } from '@/design-system/registry/cards/CardSpotlight';
import { CardVideoReel } from '@/design-system/registry/cards/CardVideoReel';
import { CardPicksCarousel } from '@/design-system/registry/cards/CardPicksCarousel';
import { FeedSection, CardGrid, SectionHeader, TrendingGrid } from '@/design-system/registry/layouts';

interface PremiumFeedProps {
  publisherName?: string;
  viewport?: 'desktop' | 'mobile';
}

export function PremiumFeed({ viewport = 'desktop' }: PremiumFeedProps) {
  if (viewport === 'mobile') {
    return (
      <div
        style={{
          padding: 40,
          textAlign: 'center',
          color: '#9ca8b5',
          fontFamily: 'system-ui, sans-serif',
          border: '2px dashed #e5e7eb',
          borderRadius: 12,
          background: '#fafafa',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 12 }}>Mobile</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#212832', marginBottom: 8 }}>
          Premium Feed — Mobile
        </div>
        <div style={{ fontSize: 13 }}>Mobile viewport components coming soon</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Section 1: Feature Card */}
      <FeedSection>
        <Card1x1
          title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan"
          description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking."
          imageSrc="/assets/images/img-07-compare.png"
          ctaLabel="learn more"
          sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
        />
      </FeedSection>

      {/* Section 2: 2-col Cards */}
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1
            title="The most relaxing Farm Game. No Install"
            description="Enjoy farming, stock up and make friends. Taonga is a whole world full of adventure!"
            imageSrc="/assets/images/img-04-card1.png"
            brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }}
          />
          <Card2x1
            title="We Tried HelloFresh & Home Chef. Here's Our Review."
            description="Meal Kit Face-Off: The Best Options for Your Dinner Plans"
            imageSrc="/assets/images/img-05-card2-264a45.png"
            brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Topdust' }}
            ctaLabel="learn more"
          />
        </CardGrid>
      </FeedSection>

      {/* Section 3: 3-col Cards */}
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1
            title="ADT pro install gives you more time to enjoy the "
            description="Your holiday dinner looks picture perfect..."
            imageSrc="/assets/images/img-adt-5ff0bd.png"
            brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }}
            ctaLabel="Shop Now"
          />
          <Card3x1
            title="7 Ways to Retire Comfortably With $1M"
            description="How long does $1,000,000 last in retirement?"
            imageSrc="/assets/images/img-fisher-5cb145.png"
            brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Fisher Investments' }}
          />
          <Card3x1
            title="US upgrades probe into 129,000 Ford vehicles following fatal collisions"
            imageSrc="/assets/images/img-ford.png"
            brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
          />
        </CardGrid>
      </FeedSection>

      {/* Section 4: Trending */}
      <FeedSection>
        <SectionHeader title="Trending Now" />
        <TrendingGrid>
          <CardTrending
            title="McDonald's rolls out all-new menu item with The Grinch Meal"
            imageSrc="/assets/images/img-trending1.png"
            brand={{ iconSrc: '/assets/images/icon-mcdonalds.png', name: 'McDonald' }}
            ctaLabel="Learn More"
          />
          <CardTrending
            title="Discover the Enchanting Coasts of Italy"
            imageSrc="/assets/images/img-trending2.png"
            brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
            category="Travel"
            ctaLabel="Learn More"
          />
          <CardTrending
            title="Festive Home Decor Inspired by The Grinch"
            imageSrc="/assets/images/img-trending3.png"
            brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
            category="lifestyle"
            ctaLabel="Learn More"
          />
          <CardTrending
            title="Introducing the latest sensation from electric cars revolution"
            imageSrc="/assets/images/img-trending4.png"
            brand={{ iconSrc: '/assets/images/icon-bmw.png', name: 'bmw' }}
            ctaLabel="Learn More"
          />
        </TrendingGrid>
      </FeedSection>

      {/* Section 5: Spotlight */}
      <FeedSection>
        <SectionHeader title="Spotlight on" />
        <CardSpotlight
          items={[
            { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Beyond the Finish Line: Marathon Runner', brand: { iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' } },
            { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Just Do It — Spring Collection 2026', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
            { videoSrc: '/assets/videos/spotlight1.mp4', title: 'How One Runner Broke the 2-Hour Barrier', brand: { iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' } },
            { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Air Max: Engineered for Every Stride', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
          ]}
        />
      </FeedSection>

      {/* Section 6: Picks Carousel */}
      <FeedSection>
        <SectionHeader title="Picks for You" />
        <CardPicksCarousel
          brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }}
          items={[
            { imageSrc: '/assets/images/img-carousel1.png', title: 'Stop overpaying for your plan' },
            { imageSrc: '/assets/images/img-carousel2.png', title: 'The one monthly subscription that covers almost every device' },
            { imageSrc: '/assets/images/img-carousel3.png', title: 'Eat, ride, and save: Uber One membership included' },
            { imageSrc: '/assets/images/img-carousel4.png', title: 'Save on iPhone 15. Dynamic Magic' },
          ]}
        />
      </FeedSection>

      {/* Section 7: Video Reels */}
      <FeedSection>
        <SectionHeader title="Latest videos" />
        <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }}>
          <CardVideoReel
            title="Ja was flying"
            brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
            imageSrc="/assets/images/img-09-video2.png"
            videoSrc="/assets/videos/reel2.mp4"
            duration="0:09"
            ctaLabel="Learn more"
          />
          <CardVideoReel
            title="Making these FLUFFY American Pancakes at home"
            brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }}
            imageSrc="/assets/images/img-08-video1.png"
            videoSrc="/assets/videos/reel1.mp4"
            duration="1:54"
            ctaLabel="Learn more"
          />
          <CardVideoReel
            title="Ja was flying"
            brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
            imageSrc="/assets/images/img-10-video3.png"
            videoSrc="/assets/videos/reel3.mp4"
            duration="0:09"
            ctaLabel="Learn more"
          />
          <CardVideoReel
            title="Making these FLUFFY American Pancakes at home"
            brand={{ iconSrc: '/assets/icon-clubmed.svg', name: 'club med' }}
            imageSrc="/assets/images/img-scroll1.png"
            videoSrc="/assets/videos/reel1.mp4"
            duration="1:54"
            ctaLabel="Learn more"
          />
        </div>
      </FeedSection>
    </div>
  );
}
