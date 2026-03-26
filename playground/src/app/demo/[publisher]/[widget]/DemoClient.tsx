'use client';

import { getPublisher } from '@/publishers';
import { ArticlePage } from '@/publishers/templates';
import { NewsLiveShell } from '@/publishers/shells';
import { BusinessInsiderShell } from '@/publishers/shells';
import { TOnlineShell } from '@/publishers/shells';
import { USATodayShell } from '@/publishers/shells';
import { CBSNewsShell } from '@/publishers/shells';
import { PremiumFeed } from '@/design-system/registry/widgets/PremiumFeed';
import { RegularFeed } from '@/design-system/registry/widgets/RegularFeed';
import { DeeperDive } from '@/design-system/registry/widgets/DeeperDive';

/* ── Inline imports for handcrafted feed content ── */
import { Card1x1 } from '@/design-system/registry/cards/Card1x1';
import { Card2x1 } from '@/design-system/registry/cards/Card2x1';
import { Card3x1 } from '@/design-system/registry/cards/Card3x1';
import { CardTrending } from '@/design-system/registry/cards/CardTrending';
import { CardSpotlight } from '@/design-system/registry/cards/CardSpotlight';
import { CardVideoReel } from '@/design-system/registry/cards/CardVideoReel';
import { CardPicksCarousel } from '@/design-system/registry/cards/CardPicksCarousel';
import { FeedSection, CardGrid, SectionHeader, TrendingGrid } from '@/design-system/registry/layouts';

/* ── CSS for publisher chrome ── */
import '../../../preview/preview.css';
import '../../../business-insider/bi.css';
import '../../../t-online/t-online.css';
import '../../../usa-today/usa-today.css';
import '../../../cbs-news/cbs-news.css';

/* ================================================================
   Handcrafted feed content — NewsLive Premium Feed
   ================================================================ */
function NewsLivePremiumFeedContent() {
  return (
    <>
      <FeedSection>
        <Card1x1 title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan" description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking and why your current set might be holding you back." imageSrc="/assets/images/img-07-compare.png" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="The most relaxing Farm Game. No Install" description="Enjoy farming, stock up and make friends. Taonga is a whole world full of adventure!" imageSrc="/assets/images/img-04-card1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }} />
          <Card2x1 title="We Tried HelloFresh &amp; Home Chef. Here&rsquo;s Our Review." description="Meal Kit Face-Off: The Best Options for Your Dinner Plans" imageSrc="/assets/images/img-05-card2-264a45.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Topdust' }} ctaLabel="learn more" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="ADT pro install gives you more time to enjoy the " description="Your holiday dinner looks picture perfect. We can set up your ADT and Trusted Neighbor\u2122 ..." imageSrc="/assets/images/img-adt-5ff0bd.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }} ctaLabel="Shop Now" />
          <Card3x1 title="7 Ways to Retire Comfortably With $1M" description="How long does $1,000,000 last in retirement? Learn ways to live comfortably with our guide." imageSrc="/assets/images/img-fisher-5cb145.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Fisher Investments' }} />
          <Card3x1 title="US upgrades probe into 129,000 Ford vehicles following fatal collisions" imageSrc="/assets/images/img-ford.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Trending Now" />
        <TrendingGrid>
          <CardTrending title="McDonald&rsquo;s rolls out all-new menu item with The Grinch Meal" imageSrc="/assets/images/img-trending1.png" brand={{ iconSrc: '/assets/images/icon-mcdonalds.png', name: 'McDonald' }} ctaLabel="Learn More" />
          <CardTrending title="Discover the Enchanting Coasts of Italy" imageSrc="/assets/images/img-trending2.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} category="Travel" ctaLabel="Learn More" />
          <CardTrending title="Festive Home Decor Inspired by The Grinch" imageSrc="/assets/images/img-trending3.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} category="lifestyle" ctaLabel="Learn More" />
          <CardTrending title="Introducing the latest sensation from electric cars revolution" imageSrc="/assets/images/img-trending4.png" brand={{ iconSrc: '/assets/images/icon-bmw.png', name: 'bmw' }} ctaLabel="Learn More" />
        </TrendingGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Spotlight on" />
        <CardSpotlight items={[
          { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Beyond the Finish Line: Marathon Runner', brand: { iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' } },
          { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Just Do It — Spring Collection 2026', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
          { videoSrc: '/assets/videos/spotlight1.mp4', title: 'How One Runner Broke the 2-Hour Barrier', brand: { iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' } },
          { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Air Max: Engineered for Every Stride', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
        ]} />
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Picks for You" />
        <CardPicksCarousel brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }} items={[
          { imageSrc: '/assets/images/img-carousel1.png', title: 'Stop overpaying for your plan\u2014bring your current device and save every month' },
          { imageSrc: '/assets/images/img-carousel2.png', title: 'The one monthly subscription that covers almost every device in your living room' },
          { imageSrc: '/assets/images/img-carousel3.png', title: 'Eat, ride, and save: Uber One membership included with select Verizon plans' },
          { imageSrc: '/assets/images/img-carousel4.png', title: 'Save on iPhone 15. Dynamic Magic' },
        ]} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Discover 3 Stocks For Income + 3 Stocks For AI Growth" description="See which 3 AI stocks and 3 dividend-paying names are rated highly for value and growth potential." imageSrc="/assets/images/img-17-seeking.png" sponsor={{ iconSrc: '/assets/icon-seeking-alpha.svg', name: 'Seeking Alpha' }} ctaLabel="learn more" />
          <Card2x1 title="Rare Earth Opportunity Emerges in Montana" description="This high-grade site is prime to make significant discoveries\u2014positioning it to support America\u2019s critical mineral supply chains." imageSrc="/assets/images/img-18-tomorrow.png" sponsor={{ iconSrc: '/assets/icon-tomorrow.svg', name: 'Tomorrow Investor' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Latest videos" />
        <div className="card-carousel">
          <CardVideoReel title="Ja was flying" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} imageSrc="/assets/images/img-09-video2.png" videoSrc="/assets/videos/reel2.mp4" duration="0:09" ctaLabel="Learn more" />
          <CardVideoReel title="Making these FLUFFY American Pancakes at home" brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }} imageSrc="/assets/images/img-08-video1.png" videoSrc="/assets/videos/reel1.mp4" duration="1:54" ctaLabel="Learn more" />
          <CardVideoReel title="Ja was flying" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} imageSrc="/assets/images/img-10-video3.png" videoSrc="/assets/videos/reel3.mp4" duration="0:09" ctaLabel="Learn more" />
          <CardVideoReel title="Making these FLUFFY American Pancakes at home" brand={{ iconSrc: '/assets/icon-clubmed.svg', name: 'club med' }} imageSrc="/assets/images/img-scroll1.png" videoSrc="/assets/videos/reel1.mp4" duration="1:54" ctaLabel="Learn more" />
        </div>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Mars and Jupiter get chummy in the night sky. The planets won&rsquo;t get this close again until 2033" imageSrc="/assets/images/img-mars-jupiter-50e98f.png" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="Get 50% Off Name-Brand Jewelry from Zales, Nordstrom and Kay" description="Limited time offer: Get 50% off select jewelry from top brands like Zales, Nordstrom, and Kay." imageSrc="/assets/images/img-royalty.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Royalty' }} ctaLabel="learn more" />
          <Card3x1 title="Fast-rising Wrexham&rsquo;s record turnover helps repay all loans to owners Reynolds and McElhenney" imageSrc="/assets/images/img-wrexham.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
          <Card3x1 title="Workers are coffee badging to get around return-to-office mandates. What is it?" imageSrc="/assets/images/img-coffee.png" brand={{ iconSrc: '/assets/logos/newslive-brand.png', name: 'NewsLive' }} />
        </CardGrid>
      </FeedSection>
    </>
  );
}

/* ================================================================
   Handcrafted feed content — BI Premium Feed (Full Experience)
   ================================================================ */
function BIPremiumFeedContent() {
  return (
    <>
      <FeedSection>
        <Card1x1 title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan" description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking and why your current set might be holding you back." imageSrc="/assets/images/img-07-compare.png" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="The most relaxing Farm Game. No Install" description="Enjoy farming, stock up and make friends. Taonga is a whole world full of adventure!" imageSrc="/assets/images/img-04-card1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }} />
          <Card2x1 title="We Tried HelloFresh &amp; Home Chef. Here&rsquo;s Our Review." description="Meal Kit Face-Off: The Best Options for Your Dinner Plans" imageSrc="/assets/images/img-05-card2-264a45.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Topdust' }} ctaLabel="learn more" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="ADT pro install gives you more time to enjoy the " description="Your holiday dinner looks picture perfect. We can set up your ADT and Trusted Neighbor\u2122 ..." imageSrc="/assets/images/img-adt-5ff0bd.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }} ctaLabel="Shop Now" />
          <Card3x1 title="7 Ways to Retire Comfortably With $1M" description="How long does $1,000,000 last in retirement? Learn ways to live comfortably with our guide." imageSrc="/assets/images/img-fisher-5cb145.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Fisher Investments' }} />
          <Card3x1 title="US upgrades probe into 129,000 Ford vehicles following fatal collisions" imageSrc="/assets/images/img-ford.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Trending Now" />
        <TrendingGrid>
          <CardTrending title="McDonald&rsquo;s rolls out all-new menu item with The Grinch Meal" imageSrc="/assets/images/img-trending1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'McDonald\u2019s' }} ctaLabel="Learn More" />
          <CardTrending title="Discover the Enchanting Coasts of Italy" imageSrc="/assets/images/img-trending2.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} category="Travel" ctaLabel="Learn More" />
          <CardTrending title="Festive Home Decor Inspired by The Grinch" imageSrc="/assets/images/img-trending3.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} category="lifestyle" ctaLabel="Learn More" />
          <CardTrending title="Introducing the latest sensation from electric cars revolution" imageSrc="/assets/images/img-trending4.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'BMW' }} ctaLabel="Learn More" />
        </TrendingGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Spotlight on" />
        <CardSpotlight items={[
          { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Beyond the Finish Line: Marathon Runner', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
          { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Just Do It — Spring Collection 2026', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
          { videoSrc: '/assets/videos/spotlight1.mp4', title: 'How One Runner Broke the 2-Hour Barrier', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
          { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Air Max: Engineered for Every Stride', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
        ]} />
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Picks for You" />
        <CardPicksCarousel brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }} items={[
          { imageSrc: '/assets/images/img-carousel1.png', title: 'Stop overpaying for your plan\u2014bring your current device and save every month' },
          { imageSrc: '/assets/images/img-carousel2.png', title: 'The one monthly subscription that covers almost every device in your living room' },
          { imageSrc: '/assets/images/img-carousel3.png', title: 'Eat, ride, and save: Uber One membership included with select Verizon plans' },
          { imageSrc: '/assets/images/img-carousel4.png', title: 'Save on iPhone 15. Dynamic Magic' },
        ]} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Discover 3 Stocks For Income + 3 Stocks For AI Growth" description="See which 3 AI stocks and 3 dividend-paying names are rated highly for value and growth potential." imageSrc="/assets/images/img-17-seeking.png" sponsor={{ iconSrc: '/assets/icon-seeking-alpha.svg', name: 'Seeking Alpha' }} ctaLabel="learn more" />
          <Card2x1 title="Rare Earth Opportunity Emerges in Montana" description="This high-grade site is prime to make significant discoveries\u2014positioning it to support America\u2019s critical mineral supply chains." imageSrc="/assets/images/img-18-tomorrow.png" sponsor={{ iconSrc: '/assets/icon-tomorrow.svg', name: 'Tomorrow Investor' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Latest videos" />
        <div className="card-carousel" style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '4px 2px' }}>
          <CardVideoReel title="Ja was flying" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} imageSrc="/assets/images/img-09-video2.png" videoSrc="/assets/videos/reel2.mp4" duration="0:09" ctaLabel="Learn more" />
          <CardVideoReel title="Making these FLUFFY American Pancakes at home" brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }} imageSrc="/assets/images/img-08-video1.png" videoSrc="/assets/videos/reel1.mp4" duration="1:54" ctaLabel="Learn more" />
          <CardVideoReel title="Ja was flying" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} imageSrc="/assets/images/img-10-video3.png" videoSrc="/assets/videos/reel3.mp4" duration="0:09" ctaLabel="Learn more" />
          <CardVideoReel title="Making these FLUFFY American Pancakes at home" brand={{ iconSrc: '/assets/icon-clubmed.svg', name: 'club med' }} imageSrc="/assets/images/img-scroll1.png" videoSrc="/assets/videos/reel1.mp4" duration="1:54" ctaLabel="Learn more" />
        </div>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Mars and Jupiter get chummy in the night sky. The planets won&rsquo;t get this close again until 2033" imageSrc="/assets/images/img-mars-jupiter-50e98f.png" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="Get 50% Off Name-Brand Jewelry from Zales, Nordstrom and Kay" description="Limited time offer: Get 50% off select jewelry from top brands..." imageSrc="/assets/images/img-royalty.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Royalty' }} ctaLabel="learn more" />
          <Card3x1 title="Fast-rising Wrexham&rsquo;s record turnover helps repay all loans" imageSrc="/assets/images/img-wrexham.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
          <Card3x1 title="Workers are coffee badging to get around return-to-office mandates" imageSrc="/assets/images/img-coffee.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>

      {/* ── Batch 2 ── */}
      <FeedSection>
        <Card1x1 title="The Hidden Cost of Free Returns: How Online Shopping Is Reshaping Retail Logistics" description="Retailers are rethinking their return policies as the cost of processing sent-back items reaches record highs, threatening profit margins across the industry." imageSrc="/assets/images/ext-01.jpg" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'ShipSmart' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Compare Top-Rated Home Insurance Plans in Minutes" description="See side-by-side quotes from leading providers and find the best coverage for your home." imageSrc="/assets/images/ext-02.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'InsureCompare' }} ctaLabel="get quotes" />
          <Card2x1 title="This AI Writing Tool Is Changing How Teams Collaborate" description="From drafts to final copy, see why thousands of teams are switching to smarter workflows." imageSrc="/assets/images/ext-03.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WriteLab' }} ctaLabel="try free" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="New Study Links Mediterranean Diet to Longer Lifespan" imageSrc="/assets/images/ext-04.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'HealthLine' }} ctaLabel="read more" />
          <Card3x1 title="Top 5 Budget-Friendly Destinations for Summer 2026" imageSrc="/assets/images/ext-05.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'TravelDeals' }} ctaLabel="explore" />
          <Card3x1 title="Why Remote Workers Are Flocking to Portugal&rsquo;s Algarve Coast" imageSrc="/assets/images/ext-06.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Popular Right Now" />
        <TrendingGrid>
          <CardTrending title="Tesla recalls 200,000 vehicles over self-driving software glitch" imageSrc="/assets/images/ext-07.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'AutoTrader' }} ctaLabel="Learn More" />
          <CardTrending title="Fed signals potential rate cut amid cooling inflation data" imageSrc="/assets/images/ext-08.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} category="Markets" ctaLabel="Learn More" />
          <CardTrending title="Apple&rsquo;s mixed-reality headset sales miss internal targets" imageSrc="/assets/images/ext-09.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} category="Tech" ctaLabel="Learn More" />
          <CardTrending title="The 30-minute morning routine top CEOs swear by" imageSrc="/assets/images/ext-10.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'MasterClass' }} category="Leadership" ctaLabel="Learn More" />
        </TrendingGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Featured Stories" />
        <CardSpotlight items={[
          { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Inside the Rise of AI-Powered Startups', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
          { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Train Smarter with Nike Running App', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
          { videoSrc: '/assets/videos/spotlight1.mp4', title: 'The Founders Who Quit Big Tech to Build Their Own', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
          { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Tech Fleece: Warmth Without the Weight', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
        ]} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="How to Build a Diversified Portfolio in 2026" description="Expert-backed strategies for balancing risk and reward in today&rsquo;s volatile markets." imageSrc="/assets/images/ext-11.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WealthFront' }} ctaLabel="learn more" />
          <Card2x1 title="The Best Online MBA Programs for Working Professionals" description="Flexible schedules, top rankings, and real career outcomes\u2014compare your options now." imageSrc="/assets/images/ext-12.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'EduRank' }} ctaLabel="learn more" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Watch Next" />
        <div className="card-carousel" style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '4px 2px' }}>
          <CardVideoReel title="The Science Behind Perfect Espresso" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} imageSrc="/assets/images/ext-14.jpg" videoSrc="/assets/videos/reel1.mp4" duration="1:12" ctaLabel="Learn more" />
          <CardVideoReel title="Inside a $50M Manhattan Penthouse" brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }} imageSrc="/assets/images/ext-15.jpg" videoSrc="/assets/videos/reel2.mp4" duration="0:47" ctaLabel="Learn more" />
          <CardVideoReel title="How This Chef Turns Leftovers Into Fine Dining" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} imageSrc="/assets/images/ext-13.jpg" videoSrc="/assets/videos/reel3.mp4" duration="2:31" ctaLabel="Learn more" />
          <CardVideoReel title="Why This Tiny Country Leads in Renewable Energy" brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }} imageSrc="/assets/images/ext-16.jpg" videoSrc="/assets/videos/reel3.mp4" duration="3:05" ctaLabel="Learn more" />
        </div>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Goldman Sachs Warns of &lsquo;Significant Headwinds&rsquo; for Tech Stocks in Q3" imageSrc="/assets/images/ext-17.jpg" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'MarketWatch Pro' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="Shop Smart: Top Picks for Spring Wardrobe Essentials" description="Curated selections from trending brands at unbeatable prices." imageSrc="/assets/images/ext-18.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'StyleBox' }} ctaLabel="shop now" />
          <Card3x1 title="SpaceX launches largest satellite constellation in single mission" imageSrc="/assets/images/ext-19.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
          <Card3x1 title="Smart Locks for Every Budget: Compare Top Picks" imageSrc="/assets/images/ext-20.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'SecureHome' }} ctaLabel="compare" />
        </CardGrid>
      </FeedSection>

      {/* ── Batch 3 ── */}
      <FeedSection>
        <SectionHeader title="Recommended" />
        <CardPicksCarousel brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }} items={[
          { imageSrc: '/assets/images/batch3-01.jpg', title: 'Stream live sports, news, and more with Verizon\u2019s all-in-one entertainment bundle' },
          { imageSrc: '/assets/images/batch3-02.jpg', title: 'Why families are switching to Verizon\u2019s unlimited plan for better coverage' },
          { imageSrc: '/assets/images/batch3-03.jpg', title: 'Get the latest Samsung Galaxy with trade-in savings up to $800' },
          { imageSrc: '/assets/images/batch3-04.jpg', title: 'Verizon Home Internet: Fast, reliable, no annual contract' },
        ]} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Amazon&rsquo;s Secret Warehouse Deals You Didn&rsquo;t Know About" description="Uncover hidden discounts on refurbished and open-box electronics from Amazon&rsquo;s outlet." imageSrc="/assets/images/batch3-05.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'DealFinder' }} ctaLabel="see deals" />
          <Card2x1 title="Nvidia CEO Says AI Will Replace Most Entry-Level Coding Jobs" description="Jensen Huang predicts a fundamental shift in how software gets built over the next five years." imageSrc="/assets/images/batch3-06.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'TechCrunch Pro' }} ctaLabel="read more" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="The Real Reason Your 401(k) Isn&rsquo;t Growing as Fast as You Think" description="Hidden fees, poor allocation, and market timing myths\u2014a financial advisor breaks down the most common retirement savings mistakes." imageSrc="/assets/images/batch3-07.jpg" ctaLabel="read guide" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Fidelity' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="EU passes landmark AI regulation with strict enforcement timeline" imageSrc="/assets/images/batch3-08.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'PolicyTracker' }} ctaLabel="read more" />
          <Card3x1 title="The wellness retreats Silicon Valley execs can&rsquo;t stop booking" imageSrc="/assets/images/batch3-09.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WellnessEscape' }} ctaLabel="book now" />
          <Card3x1 title="How one couple retired at 40 by house-hacking their way to financial freedom" imageSrc="/assets/images/batch3-10.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <SectionHeader title="Top Stories" />
        <TrendingGrid>
          <CardTrending title="Boeing faces fresh scrutiny after whistleblower testimony on Capitol Hill" imageSrc="/assets/images/batch3-11.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'DefenseNews' }} ctaLabel="Learn More" />
          <CardTrending title="Costco&rsquo;s gold bars are selling out faster than ever" imageSrc="/assets/images/batch3-12.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} category="Retail" ctaLabel="Learn More" />
          <CardTrending title="The surprising city that just topped the best places to live ranking" imageSrc="/assets/images/batch3-13.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} category="Real Estate" ctaLabel="Learn More" />
          <CardTrending title="Why major airlines are quietly shrinking business class" imageSrc="/assets/images/batch3-14.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Kayak' }} category="Travel" ctaLabel="Learn More" />
        </TrendingGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Solar Panels Just Got 40% Cheaper. Here&rsquo;s What Changed." description="New manufacturing breakthroughs are making residential solar more affordable than ever." imageSrc="/assets/images/batch3-15.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'SunPower' }} ctaLabel="get quote" />
          <Card2x1 title="Microsoft&rsquo;s Quiet Push Into Healthcare AI Could Disrupt the Industry" description="The tech giant is rolling out AI diagnostic tools across partner hospital networks." imageSrc="/assets/images/batch3-16.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Azure Health' }} ctaLabel="learn more" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Inside the Billionaire Bunker Boom: Why the Ultra-Rich Are Building Underground" imageSrc="/assets/images/batch3-17.jpg" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'LuxuryLiving' }} />
      </FeedSection>
    </>
  );
}

/* ================================================================
   Handcrafted feed content — BI Current Feed (restricted set)
   ================================================================ */
function BICurrentFeedContent() {
  return (
    <>
      <FeedSection>
        <Card1x1 title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan" description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking and why your current set might be holding you back." imageSrc="/assets/images/img-07-compare.png" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="The most relaxing Farm Game. No Install" description="Enjoy farming, stock up and make friends. Taonga is a whole world full of adventure!" imageSrc="/assets/images/img-04-card1.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: The Island Farm' }} />
          <Card2x1 title="We Tried HelloFresh &amp; Home Chef. Here&rsquo;s Our Review." description="Meal Kit Face-Off: The Best Options for Your Dinner Plans" imageSrc="/assets/images/img-05-card2-264a45.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Topdust' }} ctaLabel="learn more" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="ADT pro install gives you more time to enjoy the " description="Your holiday dinner looks picture perfect. We can set up your ADT and Trusted Neighbor\u2122 ..." imageSrc="/assets/images/img-adt-5ff0bd.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'ADT' }} ctaLabel="Shop Now" />
          <Card3x1 title="7 Ways to Retire Comfortably With $1M" description="How long does $1,000,000 last in retirement? Learn ways to live comfortably with our guide." imageSrc="/assets/images/img-fisher-5cb145.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Fisher Investments' }} />
          <Card3x1 title="US upgrades probe into 129,000 Ford vehicles following fatal collisions" imageSrc="/assets/images/img-ford.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Mars and Jupiter get chummy in the night sky. The planets won&rsquo;t get this close again until 2033" imageSrc="/assets/images/img-mars-jupiter-50e98f.png" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Discover 3 Stocks For Income + 3 Stocks For AI Growth" description="See which 3 AI stocks and 3 dividend-paying names are rated highly for value and growth potential." imageSrc="/assets/images/img-17-seeking.png" sponsor={{ iconSrc: '/assets/icon-seeking-alpha.svg', name: 'Seeking Alpha' }} ctaLabel="learn more" />
          <Card2x1 title="Rare Earth Opportunity Emerges in Montana" description="This high-grade site is prime to make significant discoveries\u2014positioning it to support America\u2019s critical mineral supply chains." imageSrc="/assets/images/img-18-tomorrow.png" sponsor={{ iconSrc: '/assets/icon-tomorrow.svg', name: 'Tomorrow Investor' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="Get 50% Off Name-Brand Jewelry from Zales, Nordstrom and Kay" description="Limited time offer: Get 50% off select jewelry from top brands..." imageSrc="/assets/images/img-royalty.png" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Royalty' }} ctaLabel="learn more" />
          <Card3x1 title="Fast-rising Wrexham&rsquo;s record turnover helps repay all loans" imageSrc="/assets/images/img-wrexham.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
          <Card3x1 title="Workers are coffee badging to get around return-to-office mandates" imageSrc="/assets/images/img-coffee.png" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>

      {/* ── Batch 2 ── */}
      <FeedSection>
        <Card1x1 title="The Hidden Cost of Free Returns: How Online Shopping Is Reshaping Retail Logistics" description="Retailers are rethinking their return policies as the cost of processing sent-back items reaches record highs, threatening profit margins across the industry." imageSrc="/assets/images/ext-01.jpg" ctaLabel="learn more" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'ShipSmart' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Compare Top-Rated Home Insurance Plans in Minutes" description="See side-by-side quotes from leading providers and find the best coverage for your home." imageSrc="/assets/images/ext-02.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'InsureCompare' }} ctaLabel="get quotes" />
          <Card2x1 title="Fed signals potential rate cut amid cooling inflation data" description="Markets rallied as the Federal Reserve hinted at easing monetary policy in the coming months." imageSrc="/assets/images/ext-03.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="New Study Links Mediterranean Diet to Longer Lifespan" imageSrc="/assets/images/ext-04.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'HealthLine' }} ctaLabel="read more" />
          <Card3x1 title="Apple&rsquo;s mixed-reality headset sales miss internal targets" imageSrc="/assets/images/ext-05.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
          <Card3x1 title="Why Remote Workers Are Flocking to Portugal&rsquo;s Algarve Coast" imageSrc="/assets/images/ext-06.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Goldman Sachs Warns of &lsquo;Significant Headwinds&rsquo; for Tech Stocks in Q3" imageSrc="/assets/images/ext-07.jpg" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'MarketWatch Pro' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="How to Build a Diversified Portfolio in 2026" description="Expert-backed strategies for balancing risk and reward in today&rsquo;s volatile markets." imageSrc="/assets/images/ext-08.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WealthFront' }} ctaLabel="learn more" />
          <Card2x1 title="Nvidia CEO Says AI Will Replace Most Entry-Level Coding Jobs" description="Jensen Huang predicts a fundamental shift in how software gets built over the next five years." imageSrc="/assets/images/ext-09.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="Shop Smart: Top Picks for Spring Wardrobe Essentials" description="Curated selections from trending brands at unbeatable prices." imageSrc="/assets/images/ext-10.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'StyleBox' }} ctaLabel="shop now" />
          <Card3x1 title="Solar Panels Just Got 40% Cheaper. Here&rsquo;s What Changed." imageSrc="/assets/images/ext-11.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'SunPower' }} ctaLabel="get quote" />
          <Card3x1 title="SpaceX launches largest satellite constellation in single mission" imageSrc="/assets/images/ext-12.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>

      {/* ── Batch 3 ── */}
      <FeedSection>
        <Card1x1 title="The Real Reason Your 401(k) Isn&rsquo;t Growing as Fast as You Think" description="Hidden fees, poor allocation, and market timing myths — a financial advisor breaks down the most common retirement savings mistakes." imageSrc="/assets/images/ext-13.jpg" ctaLabel="read guide" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Fidelity' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="Amazon&rsquo;s Secret Warehouse Deals You Didn&rsquo;t Know About" description="Uncover hidden discounts on refurbished and open-box electronics from Amazon&rsquo;s outlet." imageSrc="/assets/images/ext-14.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'DealFinder' }} ctaLabel="see deals" />
          <Card2x1 title="Microsoft&rsquo;s Quiet Push Into Healthcare AI Could Disrupt the Industry" description="The tech giant is rolling out AI diagnostic tools across partner hospital networks." imageSrc="/assets/images/ext-15.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <CardGrid columns={3}>
          <Card3x1 title="EU passes landmark AI regulation with strict enforcement timeline" imageSrc="/assets/images/ext-16.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
          <Card3x1 title="The wellness retreats Silicon Valley execs can&rsquo;t stop booking" imageSrc="/assets/images/ext-17.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WellnessEscape' }} ctaLabel="book now" />
          <Card3x1 title="Smart Locks for Every Budget: Compare Top Picks" imageSrc="/assets/images/ext-18.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'SecureHome' }} ctaLabel="compare" />
        </CardGrid>
      </FeedSection>
      <FeedSection>
        <Card1x1 title="Inside the Billionaire Bunker Boom: Why the Ultra-Rich Are Building Underground" imageSrc="/assets/images/ext-19.jpg" sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'LuxuryLiving' }} />
      </FeedSection>
      <FeedSection>
        <CardGrid columns={2}>
          <Card2x1 title="How one couple retired at 40 by house-hacking their way to financial freedom" description="Their unconventional strategy turned a duplex purchase into a path to early retirement." imageSrc="/assets/images/ext-20.jpg" brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }} />
          <Card2x1 title="The Best Online MBA Programs for Working Professionals" description="Flexible schedules, top rankings, and real career outcomes — compare your options now." imageSrc="/assets/images/batch3-05.jpg" brand={{ iconSrc: '/assets/icon-ad.svg', name: 'EduRank' }} ctaLabel="compare" />
        </CardGrid>
      </FeedSection>
    </>
  );
}

/* ================================================================
   Generic Widget Renderer (for non-handcrafted combos)
   ================================================================ */
function WidgetRenderer({ widgetId }: { widgetId: string }) {
  switch (widgetId) {
    case 'premium-feed':
      return <PremiumFeed viewport="desktop" />;
    case 'regular-feed':
      return <RegularFeed viewport="desktop" />;
    case 'deeper-dive':
      return <DeeperDive viewport="desktop" />;
    default:
      return (
        <div style={{ padding: 48, textAlign: 'center', border: '2px dashed #e5e7eb', borderRadius: 12, color: '#9ca8b5', fontFamily: 'system-ui' }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#212832', marginBottom: 8 }}>Widget not available</div>
          <div style={{ fontSize: 13 }}>This widget is coming soon</div>
        </div>
      );
  }
}

/* ================================================================
   Demo Client — Routes to the right demo based on publisher + widget
   NO playground chrome. NO toolbar. NO sidebar. Clean standalone.
   ================================================================ */
export function DemoClient({ publisherId, widgetId }: { publisherId: string; widgetId: string }) {
  /* ── Handcrafted demos: NewsLive ── */
  if (publisherId === 'news-live' && widgetId === 'premium-feed') {
    return <NewsLiveShell><NewsLivePremiumFeedContent /></NewsLiveShell>;
  }

  /* ── Handcrafted demos: Business Insider ── */
  if (publisherId === 'business-insider' && widgetId === 'premium-feed') {
    return <BusinessInsiderShell><BIPremiumFeedContent /></BusinessInsiderShell>;
  }
  if (publisherId === 'business-insider' && widgetId === 'premium-feed-current') {
    return <BusinessInsiderShell><BICurrentFeedContent /></BusinessInsiderShell>;
  }

  /* ── Handcrafted demos: t-online ── */
  if (publisherId === 't-online' && widgetId === 'premium-feed') {
    return <TOnlineShell><NewsLivePremiumFeedContent /></TOnlineShell>;
  }

  /* ── Handcrafted demos: USA TODAY ── */
  if (publisherId === 'usa-today' && widgetId === 'premium-feed') {
    return <USATodayShell><NewsLivePremiumFeedContent /></USATodayShell>;
  }

  /* ── Handcrafted demos: CBS News ── */
  if (publisherId === 'cbs-news' && widgetId === 'premium-feed') {
    return <CBSNewsShell><NewsLivePremiumFeedContent /></CBSNewsShell>;
  }

  /* ── Known publisher shell + generic widget ── */
  if (publisherId === 'news-live') {
    return <NewsLiveShell><WidgetRenderer widgetId={widgetId} /></NewsLiveShell>;
  }
  if (publisherId === 'business-insider') {
    return <BusinessInsiderShell><WidgetRenderer widgetId={widgetId} /></BusinessInsiderShell>;
  }
  if (publisherId === 't-online') {
    return <TOnlineShell><WidgetRenderer widgetId={widgetId} /></TOnlineShell>;
  }
  if (publisherId === 'usa-today') {
    return <USATodayShell><WidgetRenderer widgetId={widgetId} /></USATodayShell>;
  }
  if (publisherId === 'cbs-news') {
    return <CBSNewsShell><WidgetRenderer widgetId={widgetId} /></CBSNewsShell>;
  }

  /* ── Fallback: generic ArticlePage template ── */
  const publisher = getPublisher(publisherId) || getPublisher('generic')!;
  return (
    <div style={{ minHeight: '100vh' }}>
      <ArticlePage publisher={publisher}>
        <WidgetRenderer widgetId={widgetId} />
      </ArticlePage>
    </div>
  );
}
