'use client';

import { Card1x1 } from '@/design-system/registry/cards/Card1x1';
import { Card2x1 } from '@/design-system/registry/cards/Card2x1';
import { Card3x1 } from '@/design-system/registry/cards/Card3x1';
import { CardTrending } from '@/design-system/registry/cards/CardTrending';
import { CardSpotlight } from '@/design-system/registry/cards/CardSpotlight';
import { CardVideoReel } from '@/design-system/registry/cards/CardVideoReel';
import { CardPicksCarousel } from '@/design-system/registry/cards/CardPicksCarousel';
import { FeedSection, CardGrid, SectionHeader, TrendingGrid } from '@/design-system/registry/layouts';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner / Header Bar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1140px] items-center px-6 py-3">
          <a
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            &larr; Back to Registry
          </a>
          <div className="ml-auto flex items-center gap-4">
            <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d97706]">
              Demo Preview
            </span>
            <h1 className="text-base font-semibold text-gray-900">
              NewsLive Publisher Feed &mdash; Desktop 1920px
            </h1>
          </div>
        </div>
      </nav>

      {/* Feed Content */}
      <main className="mx-auto" style={{ maxWidth: 'var(--main-column-width, 867px)' }}>
        <div className="px-4 py-8">

          {/* Section 1: Card1x1 — Michelin Chef */}
          <FeedSection>
            <Card1x1
              title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan"
              description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking..."
              imageSrc="/assets/images/img-07-compare.png"
              ctaLabel="learn more"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
            />
          </FeedSection>

          {/* Section 2: CardGrid 2-col — Taonga + Topdust */}
          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="The most relaxing Farm Game. No Install"
                description="Enjoy farming, stock up and make friends..."
                imageSrc="/assets/images/img-04-card1.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }}
              />
              <Card2x1
                title="We Tried HelloFresh & Home Chef. Here's Our Review."
                description="Meal Kit Face-Off..."
                imageSrc="/assets/images/img-05-card2-264a45.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Topdust' }}
                ctaLabel="learn more"
              />
            </CardGrid>
          </FeedSection>

          {/* Section 3: CardGrid 3-col — ADT + Fisher + Ford */}
          <FeedSection>
            <CardGrid columns={3}>
              <Card3x1
                title="ADT pro install gives you more time to enjoy the"
                description="Your holiday dinner looks picture perfect..."
                imageSrc="/assets/images/img-adt-5ff0bd.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }}
                ctaLabel="Shop Now"
              />
              <Card3x1
                title="7 Ways to Retire Comfortably With $1M"
                description="How long does $1,000,000 last in retirement?..."
                imageSrc="/assets/images/img-fisher-5cb145.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Fisher Investments' }}
              />
              <Card3x1
                title="US upgrades probe into 129,000 Ford vehicles following fatal collisions"
                imageSrc="/assets/images/img-ford.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'NEWS LIVE' }}
              />
            </CardGrid>
          </FeedSection>

          {/* Section 4: Trending Now */}
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
                brand={{ iconSrc: '/assets/images/icon-livenews-6596e0.png', name: 'live news' }}
                category="Travel"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Festive Home Decor Inspired by The Grinch"
                imageSrc="/assets/images/img-trending3.png"
                brand={{ iconSrc: '/assets/images/icon-livenews-6596e0.png', name: 'live news' }}
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

          {/* Section 5: Spotlight on */}
          <FeedSection>
            <SectionHeader title="Spotlight on" />
            <CardSpotlight
              title="Beyond the Finish Line: Marathon Runner"
              brand={{ iconSrc: '/assets/images/icon-livenews-6596e0.png', name: 'NEWS LIVE' }}
              videoSources={[
                '/assets/videos/spotlight1.mp4',
                '/assets/videos/spotlight2.mp4',
                '/assets/videos/spotlight1.mp4',
                '/assets/videos/spotlight2.mp4',
              ]}
            />
          </FeedSection>

          {/* Section 6: Picks for You */}
          <FeedSection>
            <SectionHeader title="Picks for You" />
            <CardPicksCarousel
              brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }}
              items={[
                { imageSrc: '/assets/images/img-carousel1.png', title: 'Stop overpaying for your plan -- bring your current device and save every month' },
                { imageSrc: '/assets/images/img-carousel2.png', title: 'The one monthly subscription that covers almost every device in your living room' },
                { imageSrc: '/assets/images/img-carousel3.png', title: 'Eat, ride, and save: Uber One membership included with select Verizon plans' },
                { imageSrc: '/assets/images/img-carousel4.png', title: 'Save on iPhone 15. Dynamic Magic' },
              ]}
            />
          </FeedSection>

          {/* Section 7: CardGrid 2-col — Seeking Alpha + Tomorrow (sponsor variant) */}
          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Discover 3 Stocks For Income + 3 Stocks For AI Growth"
                description="See which 3 AI stocks..."
                imageSrc="/assets/images/img-17-seeking.png"
                sponsor={{ iconSrc: '/assets/icon-seeking-alpha.svg', name: 'Seeking Alpha' }}
                ctaLabel="learn more"
              />
              <Card2x1
                title="Rare Earth Opportunity Emerges in Montana"
                description="This high-grade site is prime..."
                imageSrc="/assets/images/img-18-tomorrow.png"
                sponsor={{ iconSrc: '/assets/icon-tomorrow.svg', name: 'Tomorrow Investor' }}
              />
            </CardGrid>
          </FeedSection>

          {/* Section 8: Latest Videos */}
          <FeedSection>
            <SectionHeader title="Latest videos" />
            <div className="flex gap-4 overflow-x-auto pb-2">
              <CardVideoReel
                title="Making these FLUFFY American Pancakes at home"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'honeymilk' }}
                imageSrc="/assets/images/img-08-video1.png"
                videoSrc="/assets/videos/spotlight1.mp4"
                duration="1:54"
              />
              <CardVideoReel
                title="Ja was flying"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'news' }}
                imageSrc="/assets/images/img-09-video2.png"
                videoSrc="/assets/videos/spotlight2.mp4"
                duration="0:09"
              />
              <CardVideoReel
                title="Ja was flying"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'club med' }}
                imageSrc="/assets/images/img-10-video3.png"
                videoSrc="/assets/videos/spotlight1.mp4"
                duration="0:09"
              />
              <CardVideoReel
                title="Making these FLUFFY American Pancakes at home"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'honeymilk' }}
                imageSrc="/assets/images/img-08-video1.png"
                videoSrc="/assets/videos/spotlight1.mp4"
                duration="1:54"
              />
              <CardVideoReel
                title="Ja was flying"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'news' }}
                imageSrc="/assets/images/img-09-video2.png"
                videoSrc="/assets/videos/spotlight2.mp4"
                duration="0:09"
              />
              <CardVideoReel
                title="Ja was flying"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'club med' }}
                imageSrc="/assets/images/img-10-video3.png"
                videoSrc="/assets/videos/spotlight1.mp4"
                duration="0:09"
              />
            </div>
          </FeedSection>

          {/* Section 9: Card1x1 — Mars Jupiter */}
          <FeedSection>
            <Card1x1
              title="Mars and Jupiter get chummy in the night sky. The planets won't get this close again until 2033"
              imageSrc="/assets/images/img-mars-jupiter-50e98f.png"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
            />
          </FeedSection>

          {/* Section 10: CardGrid 3-col — Royalty + Wrexham + Coffee */}
          <FeedSection>
            <CardGrid columns={3}>
              <Card3x1
                title="Get 50% Off Name-Brand Jewelry from Zales, Nordstrom and Kay"
                description="Limited time offer: Get 50% off select jewelry from top brands..."
                imageSrc="/assets/images/img-royalty.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Royalty' }}
                ctaLabel="learn more"
              />
              <Card3x1
                title="Fast-rising Wrexham's record turnover helps repay all loans to owners Reynolds and McElhenney"
                imageSrc="/assets/images/img-wrexham.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'live news' }}
              />
              <Card3x1
                title="Workers are coffee badging to get around return-to-office mandates. What is it?"
                imageSrc="/assets/images/img-coffee.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'news live' }}
              />
            </CardGrid>
          </FeedSection>

          {/* Section 11: CardGrid 2-col — Insure + Lifestyle (sponsor variant) */}
          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Council Bluffs: These Companies Are Overcharging You For Auto Insurance"
                description="Don't pay your next auto insurance bill until you read about this!"
                imageSrc="/assets/images/img-22-insure.png"
                sponsor={{ iconSrc: '/assets/icon-insure.svg', name: 'Insure.com' }}
              />
              <Card2x1
                title="Cheapest Way To Get A Walk-In Tub If You're On Medicare"
                description="Seniors With Old And Not Practical Bath Tubs Are Getting A Treat This Month"
                imageSrc="/assets/images/img-23-lifestyle.png"
                sponsor={{ iconSrc: '/assets/icon-lifestyle.svg', name: 'Smart Lifestyle Trends' }}
                ctaLabel="learn more"
              />
            </CardGrid>
          </FeedSection>

          {/* Section 12: CardGrid 3-col — Ledger + Blinds + Sell Car */}
          <FeedSection>
            <CardGrid columns={3}>
              <Card3x1
                title="In today's digital age, savvy individuals are constantly seeking innovative strategies"
                imageSrc="/assets/images/img-24-shop.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Ledger' }}
              />
              <Card3x1
                title="Order New Blinds Online & Get $199 Home Installation"
                description="How long does $1,000,000 last in retirement? Learn ways to live comfortably with our guide."
                imageSrc="/assets/images/img-25-tech.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Blinds.com' }}
              />
              <Card3x1
                title="5 Obvious Indicators That You Should Sell Your Old Car"
                imageSrc="/assets/images/img-26-wellness.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'news live' }}
                ctaLabel="learn more"
              />
            </CardGrid>
          </FeedSection>

        </div>
      </main>
    </div>
  );
}
