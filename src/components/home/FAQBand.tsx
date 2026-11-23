import SectionHeading from "@/components/global/SectionHeading";

const faqs = [
  {
    q: "Can I use my own logo and colors?",
    a: "Yes. We build the label around your logo, brand colors, business name, and the details you want on the bottle.",
  },
  {
    q: "Who is this service for?",
    a: "Restaurants, hotels, cafés, offices, event organizers, corporate teams, and anyone who wants branded bottles.",
  },
  {
    q: "How do I start an order?",
    a: "Contact us, share your brand details, choose your quantity, approve the design, then confirm the final order details.",
  },
  {
    q: "Can these be used for events?",
    a: "Absolutely. They work well for weddings, parties, exhibitions, seminars, corporate gatherings, and special occasions.",
  },
];

export default function FAQBand() {
  return (
    <section className="section section--faq">
      <div className="shell faq-grid">
        <div className="faq-grid__copy">
          <SectionHeading
            eyebrow="Quick answers"
            title={
              <>
                Questions, <span className="text-gold">answered simply.</span>
              </>
            }
            description="If you are planning your first custom bottle order, here are the basics most clients ask before getting started."
          />
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
