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
{
  id: "qwen3-8-max",
  slug: "qwen3-8-max",
  type: "model",
  name: "Qwen3.8-Max",
  organization: "Alibaba (Qwen)",
  releaseDate: "2026-08-03",
  status: "ga",
  access: "mixed",
  contextWindow: 1_000_000,
  parameterCount: "2.4T MoE (≈95B active)",
  architecture: "Sparse MoE",
  modalities: ["text", "image"],
  license: "Custom (Qwen3.8-Max)",
  pricing: "$2 / $6 per 1M tokens",
  pricingDetail: {
    input: "$2 / 1M",
    output: "$6 / 1M",
    note: "API pricing",
  },
  summary:
    "Alibaba's flagship Qwen3.8-Max model: a 2.4-trillion-parameter sparse MoE with approximately 95B active parameters and a 1-million-token context window. Strong multilingual and agentic performance. Open weights for the large variant were released shortly after the API launch.",
  whyItMatters:
    "Major open-weight release at extreme scale from Alibaba. Continues the pattern of Chinese labs shipping frontier-class open models with very large context windows.",
  links: [
    {
      label: "Announcement",
      href: "https://qwenlm.github.io/",
      kind: "announcement",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/Qwen",
      kind: "weights",
    },
  ],
  tags: ["frontier", "open-weights", "moe", "long-context", "multilingual", "chinese"],
  lastVerified: "2026-08-20",
},
];
