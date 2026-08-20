import type { Entry } from "@/types/entry";

export const googleEntries: readonly Entry[] = [
  {
    id: "gemma-4",
    slug: "gemma-4",
    type: "model",
    name: "Gemma 4",
    organization: "Google DeepMind",
    releaseDate: "2026-04-02",
    status: "ga",
    access: "open-weights",
    license: "Apache-2.0",
    modalities: ["text", "image"],
    summary:
      "Google's Gemma 4 open-weight family, announced as models for reasoning and agentic workflows. Google stated Apache 2.0 licensing for this generation. Exact parameter mix and context limits vary by size.",
    links: [
      {
        label: "Announcement",
        href: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://ai.google.dev/gemma/docs/releases",
        kind: "docs",
      },
    ],
    tags: ["open-weights", "reasoning", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "gemini-3-pro",
    slug: "gemini-3-pro",
    type: "model",
    name: "Gemini 3 Pro",
    organization: "Google DeepMind",
    releaseDate: "2025-11-18",
    status: "ga",
    access: "closed-api",
    contextWindow: 1_048_576,
    modalities: ["text", "image", "audio", "video", "code"],
    summary:
      "Start of the Gemini 3 generation. Gemini 3 Pro launched in preview across the Gemini app, Search AI Mode, AI Studio, Vertex AI, and Google Antigravity, with Deep Think as an enhanced reasoning mode.",
    links: [
      {
        label: "Announcement",
        href: "https://blog.google/products-and-platforms/products/gemini/gemini-3-collection/",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://ai.google.dev/gemini-api/docs/models",
        kind: "docs",
      },
    ],
    tags: ["frontier", "multimodal", "agents", "reasoning"],
    lastVerified: "2026-08-20",
  },
  {
    id: "gemini-2-5-pro",
    slug: "gemini-2-5-pro",
    type: "model",
    name: "Gemini 2.5 Pro",
    organization: "Google DeepMind",
    releaseDate: "2025-03-25",
    status: "ga",
    access: "closed-api",
    contextWindow: 1_048_576,
    modalities: ["text", "image", "audio", "video", "code"],
    summary:
      "Google's Gemini 2.5 Pro thinking model, natively multimodal with a 1M-token context window. Previewed in March 2025 and marked stable in June.",
    links: [
      {
        label: "Announcement",
        href: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://ai.google.dev/gemini-api/docs/models#gemini-2.5-pro",
        kind: "docs",
      },
    ],
    tags: ["frontier", "thinking", "long-context", "multimodal"],
    lastVerified: "2026-08-20",
  },
  {
    id: "gemma-3",
    slug: "gemma-3",
    type: "model",
    name: "Gemma 3",
    organization: "Google DeepMind",
    releaseDate: "2025-03-12",
    status: "ga",
    access: "open-weights",
    license: "Gemma",
    contextWindow: 128_000,
    parameterCount: "1B–27B",
    modalities: ["text", "image"],
    summary:
      "Google's Gemma 3 open-weight family (1B to 27B), adding native image understanding and a 128K context window under the Gemma license.",
    links: [
      {
        label: "Announcement",
        href: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-3/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/google/gemma-3-27b-it",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "multimodal", "small-model"],
    lastVerified: "2026-08-20",
  },
  {
    id: "gemini-2-0-flash",
    slug: "gemini-2-0-flash",
    type: "model",
    name: "Gemini 2.0 Flash",
    organization: "Google DeepMind",
    releaseDate: "2024-12-11",
    status: "ga",
    access: "closed-api",
    contextWindow: 1_048_576,
    modalities: ["text", "image", "audio", "video", "code"],
    summary:
      "First public Gemini 2.0 model, announced as Flash Experimental with native tool use and multimodal live APIs. Became the Gemini app default on 30 Jan 2025.",
    links: [
      {
        label: "Announcement",
        href: "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://ai.google.dev/gemini-api/docs/models",
        kind: "docs",
      },
    ],
    tags: ["multimodal", "agents"],
    lastVerified: "2026-08-20",
  },
  {
    id: "gemini-1-5-pro",
    slug: "gemini-1-5-pro",
    type: "model",
    name: "Gemini 1.5 Pro",
    organization: "Google DeepMind",
    releaseDate: "2024-02-15",
    status: "deprecated",
    access: "closed-api",
    contextWindow: 1_048_576,
    modalities: ["text", "image", "audio", "video", "code"],
    summary:
      "Gemini 1.5 Pro introduced a 1M-token context window (later 2M in the API) and a mixture-of-experts architecture. It was Google's first widely deployed long-context Gemini.",
    links: [
      {
        label: "Announcement",
        href: "https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/",
        kind: "announcement",
      },
    ],
    tags: ["long-context", "multimodal", "landmark"],
    lastVerified: "2026-08-20",
  },
{
  id: "gemini-3-7-flash",
  slug: "gemini-3-7-flash",
  type: "model",
  name: "Gemini 3.7 Flash",
  organization: "Google DeepMind",
  releaseDate: "2026-08-13",
  status: "ga",
  access: "closed-api",
  modalities: ["text", "image", "code"],
  summary:
    "Google's fast workhorse model in the Gemini 3.x line, positioned for coding and agentic workloads. Released with significantly lower introductory pricing than its predecessor.",
  whyItMatters:
    "Continues Google's rapid Flash iteration cadence with a clear focus on cost-efficient coding and agent performance. Important competitive move in the high-volume API segment.",
  links: [
    {
      label: "Announcement",
      href: "https://deepmind.google/technologies/gemini/",
      kind: "announcement",
    },
  ],
  tags: ["frontier", "coding", "agents", "efficient"],
  lastVerified: "2026-08-20",
},
];
