import Image from "next/image";
import CTALink from "@/components/global/CTALink";

const heroPoints = [
  { icon: "◈", label: "Your logo, your colors" },
  { icon: "✦", label: "Made for every business" },
  { icon: "❄", label: "Crisp, cold presentation" },
];

const heroStats = [
  { value: "6", label: "Business sectors served" },
  { value: "100%", label: "Custom label focus" },
  { value: "1", label: "Bottle, endless identity" },
];

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <Image src="/pictures/herobg.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero__aura hero__aura--gold" aria-hidden="true" />
      <div className="hero__aura hero__aura--cyan" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">
            <span aria-hidden="true" /> Premium custom bottled water · Bangladesh
          </p>
          <h1 className="hero__title">
            Your Brand.
            <span className="hero__title-gold">Your Bottle.</span>
            <span className="hero__title-white">Your Identity.</span>
          </h1>
          <p className="hero__lead">
            Turn an everyday bottle of water into a memorable brand experience. Niagara Custom Water
            creates personalized drinking water bottles with your logo, name, colors and design.
          </p>
          <div className="hero__actions">
            <CTALink href="/contact">Start your order</CTALink>
            <CTALink href="/about" variant="ghost">
              Discover Niagara
            </CTALink>
          </div>

          <ul className="hero__points">
            {heroPoints.map((point) => (
              <li key={point.label}>
                <span aria-hidden="true">{point.icon}</span>
                {point.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" aria-label="Custom branded water bottle">
          <div className="hero__ring hero__ring--one" aria-hidden="true" />
          <div className="hero__ring hero__ring--two" aria-hidden="true" />
          <div className="hero__glow" aria-hidden="true" />
          <Image
            src="/pictures/aqua-bottol.png"
            alt="Custom branded water bottle with a clean label area"
            width={707}
            height={696}
            priority
            className="hero__product"
            sizes="(max-width: 900px) 78vw, 540px"
          />
          <div className="hero__float hero__float--label">
            <span className="hero__float-dot" aria-hidden="true" />
            <span>
              <strong>YOUR LOGO</strong>
              <small>Full-color label</small>
            </span>
          </div>
          <div className="hero__float hero__float--cold">
            <span aria-hidden="true">❄</span>
            Mountain cold
          </div>
          <div className="hero__price-tag">
            <small>Starting from</small>
            <strong>Custom quote</strong>
          </div>
        </div>
      </div>

      <div className="shell hero__footer">
        <div className="hero__stats">
          {heroStats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <a className="hero__scroll" href="#intro">
          <span>Scroll to explore</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
