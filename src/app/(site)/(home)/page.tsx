import type { Metadata } from "next";
import BrandMarquee from "@/components/global/BrandMarquee";
import {
  ColorfulServices,
  FAQBand,
  GalleryTeaser,
  HomeCTA,
  HomeHero,
  IntroStory,
  ProductRange,
  ProcessBand,
  QualityBand,
  SectorsBand,
  SourceStory,
  WhyNiagara,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Custom Branded Drinking Water in Bangladesh",
  description:
    "Your Brand. Your Bottle. Your Identity. Niagara Custom Water helps businesses present their own logo, brand name and design on customized water bottle labels.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandMarquee />
      <IntroStory />
      <SourceStory />
      <ColorfulServices />
      <ProductRange />
      <ProcessBand />
      <QualityBand />
      <SectorsBand />
      <WhyNiagara />
      <GalleryTeaser />
      <FAQBand />
      <HomeCTA />
    </>
  );
}
