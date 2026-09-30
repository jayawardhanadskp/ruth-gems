import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const badges = [
  {
    icon: "/images/about/trust-1.svg",
    title: "Independently Certified",
    body: "Every stone is accompanied by a report from a respected independent laboratory, confirming its identity, origin and any treatment.",
  },
  {
    icon: "/images/about/trust-2.svg",
    title: "Ethically & Traditionally Sourced",
    body: "Our gems come from small-scale, hand-worked mines that honour both the land and the generations of miners who work it.",
  },
  {
    icon: "/images/about/trust-3.svg",
    title: "Direct From the Source",
    body: "Sourced at origin in Sri Lanka, we remove the layers between mine and collector — for better provenance and better value.",
  },
];

export function TrustBadges() {
  return (
    <section id="contact" className="bg-[#f5efe6] px-4 py-16 sm:px-6 lg:px-[4.167vw] lg:py-[5vw]">
      <div className="flex flex-col items-center gap-12 lg:gap-[2.7083vw]">
        <Reveal className="flex flex-col items-center gap-3 text-center lg:gap-[0.625vw]">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.1125vw]">
            Trust &amp; Authenticity
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-ink lg:text-[2.2917vw] lg:leading-normal">
            Buy With Complete Confidence
          </h2>
        </Reveal>
        <StaggerGrid className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-[2.5vw]">
          {badges.map((badge) => (
            <StaggerItem key={badge.title}>
              <div className="flex flex-col items-center gap-4 text-center lg:gap-[0.833vw]">
                <Image
                  src={badge.icon}
                  alt=""
                  width={46}
                  height={46}
                  className="size-[46px] lg:size-[2.396vw]"
                />
                <p className="font-display text-2xl font-semibold text-brand-ink lg:text-[1.4583vw] lg:leading-normal">
                  {badge.title}
                </p>
                <p className="text-[15px] leading-[25px] text-[#6e6b67] lg:text-[0.78125vw] lg:leading-[1.302vw]">
                  {badge.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
