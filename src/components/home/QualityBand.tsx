import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";

const qualityPoints = [
  "A clean, professional look for everyday service",
  "Label designs shaped around your brand identity",
  "A memorable detail customers notice and remember",
  "A simple way to make your business feel more polished",
];

export default function QualityBand() {
  return (
    <section className="section section--quality">
      <div className="shell quality-grid">
        <div className="quality-grid__copy">
          <SectionHeading
            eyebrow="Quality and presentation"
            title={
              <>
                Every bottle should feel <span className="text-gold">ready for your brand.</span>
              </>
            }
            description="From the first glance to the final table setup, your water bottle should support the impression your business wants to make."
          />
          <ul className="quality-list">
            {qualityPoints.map((point) => (
              <li key={point}>
                <span aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="quality-grid__media">
          <div className="quality-media">
            <Image src="/pictures/8.jpeg" alt="Custom branded bottle close-up" fill sizes="(max-width: 900px) 90vw, 540px" />
          </div>
          <div className="quality-media quality-media--small">
            <Image src="/pictures/reference/purification.jpg" alt="Purification and production style visual" fill sizes="280px" />
          </div>
        </div>
      </div>
    </section>
  );
}
