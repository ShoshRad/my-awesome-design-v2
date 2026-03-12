import './PublisherLogos.styles.css';

export interface PublisherLogo {
  id: string;
  name: string;
  src: string;
}

export const PUBLISHER_LOGOS: PublisherLogo[] = [
  { id: 'newslive', name: 'NewsLive', src: '/assets/logos/newslive-brand.png' },
  { id: 'business-insider', name: 'Business Insider', src: '/assets/logos/bi-brand.png' },
];

interface PublisherLogosProps {
  /** Show a specific logo by id */
  logoId?: string;
}

export function PublisherLogos({ logoId }: PublisherLogosProps) {
  const logos = logoId
    ? PUBLISHER_LOGOS.filter((l) => l.id === logoId)
    : PUBLISHER_LOGOS;

  return (
    <div className="publisher-logos">
      {logos.map((logo) => (
        <div key={logo.id} className="publisher-logos__item">
          <img
            className="publisher-logos__icon"
            src={logo.src}
            alt={logo.name}
            width={20}
            height={20}
          />
          <span className="publisher-logos__name">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}
