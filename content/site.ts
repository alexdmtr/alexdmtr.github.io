import type { Locale } from "@/lib/i18n";

type Stat = {
  value: string;
  label: string;
};

type Project = {
  title: string;
  summary: string;
  tags: string[];
};

type Detail = {
  title: string;
  body: string;
  points: string[];
};

type SiteCopy = {
  localeLabel: string;
  nav: {
    intro: string;
    systems: string;
    work: string;
    leadership: string;
  };
  controls: {
    switchToLight: string;
    switchToDark: string;
    largeType: string;
    standardType: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    panelTitle: string;
    panelBody: string;
    availability: string;
    location: string;
  };
  stats: Stat[];
  systems: {
    title: string;
    body: string;
    cards: Detail[];
  };
  work: {
    title: string;
    body: string;
    projects: Project[];
  };
  leadership: {
    title: string;
    body: string;
    items: Detail[];
  };
  footer: string;
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    localeLabel: "English",
    nav: {
      intro: "Intro",
      systems: "Systems",
      work: "Selected Work",
      leadership: "Leadership"
    },
    controls: {
      switchToLight: "Switch to light",
      switchToDark: "Switch to dark",
      largeType: "Large type",
      standardType: "Standard type"
    },
    hero: {
      eyebrow: "Lead UI Developer • UI-Focused Software Engineer",
      title: "I design ambitious interfaces and build the systems that keep them sharp.",
      intro:
        "My sweet spot is the seam between product vision and frontend execution: translating strategy into resilient design systems, expressive interactions, and production-ready UI architecture that teams can scale with confidence.",
      primaryCta: "Explore selected work",
      secondaryCta: "Jump to design systems",
      panelTitle: "Now building",
      panelBody:
        "Portfolio experiences that feel editorial, product surfaces that reward care, and frontend foundations that make quality visible at every layer.",
      availability: "Open to lead UI, frontend architecture, and product design engineering roles.",
      location: "Based in Europe, collaborating globally."
    },
    stats: [
      { value: "10+", label: "years shaping polished product UI" },
      { value: "0 to 1", label: "experience translating concepts into real products" },
      { value: "Design x Eng", label: "leadership across craft, systems, and delivery" }
    ],
    systems: {
      title: "Design systems that stay expressive under pressure.",
      body:
        "I care about visual personality and engineering discipline in equal measure. The best interfaces feel distinctive on day one, then become easier to extend on day one hundred.",
      cards: [
        {
          title: "System thinking",
          body:
            "I build scalable UI primitives, token strategies, and documentation patterns that preserve craft instead of flattening it.",
          points: [
            "Tokens for color, motion, type, spacing, and density",
            "Reusable interaction patterns with clear accessibility states",
            "Architecture that supports experimentation without regressions"
          ]
        },
        {
          title: "Frontend quality",
          body:
            "I treat implementation as part of the design. Motion curves, edge cases, loading states, and responsive transitions all get intentional attention.",
          points: [
            "Production-minded React and component architecture",
            "Performance and semantics considered from the first pass",
            "Interfaces tuned for clarity, speed, and long-term maintainability"
          ]
        }
      ]
    },
    work: {
      title: "Selected directions",
      body:
        "The strongest teams I’ve been part of cared about both the surface and the substrate. These project stories are framed around visible product impact and the systems behind it.",
      projects: [
        {
          title: "Editorial product marketing",
          summary:
            "Launch pages and campaign surfaces with bold art direction, composable sections, and motion that supports the story instead of overwhelming it.",
          tags: ["Brand systems", "Motion language", "Composable CMS sections"]
        },
        {
          title: "Application UI modernization",
          summary:
            "Mature product areas redesigned around information hierarchy, interaction polish, and scalable component patterns across complex workflows.",
          tags: ["Design systems", "UX refinement", "Frontend architecture"]
        },
        {
          title: "Prototyping for leadership buy-in",
          summary:
            "High-fidelity prototypes that align stakeholders early, reduce ambiguity for engineering, and make product ambition tangible.",
          tags: ["Rapid prototyping", "Stakeholder alignment", "0 to 1 strategy"]
        }
      ]
    },
    leadership: {
      title: "Leadership rooted in craft.",
      body:
        "As a lead, I like creating clarity: the design intent, the engineering path, and the quality bar all need to be visible so a team can move quickly without losing taste.",
      items: [
        {
          title: "Mentoring through implementation",
          body:
            "I help teams reason about UI tradeoffs in code, not just in abstract design reviews.",
          points: [
            "Turning critique into practical patterns",
            "Pairing on component architecture and interaction details",
            "Raising standards without making delivery heavier"
          ]
        },
        {
          title: "Cross-functional translation",
          body:
            "I’m comfortable bridging product, design, and engineering so ideas survive contact with roadmap reality.",
          points: [
            "Clear framing for scope and sequencing",
            "A shared language for quality and feasibility",
            "Decision-making that protects both speed and product ambition"
          ]
        }
      ]
    },
    footer: "Built with Next.js, localized routing, adaptive theme controls, and a UI language designed to feel unmistakably intentional."
  },
  ro: {
    localeLabel: "Romana",
    nav: {
      intro: "Intro",
      systems: "Sisteme",
      work: "Proiecte",
      leadership: "Leadership"
    },
    controls: {
      switchToLight: "Tema deschisa",
      switchToDark: "Tema inchisa",
      largeType: "Text mare",
      standardType: "Text standard"
    },
    hero: {
      eyebrow: "Lead UI Developer • Inginer software orientat spre UI",
      title: "Construiesc interfete ambitioase si sistemele care le mentin clare, rapide si memorabile.",
      intro:
        "Zona mea forte este intre viziunea de produs si executia frontend: transform directia strategica in design systems solide, interactiuni expresive si arhitectura UI pregatita pentru productie.",
      primaryCta: "Vezi proiectele",
      secondaryCta: "Mergi la design systems",
      panelTitle: "Acum construiesc",
      panelBody:
        "Experiente de portofoliu cu caracter editorial, produse digitale care recompenseaza atentia la detalii si fundatii frontend care fac vizibila calitatea.",
      availability: "Disponibil pentru roluri de lead UI, arhitectura frontend si design engineering.",
      location: "Bazat in Europa, colaborez international."
    },
    stats: [
      { value: "10+", label: "ani construind interfete de produs rafinate" },
      { value: "0 la 1", label: "experienta in transformarea conceptelor in produse reale" },
      { value: "Design x Eng", label: "leadership intre craft, sisteme si delivery" }
    ],
    systems: {
      title: "Design systems care raman expresive si sub presiune.",
      body:
        "Imi pasa in egala masura de personalitatea vizuala si de disciplina inginereasca. Cele mai bune interfete sunt distincte la inceput si mai usor de extins pe termen lung.",
      cards: [
        {
          title: "Gandire sistemica",
          body:
            "Construiesc primitive UI scalabile, strategii de token-uri si moduri de documentare care pastreaza caracterul, nu il uniformizeaza.",
          points: [
            "Token-uri pentru culoare, miscare, tipografie, spatiere si densitate",
            "Pattern-uri reutilizabile cu stari de accesibilitate clare",
            "Arhitectura care sustine experimentarea fara regresii"
          ]
        },
        {
          title: "Calitate frontend",
          body:
            "Tratez implementarea ca parte din design. Curbele de miscare, edge cases, loading states si tranzitiile responsive sunt toate deliberate.",
          points: [
            "React si arhitectura de componente pregatite pentru productie",
            "Performanta si semantica luate in calcul din primul pas",
            "Interfete optimizate pentru claritate, viteza si mentenanta"
          ]
        }
      ]
    },
    work: {
      title: "Directii selectate",
      body:
        "Cele mai bune echipe din care am facut parte au tratat cu aceeasi seriozitate suprafata si fundatia produsului. Aceste exemple pun accent pe impactul vizibil si sistemele din spate.",
      projects: [
        {
          title: "Product marketing editorial",
          summary:
            "Pagini de lansare si suprafete de campanie cu directie artistica puternica, sectiuni compozabile si motion care sustine povestea.",
          tags: ["Brand systems", "Limbaj de miscare", "Sectiuni CMS compozabile"]
        },
        {
          title: "Modernizare pentru application UI",
          summary:
            "Zone mature de produs redesenate in jurul ierarhiei informatiei, rafinamentului de interactiune si pattern-urilor scalabile pentru fluxuri complexe.",
          tags: ["Design systems", "Rafinare UX", "Arhitectura frontend"]
        },
        {
          title: "Prototipuri pentru buy-in executiv",
          summary:
            "Prototipuri high-fidelity care aliniaza stakeholderii devreme, reduc ambiguitatea pentru engineering si fac ambitia de produs tangibila.",
          tags: ["Rapid prototyping", "Stakeholder alignment", "Strategie 0 la 1"]
        }
      ]
    },
    leadership: {
      title: "Leadership ancorat in craft.",
      body:
        "Ca lead, imi place sa creez claritate: intentia de design, traseul tehnic si standardul de calitate trebuie sa fie vizibile, astfel incat echipa sa poata avansa rapid fara compromisuri de gust.",
      items: [
        {
          title: "Mentorat prin implementare",
          body:
            "Ajut echipele sa discute tradeoff-urile UI direct in cod, nu doar in review-uri abstracte de design.",
          points: [
            "Transform feedback-ul in pattern-uri practice",
            "Pairing pe arhitectura componentelor si detalii de interactiune",
            "Ridic standardele fara sa ingreunez delivery-ul"
          ]
        },
        {
          title: "Traducere cross-functional",
          body:
            "Pot conecta produsul, designul si engineering-ul astfel incat ideile sa reziste contactului cu realitatea roadmap-ului.",
          points: [
            "Cadrare clara pentru scope si secventiere",
            "Limbaj comun pentru calitate si fezabilitate",
            "Decizii care protejeaza viteza si ambitia produsului"
          ]
        }
      ]
    },
    footer: "Construit cu Next.js, routare localizata, controale adaptive de tema si un limbaj vizual gandit sa para intentionat din primul ecran."
  }
};
