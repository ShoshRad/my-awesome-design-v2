import './Card1x1.styles.css';
import { CardCta } from '../../primitives/CardCta';

interface Card1x1Props {
  title: string;
  description?: string;
  imageSrc: string;
  ctaLabel?: string;
  sponsor?: { iconSrc: string; name: string };
  variant?: 'default' | 'social' | 'social-tall';
}

const IMAGE_CLASS: Record<string, string> = {
  default: 'card__image--feature',
  social: 'card__image--social',
  'social-tall': 'card__image--social-tall',
};

export function Card1x1({
  title,
  description,
  imageSrc,
  ctaLabel,
  sponsor,
  variant = 'default',
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
          className={`card__image ${IMAGE_CLASS[variant]}`}
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
