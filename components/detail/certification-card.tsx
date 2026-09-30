"use client";

import { useState } from "react";
import { ShieldCheck, RotateCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Gemstone } from "@/types/gemstone";

export function CertificationCard({ gemstone }: { gemstone: Gemstone }) {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  if (gemstone.certification === "Uncertified") {
    return (
      <div className="flex flex-col gap-3 rounded border border-border bg-muted/40 p-6">
        <p className="text-sm font-medium text-brand-ink">Uncertified stone</p>
        <p className="text-sm text-muted-foreground">
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
    <div className="flex flex-col items-start gap-4 self-start rounded border border-[#e6e0d5] bg-white px-9 py-10">
      <ShieldCheck className="size-[52px] text-brand-green" />
      <p className="text-[11px] font-semibold tracking-[1.54px] text-brand-gold-muted uppercase">
        Independently Certified
      </p>
      <p className="font-display text-[26px] font-semibold text-brand-ink">
        {lab} GemResearch Swisslab
      </p>
      <p className="text-sm text-muted-foreground">
        {details
          ? `Report No. ${details.reportNo}. ${details.note}`
          : `Accompanied by a report from ${gemstone.certification}.`}
      </p>
      <button
        onClick={() => {
          setFlipped(false);
          setOpen(true);
        }}
        className="text-left text-sm font-semibold tracking-[0.28px] text-brand-green-light hover:underline"
      >
        View Certificate →
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md sm:max-w-lg" showCloseButton>
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-brand-ink">
              Certification
            </DialogTitle>
          </DialogHeader>

          <div className="[perspective:1400px]">
            <button
              type="button"
              onClick={() => setFlipped((v) => !v)}
              aria-label="Flip certificate"
              className="group relative block h-[340px] w-full cursor-pointer rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50"
            >
              <div
                className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-lg border border-[#e6e0d5] bg-gradient-to-br from-[#f5efe6] to-white p-8 text-center [backface-visibility:hidden]">
                  <ShieldCheck className="size-14 text-brand-green" />
                  <p className="text-[11px] font-semibold tracking-[1.54px] text-brand-gold-muted uppercase">
                    Independently Certified
                  </p>
                  <p className="font-display text-2xl font-semibold text-brand-ink">
                    {lab} GemResearch Swisslab
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {gemstone.name}
                  </p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-brand-green-light">
                    <RotateCw className="size-3.5" />
                    Tap to view report details
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col gap-4 rounded-lg border border-[#e6e0d5] bg-brand-forest-dark p-8 text-brand-cream [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-[11px] font-semibold tracking-[1.54px] text-brand-gold uppercase">
                    Report Details
                  </p>
                  <dl className="flex flex-col gap-3 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-[#d1d8d3]">Laboratory</dt>
                      <dd className="font-medium">{lab}</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-[#d1d8d3]">Report No.</dt>
                      <dd className="font-medium">
                        {details?.reportNo ?? "On request"}
                      </dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-[#d1d8d3]">Gemstone</dt>
                      <dd className="font-medium">{gemstone.name}</dd>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <dt className="text-[#d1d8d3]">Reference No.</dt>
                      <dd className="font-medium">{gemstone.referenceNo}</dd>
                    </div>
                  </dl>
                  <p className="text-xs leading-relaxed text-[#d1d8d3]">
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
