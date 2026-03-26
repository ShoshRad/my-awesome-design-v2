'use client';

/**
 * Business Insider Article Shell — publisher chrome (ticker, nav, article, read-next) without the feed.
 * Pass widget content as children. Used by both demo routes and sandbox.
 */
export function BusinessInsiderShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Stock Ticker Bar */}
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

      {/* Nav Bar */}
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

      {/* Article */}
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
          </div>

          <div className="bi-article__tags">
            <a className="bi-article__tag" href="#">AI</a>
            <a className="bi-article__tag" href="#">Layoffs</a>
            <a className="bi-article__tag" href="#">Artificial Intelligence</a>
          </div>
        </article>
      </div>

      {/* Read Next */}
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

      {/* Widget placement zone */}
      <div className="bi-feed">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {children}
        </div>
      </div>
    </div>
  );
}
