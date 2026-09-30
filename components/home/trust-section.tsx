import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

const cards = [
  {
    title: "Full treatment disclosure",
    body: "Every stone states plainly whether it is unheated, traditionally heated, or otherwise treated. If we do not know, we say so rather than guess.",
  },
  {
    title: "Independent certification",
    body: "Most stones arrive with a report from GIA, SSEF, GRS or the NGJA. Where a stone is uncertified it is marked as such and priced accordingly.",
  },
  {
    title: "Verifiable origin",
    body: "We name the district each stone came from — Ratnapura, Elahera, Balangoda, Okkampitiya — because we were there when it came out of the ground.",
  },
  {
    title: "You deal with us, directly",
    body: "No brokers, no marketplace margin, no automated checkout. Two partners who buy the stones themselves, and who answer the phone themselves.",
  },
];

export function TrustSection() {
  return (
    <section className="section-y">
      <div className="container-page flex flex-col gap-9 sm:gap-14">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            Trust &amp; transparency
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            Everything we know about a stone, you know too
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative h-full min-h-[15rem] overflow-hidden rounded-3xl bg-sand shadow-lg ring-1 ring-brand-ink/5 sm:min-h-[28rem]">
              <Parallax className="absolute -inset-y-6 inset-x-0" distance={22}>
                <Image
                  src="/images/home/trust-figma.png"
                  alt="Two Ceylon gem traders examining stones"
                  width={1376}
                  height={768}
                  sizes="(max-width: 1024px) 180vw, 80vw"
                  className="absolute top-0 left-0 h-full w-[199%] max-w-none object-cover object-left"
                />
              </Parallax>
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7 lg:gap-5">
            {cards.map((card, i) => (
              <StaggerItem key={card.title} className="h-full">
                <TrustCard {...card} index={i + 1} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        <Reveal className="mx-auto max-w-xl text-center font-display type-h3 font-medium text-balance text-ink-soft italic">
          The gem trade has survived on reputation for two thousand years. We
          would rather lose a sale than a name.
        </Reveal>
      </div>
    </section>
  );
}

function TrustCard({ title, body, index }: { title: string; body: string; index: number }) {
  return (
    <div className="surface flex h-full flex-col gap-2 rounded-2xl bg-ivory p-5 sm:gap-4 sm:p-8">
      <span className="font-display text-2xl sm:text-3xl font-medium text-brand-gold-muted tabular-nums">
        0{index}
      </span>
      <p className="font-display text-xl leading-tight font-semibold sm:text-2xl text-brand-ink">{title}</p>
      <p className="text-[0.9375rem] leading-relaxed text-stone">{body}</p>
    </div>
  );
}
