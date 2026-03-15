"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Scale = "default" | "large";
type Labels = {
  switchToLight: string;
  switchToDark: string;
  largeType: string;
  standardType: string;
};

const THEME_KEY = "alexdmtr-theme";
const SCALE_KEY = "alexdmtr-scale";

export function ThemeControls({ labels }: { labels: Labels }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [scale, setScale] = useState<Scale>("default");

  useEffect(() => {
    const savedTheme = (window.localStorage.getItem(THEME_KEY) as Theme | null) ?? "dark";
    const savedScale = (window.localStorage.getItem(SCALE_KEY) as Scale | null) ?? "default";
    setTheme(savedTheme);
    setScale(savedScale);
    document.documentElement.dataset.theme = savedTheme;
    document.documentElement.dataset.scale = savedScale;
  }, []);

  function updateTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_KEY, nextTheme);
  }

  function updateScale(nextScale: Scale) {
    setScale(nextScale);
    document.documentElement.dataset.scale = nextScale;
    window.localStorage.setItem(SCALE_KEY, nextScale);
  }

  return (
    <div className="controls" aria-label="Theme controls">
      <button
        className="control-button"
        onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
        type="button"
      >
        {theme === "dark" ? labels.switchToLight : labels.switchToDark}
      </button>
      <button
        className="control-button"
        onClick={() => updateScale(scale === "default" ? "large" : "default")}
        type="button"
      >
        {scale === "large" ? labels.standardType : labels.largeType}
      </button>
    </div>
  );
}
