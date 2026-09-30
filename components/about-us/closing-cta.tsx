import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="section-y">
      <Reveal className="container-narrow flex flex-col items-center gap-5 text-center">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          Come and See for Yourself
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
        </p>
        <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
          Let&apos;s find your stone, together
        </h2>
        <p className="type-lead max-w-2xl text-stone">
          Tell us what you&apos;re looking for, or arrange a private viewing
          in Colombo or Ratnapura. We reply personally to every enquiry.
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <EnquiryDialog
            title="Arrange a Viewing"
            trigger={<Button size="lg">Arrange a Viewing</Button>}
          />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
