"use client";

import { useMemo, useState } from "react";

import { EntryRow } from "@/components/entry-row";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { filterEntries } from "@/lib/filter-entries";
import { ACCESS_LABELS } from "@/lib/format";
import { cn } from "@/lib/utils";
import { ACCESS_MODES, type AccessMode, type Entry } from "@/types/entry";

const selectClassName = cn(
  "h-8 w-full min-w-0 rounded-lg border border-input bg-background px-2.5 text-sm text-foreground outline-none transition-colors scheme-dark",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "dark:bg-input/30 dark:hover:bg-input/50",
);

type CatalogBrowserProps = {
  entries: readonly Entry[];
  organizations: readonly string[];
  years: readonly string[];
};

export function CatalogBrowser({
  entries,
  organizations,
  years,
}: CatalogBrowserProps) {
  const [query, setQuery] = useState("");
  const [organization, setOrganization] = useState("");
  const [year, setYear] = useState("");
  const [access, setAccess] = useState<AccessMode | "">("");

  const filtered = useMemo(
    () =>
      filterEntries(entries, {
        q: query,
        organization,
        year,
        access,
      }),
    [access, entries, organization, query, year],
  );

  const isFiltered = Boolean(query.trim() || organization || year || access);

  function reset() {
    setQuery("");
    setOrganization("");
    setYear("");
    setAccess("");
  }

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-1">
          <Label
            htmlFor="catalog-search"
            className="text-xs font-normal text-muted-foreground"
          >
            Search
          </Label>
          <Input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, lab, or summary"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="catalog-organization"
            className="text-xs font-normal text-muted-foreground"
          >
            Organization
          </Label>
          <select
            id="catalog-organization"
            className={selectClassName}
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
          >
            <option value="">All</option>
            {organizations.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="catalog-year"
            className="text-xs font-normal text-muted-foreground"
          >
            Year
          </Label>
          <select
            id="catalog-year"
            className={selectClassName}
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <option value="">All</option>
            {years.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="catalog-access"
            className="text-xs font-normal text-muted-foreground"
          >
            Access
          </Label>
          <select
            id="catalog-access"
            className={selectClassName}
            value={access}
            onChange={(event) =>
              setAccess(event.target.value as AccessMode | "")
            }
          >
            <option value="">All</option>
            {ACCESS_MODES.map((mode) => (
              <option key={mode} value={mode}>
                {ACCESS_LABELS[mode]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs text-muted-foreground" aria-live="polite">
          {`${filtered.length} of ${entries.length} releases`}
        </p>
        {isFiltered ? (
          <Button type="button" variant="ghost" size="sm" onClick={reset}>
            Clear filters
          </Button>
        ) : null}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-border px-4 py-12 text-center">
          <p className="text-sm font-medium tracking-tight">
            No matching releases
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another search, or reset the filters to see the full catalog.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={reset}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <ul className="mt-2 divide-y divide-border/80">
          {filtered.map((entry) => (
            <EntryRow key={entry.id} entry={entry} />
          ))}
        </ul>
      )}
    </div>
  );
}
