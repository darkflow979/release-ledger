import { getEntries, getEntryBySlug } from "@/lib/entries";
import { formatIsoDate } from "@/lib/format";
import { createOgImage, OG_SIZE } from "@/lib/og-image";

export const alt = "Release Ledger record";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getEntries().map((entry) => ({ slug: entry.slug }));
}

export default async function ReleaseOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    return createOgImage({ title: "Record not found" });
  }

  return createOgImage({
    title: entry.name,
    subtitle: `${entry.organization} · ${formatIsoDate(entry.releaseDate)}`,
  });
}
