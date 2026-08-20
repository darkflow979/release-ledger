export const SITE_NAME = "Release Ledger";

export const SITE_DESCRIPTION =
  "A public tracker of notable AI model releases — frontier closed models and significant open-weight systems.";

export const SITE_TAGLINE = "Notable AI model releases";

export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);

  return new URL("http://localhost:3000");
}
