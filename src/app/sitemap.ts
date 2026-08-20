import type { MetadataRoute } from "next";

import { getEntries, getLatestVerifiedAt } from "@/lib/entries";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const verified = getLatestVerifiedAt();
  const catalogUpdated = verified
    ? new Date(`${verified}T00:00:00Z`)
    : new Date();

  return [
    {
      url: base,
      lastModified: catalogUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: catalogUpdated,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...getEntries().map((entry) => ({
      url: `${base}/releases/${entry.slug}`,
      lastModified: new Date(`${entry.lastVerified}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
