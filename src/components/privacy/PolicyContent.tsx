import { siteConfig } from "@/data/site";

const sections: { title: string; paragraphs: string[]; points?: string[] }[] = [
  {
    title: "Introduction",
    paragraphs: [
      `Niagara Custom Water ("we", "us", "our") provides customized branded drinking water bottles and label design services from Dhaka, Bangladesh. This Privacy Policy applies to information you share with us through this website, by phone, or through WhatsApp.`,
      "Last updated: 22 November 2026.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "When you use our contact form, we collect the details you choose to provide: your name, business name, email address, phone number and the requirements you describe in the message field.",
      "We do not collect payment card details through this website.",
    ],
    points: [
      "Contact and business details you submit in the inquiry form.",
      "Messages you send us by phone, WhatsApp or other direct channels.",
      "Basic technical information needed to serve the website securely.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use your information to respond to your inquiry, prepare a customized bottle proposal, discuss label design and quantities, agree pricing and delivery arrangements, and keep a record of our business correspondence.",
      "We do not use your details for automated decision-making or advertising.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    paragraphs: [
      "We do not sell or rent your information. We share it only when needed to deliver our service, for example with team members handling your order, or when required by applicable law.",
      "If you choose to continue your inquiry through WhatsApp, your message is handled by that service under its own privacy terms.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable administrative and technical steps to protect the information you share with us. No method of transmission over the internet is completely secure, so please avoid sending sensitive information that is not needed for your inquiry.",
    ],
  },
  {
    title: "Cookies and Preferences",
    paragraphs: [
      "This website does not use advertising or tracking cookies. Your snow animation preference is kept in memory for the duration of your visit and is not stored on your device or shared with third parties.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You may ask us to access, correct or delete the contact information you have shared with us. You can also choose not to provide certain details, although this may limit our ability to prepare an accurate quote.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      `For privacy-related questions, contact Niagara Custom Water at ${siteConfig.address} or call ${siteConfig.phone}.`,
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy to reflect changes in our services or practices. The updated version will be posted on this page with a revised date.",
    ],
  },
];

export default function PolicyContent() {
  return (
    <section className="section policy-section">
      <div className="shell">
        <div className="policy-grid">
          {sections.map((section, index) => (
            <article className="glass-card policy-card" key={section.title} id={`section-${index + 1}`}>
              <span className="policy-card__number">0{index + 1}</span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.points ? (
                <ul className="check-list">
                  {section.points.map((point) => (
                    <li key={point}>
                      <span aria-hidden="true">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
