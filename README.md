# Release Ledger

Public, high-signal tracker of **notable** AI model releases: major frontier closed models and significant open-weight systems.

It is not a complete index of every checkpoint or fine-tune. An entry has to change what a practitioner would actually use or cite. Facts come first from official announcements and model cards. Summaries stay short, neutral, and dated.

The catalog is typed TypeScript, kept in git, and designed so “model” is only the first category. Infra announcements, agent frameworks, and evaluation releases can be added later without rewriting the core data model.

No accounts. No database. No backend services.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com)

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build
npm start       # serve the production build
```

## Add a new entry

1. Open the matching file under `src/data/catalog/` (or `other.ts`).
2. Append an object that satisfies `Entry`.
3. Use a unique `id` / `slug`.
4. Keep the summary to one or two sourced sentences. Prefer official announcements over recaps.
5. Set `lastVerified` to today.
6. If a public fact is missing or sources disagree, omit the field and note it in the summary or in the comment block in `src/data/entries.ts`.
7. Run `npm run lint` and `npm run build`.

The homepage reads from `getEntries()`, which sorts by `releaseDate` descending. Detail pages are generated from slugs automatically.

## Deploy

The app is a standard Next.js project. Vercel needs no extra config.

1. Push the repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new). Framework preset: **Next.js**.
3. Set `NEXT_PUBLIC_SITE_URL` to the public origin, for example `https://release-ledger.vercel.app` or your custom domain. This is used for canonical URLs, Open Graph tags, `robots.txt`, and the sitemap.
4. Deploy.

If `NEXT_PUBLIC_SITE_URL` is unset, production metadata falls back to `https://$VERCEL_PROJECT_PRODUCTION_URL`.

Node 22 is declared in `package.json` `engines` and `.nvmrc`.

## Data model

The primary entity is `Entry`, a **discriminated union** on `type`.

Today the only variant is `type: "model"`. New categories should become new union members (for example `InfraEntry`) rather than optional fields piled onto `ModelEntry`.

Defined in `src/types/entry.ts`. Seed data is split by organization under `src/data/catalog/` and re-exported from `src/data/entries.ts`. Read helpers live in `src/lib/entries.ts`.

### Model fields

| Field | Notes |
| --- | --- |
| `id` / `slug` | Stable kebab-case identifier |
| `name` | Public model name |
| `organization` | Lab or company |
| `releaseDate` | ISO date `YYYY-MM-DD` (UTC) |
| `status` | `preview` \| `ga` \| `deprecated` |
| `access` | `closed-api` \| `open-weights` \| `mixed` |
| `license` | Optional (Apache-2.0, MIT, …) |
| `contextWindow` | Optional token count |
| `parameterCount` | Optional human-readable size |
| `modalities` | `text` \| `image` \| `audio` \| `video` \| `code` |
| `summary` | Short, neutral, factual |
| `links` | Announcement, docs, weights, API, paper |
| `tags` | Freeform, lowercase |
| `lastVerified` | ISO date the facts were last checked |

## Project layout

```
src/
  app/           # routes, metadata, sitemap, Open Graph images
  components/    # page components + shadcn/ui primitives
  data/
    catalog/     # seed entries, grouped by organization
    entries.ts   # combined catalog export
  lib/           # accessors, formatting, site URL
  types/         # shared TypeScript types
```
