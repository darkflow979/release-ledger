import { Badge } from "@/components/ui/badge";
import { ACCESS_LABELS, STATUS_LABELS } from "@/lib/format";
import type { Entry } from "@/types/entry";
import { isModelEntry } from "@/types/entry";

type EntryBadgesProps = {
  entry: Entry;
  showLicense?: boolean;
};

export function EntryBadges({ entry, showLicense = false }: EntryBadgesProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <Badge
        variant={entry.status === "deprecated" ? "destructive" : "secondary"}
      >
        {STATUS_LABELS[entry.status]}
      </Badge>
      {isModelEntry(entry) ? (
        <Badge variant="outline">{ACCESS_LABELS[entry.access]}</Badge>
      ) : null}
      {showLicense && isModelEntry(entry) && entry.license ? (
        <Badge variant="outline">{entry.license}</Badge>
      ) : null}
    </div>
  );
}
