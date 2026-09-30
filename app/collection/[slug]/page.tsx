import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import Image from "next/image";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/detail/image-gallery";
import { SpecTable } from "@/components/detail/spec-table";
import { CertificationCard } from "@/components/detail/certification-card";
import { RelatedGemstones } from "@/components/detail/related-gemstones";
import {
  getAllSlugs,
  getGemstoneBySlug,
  getRelatedGemstones,
} from "@/lib/data";
import { formatCarat, formatLkr } from "@/lib/format";
import { ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/collection/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const gemstone = await getGemstoneBySlug(slug);
  if (!gemstone) return {};
  return {
    title: `${gemstone.name} | Ruth Gems`,
    description: gemstone.description[0],
  };
}

export default async function GemstoneDetailPage({
  params,
}: PageProps<"/collection/[slug]">) {
  const { slug } = await params;
  const gemstone = await getGemstoneBySlug(slug);
  if (!gemstone) notFound();

  const related = await getRelatedGemstones(slug, 4);

  return (
    <>
      <div className="container-page flex flex-col pt-7 pb-1">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collection", href: "/collection" },
            { label: gemstone.name },
          ]}
        />
      </div>

      <Reveal className="container-page flex flex-col gap-12 pt-9 pb-12 lg:flex-row lg:items-end lg:gap-[3.333vw] lg:pb-[72px]">
        <ImageGallery images={gemstone.images} name={gemstone.name} />

        <div className="flex min-w-0 flex-1 flex-col gap-[26px]">
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
              Ceylon {gemstone.type} · {gemstone.treatment}
            </p>
            <h1 className="font-display text-4xl leading-[1.07] font-semibold text-brand-ink lg:text-[clamp(38px,2.8125vw,54px)]">
              {gemstone.name}
            </h1>
            <p className="text-sm tracking-[0.28px] text-muted-foreground">
              Reference No. {gemstone.referenceNo}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <p className="font-display text-3xl font-semibold text-brand-gold-muted lg:text-[clamp(30px,2.43vw,42px)]">
              {formatLkr(gemstone.priceLkr)}
            </p>
            <p className="text-[13px] text-muted-foreground">
              Guide price · enquire for details
            </p>
          </div>

          <div className="h-px w-full bg-[#e6e0d5]" />

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-6">
              <Spec label="Carat Weight" value={formatCarat(gemstone.caratWeight)} />
              <Spec label="Cut" value={gemstone.cut} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Spec label="Colour" value={gemstone.colour} />
              <Spec label="Clarity" value={gemstone.clarity} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Spec label="Origin" value={gemstone.origin} />
              <Spec label="Treatment" value={gemstone.treatment} />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              trigger={
                <Button className="h-[59px] flex-1 rounded-lg bg-brand-green-light px-6 text-base leading-[19px] font-semibold tracking-[0.64px] text-white hover:bg-brand-green-light/90">
                  Arrange a Viewing
                </Button>
              }
            />
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              title="Enquire About This Stone"
              trigger={
                <Button
                  variant="outline"
                  className="h-[59px] flex-1 rounded-lg border-[1.2px] border-brand-green-light px-6 text-base leading-[19px] font-semibold tracking-[0.64px] text-brand-green-light hover:bg-brand-green-light/10 hover:text-brand-green-light"
                >
                  Enquire About This Stone
                </Button>
              }
            />
          </div>

          <div className="flex items-center gap-2.5 pt-1.5 text-[13px] text-muted-foreground">
            <ShieldCheck className="size-[18px] text-brand-green" />
            Accompanied by an independent laboratory certificate
          </div>
        </div>
      </Reveal>

      <Reveal className="container-page">
        <div className="flex flex-col gap-[18px] rounded-lg bg-[#f5efe6] px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
        <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
          The Stone
        </p>
        <h2 className="font-display text-3xl font-semibold text-brand-ink lg:text-[42px]">
          A {gemstone.colour} {gemstone.type} of Rare Character
        </h2>
        <div className="flex flex-col gap-[18px] text-base leading-7 text-[#3c3834]">
          {gemstone.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        </div>
      </Reveal>

      <Reveal className="container-page grid grid-cols-1 gap-10 py-12 lg:grid-cols-[1fr_440px] lg:gap-14 lg:py-[72px]">
        <div>
          <h2 className="mb-5 font-display text-[32px] font-semibold text-brand-ink">
            Specifications
          </h2>
          <SpecTable gemstone={gemstone} />
        </div>
        <CertificationCard gemstone={gemstone} />
      </Reveal>

      <RelatedGemstones items={related} />

      <section className="relative overflow-hidden">
        <Image
          src="/images/shared/cta-banner-texture.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(2,33,23,0.82)]" />
        <div className="container-page relative flex flex-col items-center py-16 text-center lg:py-[88px]">
          <p className="text-xs font-semibold tracking-[2px] text-brand-gold uppercase">
            Private Viewings · Colombo
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-brand-cream lg:text-5xl">
            Interested in this sapphire?
          </h2>
          <p className="mt-3.5 max-w-[620px] text-base leading-[27px] text-[#d1d8d3]">
            Arrange a private viewing, or request full details, certification and video of this stone. We reply personally within one business day.
          </p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-4">
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              title="Enquire About This Gem"
              trigger={
                <Button className="h-auto rounded-md bg-brand-gold px-[34px] py-[18px] text-[15px] font-semibold tracking-[0.3px] text-brand-forest-dark hover:bg-brand-gold/90">
                  Enquire About This Gem
                </Button>
              }
            />
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              trigger={
                <Button
                  variant="outline"
                  className="h-auto rounded-md border-[1.4px] border-brand-cream bg-transparent px-[34px] py-[17px] text-[15px] font-semibold tracking-[0.3px] text-brand-cream hover:bg-white/10 hover:text-brand-cream"
                >
                  Arrange a Viewing
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[10px] font-semibold tracking-[0.8px] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="font-display text-xl font-medium text-brand-ink lg:text-[clamp(18px,1.39vw,24px)]">{value}</p>
    </div>
  );
}
