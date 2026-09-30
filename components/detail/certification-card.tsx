"use client";

import { useState } from "react";
import { ShieldCheck, RotateCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Gemstone } from "@/types/gemstone";

const labNames: Record<string, string> = {
  GIA: "Gemological Institute of America",
  SSEF: "Swiss Gemmological Institute SSEF",
  GRS: "GemResearch Swisslab",
  NGJA: "National Gem & Jewellery Authority",
};

export function CertificationCard({ gemstone }: { gemstone: Gemstone }) {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  if (gemstone.certification === "Uncertified") {
    return (
      <div className="surface flex flex-col gap-3 rounded-2xl bg-ivory p-7">
        <p className="font-display text-2xl font-semibold text-brand-ink">Uncertified stone</p>
        <p className="text-sm leading-relaxed text-stone">
          This stone has not yet been submitted for independent
          certification. Its price reflects that. Certification can be
          arranged prior to purchase on request.
        </p>
      </div>
    );
  }

  const details = gemstone.certificationDetails;
  const lab = details?.lab ?? gemstone.certification;

  return (
    <div className="surface flex flex-col items-start gap-4 self-start rounded-3xl p-8 shadow-md sm:p-10 lg:sticky lg:top-28">
      <ShieldCheck className="size-12 text-brand-green" strokeWidth={1.25} />
      <p className="eyebrow">Independently Certified</p>
      <p className="font-display text-3xl leading-tight font-semibold text-brand-ink">
        {lab}
        {labNames[lab] && (
          <span className="mt-1 block text-lg font-medium text-stone">{labNames[lab]}</span>
        )}
      </p>
      <p className="text-sm leading-relaxed text-stone">
        {details
          ? `Report No. ${details.reportNo}. ${details.note}`
          : `Accompanied by a report from ${gemstone.certification}.`}
      </p>
      <Button
        variant="outline"
        onClick={() => {
          setFlipped(false);
          setOpen(true);
        }}
      >
        View Certificate
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md sm:max-w-lg" showCloseButton>
          <DialogHeader>
            <DialogTitle className="font-display type-h3 font-medium text-brand-ink">
              Certification
            </DialogTitle>
          </DialogHeader>

          <div className="[perspective:1400px]">
            <button
              type="button"
              onClick={() => setFlipped((v) => !v)}
              aria-label="Flip certificate"
              className="group relative block h-[21rem] w-full cursor-pointer rounded-lg text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div
                className="relative h-full w-full transition-transform duration-[600ms] ease-[var(--ease-drawer)] [transform-style:preserve-3d] motion-reduce:duration-[1ms]"
                style={{
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-gradient-to-br from-sand to-white p-8 text-center [backface-visibility:hidden]">
                  <ShieldCheck className="size-14 text-brand-green" />
                  <p className="eyebrow">
                    Independently Certified
                  </p>
                  <p className="font-display text-2xl font-semibold text-brand-ink">
                    {labNames[lab] ?? lab}
                  </p>
                  <p className="text-sm text-stone">
                    {gemstone.name}
                  </p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-green">
                    <RotateCw className="size-3.5" />
                    Tap to view report details
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col gap-4 rounded-2xl border border-line bg-brand-forest-dark p-8 text-brand-cream [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="eyebrow">
                    Report Details
                  </p>
                  <dl className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-mist">Laboratory</dt>
                      <dd className="font-medium">{lab}</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-mist">Report No.</dt>
                      <dd className="font-medium">
                        {details?.reportNo ?? "On request"}
                      </dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-mist">Gemstone</dt>
                      <dd className="font-medium">{gemstone.name}</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-mist">Reference No.</dt>
                      <dd className="font-medium">{gemstone.referenceNo}</dd>
                    </div>
                  </dl>
                  <p className="text-xs leading-relaxed text-mist">
                    {details?.note ??
                      `Accompanied by a report from ${gemstone.certification}. The full certificate is available for review at our office or on request.`}
                  </p>
                  <p className="mt-auto flex items-center gap-1.5 text-xs font-medium text-brand-gold">
                    <RotateCw className="size-3.5" />
                    Tap to flip back
                  </p>
                </div>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
