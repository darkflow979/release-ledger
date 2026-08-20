import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-16">
      <p className="font-mono text-xs text-muted-foreground">404</p>
      <h1 className="mt-2 text-2xl font-medium tracking-tight">
        No record for this path.
      </h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The catalog only includes notable releases that have been entered as
        typed data.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "outline" }), "mt-6 w-fit")}
      >
        Back to catalog
      </Link>
    </main>
  );
}
