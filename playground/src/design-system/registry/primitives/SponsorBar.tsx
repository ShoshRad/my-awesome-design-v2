import './SponsorBar.styles.css';

interface SponsorBarProps {
  iconSrc: string;
  sponsorName: string;
}

export function SponsorBar({ iconSrc, sponsorName }: SponsorBarProps) {
  return (
    <div className="card__sponsor-bar">
      <img
        className="card__sponsor-icon"
        src={iconSrc}
        alt={sponsorName}
        width={16}
        height={16}
      />
      <span className="card__sponsor-name">{sponsorName}</span>
    </div>
  );
}
