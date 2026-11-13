/**
 * Single source of truth for contact details used across the site.
 * Change a value here and every button, link and footer updates together.
 */
export const contact = {
  phoneDisplay: "+91 8510070940",
  phoneTel: "tel:+918510070940",
  whatsappNumber: "918510070940",
  email: "contact@wefortechnology.in",
  emailHref: "mailto:contact@wefortechnology.in",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  address: "Ghaziabad, Uttar Pradesh, India",
  /** Free 30-minute discovery call (Calendly). */
  bookingUrl: "https://calendly.com/wefortechnology/30min",
} as const;

export function whatsappUrl(
  message = "Hello We For Technology, I would like to discuss a project."
) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
