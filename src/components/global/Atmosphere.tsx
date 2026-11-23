"use client";

import dynamic from "next/dynamic";
import { useAppSelector } from "@/store/hooks";

const SnowGlobeScene = dynamic(() => import("./SnowGlobeScene"), { ssr: false });

// Deterministic values keep server HTML and client HTML identical on hydration.
const flakes = Array.from({ length: 34 }, (_, index) => ({
  left: (index * 37) % 100,
  size: 2 + (index % 4),
  duration: 11 + (index % 9),
  delay: -(index * 1.7),
  drift: ((index % 7) - 3) * 18,
  opacity: 0.25 + ((index % 5) * 0.13),
}));

export default function Atmosphere() {
  const snowEnabled = useAppSelector((state) => state.ui.snowEnabled);

  return (
    <div
      className={snowEnabled ? "atmosphere" : "atmosphere atmosphere--still"}
      aria-hidden="true"
    >
      <div className="atmosphere__sky" />
      <div className="atmosphere__vessel">
        {snowEnabled ? <SnowGlobeScene /> : null}
        <div className="atmosphere__vessel-glass" />
      </div>
      <div className="atmosphere__ridge atmosphere__ridge--far" />
      <div className="atmosphere__ridge atmosphere__ridge--mid" />
      <div className="atmosphere__ridge atmosphere__ridge--near" />
      <div className="atmosphere__fog atmosphere__fog--one" />
      <div className="atmosphere__fog atmosphere__fog--two" />
      <div className="atmosphere__snow">
        {flakes.map((flake, index) => (
          <span
            key={index}
            className="snowflake"
            style={
              {
                left: `${flake.left}%`,
                "--size": `${flake.size}px`,
                "--duration": `${flake.duration}s`,
                "--delay": `${flake.delay}s`,
                "--drift": `${flake.drift}px`,
                "--flake-opacity": flake.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="atmosphere__veil" />
    </div>
  );
}
