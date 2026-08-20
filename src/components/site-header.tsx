import Link from "next/link";

import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Release Ledger
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
