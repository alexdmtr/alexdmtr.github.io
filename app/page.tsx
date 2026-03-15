import Link from "next/link";

const locales = [
  {
    code: "en",
    label: "English",
    description:
      "View the portfolio in English with a product-led narrative and detailed case-study framing."
  },
  {
    code: "ro",
    label: "Romana",
    description:
      "Explore the same experience in Romanian, with localized copy and interface controls."
  }
];

export default function Home() {
  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <main className="locale-home">
        <span className="eyebrow">Choose a locale</span>
        <h1>Lead UI craft, rendered with intention.</h1>
        <p className="hero-copy">
          This portfolio is built as a Next.js app with localized routes, adaptive
          display sizing, and a high-contrast visual language designed to feel more
          like a product launch than a placeholder homepage.
        </p>
        <div className="locale-grid">
          {locales.map((locale) => (
            <Link className="locale-card" key={locale.code} href={`/${locale.code}`}>
              <h2>{locale.label}</h2>
              <p>{locale.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
