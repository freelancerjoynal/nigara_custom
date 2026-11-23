import SectionHeading from "@/components/global/SectionHeading";

const missionPoints = [
  "Make personalized bottled water branding accessible to businesses.",
  "Help restaurants and hotels create a professional customer experience.",
  "Provide customized label designs that reflect each client's brand identity.",
  "Build long-term relationships through reliable service and customer satisfaction.",
  "Make every bottle a meaningful part of our clients’ branding journey.",
];

export default function MissionVision() {
  return (
    <section className="section section--tinted">
      <div className="shell">
        <SectionHeading
          eyebrow="What drives us"
          title={
            <>
              Our <span className="text-ice">Mission &amp; Vision</span>
            </>
          }
        />

        <div className="mission-grid">
          <article className="glass-card mission-card">
            <span className="mission-card__label">01 / Mission</span>
            <h3>Strengthening brand identity, one bottle at a time.</h3>
            <p>
              Our mission is to help businesses strengthen their brand identity through customized
              bottled drinking water solutions. We aim to:
            </p>
            <ul className="check-list">
              {missionPoints.map((point) => (
                <li key={point}>
                  <span aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card mission-card">
            <span className="mission-card__label">02 / Vision</span>
            <h3>A trusted name in customized water branding.</h3>
            <p>
              Our vision is to become a trusted name in Bangladesh&apos;s customized bottled water
              branding industry.
            </p>
            <p>
              We want to build a business where every restaurant, café, hotel, and organization can
              have drinking water bottles representing its own brand.
            </p>
            <p>
              We aspire to expand our customized water bottle solutions across Bangladesh and create
              new opportunities for businesses to promote their identity in a unique and
              professional way.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
