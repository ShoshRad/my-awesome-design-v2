/**
 * USATodayShell — pixel-perfect recreation of usatoday.com article page chrome.
 *
 * Extracted specs (from raw HTML CSS + screenshot 2026-03-17):
 *
 * Typography:
 *   Headlines/Nav/UI: 'Unify Sans', 'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif
 *   Body text:        'Georgia Pro', Georgia, 'Droid Serif', serif
 *   Headline:         36px/40px, weight 550, color #303030
 *   Subheadings (h2): 24px/26px, weight 600, Unify Sans
 *   Body paragraphs:  20px/30px, Georgia Pro serif
 *   Byline:           700 16px/20px, Unify Sans, blue underline #0098FE
 *   Date:             12px/14px, #626262, Unify Sans
 *   Nav links:        700 14px (mobile) / 16px (desktop), Unify Sans
 *
 * Layout:
 *   Content wrapper: 1020px centered, padding 0 60px → 900px inner
 *   Article column:  660px
 *   Sky ad columns:  calc(50% - 570px) on each side (hidden on ≤1200px)
 *   Nav bar:         52px height, 5px blue (#0098FE) top border
 *   Sticky scroll bar: shows headline + Subscribe when scrolled
 *
 * Colors:
 *   Primary text:    #303030
 *   Secondary text:  #626262
 *   Accent blue:     #0098FE
 *   Link blue:       #1665cf (subscribe button), #1d5a82 (article links)
 *   Link underline:  #7FBDFF
 *   Borders:         #e0e0e0, #c2c2c2
 *   Background:      #fff (page), #f0f0f0 (newsletter bg fallback), #303030 (newsletter dark)
 *   Subscribe btn:   #1665cf bg, white text, 16px rounded
 */

import React from 'react';

/* ── Constants ──────────────────────────────────────────────── */

const FONT_UI = "'Unify Sans', 'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif";
const FONT_BODY = "'Georgia Pro', Georgia, 'Droid Serif', serif";

const BLUE = '#0098FE';
const LINK_BLUE = '#1665cf';
const TEXT = '#303030';
const TEXT_SECONDARY = '#626262';
const BORDER = '#e0e0e0';
const PAGE_WIDTH = 1020;
const CONTENT_PAD = 60;
const ARTICLE_WIDTH = 660;

const NAV_ITEMS = [
  'U.S.', 'Politics', 'Sports', 'Entertainment', 'Life',
  'Money', 'Travel', 'Opinion', 'Crossword',
];

const MORE_STORIES = [
  { title: "'We had to stay inside': Cruise passengers stranded after attacks", section: 'Travel' },
  { title: "Best dressed at the Oscars? Here's who fans voted for...", section: 'Entertainment' },
  { title: 'Nicole Kidman breaks silence over Keith Urban divorce', section: 'Entertainment' },
];

/* ── USA TODAY Logo (inline — can't extract from shadow DOM) ── */

function USATodayLogo() {
  const logoFont = "900 13px/1 'Helvetica Neue', Helvetica, Arial, sans-serif";
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, userSelect: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{ font: logoFont, color: TEXT, letterSpacing: '3.5px' }}>USA</span>
        <span style={{ font: logoFont, color: TEXT, letterSpacing: '1.8px' }}>TODAY</span>
      </div>
    </div>
  );
}

/* ── Mock ad component ── */

function MockAd({ width, height, label }: { width: number | string; height: number; label?: string }) {
  return (
    <div style={{
      width, height, background: '#f0f0f0', border: `1px solid ${BORDER}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 6, fontFamily: FONT_UI, overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ fontSize: 9, color: '#c2c2c2', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {label || 'Advertisement'}
      </div>
      <div style={{
        width: '70%', height: '45%', borderRadius: 4,
        background: 'linear-gradient(135deg, #e8e8e8 0%, #d8d8d8 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 8, background: '#c8c8c8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#aaa">
            <rect x="2" y="4" width="16" height="12" rx="2" fill="none" stroke="#aaa" strokeWidth="1.5" />
            <circle cx="7" cy="9" r="2" />
            <path d="M4 14l4-3 3 2 3-4 3 3" fill="none" stroke="#aaa" strokeWidth="1" />
          </svg>
        </div>
      </div>
      <div style={{ fontSize: 10, fontWeight: 600, color: '#b0b0b0' }}>Sponsored</div>
    </div>
  );
}

/* ── Shell ──────────────────────────────────────────────────── */

export function USATodayShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minWidth: 1000, background: '#fff', color: TEXT, fontFamily: FONT_UI }}>
      {/* ── Sticky scroll bar (headline + subscribe) ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 9999, background: '#fff',
        borderTop: `5px solid ${BLUE}`, height: 47, display: 'flex',
        alignItems: 'center', padding: `0 calc(50% - 510px)`,
        minWidth: 1000,
      }}>
        {/* Logo — inline rendered (shadow DOM prevents SVG extraction) */}
        <div style={{ width: 147, height: 52, flexShrink: 0, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
          <USATodayLogo />
        </div>
        {/* Headline in scroll bar */}
        <div style={{
          overflow: 'hidden', flex: 1, margin: '0 20px 0 8px',
          font: `700 16px/18px 'Helvetica Neue', 'Arial Nova', Helvetica, Arial, sans-serif`,
          color: TEXT, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const,
        }}>
          Where&apos;s the exit? For Trump, harder to get out of the Iran war than into it
        </div>
        {/* Subscribe button */}
        <div style={{
          flexShrink: 0, width: 107, height: 32, borderRadius: 16,
          background: LINK_BLUE, color: '#fff', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          font: `700 14px/30px 'Helvetica Neue', Arial, sans-serif`,
          cursor: 'pointer',
        }}>
          Subscribe
        </div>
      </div>

      {/* ── Navigation bar ── */}
      <nav style={{
        display: 'flex', maxWidth: 896, width: `calc(100% - 309px)`,
        height: 52, margin: '-52px auto 0', padding: '0 4px 0 0',
        alignItems: 'stretch',
      }}>
        {NAV_ITEMS.map((item, i) => (
          <a key={item} style={{
            display: 'flex', flexDirection: 'column', height: 40,
            borderTop: i === 1 ? `5px solid ${BLUE}` : '5px solid transparent',
            color: i === 1 ? BLUE : TEXT,
            font: `700 14px/1 ${FONT_UI}`, textDecoration: 'none',
            padding: '12px 12px 0', whiteSpace: 'nowrap',
            marginRight: i === 0 ? '0' : undefined,
          }}>
            {item}
          </a>
        ))}
        {/* Search + temp/weather + Subscribe + Sign In on right */}
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Search icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill={TEXT} style={{ cursor: 'pointer' }}>
            <circle cx="7" cy="7" r="5.5" stroke={TEXT} strokeWidth="1.5" fill="none" />
            <line x1="11" y1="11" x2="15" y2="15" stroke={TEXT} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {/* Weather */}
          <span style={{ font: `400 14px/1 ${FONT_UI}`, color: TEXT }}>44°F</span>
          {/* Subscribe pill */}
          <a style={{
            display: 'inline-flex', alignItems: 'center', height: 28,
            padding: '0 14px', borderRadius: 14, background: LINK_BLUE, color: '#fff',
            font: `700 12px/28px ${FONT_UI}`, textDecoration: 'none', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>
            Subscribe
          </a>
          {/* Sign In */}
          <span style={{ font: `400 12px/1 ${FONT_UI}`, color: TEXT, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Sign In
          </span>
        </div>
      </nav>

      {/* ── Banner ad ── */}
      <div style={{ maxWidth: PAGE_WIDTH, margin: '20px auto 0', padding: `0 ${CONTENT_PAD}px`, display: 'flex', justifyContent: 'center' }}>
        <MockAd width={728} height={90} label="Advertisement" />
      </div>

      {/* ── Content wrapper ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignContent: 'start',
        width: PAGE_WIDTH, minHeight: 480, margin: '30px auto 0', padding: `0 ${CONTENT_PAD}px`,
        background: '#fff', position: 'relative',
      }}>
        {/* ── Article column ── */}
        <div style={{ width: ARTICLE_WIDTH }}>
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '12px 0 0' }}>
            <span style={{
              font: `700 14px/1 ${FONT_UI}`, color: BLUE, textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}>
              Politics
            </span>
            <span style={{
              font: `700 12px/1 ${FONT_UI}`, color: TEXT, padding: '4px 10px',
              border: `1px solid ${BORDER}`, borderRadius: 14, cursor: 'pointer',
            }}>
              Donald Trump
            </span>
            <span style={{
              font: `700 12px/1 ${FONT_UI}`, color: '#fff', padding: '4px 10px',
              background: LINK_BLUE, borderRadius: 14, cursor: 'pointer',
            }}>
              Add Topic +
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            margin: '12px 0', color: TEXT,
            font: `600 36px/40px ${FONT_UI}`, fontWeight: 550,
          }}>
            Where&apos;s the exit? For Trump, harder to get out of the Iran war than into it
          </h1>

          {/* Byline */}
          <div style={{ display: 'inline-flex', position: 'relative', minHeight: 48, paddingLeft: 60, justifyContent: 'center', margin: '0 6px 3px 0', flexFlow: 'column wrap' }}>
            {/* Author avatar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, width: 48, height: 48,
              borderRadius: 24, background: '#e0e0e0', overflow: 'hidden',
            }}>
              <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${BLUE}33, ${BLUE}66)` }} />
            </div>
            <a style={{
              display: 'inline-flex', alignItems: 'center', margin: '0 6px 0 0',
              color: TEXT, font: `700 16px/20px ${FONT_UI}`, textDecoration: 'underline',
              textDecorationColor: BLUE, textDecorationThickness: '2px', textUnderlineOffset: '2px',
            }}>
              Susan Page
            </a>
            <span style={{ display: 'inline', order: 4, margin: '4px 0 0', color: TEXT, font: `16px/20px ${FONT_BODY}` }}>
              USA TODAY
            </span>
            <span style={{ margin: '4px 0', color: TEXT_SECONDARY, font: `12px/14px ${FONT_UI}` }}>
              Updated March 17, 2026, 8:03 a.m. ET
            </span>
          </div>

          {/* Share icons */}
          <div style={{ display: 'flex', gap: 16, margin: '12px 0 16px', alignItems: 'center' }}>
            {['facebook', 'x', 'email', 'share'].map((icon) => (
              <div key={icon} style={{
                width: 20, height: 20, borderRadius: '50%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill={TEXT}>
                  {icon === 'facebook' && <path d="M9 2.5h2V0H9C7.3 0 6 1.3 6 3v2H4v3h2v8h3V8h2l.5-3H9V3c0-.3.2-.5.5-.5z" />}
                  {icon === 'x' && <path d="M12.6 1h2.2L9.7 6.8l6 8.2h-4.7l-3.7-4.8-4.2 4.8H1l5.4-6.2L.8 1h4.8L9 5.3 12.6 1zM11.8 13.5h1.2L4.3 2.3H3l8.8 11.2z" />}
                  {icon === 'email' && <path d="M14 2H2C.9 2 0 2.9 0 4v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-6 3.5L2 6V4l6 3.5L14 4v2z" />}
                  {icon === 'share' && <path d="M13.5 1l-5 5M13.5 1H9m4.5 0v4.5M6 3.5H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V9.5" fill="none" stroke={TEXT} strokeWidth="1.5" strokeLinecap="round" />}
                </svg>
              </div>
            ))}
          </div>

          {/* ── Article body ── */}
          <div style={{ margin: '6px 0 0', color: TEXT, font: `20px/30px ${FONT_BODY}` }}>
            {/* Lead questions (interactive element from screenshot) */}
            <div style={{ margin: '0 0 24px', borderLeft: `3px solid ${BLUE}` }}>
              {[
                'What was the national average gas price during the weekend?',
                'What is the hard lesson for Trump regarding the war?',
                'How does Energy Secretary Chris Wright predict conflict will end?',
                "What's happening right now?",
              ].map((q, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 16px', borderBottom: i < 3 ? `1px solid ${BORDER}` : 'none',
                  font: `400 16px/20px ${FONT_UI}`, color: TEXT, cursor: 'pointer',
                }}>
                  {q}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginLeft: 12 }}>
                    <path d="M6 3l5 5-5 5" stroke={TEXT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Paragraphs — real text from the article */}
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              A hard truth for presidents: It&apos;s easier to get into a war than to get out of it.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Just ask Harry Truman about Korea, Lyndon Johnson about Vietnam, George W. Bush about Iraq.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              And now Donald Trump about Iran.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              When Trump announced in a social media video on Feb. 28 that the United States and Israel were striking Iran, he vowed that their overwhelming military advantage would crush the Islamic republic&apos;s navy, its missile capabilities and its nuclear potential &ndash; perhaps even overturn the government itself &ndash; in a war he suggested might last four to five weeks.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Now on week three, the United States has destroyed much of Iran&apos;s armed forces and its stores of missiles. Its supreme leader, Ayatollah Ali Khamenei, has been killed.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              But the ayatollah&apos;s son has taken his place, and Tehran has managed to essentially paralyze the crucial Strait of Hormuz with the threat of mines and attacks from small boats. That has spiked the cost of energy around the world and across the United States, including at the gas pump.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              For Trump, that has made it both problematic to declare victory and increasingly costly to continue the fight.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              &quot;I think the president, frankly, is stuck,&quot; State Department veteran Aaron David Miller said on MSNOW.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              All his options have downsides.
            </p>

            {/* Subheading */}
            <h2 style={{
              overflowWrap: 'break-word', margin: '20px 0',
              font: `600 24px/26px ${FONT_UI}`,
            }}>
              Asking allies for help &ndash; and hearing &apos;no&apos;
            </h2>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              For starters, Trump has found himself in the unaccustomed role of asking allies for help, to send warships that could escort vessels safely through the Strait of Hormuz. That may be the clearest message yet that he now sees an extended campaign ahead, not one that the forces arrayed in the region can end within a few weeks.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Also unaccustomed: Many allies declined.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Some noted that Trump launched the war without asking their advice or support. &quot;This is not our war,&quot; Germany&apos;s defense minister, Boris Pistorius, said. Prime Minister Keir Starmer said the United Kingdom would not be &quot;drawn into wider war.&quot; The European Union declined. Japan said it would consider the request.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Their demurrals prompted a rebuke from an angry Trump. &quot;We don&apos;t need anybody,&quot; he told reporters at the White House on March 16. &quot;We&apos;re the strongest nation in the world.&quot;
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Most Americans aren&apos;t persuaded that the initial strikes were a good idea or that the war will make the United States safer.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              In a Quinnipiac Poll taken March 6-8, 53% of voters opposed the U.S. strikes, and three of four (74%) were against sending ground troops. Nearly two-thirds (62%) said the White House hadn&apos;t provided a clear explanation for the military action.
            </p>

            {/* Subheading */}
            <h2 style={{
              overflowWrap: 'break-word', margin: '20px 0',
              font: `600 24px/26px ${FONT_UI}`,
            }}>
              What defines a presidency?
            </h2>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              Another lesson of history: Big wars tend to take over presidencies.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              LBJ is remembered more for the misadventure in Vietnam than he is for the Great Society legislation that created Medicare and Medicaid. George W. Bush&apos;s presidency is defined by two of America&apos;s longest wars, in Iraq and Afghanistan, which lasted longer than his tenure in office.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              During his second term, Trump has been focused on his legacy &ndash; in adding his name to the U.S. Institute of Peace and the Kennedy Center, in campaigning for the Nobel Peace Prize with an argument he had settled wars from Armenia to Rwanda.
            </p>
            <p style={{ margin: '20px 0', overflowWrap: 'break-word' }}>
              In Iran, though, peace now seems far away.
            </p>
          </div>

          {/* Share icons (bottom) */}
          <div style={{ display: 'flex', gap: 16, margin: '24px 0', alignItems: 'center' }}>
            {['facebook', 'x', 'email', 'share'].map((icon) => (
              <div key={icon} style={{
                width: 20, height: 20, display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill={TEXT}>
                  {icon === 'facebook' && <path d="M9 2.5h2V0H9C7.3 0 6 1.3 6 3v2H4v3h2v8h3V8h2l.5-3H9V3c0-.3.2-.5.5-.5z" />}
                  {icon === 'x' && <path d="M12.6 1h2.2L9.7 6.8l6 8.2h-4.7l-3.7-4.8-4.2 4.8H1l5.4-6.2L.8 1h4.8L9 5.3 12.6 1zM11.8 13.5h1.2L4.3 2.3H3l8.8 11.2z" />}
                  {icon === 'email' && <path d="M14 2H2C.9 2 0 2.9 0 4v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4l-6 3.5L2 6V4l6 3.5L14 4v2z" />}
                  {icon === 'share' && <path d="M13.5 1l-5 5M13.5 1H9m4.5 0v4.5M6 3.5H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V9.5" fill="none" stroke={TEXT} strokeWidth="1.5" strokeLinecap="round" />}
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right rail (sidebar) ── */}
        <div style={{ width: `calc(100% - ${ARTICLE_WIDTH}px)`, paddingLeft: 40 }}>
          {/* Ad */}
          <div style={{ margin: '0 0 24px' }}>
            <MockAd width="100%" height={250} />
          </div>

          {/* Daily Briefing newsletter signup */}
          <div style={{
            background: TEXT, color: '#fff', padding: 20, margin: '0 0 24px',
            WebkitFontSmoothing: 'antialiased',
          }}>
            <div style={{ font: `700 16px/20px ${FONT_UI}`, margin: '0 0 8px' }}>
              Daily Briefing, in your inbox
            </div>
            <div style={{ font: `14px/18px ${FONT_BODY}`, color: '#c2c2c2', margin: '0 0 16px' }}>
              Start your day with the morning&apos;s top news.
            </div>
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                placeholder="Email Address"
                readOnly
                style={{
                  flex: 1, height: 36, padding: '0 14px', border: 0, borderRadius: 0,
                  color: TEXT, font: `700 12px/14px ${FONT_UI}`,
                }}
              />
              <button style={{
                width: 36, height: 36, padding: 0, border: 0,
                background: LINK_BLUE, color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff">
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* More Stories sidebar */}
          <div style={{ borderTop: `2px solid #c2c2c2`, padding: '10px 0 0' }}>
            <div style={{
              font: `600 24px/26px ${FONT_UI}`, fontWeight: 550, color: TEXT, margin: '0 0 16px',
            }}>
              More Stories
            </div>
            {MORE_STORIES.map((story, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, margin: '0 0 16px', cursor: 'pointer',
              }}>
                <div style={{
                  width: 80, height: 60, background: '#e0e0e0', borderRadius: 0, flexShrink: 0,
                }} />
                <div>
                  <div style={{ font: `700 14px/18px ${FONT_UI}`, color: TEXT, margin: '0 0 4px' }}>
                    {story.title}
                  </div>
                  <div style={{ font: `12px/14px ${FONT_UI}`, color: BLUE, textTransform: 'uppercase' }}>
                    {story.section}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second ad */}
          <div style={{ margin: '24px 0' }}>
            <MockAd width="100%" height={250} />
          </div>
        </div>
      </div>

      {/* ── Feed zone — article column width only (660px) ── */}
      <div style={{ maxWidth: PAGE_WIDTH, margin: '0 auto', padding: `0 ${CONTENT_PAD}px` }}>
        <div style={{ width: ARTICLE_WIDTH }}>
          {/* "More Stories" divider like on the live site */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 24px',
          }}>
            <span style={{
              font: `600 24px/26px ${FONT_UI}`, fontWeight: 550, color: TEXT, whiteSpace: 'nowrap',
            }}>
              More Stories
            </span>
            <div style={{ flex: 1, height: 2, background: TEXT }} />
          </div>

          {/* Override card/section font tokens to use publisher fonts */}
          <div className="usatoday-feed" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {children}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{
        width: 880, margin: '40px auto 0', padding: `0 ${CONTENT_PAD}px`,
        color: TEXT, borderTop: `1px solid ${BORDER}`, paddingTop: 40,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 40px' }}>
          {[
            { title: 'News', items: ['U.S.', 'World', 'Politics', 'Investigations'] },
            { title: 'Sports', items: ['NFL', 'NBA', 'MLB', 'College'] },
            { title: 'Entertainment', items: ['Celebrities', 'TV', 'Movies', 'Music'] },
            { title: 'Life', items: ['Health', 'Food', 'Travel', 'Books'] },
          ].map((col) => (
            <div key={col.title} style={{ width: 196 }}>
              <div style={{ font: `700 14px/18px ${FONT_UI}`, margin: '0 0 12px' }}>{col.title}</div>
              {col.items.map((item) => (
                <div key={item} style={{ font: `14px/18px ${FONT_BODY}`, color: TEXT, margin: '8px 0', cursor: 'pointer' }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ font: `12px/14px ${FONT_BODY}`, textAlign: 'center', padding: '20px 0 40px', color: TEXT_SECONDARY }}>
          &copy; 2026 USA TODAY, a division of Gannett Satellite Information Network, LLC.
        </div>
      </footer>
    </div>
  );
}
