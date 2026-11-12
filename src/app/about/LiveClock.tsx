"use client";

import { useEffect, useState } from "react";

const options: Intl.DateTimeFormatOptions = {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

/** Live Ghaziabad (IST) clock; renders a static placeholder until mounted. */
export default function LiveClock() {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Date().toLocaleTimeString("en-US", options));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{localTime ?? "12:00:00 PM"}</>;
}
