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

  useEffect(() => {
    if (!lenis) return;

    let lastY = 0;
    let lastTime = 0;
    let velocity = 0;

    const isInteractiveTarget = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest("input, textarea, select, [data-lenis-prevent]"));

    const onTouchStart = (event: TouchEvent) => {
      velocity = 0;
      if (event.touches.length !== 1 || isInteractiveTarget(event.target)) return;
      lastY = event.touches[0].clientY;
      lastTime = performance.now();
    };

    const onTouchMove = (event: TouchEvent) => {
      if (
        event.touches.length !== 1 ||
        isInteractiveTarget(event.target) ||
        lenis.isStopped ||
        lenis.isLocked
      ) {
        return;
      }

      const y = event.touches[0].clientY;
      const delta = lastY - y;
      lastY = y;

      const now = performance.now();
      const elapsed = Math.max(8, now - lastTime);
      lastTime = now;

      if (!delta) return;
      velocity = delta / elapsed;

      if (event.cancelable) event.preventDefault();
      lenis.scrollTo(lenis.targetScroll + delta * 1.25 + velocity * 26, {
        programmatic: false,
        lerp: 0.12,
      });
    };

    const onTouchEnd = () => {
      if (!velocity || lenis.isStopped || lenis.isLocked) return;
      const inertia =
        Math.sign(velocity) * Math.min(Math.abs(velocity) ** 1.6 * 55, 900);
      lenis.scrollTo(lenis.targetScroll + inertia, {
        programmatic: false,
        lerp: 0.055,
      });
      velocity = 0;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: false,
        virtualScroll: ({ event }) => !event.type.startsWith("touch"),
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
