"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, Undo2 } from "lucide-react";

type ThemePref = "light" | "dark" | "system";

const THEME_KEY = "alexdmtr-theme";

const iconStyle = "h-[1.05rem] w-[1.05rem]";

type ThemeLabels = {
  group: string;
  toLight: string;
  toDark: string;
  system: string;
};

export function ThemeToggle({ labels }: { labels: ThemeLabels }) {
  // Resolved theme, for the toggle's label. SSR + first paint assume dark
  // (matches <html class="dark">); the visible icons and the reset button's
  // visibility are driven by CSS off <html>, not this state.
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    // In system mode, follow the device theme live.
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (window.localStorage.getItem(THEME_KEY)) return;
      document.documentElement.classList.toggle("dark", mql.matches);
      setDark(mql.matches);
    };
    mql.addEventListener("change", onSystemChange);
    return () => mql.removeEventListener("change", onSystemChange);
  }, []);

  function setPref(pref: ThemePref) {
    const root = document.documentElement;
    const nextDark =
      pref === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : pref === "dark";
    root.dataset.themePref = pref;
    root.classList.toggle("dark", nextDark);
    if (pref === "system") window.localStorage.removeItem(THEME_KEY);
    else window.localStorage.setItem(THEME_KEY, pref);
    setDark(nextDark);
  }

  // The pill collapses to a 40px circle (9.5 = 2.375rem buttons + 1px border)
  // matching the nav's other round buttons while the reset segment is hidden.
  return (
    <div
      role="group"
      aria-label={labels.group}
      className="flex items-center overflow-hidden rounded-full border border-pg-line bg-pg-surface backdrop-blur-md transition-colors duration-200 hover:border-pg-line-strong"
    >
      <button
        type="button"
        onClick={() => setPref(dark ? "light" : "dark")}
        aria-label={dark ? labels.toLight : labels.toDark}
        className="grid h-9.5 w-9.5 place-items-center text-pg-text transition-colors duration-200 hover:text-pg-accent"
      >
        <Sun className={`hidden ${iconStyle} dark:block`} />
        <Moon className={`block ${iconStyle} dark:hidden`} />
      </button>
      {/* Shown (via CSS) only while an explicit choice overrides the system theme.
          -ml-[2.4375rem] collapses its slot (2.375rem button + 1px divider) so it
          slides out from behind the pill's edge; starting: + transition-discrete
          animate the display flip in both directions. */}
      <button
        type="button"
        onClick={() => setPref("system")}
        aria-label={labels.system}
        title={labels.system}
        className="grid h-9.5 w-9.5 place-items-center border-l border-pg-line text-pg-muted transition-[display,opacity,margin-left,color] transition-discrete duration-300 motion-reduce:transition-none starting:-ml-[2.4375rem] starting:opacity-0 theme-system:-ml-[2.4375rem] theme-system:hidden theme-system:opacity-0 hover:text-pg-accent"
      >
        {/* Screen icon with a small "return" arrow badged on its bottom-left.
            The mask cuts a hole in the monitor under the badge (circle centred
            on the arrow), so the pill surface shows through in both themes. */}
        <span className="relative">
          <Monitor
            className={`${iconStyle} [mask-image:radial-gradient(circle_0.42rem_at_0.06rem_0.91rem,transparent_99%,black_100%)]`}
          />
          <Undo2 className="absolute -bottom-[0.2rem] -left-[0.28rem] h-[0.68rem] w-[0.68rem] p-px" />
        </span>
      </button>
    </div>
  );
}
