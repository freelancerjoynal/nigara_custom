"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/global/SectionHeading";
import { clientStories } from "@/data/clientStories";
import { whatsappQuoteUrl } from "@/data/site";

export default function ClientsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("app:lock-scroll"));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      } else if (event.key === "ArrowLeft") {
        setSelected((current) =>
          current === null
            ? null
            : (current - 1 + clientStories.length) % clientStories.length,
        );
      } else if (event.key === "ArrowRight") {
        setSelected((current) =>
          current === null ? null : (current + 1) % clientStories.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.dispatchEvent(new Event("app:unlock-scroll"));
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  useEffect(() => {
    if (selected !== null) closeButtonRef.current?.focus();
  }, [selected]);

  const story = selected === null ? null : clientStories[selected];
  const reference = selected === null ? "" : String(selected + 1).padStart(2, "0");

  const step = (direction: number) => {
    setSelected((current) =>
      current === null
        ? null
        : (current + direction + clientStories.length) % clientStories.length,
    );
  };

  return (
    <section id="clients" className="section section--clients">
      <div className="shell">
        <div className="section__head-row">
          <SectionHeading
            eyebrow="Our clients"
            title={
              <>
                Real brands. <span className="text-gold">Real bottles.</span>
              </>
            }
            description="A closer look at the labels we have created for restaurants, hotels, cafés, offices and special occasions."
          />
          <p className="section-side-note">
            Select any bottle to open the full client story, project details and feedback.
          </p>
        </div>

        <div className="client-grid">
          {clientStories.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="client-card"
              onClick={() => setSelected(index)}
              aria-label={`Open details for ${item.client}`}
            >
              <span className="client-card__inner">
                <Image
                  src={item.image}
                  alt={`Custom labelled water bottle for ${item.client}`}
                  fill
                  sizes="(max-width: 700px) 45vw, (max-width: 1200px) 30vw, 20rem"
                />
                <span className="client-card__sector">{item.sector}</span>
                <span className="client-card__quote">“{item.feedback}”</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {story ? (
        <div
          className="client-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div
            className="client-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="client-modal-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="client-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close client story"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="client-modal__media">
              <Image
                key={story.id}
                src={story.image}
                alt={`Custom labelled water bottle for ${story.client}`}
                fill
                sizes="(max-width: 700px) 90vw, 420px"
              />
            </div>

            <div className="client-modal__body">
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Client story {reference}
              </p>
              <h2 id="client-modal-title" className="client-modal__title">
                {story.client}
              </h2>
              <p className="client-modal__feedback">“{story.feedback}”</p>
              <p className="client-modal__detail">{story.detail}</p>

              <dl className="client-modal__details">
                <div>
                  <dt>Reference</dt>
                  <dd>{story.id}</dd>
                </div>
                <div>
                  <dt>Sector</dt>
                  <dd>{story.sector}</dd>
                </div>
                <div>
                  <dt>Project</dt>
                  <dd>{story.project}</dd>
                </div>
                <div>
                  <dt>Label style</dt>
                  <dd>{story.label}</dd>
                </div>
              </dl>

              <div className="client-modal__actions">
                <button type="button" className="client-modal__nav" onClick={() => step(-1)}>
                  ← Previous
                </button>
                <button type="button" className="client-modal__nav" onClick={() => step(1)}>
                  Next story →
                </button>
                <a
                  href={whatsappQuoteUrl}
                  className="btn btn--primary client-modal__order"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start your own bottle
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
