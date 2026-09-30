import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { AboutUsHero } from "@/components/about-us/hero";
import { Principles } from "@/components/about-us/principles";
import { Difference } from "@/components/about-us/difference";
import { FounderNote } from "@/components/about-us/founder-note";
import { ClosingCta } from "@/components/about-us/closing-cta";

export const metadata: Metadata = {
  title: "About Ruth Gems | Ruth Gems",
  description:
    "A Ratnapura family of gem traders — our story, our principles, and why buying a gem from Ruth Gems feels like a privilege, not a transaction.",
};

export default function AboutUsPage() {
  return (
    <>
      <div className="bg-ivory">
        <div className="container-page pt-2">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        </div>
      </div>
      <AboutUsHero />
      <Principles />
      <Difference />
      <FounderNote />
      <ClosingCta />
    </>
  );
}
