import type { Entry } from "@/types/entry";

export const nvidiaEntries: readonly Entry[] = [
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
  architecture: "Hybrid Mamba-Attention MoE",
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
