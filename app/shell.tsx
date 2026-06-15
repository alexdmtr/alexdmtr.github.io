import type { ReactNode } from "react";
import { Inter, Inter_Tight } from "next/font/google";

// Fonts and the no-flash theme script are shared by both locale root layouts
// (app/(en) and app/(ro)) so they are declared once here. next/font must be
// called at module scope; importing the result keeps a single font instance.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const fontVars = `${inter.variable} ${interTight.variable}`;

// Set the theme class before paint to avoid a flash of the wrong theme.
// Default follows the device (prefers-color-scheme); an explicit toggle choice
// stored in localStorage overrides it. data-theme-pref drives the toggle's icon
// (sun / moon / monitor) via CSS, so it is also set before paint.
export const themeScript = `
(function () {
  document.documentElement.classList.add('js');
  try {
    var t = localStorage.getItem('alexdmtr-theme');
    var pref = t === 'light' || t === 'dark' ? t : 'system';
    var dark = pref === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : pref === 'dark';
    document.documentElement.setAttribute('data-theme-pref', pref);
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

/** Shared <body> with the background mesh/glow layers. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <body>
      <div className="pg-grid" aria-hidden="true" />
      <div className="pg-glow pg-glow--a" aria-hidden="true" />
      <div className="pg-glow pg-glow--b" aria-hidden="true" />
      {children}
    </body>
  );
}
