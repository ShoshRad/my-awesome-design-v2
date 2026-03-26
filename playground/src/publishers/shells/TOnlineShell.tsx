'use client';

/**
 * t-online.de Article Shell — pixel-perfect recreation of t-online article chrome.
 * Based on: https://www.t-online.de/unterhaltung/stars/id_101172892/
 * Pass widget content as children. Used by both demo routes and sandbox.
 *
 * Layout specs (from live CSS):
 *   max-w-page: 62.25rem (996px)
 *   w-companion (sidebar): 21.75rem (348px)
 *   body text: text-18 (1.125rem / 18px)
 *   h1: text-40 (2.5rem / 40px)
 *   kicker: text-28 (1.75rem / 28px)
 *   font: Roboto, Arial, sans-serif
 *   colors: salemsfur #171B26, manatee #8D93A6, magenta #E20074,
 *           alpine #F7F9FC, botticelli #CFD5E5, whitelilac #EBEFF7,
 *           snow #FFFFFF, trout #474C59, royalblue #00A0DE
 *   container margin: margin-left: max(36px, calc(50vw - 647px)); max-width: 997px
 *     → on 1920px screen: content starts at ~313px, ends at ~1310px, ~610px right for sky ads
 */

const SCHLAGZEILEN = [
  'Trump plaudert Todesdiagnose aus',
  'Rewe tauscht Schokolade aus',
  'Zwei Menschen erschossen – Täter flieht',
  'ARD-Star: Erster Freund mit 33 Jahren',
  'Öl sparen: Land führt Vier-Tage-Woche ein',
  'Mann stürzt aus 12. Stock in den Tod',
  '"Baywatch"-Star landet im Gefängnis',
  'Spritpreise steigen langsam weiter',
  'Trump will dieses Land jetzt "nehmen"',
  'Vier-Jahre-Sperre für Ex-Tennis-Star',
];

const FONT = "'Roboto', Arial, sans-serif";

/* t-online uses a left-biased layout with sky ads to the right.
   On wide screens (1440px+), content sits left with ads on right.
   We use a wide centered container that holds article+companion+sky ad together. */
const PAGE_MAX = 1200; /* holds 997px content + 24 gap + 160 sky ad + padding */

export function TOnlineShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: FONT }}>
      {/* ===== Service Bar — h-40 (40px), bg-alpine (#F7F9FC), text-12, text-manatee ===== */}
      <div style={{ background: '#F7F9FC', height: 40, display: 'flex', alignItems: 'center', fontSize: 12, color: '#8D93A6', borderBottom: '1px solid #EBEFF7' }}>
        <nav style={{ maxWidth: PAGE_MAX, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', width: '100%' }} aria-label="Kopfleiste">
          <div style={{ display: 'grid', gridAutoFlow: 'column', gap: 12, alignItems: 'center' }}>
            {/* Wetter with icon */}
            <a href="#" style={{ display: 'inline-grid', height: '100%', alignItems: 'center', color: '#8D93A6', textDecoration: 'none' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="3.5" stroke="#8D93A6" strokeWidth="1.2"/><path d="M8 1v1M8 11v1M3.5 6H2.5M13.5 6h-1M4.7 3.2l-.7-.7M12 3.2l.7-.7M4.7 8.8l-.7.7M12 8.8l.7.7" stroke="#8D93A6" strokeWidth="1" strokeLinecap="round"/><path d="M3 12c0-1 .8-2 2-2h6c1.2 0 2 1 2 2" stroke="#8D93A6" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span>Wetter</span>
              </span>
            </a>
            {/* DAX with chart icon */}
            <a href="#" style={{ display: 'inline-grid', height: '100%', alignItems: 'center', color: '#8D93A6', textDecoration: 'none' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12l3-4 3 2 4-6" stroke="#8D93A6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>DAX</span>
                <span style={{ fontWeight: 700, color: '#0D8033' }}>23.456</span>
              </span>
            </a>
            <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Jobsuche</a>
            <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Partnersuche</a>
            <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Telefonverz.</a>
            <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Lotto</a>
            <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Mehr &hellip;</a>
          </div>
          <div style={{ display: 'grid', gridAutoFlow: 'column', gap: 12, alignItems: 'center' }}>
            <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Telekom Services</a>
          </div>
        </nav>
      </div>

      {/* Magenta accent line — hr h-4 bg-magenta */}
      <div style={{ height: 4, background: '#E20074' }} />

      {/* ===== Header — sticky, h-[68px] logo/search bar + nav row ===== */}
      <header style={{ position: 'sticky', top: 0, zIndex: 10702, background: '#FFFFFF', borderBottom: '1px solid #EBEFF7' }}>
        <div style={{ maxWidth: PAGE_MAX, margin: '0 auto', padding: '0 24px' }}>
          {/* Logo bar — h-[68px], grid: hamburger(24) | logo(225) | search(360) | actions(auto) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '24px 225px 360px auto',
            height: 68,
            alignItems: 'center',
            gap: 24,
          }}>
            {/* Hamburger */}
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center', width: 24 }}>
              <span style={{ width: 20, height: 2, background: '#171B26', borderRadius: 1 }} />
              <span style={{ width: 20, height: 2, background: '#171B26', borderRadius: 1 }} />
              <span style={{ width: 20, height: 2, background: '#171B26', borderRadius: 1 }} />
            </button>

            {/* Logo — min-w-[144px] */}
            <div style={{ display: 'flex', alignItems: 'center', minWidth: 144 }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/assets/t-online/t-online-logo.svg" alt="t-online - Anständig. Informiert." style={{ height: 28 }} />
              </a>
            </div>

            {/* Search bar — h-48, rounded-8, border-botticelli, full input */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 430px)', justifyContent: 'center' }}>
              <div style={{
                display: 'flex',
                height: 48,
                borderRadius: 8,
                border: '1px solid #CFD5E5',
                background: '#FFFFFF',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
                <input
                  type="text"
                  placeholder="Suchen"
                  readOnly
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    padding: '0 16px',
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#171B26',
                    background: 'transparent',
                    fontFamily: 'inherit',
                  }}
                />
                <button style={{
                  display: 'inline-flex',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 12px',
                  background: '#E20074',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <circle cx="9" cy="9" r="6" />
                    <path d="M13.5 13.5L17 17" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right actions — E-Mail Login button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
              <button style={{
                display: 'grid',
                gridAutoFlow: 'column',
                height: 48,
                alignItems: 'center',
                gap: 8,
                borderRadius: 4,
                border: '1px solid #CFD5E5',
                background: '#FFFFFF',
                padding: '0 12px',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
                color: '#171B26',
                fontFamily: 'inherit',
              }}>
                {/* Mail icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="#E20074" strokeWidth="1.5" />
                  <path d="M2 6l8 5 8-5" stroke="#171B26" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>E-Mail Login</span>
              </button>
            </div>
          </div>

          {/* Navigation row — below logo bar */}
          <nav className="tonline-nav" style={{ display: 'flex', alignItems: 'center', gap: 0, borderTop: '1px solid #EBEFF7', height: 40, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {[
              { label: 'Politik', active: false },
              { label: 'Sport', active: false },
              { label: 'Wirtschaft & Finanzen', active: false },
              { label: 'Unterhaltung', active: true },
              { label: 'Panorama', active: false },
              { label: 'Gesundheit', active: false },
              { label: 'Leben', active: false },
              { label: 'Klima', active: false },
              { label: 'Mobilität', active: false },
              { label: 'Digital', active: false },
              { label: 'Heim & Garten', active: false },
              { label: 'Kaufberatung', active: false },
              { label: 'Video', active: false },
            ].map((item) => (
              <a key={item.label} href="#" style={{
                fontSize: 14,
                color: item.active ? '#E20074' : '#171B26',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                padding: '8px 12px',
                fontWeight: item.active ? 600 : 400,
                borderBottom: item.active ? '2px solid #E20074' : '2px solid transparent',
                flexShrink: 0,
              }}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Main content area: Article + Companion + Sky Ads ===== */}
      <div style={{ maxWidth: PAGE_MAX, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          {/* ---- Article column ---- */}
          <main style={{ flex: 1, minWidth: 0 }}>
            {/* Breadcrumbs */}
            <div style={{ padding: '16px 0 12px', fontSize: 13, color: '#8D93A6', display: 'flex', alignItems: 'center', gap: 6 }}>
              <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#CFD5E5' }}>&rsaquo;</span>
              <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Unterhaltung</a>
              <span style={{ color: '#CFD5E5' }}>&rsaquo;</span>
              <a href="#" style={{ color: '#8D93A6', textDecoration: 'none' }}>Stars</a>
            </div>

            <article>
              {/* Kicker — text-28 on desktop */}
              <div style={{ fontSize: 28, fontWeight: 700, color: '#171B26', marginBottom: 8, lineHeight: 1.2 }}>
                <span style={{ color: '#E20074' }}>Nach Urteil wegen Hitlergruß</span>
              </div>

              {/* Main headline — text-40 */}
              <h1 style={{
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1.2,
                color: '#171B26',
                margin: '0 0 16px',
              }}>
                Überraschende Wende im Gerichtsprozess um Melanie Müller
              </h1>

              {/* Author & date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, fontSize: 14, color: '#8D93A6' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#EBEFF7', flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#171B26', fontWeight: 500 }}>Jennifer Doemkes</span>
                  <span style={{ color: '#8D93A6' }}> (M.A.)</span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: '#8D93A6', marginBottom: 20 }}>
                Aktualisiert am 17.03.2026, 07:33 Uhr
              </div>

              {/* Actions bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #EBEFF7' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #CFD5E5', background: '#F7F9FC', borderRadius: 20, padding: '6px 14px', cursor: 'pointer', fontSize: 12, color: '#171B26', fontFamily: 'inherit' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#171B26" strokeWidth="1.5" /><path d="M6.5 5L11 8L6.5 11V5Z" fill="#171B26" /></svg>
                  Anhören
                </button>
                <div style={{ flex: 1 }} />
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 4 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#8D93A6" strokeWidth="1.5"><path d="M3 14L8 4L13 14" /><path d="M5 10h6" /></svg>
                </button>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 4 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#8D93A6" strokeWidth="1.5"><circle cx="14" cy="4" r="2" /><circle cx="4" cy="9" r="2" /><circle cx="14" cy="14" r="2" /><path d="M6 10l6 3M6 8l6-3" /></svg>
                </button>
              </div>

              {/* Teaser — font-bold text-18 */}
              <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: '0 0 16px', fontWeight: 700 }}>
                Die Schlagersängerin wollte gegen das Urteil wegen Zeigens des Hitlergrußes ankämpfen. Nun teilt Melanie Müller eine andere Entscheidung mit.
              </p>

              {/* Hero image — rounded-8 */}
              <div style={{ marginBottom: 4, borderRadius: 8, overflow: 'hidden' }}>
                <img
                  src="/assets/t-online/hero-melanie.jpg"
                  alt="Melanie Müller vor Gericht"
                  style={{ width: '100%', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
              </div>
              <div style={{ fontSize: 12, color: '#8D93A6', marginBottom: 24, lineHeight: 1.4 }}>
                <span>Melanie Müller: Sie musste vor Gericht.</span>
                <span style={{ color: '#A3AABF' }}> (Quelle: David Hammersen/dpa/dpa-bilder)</span>
              </div>

              {/* Article body — text-18, leading-17 (~1.5 line-height) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Im Januar hatte Melanie Müller auch in zweiter Instanz eine juristische Niederlage erlitten. Die frühere RTL-Dschungelkönigin wurde wegen des Verwendens von Kennzeichen verfassungswidriger und terroristischer Organisationen verurteilt. Das Landgericht Leipzig war überzeugt: Die Angeklagte hat am Ende eines Auftritts auf einer Bühne in Leipzig im September 2022 den rechten Arm zum Hitlergruß erhoben.
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Die Schlagersängerin wies die Vorwürfe vehement zurück. &bdquo;Trotz enormer Kosten aus diesem Rechtsstreit habe ich mich entschieden, gegen dieses für mich eher politisch motivierte Urteil vorzugehen&ldquo;, schrieb Melanie Müller bei Instagram und übte Kritik an der juristischen Arbeit in dem Fall.
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Nun die überraschende Wende: Die 37-Jährige wird doch nicht in Revision gehen. In einem am Montag auf ihrer Instagram-Seite veröffentlichten Statement teilte Melanie Müller mit, sie habe sich nach &bdquo;sehr reiflicher Überlegung&ldquo; dazu entschieden, den Rechtsweg nicht weiterzuverfolgen.
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Sie weise die gegen sie erhobenen Anschuldigungen weiterhin entschieden zurück und sei davon überzeugt, &bdquo;dass in dem Verfahren viele Aspekte nicht objektiv bewertet wurden&ldquo;, betonte die zweifache Mutter. Doch: &bdquo;Manchmal bedeutet Verantwortung, nicht den Kampf zu Ende zu führen &ndash; sondern den Frieden zu wählen.&ldquo;
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  In den vergangenen Monaten sei starker Druck auf ihr privates Umfeld und vor allem auf ihre Kinder ausgeübt worden. Eine massive Belastung, die sie nicht länger tragen wolle. Zwar entspreche es nicht ihrem persönlichen Kampfgeist, aber &bdquo;als Mutter gibt es für mich eine klare Priorität: den Schutz meiner Kinder.&ldquo;
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Das sei keine Zustimmung zu den gegen sie erhobenen Vorwürfen, stellte sie gleichzeitig klar. &bdquo;Ich bleibe bei meiner Darstellung der Ereignisse und distanziere mich weiterhin klar von jeglicher extremistischen Ideologien&ldquo;, so die Ballermannsängerin. Sie wolle sich nun auf ihre achtjährige Tochter und ihren vierjährigen Sohn konzentrieren.
                </p>

                {/* Subheading */}
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#171B26', margin: '8px 0 0' }}>
                  Urteil wird rechtskräftig
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Damit wird das Urteil vom 12. Januar 2026 gegen Melanie Müller rechtskräftig. Das Landgericht Leipzig hatte eine Gesamtstrafe von 70 Tagessätzen à 50 Euro, also insgesamt 3.500 Euro verhängt. Zuerst waren es noch 160 Tagessätze à 500 Euro (80.000 Euro) gewesen. In zweiter Instanz hatte das Gericht die Strafe deutlich reduziert.
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#171B26', margin: 0 }}>
                  Die Sängerin hatte in beiden Prozessen die Anklagevorwürfe über ihren Verteidiger zurückgewiesen. Bei der Handbewegung habe es sich um eine anheizende Geste für das Publikum gehandelt, hatte ihr Rechtsanwalt Adrian Stahl erklärt. Sie habe die Armbewegung schon bei vielen Konzerten gemacht, und zwar bereits lange vor den Vorfällen.
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
                {['Hitlergruß', 'Gerichtsprozess', 'Leipzig', 'Melanie Müller', 'Instagram', 'RTL'].map((tag) => (
                  <a key={tag} href="#" style={{
                    fontSize: 13,
                    color: '#171B26',
                    background: '#F7F9FC',
                    border: '1px solid #EBEFF7',
                    borderRadius: 9999,
                    padding: '5px 14px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                  }}>
                    {tag}
                  </a>
                ))}
              </div>

              {/* Related articles */}
              <div style={{ borderTop: '1px solid #CFD5E5', paddingTop: 20, marginBottom: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#171B26', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Verwandte Artikel
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Melanie Müller: So reagiert sie auf das Hitlergruß-Urteil',
                    'Hitlergruß auf der Bühne: Gericht verurteilt Melanie Müller',
                    'Melanie Müller vor Gericht: Die wichtigsten Fakten zum Prozess',
                  ].map((title) => (
                    <a key={title} href="#" style={{
                      fontSize: 15,
                      color: '#171B26',
                      textDecoration: 'none',
                      lineHeight: 1.4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}>
                      <span style={{ color: '#E20074', fontSize: 14, flexShrink: 0 }}>&rsaquo;</span>
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </article>

          </main>

          {/* ---- Right Sidebar (Companion) — 348px / 21.75rem ---- */}
          <aside style={{
            width: 348,
            flexShrink: 0,
            position: 'sticky',
            top: 72,
            alignSelf: 'flex-start',
            paddingTop: 16,
          }}>
            {/* Schlagzeilen box */}
            <div style={{
              background: '#F7F9FC',
              borderRadius: 8,
              padding: 12,
            }}>
              <a href="#" style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#171B26',
                textDecoration: 'none',
                display: 'block',
                paddingBottom: 16,
                lineHeight: 1.2,
              }}>
                Schlagzeilen
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {SCHLAGZEILEN.map((headline, i) => (
                  <a key={i} href="#" style={{
                    fontSize: 14,
                    color: '#171B26',
                    textDecoration: 'none',
                    lineHeight: 1.35,
                    display: 'block',
                  }}>
                    {headline}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* ---- Sky Ad (right of companion) ---- */}
          <div style={{
            width: 160,
            flexShrink: 0,
            position: 'sticky',
            top: 120,
            alignSelf: 'flex-start',
          }}>
            <div style={{
              width: 160,
              height: 600,
              background: '#F7F9FC',
              border: '1px solid #EBEFF7',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              color: '#A3AABF',
              textAlign: 'center',
              padding: 12,
            }}>
              Anzeige
            </div>
          </div>
        </div>

        {/* ===== Feed zone — same container, spans article+companion, sky ad column empty ===== */}
        <div style={{ maxWidth: PAGE_MAX, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#F7F9FC', padding: 24, borderRadius: 8, marginRight: 160 + 24 /* skip sky ad column + gap */ }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {children}
            </div>
          </div>
        </div>
    </div>
  );
}
