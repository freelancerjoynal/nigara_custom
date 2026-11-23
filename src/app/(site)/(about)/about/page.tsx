import type { Metadata } from "next";
import {
  AboutHero,
  AboutServices,
  AboutWhy,
  MissionVision,
  Philosophy,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Niagara Custom Water — a customized bottled drinking water branding and supply business based in Bangladesh. Our philosophy: Your Bottle, Your Brand.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Philosophy />
      <MissionVision />
      <AboutServices />
      <AboutWhy />
    </>
  );
}
