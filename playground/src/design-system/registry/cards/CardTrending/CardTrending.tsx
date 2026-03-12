import './CardTrending.styles.css';
import { BrandRow } from '../../primitives/BrandRow';
import { CardCta } from '../../primitives/CardCta';

interface CardTrendingProps {
  title: string;
  imageSrc: string;
  brand: { iconSrc: string; name: string };
  category?: string;
  ctaLabel?: string;
}

export function CardTrending({
  title,
  imageSrc,
  brand,
  category,
  ctaLabel,
}: CardTrendingProps) {
  return (
    <div className="card card--trending">
      <div className="card__image-wrap">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={title}
        />
      </div>
      <div className="card__body">
        <BrandRow brandIcon={brand.iconSrc} brandName={brand.name} />
        <h3 className="card__title">{title}</h3>
        <div className="card__bottom-row">
          {category && <span className="card__category">{category}</span>}
          {ctaLabel && <CardCta label={ctaLabel} variant="inline" />}
        </div>
      </div>
    </div>
  );
}
