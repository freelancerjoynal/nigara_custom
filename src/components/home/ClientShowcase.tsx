"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { clientStories } from "@/data/clientStories";

const SLIDE_DURATION = 3000;
const REVIEW_SIDES = ["right", "left", "left", "right", "right", "left", "right", "left", "left", "right", "left", "right", "right"] as const;
const REVIEW_TOPS = [18, 58, 34, 62, 22, 50, 30, 66, 16, 54, 38, 26, 60];

export default function ClientShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [restart, setRestart] = useState(0);
  const [finePointer, setFinePointer] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % clientStories.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, restart]);

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + clientStories.length) % clientStories.length);
    setRestart((value) => value + 1);
  };

  const story = clientStories[index];
  const number = String(index + 1).padStart(2, "0");
  const total = String(clientStories.length).padStart(2, "0");
  const reviewSide = REVIEW_SIDES[index];
  const reviewTop = REVIEW_TOPS[index];

  return (
    <div
      className="client-showcase"
      onMouseEnter={() => {
        if (finePointer) setPaused(true);
      }}
      onMouseLeave={() => {
        if (finePointer) setPaused(false);
      }}
    >
      <a
        href="#clients"
        className="client-showcase__frame"
        aria-label="View all client bottle stories"
      >
        <span className="client-showcase__border-clip" aria-hidden="true">
          <span className="client-showcase__border" />
        </span>
        <span className="client-showcase__inner" aria-hidden="true">
          <span className="client-showcase__shade" />
        </span>
        <span className="client-showcase__media">
          <Image
            key={story.image}
            src={story.image}
            alt={`Custom labelled bottle for ${story.client}`}
            fill
            sizes="(max-width: 700px) 52vw, 20rem"
            priority={index === 0}
            className="client-showcase__image"
          />
        </span>
        <span className="client-showcase__lip" aria-hidden="true" />
        <span
          className={`client-showcase__review client-showcase__review--${reviewSide}`}
          style={{ top: `${reviewTop}%` }}
        >
          <strong aria-hidden="true">“</strong>
          <span className="client-showcase__review-text">{story.feedback}</span>
        </span>
      </a>

      <div className="client-showcase__meta">
        <span className="client-showcase__counter" aria-live="polite">
          {number} / {total}
        </span>
        <div className="client-showcase__dots" aria-label="Choose a client story">
          {clientStories.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              className={`client-showcase__dot${dotIndex === index ? " is-active" : ""}`}
              onClick={() => goTo(dotIndex)}
              aria-label={`Show client story ${dotIndex + 1}`}
              aria-current={dotIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <a href="#clients" className="client-showcase__view">
        View all clients <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
