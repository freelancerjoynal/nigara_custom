import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "Customized branded drinking water bottles for businesses in Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#04121f",
    theme_color: "#04121f",
    lang: "en",
  };
}
