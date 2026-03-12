import './CardCta.styles.css';

interface CardCtaProps {
  label: string;
  variant?: 'bordered' | 'inline';
}

export function CardCta({ label, variant = 'bordered' }: CardCtaProps) {
  return (
    <div className={`card__cta card__cta--${variant}`}>
      <span className="card__cta-label">{label}</span>
    </div>
  );
}
