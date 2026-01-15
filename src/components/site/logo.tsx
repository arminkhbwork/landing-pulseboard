import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="PulseBoard home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-sm">
        PB
      </span>
      <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
        PulseBoard
      </span>
    </Link>
  );
}
