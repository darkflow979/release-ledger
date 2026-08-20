import type { Entry } from "@/types/entry";

export const moonshotEntries: readonly Entry[] = [
  {
    id: "kimi-k3",
    slug: "kimi-k3",
    type: "model",
    name: "Kimi K3",
    organization: "Moonshot AI",
    releaseDate: "2026-07-16",
    status: "ga",
    access: "mixed",
    contextWindow: 1_048_576,
    modalities: ["text", "image", "video"],
    summary:
      "Moonshot AI's flagship 2.8-trillion-parameter Mixture-of-Experts model (≈104B active). Native multimodal support with a 1-million-token context window. Designed for long-horizon coding, agentic workflows, and knowledge work. Open weights released July 27, 2026 under a custom Kimi K3 license.",
    links: [
      {
        label: "Announcement",
        href: "https://www.kimi.com/blog/kimi-k3",
        kind: "announcement",
      },
      {
        label: "Hugging Face",
        href: "https://huggingface.co/moonshotai/Kimi-K3",
        kind: "weights",
      },
      {
        label: "API Docs",
        href: "https://platform.kimi.com/docs/guide/kimi-k3-quickstart",
        kind: "docs",
      },
    ],
    tags: ["frontier", "open-weights", "moe", "long-context", "multimodal", "chinese"],
    lastVerified: "2026-08-20",
  },
];
