import Image from "next/image";
import CTALink from "@/components/global/CTALink";
import { siteConfig } from "@/data/site";

export default function HomeCTA() {
  return (
    <section className="section home-cta">
      <div className="shell">
        <div className="home-cta__panel">
          <div className="home-cta__glow" aria-hidden="true" />
          <div className="cta-photo cta-photo--one" aria-hidden="true">
            <Image src="/pictures/4.jpeg" alt="" fill sizes="(max-width: 800px) 0px, 190px" />
          </div>
          <div className="cta-photo cta-photo--two" aria-hidden="true">
            <Image src="/pictures/8.jpeg" alt="" fill sizes="(max-width: 800px) 0px, 150px" />
          </div>

          <div className="home-cta__content">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Ready when you are
            </p>
            <h2 className="section-title">
              Start Your Custom Branding Journey <span className="text-gold">Today!</span>
            </h2>
            <p>
              Tell us about your business, share your brand details and let&apos;s design a bottle
              your customers will remember.
            </p>
            <div className="home-cta__actions">
              <CTALink href="/contact">Contact us</CTALink>
              <a className="text-link" href={`tel:${siteConfig.phoneInternational}`}>
                Or call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
