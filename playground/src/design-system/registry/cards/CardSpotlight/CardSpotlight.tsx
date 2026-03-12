'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './CardSpotlight.styles.css';
import { BrandRow } from '../../primitives/BrandRow';

interface CardSpotlightProps {
  title: string;
  brand: { iconSrc: string; name: string };
  videoSources: string[];
}

export function CardSpotlight({
  title,
  brand,
  videoSources,
}: CardSpotlightProps) {
  const totalSteps = videoSources.length || 4;
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToStep = useCallback(
    (step: number) => {
      const next = (step + totalSteps) % totalSteps;
      setActiveStep(next);
      if (videoRef.current && videoSources[next]) {
        videoRef.current.src = videoSources[next];
        videoRef.current.play().catch(() => {});
      }
    },
    [totalSteps, videoSources],
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToStep(activeStep + 1);
    }, 8000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeStep, goToStep]);

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
          src={videoSources[0]}
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
        <BrandRow brandIcon={brand.iconSrc} brandName={brand.name} />
        <h3 className="card__title">{title}</h3>
      </div>
    </div>
  );
}
