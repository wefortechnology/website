"use client";

import React from "react";
import { trackEvent, type LeadEvent } from "@/lib/analytics";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** GA4 event to fire on click. */
  event: LeadEvent;
  /** Where on the site the link lives, e.g. "navbar", "footer", "contact-page". */
  location: string;
  children: React.ReactNode;
}

/**
 * A plain <a> that reports clicks to Google Analytics.
 * Use for tel:, mailto: and WhatsApp links so the click shows up as a lead action.
 * Server Components can use this directly.
 */
export default function TrackedLink({
  event,
  location,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(event, { location });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
