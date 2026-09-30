import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  heading?: string;
  description?: string;
}

export function CtaBanner({
  heading = "Some Things Are Best\nExperienced in Person.",
  description = "Discover your preferred gemstone up close and connect with our team for a personalised viewing experience.",
}: CtaBannerProps) {
  return (
    <section data-tone="dark" className="relative isolate overflow-hidden bg-brand-forest-dark">
      <Image
        src="/images/shared/cta-banner-texture.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-forest-dark/90 via-brand-forest-dark/70 to-brand-forest-dark/50" />
      <Reveal className="container-page flex flex-col items-start gap-6 py-section-sm sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-xl flex-col gap-5">
          <p className="eyebrow">Private viewings</p>
          <h2 className="font-display type-h2 font-medium whitespace-pre-line text-brand-cream">
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-brand-cream/85 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center max-sm:[&>*]:w-full">
          <Button
            nativeButton={false}
            size="lg"
            variant="gold"
            render={
              <a href="https://wa.me/94770000000" target="_blank" rel="noreferrer" />
            }
          >
            <Image src="/images/icons/whatsapp.svg" alt="" width={20} height={20} />
            WhatsApp Us
          </Button>
          <EnquiryDialog
            trigger={
              <Button size="lg" variant="outline-light">
                <Image src="/images/icons/phone.svg" alt="" width={20} height={20} />
                Call
              </Button>
            }
            title="Request a Call Back"
            description="Leave your details and our team will call you back shortly."
          />
        </div>
      </Reveal>
    </section>
  );
}
