'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './preview.css';
import { Card1x1 } from '@/design-system/registry/cards/Card1x1';
import { Card2x1 } from '@/design-system/registry/cards/Card2x1';
import { Card3x1 } from '@/design-system/registry/cards/Card3x1';
import { CardTrending } from '@/design-system/registry/cards/CardTrending';
import { CardSpotlight } from '@/design-system/registry/cards/CardSpotlight';
import { CardVideoReel } from '@/design-system/registry/cards/CardVideoReel';
import { CardPicksCarousel } from '@/design-system/registry/cards/CardPicksCarousel';
import { FeedSection, CardGrid, SectionHeader, TrendingGrid } from '@/design-system/registry/layouts';

function PreviewBanner() {
  const searchParams = useSearchParams();
  if (searchParams.get('standalone') !== null) return null;
  return (
    <div className="preview-banner">
      <a href="/" className="preview-banner__back">&larr; Back to Registry</a>
      <div className="preview-banner__center">
        <span className="preview-banner__badge">Demo Preview</span>
        <span className="preview-banner__title">NewsLive Publisher Feed &mdash; Desktop 1920px</span>
      </div>
      <div className="preview-banner__spacer" />
    </div>
  );
}

export default function PreviewPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-white)' }}>

      {/* ===== Demo Preview Banner ===== */}
      <Suspense><PreviewBanner /></Suspense>

      {/* ===== Publisher Top Bar ===== */}
      <header className="top-bar">
        <div className="top-bar__inner">
          <div className="top-bar__spacer" />
          <a className="top-bar__logo" href="#">
            <img src="/assets/publisher-logo.png" alt="Logo" />
          </a>
          <a className="top-bar__login" href="#">Login | Subscribe</a>
        </div>
      </header>

      {/* ===== Navigation Bar ===== */}
      <nav className="nav-bar">
        <div className="nav-bar__inner">
          <a className="nav-bar__menu-icon" href="#">
            <img src="/assets/menu-icon.svg" alt="Menu" style={{ width: 46, height: 44 }} />
          </a>
          <div className="nav-bar__items">
            <a className="nav-bar__item" href="#">News</a>
            <a className="nav-bar__item" href="#">Sports</a>
            <a className="nav-bar__item" href="#">Immigration</a>
            <a className="nav-bar__item" href="#">Politics</a>
            <a className="nav-bar__item" href="#">Opinion</a>
            <a className="nav-bar__item" href="#">Games</a>
            <a className="nav-bar__item" href="#">Obituaries</a>
            <a className="nav-bar__item" href="#">Careers</a>
            <a className="nav-bar__item" href="#">Banking</a>
            <a className="nav-bar__item" href="#">Guides</a>
          </div>
          <span className="nav-bar__weather">64&deg;F</span>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="page-content">
        <div className="page-content__inner">
          <div className="main-column">

            {/* ===== Article ===== */}
            <article className="article">
              <div className="article__header">
                <span className="article__category">Business</span>
                <h1 className="article__title">California warns Tesla faces 30-day sale ban for misleading use of &ldquo;autopilot&rdquo;</h1>
                <div className="article__meta">
                  <span className="article__byline">By&nbsp;</span>
                  <a className="article__author" href="#">Jose Fabian</a>
                </div>
                <div className="article__date">Updated on: December 17, 2025 / 11:18 AM PST / News LIve San Francisco</div>
                <div className="article__promo">
                  <img src="/assets/google-icon.svg" alt="" style={{ height: 18 }} />
                  <span>Add NewsLive News on Google</span>
                </div>
              </div>

              <div className="article__ads">
                <div className="ad-banner-inline">
                  <span className="ad-banner-inline__label">Advertisement</span>
                  <div className="ad-banner-inline__content">
                    <div className="ad-banner-inline__headline">LEARN WHEREVER AND WHENEVER</div>
                    <div className="ad-banner-inline__subtext">100% Online Graduate Degrees</div>
                    <a className="ad-banner-inline__button" href="#">START NOW</a>
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <img src="/assets/images/img-03-sponsored2.png" alt="Advertisement" style={{ width: '100%', borderRadius: 4 }} />
                </div>
              </div>

              <div className="article__body">
                <p>The California DMV on Tuesday said Tesla Motors faces a possible 30-day sale ban over its misleading use of the term &ldquo;autopilot&rdquo; in its marketing of electric vehicles.</p>
                <p>On Nov. 20, an administrative judge ruled that Tesla Motors&rsquo; use of &ldquo;autopilot&rdquo; and &ldquo;full self-driving capability&rdquo; was a misleading description of its &ldquo;advanced driving assistant features,&rdquo; and that it violated state law, the DMV said.</p>
                <p>In their decision, the judge proposed suspending Tesla&rsquo;s manufacturing and dealer license for 30 days. However, the DMV is giving Tesla 60 days to address its use of the term &ldquo;autopilot&rdquo; before temporarily suspending its dealer license.</p>
                <p>&ldquo;Tesla can take simple steps to pause this decision and permanently resolve this issue &mdash; steps autonomous vehicle companies and other automakers have been able to achieve in California&rsquo;s nation-leading and supportive innovation marketplace,&rdquo; DMV Director Steve Gordon said.</p>
                <p>Tesla had already stopped its use of &ldquo;full self-driving capability&rdquo; and switched to &ldquo;full self-driving (supervised)&rdquo; after the DMV filed accusations against it in November 2023.</p>
              </div>

              <div className="article__media">
                <div className="article__image" style={{ backgroundImage: "url('/assets/images/img-01-lead.png')" }}>
                  <div className="article__play-btn">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
                      <path d="M19 15l14 9-14 9V15z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="article__body article__body--continued">
                <p>The DMV said its decision to file those accusations stretches back to Tesla&rsquo;s 2021 marketing of its advanced driver assistance system. Besides the two terms, the DMV said it also took issue with the phrase, &ldquo;The system is designed to be able to conduct short and long-distance trips with no action required by the person in the driver&rsquo;s seat.&rdquo;</p>
                <p>&ldquo;Vehicles equipped with those ADAS features could not at the time of those advertisements, and cannot now, operate as autonomous vehicles,&rdquo; the DMV said.</p>
                <p>As for the manufacturing license suspension, the DMV issued a permanent stay on that proposal.</p>
                <p>&ldquo;This was a &lsquo;consumer protection&rsquo; order about the use of the term &lsquo;Autopilot&rsquo; in a case where not one single customer came forward to say there&rsquo;s a problem,&rdquo; Tesla said in a prepared statement. &ldquo;Sales in California will continue uninterrupted.&rdquo;</p>
              </div>

              <div className="article__footer">
                &copy; 2025 CBS Broadcasting Inc. All Rights Reserved.
              </div>

              <div className="article__topics">
                <span className="article__topics-label">In:</span>
                <div className="article__topics-list">
                  <a className="topic-tag" href="#">Tesla</a>
                  <a className="topic-tag" href="#">Elon Musk</a>
                  <a className="topic-tag" href="#">California</a>
                  <a className="topic-tag" href="#">California Department of Motor Vehicles</a>
                </div>
              </div>
            </article>

            <div className="separator" />

            {/* ===== Feed Sections (registry components) ===== */}

            {/* Section 1: Card1x1 — Michelin Chef */}
            <FeedSection>
              <Card1x1
                title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan"
                description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking and why your current set might be holding you back."
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
                  description="Enjoy farming, stock up and make friends. Taonga is a whole world full of adventure!"
                  imageSrc="/assets/images/img-04-card1.png"
                  brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }}
                />
                <Card2x1
                  title="We Tried HelloFresh &amp; Home Chef. Here&rsquo;s Our Review."
                  description="Meal Kit Face-Off: The Best Options for Your Dinner Plans"
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
                  title="ADT pro install gives you more time to enjoy the "
                  description="Your holiday dinner looks picture perfect. We can set up your ADT and Trusted Neighbor\u2122 ..."
                  imageSrc="/assets/images/img-adt-5ff0bd.png"
                  brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }}
                  ctaLabel="Shop Now"
                />
                <Card3x1
                  title="7 Ways to Retire Comfortably With $1M"
                  description="How long does $1,000,000 last in retirement? Learn ways to live comfortably with our guide."
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

            {/* Section 4: Trending Now */}
            <FeedSection>
              <SectionHeader title="Trending Now" />
              <TrendingGrid>
                <CardTrending
                  title="McDonald&rsquo;s rolls out all-new menu item with The Grinch Meal"
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

            {/* Section 5: Spotlight on */}
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

            {/* Section 6: Picks for You */}
            <FeedSection>
              <SectionHeader title="Picks for You" />
              <CardPicksCarousel
                brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }}
                items={[
                  { imageSrc: '/assets/images/img-carousel1.png', title: 'Stop overpaying for your plan\u2014bring your current device and save every month' },
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
                  description="See which 3 AI stocks and 3 dividend-paying names are rated highly for value and growth potential."
                  imageSrc="/assets/images/img-17-seeking.png"
                  sponsor={{ iconSrc: '/assets/icon-seeking-alpha.svg', name: 'Seeking Alpha' }}
                  ctaLabel="learn more"
                />
                <Card2x1
                  title="Rare Earth Opportunity Emerges in Montana"
                  description="This high-grade site is prime to make significant discoveries\u2014positioning it to support America\u2019s critical mineral supply chains."
                  imageSrc="/assets/images/img-18-tomorrow.png"
                  sponsor={{ iconSrc: '/assets/icon-tomorrow.svg', name: 'Tomorrow Investor' }}
                />
              </CardGrid>
            </FeedSection>

            {/* Section 8: Latest Videos */}
            <FeedSection>
              <SectionHeader title="Latest videos" />
              <div className="card-carousel">
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
                  imageSrc="/assets/images/img-08-video1.png"
                  videoSrc="/assets/videos/reel1.mp4"
                  duration="1:54"
                  ctaLabel="Learn more"
                />
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
                  imageSrc="/assets/images/img-10-video3.png"
                  videoSrc="/assets/videos/reel3.mp4"
                  duration="1:54"
                  ctaLabel="Learn more"
                />
                <CardVideoReel
                  title="Ja was flying"
                  brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
                  imageSrc="/assets/images/img-08-video1.png"
                  videoSrc="/assets/videos/reel1.mp4"
                  duration="0:09"
                  ctaLabel="Learn more"
                />
                <CardVideoReel
                  title="Making these FLUFFY American Pancakes at home"
                  brand={{ iconSrc: '/assets/icon-clubmed.svg', name: 'club med' }}
                  imageSrc="/assets/images/img-09-video2.png"
                  videoSrc="/assets/videos/reel2.mp4"
                  duration="1:54"
                  ctaLabel="Learn more"
                />
              </div>
            </FeedSection>

            {/* Section 9: Card1x1 — Mars Jupiter */}
            <FeedSection>
              <Card1x1
                title="Mars and Jupiter get chummy in the night sky. The planets won&rsquo;t get this close again until 2033"
                imageSrc="/assets/images/img-mars-jupiter-50e98f.png"
                sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
              />
            </FeedSection>

            {/* Section 10: CardGrid 3-col — Royalty + Wrexham + Coffee */}
            <FeedSection>
              <CardGrid columns={3}>
                <Card3x1
                  title="Get 50% Off Name-Brand Jewelry from Zales, Nordstrom and Kay"
                  description="Limited time offer: Get 50% off select jewelry from top brands like Zales, Nordstrom, and Kay. Find the perfect gift or treat yourself to something special."
                  imageSrc="/assets/images/img-royalty.png"
                  brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Royalty' }}
                  ctaLabel="learn more"
                />
                <Card3x1
                  title="Fast-rising Wrexham&rsquo;s record turnover helps repay all loans to owners Reynolds and McElhenney"
                  imageSrc="/assets/images/img-wrexham.png"
                  brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
                />
                <Card3x1
                  title="Workers are coffee badging to get around return-to-office mandates. What is it?"
                  imageSrc="/assets/images/img-coffee.png"
                  brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
                />
              </CardGrid>
            </FeedSection>

            {/* Section 11: CardGrid 2-col — Insure + Lifestyle (sponsor variant) */}
            <FeedSection>
              <CardGrid columns={2}>
                <Card2x1
                  title="Council Bluffs: These Companies Are Overcharging You For Auto Insurance"
                  description="Don&rsquo;t pay your next auto insurance bill until you read about this!"
                  imageSrc="/assets/images/img-22-insure.png"
                  sponsor={{ iconSrc: '/assets/icon-insure.svg', name: 'Insure.com' }}
                />
                <Card2x1
                  title="Cheapest Way To Get A Walk-In Tub If You&rsquo;re On Medicare"
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
                  title="In today&rsquo;s digital age, savvy individuals are constantly seeking innovative strategies"
                  imageSrc="/assets/images/img-24-shop.png"
                  brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Ledger' }}
                />
                <Card3x1
                  title="Order New Blinds Online &amp; Get $199 Home Installation"
                  description="How long does $1,000,000 last in retirement? Learn ways to live comfortably with our guide."
                  imageSrc="/assets/images/img-25-tech.png"
                  brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Blinds.com\u2122' }}
                />
                <Card3x1
                  title="5 Obvious Indicators That You Should Sell Your Old Car"
                  imageSrc="/assets/images/img-26-wellness.png"
                  brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }}
                  ctaLabel="learn more"
                />
              </CardGrid>
            </FeedSection>

          </div>
        </div>
      </main>
    </div>
  );
}
