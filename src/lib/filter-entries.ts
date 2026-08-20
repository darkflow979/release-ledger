import type { AccessMode, Entry } from "@/types/entry";
import { isModelEntry } from "@/types/entry";

export type CatalogQuery = {
  q?: string;
  organization?: string;
  year?: string;
  access?: AccessMode | "";
};

export function filterEntries(
  catalog: readonly Entry[],
  query: CatalogQuery,
): Entry[] {
  const needle = query.q?.trim().toLowerCase() ?? "";

  return catalog.filter((entry) => {
    if (needle) {
      const haystack =
        `${entry.name} ${entry.organization} ${entry.summary}`.toLowerCase();
      if (!haystack.includes(needle)) return false;
    }

    if (query.organization && entry.organization !== query.organization) {
      return false;
    }

    if (query.year && entry.releaseDate.slice(0, 4) !== query.year) {
      return false;
    }

    if (query.access) {
      if (!isModelEntry(entry) || entry.access !== query.access) return false;
    }

    return true;
  });
}
