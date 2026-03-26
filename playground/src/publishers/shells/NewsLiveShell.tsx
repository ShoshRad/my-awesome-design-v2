'use client';

/**
 * NewsLive Article Shell — the publisher chrome (top bar, nav, article) without the feed.
 * Pass widget content as children. Used by both demo routes and sandbox.
 */
export function NewsLiveShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-white)' }}>
      {/* Publisher Top Bar */}
      <header className="top-bar">
        <div className="top-bar__inner">
          <div className="top-bar__spacer" />
          <a className="top-bar__logo" href="#">
            <img src="/assets/publisher-logo.png" alt="Logo" />
          </a>
          <a className="top-bar__login" href="#">Login | Subscribe</a>
        </div>
      </header>

      {/* Navigation Bar */}
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

      {/* Main Content */}
      <main className="page-content">
        <div className="page-content__inner">
          <div className="main-column">
            {/* Article */}
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
              <div className="article__footer">&copy; 2025 CBS Broadcasting Inc. All Rights Reserved.</div>
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

            {/* Widget placement zone */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
