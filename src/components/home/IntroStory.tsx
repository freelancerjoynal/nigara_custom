import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";

export default function IntroStory() {
  return (
    <section className="section section--intro" id="intro">
      <div className="shell intro-grid">
        <div className="intro-grid__copy">
          <SectionHeading
            eyebrow="Why businesses choose Niagara"
            title={
              <>
                A bottle is no longer just water.
                <span className="text-gold"> It is a brand touchpoint.</span>
              </>
            }
            description="Niagara Custom Water helps restaurants, hotels, cafés, offices, and event teams put their own identity on every bottle. From clean white-label looks to bold full-color designs, your bottle can feel as professional as the rest of your brand."
          />
          <div className="intro-points">
            <div className="intro-point">
              <span className="intro-point__num">01</span>
              <div>
                <h3>Designed around you</h3>
                <p>Share your logo, colors, and idea. We shape the label to fit your business.</p>
              </div>
            </div>
            <div className="intro-point">
              <span className="intro-point__num">02</span>
              <div>
                <h3>Clear from start to finish</h3>
                <p>Simple steps, practical guidance, and a smooth path from concept to delivery.</p>
              </div>
            </div>
            <div className="intro-point">
              <span className="intro-point__num">03</span>
              <div>
                <h3>Great for every occasion</h3>
                <p>Perfect for tables, rooms, meetings, celebrations, and brand-forward events.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="intro-grid__media">
          <div className="intro-card intro-card--main">
            <Image src="/pictures/3.jpeg" alt="Custom water bottle with branded label" fill sizes="(max-width: 900px) 90vw, 520px" />
          </div>
          <div className="intro-card intro-card--mini intro-card--mini-a">
            <Image src="/pictures/reference/aqua-label.png" alt="Sample custom label artwork" fill sizes="220px" />
          </div>
          <div className="intro-card intro-card--mini intro-card--mini-b">
            <Image src="/pictures/reference/bottle-mockup.png" alt="Bottle mockup preview" fill sizes="220px" />
          </div>
        </div>
      </div>
    </section>
  );
}
