import type { PublisherProfile } from '../types';

interface ArticlePageProps {
  publisher: PublisherProfile;
  children: React.ReactNode;
}

export function ArticlePage({ publisher, children }: ArticlePageProps) {
  const { colors, typography, layout } = publisher;

  return (
    <div style={{ minHeight: '100vh', background: colors.background, fontFamily: typography.bodyFont }}>
      {/* Publisher Nav Bar */}
      <header
        style={{
          background: colors.navBg,
          color: colors.navText,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 24,
          paddingRight: 24,
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: layout.contentWidth,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {publisher.logo ? (
            <img
              src={publisher.logo}
              alt={publisher.name}
              style={{ height: 28, objectFit: 'contain' }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                fontFamily: typography.navFont,
              }}
            >
              {publisher.name}
            </span>
          )}
          <nav
            style={{
              display: 'flex',
              gap: 20,
              fontSize: 13,
              fontFamily: typography.navFont,
              opacity: 0.8,
            }}
          >
            {['News', 'Sports', 'Politics', 'Opinion', 'Business'].map((item) => (
              <span key={item} style={{ cursor: 'default' }}>{item}</span>
            ))}
          </nav>
        </div>
      </header>

      {/* Article Content Area */}
      <main
        style={{
          maxWidth: layout.contentWidth,
          margin: '0 auto',
          padding: '32px 24px',
          display: 'flex',
          gap: 32,
        }}
      >
        {/* Main Column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Article Header */}
          <article>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: colors.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Technology
            </span>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 700,
                fontFamily: typography.headlineFont,
                color: colors.text,
                lineHeight: 1.25,
                margin: '8px 0 12px',
              }}
            >
              The Future of AI-Powered Content Discovery Is Already Here
            </h1>
            <div style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 24 }}>
              By Sarah Mitchell | March 15, 2026 | 8 min read
            </div>

            {/* Article Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                background: `linear-gradient(135deg, ${colors.primary}22 0%, ${colors.secondary}22 100%)`,
                borderRadius: 8,
                marginBottom: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.textSecondary,
                fontSize: 13,
                fontFamily: 'system-ui',
              }}
            >
              Article hero image
            </div>

            {/* Article Body */}
            <div
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: colors.text,
                fontFamily: typography.bodyFont,
              }}
            >
              <p style={{ marginBottom: 20 }}>
                As publishers around the world look for ways to engage readers and drive revenue, a new
                generation of content recommendation technology is transforming what&rsquo;s possible.
                From personalized feeds to contextual widgets, the experience readers get below the
                article is becoming just as important as the article itself.
              </p>
              <p style={{ marginBottom: 20 }}>
                Recent studies show that readers who engage with recommended content spend 3.2x more
                time on publisher sites, with premium feed experiences driving 40% higher RPM compared
                to standard placements. The difference lies in the quality of the card designs, the
                relevance of the recommendations, and the seamless integration with the publisher&rsquo;s
                brand.
              </p>
              <p style={{ marginBottom: 20 }}>
                Industry leaders are now investing in widget customization that goes beyond simple
                thumbnail grids. Video spotlights, trending sections, carousel picks, and editorially
                curated &ldquo;deeper dive&rdquo; experiences are becoming the new standard for
                publishers who want to stand out.
              </p>
            </div>
          </article>

          {/* Separator */}
          <div
            style={{
              height: 1,
              background: colors.border,
              margin: '32px 0',
            }}
          />

          {/* Widget Placement Zone */}
          {children}
        </div>

        {/* Right Rail (if publisher has one) */}
        {layout.hasRightRail && (
          <aside
            style={{
              width: 300,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: 'sticky',
                top: 80,
                padding: 20,
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                textAlign: 'center',
                color: colors.textSecondary,
                fontSize: 12,
                fontFamily: 'system-ui',
              }}
            >
              <div style={{ marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Advertisement
              </div>
              <div
                style={{
                  width: '100%',
                  height: 250,
                  background: `linear-gradient(135deg, ${colors.border} 0%, ${colors.background} 100%)`,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                300x250
              </div>
            </div>
          </aside>
        )}
      </main>
    </div>
  );
}
