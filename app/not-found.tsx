import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col items-start justify-center gap-6 px-[var(--spacing-page)]">
      <span className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-pg-faint before:inline-block before:h-px before:w-10 before:bg-current">
        Error 404
      </span>
      <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-extrabold leading-[0.88] tracking-[-0.04em]">
        Lost the thread.
      </h1>
      <p className="max-w-[34rem] text-[length:var(--text-hero-copy)] text-pg-muted">
        That page doesn&apos;t exist — or moved somewhere new.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full bg-pg-text px-6 py-3.5 text-sm font-medium text-pg-bg transition-transform duration-200 hover:-translate-y-0.5"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </main>
  );
}
