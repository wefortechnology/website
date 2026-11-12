import type { Metadata } from "next";

export const SITE_URL = "https://wefortechnology.in";
export const SITE_NAME = "We For Technology";
export const DEFAULT_OG_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "We For Technology - Digital Solutions That Build Brands",
};

const BRAND_SUFFIX = ` | ${SITE_NAME}`;

/**
 * Next.js replaces (rather than deep-merges) nested `openGraph` / `twitter`
 * objects from parent layouts. This helper fills in the shared defaults
 * (siteName, locale, type, image, Twitter card) for every route, and avoids
 * "| We For Technology | We For Technology" when a title already ends with the brand.
 */
export function withSeo(meta: Metadata): Metadata {
  const rawTitle = typeof meta.title === "string" ? meta.title : undefined;
  const title =
    rawTitle && rawTitle.includes(SITE_NAME) ? { absolute: rawTitle } : meta.title;
  const fullTitle = rawTitle
    ? rawTitle.includes(SITE_NAME)
      ? rawTitle
      : `${rawTitle}${BRAND_SUFFIX}`
    : undefined;

  const og = meta.openGraph ?? {};
  const ogTitle = (og.title as string | undefined) ?? fullTitle;
  const ogDescription = og.description ?? meta.description ?? undefined;
  const ogImages = og.images ?? [DEFAULT_OG_IMAGE];

  return {
    ...meta,
    title,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      ...og,
      title: ogTitle,
      description: ogDescription,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@wefortechnology",
      title: ogTitle,
      description: ogDescription ?? undefined,
      images: [DEFAULT_OG_IMAGE.url],
      ...meta.twitter,
    },
  };
}
