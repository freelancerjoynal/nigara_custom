"use client";

import { useEffect, useRef } from "react";

type MotionVideoProps = {
  className?: string;
  poster?: string;
  label?: string;
  lazy?: boolean;
};

const videoSrc = "/videos/niagrawaterfall.mp4";

export default function MotionVideo({
  className = "",
  poster = "/pictures/herobg.png",
  label,
  lazy = false,
}: MotionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    const shouldPlay = !reducedMotion.matches && !connection?.saveData;

    video.muted = true;

    if (!shouldPlay) {
      video.pause();
      return;
    }

    const play = () => {
      void video.play().catch(() => {
        // Autoplay can be blocked by the browser; the poster remains visible.
      });
    };

    if (!lazy) {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          play();
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [lazy]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={!lazy}
      muted
      loop
      playsInline
      preload={lazy ? "none" : "metadata"}
      poster={poster}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      tabIndex={-1}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  );
}
