"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const currencies = ["LKR", "USD", "GBP", "EUR"];

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(date);
}

export function TopBar() {
  const [now, setNow] = useState<Date | null>(null);
  const [currency, setCurrency] = useState("LKR");

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 60_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const localTimeZone =
    typeof Intl !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "UTC";

  return (
    <div
      data-tone="dark"
      className="hidden bg-brand-forest-dark text-mist lg:block"
    >
      <div className="container-page flex h-11 items-center justify-between text-xs tracking-[0.02em]">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <Clock3 className="size-3.5 text-brand-gold" aria-hidden />
            Sri Lanka Time
            <span className="font-semibold text-brand-cream tabular-nums">
              {now ? formatTime(now, "Asia/Colombo") : "--:--"}
            </span>
            <span className="text-mist/60">(GMT+5:30)</span>
          </span>
          {localTimeZone !== "Asia/Colombo" && (
            <span className="flex items-center gap-2 border-l border-white/15 pl-5">
              Your Time
              <span className="font-semibold text-brand-cream tabular-nums">
                {now ? formatTime(now, localTimeZone) : "--:--"}
              </span>
            </span>
          )}
        </div>

        <Select value={currency} onValueChange={(value) => setCurrency(value as string)}>
          <SelectTrigger
            aria-label="Currency"
            className="h-11 gap-2 rounded-md border-transparent bg-transparent px-3 text-xs font-semibold text-mist hover:border-transparent hover:bg-white/5 focus-visible:border-brand-gold focus-visible:ring-brand-gold/20 [&_svg]:text-mist"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((code) => (
              <SelectItem key={code} value={code}>
                {code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
