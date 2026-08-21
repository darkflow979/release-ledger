import Link from "next/link";
import Link from "next/link";
import { EntryBadges } from "@/components/entry-badges";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  formatContextWindow,
  formatIsoDate,
  formatModalities,
} from "@/lib/format";
import type { Entry } from "@/types/entry";
import { isModelEntry } from "@/types/entry";

type EntryCardProps = {
  entry: Entry;
};

export function EntryCard({ entry }: EntryCardProps) {
  const meta = isModelEntry(entry)
    ? [
        entry.parameterCount,
        entry.contextWindow
          ? `${formatContextWindow(entry.contextWindow)} context`
          : undefined,
        formatModalities(entry.modalities),
      ].filter(Boolean)
    : [];

  return (
    <article className="h-full">
      <Link
        href={`/releases/${entry.slug}`}
        className="block h-full rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        <Card
          size="sm"
          className="h-full border-border/70 bg-card/50 transition-all duration-200 hover:border-border hover:bg-card hover:shadow-sm"
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <CardTitle className="text-[15px] leading-snug font-medium">
                  {entry.name}
                </CardTitle>
                <CardDescription className="mt-0.5">
                  {entry.organization}
                </CardDescription>
              </div>
              <time
                dateTime={entry.releaseDate}
                className="shrink-0 font-mono text-xs text-muted-foreground"
              >
                {formatIsoDate(entry.releaseDate)}
              </time>
            </div>
            <div className="mt-3">
              <EntryBadges entry={entry} />
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {entry.summary}
            </p>
            {meta.length > 0 ? (
              <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground/80">
                {meta.join(" · ")}
              </p>
            ) : null}
          </CardContent>
        </Card>
      </Link>
    </article>
  );
}
             
