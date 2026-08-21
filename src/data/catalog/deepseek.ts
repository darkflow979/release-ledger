import type { Entry } from "@/types/entry";

export const deepseekEntries: readonly Entry[] = [
  {
  id: "deepseek-v4-flash",
  slug: "deepseek-v4-flash",
  type: "model",
  name: "DeepSeek-V4-Flash",
  organization: "DeepSeek",
  releaseDate: "2026-07-31",
  status: "ga",
  access: "open-weights",
  contextWindow: 1_000_000,
  parameterCount: "284B MoE (≈13B active)",
  architecture: "MoE",
  modalities: ["text"],
  license: "MIT",
  pricing: "Very low (Flash tier)",
  pricingDetail: {
    input: "Low",
    output: "Low",
    note: "Flash tier pricing",
  },
  summary:
    "Efficient sibling of DeepSeek-V4-Pro. 284B total parameters with ~13B active, 1-million-token context, and MIT-licensed open weights. Positioned for high-throughput and cost-sensitive workloads while retaining strong coding and reasoning performance.",
  whyItMatters:
    "Delivers a large fraction of V4-Pro capability at significantly lower inference cost. Important for high-volume or local agent workloads.",
  links: [
    {
      label: "Announcement",
      href: "https://api-docs.deepseek.com/news/news260424",
      kind: "announcement",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      kind: "weights",
    },
  ],
  tags: ["open-weights", "moe", "efficient", "long-context", "chinese"],
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
{
  id: "deepseek-v4-pro",
  slug: "deepseek-v4-pro",
  type: "model",
  name: "DeepSeek-V4-Pro",
  organization: "DeepSeek",
  releaseDate: "2026-04-24",
  status: "ga",
  access: "open-weights",
  contextWindow: 1_000_000,
  parameterCount: "1.6T MoE (≈49B active)",
  architecture: "MoE with Compressed Sparse Attention",
  modalities: ["text"],
  license: "MIT",
  pricing: "$0.435 / $0.87 per 1M (off-peak varies)",
  pricingDetail: {
    input: "$0.435 / 1M",
    output: "$0.87 / 1M",
    note: "peak/off-peak pricing introduced later",
  },
  summary:
    "DeepSeek's flagship 1.6-trillion-parameter Mixture-of-Experts model (49B active). Supports a 1-million-token context window and strong coding/agentic performance. Open weights released under the MIT license. Official GA build (0813) arrived in August 2026.",
  whyItMatters:
    "One of the strongest open-weight coding and agent models available. MIT license + strong long-context performance make it highly practical for both research and production use.",
  benchmarks: [
    {
      name: "SWE-bench Verified",
      score: "≈80.6%",
      source: "vendor / independent reports",
    },
    {
      name: "Terminal-Bench 2.1",
      score: "87.9 (0813)",
      source: "vendor-reported",
    },
  ],
  links: [
    {
      label: "Announcement",
      href: "https://api-docs.deepseek.com/news/news260424",
      kind: "announcement",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      kind: "weights",
    },
    {
      label: "API Docs",
      href: "https://api-docs.deepseek.com/",
      kind: "docs",
    },
  ],
  tags: ["frontier", "open-weights", "moe", "long-context", "coding", "chinese"],
  lastVerified: "2026-08-20",
  },   // ← end of the last model object
];     // ← end of the array
