import type { Entry } from "@/types/entry";

export const mistralEntries: readonly Entry[] = [
  {
    id: "mistral-large-3",
    slug: "mistral-large-3",
    type: "model",
    name: "Mistral Large 3",
    organization: "Mistral AI",
    releaseDate: "2025-12-02",
    status: "ga",
    access: "open-weights",
    license: "Apache-2.0",
    parameterCount: "675B MoE (41B active)",
    modalities: ["text", "image", "code"],
    summary:
      "Mistral 3 flagship: a 675B-total / 41B-active MoE released with Ministral 3 dense models, all under Apache 2.0. Mistral's first MoE since Mixtral.",
    links: [
      {
        label: "Announcement",
        href: "https://mistral.ai/news/mistral-3/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "moe", "frontier"],
    lastVerified: "2026-08-20",
  },
  {
    id: "magistral-small",
    slug: "magistral-small",
    type: "model",
    name: "Magistral Small",
    organization: "Mistral AI",
    releaseDate: "2025-06-10",
    status: "ga",
    access: "open-weights",
    license: "Apache-2.0",
    parameterCount: "24B",
    modalities: ["text", "code"],
    summary:
      "Mistral's first reasoning model family. Magistral Small (24B, Apache 2.0) shipped with closed-API Magistral Medium. Docs changelog lists 9 Jun 2025; the blog is dated 10 Jun 2025.",
    links: [
      {
        label: "Announcement",
        href: "https://mistral.ai/news/magistral/",
        kind: "announcement",
      },
      {
        label: "Weights",
        href: "https://huggingface.co/mistralai/Magistral-Small-2506",
        kind: "weights",
      },
    ],
    tags: ["open-weights", "reasoning"],
    lastVerified: "2026-08-20",
  },
  {
    id: "mistral-medium-3",
    slug: "mistral-medium-3",
    type: "model",
    name: "Mistral Medium 3",
    organization: "Mistral AI",
    releaseDate: "2025-05-07",
    status: "ga",
    access: "closed-api",
    modalities: ["text", "image"],
    summary:
      "Mistral's Medium 3 frontier-class multimodal model, released as an API offering on La Plateforme and cloud partners. Docs list deprecation 22 May 2026 and retirement 31 Aug 2026.",
    links: [
      {
        label: "Announcement",
        href: "https://mistral.ai/news/mistral-medium-3/",
        kind: "announcement",
      },
      {
        label: "Docs",
        href: "https://docs.mistral.ai/models/mistral-medium-3-25-05",
        kind: "docs",
      },
    ],
    tags: ["frontier", "multimodal", "enterprise"],
    lastVerified: "2026-08-20",
  },
  {
    id: "mistral-large-2",
    slug: "mistral-large-2",
    type: "model",
    name: "Mistral Large 2",
    organization: "Mistral AI",
    releaseDate: "2024-07-24",
    status: "deprecated",
    access: "mixed",
    license: "Mistral Research License",
    contextWindow: 128_000,
    parameterCount: "123B",
    modalities: ["text", "code"],
    summary:
      "Mistral Large 2 (123B, 128K context), released as weights plus API. Docs changelog lists 23 Jul 2024. Later superseded by Large 3; the original Large 2.0 API alias was retired.",
    links: [
      {
        label: "Announcement",
        href: "https://mistral.ai/news/mistral-large-2407/",
        kind: "announcement",
      },
    ],
    tags: ["frontier", "coding"],
    lastVerified: "2026-08-20",
  },
];
