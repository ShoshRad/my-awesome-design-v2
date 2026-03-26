import './CardStreamMobile.styles.css';

interface CardStreamMobileProps {
  title: string;
  imageSrc: string;
  brand: { iconSrc: string; name: string };
  ctaLabel?: string;
}

export function CardStreamMobile({
  title,
  imageSrc,
  brand,
  ctaLabel,
}: CardStreamMobileProps) {
  return (
    <div className="card-stream-mobile">
      <div className="card-stream-mobile__content">
        <img
          className="card-stream-mobile__image"
          src={imageSrc}
          alt={title}
        />
        <div className="card-stream-mobile__text">
          <h3 className="card-stream-mobile__title">{title}</h3>
        </div>
      </div>
      <div className="card-stream-mobile__bottom">
        <div className="card-stream-mobile__brand">
          <img
            className="card-stream-mobile__brand-icon"
            src={brand.iconSrc}
            alt={brand.name}
          />
          <span className="card-stream-mobile__brand-name">{brand.name}</span>
        </div>
        {ctaLabel && (
          <button className="card-stream-mobile__cta">{ctaLabel}</button>
        )}
      </div>
    </div>
  );
}
