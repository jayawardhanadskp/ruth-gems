import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

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
    <section className="container-page flex flex-col items-center gap-14 py-16 sm:py-20">
      <Reveal className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium tracking-[1px] text-brand-ink uppercase sm:text-base">
          Trust & transparency
        </p>
        <h2 className="font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl">
          Everything we know about a stone, you know too
        </h2>
      </Reveal>

      <div className="relative mx-auto flex w-full max-w-[1090px] flex-col gap-4 lg:block lg:h-[610px]">
        <Reveal className="relative order-first mx-auto h-[300px] w-[270px] overflow-hidden sm:h-[420px] sm:w-[378px] lg:absolute lg:top-[22px] lg:left-1/2 lg:h-[553px] lg:w-[498px] lg:-translate-x-1/2">
          <Image
            src="/images/home/trust-figma.png"
            alt="Two Ceylon gem traders examining stones"
            width={1376}
            height={768}
            sizes="(max-width: 1024px) 60vw, 500px"
            className="absolute top-0 left-0 h-full w-[199%] max-w-none"
          />
        </Reveal>
        {cards.map((card, i) => (
          <StaggerGrid
            key={card.title}
            className={
              "lg:absolute lg:w-[31.5%] " +
              ["lg:top-0 lg:left-0", "lg:top-0 lg:right-0", "lg:bottom-0 lg:left-0", "lg:right-0 lg:bottom-0"][i]
            }
          >
            <StaggerItem>
              <TrustCard {...card} />
            </StaggerItem>
          </StaggerGrid>
        ))}
      </div>

      <Reveal className="max-w-xl text-center text-lg text-gray-500">
        The gem trade has survived on reputation for two thousand years. We
        would rather lose a sale than a name.
      </Reveal>
    </section>
  );
}

function TrustCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg bg-[#f3ede2] p-6 lg:min-h-[200px] lg:justify-center">
      <p className="font-display text-xl font-semibold text-brand-ink">
        {title}
      </p>
      <p className="text-sm leading-relaxed text-gray-500">{body}</p>
    </div>
  );
}
