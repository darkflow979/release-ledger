import Link from "next/link";

import { EntryBadges } from "@/components/entry-badges";
import { formatIsoDate } from "@/lib/format";
import type { Entry } from "@/types/entry";

type EntryRowProps = {
  entry: Entry;
};

export function EntryRow({ entry }: EntryRowProps) {
  return (
    <li>
      <Link
        href={`/releases/${entry.slug}`}
        className="grid gap-1 rounded-lg px-3 py-3 transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-medium tracking-tight">{entry.name}</span>
            <span className="text-sm text-muted-foreground">
              {entry.organization}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {entry.summary}
          </p>
          <div className="mt-2">
            <EntryBadges entry={entry} />
          </div>
        </div>
        <time
          dateTime={entry.releaseDate}
          className="shrink-0 font-mono text-xs text-muted-foreground sm:pt-1 sm:text-right"
        >
          {formatIsoDate(entry.releaseDate)}
        </time>
      </Link>
    </li>
  );
}
