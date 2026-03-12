import './Card1x1.styles.css';
import { CardCta } from '../../primitives/CardCta';

interface Card1x1Props {
  title: string;
  description?: string;
  imageSrc: string;
  ctaLabel?: string;
  sponsor?: { iconSrc: string; name: string };
}

export function Card1x1({
  title,
  description,
  imageSrc,
  ctaLabel,
  sponsor,
}: Card1x1Props) {
  return (
    <div className="card card--feature">
      {sponsor && (
        <div className="card__sponsor-bar">
          <img
            className="card__sponsor-icon"
            src={sponsor.iconSrc}
            alt={sponsor.name}
          />
          <span className="card__sponsor-name">{sponsor.name}</span>
        </div>
      )}
      <div className="card__image-wrap">
        <div
          className="card__image card__image--feature"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={title}
        />
      </div>
      <div className="card__body">
        <h3 className="card__title card__title--l">{title}</h3>
        {description && <p className="card__desc">{description}</p>}
      </div>
      {ctaLabel && <CardCta label={ctaLabel} />}
    </div>
  );
}
