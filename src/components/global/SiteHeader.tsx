"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";
import { closeMenu, toggleMenu, toggleSnow } from "@/store/slices/uiSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BrandMark from "./BrandMark";

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

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
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
          <Link href="/contact" className="header-cta">
            Get a Quote
          </Link>
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
        hidden={!menuOpen}
      >
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
        </nav>
      </div>
    </header>
  );
}
