import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Release Ledger is curated, what counts as notable, and where the data comes from.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About · Release Ledger",
    description:
      "How Release Ledger is curated, what counts as notable, and where the data comes from.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-10 sm:py-14">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        About
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight">
        High-signal, not exhaustive.
      </h1>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-foreground font-medium tracking-tight">
            What this is
          </h2>
          <p className="mt-2">
            Release Ledger is a public catalog of notable AI model releases:
            major frontier closed models and significant open-weight systems.
            It is not a complete index of every checkpoint, fine-tune, or
            research preview.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium tracking-tight">
            How entries are chosen
          </h2>
          <p className="mt-2">
            An entry has to change what a serious practitioner would actually
            use or cite: a new frontier generation, a widely deployed open-weight
            family, or a release that reset expectations for access, context, or
            capability. Minor fine-tunes, distillations, and low-impact
            experiments are omitted on purpose.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium tracking-tight">
            Sources
          </h2>
          <p className="mt-2">
            Facts are taken first from official announcements, model cards, and
            lab documentation. Secondary recaps are used only to locate those
            sources. Summaries stay short, neutral, and dated. Each record has a{" "}
            <span className="text-foreground">last verified</span> date; where
            public sources disagree, the field is omitted or the conflict is
            noted in the summary.
          </p>
        </section>

        <section>
          <h2 className="text-foreground font-medium tracking-tight">
            Data
          </h2>
          <p className="mt-2">
            There is no database and no account system. The catalog is typed
            TypeScript, version-controlled, and designed so “model” is only the
            first category. Infra announcements, agent frameworks, and
            evaluation releases can be added later as new entry types.
          </p>
          <p className="mt-2">
            Browse the{" "}
            <Link href="/" className="text-foreground underline-offset-4 hover:underline">
              catalog
            </Link>
            . To add a release, append an object in{" "}
            <code className="font-mono text-xs text-foreground">
              src/data/catalog/
            </code>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
