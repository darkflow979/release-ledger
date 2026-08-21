{
  id: "glm-5-2",
  slug: "glm-5-2",
  type: "model",
  name: "GLM-5.2",
  organization: "Zhipu AI (Z.ai)",
  releaseDate: "2026-06-13",
  status: "ga",
  access: "open-weights",
  contextWindow: 1_000_000,
  parameterCount: "744B MoE (≈40B active)",
  architecture: "MoE",
  modalities: ["text"],
  license: "MIT",
  summary:
    "Zhipu AI's GLM-5.2 model: a large Mixture-of-Experts system with strong coding and agent performance. Released with open weights under the MIT license and a 1-million-token context window.",
  whyItMatters:
    "One of the stronger open-weight coding models from a Chinese lab in mid-2026. MIT license makes it particularly practical for commercial and research use.",
  benchmarks: [
    {
      name: "SWE-bench / coding suites",
      score: "Strong open-weight results",
      source: "vendor + community reports",
    },
  ],
  links: [
    {
      label: "Hugging Face",
      href: "https://huggingface.co/THUDM",
      kind: "weights",
    },
  ],
  tags: ["open-weights", "moe", "coding", "long-context", "chinese"],
  lastVerified: "2026-08-20",
},
