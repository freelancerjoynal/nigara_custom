import { siteConfig } from "@/data/site";

export default function ContactDetails() {
  return (
    <section className="section section--tinted">
      <div className="shell">
        <div className="contact-details__grid">
          <article className="glass-card contact-card">
            <span className="contact-card__icon" aria-hidden="true">
              ☎
            </span>
            <h2>Business Contact</h2>
            <p>Call us to discuss your branding requirements.</p>
            <a className="contact-card__link" href={`tel:${siteConfig.phoneInternational}`}>
              {siteConfig.phone}
            </a>
          </article>

          <article className="glass-card contact-card">
            <span className="contact-card__icon" aria-hidden="true">
              ↗
            </span>
            <h2>WhatsApp &amp; Direct Orders</h2>
            <p>Contact us for customized orders and business inquiries.</p>
            <a
              className="contact-card__link"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp
            </a>
          </article>

          <article className="glass-card contact-card">
            <span className="contact-card__icon" aria-hidden="true">
              ◈
            </span>
            <h2>Business Address</h2>
            <p>Find us at:</p>
            <p className="contact-card__address">{siteConfig.address}</p>
          </article>
        </div>
        <p className="contact-details__note">
          Facebook <span aria-hidden="true">|</span> WhatsApp <span aria-hidden="true">|</span> Website
          Contact Form
        </p>
      </div>
    </section>
  );
}
