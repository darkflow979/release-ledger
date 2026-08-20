import type { AccessMode, EntryStatus, EntryType, Modality } from "@/types/entry";

export const STATUS_LABELS: Record<EntryStatus, string> = {
  preview: "Preview",
  ga: "GA",
  deprecated: "Deprecated",
};

export const ACCESS_LABELS: Record<AccessMode, string> = {
  "closed-api": "Closed API",
  "open-weights": "Open weights",
  mixed: "Mixed",
};

export const TYPE_LABELS: Record<EntryType, string> = {
  model: "Model",
};

export function formatIsoDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatContextWindow(tokens: number): string {
  if (tokens >= 1_000_000) {
    return `${Math.round(tokens / 1_000_000)}M`;
  }

  if (tokens >= 1_000) {
    return `${Math.round(tokens / 1_000)}K`;
  }

  return tokens.toLocaleString("en-US");
}

export function formatModalities(modalities: readonly Modality[]): string {
  return modalities.join(", ");
}
