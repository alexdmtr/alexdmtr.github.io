"use client";

import { createElement, useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

// Scroll-reveal via IntersectionObserver + CSS (no animation library).
// The hidden→visible transition lives in globals.css, gated on the `.js` class
// so content is always visible without JS. Reveals once, then stops observing.
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-70px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  const classes = ["reveal", visible && "is-visible", className]
    .filter(Boolean)
    .join(" ");
  const style = delay
    ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
    : undefined;

  return createElement(as, { ref: setNode, className: classes, style }, children);
}
