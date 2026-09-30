import { cn } from "@/lib/utils";
import type { GemStatus } from "@/types/gemstone";

export function StatusPill({ status }: { status: GemStatus }) {
  const isAvailable = status === "available";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-cream/95 px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase shadow-xs ring-1 ring-brand-ink/5",
        isAvailable ? "text-status-available" : "text-status-reserved"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          isAvailable ? "bg-status-available" : "bg-brand-gold"
        )}
      />
      {isAvailable ? "Available" : "Reserved"}
    </span>
  );
}
