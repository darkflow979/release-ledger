import { entries } from "@/data/entries";
import type { Entry, EntryType } from "@/types/entry";

export { filterEntries, type CatalogQuery } from "@/lib/filter-entries";

export function getEntries(): readonly Entry[] {
  return [...entries].sort((a, b) => {
    const byDate = b.releaseDate.localeCompare(a.releaseDate);
    if (byDate !== 0) return byDate;
    return a.name.localeCompare(b.name);
  });
}

export function getEntryBySlug(slug: string): Entry | undefined {
  return entries.find((entry) => entry.slug === slug);
}

export function getEntriesByType(type: EntryType): readonly Entry[] {
  return getEntries().filter((entry) => entry.type === type);
}

export function getOrganizationCount(
  catalog: readonly Entry[] = entries,
): number {
  return new Set(catalog.map((entry) => entry.organization)).size;
}

export function getOrganizations(
  catalog: readonly Entry[] = getEntries(),
): string[] {
  return [...new Set(catalog.map((entry) => entry.organization))].sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getReleaseYears(
  catalog: readonly Entry[] = getEntries(),
): string[] {
  return [
    ...new Set(catalog.map((entry) => entry.releaseDate.slice(0, 4))),
  ].sort((a, b) => b.localeCompare(a));
}

export function getLatestVerifiedAt(
  catalog: readonly Entry[] = getEntries(),
): string | undefined {
  if (catalog.length === 0) return undefined;
  return catalog.reduce(
    (latest, entry) =>
      entry.lastVerified > latest ? entry.lastVerified : latest,
    catalog[0].lastVerified,
  );
}


