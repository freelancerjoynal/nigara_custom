import type { Metadata } from "next";
import { PolicyContent, PolicyHero } from "@/components/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Niagara Custom Water collects, uses and protects information you share when requesting customized branded water bottles.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHero />
      <PolicyContent />
    </>
  );
}
