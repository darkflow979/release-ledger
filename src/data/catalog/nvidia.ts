import type { Entry } from "@/types/entry";

export const nvidiaEntries: readonly Entry[] = [
  {
    id: "nemotron-3-5-lightning",
    slug: "nemotron-3-5-lightning",
    type: "model",
    name: "Nemotron 3.5 Lightning",
    organization: "NVIDIA",
    releaseDate: "2026-08-11",
    status: "ga",
    access: "open-weights",
    contextWindow: 1_000_000,
    modalities: ["text"],
    summary:
      "NVIDIA's efficient 30B-parameter Mixture-of-Experts model (≈3B active) designed for high-volume agentic workloads. Hybrid Mamba + MoE + Attention architecture with up to 1M context. Open weights under the OpenMDW-1.1 license, with training data and recipes also released.",
    links: [
      {
        label: "Announcement",
        href: "https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/",
        kind: "announcement",
      },
      {
        label: "Hugging Face",
        href: "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16",
        kind: "weights",
      },
      {
        label: "Technical Blog",
        href: "https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents/",
        kind: "docs",
      },
    ],
    tags: ["open-weights", "moe", "agents", "efficient", "nvidia"],
    lastVerified: "2026-08-20",
  },
{
  id: "nemotron-3-ultra",
  slug: "nemotron-3-ultra",
  type: "model",
  name: "Nemotron 3 Ultra",
  organization: "NVIDIA",
  releaseDate: "2026-06-01",
  status: "ga",
  access: "open-weights",
  contextWindow: 1_000_000,
  parameterCount: "550B MoE (≈55B active)",
  modalities: ["text"],
  license: "NVIDIA Open Model License / related open terms",
  summary:
    "NVIDIA's largest open model in the Nemotron 3 family at the time of release. ~550B total parameters with ~55B active, hybrid architecture, and a 1-million-token context window. Released as a high-capability open-weight model aimed at enterprise and research use.",
  whyItMatters:
    "One of the strongest large open-weight models released by a major US hardware company in 2026. Important reference point for American open-model efforts relative to Chinese labs.",
  links: [
    {
      label: "Announcement",
      href: "https://research.nvidia.com/labs/nemotron/Nemotron-3-Ultra/",
      kind: "announcement",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/nvidia",
      kind: "weights",
    },
  ],
  tags: ["open-weights", "moe", "frontier", "nvidia", "long-context"],
  lastVerified: "2026-08-20",
},
];
