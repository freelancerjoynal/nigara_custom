import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";
import { reasons } from "@/data/site";

export default function WhyNiagara() {
  return (
    <section className="section section--why">
      <div className="why-bg" aria-hidden="true">
        <Image src="/pictures/6.jpeg" alt="" fill sizes="100vw" />
      </div>
      <div className="shell">
        <SectionHeading
          eyebrow="Why Niagara"
          title={
            <>
              Small bottle. <span className="text-gold">Serious branding.</span>
            </>
          }
          description="A simple, practical way to make your business look more considered at every customer touchpoint."
        />

        <div className="why-cards">
          {reasons.map((reason) => (
            <article className="why-card-dark" key={reason.title}>
              <span className="why-card-dark__icon" aria-hidden="true">✦</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
