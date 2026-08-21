import type { Metadata } from "next";

import { CatalogBrowser } from "@/components/catalog-browser";
import { EntryCard } from "@/components/entry-card";
import {
  getEntries,
  getLatestVerifiedAt,
  getOrganizationCount,
  getOrganizations,
  getReleaseYears,
} from "@/lib/entries";
import { formatIsoDate } from "@/lib/format";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} · Notable AI model releases`,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

const LATEST_COUNT = 6;

export default function Home() {
  const catalog = getEntries();
  const latest = catalog.slice(0, LATEST_COUNT);
  const organizationCount = getOrganizationCount(catalog);
  const verifiedAt = getLatestVerifiedAt(catalog);

    return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10 sm:py-14">
      {/* Hero */}
      <section className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Models first
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          A public ledger of notable AI model releases.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
          Frontier closed models and significant open-weight systems. Curated for
          signal, not completeness. The catalog is typed so later categories can
          be added without rewriting the core model.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          <span>{catalog.length} releases</span>
          <span className="text-border">·</span>
          <span>{organizationCount} organizations</span>
          {verifiedAt ? (
            <>
              <span className="text-border">·</span>
              <span>Verified {formatIsoDate(verifiedAt)}</span>
            </>
          ) : null}
        </div>
      </section>

      {/* Latest */}
      <section className="mt-14" aria-labelledby="latest-heading">
        <div className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3">
          <h2
            id="latest-heading"
            className="text-sm font-medium tracking-tight"
          >
            Latest
          </h2>
          <p className="text-xs text-muted-foreground">Most recent first</p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {latest.length === 0 ? (
            <p className="text-sm text-muted-foreground sm:col-span-2">
              No releases recorded yet.
            </p>
          ) : (
            latest.map((entry) => <EntryCard key={entry.id} entry={entry} />)
          )}
        </div>
      </section>

      {/* Catalog */}
      <section
        className="mt-20 scroll-mt-24"
        aria-labelledby="catalog-heading"
      >
        <div className="border-b border-border/60 pb-3">
          <h2
            id="catalog-heading"
            className="text-sm font-medium tracking-tight"
          >
            Catalog
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Filter by lab, year, or access. Search names, organizations, and
            summaries.
          </p>
        </div>
        <div className="mt-6">
          <CatalogBrowser
            entries={catalog}
            organizations={getOrganizations(catalog)}
            years={getReleaseYears(catalog)}
          />
        </div>
      </section>
    </main>
  );
   
}
