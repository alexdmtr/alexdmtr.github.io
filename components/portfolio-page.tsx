import Link from "next/link";

import { siteCopy } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

import { ThemeControls } from "./theme-controls";

type Props = {
  locale: Locale;
};

export function PortfolioPage({ locale }: Props) {
  const copy = siteCopy[locale];

  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="topbar">
        <Link className="brand" href={`/${locale}`}>
          <span className="brand-mark">AD</span>
          <span>Alex Dumitru</span>
        </Link>

        <nav className="locale-switcher" aria-label="Section navigation">
          <a className="chip" href="#intro">
            {copy.nav.intro}
          </a>
          <a className="chip" href="#systems">
            {copy.nav.systems}
          </a>
          <a className="chip" href="#work">
            {copy.nav.work}
          </a>
          <a className="chip" href="#leadership">
            {copy.nav.leadership}
          </a>
        </nav>

        <div className="controls">
          <nav className="locale-switcher" aria-label="Locale switcher">
            {locales.map((entry) => (
              <Link
                key={entry}
                href={`/${entry}`}
                className="chip"
                aria-current={entry === locale ? "page" : undefined}
              >
                {siteCopy[entry].localeLabel}
              </Link>
            ))}
          </nav>
          <ThemeControls labels={copy.controls} />
        </div>
      </header>

      <main>
        <section className="hero" id="intro">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">{copy.hero.eyebrow}</span>
              <h1>{copy.hero.title}</h1>
              <p className="hero-copy">{copy.hero.intro}</p>
              <div className="hero-actions">
                <a className="primary-link" href="#work">
                  {copy.hero.primaryCta}
                </a>
                <a className="secondary-link" href="#systems">
                  {copy.hero.secondaryCta}
                </a>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="panel-caption">
                <span>{copy.hero.panelTitle}</span>
                <span>{copy.hero.location}</span>
              </div>
              <div className="panel-swatch" aria-hidden="true" />
              <p className="hero-copy">{copy.hero.panelBody}</p>
              <p>{copy.hero.availability}</p>
            </aside>
          </div>
        </section>

        <section className="section" aria-label="Key signals">
          <div className="metrics">
            {copy.stats.map((stat) => (
              <article className="section-card" key={stat.label}>
                <span className="metric-value">{stat.value}</span>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="systems">
          <div className="section-header">
            <h2>{copy.systems.title}</h2>
            <p>{copy.systems.body}</p>
          </div>
          <div className="grid-two">
            {copy.systems.cards.map((card) => (
              <article className="detail-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ul className="detail-list">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-header">
            <h2>{copy.work.title}</h2>
            <p>{copy.work.body}</p>
          </div>
          <div className="projects-grid">
            {copy.work.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-media" aria-hidden="true" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="signal-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="section-header">
            <h2>{copy.leadership.title}</h2>
            <p>{copy.leadership.body}</p>
          </div>
          <div className="grid-two">
            {copy.leadership.items.map((item) => (
              <article className="detail-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="detail-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>{copy.footer}</p>
        </footer>
      </main>
    </div>
  );
}
