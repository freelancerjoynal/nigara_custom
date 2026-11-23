import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";
import { services } from "@/data/site";

const serviceStyles = [
  { className: "service-card--blue", icon: "◆", image: "/pictures/4.jpeg" },
  { className: "service-card--gold", icon: "✦", image: "/pictures/5.jpeg" },
  { className: "service-card--mint", icon: "●", image: "/pictures/6.jpeg" },
  { className: "service-card--rose", icon: "★", image: "/pictures/7.jpeg" },
  { className: "service-card--violet", icon: "◇", image: "/pictures/8.jpeg" },
  { className: "service-card--sky", icon: "✧", image: "/pictures/2.jpeg" },
];

export default function ColorfulServices() {
  return (
    <section className="section section--services" id="services">
      <div className="shell">
        <div className="section__head-row">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Branding water for <span className="text-gold">every table.</span>
              </>
            }
            description="One simple idea, adapted to the way different businesses serve their customers."
          />
          <p className="section-side-note">
            Custom bottle labels for modern businesses across Bangladesh.
          </p>
        </div>

        <div className="service-showcase">
          {services.map((service, index) => {
            const style = serviceStyles[index % serviceStyles.length];
            return (
              <article className={`service-showcase__card ${style.className}`} key={service.number}>
                <div className="service-showcase__image">
                  <Image src={style.image} alt="" fill sizes="(max-width: 800px) 80vw, 310px" />
                </div>
                <div className="service-showcase__body">
                  <span className="service-showcase__icon" aria-hidden="true">
                    {style.icon}
                  </span>
                  <span className="service-showcase__number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
