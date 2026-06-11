import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Inter_Tight } from "next/font/google";

import { site } from "@/content/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://alexdmtr.github.io"),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
    url: "https://alexdmtr.github.io",
  },
};

// Set the theme class before paint to avoid a flash of the wrong theme.
// Default follows the device (prefers-color-scheme); an explicit toggle choice
// stored in localStorage overrides it. data-theme-pref drives the toggle's icon
// (sun / moon / monitor) via CSS, so it is also set before paint.
const themeScript = `
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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme-pref="system"
      className={`dark ${inter.variable} ${interTight.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="pg-grid" aria-hidden="true" />
        <div className="pg-glow pg-glow--a" aria-hidden="true" />
        <div className="pg-glow pg-glow--b" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
