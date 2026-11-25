"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollController() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const stop = () => lenis.stop();
    const start = () => lenis.start();
    window.addEventListener("app:lock-scroll", stop);
    window.addEventListener("app:unlock-scroll", start);
    return () => {
      window.removeEventListener("app:lock-scroll", stop);
      window.removeEventListener("app:unlock-scroll", start);
    };
  }, [lenis]);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.1,
        allowNestedScroll: true,
        anchors: true,
        stopInertiaOnNavigate: true,
        autoRaf: true,
      }}
    >
      {children}
      <ScrollController />
    </ReactLenis>
  );
}
