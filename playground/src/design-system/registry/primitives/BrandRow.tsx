import './BrandRow.styles.css';

interface BrandRowProps {
  brandIcon: string;
  brandName: string;
  variant?: 'light' | 'dark';
}

export function BrandRow({
  brandIcon,
  brandName,
  variant = 'dark',
}: BrandRowProps) {
  return (
    <div className={`card__brand-row card__brand-row--${variant}`}>
      <img
        className="card__brand-icon"
        src={brandIcon}
        alt={brandName}
        width={20}
        height={20}
      />
      <span className="card__brand">{brandName}</span>
    </div>
  );
}
