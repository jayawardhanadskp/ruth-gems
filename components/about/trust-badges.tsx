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
    <section className="section-y bg-ivory">
      <div className="container-page flex flex-col items-center gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            Trust &amp; Authenticity
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            Buy With Complete Confidence
          </h2>
        </Reveal>
        <StaggerGrid className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {badges.map((badge) => (
            <StaggerItem key={badge.title} className="h-full">
              <div className="surface flex h-full flex-col items-center gap-4 rounded-2xl bg-background p-8 text-center">
                <span className="flex size-16 items-center justify-center rounded-full border border-brand-gold/40 bg-ivory">
                  <Image src={badge.icon} alt="" width={32} height={32} className="size-8" />
                </span>
                <p className="font-display text-2xl font-semibold text-brand-ink">{badge.title}</p>
                <p className="text-[0.9375rem] leading-relaxed text-stone">{badge.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
