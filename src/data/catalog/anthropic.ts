import type { Entry } from "@/types/entry";

export const anthropicEntries: readonly Entry[] = [
  {
    id: "claude-sonnet-5",
    slug: "claude-sonnet-5",
    type: "model",
    name: "Claude Sonnet 5",
    organization: "Anthropic",
    releaseDate: "2026-06-30",
    status: "ga",
    access: "closed-api",
    contextWindow: 1_000_000,
    modalities: ["text", "image", "code"],
    summary:
      "Anthropic's Sonnet 5, described as its most agentic Sonnet to date. Available across Claude plans at launch, with a 1M-token context window on the Claude API.",
    links: [
      {
        label: "Announcement",
        href: "https://www.anthropic.com/news/claude-sonnet-5",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://platform.claude.com/docs/en/about-claude/models/overview",
        kind: "docs",
      },
    ],
    tags: ["frontier", "agents", "coding"],
    lastVerified: "2026-08-20",
  },
  {
    id: "claude-opus-4-5",
    slug: "claude-opus-4-5",
    type: "model",
    name: "Claude Opus 4.5",
    organization: "Anthropic",
    releaseDate: "2025-11-24",
    status: "ga",
    access: "closed-api",
    contextWindow: 200_000,
    modalities: ["text", "image", "code"],
    summary:
      "Opus 4.5 flagship in the Claude 4.x line, released under Anthropic's ASL-3 Standard. Context-window figures of 200K versus later 1M for some Claude 4.x/5 models are not always distinguished in public pages.",
    links: [
      {
        label: "Announcement",
        href: "https://www.anthropic.com/news/claude-opus-4-5",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://platform.claude.com/docs/en/about-claude/models/overview",
        kind: "docs",
      },
    ],
    tags: ["frontier", "coding", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "claude-sonnet-4-5",
    slug: "claude-sonnet-4-5",
    type: "model",
    name: "Claude Sonnet 4.5",
    organization: "Anthropic",
    releaseDate: "2025-09-29",
    status: "ga",
    access: "closed-api",
    contextWindow: 1_000_000,
    modalities: ["text", "image", "code"],
    summary:
      "Sonnet 4.5, positioned for agents, coding, and computer use. Starting with this generation Anthropic documented a 1M-token context window on the API.",
    links: [
      {
        label: "Announcement",
        href: "https://www.anthropic.com/news/claude-sonnet-4-5",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://platform.claude.com/docs/en/about-claude/models/overview",
        kind: "docs",
      },
    ],
    tags: ["frontier", "agents", "coding", "computer-use"],
    lastVerified: "2026-08-20",
  },
  {
    id: "claude-opus-4",
    slug: "claude-opus-4",
    type: "model",
    name: "Claude Opus 4",
    organization: "Anthropic",
    releaseDate: "2025-05-22",
    status: "deprecated",
    access: "closed-api",
    contextWindow: 200_000,
    modalities: ["text", "image", "code"],
    summary:
      "Anthropic's Claude Opus 4, launched with Claude Sonnet 4 as the Claude 4 generation. Positioned for coding, long-running agent work, and advanced reasoning. Original 4.0 API aliases were later retired.",
    links: [
      {
        label: "Announcement",
        href: "https://www.anthropic.com/news/claude-4",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://platform.claude.com/docs/en/about-claude/models/overview",
        kind: "docs",
      },
    ],
    tags: ["frontier", "coding", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "claude-3-7-sonnet",
    slug: "claude-3-7-sonnet",
    type: "model",
    name: "Claude 3.7 Sonnet",
    organization: "Anthropic",
    releaseDate: "2025-02-24",
    status: "deprecated",
    access: "closed-api",
    contextWindow: 200_000,
    modalities: ["text", "image", "code"],
    summary:
      "Anthropic's first hybrid reasoning model: standard replies or extended thinking with a visible chain of thought and an API thinking budget. Launched alongside a Claude Code research preview.",
    links: [
      {
        label: "Announcement",
        href: "https://www.anthropic.com/news/claude-3-7-sonnet",
        kind: "announcement",
      },
    ],
    tags: ["reasoning", "coding", "hybrid"],
    lastVerified: "2026-08-20",
  },
  {
    id: "claude-3-5-sonnet",
    slug: "claude-3-5-sonnet",
    type: "model",
    name: "Claude 3.5 Sonnet",
    organization: "Anthropic",
    releaseDate: "2024-06-21",
    status: "deprecated",
    access: "closed-api",
    contextWindow: 200_000,
    modalities: ["text", "image", "code"],
    summary:
      "First Claude 3.5 model, with a 200K context window. Widely used for coding and computer-use research; a second checkpoint followed on 22 Oct 2024. Later retired from the Claude API.",
    links: [
      {
        label: "Announcement",
        href: "https://www.anthropic.com/news/claude-3-5-sonnet",
        kind: "announcement",
      },
    ],
    tags: ["frontier", "coding", "landmark"],
    lastVerified: "2026-08-20",
  },
];
