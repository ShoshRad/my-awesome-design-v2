import './Card3x1.styles.css';
import { BrandRow } from '../../primitives/BrandRow';
import { CardCta } from '../../primitives/CardCta';

interface Card3x1Props {
  title: string;
  description?: string;
  imageSrc: string;
  ctaLabel?: string;
  brand?: { iconSrc: string; name: string };
}

export function Card3x1({
  title,
  description,
  imageSrc,
  ctaLabel,
  brand,
}: Card3x1Props) {
  return (
    <div className="card card--small">
      <div className="card__image-wrap">
        <div
          className="card__image card__image--feature"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={title}
        />
      </div>
      {brand && (
        <div style={{ padding: '8px 10px 0' }}>
          <BrandRow brandIcon={brand.iconSrc} brandName={brand.name} />
        </div>
      )}
      <div className="card__body">
        <h3 className="card__title card__title--s">{title}</h3>
        {description && <p className="card__desc">{description}</p>}
      </div>
      {ctaLabel && <CardCta label={ctaLabel} />}
    </div>
  );
}
