import type { Entry } from "@/types/entry";

export const qwenEntries: readonly Entry[] = [
  {
    id: "qwen3-235b-a22b",
    slug: "qwen3-235b-a22b",
    type: "model",
    name: "Qwen3-235B-A22B",
    organization: "Alibaba (Qwen)",
    releaseDate: "2025-04-29",
    status: "ga",
    access: "open-weights",
    license: "Apache-2.0",
    contextWindow: 131_072,
    parameterCount: "235B MoE (22B active)",
    modalities: ["text", "code"],
    summary:
      "Flagship Mixture-of-Experts model in Alibaba's Qwen3 family: 235B total parameters with 22B active, released with dense and MoE siblings under Apache 2.0.",
    links: [
      {
        label: "Announcement",
        href: "https://qwenlm.github.io/blog/qwen3/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/Qwen/Qwen3-235B-A22B",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "hybrid-reasoning"],
    lastVerified: "2026-08-20",
  },
  {
    id: "qwq-32b",
    slug: "qwq-32b",
    type: "model",
    name: "QwQ-32B",
    organization: "Alibaba (Qwen)",
    releaseDate: "2025-03-06",
    status: "ga",
    access: "open-weights",
    license: "Apache-2.0",
    parameterCount: "32B",
    modalities: ["text", "code"],
    summary:
      "Qwen's 32B open-weight reasoning model (QwQ), trained to compete with much larger reasoning systems on math and coding. Context length is not stated consistently across the blog and later checkpoints.",
    links: [
      {
        label: "Announcement",
        href: "https://qwenlm.github.io/blog/qwq-32b/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/Qwen/QwQ-32B",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "reasoning"],
    lastVerified: "2026-08-20",
  },
  {
    id: "qwen2-5",
    slug: "qwen2-5",
    type: "model",
    name: "Qwen2.5",
    organization: "Alibaba (Qwen)",
    releaseDate: "2024-09-18",
    status: "ga",
    access: "open-weights",
    license: "Apache-2.0",
    contextWindow: 131_072,
    parameterCount: "0.5B–72B",
    modalities: ["text", "code"],
    summary:
      "Qwen2.5 dense family (0.5B–72B) pretrained on 18T tokens, with 128K context on most sizes. Apache 2.0 except the 3B and 72B variants, which used Qwen licenses.",
    links: [
      {
        label: "Announcement",
        href: "https://qwenlm.github.io/blog/qwen2.5/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/Qwen/Qwen2.5-72B-Instruct",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "dense"],
    lastVerified: "2026-08-20",
  },
];
