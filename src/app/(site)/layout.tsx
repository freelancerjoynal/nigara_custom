import ScrollToTop from "@/components/global/ScrollToTop";
import SiteFooter from "@/components/global/SiteFooter";
import SiteHeader from "@/components/global/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
