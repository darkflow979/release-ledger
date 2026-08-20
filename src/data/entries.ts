import { anthropicEntries } from "@/data/catalog/anthropic";
import { deepseekEntries } from "@/data/catalog/deepseek";
import { googleEntries } from "@/data/catalog/google";
import { metaEntries } from "@/data/catalog/meta";
import { mistralEntries } from "@/data/catalog/mistral";
import { openaiEntries } from "@/data/catalog/openai";
import { otherEntries } from "@/data/catalog/other";
import { qwenEntries } from "@/data/catalog/qwen";
import { xaiEntries } from "@/data/catalog/xai";
import { moonshotEntries } from "./catalog/moonshot";
import { nvidiaEntries } from "./catalog/nvidia";
import type { Entry } from "@/types/entry";

/**
 * Version-controlled catalog. Add a new object in the matching
 * `src/data/catalog/<org>.ts` file, keep summaries sourced from official
 * announcements, and bump `lastVerified`.
 *
 * Sorted at read time (see `src/lib/entries.ts`); insertion order here
 * does not matter.
 *
 * Incomplete or conflicting public facts (see also inline summaries):
 * - Grok 4 context: ~256K at launch vs 500K in later Grok 4.x docs
 * - Grok 3 context: unpublished / inconsistent secondary figures
 * - Grok 4.5 date: API notes 2026-07-08; some recaps cite a later consumer date
 * - Llama 3.3 70B date: llama-models table 2024-12-04 vs public posts 2024-12-06
 * - Claude Opus 4.5 context: 200K used here; some 4.x/5 pages list 1M
 * - DeepSeek-V3 license: originally DeepSeek License; later families use MIT
 * - QwQ-32B context: not stated consistently
 * - Qwen2.5 license: Apache-2.0 for most sizes; 3B/72B used Qwen licenses
 * - Magistral date: changelog 2025-06-09 vs blog 2025-06-10
 * - GPT-5.6 context window: not stated on the launch post
 * - Gemma 4 sizes/context: vary by checkpoint; omitted here
 */
export const entries: readonly Entry[] = [
...nvidiaEntries,
...moonshotEntries,
  ...openaiEntries,
  ...anthropicEntries,
  ...googleEntries,
  ...xaiEntries,
  ...metaEntries,
  ...deepseekEntries,
  ...qwenEntries,
  ...mistralEntries,
  ...otherEntries,
];

const ids = new Set<string>();
const slugs = new Set<string>();
for (const entry of entries) {
  if (ids.has(entry.id)) {
    throw new Error(`Duplicate catalog id: ${entry.id}`);
  }
  if (slugs.has(entry.slug)) {
    throw new Error(`Duplicate catalog slug: ${entry.slug}`);
  }
  ids.add(entry.id);
  slugs.add(entry.slug);
}
