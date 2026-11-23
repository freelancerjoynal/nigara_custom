import Image from "next/image";
import PageHero from "@/components/global/PageHero";

export default function AboutHero() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Niagara Custom Water"
        description="Niagara Custom Water is a customized bottled drinking water branding and supply business based in Bangladesh. Our main goal is to help businesses create their own identity through personalized drinking water bottles."
      />
      <section className="about-lead">
        <div className="shell about-lead__grid">
          <div className="about-lead__image">
            <Image
              src="/pictures/5.jpeg"
              alt="Chilled customized water bottle showcase"
              fill
              sizes="(max-width: 900px) 90vw, 440px"
            />
          </div>
          <div className="about-lead__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Our point of view
            </p>
            <h2 className="section-title">
              Branding is not limited to signboards, menus, packaging or advertisements.
            </h2>
            <p>
              Even a simple bottle of drinking water can become a powerful representation of a
              business. That&apos;s why we provide customized water bottle solutions where businesses
              can showcase their own logo, brand name, colors, and personalized label designs.
            </p>
            <p>
              We aim to make customized bottled water accessible to restaurants, hotels, cafés,
              offices, corporate organizations, and event organizers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
