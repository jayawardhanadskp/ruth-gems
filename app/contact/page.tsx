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
      <div className="bg-ivory"><div className="container-page pt-2">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div></div>
      <ContactHero />
      <ContactSection />
    </>
  );
}
