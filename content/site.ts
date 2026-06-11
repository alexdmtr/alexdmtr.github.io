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
};

export const site: SiteContent = {
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
    primaryCta: { label: "View work", href: "#work" },
    secondaryCta: { label: "Tech stack", href: "#stack" },
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
        title: "Passport Power",
        description:
          "Pick a passport to see its global mobility score and visa requirements — visa-free, on-arrival, eTA and e-Visa — across 199 destinations.",
        image: "/projects/passport-power.png",
        imageDark: "/projects/passport-power-dark.png",
        wip: true,
        tags: ["React", "TypeScript", "Data viz"],
        liveUrl: "https://passport-power.vercel.app",
        repoUrl: "https://github.com/alexdmtr/passport-power",
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
};
