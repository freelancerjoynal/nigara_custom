import Image from "next/image";
import SectionHeading from "@/components/global/SectionHeading";
import { orderSteps } from "@/data/site";

export default function ProcessBand() {
  return (
    <section className="section section--process">
      <div className="shell process-grid">
        <div className="process-grid__media">
          <div className="process-media">
            <Image
              src="/pictures/reference/factory.png"
              alt="Water production and bottling reference image"
              fill
              sizes="(max-width: 900px) 90vw, 520px"
            />
          </div>
          <div className="process-badge">
            <strong>6 steps</strong>
            <span>From idea to delivery</span>
          </div>
        </div>
        <div className="process-grid__copy">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A simple process, <span className="text-gold">a polished result.</span>
              </>
            }
            description="Getting your own customized bottles is easy. Share your brand details, approve the design, and we take care of the rest."
          />
          <div className="process-steps">
            {orderSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <span className="process-step__num">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
