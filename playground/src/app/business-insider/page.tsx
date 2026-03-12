'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './bi.css';
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
    <div className="bi-preview-banner">
      <a href="/" className="bi-preview-banner__back">&larr; Back to Registry</a>
      <div className="bi-preview-banner__center">
        <span className="bi-preview-banner__badge">Demo Preview</span>
        <span className="bi-preview-banner__title">Business Insider &mdash; Premium Feed Mock</span>
      </div>
      <div style={{ width: 120 }} />
    </div>
  );
}

export default function BusinessInsiderPage() {

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>

      {/* ===== Demo Preview Banner ===== */}
      <Suspense><PreviewBanner /></Suspense>

      {/* ===== Stock Ticker Bar ===== */}
      <div className="bi-ticker">
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">Dow Jones</span>
          <span className="bi-ticker__value bi-ticker__value--down">-0.62%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">Nasdaq</span>
          <span className="bi-ticker__value bi-ticker__value--down">-0.95%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">S&amp;P 500</span>
          <span className="bi-ticker__value bi-ticker__value--down">-0.76%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">AAPL</span>
          <span className="bi-ticker__value bi-ticker__value--down">-1.23%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">NVDA</span>
          <span className="bi-ticker__value bi-ticker__value--up">+2.41%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">MSFT</span>
          <span className="bi-ticker__value bi-ticker__value--down">-0.88%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">AMZN</span>
          <span className="bi-ticker__value bi-ticker__value--down">-1.15%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">META</span>
          <span className="bi-ticker__value bi-ticker__value--up">+0.34%</span>
        </div>
        <div className="bi-ticker__divider" />
        <div className="bi-ticker__item">
          <span className="bi-ticker__label">TSLA</span>
          <span className="bi-ticker__value bi-ticker__value--up">+1.07%</span>
        </div>
      </div>

      {/* ===== Nav Bar ===== */}
      <nav className="bi-nav">
        <img className="bi-nav__logo" src="/assets/business-insider/bi-logo.svg" alt="Business Insider" />
        <div className="bi-nav__right">
          <a className="bi-nav__link" href="#">Newsletters</a>
          <svg className="bi-nav__search" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="9" r="7" />
            <path d="M14 14L18 18" strokeLinecap="round" />
          </svg>
        </div>
      </nav>

      {/* ===== Article ===== */}
      <div className="bi-article-wrap">
        <article className="bi-article">
          <div className="bi-article__category">Tech</div>
          <h1 className="bi-article__headline">
            Atlassian says it&rsquo;s laying off 10% of its global workforce and attributes the cut to the &lsquo;AI era&rsquo;
          </h1>
          <div className="bi-article__byline">
            By <a href="#">Katherine Li</a> and <a href="#">Lloyd Lee</a>
          </div>
          <div className="bi-article__date">Mar 12, 2026, 1:42 AM GMT+2</div>

          <div className="bi-article__actions">
            <button className="bi-article__action-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h8M8 4v8" strokeLinecap="round" /></svg>
              Share
            </button>
            <button className="bi-article__action-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h10v12l-5-3-5 3V3z" /></svg>
              Save
            </button>
          </div>

          <div className="bi-article__listen">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#0A0A0A" strokeWidth="1.5" /><path d="M6.5 5L11 8L6.5 11V5Z" fill="#0A0A0A" /></svg>
            <span className="bi-article__listen-text">Listen to this story</span>
            <span className="bi-article__listen-duration">1 minute</span>
          </div>

          <ul className="bi-article__summary">
            <li>Atlassian announced plans to cut 1,600 jobs to focus on AI and enterprise growth initiatives.</li>
            <li>CEO Mike Cannon-Brookes cited AI&rsquo;s impact on workforce needs as a reason for the layoffs.</li>
            <li>30% of the job cuts impact Atlassian employees based in Australia, reflecting global changes.</li>
          </ul>

          <div className="bi-article__hero">
            <img src="/assets/business-insider/hero-atlassian.png" alt="Atlassian CEO Mike Cannon-Brookes" />
            <div className="bi-article__caption">
              Atlassian CEO Mike Cannon-Brookes. The company is laying off 10% of its employees.
            </div>
            <div className="bi-article__credit">Reuters</div>
          </div>

          <div className="bi-article__body">
            <p>Another tech company is making job cuts and attributing them to AI.</p>
            <p>Atlassian, the Australian software company behind collaboration tools like Jira, Trello, and Confluence, announced plans to cut approximately 1,600 jobs, about 10% of its global workforce.</p>
            <p>In a filing with the Securities and Exchange Commission, the company described the layoffs as part of an effort to reposition the business for the &ldquo;AI era,&rdquo; noting that about 30% of the affected roles are based in Australia.</p>
            <p>The layoffs follow a similar move by Block, the fintech company behind Cash App and Afterpay, which laid off nearly half of its workforce, also citing the growing influence of AI on its operations.</p>
            <p>In a message to employees, CEO Mike Cannon-Brookes addressed the role of AI in reshaping the company&rsquo;s workforce needs.</p>
            <p>&ldquo;It would be disingenuous to pretend AI doesn&rsquo;t change the mix of skills and capabilities we need across the company,&rdquo; Cannon-Brookes wrote.</p>
            <p>&ldquo;I believe this is the right decision for Atlassian. We are making these changes so we can invest in the areas that will define our future &mdash; AI, enterprise, and cloud &mdash; while ensuring we have the right team to execute on that vision.&rdquo;</p>
            <p>Atlassian was founded in 2002 by Cannon-Brookes and Scott Farquhar, both of whom are among Forbes&rsquo; 50 richest Australians.</p>
            <p>Affected employees will receive a minimum 16-week severance package, extended healthcare benefits, and prorated bonuses, according to the company.</p>
            <p>The company has been on an aggressive AI push, recently acquiring The Browser Company, the startup behind the Arc and Dia web browsers, as well as a developer experience platform.</p>
            <p>CTO Rajeev Rajan is also stepping down effective March 31.</p>
            <p>Atlassian&rsquo;s shares have fallen roughly 64% over the past 12 months. The company estimated that restructuring costs associated with the layoffs would total between $225 million and $236 million.</p>
            <p>The stock rose more than 1% in after-hours trading following the announcement.</p>
          </div>

          <div className="bi-article__tags">
            <a className="bi-article__tag" href="#">AI</a>
            <a className="bi-article__tag" href="#">Layoffs</a>
            <a className="bi-article__tag" href="#">Artificial Intelligence</a>
          </div>
        </article>
      </div>

      {/* ===== Read Next ===== */}
      <div className="bi-read-next">
        <h2 className="bi-read-next__heading">Read next</h2>
        <div className="bi-read-next__grid">
          <div className="bi-read-next__article">
            <p className="bi-read-next__title">Jack Dorsey just gave us our first glimpse at how doomsday layoffs could work in the AI era &mdash; and it&rsquo;s bleak</p>
            <img className="bi-read-next__thumb" src="/assets/business-insider/readnext-1-32de13.png" alt="" />
          </div>
          <div className="bi-read-next__article">
            <p className="bi-read-next__title">CEO Jack Dorsey issues a dire warning about AI&rsquo;s impact as he cuts Block by almost half</p>
            <img className="bi-read-next__thumb" src="/assets/business-insider/readnext-2-32de13.png" alt="" />
          </div>
          <div className="bi-read-next__article">
            <p className="bi-read-next__title">The brutal metric companies are using to show their AI bets are justified</p>
            <img className="bi-read-next__thumb" src="/assets/business-insider/readnext-3-32de13.png" alt="" />
          </div>
          <div className="bi-read-next__article">
            <p className="bi-read-next__title">Block&rsquo;s Jack Dorsey wants nimble and quick. He thinks AI will do the trick.</p>
            <img className="bi-read-next__thumb" src="/assets/business-insider/readnext-4-32de13.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bi-separator" />

      {/* ===== Premium Feed (using registry components) ===== */}
      <div className="bi-feed">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          <FeedSection>
            <Card1x1
              title="Michelin Chef Reveals Why Most Home Cooks Use the Wrong Pan"
              description="From heat distribution to surface material, professional chefs explain how choosing the right cookware can transform your cooking and why your current set might be holding you back."
              imageSrc="/assets/images/img-07-compare.png"
              ctaLabel="learn more"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
            />
          </FeedSection>

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
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <SectionHeader title="Trending Now" />
            <TrendingGrid>
              <CardTrending
                title="McDonald&rsquo;s rolls out all-new menu item with The Grinch Meal"
                imageSrc="/assets/images/img-trending1.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'McDonald\u2019s' }}
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Discover the Enchanting Coasts of Italy"
                imageSrc="/assets/images/img-trending2.png"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                category="Travel"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Festive Home Decor Inspired by The Grinch"
                imageSrc="/assets/images/img-trending3.png"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                category="lifestyle"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Introducing the latest sensation from electric cars revolution"
                imageSrc="/assets/images/img-trending4.png"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'BMW' }}
                ctaLabel="Learn More"
              />
            </TrendingGrid>
          </FeedSection>

          <FeedSection>
            <SectionHeader title="Spotlight on" />
            <CardSpotlight
              items={[
                { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Beyond the Finish Line: Marathon Runner', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
                { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Just Do It — Spring Collection 2026', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
                { videoSrc: '/assets/videos/spotlight1.mp4', title: 'How One Runner Broke the 2-Hour Barrier', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
                { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Air Max: Engineered for Every Stride', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
              ]}
            />
          </FeedSection>

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

          <FeedSection>
            <SectionHeader title="Latest videos" />
            <div className="card-carousel" style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '4px 2px' }}>
              <CardVideoReel
                title="Ja was flying"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
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
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                imageSrc="/assets/images/img-10-video3.png"
                videoSrc="/assets/videos/reel3.mp4"
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
            </div>
          </FeedSection>

          <FeedSection>
            <Card1x1
              title="Mars and Jupiter get chummy in the night sky. The planets won&rsquo;t get this close again until 2033"
              imageSrc="/assets/images/img-mars-jupiter-50e98f.png"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
            />
          </FeedSection>

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
                title="Fast-rising Wrexham&rsquo;s record turnover helps repay all loans"
                imageSrc="/assets/images/img-wrexham.png"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
              <Card3x1
                title="Workers are coffee badging to get around return-to-office mandates"
                imageSrc="/assets/images/img-coffee.png"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
            </CardGrid>
          </FeedSection>

          {/* ===== Extended Feed — Batch 2 ===== */}

          <FeedSection>
            <Card1x1
              title="The Hidden Cost of Free Returns: How Online Shopping Is Reshaping Retail Logistics"
              description="Retailers are rethinking their return policies as the cost of processing sent-back items reaches record highs, threatening profit margins across the industry."
              imageSrc="/assets/images/ext-01.jpg"
              ctaLabel="learn more"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'ShipSmart' }}
            />
          </FeedSection>

          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Compare Top-Rated Home Insurance Plans in Minutes"
                description="See side-by-side quotes from leading providers and find the best coverage for your home."
                imageSrc="/assets/images/ext-02.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'InsureCompare' }}
                ctaLabel="get quotes"
              />
              <Card2x1
                title="This AI Writing Tool Is Changing How Teams Collaborate"
                description="From drafts to final copy, see why thousands of teams are switching to smarter workflows."
                imageSrc="/assets/images/ext-03.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WriteLab' }}
                ctaLabel="try free"
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <CardGrid columns={3}>
              <Card3x1
                title="New Study Links Mediterranean Diet to Longer Lifespan"
                imageSrc="/assets/images/ext-04.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'HealthLine' }}
                ctaLabel="read more"
              />
              <Card3x1
                title="Top 5 Budget-Friendly Destinations for Summer 2026"
                imageSrc="/assets/images/ext-05.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'TravelDeals' }}
                ctaLabel="explore"
              />
              <Card3x1
                title="Why Remote Workers Are Flocking to Portugal&rsquo;s Algarve Coast"
                imageSrc="/assets/images/ext-06.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <SectionHeader title="Popular Right Now" />
            <TrendingGrid>
              <CardTrending
                title="Tesla recalls 200,000 vehicles over self-driving software glitch"
                imageSrc="/assets/images/ext-07.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'AutoTrader' }}
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Fed signals potential rate cut amid cooling inflation data"
                imageSrc="/assets/images/ext-08.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                category="Markets"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Apple&rsquo;s mixed-reality headset sales miss internal targets"
                imageSrc="/assets/images/ext-09.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                category="Tech"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="The 30-minute morning routine top CEOs swear by"
                imageSrc="/assets/images/ext-10.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'MasterClass' }}
                category="Leadership"
                ctaLabel="Learn More"
              />
            </TrendingGrid>
          </FeedSection>

          <FeedSection>
            <SectionHeader title="Featured Stories" />
            <CardSpotlight
              items={[
                { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Inside the Rise of AI-Powered Startups', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
                { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Train Smarter with Nike Running App', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
                { videoSrc: '/assets/videos/spotlight1.mp4', title: 'The Founders Who Quit Big Tech to Build Their Own', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' } },
                { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Tech Fleece: Warmth Without the Weight', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' } },
              ]}
            />
          </FeedSection>

          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="How to Build a Diversified Portfolio in 2026"
                description="Expert-backed strategies for balancing risk and reward in today&rsquo;s volatile markets."
                imageSrc="/assets/images/ext-11.jpg"
                sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'WealthFront' }}
                ctaLabel="learn more"
              />
              <Card2x1
                title="The Best Online MBA Programs for Working Professionals"
                description="Flexible schedules, top rankings, and real career outcomes\u2014compare your options now."
                imageSrc="/assets/images/ext-12.jpg"
                sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'EduRank' }}
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <SectionHeader title="Watch Next" />
            <div className="card-carousel" style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '4px 2px' }}>
              <CardVideoReel
                title="The Science Behind Perfect Espresso"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                imageSrc="/assets/images/ext-14.jpg"
                videoSrc="/assets/videos/reel1.mp4"
                duration="1:12"
                ctaLabel="Learn more"
              />
              <CardVideoReel
                title="Inside a $50M Manhattan Penthouse"
                brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }}
                imageSrc="/assets/images/ext-15.jpg"
                videoSrc="/assets/videos/reel2.mp4"
                duration="0:47"
                ctaLabel="Learn more"
              />
              <CardVideoReel
                title="How This Chef Turns Leftovers Into Fine Dining"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                imageSrc="/assets/images/ext-13.jpg"
                videoSrc="/assets/videos/reel3.mp4"
                duration="2:31"
                ctaLabel="Learn more"
              />
              <CardVideoReel
                title="Why This Tiny Country Leads in Renewable Energy"
                brand={{ iconSrc: '/assets/icon-honeymilk.svg', name: 'Honey & milk' }}
                imageSrc="/assets/images/ext-16.jpg"
                videoSrc="/assets/videos/reel3.mp4"
                duration="3:05"
                ctaLabel="Learn more"
              />
            </div>
          </FeedSection>

          <FeedSection>
            <Card1x1
              title="Goldman Sachs Warns of &lsquo;Significant Headwinds&rsquo; for Tech Stocks in Q3"
              imageSrc="/assets/images/ext-17.jpg"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'MarketWatch Pro' }}
            />
          </FeedSection>

          <FeedSection>
            <CardGrid columns={3}>
              <Card3x1
                title="Shop Smart: Top Picks for Spring Wardrobe Essentials"
                description="Curated selections from trending brands at unbeatable prices."
                imageSrc="/assets/images/ext-18.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'StyleBox' }}
                ctaLabel="shop now"
              />
              <Card3x1
                title="SpaceX launches largest satellite constellation in single mission"
                imageSrc="/assets/images/ext-19.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
              <Card3x1
                title="Smart Locks for Every Budget: Compare Top Picks"
                imageSrc="/assets/images/ext-20.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'SecureHome' }}
                ctaLabel="compare"
              />
            </CardGrid>
          </FeedSection>

          {/* ===== Extended Feed — Batch 3 ===== */}

          <FeedSection>
            <SectionHeader title="Recommended" />
            <CardPicksCarousel
              brand={{ iconSrc: '/assets/icon-verizon.png', name: 'verizon' }}
              items={[
                { imageSrc: '/assets/images/ext-03.jpg', title: 'Stream live sports, news, and more with Verizon\u2019s all-in-one entertainment bundle' },
                { imageSrc: '/assets/images/ext-06.jpg', title: 'Why families are switching to Verizon\u2019s unlimited plan for better coverage' },
                { imageSrc: '/assets/images/ext-09.jpg', title: 'Get the latest Samsung Galaxy with trade-in savings up to $800' },
                { imageSrc: '/assets/images/ext-12.jpg', title: 'Verizon Home Internet: Fast, reliable, no annual contract' },
              ]}
            />
          </FeedSection>

          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Amazon&rsquo;s Secret Warehouse Deals You Didn&rsquo;t Know About"
                description="Uncover hidden discounts on refurbished and open-box electronics from Amazon&rsquo;s outlet."
                imageSrc="/assets/images/ext-08.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'DealFinder' }}
                ctaLabel="see deals"
              />
              <Card2x1
                title="Nvidia CEO Says AI Will Replace Most Entry-Level Coding Jobs"
                description="Jensen Huang predicts a fundamental shift in how software gets built over the next five years."
                imageSrc="/assets/images/ext-10.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'TechCrunch Pro' }}
                ctaLabel="read more"
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <Card1x1
              title="The Real Reason Your 401(k) Isn&rsquo;t Growing as Fast as You Think"
              description="Hidden fees, poor allocation, and market timing myths\u2014a financial advisor breaks down the most common retirement savings mistakes."
              imageSrc="/assets/images/ext-14.jpg"
              ctaLabel="read guide"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Fidelity' }}
            />
          </FeedSection>

          <FeedSection>
            <CardGrid columns={3}>
              <Card3x1
                title="EU passes landmark AI regulation with strict enforcement timeline"
                imageSrc="/assets/images/ext-15.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'PolicyTracker' }}
                ctaLabel="read more"
              />
              <Card3x1
                title="The wellness retreats Silicon Valley execs can&rsquo;t stop booking"
                imageSrc="/assets/images/ext-16.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'WellnessEscape' }}
                ctaLabel="book now"
              />
              <Card3x1
                title="How one couple retired at 40 by house-hacking their way to financial freedom"
                imageSrc="/assets/images/ext-19.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <SectionHeader title="Top Stories" />
            <TrendingGrid>
              <CardTrending
                title="Boeing faces fresh scrutiny after whistleblower testimony on Capitol Hill"
                imageSrc="/assets/images/ext-01.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'DefenseNews' }}
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Costco&rsquo;s gold bars are selling out faster than ever"
                imageSrc="/assets/images/ext-04.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                category="Retail"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="The surprising city that just topped the best places to live ranking"
                imageSrc="/assets/images/ext-05.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                category="Real Estate"
                ctaLabel="Learn More"
              />
              <CardTrending
                title="Why major airlines are quietly shrinking business class"
                imageSrc="/assets/images/ext-07.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Kayak' }}
                category="Travel"
                ctaLabel="Learn More"
              />
            </TrendingGrid>
          </FeedSection>

          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Solar Panels Just Got 40% Cheaper. Here&rsquo;s What Changed."
                description="New manufacturing breakthroughs are making residential solar more affordable than ever."
                imageSrc="/assets/images/ext-11.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'SunPower' }}
                ctaLabel="get quote"
              />
              <Card2x1
                title="Microsoft&rsquo;s Quiet Push Into Healthcare AI Could Disrupt the Industry"
                description="The tech giant is rolling out AI diagnostic tools across partner hospital networks."
                imageSrc="/assets/images/ext-13.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Azure Health' }}
                ctaLabel="learn more"
              />
            </CardGrid>
          </FeedSection>

          <FeedSection>
            <Card1x1
              title="Inside the Billionaire Bunker Boom: Why the Ultra-Rich Are Building Underground"
              imageSrc="/assets/images/ext-20.jpg"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'LuxuryLiving' }}
            />
          </FeedSection>

        </div>
      </div>
    </div>
  );
}
