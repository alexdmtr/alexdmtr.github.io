import type { Metadata } from "next";
import type { ReactNode } from "react";

import { content } from "@/content/site";
import { fontVars, Shell, themeScript } from "../shell";
import "../globals.css";

const t = content.en;

export const metadata: Metadata = {
  metadataBase: new URL("https://alexdmtr.github.io"),
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: "/",
    languages: { "en-GB": "/", "ro-RO": "/ro/", "x-default": "/" },
  },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    type: "website",
    url: "https://alexdmtr.github.io/",
    locale: "en_GB",
    alternateLocale: ["ro_RO"],
  },
};

export default function EnLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
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
