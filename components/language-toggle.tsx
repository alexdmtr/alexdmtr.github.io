"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, Languages } from "lucide-react";

import type { Locale } from "@/content/site";

// Each language is listed in its own name so the menu is legible regardless of
// the page's current locale.
const options: { code: Locale; name: string; href: string }[] = [
  { code: "en", name: "English", href: "/" },
  { code: "ro", name: "Română", href: "/ro" },
];

export function LanguageToggle({
  locale,
  label,
}: {
  locale: Locale;
  /** Localized accessible label, e.g. "Language" / "Limbă". */
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full border border-pg-line bg-pg-surface text-pg-text backdrop-blur-md transition-colors duration-200 hover:border-pg-line-strong hover:text-pg-accent"
      >
        <Languages className="h-[1.05rem] w-[1.05rem]" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={label}
          className="absolute right-0 top-full z-50 mt-2 min-w-[9.5rem] origin-top-right overflow-hidden rounded-2xl border border-pg-line bg-pg-bg/95 p-1 shadow-[var(--shadow-glow)] backdrop-blur-xl"
        >
          {options.map((option) => {
            const active = option.code === locale;
            return (
              <Link
                key={option.code}
                href={option.href}
                hrefLang={option.code}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 ${
                  active
                    ? "text-pg-accent"
                    : "text-pg-muted hover:bg-pg-surface hover:text-pg-text"
                }`}
              >
                {option.name}
                {active && <Check className="h-4 w-4" />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
