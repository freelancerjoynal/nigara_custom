import type { Metadata } from "next";
import { GalleryHero, GalleryShowcase } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore custom branded water bottle presentation concepts from Niagara Custom Water — your bottle, your brand.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryShowcase />
    </>
  );
}
