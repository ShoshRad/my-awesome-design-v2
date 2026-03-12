'use client';

import { useRef, useState } from 'react';
import './CardVideoReel.styles.css';

interface CardVideoReelProps {
  title: string;
  brand: { iconSrc: string; name: string };
  imageSrc: string;
  videoSrc: string;
  duration: string;
  ctaLabel?: string;
}

export function CardVideoReel({
  title,
  brand,
  imageSrc,
  videoSrc,
  duration,
  ctaLabel,
}: CardVideoReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="card card--video-reel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card__bg-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <video
        ref={videoRef}
        className="card__video-bg"
        src={videoSrc}
        muted
        playsInline
        loop
      />

      <div className="card__overlay-top">
        <div className="card__brand-wrap">
          <img
            className="card__brand-icon--bordered"
            src={brand.iconSrc}
            alt={brand.name}
          />
          <span className="card__brand-name">{brand.name}</span>
        </div>
      </div>

      <div className="card__overlay-bottom">
        <h3 className="card__title">{title}</h3>
        <div className="card__duration-row">
          <svg className="card__play-icon" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.3)" />
            <path d="M8 6L14 10L8 14V6Z" fill="white" />
          </svg>
          <span className="card__duration">{duration}</span>
        </div>
        {ctaLabel && (
          <button className="card__cta-inline">{ctaLabel}</button>
        )}
      </div>
    </div>
  );
}
