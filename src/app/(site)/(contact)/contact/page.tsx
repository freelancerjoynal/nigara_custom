import type { Metadata } from "next";
import { ContactDetails, ContactHero, InquiryForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Niagara Custom Water for customized branded water bottles, label design, pricing and delivery in Dhaka, Bangladesh. Call 01740813738.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <InquiryForm />
    </>
  );
}
