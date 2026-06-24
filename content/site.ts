export type Stat = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  period?: string;
  summary?: string;
  tags?: string[];
  /** Path to a bundled logo (in public/). Falls back to an initials monogram if omitted. */
  logo?: string;
  /** Company / institution website; makes the name and logo a link. */
  url?: string;
};

export type StackGroup = {
  title: string;
  body: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  /** Thumbnail in public/projects/. Falls back to a gradient placeholder if omitted. */
  image?: string;
  /** Dark-mode thumbnail, shown instead of `image` when the site theme is dark. */
  imageDark?: string;
  /** Short context badge shown on the thumbnail, e.g. "Hackathon". */
  context?: string;
  /** Highlights the card with an accent border + "Featured" label. */
  featured?: boolean;
  /** Marks the project as work-in-progress (badge + dimmed thumbnail). */
  wip?: boolean;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    name: string;
    intro: string;
    location: string;
    status: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  stats: Stat[];
  stack: {
    title: string;
    body: string;
    groups: StackGroup[];
  };
  experience: {
    title: string;
    body: string;
    roles: Experience[];
    earlierTitle: string;
    earlier: Experience[];
  };
  portfolio: {
    title: string;
    body: string;
    projects: Project[];
  };
  socials: ContactLink[];
  footer: string;
  /** Interface chrome strings (section eyebrows, badges, control labels). */
  ui: {
    sections: { experience: string; toolkit: string; portfolio: string };
    project: { featured: string; wip: string };
    nav: { sections: string; openMenu: string; closeMenu: string };
    theme: { group: string; toLight: string; toDark: string; system: string };
    language: string;
  };
};

export type Locale = "en" | "ro";

export const locales: Locale[] = ["en", "ro"];
export const defaultLocale: Locale = "en";

/** Home path for each locale (English at root, Romanian under /ro). */
export const localeHref: Record<Locale, string> = {
  en: "/",
  ro: "/ro",
};

const en: SiteContent = {
  meta: {
    title: "Alex Dumitru",
    description:
      "Lead UI developer building high-performance web applications at quantitative trading firms.",
  },
  nav: [
    { label: "Experience", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Portfolio", href: "#portfolio" },
  ],
  hero: {
    eyebrow: "Lead UI Developer",
    name: "Alex Dumitru",
    intro:
      "I build high-performance web applications at quantitative trading firms. Currently at QRT in London, engineering React/TypeScript portfolio-analysis tools with real-time data streaming.",
    location: "London, UK",
    status: "Open to interesting conversations",
    primaryCta: { label: "Experience", href: "#work" },
    secondaryCta: { label: "Portfolio", href: "#portfolio" },
  },
  // Metrics tiles hidden for now — headlines felt too niche. Restore by
  // repopulating this array (the Metrics section renders only when non-empty).
  // { value: "8+", label: "years of professional engineering, since 2016" },
  // { value: "800MB → 0.77KB", label: "network payload reduction at QRT" },
  // { value: "2min → 1s", label: "grid interaction time improvement" },
  stats: [],
  stack: {
    title: "Tech stack",
    body: "Full-stack capability with a deep frontend specialism. I work across the stack but focus on building fast, maintainable interfaces for data-heavy applications.",
    groups: [
      {
        title: "Frontend",
        body: "Core expertise in React and TypeScript for complex financial UIs.",
        points: [
          "React, TypeScript, Next.js",
          "AG Grid, eCharts, MUI, TanStack Query",
          "Module federation, micro-frontends",
          "CSS-in-JS, Tailwind, responsive design",
        ],
      },
      {
        title: "Backend & infrastructure",
        body: "Comfortable building APIs, real-time pipelines, and deployment infrastructure.",
        points: [
          "Node.js, C#, ASP.NET, Go, Python",
          "GraphQL, gRPC, SignalR, WebSockets",
          "SQL Server, PostgreSQL",
          "Docker, CI/CD, Git workflows",
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    body: "A career spanning quantitative finance, gaming infrastructure, and fintech — focused on building tools that handle complexity without passing it to the user.",
    roles: [
      {
        company: "Qube Research & Technologies",
        role: "Lead UI Developer",
        period: "2023 — present",
        summary:
          "Led the React/TypeScript migration of portfolio-analysis tools. Implemented AG Grid viewport-model streaming over WebSockets, cutting initial network payloads from 800MB to 0.77KB. Cross-office collaboration between London and Paris.",
        tags: ["React", "TypeScript", "AG Grid", "WebSockets", "C#"],
        logo: "/logos/qrt.png",
        url: "https://www.qube-rt.com",
      },
      {
        company: "Citadel",
        role: "Software Engineer",
        period: "2020 — 2022",
        summary:
          "Built trading dashboard applications with React, TypeScript, GraphQL and gRPC. Automated PnL analysis workflows and co-led development of a bank-wires processing application.",
        tags: ["React", "TypeScript", "GraphQL", "gRPC", "MUI"],
        logo: "/logos/citadel.png",
        url: "https://www.citadel.com",
      },
      {
        company: "University of Manchester",
        role: "BSc. Computer Science & Mathematics",
        period: "2017 — 2020",
        summary: "Joint honours across computer science and mathematics.",
        tags: ["First Class Honours"],
        logo: "/logos/manchester.svg",
        url: "https://www.manchester.ac.uk",
      },
    ],
    earlierTitle: "Earlier roles & internships",
    earlier: [
      {
        company: "Improbable",
        role: "Software Engineering Intern",
        period: "2019",
        logo: "/logos/improbable.png",
        url: "https://www.improbable.io",
      },
      {
        company: "Morgan Stanley",
        role: "Technology Analyst Intern",
        period: "2018",
        logo: "/logos/morgan-stanley.png",
        url: "https://www.morganstanley.com",
      },
      {
        company: "Pentalog",
        role: "Software Developer",
        period: "2017",
        logo: "/logos/pentalog.png",
        url: "https://www.globant.com",
      },
      {
        company: "EXE Software",
        role: "Web Developer",
        period: "2016",
        logo: "/logos/exe.png",
        url: "https://www.exesoftware.ro",
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    body: "A few things I've built outside of work — mostly finance and data interfaces, plus the odd experiment.",
    projects: [
      {
        title: "Passport Power",
        description:
          "Pick a passport to see its global mobility score and visa requirements — visa-free, on-arrival, eTA and e-Visa — across 199 destinations.",
        image: "/projects/passport-power.png",
        imageDark: "/projects/passport-power-dark.png",
        featured: true,
        tags: ["React", "TypeScript", "Data viz"],
        liveUrl: "https://passport-power.vercel.app",
        repoUrl: "https://github.com/alexdmtr/passport-power",
      },
      {
        title: "Financial Dashboard",
        description:
          "A personal-finance dashboard for tracking net worth, income, spending and trends, with interactive charts and category breakdowns.",
        image: "/projects/financial-dashboard.png",
        imageDark: "/projects/financial-dashboard-dark.png",
        featured: true,
        tags: ["React", "TypeScript", "Charts"],
        liveUrl: "https://financial-dashboard-beta-amber.vercel.app",
        repoUrl: "https://github.com/alexdmtr/financial-dashboard",
      },
      {
        title: "CodeWorks",
        description:
          "An online Java compiler, editor and coding academy — write and run code in the browser and solve practice problems. Built at a hackathon.",
        image: "/projects/codeworks.png",
        context: "Hackathon",
        featured: true,
        tags: ["Node.js", "Docker", "Socket.IO", "Firebase"],
        liveUrl: "https://thecodeworks.fly.dev",
        repoUrl: "https://github.com/alexdmtr/codeworks",
      },
      {
        title: "Car Physics",
        description:
          "An interactive projectile-physics simulator with adjustable launch angle, mass and friction, built for a university physics module.",
        image: "/projects/car-physics.png",
        context: "University project",
        featured: true,
        tags: ["JavaScript", "Simulation", "Physics"],
        liveUrl: "https://car-physics-eta.vercel.app",
        repoUrl: "https://github.com/alexdmtr/car-physics",
      },
      {
        title: "Strategy Comparison",
        description:
          "A sortable grid for comparing quantitative trading strategies across performance metrics — a focused build in dense, data-heavy table UX.",
        image: "/projects/strategy-comparison.png",
        imageDark: "/projects/strategy-comparison-dark.png",
        context: "Concept",
        tags: ["React", "TypeScript", "Data grid"],
        liveUrl: "https://strategy-comparison.vercel.app",
        repoUrl: "https://github.com/alexdmtr/strategy-comparison",
      },
      {
        title: "Order Book",
        description:
          "A live crypto order book with real-time depth visualisation for BTC-USDT — a focused build demonstrating streaming-data UI.",
        image: "/projects/order-book.png",
        imageDark: "/projects/order-book-dark.png",
        context: "Concept",
        tags: ["React", "TypeScript", "Real-time"],
        liveUrl: "https://order-book-phi-peach.vercel.app",
        repoUrl: "https://github.com/alexdmtr/order-book",
      },
    ],
  },
  socials: [
    {
      label: "GitHub",
      value: "github.com/alexdmtr",
      href: "https://github.com/alexdmtr",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alexdmtr",
      href: "https://www.linkedin.com/in/alexdmtr",
    },
  ],
  footer: "Designed & built with Next.js, Tailwind CSS and Framer Motion.",
  ui: {
    sections: {
      experience: "Experience",
      toolkit: "Toolkit",
      portfolio: "Portfolio",
    },
    project: { featured: "Featured", wip: "Work in progress" },
    nav: { sections: "Sections", openMenu: "Open menu", closeMenu: "Close menu" },
    theme: {
      group: "Theme",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      system: "Return to system theme",
    },
    language: "Language",
  },
};

const ro: SiteContent = {
  meta: {
    title: "Alex Dumitru",
    description:
      "Dezvoltator UI principal care construiește aplicații web de înaltă performanță pentru firme de tranzacționare cantitativă.",
  },
  nav: [
    { label: "Experiență", href: "#work" },
    { label: "Tehnologii", href: "#stack" },
    { label: "Portofoliu", href: "#portfolio" },
  ],
  hero: {
    eyebrow: "Dezvoltator UI Principal",
    name: "Alex Dumitru",
    intro:
      "Construiesc aplicații web de înaltă performanță pentru firme de tranzacționare cantitativă. În prezent la QRT în Londra, unde dezvolt instrumente de analiză a portofoliilor în React/TypeScript, cu streaming de date în timp real.",
    location: "Londra, Marea Britanie",
    status: "Deschis la conversații interesante",
    primaryCta: { label: "Experiență", href: "#work" },
    secondaryCta: { label: "Portofoliu", href: "#portfolio" },
  },
  stats: [],
  stack: {
    title: "Tehnologii",
    body: "Capabilitate full-stack cu o specializare profundă pe frontend. Lucrez pe întreaga stivă, dar mă concentrez pe construirea de interfețe rapide și ușor de întreținut pentru aplicații cu volume mari de date.",
    groups: [
      {
        title: "Frontend",
        body: "Expertiză de bază în React și TypeScript pentru interfețe financiare complexe.",
        points: [
          "React, TypeScript, Next.js",
          "AG Grid, eCharts, MUI, TanStack Query",
          "Module federation, micro-frontends",
          "CSS-in-JS, Tailwind, design responsive",
        ],
      },
      {
        title: "Backend și infrastructură",
        body: "Confortabil cu construirea de API-uri, pipeline-uri în timp real și infrastructură de deployment.",
        points: [
          "Node.js, C#, ASP.NET, Go, Python",
          "GraphQL, gRPC, SignalR, WebSockets",
          "SQL Server, PostgreSQL",
          "Docker, CI/CD, fluxuri de lucru Git",
        ],
      },
    ],
  },
  experience: {
    title: "Experiență",
    body: "O carieră care acoperă finanțe cantitative, infrastructură de gaming și fintech — axată pe construirea de instrumente care gestionează complexitatea fără să o transfere utilizatorului.",
    roles: [
      {
        company: "Qube Research & Technologies",
        role: "Dezvoltator UI Principal",
        period: "2023 — prezent",
        summary:
          "Am condus migrarea în React/TypeScript a instrumentelor de analiză a portofoliilor. Am implementat streaming pe modelul viewport din AG Grid prin WebSockets, reducând volumul inițial de date de rețea de la 800MB la 0,77KB. Colaborare între birourile din Londra și Paris.",
        tags: ["React", "TypeScript", "AG Grid", "WebSockets", "C#"],
        logo: "/logos/qrt.png",
        url: "https://www.qube-rt.com",
      },
      {
        company: "Citadel",
        role: "Inginer Software",
        period: "2020 — 2022",
        summary:
          "Am construit aplicații de dashboard pentru tranzacționare cu React, TypeScript, GraphQL și gRPC. Am automatizat fluxuri de analiză PnL și am co-condus dezvoltarea unei aplicații de procesare a transferurilor bancare.",
        tags: ["React", "TypeScript", "GraphQL", "gRPC", "MUI"],
        logo: "/logos/citadel.png",
        url: "https://www.citadel.com",
      },
      {
        company: "University of Manchester",
        role: "Licență în Informatică și Matematică",
        period: "2017 — 2020",
        summary: "Specializare dublă în informatică și matematică.",
        tags: ["First Class Honours"],
        logo: "/logos/manchester.svg",
        url: "https://www.manchester.ac.uk",
      },
    ],
    earlierTitle: "Roluri anterioare și stagii",
    earlier: [
      {
        company: "Improbable",
        role: "Stagiar Inginerie Software",
        period: "2019",
        logo: "/logos/improbable.png",
        url: "https://www.improbable.io",
      },
      {
        company: "Morgan Stanley",
        role: "Stagiar Analist Tehnologie",
        period: "2018",
        logo: "/logos/morgan-stanley.png",
        url: "https://www.morganstanley.com",
      },
      {
        company: "Pentalog",
        role: "Dezvoltator Software",
        period: "2017",
        logo: "/logos/pentalog.png",
        url: "https://www.globant.com",
      },
      {
        company: "EXE Software",
        role: "Dezvoltator Web",
        period: "2016",
        logo: "/logos/exe.png",
        url: "https://www.exesoftware.ro",
      },
    ],
  },
  portfolio: {
    title: "Portofoliu",
    body: "Câteva lucruri pe care le-am construit în afara muncii — în mare parte interfețe de finanțe și date, plus câte un experiment ocazional.",
    projects: [
      {
        title: "Passport Power",
        description:
          "Alege un pașaport pentru a-i vedea scorul de mobilitate globală și cerințele de viză — fără viză, la sosire, eTA și e-Visa — pentru 199 de destinații.",
        image: "/projects/passport-power.png",
        imageDark: "/projects/passport-power-dark.png",
        featured: true,
        tags: ["React", "TypeScript", "Vizualizare date"],
        liveUrl: "https://passport-power.vercel.app",
        repoUrl: "https://github.com/alexdmtr/passport-power",
      },
      {
        title: "Financial Dashboard",
        description:
          "Un dashboard de finanțe personale pentru urmărirea averii nete, veniturilor, cheltuielilor și tendințelor, cu grafice interactive și defalcări pe categorii.",
        image: "/projects/financial-dashboard.png",
        imageDark: "/projects/financial-dashboard-dark.png",
        featured: true,
        tags: ["React", "TypeScript", "Grafice"],
        liveUrl: "https://financial-dashboard-beta-amber.vercel.app",
        repoUrl: "https://github.com/alexdmtr/financial-dashboard",
      },
      {
        title: "CodeWorks",
        description:
          "Un compilator, editor și academie de programare Java online — scrii și rulezi cod în browser și rezolvi probleme de practică. Construit la un hackathon.",
        image: "/projects/codeworks.png",
        context: "Hackathon",
        featured: true,
        tags: ["Node.js", "Docker", "Socket.IO", "Firebase"],
        liveUrl: "https://thecodeworks.fly.dev",
        repoUrl: "https://github.com/alexdmtr/codeworks",
      },
      {
        title: "Car Physics",
        description:
          "Un simulator interactiv de fizică a proiectilelor, cu unghi de lansare, masă și frecare ajustabile, construit pentru un curs universitar de fizică.",
        image: "/projects/car-physics.png",
        context: "Proiect universitar",
        featured: true,
        tags: ["JavaScript", "Simulare", "Fizică"],
        liveUrl: "https://car-physics-eta.vercel.app",
        repoUrl: "https://github.com/alexdmtr/car-physics",
      },
      {
        title: "Strategy Comparison",
        description:
          "O grilă sortabilă pentru compararea strategiilor de tranzacționare cantitativă după metrici de performanță — un proiect axat pe UX de tabele dense, cu multe date.",
        image: "/projects/strategy-comparison.png",
        imageDark: "/projects/strategy-comparison-dark.png",
        context: "Concept",
        tags: ["React", "TypeScript", "Grilă de date"],
        liveUrl: "https://strategy-comparison.vercel.app",
        repoUrl: "https://github.com/alexdmtr/strategy-comparison",
      },
      {
        title: "Order Book",
        description:
          "Un order book crypto live, cu vizualizare în timp real a adâncimii pentru BTC-USDT — un proiect care demonstrează UI pentru date în streaming.",
        image: "/projects/order-book.png",
        imageDark: "/projects/order-book-dark.png",
        context: "Concept",
        tags: ["React", "TypeScript", "Timp real"],
        liveUrl: "https://order-book-phi-peach.vercel.app",
        repoUrl: "https://github.com/alexdmtr/order-book",
      },
    ],
  },
  socials: [
    {
      label: "GitHub",
      value: "github.com/alexdmtr",
      href: "https://github.com/alexdmtr",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alexdmtr",
      href: "https://www.linkedin.com/in/alexdmtr",
    },
  ],
  footer: "Proiectat și construit cu Next.js, Tailwind CSS și Framer Motion.",
  ui: {
    sections: {
      experience: "Experiență",
      toolkit: "Tehnologii",
      portfolio: "Portofoliu",
    },
    project: { featured: "Recomandat", wip: "În lucru" },
    nav: {
      sections: "Secțiuni",
      openMenu: "Deschide meniul",
      closeMenu: "Închide meniul",
    },
    theme: {
      group: "Temă",
      toLight: "Comută pe tema deschisă",
      toDark: "Comută pe tema închisă",
      system: "Revino la tema sistemului",
    },
    language: "Limbă",
  },
};

export const content: Record<Locale, SiteContent> = { en, ro };
