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
};

export type StackGroup = {
  title: string;
  body: string;
  points: string[];
};

export type Detail = {
  title: string;
  body: string;
  points: string[];
};

export type Award = {
  title: string;
  detail: string;
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
  leadership: {
    title: string;
    body: string;
    items: Detail[];
  };
  awards: {
    title: string;
    body: string;
    items: Award[];
  };
  socials: ContactLink[];
  footer: string;
};

export const site: SiteContent = {
  meta: {
    title: "Alex Dumitru — Lead UI Developer",
    description:
      "Lead UI developer building high-performance web applications at quantitative trading firms.",
  },
  nav: [
    { label: "Experience", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Leadership", href: "#leadership" },
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
  stats: [
    { value: "8+", label: "years of professional engineering, since 2016" },
    { value: "800MB → 0.77KB", label: "network payload reduction at QRT" },
    { value: "2min → 1s", label: "grid interaction time improvement" },
  ],
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
      },
      {
        company: "Citadel",
        role: "Software Engineer",
        period: "2020 — 2022",
        summary:
          "Built trading dashboard applications with React, TypeScript, GraphQL and gRPC. Automated PnL analysis workflows and co-led development of a bank-wires processing application.",
        tags: ["React", "TypeScript", "GraphQL", "gRPC", "MUI"],
        logo: "/logos/citadel.png",
      },
      {
        company: "University of Manchester",
        role: "BSc Computer Science & Mathematics",
        period: "2017 — 2020",
        summary: "Joint honours across computer science and mathematics.",
        tags: ["First Class Honours"],
        logo: "/logos/manchester.svg",
      },
    ],
    earlierTitle: "Earlier roles & internships",
    earlier: [
      {
        company: "Improbable",
        role: "Software Engineering Intern",
        period: "2019",
        logo: "/logos/improbable.png",
      },
      {
        company: "Morgan Stanley",
        role: "Technology Analyst Intern",
        period: "2018",
        logo: "/logos/morgan-stanley.png",
      },
      {
        company: "Pentalog",
        role: "Software Developer",
        period: "2017",
        logo: "/logos/pentalog.png",
      },
      {
        company: "EXE Software",
        role: "Web Developer",
        period: "2016",
        logo: "/logos/exe.png",
      },
    ],
  },
  leadership: {
    title: "Leadership",
    body: "I lead through clarity and ownership — setting technical direction, unblocking teams, and keeping standards high without slowing delivery.",
    items: [
      {
        title: "Team development",
        body: "Grew people, not just code.",
        points: [
          "Managed an intern through to a full-time conversion",
          "Technical mentoring at Pentalog",
          "Cross-functional London/Paris collaboration at QRT",
        ],
      },
      {
        title: "Technical leadership",
        body: "Drove architecture, review standards, and migrations across frontend teams.",
        points: [
          "Led the React/TypeScript migration at QRT",
          "Co-led the bank-wires app at Citadel",
          "Established component patterns and testing practices",
        ],
      },
    ],
  },
  awards: {
    title: "Awards",
    body: "Competitive programming results from university and early career.",
    items: [
      { title: "Google Hash Code 2020", detail: "1st in Manchester · 4th in the UK" },
      { title: "Goldman Sachs Algorithms Challenge 2018", detail: "1st place" },
      { title: "Bet365 Coding Challenge 2020", detail: "2nd place" },
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
