"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/site";

export default function GalleryShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : galleryImages[activeIndex];

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);
  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, previous, next]);

  return (
    <section className="section gallery-section">
      <div className="shell">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className={index === 0 ? "gallery-tile gallery-tile--featured" : "gallery-tile"}
              key={image.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image ${index + 1}: ${image.title}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 46vw, (max-width: 1100px) 31vw, 280px"
              />
              <span className="gallery-tile__overlay">
                <span className="gallery-tile__index">0{index + 1}</span>
                <span className="gallery-tile__title">{image.title}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-note">
          Custom labels, your logo and your brand colors — every bottle is an opportunity to be
          remembered.
        </p>
      </div>

      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <button type="button" className="lightbox__close" onClick={close} aria-label="Close image">
            ✕
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="(max-width: 800px) 90vw, 60vw"
              className="lightbox__image"
            />
            <div className="lightbox__caption">
              <h2>{active.title}</h2>
              <p>{active.caption}</p>
              <span>
                {(activeIndex ?? 0) + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </section>
  );
}
