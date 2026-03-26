/**
 * CBS News Article Page Shell
 *
 * Extracted from: https://www.cbsnews.com/news/trump-having-big-white-house-event-around-epas-biofuels-mandates-decision/
 * CSS source: /fly/bundles/cbsnewscontent/css/articleV2.min.css
 *
 * Typography:
 *   - Headlines: "TTNorms Pro Serif Bold", serif — 32px, weight 700
 *   - Body text: "TTNorms Pro Serif Normal", serif — 20px, weight 450, line-height 150%, max-width 640px
 *   - UI/Nav: "Proxima Nova", sans-serif — 16px (1rem), weight 400
 *   - Flag/labels: "TTNormsPro Bold", sans-serif — .88rem, uppercase
 *   - Captions: "TTNormsPro Normal", sans-serif — 18px
 *   - Credits: "TTNormsPro Normal", sans-serif — 14px, uppercase, letter-spacing 1.6px
 *   - Section heading ("More from CBS News"): "Proxima Nova", 30px, weight normal, letter-spacing -1px, centered
 *
 * Colors:
 *   - CBS Red: #b60505 / #e10500 (live)
 *   - Header BG: #fff, border-bottom: 1px solid #e8e8e8
 *   - Text: #101010
 *   - Credit: #767676
 *   - Flag bg: rgba(16,16,16,.15), border-radius: 4px
 *
 * Layout:
 *   - Header: 64px, CSS grid 3-col (nav | logo | utils)
 *   - Body paragraphs: max-width 640px, centered
 *   - Logo: CBS eye SVG, 20px height, max-width 170px
 *   - Nav: 4 top-level items: Latest, Local News, Live, Shows
 *   - Byline: inline text "By Author1, Author2" (no avatars in main view)
 *   - Feed: article width (740px)
 */

import React from 'react';

const FONT_UI = '"Proxima Nova", Arial, sans-serif';
const FONT_HEADLINE = 'Georgia, "Times New Roman", serif'; /* fallback for TTNorms Pro Serif Bold */
const FONT_BODY = 'Georgia, "Times New Roman", serif'; /* fallback for TTNorms Pro Serif Normal */
const FONT_LABEL = '"Proxima Nova", Arial, sans-serif'; /* fallback for TTNormsPro Bold/Normal */
const CBS_RED = '#b60505';
const TEXT = '#101010';
const TEXT_CREDIT = '#767676';
const BORDER = '#e8e8e8';
const ARTICLE_WIDTH = 740;
const BODY_MAX_WIDTH = 640;

const NAV_ITEMS = ['Latest', 'Local News', 'Live', 'Shows'];

const RELATED_STORIES = [
  { title: 'Vice President JD Vance to visit Auburn Hills manufacturing facility this week', img: '/assets/images/ext-07.jpg', source: 'DETROIT' },
  { title: 'Trump requests delay of China trip because of Iran war', img: '/assets/images/ext-08.jpg', source: 'POLITICS' },
  { title: 'Kennedy Center votes to shut down operations for 2 years ahead of Trump-backed renovation project', img: '/assets/images/ext-09.jpg', source: 'POLITICS' },
  { title: 'North Texas lawmakers split on Trump\u2019s Iran strikes, agree regime needs to go', img: '/assets/images/ext-10.jpg', source: 'TEXAS' },
];

const FREE_PRESS_STORIES = [
  { title: 'What Happens After Trump?: Why Tim Miller Thinks Politics Can\u2019t Go Back', img: '/assets/images/ext-11.jpg' },
  { title: 'Exclusive: NGOs Got Billions from the EPA Despite Internal Concerns', img: '/assets/images/ext-12.jpg' },
];

/* ── CBS Eye Logo (inherits fill color) ── */
function CBSEyeLogo({ color = TEXT, height = 20 }: { color?: string; height?: number }) {
  return (
    <svg viewBox="0 0 230 32" style={{ height, maxWidth: 170, fill: color, display: 'block' }} aria-label="CBS News">
      <path d="M30.56 15.98c0 4.234-1.491 7.844-4.474 10.826-2.983 2.984-6.578 4.475-10.786 4.475-4.208 0-7.81-1.491-10.806-4.475C1.498 23.824 0 20.214 0 15.98c0-4.208 1.498-7.804 4.494-10.786C7.49 2.212 11.092.719 15.3.719c4.208 0 7.803 1.493 10.786 4.475 2.983 2.982 4.475 6.578 4.475 10.786m-.919.02c-1.2-2.642-3.054-4.79-5.56-6.446C21.44 7.766 18.506 6.87 15.28 6.87c-3.227 0-6.175.895-8.841 2.683-2.48 1.655-4.32 3.804-5.52 6.446 1.2 2.643 3.04 4.804 5.52 6.486 2.666 1.762 5.614 2.643 8.841 2.643 3.227 0 6.16-.88 8.801-2.643 2.507-1.682 4.36-3.843 5.561-6.486m-6.232-.02c0 2.237-.793 4.149-2.377 5.733-1.585 1.584-3.496 2.377-5.733 2.377-2.237 0-4.148-.793-5.732-2.377-1.585-1.584-2.378-3.496-2.378-5.733 0-2.238.793-4.14 2.378-5.713 1.584-1.57 3.495-2.357 5.732-2.357s4.148.786 5.733 2.357c1.584 1.572 2.377 3.475 2.377 5.713" />
      <path transform="translate(34)" d="M.282 16c0-7.89 6.51-14.4 14.992-14.4 7.694 0 11.64 5.524 11.64 5.524l-3.946 3.945s-2.762-3.945-7.694-3.945A8.84 8.84 0 006.398 16a8.84 8.84 0 008.876 8.877c5.13 0 7.89-3.945 7.89-3.945l3.946 3.945s-3.945 5.524-11.836 5.524C6.792 30.4.282 23.89.282 16M29.32 2.191h11.64c5.522 0 8.876 3.354 8.876 7.299 0 4.34-3.748 5.72-3.748 5.72s5.128 1.381 5.128 6.707c0 4.34-3.55 7.891-9.468 7.891H29.319V2.192zm11.244 10.652c1.973 0 3.157-1.183 3.157-2.761S42.536 7.32 40.563 7.32h-5.325v5.523h5.325zm.79 11.836c2.367 0 3.747-1.381 3.747-3.354 0-1.972-1.38-3.353-3.747-3.353h-6.116v6.707h6.116zm10.572 1.38l3.946-3.945s2.366 2.96 6.509 2.96c3.156 0 4.537-1.382 4.537-3.157 0-4.734-13.808-2.564-13.808-12.23 0-4.34 3.748-8.088 10.06-8.088 6.116 0 9.272 3.748 9.272 3.748l-3.946 3.945s-1.973-2.367-5.129-2.367c-2.959 0-4.142 1.184-4.142 2.762 0 4.734 13.808 2.564 13.808 12.23 0 4.538-3.945 8.482-10.454 8.482-7.102 0-10.653-4.34-10.653-4.34m30.97-23.868h5.326l13.413 17.162V2.192h5.919v27.617h-5.326L88.812 12.647v17.162h-5.917V2.192zm28.682 0h20.515v5.524h-14.598v5.325h11.442v5.326h-11.442v5.919h14.993v5.523h-20.91V2.192zm22.29 0h6.116l5.72 18.543h.197l5.72-18.543h5.524l5.721 18.543h.198l5.72-18.543h6.115l-9.074 27.617h-5.72L154.5 11.86h-.237l-5.602 17.95h-5.72l-9.075-27.617zm40.597 23.869l3.946-3.946s2.367 2.96 6.509 2.96c3.156 0 4.537-1.382 4.537-3.157 0-4.734-13.808-2.564-13.808-12.23 0-4.34 3.748-8.088 10.06-8.088 6.116 0 9.272 3.748 9.272 3.748l-3.946 3.945s-1.972-2.367-5.129-2.367c-2.959 0-4.142 1.184-4.142 2.762 0 4.734 13.808 2.564 13.808 12.23 0 4.538-3.945 8.482-10.454 8.482-7.102 0-10.653-4.34-10.653-4.34" />
    </svg>
  );
}

/* ── Small CBS Eye icon (14px, for Exclusive flag) ── */
function CBSEyeIcon() {
  return (
    <svg viewBox="0 0 100 100" style={{ width: 14, height: 14, fill: TEXT, marginRight: 4, flexShrink: 0 }}>
      <path d="M100 50.275c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50Zm-3.005-.001c-3.93-8.646-9.992-15.677-18.196-21.093-8.64-5.851-18.24-8.778-28.799-8.778-10.56 0-20.206 2.927-28.93 8.778-8.118 5.416-14.14 12.447-18.065 21.093 3.925 8.648 9.947 15.721 18.064 21.225 8.725 5.766 18.372 8.647 28.931 8.647 10.56 0 20.16-2.882 28.799-8.647 8.204-5.504 14.267-12.577 18.196-21.225ZM50 76.827c14.664 0 26.552-11.888 26.552-26.552S64.664 23.723 50 23.723 23.448 35.61 23.448 50.275 35.336 76.827 50 76.827Z" />
    </svg>
  );
}

function MockAd({ width, height, label }: { width: number | string; height: number; label: string }) {
  return (
    <div style={{
      width,
      height,
      background: '#f2f2f2',
      border: '1px dashed #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui',
      fontSize: 11,
      color: '#999',
      flexShrink: 0,
    }}>
      {label}
    </div>
  );
}

export function CBSNewsShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: FONT_UI, color: TEXT, background: '#fff', minHeight: '100vh' }}>
      {/* ── Header (64px, white, grid layout) ── */}
      <header style={{
        background: '#fff',
        borderBottom: `1px solid ${BORDER}`,
        position: 'sticky',
        top: 0,
        zIndex: 9,
        height: 64,
        padding: '0 16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
      }}>
        {/* Left: Hamburger + Nav items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <button style={{ background: 'none', border: 'none', color: TEXT, cursor: 'pointer', padding: 8, lineHeight: 1, marginRight: 4 }} aria-label="Menu">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" style={{ display: 'block' }}>
              <rect width="18" height="2" rx="1" fill={TEXT} />
              <rect y="6" width="18" height="2" rx="1" fill={TEXT} />
              <rect y="12" width="18" height="2" rx="1" fill={TEXT} />
            </svg>
          </button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: TEXT,
                fontSize: 16,
                fontWeight: 400,
                fontFamily: FONT_UI,
                textDecoration: 'none',
                padding: '8px 12px',
                whiteSpace: 'nowrap',
                lineHeight: '120%',
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Center: CBS News Logo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <CBSEyeLogo />
          </a>
        </div>

        {/* Right: Search + Watch Live */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end' }}>
          <button style={{ background: 'none', border: 'none', color: TEXT, cursor: 'pointer', padding: 4 }} aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ display: 'block' }}>
              <circle cx="7.5" cy="7.5" r="6" stroke={TEXT} strokeWidth="2" />
              <line x1="12" y1="12" x2="17" y2="17" stroke={TEXT} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button style={{
            background: CBS_RED,
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            padding: '7px 14px',
            fontSize: 13,
            fontWeight: 700,
            fontFamily: FONT_UI,
            cursor: 'pointer',
          }}>
            Watch Live
          </button>
        </div>
      </header>

      {/* ── Top banner ad ── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0', background: '#f8f8f8' }}>
        <MockAd width={728} height={90} label="Advertisement 728×90" />
      </div>

      {/* ── Main Content ── */}
      <main style={{ maxWidth: 1320, margin: '0 auto', padding: '0 20px' }}>
        {/* Content grid: 2 columns (article area + right rail) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '0 40px' }}>

          {/* ── Left: Article area ── */}
          <div>
            {/* Article Header */}
            <div style={{ paddingTop: 20, paddingLeft: 20 }}>
              {/* Exclusive flag + Politics category */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                {/* Exclusive flag: pill with CBS eye + label */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  backgroundColor: 'rgba(16,16,16,0.15)',
                  borderRadius: 4,
                  padding: '4px 8px',
                }}>
                  <CBSEyeIcon />
                  <span style={{
                    fontFamily: FONT_LABEL,
                    fontSize: 14,
                    fontWeight: 700,
                    color: TEXT,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}>
                    Exclusive
                  </span>
                </div>
                {/* Politics category link */}
                <a href="#" style={{
                  fontFamily: FONT_LABEL,
                  fontSize: 14,
                  fontWeight: 700,
                  color: TEXT,
                  textDecoration: 'underline',
                }}>
                  Politics
                </a>
              </div>

              {/* Headline — TTNorms Pro Serif Bold fallback to Georgia serif */}
              <h1 style={{
                fontFamily: FONT_HEADLINE,
                fontSize: 32,
                fontWeight: 700,
                lineHeight: '125%',
                color: TEXT,
                letterSpacing: '0.3px',
                margin: '8px 0 12px',
                maxWidth: '100%',
              }}>
                Trump hosting big White House event around EPA&apos;s biofuels mandates decision
              </h1>
            </div>

            {/* Meta wrapper (byline + timestamp) — full-width separator line */}
            <div style={{ borderTop: `1px solid ${BORDER}`, display: 'flex', flexDirection: 'column', padding: '12px 20px' }}>
              {/* Byline: inline text "By Author1, Author2" */}
              <div style={{ fontFamily: FONT_UI, fontSize: 14, color: TEXT, marginBottom: 4 }}>
                By{' '}
                <a href="#" style={{ color: TEXT, fontWeight: 700, textDecoration: 'none' }}>Ed O&apos;Keefe</a>
                ,{' '}
                <a href="#" style={{ color: TEXT, fontWeight: 700, textDecoration: 'none' }}>Jennifer Jacobs</a>
              </div>

              {/* Timestamp */}
              <div style={{ fontFamily: FONT_UI, fontSize: 13, color: TEXT_CREDIT }}>
                Updated on: March 17, 2026 / 7:44 AM EDT / CBS News
              </div>
            </div>

            {/* Article Body */}
            <article style={{ maxWidth: ARTICLE_WIDTH }}>
              {/* Hero Image (loaded in body area) */}
              <figure style={{ margin: '20px 0' }}>
                <img
                  src="/assets/cbs-news/hero2.jpg"
                  alt="Trump at White House"
                  style={{ width: '100%', display: 'block' }}
                />
                <div style={{ maxWidth: BODY_MAX_WIDTH, margin: '0 auto' }}>
                  <div style={{ fontFamily: FONT_LABEL, fontSize: 18, color: TEXT, marginTop: 8, lineHeight: '125%' }}>
                    President Trump speaks at the White House.
                  </div>
                  <div style={{ fontFamily: FONT_LABEL, fontSize: 14, color: TEXT_CREDIT, marginTop: 8, textTransform: 'uppercase', letterSpacing: '1.6px' }}>
                    Getty Images
                  </div>
                </div>
              </figure>

              {/* Body paragraphs — serif, 20px, max-width 640px, centered */}
              <div style={{ fontFamily: FONT_BODY, fontSize: 20, lineHeight: '150%', fontWeight: 450, color: TEXT }}>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  President Trump has invited farmers and biofuels producers to the White House for a big event next week as the industry awaits the government&apos;s announcement on mandates for the fuel additives.
                </p>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  The &ldquo;celebration of agriculture&rdquo; event is scheduled for March 27 on the White House South Lawn, sources familiar with the planning told CBS News.
                </p>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  The invitation said: &ldquo;Later this month, following National Agriculture Week, President Trump plans to host hundreds of farmers and ranchers from around the country on the South Lawn to shine a spotlight on the men and women growing our food, fiber, and fuel.&rdquo;
                </p>

                {/* Inline ad (ad-mpu-plus-outstream-middle) */}
                <div style={{ margin: '20px auto', maxWidth: BODY_MAX_WIDTH }}>
                  <MockAd width="100%" height={250} label="In-article Ad" />
                </div>

                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  The U.S. Environmental Protection Agency&apos;s decision on biofuels is expected around the end of March.
                </p>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  The renewable volume obligations, or RVOs, mandate how much biofuel, such as corn-based ethanol and biodiesel, must be blended into the nation&apos;s fuel supply.
                </p>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  Next week&apos;s meeting could have an impact on the markets amid speculation on the RVO decision coming later this month.
                </p>

                {/* Second image */}
                <figure style={{ margin: '20px 0' }}>
                  <img
                    src="/assets/cbs-news/hero.jpg"
                    alt="Biofuels policy"
                    style={{ width: '100%', display: 'block' }}
                  />
                  <div style={{ maxWidth: BODY_MAX_WIDTH, margin: '0 auto' }}>
                    <div style={{ fontFamily: FONT_LABEL, fontSize: 14, color: TEXT_CREDIT, marginTop: 8, textTransform: 'uppercase', letterSpacing: '1.6px' }}>
                      Getty Images
                    </div>
                  </div>
                </figure>

                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  The event comes as the White House and broader Republican Party works to keep key elements of its coalition — the agricultural industry and farming families — on board ahead of the midterm elections, including expensive contests in farming states Georgia, Iowa, Montana, North Carolina, and Nebraska.
                </p>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  The administration also decided to allow the up to 80,000 metric tons of low-tariff, lower-quality beef from Argentina to be imported to help keep grocery prices down, angering cattle ranchers who argue the decision will hurt domestic production and sales.
                </p>
                <p style={{ maxWidth: BODY_MAX_WIDTH, margin: '12px auto' }}>
                  White House spokespeople didn&apos;t immediately comment.
                </p>
              </div>

            </article>

            {/* ── Recirculation: "More from CBS News" ── */}
            <div style={{ borderTop: `1px solid ${BORDER}`, padding: '24px 0', margin: '20px 0' }}>
              <div style={{
                fontFamily: FONT_UI,
                fontSize: 18,
                fontWeight: 700,
                color: TEXT,
                marginBottom: 16,
              }}>
                More from CBS News
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {RELATED_STORIES.map((story) => (
                  <a
                    key={story.title}
                    href="#"
                    style={{
                      display: 'flex',
                      gap: 12,
                      padding: '12px 12px 12px 16px',
                      borderRadius: 8,
                      backgroundColor: '#f2f2f2',
                      border: '1px solid #f2f2f2',
                      textDecoration: 'none',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Source label: CBS eye + category */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
                        <CBSEyeLogo color={TEXT} height={10} />
                        <span style={{
                          fontFamily: FONT_UI,
                          fontSize: 11,
                          textTransform: 'uppercase' as const,
                          letterSpacing: '0.5px',
                          color: TEXT,
                          lineHeight: 1,
                        }}>
                          <span style={{ fontWeight: 700 }}>CBS</span>{' '}
                          <span style={{ fontWeight: 400 }}>{story.source}</span>
                        </span>
                      </div>
                      {/* Title */}
                      <span style={{
                        fontFamily: FONT_UI,
                        fontSize: 16,
                        fontWeight: 400,
                        color: TEXT,
                        lineHeight: '125%',
                        display: 'block',
                      }}>
                        {story.title}
                      </span>
                    </div>
                    <img
                      src={story.img}
                      alt=""
                      style={{ width: 80, height: 80, objectFit: 'cover', flexShrink: 0, borderRadius: 6 }}
                    />
                  </a>
                ))}
              </div>

              {/* ── Go deeper with The Free Press ── */}
              <div style={{ marginTop: 24 }}>
                <div style={{
                  fontFamily: FONT_UI,
                  fontSize: 18,
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: 16,
                }}>
                  Go deeper with The Free Press
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                  {FREE_PRESS_STORIES.map((story) => (
                    <a
                      key={story.title}
                      href="#"
                      style={{
                        display: 'flex',
                        gap: 12,
                        padding: '12px 12px 12px 16px',
                        borderRadius: 8,
                        backgroundColor: '#f2f2f2',
                        border: '1px solid #f2f2f2',
                        textDecoration: 'none',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {/* Free Press logo badge */}
                        <div style={{
                          display: 'inline-block',
                          backgroundColor: '#d12b1e',
                          color: '#fff',
                          fontFamily: FONT_UI,
                          fontSize: 8,
                          fontWeight: 700,
                          textTransform: 'uppercase' as const,
                          letterSpacing: '0.8px',
                          padding: '3px 5px 2px',
                          lineHeight: 1,
                          marginBottom: 6,
                        }}>
                          THE FREEPRESS
                        </div>
                        {/* Title */}
                        <span style={{
                          fontFamily: FONT_UI,
                          fontSize: 16,
                          fontWeight: 400,
                          color: TEXT,
                          lineHeight: '125%',
                          display: 'block',
                        }}>
                          {story.title}
                        </span>
                      </div>
                      <img
                        src={story.img}
                        alt=""
                        style={{ width: 80, height: 80, objectFit: 'cover', flexShrink: 0, borderRadius: 6 }}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Tags ── */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginTop: 24,
                paddingTop: 20,
                borderTop: `1px solid ${BORDER}`,
                fontFamily: FONT_UI,
                fontSize: 16,
              }}>
                <span style={{ color: TEXT_CREDIT }}>In:</span>
                <a href="#" style={{ color: TEXT, textDecoration: 'underline' }}>Environmental Protection Agency</a>
                <a href="#" style={{ color: TEXT, textDecoration: 'underline' }}>Donald Trump</a>
              </div>
            </div>

            {/* ── Feed Zone ── */}
            <div className="cbsnews-feed" style={{ maxWidth: ARTICLE_WIDTH, paddingBottom: 40 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {children}
              </div>
            </div>
          </div>

          {/* ── Right Rail ── */}
          <aside>
            <div style={{ position: 'sticky', top: 80, paddingTop: 20 }}>
              {/* CBS News 24/7 live video embed placeholder */}
              <div style={{
                background: '#000',
                aspectRatio: '16/9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#fff', fontSize: 13, fontFamily: FONT_UI, fontWeight: 700 }}>CBS News 24/7</div>
                  <div style={{ width: 0, height: 0, borderLeft: '16px solid #fff', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', margin: '8px auto' }} />
                </div>
              </div>

              {/* Related stories */}
              <div style={{ marginBottom: 20 }}>
                <div style={{
                  fontFamily: FONT_UI,
                  fontSize: 18,
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: 16,
                }}>
                  More from CBS News
                </div>
                {RELATED_STORIES.map((story) => (
                  <a
                    key={story.title}
                    href="#"
                    style={{
                      display: 'flex',
                      gap: 10,
                      textDecoration: 'none',
                      marginBottom: 20,
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Source label */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 4 }}>
                        <CBSEyeLogo color={TEXT} height={8} />
                        <span style={{
                          fontFamily: FONT_UI,
                          fontSize: 10,
                          textTransform: 'uppercase' as const,
                          letterSpacing: '0.4px',
                          color: TEXT,
                          lineHeight: 1,
                        }}>
                          <span style={{ fontWeight: 700 }}>CBS</span>{' '}
                          <span style={{ fontWeight: 400 }}>{story.source}</span>
                        </span>
                      </div>
                      <span style={{
                        fontFamily: FONT_UI,
                        fontSize: 14,
                        fontWeight: 400,
                        color: TEXT,
                        lineHeight: '130%',
                        display: 'block',
                      }}>
                        {story.title}
                      </span>
                    </div>
                    <img
                      src={story.img}
                      alt=""
                      style={{ width: 50, height: 50, objectFit: 'cover', flexShrink: 0, borderRadius: 4 }}
                    />
                  </a>
                ))}
              </div>

              {/* Right rail ad */}
              <MockAd width={300} height={250} label="Ad 300×250" />
            </div>
          </aside>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: '#1e1e1e', color: '#999', padding: '32px 20px', marginTop: 40 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CBSEyeLogo color="#fff" height={20} />
          <div style={{ fontSize: 12, fontFamily: FONT_UI }}>
            Copyright &copy; 2026 CBS Interactive Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
