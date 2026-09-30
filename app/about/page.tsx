import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { AboutHero } from "@/components/about/hero";
import { HeritageIntro } from "@/components/about/heritage-intro";
import { MiningCollage } from "@/components/about/mining-collage";
import { VarietyStrip } from "@/components/about/variety-strip";
import { ColourSpectrum } from "@/components/about/colour-spectrum";
import { Craftsmanship } from "@/components/about/craftsmanship";
import { TrustBadges } from "@/components/about/trust-badges";

export const metadata: Metadata = {
  title: "Ceylon Gems | Ruth Gems",
  description:
    "The story of Ceylon gems — Sri Lanka's heritage of mining, gemstone varieties, colour and master craftsmanship.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="px-4 pt-6 sm:px-6 lg:h-[2.083vw] lg:px-[4.167vw] lg:pt-[1.25vw]">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Ceylon Gems" }]} />
      </div>
      <HeritageIntro />
      <MiningCollage />
      <VarietyStrip />
      <ColourSpectrum />
      <Craftsmanship />
      <TrustBadges />
    </>
  );
}
