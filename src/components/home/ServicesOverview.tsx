import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/global/SectionHeading";
import { services } from "@/data/site";

export default function ServicesOverview() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="section__head-row">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Make every bottle a part of <span className="text-ice">your brand.</span>
              </>
            }
            description="From restaurants and hotels to corporate offices and special occasions, we create bottled water that speaks for your business."
          />
          <Link href="/about" className="text-link">
            All services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="services-layout">
          <div className="services-visual">
            <Image
              src="/pictures/3.jpeg"
              alt="Custom water bottle label design showcase"
              fill
              sizes="(max-width: 1020px) 90vw, 320px"
            />
            <div className="services-visual__shade" aria-hidden="true" />
            <div className="services-visual__copy">
              <span className="services-visual__badge">Custom label design</span>
              <p>Your logo. Your colors. Your story — on every single bottle.</p>
            </div>
          </div>

          <div className="card-grid card-grid--two">
            {services.map((service) => (
              <article className="glass-card service-card" key={service.number}>
                <span className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
