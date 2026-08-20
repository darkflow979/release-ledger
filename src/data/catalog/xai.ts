import type { Entry } from "@/types/entry";

export const xaiEntries: readonly Entry[] = [
  {
    id: "grok-4-6",
    slug: "grok-4-6",
    type: "model",
    name: "Grok 4.6",
    organization: "xAI",
    releaseDate: "2026-08-12",
    status: "ga",
    access: "closed-api",
    contextWindow: 500_000,
    modalities: ["text", "image", "code"],
    summary:
      "xAI's current Grok flagship on the API: 500K-token context, text and image input, configurable reasoning including an xhigh effort level. Priced at $2 / $6 per 1M tokens below 200K prompt tokens.",
    links: [
      {
        label: "Announcement",
        href: "https://x.ai/news/grok-4-6",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://docs.x.ai/developers/models/grok-4-6",
        kind: "docs",
      },
    ],
    tags: ["frontier", "coding", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "grok-4-5",
    slug: "grok-4-5",
    type: "model",
    name: "Grok 4.5",
    organization: "xAI",
    releaseDate: "2026-07-08",
    status: "ga",
    access: "closed-api",
    contextWindow: 500_000,
    modalities: ["text", "image", "code"],
    summary:
      "xAI coding and agentic flagship preceding Grok 4.6, with a 500K context window. xAI API release notes list 8 Jul 2026; some secondary write-ups cite 16 Jul for a later consumer rollout.",
    links: [
      {
        label: "Announcement",
        href: "https://x.ai/news/grok-4-5",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://docs.x.ai/developers/release-notes",
        kind: "docs",
      },
    ],
    tags: ["frontier", "coding", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "grok-4",
    slug: "grok-4",
    type: "model",
    name: "Grok 4",
    organization: "xAI",
    releaseDate: "2025-07-09",
    status: "ga",
    access: "closed-api",
    contextWindow: 256_000,
    modalities: ["text", "image"],
    summary:
      "xAI's Grok 4 flagship, released with native tool use and real-time search, available via grok.com, SuperGrok, and the xAI API. Launch coverage cited ~256K context; later Grok 4.x docs use 500K — treat 256K as the launch-era figure.",
    links: [
      {
        label: "Announcement",
        href: "https://x.ai/news/grok-4",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://docs.x.ai/",
        kind: "docs",
      },
    ],
    tags: ["frontier", "tool-use", "search"],
    lastVerified: "2026-08-20",
  },
  {
    id: "grok-3",
    slug: "grok-3",
    type: "model",
    name: "Grok 3",
    organization: "xAI",
    releaseDate: "2025-02-19",
    status: "ga",
    access: "closed-api",
    modalities: ["text", "image"],
    summary:
      "xAI's Grok 3 reasoning generation, announced with Think mode and DeepSearch. Context-window figures in secondary sources range from ~128K to 1M; xAI did not publish a single stable number at launch.",
    links: [
      {
        label: "Announcement",
        href: "https://x.ai/news/grok-3",
        kind: "announcement",
      },
    ],
    tags: ["reasoning", "search"],
    lastVerified: "2026-08-20",
  },
];
