import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Syne } from "next/font/google";

import { site } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
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
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('alexdmtr-theme');
    if (!t) t = 'dark';
    if (t === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
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
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${syne.variable}`}>
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
