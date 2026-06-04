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
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const resolve = (): Theme => {
      const saved = window.localStorage.getItem(THEME_KEY) as Theme | null;
      if (saved === "light" || saved === "dark") return saved;
      return mql.matches ? "dark" : "light";
    };

    setTheme(resolve());

    // While the user hasn't made an explicit choice, follow the device theme live.
    const onSystemChange = () => {
      if (window.localStorage.getItem(THEME_KEY)) return;
      const next: Theme = mql.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
    };

    mql.addEventListener("change", onSystemChange);
    return () => mql.removeEventListener("change", onSystemChange);
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
