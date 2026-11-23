import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";

const sectors = [
  { title: "Restaurants", image: "/pictures/reference/project-hotel.png" },
  { title: "Hotels & Cafés", image: "/pictures/reference/project-corporate.png" },
  { title: "Corporate Offices", image: "/pictures/reference/project-event.png" },
  { title: "Weddings & Events", image: "/pictures/reference/project-exhibition.png" },
];

export default function SectorsBand() {
  return (
    <section className="section section--sectors">
      <div className="shell">
        <SectionHeading
          eyebrow="Who it is for"
          title={
            <>
              Built for businesses that care about <span className="text-gold">details.</span>
            </>
          }
          description="Niagara Custom Water works with teams that want every customer touchpoint to feel intentional."
          align="center"
        />
        <div className="sector-grid">
          {sectors.map((sector) => (
            <article className="sector-card" key={sector.title}>
              <div className="sector-card__image">
                <Image src={sector.image} alt="" fill sizes="(max-width: 700px) 90vw, 25vw" />
              </div>
              <div className="sector-card__body">
                <h3>{sector.title}</h3>
                <p>Custom bottle branding that fits your space, service, and story.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
