import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const checklist = [
  "Private viewings by appointment, in Colombo or Ratnapura",
  "Honest guidance at every step, for new and seasoned buyers",
  "Complete discretion, before and after every sale",
];

export function Difference() {
  return (
    <Reveal className="flex flex-col items-center gap-10 bg-white px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:gap-[3.75vw] lg:px-[4.167vw] lg:py-[4.688vw]">
      <div className="relative h-[320px] w-full max-w-[600px] overflow-hidden rounded-xl sm:h-[420px] lg:h-[26.042vw] lg:w-[31.25vw] lg:rounded-[0.625vw]">
        <Image
          src="/images/about-us/difference.png"
          alt="Ruth Gems client examining a sapphire in natural light"
          fill
          sizes="(min-width: 1024px) 31vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold tracking-[1.8px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.094vw]">
          The Ruth Gems Difference
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-brand-ink sm:text-[38px] lg:mt-[0.729vw] lg:text-[1.979vw] lg:leading-[2.24vw]">
          Buying a gem should feel like a privilege, not a transaction
        </h2>
        <p className="mt-4 text-base leading-[1.75] text-[#5c5347] lg:mt-[1.042vw] lg:text-[0.833vw] lg:leading-[1.458vw]">
          We believe a fine stone deserves to be chosen slowly. Clients meet
          us privately, examine each gem in natural light, and take all the
          time they need — with honest guidance and no pressure to decide.
          Whether you are buying your first sapphire or adding to a serious
          collection, the experience is the same: calm, considered and
          completely personal.
        </p>
        <div className="mt-6 flex flex-col gap-3.5 lg:mt-[1.354vw] lg:gap-[0.729vw]">
          {checklist.map((item) => (
            <div key={item} className="flex items-center gap-3 lg:gap-[0.625vw]">
              <Check className="size-5 shrink-0 text-brand-green-light lg:size-[1.042vw]" strokeWidth={2.4} />
              <p className="text-[15px] font-medium text-brand-ink lg:text-[0.781vw]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
