const values = [
  {
    title: "Your Own Brand Identity",
    description: "Your logo, business name, colors and design on every bottle.",
  },
  {
    title: "Built for Every Business",
    description: "Restaurants, hotels, cafés, offices, corporate events and occasions.",
  },
  {
    title: "Customer-Focused Service",
    description: "Solutions shaped around each client's own requirements.",
  },
];

export default function ValueBand() {
  return (
    <section className="value-band">
      <div className="shell value-band__grid">
        {values.map((value, index) => (
          <div className="value-band__item" key={value.title}>
            <span className="value-band__number">0{index + 1}</span>
            <div>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
