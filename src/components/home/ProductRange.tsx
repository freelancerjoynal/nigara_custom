import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";

const products = [
  {
    title: "Clear Bottle Look",
    note: "Clean, minimal branding that fits any table setting.",
    image: "/pictures/1.jpeg",
    accent: "blue",
  },
  {
    title: "Label-Focused Design",
    note: "Showcase your logo, colors and business message with clarity.",
    image: "/pictures/3.jpeg",
    accent: "gold",
  },
  {
    title: "Event-Ready Bottles",
    note: "Great for weddings, launches, corporate events and celebrations.",
    image: "/pictures/7.jpeg",
    accent: "mint",
  },
];

export default function ProductRange() {
  return (
    <section className="section section--products">
      <div className="shell">
        <div className="section__head-row">
          <SectionHeading
            eyebrow="Product range"
            title={
              <>
                Bottles that match <span className="text-gold">your brand mood.</span>
              </>
            }
            description="From everyday dining to high-profile events, we design bottle labels that feel intentional and premium."
          />
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <article className={`product-card product-card--${item.accent}`} key={item.title}>
              <div className="product-card__image">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 90vw, 33vw" />
              </div>
              <div className="product-card__body">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <span className="product-card__chip">Custom label ready</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
