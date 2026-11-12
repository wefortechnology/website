import { trackEvent } from "./analytics";

export type LeadResult = { ok: true } | { ok: false; error: "not-configured" | "request-failed" };

/**
 * Sends an enquiry to the inbox via Web3Forms (https://web3forms.com).
 * The access key is public by design (it only identifies the receiving inbox);
 * it is read from NEXT_PUBLIC_WEB3FORMS_KEY — see .env.example.
 *
 * `source` names the form that was used (e.g. "contact-form", "quick-enquiry")
 * so the email subject and the GA4 `generate_lead` event both say where the lead came from.
 */
export async function submitLead(
  fields: Record<string, string>,
  source: string
): Promise<LeadResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    console.warn("[leads] NEXT_PUBLIC_WEB3FORMS_KEY is not set; enquiry was not sent.");
    return { ok: false, error: "not-configured" };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New website enquiry — ${source}`,
        from_name: "We For Technology Website",
        source,
        page: typeof window !== "undefined" ? window.location.href : "",
        ...fields,
      }),
    });
    const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
    if (!res.ok || !json?.success) return { ok: false, error: "request-failed" };
  } catch {
    return { ok: false, error: "request-failed" };
  }

  trackEvent("generate_lead", { source });
  return { ok: true };
}
