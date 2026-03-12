import './CardPicksCarousel.styles.css';

interface PickItem {
  imageSrc: string;
  title: string;
}

interface CardPicksCarouselProps {
  brand: { iconSrc: string; name: string };
  items: PickItem[];
}

export function CardPicksCarousel({ brand, items }: CardPicksCarouselProps) {
  return (
    <div className="picks-carousel">
      <div className="picks-carousel__header">
        <img
          className="picks-carousel__logo"
          src={brand.iconSrc}
          alt={brand.name}
        />
        <span className="picks-carousel__brand-name">{brand.name}</span>
      </div>
      <div className="picks-carousel__track">
        {items.map((item, i) => (
          <div key={i} className="picks-carousel__item">
            <img
              className="picks-carousel__item-image"
              src={item.imageSrc}
              alt={item.title}
            />
            <h3 className="picks-carousel__item-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
