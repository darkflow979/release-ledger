import type { Entry } from "@/types/entry";

export const otherEntries: readonly Entry[] = [
  {
    id: "kimi-k2",
    slug: "kimi-k2",
    type: "model",
    name: "Kimi K2",
    organization: "Moonshot AI",
    releaseDate: "2025-07-11",
    status: "ga",
    access: "open-weights",
    license: "Modified MIT",
    contextWindow: 128_000,
    parameterCount: "1T MoE (32B active)",
    modalities: ["text", "code"],
    summary:
      "Moonshot's 1T-total / 32B-active MoE, released as open weights for agentic coding and tool use. Launch context was 128K; the 5 Sep 2025 instruct checkpoint raised it to 256K. The K2 API line was later sunset in favor of K3.",
    links: [
      {
        label: "Paper",
        href: "https://arxiv.org/abs/2507.20534",
        kind: "paper",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/moonshotai/Kimi-K2-Instruct",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "agents", "coding"],
    lastVerified: "2026-08-20",
  },
  {
    id: "glm-4-5",
    slug: "glm-4-5",
    type: "model",
    name: "GLM-4.5",
    organization: "Zhipu AI (Z.ai)",
    releaseDate: "2025-07-28",
    status: "ga",
    access: "open-weights",
    license: "MIT",
    contextWindow: 128_000,
    parameterCount: "355B MoE (32B active)",
    modalities: ["text", "code"],
    summary:
      "Z.ai's GLM-4.5 hybrid reasoning MoE (355B total / 32B active), released with GLM-4.5-Air under MIT. Thinking and non-thinking modes in one family, aimed at agents and coding.",
    links: [
      {
        label: "Weights",
        href: "https://huggingface.co/zai-org/GLM-4.5",
        kind: "weights",
      },
      {
        label: "Paper",
        href: "https://arxiv.org/abs/2508.06471",
        kind: "paper",
      },
    ],
    tags: ["open-weights", "moe", "agents", "hybrid"],
    lastVerified: "2026-08-20",
  },
  {
    id: "command-a",
    slug: "command-a",
    type: "model",
    name: "Command A",
    organization: "Cohere",
    releaseDate: "2025-03-13",
    status: "ga",
    access: "open-weights",
    license: "CC-BY-NC",
    contextWindow: 256_000,
    parameterCount: "111B",
    modalities: ["text", "code"],
    summary:
      "Cohere's 111B Command A, released with weights under a non-commercial Creative Commons license and as an enterprise API. 256K context; later Command A Reasoning and Translate variants followed.",
    links: [
      {
        label: "Announcement",
        href: "https://cohere.com/blog/command-a",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/CohereLabs/c4ai-command-a-03-2025",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "enterprise"],
    lastVerified: "2026-08-20",
  },
  {
    id: "amazon-nova-pro",
    slug: "amazon-nova-pro",
    type: "model",
    name: "Amazon Nova Pro",
    organization: "Amazon",
    releaseDate: "2024-12-03",
    status: "ga",
    access: "closed-api",
    contextWindow: 300_000,
    modalities: ["text", "image", "video"],
    summary:
      "Amazon's Nova Pro, the mid/high tier of the first-party Nova family announced at re:Invent 2024. Closed API on Bedrock; 300K context is the commonly published figure for Pro.",
    links: [
      {
        label: "Announcement",
        href: "https://aws.amazon.com/blogs/aws/introducing-amazon-nova-frontier-intelligence-and-industry-leading-price-performance/",
        kind: "announcement",
      },
    ],
    tags: ["multimodal", "enterprise"],
    lastVerified: "2026-08-20",
  },
];
