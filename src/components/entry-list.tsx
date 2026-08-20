import { EntryCard } from "@/components/entry-card";
import type { Entry } from "@/types/entry";

type EntryListProps = {
  entries: readonly Entry[];
};

export function EntryList({ entries }: EntryListProps) {
  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No releases recorded yet.</p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {entries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
