import CTALink from "@/components/global/CTALink";
import SectionHeading from "@/components/global/SectionHeading";
import { reasons } from "@/data/site";

export default function AboutWhy() {
  return (
    <section className="section section--tinted">
      <div className="shell">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              Built around <span className="text-ice">your business.</span>
            </>
          }
        />

        <div className="card-grid card-grid--three">
          {reasons.map((reason) => (
            <article className="glass-card reason-card" key={reason.title}>
              <span className="reason-card__check" aria-hidden="true">
                ✓
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>

        <div className="about-why__cta">
          <CTALink href="/contact">Start your custom branding journey today!</CTALink>
        </div>
      </div>
    </section>
  );
}
