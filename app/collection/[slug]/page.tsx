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
import { StickyEnquiry } from "@/components/detail/sticky-enquiry";
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
      <div className="container-page pt-2">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collection", href: "/collection" },
            { label: gemstone.name },
          ]}
        />
      </div>

      <section className="container-page grid gap-10 pt-4 pb-section-sm lg:grid-cols-12 lg:items-start lg:gap-14">
        <Reveal className="lg:col-span-7">
          <ImageGallery images={gemstone.images} name={gemstone.name} />
        </Reveal>

        <Reveal delay={0.08} className="flex min-w-0 flex-col gap-7 lg:sticky lg:top-28 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
              Ceylon {gemstone.type} · {gemstone.treatment}
            </p>
            <h1 className="font-display type-h1 font-medium text-balance text-brand-ink">
              {gemstone.name}
            </h1>
            <p className="text-sm tracking-[0.04em] text-stone">
              Reference No. {gemstone.referenceNo}
            </p>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y border-line py-5">
            <p className="font-display text-4xl font-semibold text-brand-forest">
              {formatLkr(gemstone.priceLkr)}
            </p>
            <p className="text-sm text-stone">Guide price · enquire for details</p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Spec label="Carat Weight" value={formatCarat(gemstone.caratWeight)} />
            <Spec label="Cut" value={gemstone.cut} />
            <Spec label="Colour" value={gemstone.colour} />
            <Spec label="Clarity" value={gemstone.clarity} />
            <Spec label="Origin" value={gemstone.origin} />
            <Spec label="Treatment" value={gemstone.treatment} />
          </dl>

          <div id="detail-cta" className="flex flex-col gap-3 pt-2 xl:flex-row">
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              trigger={
                <Button size="lg" className="w-full xl:flex-1">
                  Arrange a Viewing
                </Button>
              }
            />
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              title="Enquire About This Stone"
              trigger={
                <Button size="lg" variant="outline" className="w-full xl:flex-1">
                  Enquire About This Stone
                </Button>
              }
            />
          </div>

          <p className="flex items-center gap-2.5 text-sm text-stone">
            <ShieldCheck className="size-5 shrink-0 text-brand-green" strokeWidth={1.5} />
            Accompanied by an independent laboratory certificate
          </p>
        </Reveal>
      </section>

      <section className="section-y bg-ivory">
        <Reveal className="container-page grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
              The Stone
            </p>
            <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
              A {gemstone.colour} {gemstone.type} of Rare Character
            </h2>
          </div>
          <div className="type-lead flex flex-col gap-5 text-ink-soft lg:col-span-7">
            {gemstone.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="container-page grid grid-cols-1 gap-10 py-section sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="mb-4 font-display type-h3 font-medium text-brand-ink">
            Specifications
          </h2>
          <SpecTable gemstone={gemstone} />
        </div>
        <div className="flex lg:col-span-5">
          <CertificationCard gemstone={gemstone} />
        </div>
      </Reveal>

      <div className="bg-ivory">
        <RelatedGemstones items={related} />
      </div>

      <section data-tone="dark" className="relative isolate overflow-hidden bg-brand-forest-dark">
        <Image
          src="/images/shared/cta-banner-texture.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-brand-forest-dark/85" />
        <Reveal className="container-page flex flex-col items-center gap-5 py-section text-center">
          <p className="eyebrow">Private Viewings · Colombo</p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-cream">
            Interested in this {gemstone.type.toLowerCase()}?
          </h2>
          <p className="type-lead max-w-2xl text-mist">
            Arrange a private viewing, or request full details, certification and video of this stone. We reply personally within one business day.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              title="Enquire About This Gem"
              trigger={
                <Button size="lg" variant="gold">
                  Enquire About This Gem
                </Button>
              }
            />
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              trigger={
                <Button size="lg" variant="outline-light">
                  Arrange a Viewing
                </Button>
              }
            />
          </div>
        </Reveal>
      </section>

      <StickyEnquiry
        targetId="detail-cta"
        name={gemstone.name}
        price={formatLkr(gemstone.priceLkr)}
        gemstoneRef={gemstone.referenceNo}
      />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-stone uppercase">
        {label}
      </dt>
      <dd className="font-display text-2xl leading-tight font-medium text-brand-ink">{value}</dd>
    </div>
  );
}
