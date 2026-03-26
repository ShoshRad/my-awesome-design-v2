'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './CardSpotlight.styles.css';
import { BrandRow } from '../../primitives/BrandRow';

interface SpotlightItem {
  videoSrc: string;
  title: string;
  brand: { iconSrc: string; name: string };
  ctaLabel?: string;
  imageSrc?: string;
}

interface CardSpotlightProps {
  /** @deprecated Use items[] instead */
  title?: string;
  /** @deprecated Use items[] instead */
  brand?: { iconSrc: string; name: string };
  /** @deprecated Use items[] instead */
  videoSources?: string[];
  items?: SpotlightItem[];
  variant?: 'desktop' | 'mobile';
}

export function CardSpotlight(props: CardSpotlightProps) {
  const { variant = 'desktop' } = props;
  const items: SpotlightItem[] = props.items
    ? props.items
    : (props.videoSources || []).map((src) => ({
        videoSrc: src,
        title: props.title || '',
        brand: props.brand || { iconSrc: '', name: '' },
      }));

  const totalSteps = items.length || 4;
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToStep = useCallback(
    (step: number) => {
      const next = (step + totalSteps) % totalSteps;
      setActiveStep(next);
      if (videoRef.current && items[next]) {
        videoRef.current.src = items[next].videoSrc;
        videoRef.current.play().catch(() => {});
      }
    },
    [totalSteps, items],
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToStep(activeStep + 1);
    }, 8000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeStep, goToStep]);

  if (variant === 'mobile') {
    const currentItem = items[activeStep];
    return (
      <div className="card card--spotlight-mobile">
        <div className="card__video-wrap--mobile">
          {currentItem?.imageSrc ? (
            <div
              className="card__video-bg"
              style={{ backgroundImage: `url(${currentItem.imageSrc})` }}
              role="img"
              aria-label={currentItem?.title}
            />
          ) : (
            <video
              ref={videoRef}
              className="card__video"
              src={currentItem?.videoSrc}
              muted
              autoPlay
              playsInline
            />
          )}
          <div className="card__video-gradient" />

          <button
            className="card__nav--mobile card__nav--mobile-prev"
            onClick={() => goToStep(activeStep - 1)}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 15L7 10L12 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="card__nav--mobile card__nav--mobile-next"
            onClick={() => goToStep(activeStep + 1)}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L13 10L8 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="card__body--mobile">
          <div className="card__brand--mobile">
            <span className="card__brand-name--mobile">{currentItem?.brand.name}</span>
          </div>
          <div className="card__content-row--mobile">
            <h3 className="card__title--mobile">{currentItem?.title}</h3>
            {currentItem?.ctaLabel && (
              <button className="card__cta--mobile">{currentItem.ctaLabel}</button>
            )}
          </div>
        </div>

        <div className="card__progress-bar--mobile">
          <div
            className="card__progress-fill--mobile"
            style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="card card--spotlight">
      <div className="card__video-wrap">
        <div className="card__stepper">
          {Array.from({ length: totalSteps }).map((_, i) => {
            let stepClass = 'card__step';
            if (i < activeStep) stepClass += ' card__step--done';
            if (i === activeStep) stepClass += ' card__step--active';
            return (
              <div key={i} className={stepClass}>
                <div className="card__step-fill" />
              </div>
            );
          })}
        </div>

        <video
          ref={videoRef}
          className="card__video"
          src={items[0]?.videoSrc}
          muted
          autoPlay
          playsInline
        />

        <button
          className="card__nav card__nav--prev"
          onClick={() => goToStep(activeStep - 1)}
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="card__nav card__nav--next"
          onClick={() => goToStep(activeStep + 1)}
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="card__body">
        <BrandRow brandIcon={items[activeStep]?.brand.iconSrc} brandName={items[activeStep]?.brand.name} />
        <h3 className="card__title">{items[activeStep]?.title}</h3>
      </div>
    </div>
  );
}
