"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig, whatsappQuoteUrl } from "@/data/site";
import { closeMenu, toggleMenu, toggleSnow } from "@/store/slices/uiSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BrandMark from "./BrandMark";
import WhatsAppChat from "./WhatsAppChat";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SiteHeader() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((state) => state.ui.menuOpen);
  const snowEnabled = useAppSelector((state) => state.ui.snowEnabled);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
  }, [pathname, dispatch]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("app:lock-scroll"));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dispatch(closeMenu());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.dispatchEvent(new Event("app:unlock-scroll"));
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, dispatch]);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}${menuOpen ? " site-header--menu-open" : ""}`}
    >
      <div className="shell site-header__inner">
        <BrandMark />

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav__link"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="snow-toggle"
            onClick={() => dispatch(toggleSnow())}
            aria-pressed={snowEnabled}
            aria-label={snowEnabled ? "Turn off snow animation" : "Turn on snow animation"}
            title={snowEnabled ? "Snow animation on" : "Snow animation off"}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2v20M4 7l16 10M20 7 4 17M12 6l-3-3m3 3 3-3m-3 15-3 3m3-3 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <a
            href={whatsappQuoteUrl}
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get a Quote on WhatsApp"
          >
            <WhatsAppIcon className="header-cta__icon" />
            Get a Quote
          </a>
          <button
            type="button"
            className="menu-button"
            onClick={() => dispatch(toggleMenu())}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={menuOpen ? "menu-button__bar is-open" : "menu-button__bar"} />
            <span className={menuOpen ? "menu-button__bar is-open" : "menu-button__bar"} />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={menuOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav__top">
          <Image
            src="/pictures/logo-transparent.png"
            alt="Niagara Custom Water"
            width={880}
            height={1202}
            className="mobile-nav__logo"
            sizes="64px"
          />
          <button
            type="button"
            className="mobile-nav__close"
            onClick={() => dispatch(closeMenu())}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav__link"
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => dispatch(closeMenu())}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <a
            href={whatsappQuoteUrl}
            className="btn btn--primary mobile-nav__cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get a Quote on WhatsApp"
          >
            <WhatsAppIcon className="mobile-nav__cta-icon" />
            Get a Quote
          </a>
          <WhatsAppChat inline />
        </nav>

        <div className="mobile-nav__bottom">
          <p className="mobile-nav__tagline">{siteConfig.tagline}</p>
          <div className="mobile-nav__contact">
            <a href={`tel:${siteConfig.phoneInternational}`}>{siteConfig.phone}</a>
            <span aria-hidden="true">•</span>
            <a
              href={whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp &amp; Direct Orders
            </a>
          </div>
          <p className="mobile-nav__address">{siteConfig.address}</p>
        </div>
      </div>
    </header>
  );
}
