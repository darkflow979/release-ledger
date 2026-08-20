/**
 * Catalog types for Release Ledger.
 *
 * `Entry` is a discriminated union on `type`. Today the only variant is
 * `model`. Later categories (infra, agent frameworks, evaluations, …)
 * should be added as additional union members rather than optional fields
 * bolted onto ModelEntry.
 */

/** Calendar date in ISO 8601 form: YYYY-MM-DD (UTC). */
export type IsoDate = string;

export const ENTRY_TYPES = ["model"] as const;
export type EntryType = (typeof ENTRY_TYPES)[number];

export const ENTRY_STATUSES = ["preview", "ga", "deprecated"] as const;
export type EntryStatus = (typeof ENTRY_STATUSES)[number];

export const ACCESS_MODES = ["closed-api", "open-weights", "mixed"] as const;
export type AccessMode = (typeof ACCESS_MODES)[number];

export const MODALITIES = [
  "text",
  "image",
  "audio",
  "video",
  "code",
] as const;
export type Modality = (typeof MODALITIES)[number];

export const LINK_KINDS = [
  "announcement",
  "docs",
  "weights",
  "api",
  "paper",
  "other",
] as const;
export type LinkKind = (typeof LINK_KINDS)[number];

export type EntryLink = {
  label: string;
  href: string;
  kind: LinkKind;
};

type EntryBase = {
  /** Stable identifier. Prefer a kebab-case slug; do not reuse. */
  id: string;
  /** URL-safe unique slug. Currently matches `id`. */
  slug: string;
  name: string;
  organization: string;
  releaseDate: IsoDate;
  status: EntryStatus;
  /** Short, neutral, factual. One or two sentences. */
  summary: string;
  links: readonly EntryLink[];
  tags: readonly string[];
  lastVerified: IsoDate;
};

export type ModelEntry = EntryBase & {
  type: "model";
  access: AccessMode;
  license?: string;
  /** Context window in tokens, when published. */
  contextWindow?: number;
  /** Human-readable size (e.g. "671B MoE (37B active)"). */
  parameterCount?: string;
  modalities: readonly Modality[];
  /** Short note on why this release matters (1–2 sentences). */
  whyItMatters?: string;
  /** Simple pricing string (kept for backward compatibility). */
  pricing?: string;
  /** Structured pricing when available. */
  pricingDetail?: {
    input?: string;
    output?: string;
    note?: string;
  };
  /** Short architecture note (e.g. "MoE", "Dense", "Hybrid Mamba-Transformer"). */
  architecture?: string;
  /** Selected high-signal benchmarks only. Keep very selective. */
  benchmarks?: readonly {
    name: string;
    score: string;
    source?: string;
  }[];
};

export type Entry = ModelEntry;

export function isModelEntry(entry: Entry): entry is ModelEntry {
  return entry.type === "model";
}
