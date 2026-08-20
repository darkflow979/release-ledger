import { createDefaultOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Release Ledger — notable AI model releases";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createDefaultOgImage();
}
