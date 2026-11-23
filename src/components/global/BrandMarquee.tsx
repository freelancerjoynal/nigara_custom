const words = [
  "YOUR LOGO",
  "YOUR COLORS",
  "YOUR BOTTLE",
  "YOUR BRAND",
  "RESTAURANTS",
  "HOTELS & CAFÉS",
  "CORPORATE EVENTS",
  "MADE IN BANGLADESH",
];

export default function BrandMarquee() {
  return (
    <div className="marquee" aria-label="Custom branding for businesses in Bangladesh">
      <div className="marquee__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span className="marquee__group" key={copy}>
            {words.map((word) => (
              <span className="marquee__item" key={`${copy}-${word}`}>
                {word}
                <span className="marquee__star">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
