/**
 * Single source of truth for public site content.
 * Copy is based on requirement.txt (the supplied brand document).
 */

export const siteConfig = {
  name: "Niagara Custom Water",
  shortName: "Niagara Custom",
  tagline: "Your Bottle, Your Brand.",
  phone: "01740813738",
  phoneInternational: "+8801740813738",
  whatsapp: "https://wa.me/8801740813738",
  address: "Bangla Motor, Kazi Nazrul Islam Avenue, Dhaka, Bangladesh",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://niagaracustomwater.com",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const services = [
  {
    number: "01",
    title: "Restaurant Branding",
    description:
      "Customized water bottles featuring your restaurant's logo and identity to create a professional dining experience.",
  },
  {
    number: "02",
    title: "Hotel & Hospitality Branding",
    description:
      "Personalized bottled water solutions for hotels, resorts, and hospitality businesses.",
  },
  {
    number: "03",
    title: "Café & Beverage Business Branding",
    description: "Give your café a unique identity with customized branded water bottles.",
  },
  {
    number: "04",
    title: "Corporate Branding",
    description:
      "Customized bottled water for offices, meetings, conferences, and corporate events.",
  },
  {
    number: "05",
    title: "Event & Occasion Branding",
    description:
      "Personalized water bottles for weddings, parties, exhibitions, seminars, and special occasions.",
  },
  {
    number: "06",
    title: "Custom Label Design",
    description:
      "Customized labels featuring your business name, logo, brand colors, and other required information.",
  },
] as const;

export const reasons = [
  {
    title: "Your Own Brand Identity",
    description: "Present your business name and logo on every customized water bottle.",
  },
  {
    title: "Professional Presentation",
    description: "Give your customers a more professional and memorable experience.",
  },
  {
    title: "Customized Label Design",
    description: "Create a label that reflects your business identity, style, and brand colors.",
  },
  {
    title: "Business Promotion",
    description: "Turn everyday drinking water bottles into an additional branding opportunity.",
  },
  {
    title: "Multiple Business Solutions",
    description:
      "Customized water bottle solutions for restaurants, hotels, cafés, offices, and events.",
  },
  {
    title: "Customer-Focused Service",
    description:
      "We focus on understanding each client's requirements and providing customized solutions accordingly.",
  },
] as const;

export const orderSteps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Get in touch with Niagara Custom Water and tell us about your requirements.",
  },
  {
    number: "02",
    title: "Share Your Brand Details",
    description: "Send us your business name, logo, preferred colors, and design ideas.",
  },
  {
    number: "03",
    title: "Choose Your Quantity",
    description: "Discuss your required bottle quantity and available product options with our team.",
  },
  {
    number: "04",
    title: "Design Approval",
    description: "Review your customized bottle label design and approve the final version.",
  },
  {
    number: "05",
    title: "Order Confirmation",
    description:
      "Confirm your order after discussing the pricing, production timeline, and delivery arrangements.",
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "Your customized bottled water order will be prepared and delivered according to the agreed arrangements.",
  },
] as const;

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
};

/** Images supplied in /public/pictures. Captions are intentionally neutral. */
export const galleryImages: GalleryImage[] = [
  {
    src: "/pictures/1.jpeg",
    alt: "Custom branded water bottle presentation, close-up view",
    title: "The Bottle, Reimagined",
    caption: "A close look at how a bottle becomes part of your brand.",
    width: 1247,
    height: 1261,
  },
  {
    src: "/pictures/2.jpeg",
    alt: "Branded drinking water bottle design showcase",
    title: "Your Label, Your Identity",
    caption: "Your business name, logo and colors — made visible on every bottle.",
    width: 854,
    height: 1281,
  },
  {
    src: "/pictures/3.jpeg",
    alt: "Customized water bottle label mockup",
    title: "Designed Around You",
    caption: "Label concepts shaped around each client's own brand identity.",
    width: 1024,
    height: 1536,
  },
  {
    src: "/pictures/4.jpeg",
    alt: "Personalized bottled water product photograph",
    title: "Made for Hospitality",
    caption: "A professional detail for restaurants, hotels and cafés.",
    width: 854,
    height: 1281,
  },
  {
    src: "/pictures/5.jpeg",
    alt: "Bottled water branding preview",
    title: "Cool, Clean, Consistent",
    caption: "Mountain-cold presentation with a label that speaks for your business.",
    width: 788,
    height: 1278,
  },
  {
    src: "/pictures/6.jpeg",
    alt: "Custom water bottle branding concept",
    title: "For Every Occasion",
    caption: "From corporate meetings to special events, every bottle can carry your mark.",
    width: 854,
    height: 1281,
  },
  {
    src: "/pictures/7.jpeg",
    alt: "Chilled customized water bottle photograph",
    title: "Chilled to Impress",
    caption: "The cold, crisp feeling that makes a branded bottle memorable.",
    width: 854,
    height: 1281,
  },
  {
    src: "/pictures/8.jpeg",
    alt: "Custom water bottle brand showcase detail",
    title: "Your Brand. Your Bottle.",
    caption: "A simple idea that turns everyday water into a branding experience.",
    width: 457,
    height: 1125,
  },
];
