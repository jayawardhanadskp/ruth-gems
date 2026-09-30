import { cn } from "@/lib/utils";
import type { GemStatus } from "@/types/gemstone";

export function StatusPill({ status }: { status: GemStatus }) {
  const isAvailable = status === "available";
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-2.5 py-1.5",
        isAvailable ? "bg-brand-green-light" : "bg-[#a5854a]"
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          isAvailable ? "bg-[#128c7e]" : "bg-white"
        )}
      />
      <span className="text-[10px] font-medium text-brand-cream">
        {isAvailable ? "Available" : "Reserved"}
      </span>
    </div>
  );
}
