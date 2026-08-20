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
];
