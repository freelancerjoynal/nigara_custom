import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="shell philosophy__grid">
        <div className="philosophy__image">
          <Image
            src="/pictures/2.jpeg"
            alt="Custom branded water bottle showing a personalized label"
            fill
            sizes="(max-width: 900px) 90vw, 340px"
          />
          <span>Every bottle has the potential to represent a brand.</span>
        </div>
        <div className="philosophy__panel">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Our philosophy
          </p>
          <blockquote>
            <p>
              At Niagara Custom Water, we believe every bottle has the potential to represent a
              brand.
            </p>
            <footer>Your Bottle, Your Brand.</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
