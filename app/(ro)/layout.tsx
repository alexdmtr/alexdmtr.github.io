import type { Metadata } from "next";
import type { ReactNode } from "react";

import { content } from "@/content/site";
import { fontVars, Shell, themeScript } from "../shell";
import "../globals.css";

const t = content.ro;

export const metadata: Metadata = {
  metadataBase: new URL("https://alexdmtr.github.io"),
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: "/ro/",
    languages: { "en-GB": "/", "ro-RO": "/ro/", "x-default": "/" },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    type: "website",
    url: "https://alexdmtr.github.io/ro/",
    locale: "ro_RO",
    alternateLocale: ["en_GB"],
  },
};

export default function RoLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning
      data-theme-pref="system"
      className={`dark ${fontVars}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <Shell>{children}</Shell>
    </html>
  );
}
