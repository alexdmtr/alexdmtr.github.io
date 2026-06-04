"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = site.nav.map((item) => item.href.replace("#", ""));
const socialIcons = { GitHub: Github, LinkedIn: Linkedin } as const;
const socials = site.socials.map((social) => ({
  ...social,
  Icon: socialIcons[social.label as keyof typeof socialIcons] ?? Github,
}));

export function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-pg-line bg-pg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-[var(--spacing-page)] py-4">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-pg-text font-[family-name:var(--font-display)] text-sm font-bold text-pg-bg transition-transform duration-200 group-hover:-translate-y-0.5">
            AD
          </span>
          <span className="text-sm font-medium tracking-tight">Alex Dumitru</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-pg-accent"
                    : "text-pg-muted hover:text-pg-text"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="hidden h-10 w-10 place-items-center rounded-full border border-pg-line bg-pg-surface text-pg-text backdrop-blur-md transition-colors duration-200 hover:border-pg-line-strong hover:text-pg-accent sm:grid"
            >
              <Icon className="h-[1.05rem] w-[1.05rem]" />
            </a>
          ))}
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-pg-line bg-pg-surface text-pg-text backdrop-blur-md md:hidden"
          >
            {open ? <X className="h-[1.05rem] w-[1.05rem]" /> : <Menu className="h-[1.05rem] w-[1.05rem]" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-pg-line bg-pg-bg/95 backdrop-blur-xl md:hidden"
          aria-label="Sections"
        >
          <div className="mx-auto flex w-full max-w-[1100px] flex-col px-[var(--spacing-page)] py-2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-pg-line py-3 text-pg-muted last:border-0 hover:text-pg-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
