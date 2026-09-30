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
    <section className="relative overflow-hidden">
      <Image
        src="/images/shared/cta-banner-texture.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <Reveal className="container-page relative flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-lg flex-col gap-4">
          <h2 className="font-display text-3xl font-semibold whitespace-pre-line text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="text-[15px] leading-relaxed text-white/90">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            nativeButton={false}
            render={
              <a
                href="https://wa.me/94770000000"
                target="_blank"
                rel="noreferrer"
              />
            }
            className="flex h-[60px] items-center gap-2 rounded-lg border border-brand-green bg-brand-green px-6 text-base font-medium text-brand-cream hover:bg-brand-green/90 sm:w-[220px]"
          >
            <Image src="/images/icons/whatsapp.svg" alt="" width={24} height={24} />
            WhatsApp Us
          </Button>
          <EnquiryDialog
            trigger={
              <Button
                variant="outline"
                className="flex h-[60px] items-center gap-2 rounded-lg border border-white bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
              >
                <Image src="/images/icons/phone.svg" alt="" width={24} height={24} />
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
