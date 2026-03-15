import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <main className="locale-home">
        <span className="eyebrow">404</span>
        <h1>This route does not exist.</h1>
        <p className="hero-copy">
          The localized portfolio pages live at <code>/en</code> and <code>/ro</code>.
        </p>
        <div className="hero-actions">
          <Link className="primary-link" href="/en">
            Open English
          </Link>
          <Link className="secondary-link" href="/ro">
            Deschide Romana
          </Link>
        </div>
      </main>
    </div>
  );
}
