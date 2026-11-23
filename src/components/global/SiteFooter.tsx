import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import BrandMark from "./BrandMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <BrandMark />
            <p>
              Customized branded drinking water for restaurants, hotels, cafés, offices and
              events across Bangladesh.
            </p>
            <p className="footer__tagline">{siteConfig.tagline}</p>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Explore</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Business Contact</h2>
            <ul>
              <li>
                <a href={`tel:${siteConfig.phoneInternational}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp &amp; Direct Orders
                </a>
              </li>
              <li className="footer__address">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>
            Made by{" "}
            <a href="https://uddoktafly.com" target="_blank" rel="noopener noreferrer">
              uddoktafly.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
