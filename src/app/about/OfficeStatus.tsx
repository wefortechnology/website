"use client";

import { useEffect, useState } from "react";

/** True during business hours: Monday–Saturday, 10:00–19:00 India time (matches the contact page). */
function isOfficeOpen(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  return weekday !== "Sun" && hour >= 10 && hour < 19;
}

/** Office open/closed badge for the About page. Renders nothing until mounted to avoid a hydration mismatch. */
export default function OfficeStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOfficeOpen(new Date()));
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (open === null) return <div className="h-[30px]" aria-hidden="true" />;

  return open ? (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Office is open now
    </div>
  ) : (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
      <span className="inline-flex rounded-full h-2 w-2 bg-slate-400" />
      Closed now · opens 10 AM IST, Mon–Sat
    </div>
  );
}
