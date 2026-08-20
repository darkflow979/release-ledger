import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { EntryBadges } from "@/components/entry-badges";
import { buttonVariants } from "@/components/ui/button";
import { getEntries, getEntryBySlug } from "@/lib/entries";
import {
  ACCESS_LABELS,
  STATUS_LABELS,
  TYPE_LABELS,
  formatContextWindow,
  formatIsoDate,
  formatModalities,
} from "@/lib/format";
import { cn } from "@/lib/utils";
import { isModelEntry } from "@/types/entry";

type ReleasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEntries().map((entry) => ({ slug: entry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ReleasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Not found" };

  const title = `${entry.name} · ${entry.organization}`;

  return {
    title: entry.name,
    description: entry.summary,
    alternates: {
      canonical: `/releases/${entry.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description: entry.summary,
      url: `/releases/${entry.slug}`,
      publishedTime: `${entry.releaseDate}T00:00:00.000Z`,
      modifiedTime: `${entry.lastVerified}T00:00:00.000Z`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: entry.summary,
    },
  };
}

export default async function ReleasePage({ params }: ReleasePageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();

  const model = isModelEntry(entry) ? entry : null;

  const facts: { label: string; value: string }[] = [
    { label: "Type", value: TYPE_LABELS[entry.type] },
    { label: "Organization", value: entry.organization },
    { label: "Released", value: formatIsoDate(entry.releaseDate) },
    { label: "Status", value: STATUS_LABELS[entry.status] },
  ];

 

  if (model.architecture) {
  facts.push({ label: "Architecture", value: model.architecture });
}

if (model.pricingDetail) {
  const parts: string[] = [];
  if (model.pricingDetail.input) parts.push(`Input ${model.pricingDetail.input}`);
  if (model.pricingDetail.output) parts.push(`Output ${model.pricingDetail.output}`);
  if (model.pricingDetail.note) parts.push(model.pricingDetail.note);
  if (parts.length > 0) {
    facts.push({ label: "Pricing", value: parts.join(" · ") });
  }
} else if (model.pricing) {
  facts.push({ label: "Pricing", value: model.pricing });
}

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10 sm:py-14">
      <Link
        href="/#catalog-heading"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "-ml-2 text-muted-foreground",
        )}
      >
        <ArrowLeft data-icon="inline-start" />
        Catalog
      </Link>

      <header className="mt-6 max-w-2xl">
        <p className="text-sm text-muted-foreground">{entry.organization}</p>
        <h1 className="mt-1 text-3xl font-medium tracking-tight text-balance">
          {entry.name}
        </h1>
        <time
          dateTime={entry.releaseDate}
          className="mt-2 block font-mono text-xs text-muted-foreground"
        >
          {formatIsoDate(entry.releaseDate)}
        </time>
        <div className="mt-4">
          <EntryBadges entry={entry} showLicense />
        </div>
      </header>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground">
        {entry.summary}
      </p>

{model?.whyItMatters ? (
  <section className="mt-8 max-w-2xl" aria-labelledby="why-heading">
    <h2 id="why-heading" className="text-sm font-medium tracking-tight">
      Why it matters
    </h2>
    <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
      {model.whyItMatters}
    </p>
  </section>
) : null}

{model?.benchmarks && model.benchmarks.length > 0 ? (
  <section className="mt-8 max-w-2xl" aria-labelledby="benchmarks-heading">
    <h2 id="benchmarks-heading" className="text-sm font-medium tracking-tight">
      Selected results
    </h2>
    <p className="mt-1 text-xs text-muted-foreground">
      High-signal scores only. Not a full leaderboard.
    </p>
    <dl className="mt-4 divide-y divide-border/80 border-y border-border/80">
      {model.benchmarks.map((b) => (
        <div
          key={b.name}
          className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <dt className="text-xs text-muted-foreground">{b.name}</dt>
          <dd className="text-sm">
            {b.score}
            {b.source ? (
              <span className="ml-2 text-xs text-muted-foreground">
                ({b.source})
              </span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  </section>
) : null}

      <section className="mt-10" aria-labelledby="facts-heading">
        <h2 id="facts-heading" className="text-sm font-medium tracking-tight">
          Record
        </h2>
        <dl className="mt-4 divide-y divide-border/80 border-y border-border/80">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <dt className="text-xs text-muted-foreground">{fact.label}</dt>
              <dd className="text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-sm font-medium tracking-tight">
          Official links
        </h2>
        {entry.links.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No public links recorded.
          </p>
        ) : (
          <ul className="mt-4 flex flex-col gap-2">
            {entry.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-between sm:max-w-md",
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      {entry.tags.length > 0 ? (
        <section className="mt-10" aria-labelledby="tags-heading">
          <h2 id="tags-heading" className="text-sm font-medium tracking-tight">
            Tags
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
            {entry.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
