import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";

import { site } from "@/content/site";
import type { Project } from "@/content/site";
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

function ProjectCard({ project }: { project: Project }) {
  const primary = project.liveUrl ?? project.repoUrl;
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border bg-pg-surface backdrop-blur-md transition-colors duration-300 ${
        project.featured
          ? "border-pg-accent/45 shadow-[var(--shadow-glow)]"
          : "border-pg-line hover:border-pg-line-strong"
      }`}
    >
      <a
        href={primary}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title}${project.liveUrl ? " live demo" : " on GitHub"}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-pg-line bg-pg-bg-soft"
      >
        {(project.context || project.wip) && (
          <span
            className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[0.7rem] font-medium tracking-wide backdrop-blur-sm ${
              project.wip
                ? "bg-amber-400/90 text-amber-950"
                : "bg-black/55 text-white"
            }`}
          >
            {project.wip ? "Work in progress" : project.context}
          </span>
        )}
        {project.featured && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-pg-accent px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white">
            Featured
          </span>
        )}
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className={`h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
              project.wip ? "opacity-45 grayscale" : ""
            }`}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pg-accent to-pg-accent-2 p-4 text-center font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em] text-white">
            {project.title}
          </span>
        )}
      </a>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-display)] text-[1.3rem] font-bold tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-pg-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-5 pt-5 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors duration-200 hover:text-pg-accent"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-pg-muted transition-colors duration-200 hover:text-pg-text"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function initials(company: string) {
  const words = company
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return ((words[0]?.[0] ?? "") + (words[1]?.[0] ?? "")).toUpperCase();
}

function CompanyLogo({
  company,
  logo,
  sm,
  href,
}: {
  company: string;
  logo?: string;
  sm?: boolean;
  href?: string;
}) {
  const box = sm
    ? "h-10 w-10 rounded-xl p-2"
    : "h-14 w-14 rounded-2xl p-2.5";
  const tile = (
    <span
      className={`grid ${box} shrink-0 place-items-center overflow-hidden bg-pg-tile shadow-[0_2px_8px_rgba(0,0,0,0.1)] ring-1 ring-black/5 transition-shadow dark:shadow-none dark:ring-white/10`}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${company} logo`}
          width={40}
          height={40}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      ) : (
        <span
          className={`font-[family-name:var(--font-display)] font-bold tracking-tight text-zinc-900 ${sm ? "text-sm" : "text-base"}`}
        >
          {initials(company)}
        </span>
      )}
    </span>
  );

  if (!href) return tile;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${company} website`}
      className="shrink-0 rounded-2xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pg-accent"
    >
      {tile}
    </a>
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

          <ol className="grid gap-8">
            {site.experience.roles.map((role, i) => (
              <Reveal
                as="li"
                key={role.company}
                delay={i * 0.05}
                className="flex gap-5 border-b border-pg-line pb-8 last:border-0 last:pb-0"
              >
                <CompanyLogo company={role.company} logo={role.logo} href={role.url} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold tracking-[-0.02em]">
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors duration-200 hover:text-pg-accent"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </h3>
                    {role.period && <span className="text-sm text-pg-faint">{role.period}</span>}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-pg-accent">{role.role}</p>
                  {role.summary && (
                    <p className="mt-3 max-w-[52rem] leading-relaxed text-pg-muted">{role.summary}</p>
                  )}
                  {role.tags && role.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Earlier / internship roles — de-emphasised */}
          <Reveal className="mt-12 border-t border-pg-line pt-8">
            <h3 className="mb-5 text-xs uppercase tracking-[0.22em] text-pg-faint">
              {site.experience.earlierTitle}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {site.experience.earlier.map((role) => (
                <li key={role.company} className="flex items-center gap-3">
                  <CompanyLogo company={role.company} logo={role.logo} href={role.url} sm />
                  <div className="min-w-0">
                    <p className="truncate font-medium">
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors duration-200 hover:text-pg-accent"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </p>
                    <p className="truncate text-xs text-pg-muted">{role.role}</p>
                    {role.period && (
                      <p className="text-xs text-pg-faint">{role.period}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
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

        {/* Portfolio */}
        <section id="portfolio" className={`${container} mt-[var(--spacing-section)] scroll-mt-24`}>
          <SectionHeading index="03 / Portfolio" title={site.portfolio.title} body={site.portfolio.body} />
          <div className="grid gap-5 sm:grid-cols-2">
            {site.portfolio.projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.08} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
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
