/**
 * Single source of truth for contact details used across the site.
 * Change a value here and every button, link and footer updates together.
 */
export const contact = {
  phoneDisplay: "+91 8510070940",
  phoneTel: "tel:+918510070940",
  whatsappNumber: "918510070940",
  email: "wefortechnology.ai@gmail.com",
  emailHref: "mailto:wefortechnology.ai@gmail.com",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  address: "Ghaziabad, Uttar Pradesh, India",
} as const;

export function whatsappUrl(
  message = "Hello We For Technology, I would like to discuss a project."
) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
