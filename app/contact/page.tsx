import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { ContactHero } from "@/components/contact/hero";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact Us | Ruth Gems",
  description:
    "Get in touch with Ruth Gems — arrange a private viewing, ask about a stone, or visit our office in Ratnapura, Sri Lanka.",
};

export default function ContactPage() {
  return (
    <>
      <div className="px-4 pt-6 sm:px-6 lg:px-[4.167vw] lg:pt-[1.25vw]">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>
      <ContactHero />
      <ContactSection />
    </>
  );
}
