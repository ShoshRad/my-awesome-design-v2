'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './bi-mobile.css';
import { Card1x1 } from '@/design-system/registry/cards/Card1x1';
import { Card2x1 } from '@/design-system/registry/cards/Card2x1';
import { CardSpotlight } from '@/design-system/registry/cards/CardSpotlight';
import { CardStreamMobile } from '@/design-system/registry/cards/CardStreamMobile';
import { FeedSection, CardGrid } from '@/design-system/registry/layouts';

function PreviewBanner() {
  const searchParams = useSearchParams();
  if (searchParams.get('standalone') !== null) return null;
  return (
    <div className="bim-preview-banner">
      <a href="/" className="bim-preview-banner__back">&larr; Back to Registry</a>
      <div className="bim-preview-banner__center">
        <span className="bim-preview-banner__badge">Demo Preview</span>
        <span className="bim-preview-banner__title">Business Insider &mdash; Mobile Premium Feed</span>
      </div>
    </div>
  );
}

export default function BusinessInsiderMobilePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', maxWidth: 390, margin: '0 auto' }}>

      {/* ===== Demo Preview Banner ===== */}
      <Suspense><PreviewBanner /></Suspense>

      {/* ===== Mobile Header ===== */}
      <header className="bim-header">
        <div className="bim-header__hamburger">
          <span /><span /><span />
        </div>
        <img className="bim-header__logo" src="/assets/business-insider/bi-logo.svg" alt="Business Insider" />
        <div className="bim-header__icons">
          <svg className="bim-header__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="9" r="7" />
            <path d="M14 14L18 18" strokeLinecap="round" />
          </svg>
          <svg className="bim-header__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="7" r="4" />
            <path d="M3 18c0-3.87 3.13-7 7-7s7 3.13 7 7" strokeLinecap="round" />
          </svg>
        </div>
      </header>

      {/* ===== Category Nav ===== */}
      <nav className="bim-nav">
        <a className="bim-nav__item bim-nav__item--active" href="#">Business</a>
        <a className="bim-nav__item" href="#">Tech</a>
        <a className="bim-nav__item" href="#">Finance</a>
        <a className="bim-nav__item" href="#">Strategy</a>
        <a className="bim-nav__item" href="#">Life</a>
        <a className="bim-nav__item" href="#">Politics</a>
      </nav>

      {/* ===== Mobile Article ===== */}
      <div className="bim-article">
        <div className="bim-article__category">Tech</div>
        <h1 className="bim-article__headline">
          Atlassian says it&rsquo;s laying off 10% of its global workforce and attributes the cut to the &lsquo;AI era&rsquo;
        </h1>
        <div className="bim-article__byline">
          By <a href="#">Katherine Li</a> and <a href="#">Lloyd Lee</a>
        </div>
        <div className="bim-article__date">Mar 12, 2026, 1:42 AM GMT+2</div>

        <div className="bim-article__actions">
          <button className="bim-article__action-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h8M8 4v8" strokeLinecap="round" /></svg>
            Share
          </button>
          <button className="bim-article__action-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h10v12l-5-3-5 3V3z" /></svg>
            Save
          </button>
        </div>

        <div className="bim-article__hero">
          <img src="/assets/business-insider/hero-atlassian.png" alt="Atlassian CEO Mike Cannon-Brookes" />
          <div className="bim-article__caption">
            Atlassian CEO Mike Cannon-Brookes. The company is laying off 10% of its employees.
          </div>
          <div className="bim-article__credit">Reuters</div>
        </div>

        <div className="bim-article__body">
          <p>Another tech company is making job cuts and attributing them to AI.</p>
          <p>Atlassian, the Australian software company behind collaboration tools like Jira, Trello, and Confluence, announced plans to cut approximately 1,600 jobs, about 10% of its global workforce.</p>
          <p>In a filing with the Securities and Exchange Commission, the company described the layoffs as part of an effort to reposition the business for the &ldquo;AI era,&rdquo; noting that about 30% of the affected roles are based in Australia.</p>
        </div>

        <div className="bim-article__tags">
          <a className="bim-article__tag" href="#">AI</a>
          <a className="bim-article__tag" href="#">Layoffs</a>
          <a className="bim-article__tag" href="#">Tech</a>
        </div>
      </div>

      {/* ===== Read Next (mobile) ===== */}
      <div className="bim-read-next">
        <h2 className="bim-read-next__heading">Read next</h2>
        <div className="bim-read-next__list">
          <div className="bim-read-next__article">
            <p className="bim-read-next__title">Jack Dorsey just gave us our first glimpse at how doomsday layoffs could work in the AI era</p>
            <img className="bim-read-next__thumb" src="/assets/business-insider/readnext-1-32de13.png" alt="" />
          </div>
          <div className="bim-read-next__article">
            <p className="bim-read-next__title">CEO Jack Dorsey issues a dire warning about AI&rsquo;s impact as he cuts Block by almost half</p>
            <img className="bim-read-next__thumb" src="/assets/business-insider/readnext-2-32de13.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bim-separator" />

      {/* ===== Premium Feed (Mobile layout from Figma) ===== */}
      <div className="bim-feed">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* — Card 1: 1x1 organic (with description) — */}
          <FeedSection>
            <Card1x1
              title="Why Multitasking Feels Efficient—Even When It's Slowing You Down"
              description="From switching between emails and meetings to juggling tabs and to-do lists, multitasking has become a modern work badge. But new cognitive research shows that the more tasks we juggle, the more our focus suffers."
              imageSrc="/assets/images/batch3-01.jpg"
              sponsor={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
            />
          </FeedSection>

          {/* — Card 2: 1x1 sponsored (with description) — */}
          <FeedSection>
            <Card1x1
              title="Verizon Fiber – Premium Fiber Internet"
              description="Powerful fiber internet, an additional network point, an advanced router, and a range extender."
              imageSrc="/assets/images/batch3-02.jpg"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'verizon fiber' }}
            />
          </FeedSection>

          {/* — Card 3: 1x1 organic (no description) — */}
          <FeedSection>
            <Card1x1
              title="TGI Fridays files for bankruptcy protection as sit-down restaurant struggles continue"
              imageSrc="/assets/images/batch3-03.jpg"
              sponsor={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
            />
          </FeedSection>

          {/* — Card 4: Hybrid 2x1 (sponsored + organic) — */}
          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Reserve your trip to Thailand today and enjoy a 20% discount"
                imageSrc="/assets/images/batch3-04.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
                ctaLabel="learn more"
              />
              <Card2x1
                title="US upgrades probe into 129,000 Ford vehicles following fatal collisions"
                imageSrc="/assets/images/batch3-05.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                ctaLabel="read more"
              />
            </CardGrid>
          </FeedSection>

          {/* — Card 5: 1x1 social (sponsored — square image) — */}
          <FeedSection>
            <Card1x1
              variant="social"
              title="The Most Relaxing Farm Game of 2026 — No Install Needed"
              imageSrc="/assets/images/img-04-card1.png"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Taonga: Island Farm' }}
            />
          </FeedSection>

          {/* — Card 6: 1x1 sponsored (with description) — */}
          <FeedSection>
            <Card1x1
              title="Create magical moments of your next trip to Kuala Lumpur"
              description="Begin your Kuala Lumpur trip with endless in-flight entertainment and exquisite dining."
              imageSrc="/assets/images/batch3-06.jpg"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Renault' }}
            />
          </FeedSection>

          {/* — Card 6: 1x1 sponsored (no desc, with CTA) — */}
          <FeedSection>
            <Card1x1
              title="Don't miss out on Babbel's lifetime language offer!"
              imageSrc="/assets/images/batch3-07.jpg"
              ctaLabel="learn more"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'babbel' }}
            />
          </FeedSection>

          {/* — Card 7: 1x1 organic (no desc) — */}
          <FeedSection>
            <Card1x1
              title="Mars and Jupiter are cozying up in the night sky for their closest rendezvous this decade"
              imageSrc="/assets/images/batch3-08.jpg"
              sponsor={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
            />
          </FeedSection>

          {/* — Card 8: 2x1 grid (2 cards side by side) — */}
          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Fast-rising Wrexham's record turnover helps repay all loans to owners Reynolds"
                imageSrc="/assets/images/batch3-09.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
              <Card2x1
                title="How Much Does It Cost to Install a Lift at Home"
                imageSrc="/assets/images/batch3-10.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'portal to compare' }}
              />
            </CardGrid>
          </FeedSection>

          {/* — Card 9: 1x1 sponsored (desc + CTA) — */}
          <FeedSection>
            <Card1x1
              title="Millionaires Swear By This Money Hack You Should Too!"
              description="Discover radiant, hydrated skin with our luxurious skincare line. Say hello to confidence and goodbye to dullness."
              imageSrc="/assets/images/batch3-11.jpg"
              ctaLabel="learn more"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'simply piano' }}
            />
          </FeedSection>

          {/* — Card 10: Video Spotlight (mobile dark variant) — */}
          <FeedSection>
            <CardSpotlight
              variant="mobile"
              items={[
                { videoSrc: '/assets/videos/spotlight1.mp4', title: 'Beyond the Finish Line: Marathon Runner', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }, ctaLabel: 'Read More' },
                { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Just Do It — Spring Collection 2026', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' }, ctaLabel: 'Read More' },
                { videoSrc: '/assets/videos/spotlight1.mp4', title: 'How One Runner Broke the 2-Hour Barrier', brand: { iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }, ctaLabel: 'Read More' },
                { videoSrc: '/assets/videos/spotlight2.mp4', title: 'Nike Air Max: Engineered for Every Stride', brand: { iconSrc: '/assets/icon-ad.svg', name: 'Nike' }, ctaLabel: 'Read More' },
              ]}
            />
          </FeedSection>

          {/* — Card 11: Stream feed (4 compact horizontal cards) — */}
          <FeedSection>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <CardStreamMobile
                title="Lamar Jackson will likely be NFL MVP, but should we redefine award?"
                imageSrc="/assets/images/batch3-12.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
              <CardStreamMobile
                title="Is your dog under the age of 8? Now is the time to get pet health insurance!"
                imageSrc="/assets/images/batch3-13.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'chayuta' }}
              />
              <CardStreamMobile
                title="Workers are coffee badging to get around return-to-office mandates. What is it?"
                imageSrc="/assets/images/batch3-14.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
              />
              <CardStreamMobile
                title='This "Botox In a Bottle" Sold Out at Target (And This is Why)'
                imageSrc="/assets/images/batch3-15.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'beautylovelaugh' }}
                ctaLabel="learn more"
              />
            </div>
          </FeedSection>

          {/* — Card: 1x1 social-tall (sponsored — portrait image) — */}
          <FeedSection>
            <Card1x1
              variant="social-tall"
              title="Redesign Any Room in Minutes with AI"
              description="Upload a photo of your space and watch it transform. Choose from 50+ designer styles — modern, boho, minimalist, and more."
              imageSrc="/assets/images/img-25-tech.png"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'Roomvo' }}
            />
          </FeedSection>

          {/* — Hybrid 2x1 (organic + sponsored) — */}
          <FeedSection>
            <CardGrid columns={2}>
              <Card2x1
                title="Canadian Prime Minister Mark Carney's Liberals win an election upended by Trump"
                imageSrc="/assets/images/batch3-16.jpg"
                brand={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
                ctaLabel="read more"
              />
              <Card2x1
                title="Rip the Road with Confidence Quality Tires That Go the Distance"
                imageSrc="/assets/images/batch3-17.jpg"
                brand={{ iconSrc: '/assets/icon-ad.svg', name: 'Michelin' }}
                ctaLabel="learn more"
              />
            </CardGrid>
          </FeedSection>

          {/* — Card 12: 1x1 sponsored (desc + CTA) — */}
          <FeedSection>
            <Card1x1
              title="Most Popular Car the Year You Were Born"
              description="A century of four-wheeled mobility."
              imageSrc="/assets/images/ext-01.jpg"
              ctaLabel="learn more"
              sponsor={{ iconSrc: '/assets/icon-ad.svg', name: 'travel noir' }}
            />
          </FeedSection>

          {/* — Card 13: 1x1 organic (no desc) — */}
          <FeedSection>
            <Card1x1
              title="REAL ID deadline just over 1 week away. How do I apply?"
              imageSrc="/assets/images/ext-02.jpg"
              sponsor={{ iconSrc: '/assets/logos/bi-brand.png', name: 'Business Insider' }}
            />
          </FeedSection>

        </div>
      </div>

    </div>
  );
}
