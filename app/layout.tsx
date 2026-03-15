import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexdmtr.github.io"),
  title: "Alex Dumitru | Lead UI Developer",
  description:
    "Lead UI developer and UI-focused software engineer crafting polished, high-impact product experiences.",
  openGraph: {
    title: "Alex Dumitru | Lead UI Developer",
    description:
      "A bold portfolio landing page focused on product craft, systems thinking, and frontend leadership.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" data-scale="default" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
