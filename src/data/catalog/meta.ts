import type { Entry } from "@/types/entry";

export const metaEntries: readonly Entry[] = [
  {
    id: "llama-4-maverick",
    slug: "llama-4-maverick",
    type: "model",
    name: "Llama 4 Maverick",
    organization: "Meta",
    releaseDate: "2025-04-05",
    status: "ga",
    access: "open-weights",
    license: "Llama 4 Community License",
    contextWindow: 1_000_000,
    parameterCount: "17B active (128 experts)",
    modalities: ["text", "image"],
    summary:
      "Larger Llama 4 MoE released with Scout: 17B active parameters, 128 experts (~400B total), natively multimodal, 1M-token context. Behemoth was previewed as a teacher model and was not released with this drop.",
    links: [
      {
        label: "Announcement",
        href: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "multimodal"],
    lastVerified: "2026-08-20",
  },
  {
    id: "llama-4-scout",
    slug: "llama-4-scout",
    type: "model",
    name: "Llama 4 Scout",
    organization: "Meta",
    releaseDate: "2025-04-05",
    status: "ga",
    access: "open-weights",
    license: "Llama 4 Community License",
    contextWindow: 10_000_000,
    parameterCount: "17B active (16 experts)",
    modalities: ["text", "image"],
    summary:
      "First open-weight natively multimodal Llama 4 model, a 17B-active MoE with 16 experts and up to 10M-token context. Released with Llama 4 Maverick.",
    links: [
      {
        label: "Announcement",
        href: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "long-context", "multimodal"],
    lastVerified: "2026-08-20",
  },
  {
    id: "llama-3-3-70b",
    slug: "llama-3-3-70b",
    type: "model",
    name: "Llama 3.3 70B",
    organization: "Meta",
    releaseDate: "2024-12-06",
    status: "ga",
    access: "open-weights",
    license: "Llama 3.3 Community License",
    contextWindow: 128_000,
    parameterCount: "70B",
    modalities: ["text", "code"],
    summary:
      "Text-only Llama 3.3 70B instruct model, positioned as approaching Llama 3.1 405B quality at 70B serving cost. Meta's llama-models table dates the family 4 Dec 2024; public posts landed 6 Dec 2024.",
    links: [
      {
        label: "Weights",
        href: "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
        kind: "weights",
      },
      {
        label: "Model card",
        href: "https://github.com/meta-llama/llama-models",
        kind: "docs",
      },
    ],
    tags: ["open-weights", "efficient"],
    lastVerified: "2026-08-20",
  },
  {
    id: "llama-3-1-405b",
    slug: "llama-3-1-405b",
    type: "model",
    name: "Llama 3.1 405B",
    organization: "Meta",
    releaseDate: "2024-07-23",
    status: "ga",
    access: "open-weights",
    license: "Llama 3.1 Community License",
    contextWindow: 128_000,
    parameterCount: "405B",
    modalities: ["text", "code"],
    summary:
      "Meta's 405B dense Llama 3.1 model with a 128K context window, released with upgraded 8B and 70B siblings. At the time, the largest openly downloadable dense LLM.",
    links: [
      {
        label: "Announcement",
        href: "https://ai.meta.com/blog/meta-llama-3-1/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/meta-llama/Llama-3.1-405B-Instruct",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "landmark"],
    lastVerified: "2026-08-20",
  },
];
