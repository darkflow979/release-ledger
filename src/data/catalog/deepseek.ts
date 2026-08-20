import type { Entry } from "@/types/entry";

export const deepseekEntries: readonly Entry[] = [
  {
    id: "deepseek-v4-pro",
    slug: "deepseek-v4-pro",
    type: "model",
    name: "DeepSeek-V4-Pro",
    organization: "DeepSeek",
    releaseDate: "2026-04-24",
    status: "ga",
    access: "open-weights",
    license: "MIT",
    contextWindow: 1_000_000,
    parameterCount: "1.6T MoE (49B active)",
    modalities: ["text", "code"],
    summary:
      "Flagship of the DeepSeek-V4 family, previewed 24 Apr 2026 with V4-Flash and marked GA on 13 Aug 2026. 1.6T total / 49B active MoE with 1M-token context, dual thinking modes, MIT weights.",
    links: [
      {
        label: "Announcement",
        href: "https://api-docs.deepseek.com/news/news260424",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "long-context", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "deepseek-v3-1",
    slug: "deepseek-v3-1",
    type: "model",
    name: "DeepSeek-V3.1",
    organization: "DeepSeek",
    releaseDate: "2025-08-21",
    status: "ga",
    access: "open-weights",
    license: "MIT",
    parameterCount: "671B MoE (37B active)",
    modalities: ["text", "code"],
    summary:
      "V3.1 unified thinking and non-thinking into one checkpoint (API aliases deepseek-chat and deepseek-reasoner). Followed by V3.1-Terminus on 22 Sep 2025. Open weights remain available after V4 replaced it on the official API.",
    links: [
      {
        label: "Announcement",
        href: "https://api-docs.deepseek.com/updates/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/deepseek-ai/DeepSeek-V3.1",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "hybrid"],
    lastVerified: "2026-08-20",
  },
  {
    id: "deepseek-r1",
    slug: "deepseek-r1",
    type: "model",
    name: "DeepSeek-R1",
    organization: "DeepSeek",
    releaseDate: "2025-01-20",
    status: "ga",
    access: "open-weights",
    license: "MIT",
    contextWindow: 128_000,
    parameterCount: "671B MoE (37B active)",
    modalities: ["text", "code"],
    summary:
      "DeepSeek's first-generation open-weight reasoning model, trained from DeepSeek-V3-Base with large-scale reinforcement learning and released under MIT.",
    links: [
      {
        label: "Announcement",
        href: "https://api-docs.deepseek.com/news/news250120",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/deepseek-ai/DeepSeek-R1",
        kind: "weights",
      },
      {
        label: "Paper",
        href: "https://arxiv.org/abs/2501.12948",
        kind: "paper",
      },
    ],
    tags: ["open-weights", "reasoning", "moe"],
    lastVerified: "2026-08-20",
  },
  {
    id: "deepseek-v3",
    slug: "deepseek-v3",
    type: "model",
    name: "DeepSeek-V3",
    organization: "DeepSeek",
    releaseDate: "2024-12-26",
    status: "ga",
    access: "open-weights",
    contextWindow: 128_000,
    parameterCount: "671B MoE (37B active)",
    modalities: ["text", "code"],
    summary:
      "DeepSeek-V3, a 671B-total / 37B-active MoE with MLA attention and 128K context. Original weights used the DeepSeek License; later DeepSeek releases standardized on MIT. Base for R1.",
    links: [
      {
        label: "Weights",
        href: "https://huggingface.co/deepseek-ai/DeepSeek-V3",
        kind: "weights",
      },
      {
        label: "Paper",
        href: "https://arxiv.org/abs/2412.19437",
        kind: "paper",
      },
    ],
    tags: ["open-weights", "moe", "landmark"],
    lastVerified: "2026-08-20",
  },
];
