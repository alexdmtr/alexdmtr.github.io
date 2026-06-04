"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const THEME_KEY = "alexdmtr-theme";

export function ThemeToggle() {
  // SSR + first paint default to dark (matches <html class="dark"> and the
  // no-flash script), so initial markup is consistent.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) as Theme | null;
    const current =
      saved ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem(THEME_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 place-items-center rounded-full border border-pg-line bg-pg-surface text-pg-text backdrop-blur-md transition-colors duration-200 hover:border-pg-line-strong hover:text-pg-accent"
    >
      <Sun className="hidden h-[1.05rem] w-[1.05rem] dark:block" />
      <Moon className="block h-[1.05rem] w-[1.05rem] dark:hidden" />
    </button>
  );
}
