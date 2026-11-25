import type { Metadata, Viewport } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import Atmosphere from "@/components/global/Atmosphere";
import SmoothScroll from "@/components/global/SmoothScroll";
import StoreProvider from "@/components/global/StoreProvider";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Custom Branded Drinking Water in Bangladesh`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Niagara Custom Water creates customized branded drinking water bottles for restaurants, hotels, cafés, corporate offices and events. Your bottle, your brand.",
  keywords: [
    "custom water bottles",
    "branded drinking water Bangladesh",
    "customized bottle labels",
    "restaurant water branding",
    "corporate water bottles Dhaka",
    "Niagara Custom Water",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} | Your Bottle, Your Brand`,
    description:
      "Turn ordinary bottled water into a branded experience with custom labels featuring your logo, business name and design.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Your Bottle, Your Brand`,
    description:
      "Customized branded drinking water bottles for businesses across Bangladesh.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04121f",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  slogan: siteConfig.tagline,
  telephone: siteConfig.phoneInternational,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kazi Nazrul Islam Avenue, Bangla Motor",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneInternational,
    contactType: "customer service",
    areaServed: "BD",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <StoreProvider>
            <Atmosphere />
            <div className="site-shell">{children}</div>
          </StoreProvider>
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
