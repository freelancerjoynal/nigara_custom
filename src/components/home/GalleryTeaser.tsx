import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/global/SectionHeading";
import { galleryImages } from "@/data/site";

export default function GalleryTeaser() {
  return (
    <section className="section section--gallery-teaser">
      <div className="shell">
        <div className="section__head-row">
          <SectionHeading
            eyebrow="From the gallery"
            title={
              <>
                A closer look at <span className="text-gold">the details.</span>
              </>
            }
          />
          <Link href="/gallery" className="text-link">
            View full gallery <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="teaser-grid">
          {galleryImages.slice(0, 4).map((image) => (
            <Link href="/gallery" className="teaser-tile" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 45vw, (max-width: 1100px) 25vw, 270px"
              />
              <span className="teaser-tile__caption">{image.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
