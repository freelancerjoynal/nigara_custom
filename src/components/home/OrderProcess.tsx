import SectionHeading from "@/components/global/SectionHeading";
import { orderSteps } from "@/data/site";

export default function OrderProcess() {
  return (
    <section className="section section--tinted">
      <div className="shell">
        <SectionHeading
          eyebrow="How to order"
          title={
            <>
              Getting your own customized bottles is <span className="text-gold">simple.</span>
            </>
          }
          description="Six clear steps from your first message to delivery at your door."
          align="center"
        />

        <ol className="step-grid">
          {orderSteps.map((step) => (
            <li className="step-card" key={step.number}>
              <span className="step-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
