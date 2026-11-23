import SectionHeading from "@/components/global/SectionHeading";
import { services } from "@/data/site";

export default function AboutServices() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Our services"
          title={
            <>
              One idea, <span className="text-ice">many business settings.</span>
            </>
          }
          description="At Niagara Custom Water, we provide customized bottled water branding solutions for different types of businesses and organizations."
        />

        <div className="card-grid card-grid--three">
          {services.map((service) => (
            <article className="glass-card service-card" key={service.number}>
              <span className="service-card__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
