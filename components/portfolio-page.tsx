import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { Reveal } from "./reveal";
import { SiteNav } from "./site-nav";

const container = "mx-auto w-full max-w-[1100px] px-[var(--spacing-page)]";

function SectionHeading({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div>
        <span className="mb-4 inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-pg-faint before:inline-block before:h-px before:w-8 before:bg-current">
          {index}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-section)] font-bold leading-[0.98] tracking-[-0.03em]">
          {title}
        </h2>
      </div>
      <p className="text-[1.05rem] leading-relaxed text-pg-muted">{body}</p>
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-pg-line bg-pg-surface px-3 py-1 text-xs text-pg-muted">
      {children}
    </span>
  );
}

export function PortfolioPage() {
  return (
    <>
      <SiteNav />

      <main id="top" className="relative">
        {/* Hero */}
        <section className="flex min-h-screen items-center pb-20 pt-32">
          <div className={container}>
            <span
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-pg-muted opacity-0 [animation-fill-mode:both] animate-[rise-in_0.7s_ease] before:inline-block before:h-px before:w-12 before:bg-current"
            >
              {site.hero.eyebrow}
            </span>

            <h1
              className="my-6 max-w-[14ch] font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-extrabold leading-[0.88] tracking-[-0.04em] opacity-0 [animation-delay:0.08s] [animation-fill-mode:both] animate-[rise-in_0.7s_ease]"
            >
              {site.hero.name}
            </h1>

            <p
              className="max-w-[44rem] text-[length:var(--text-hero-copy)] leading-relaxed text-pg-muted opacity-0 [animation-delay:0.16s] [animation-fill-mode:both] animate-[rise-in_0.7s_ease]"
            >
              {site.hero.intro}
            </p>

            <div
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-pg-muted opacity-0 [animation-delay:0.24s] [animation-fill-mode:both] animate-[rise-in_0.7s_ease]"
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pg-accent" />
                </span>
                {site.hero.status}
              </span>
              <span className="text-pg-faint">·</span>
              <span>{site.hero.location}</span>
            </div>

            <div
              className="mt-10 flex flex-wrap gap-3 opacity-0 [animation-delay:0.32s] [animation-fill-mode:both] animate-[rise-in_0.7s_ease]"
            >
              <a
                href={site.hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-pg-text px-6 py-3.5 text-sm font-medium text-pg-bg transition-transform duration-200 hover:-translate-y-0.5"
              >
                {site.hero.primaryCta.label}
                <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={site.hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-pg-line-strong px-6 py-3.5 text-sm font-medium transition-colors duration-200 hover:border-pg-accent hover:text-pg-accent"
              >
                {site.hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className={container} aria-label="Highlights">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-pg-line bg-pg-line sm:grid-cols-3">
            {site.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                as="article"
                delay={i * 0.08}
                className="bg-pg-bg p-7"
              >
                <span className="block font-[family-name:var(--font-display)] text-[length:clamp(1.9rem,4vw,2.9rem)] font-bold leading-none tracking-[-0.02em] text-pg-accent">
                  {stat.value}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-pg-muted">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="work" className={`${container} mt-[var(--spacing-section)] scroll-mt-24`}>
          <SectionHeading index="01 / Experience" title={site.experience.title} body={site.experience.body} />

          <ol className="relative ml-1 border-l border-pg-line">
            {site.experience.roles.map((role, i) => (
              <Reveal as="li" key={role.company} delay={i * 0.05} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-pg-bg bg-pg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold tracking-[-0.02em]">
                    {role.company}
                  </h3>
                  <span className="text-sm text-pg-faint">{role.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-pg-accent">{role.role}</p>
                <p className="mt-3 max-w-[52rem] leading-relaxed text-pg-muted">{role.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Tech stack */}
        <section id="stack" className={`${container} mt-[var(--spacing-section)] scroll-mt-24`}>
          <SectionHeading index="02 / Toolkit" title={site.stack.title} body={site.stack.body} />
          <div className="grid gap-4 md:grid-cols-2">
            {site.stack.groups.map((group, i) => (
              <Reveal
                key={group.title}
                as="article"
                delay={i * 0.08}
                className="rounded-[var(--radius-card)] border border-pg-line bg-pg-surface p-7 backdrop-blur-md transition-colors duration-300 hover:border-pg-line-strong"
              >
                <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold tracking-[-0.02em]">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm text-pg-muted">{group.body}</p>
                <ul className="mt-5 grid gap-3">
                  {group.points.map((point) => (
                    <li
                      key={point}
                      className="border-t border-pg-line pt-3 text-[0.95rem] first:border-0 first:pt-0"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className={`${container} mt-[var(--spacing-section)] scroll-mt-24`}>
          <SectionHeading index="03 / Leadership" title={site.leadership.title} body={site.leadership.body} />
          <div className="grid gap-4 md:grid-cols-2">
            {site.leadership.items.map((item, i) => (
              <Reveal
                key={item.title}
                as="article"
                delay={i * 0.08}
                className="rounded-[var(--radius-card)] border border-pg-line bg-pg-surface p-7 backdrop-blur-md"
              >
                <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-pg-muted">{item.body}</p>
                <ul className="mt-5 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className={`${container} mt-[var(--spacing-section)]`}>
          <SectionHeading index="04 / Recognition" title={site.awards.title} body={site.awards.body} />
          <div className="grid gap-4 sm:grid-cols-3">
            {site.awards.items.map((award, i) => (
              <Reveal
                key={award.title}
                as="article"
                delay={i * 0.08}
                className="rounded-[var(--radius-card)] border border-pg-line bg-pg-surface p-6 backdrop-blur-md"
              >
                <h3 className="font-[family-name:var(--font-display)] text-[1.1rem] font-bold leading-tight tracking-[-0.01em]">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm text-pg-accent">{award.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className={`${container} mt-[var(--spacing-section)]`}>
          <Reveal className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-pg-line bg-pg-surface p-8 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-pg-faint">
                {site.education.title}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1.6rem] font-bold tracking-[-0.02em]">
                {site.education.degree}
              </h3>
              <p className="mt-1 text-pg-muted">{site.education.school}</p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-pg-accent/40 px-4 py-2 text-sm font-medium text-pg-accent">
              {site.education.detail}
            </span>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className={`${container} mt-[var(--spacing-section)] pb-12`}>
          <div className="flex flex-col gap-4 border-t border-pg-line pt-8 text-sm text-pg-faint sm:flex-row sm:items-center sm:justify-between">
            <p>{site.footer}</p>
            <div className="flex items-center gap-5">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors duration-200 hover:text-pg-accent"
                >
                  {social.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
              <span>© {new Date().getFullYear()} Alex Dumitru</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
