import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="flex flex-col items-center bg-brand-cream px-4 py-14 text-center sm:px-6 lg:px-[4.167vw] lg:pt-[5vw] lg:pb-[5.208vw]">
      <Reveal className="flex flex-col items-center">
        <p className="text-xs font-semibold tracking-[2px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.104vw]">
          Come and See for Yourself
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-brand-ink sm:text-5xl lg:mt-[0.833vw] lg:text-[2.5vw]">
          Let&apos;s find your stone, together
        </h2>
        <p className="mt-3 max-w-[620px] text-base leading-[1.7] text-[#5c5347] lg:mt-[0.833vw] lg:max-w-[32.292vw] lg:text-[0.833vw] lg:leading-[1.406vw]">
          Tell us what you&apos;re looking for, or arrange a private viewing
          in Colombo or Ratnapura. We reply personally to every enquiry.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4 lg:mt-[1.563vw] lg:gap-[0.833vw]">
          <EnquiryDialog
            title="Arrange a Viewing"
            trigger={
              <Button className="h-auto rounded-md bg-brand-forest-dark px-[34px] py-[18px] text-[15px] font-semibold tracking-[0.3px] text-brand-cream hover:bg-brand-forest-dark/90">
                Arrange a Viewing
              </Button>
            }
          />
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/contact" />}
            className="h-auto rounded-md border-[1.4px] border-brand-gold-muted bg-transparent px-[34px] py-[17px] text-[15px] font-semibold tracking-[0.3px] text-brand-gold-muted hover:bg-brand-gold-muted/10 hover:text-brand-gold-muted"
          >
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
