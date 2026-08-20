import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>A high-signal record of notable AI releases.</p>
        <p className="flex gap-3">
          <Link href="/about" className="transition-colors hover:text-foreground">
            About & sources
          </Link>
          <span>No accounts.</span>
        </p>
      </div>
    </footer>
  );
}
