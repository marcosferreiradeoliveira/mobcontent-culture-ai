export type Locale = "pt" | "en" | "es";

export interface CaseItemTranslation {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: [string, string];
}

export interface PillarItemTranslation {
  title: string;
  description: string;
  highlights: string[];
}

export interface BuildAIItemTranslation {
  label: string;
  detail: string;
}

export interface MarcosHighlightTranslation {
  label: string;
  detail: string;
}

export interface AwardTranslation {
  subtitle: string;
  description: string;
}

export interface Translations {
  nav: {
    ai: string;
    apps: string;
    audiovisual: string;
    about: string;
    marcos: string;
    contact: string;
  };
  hero: {
    titleLine1: string;
    titleLine2Prefix: string;
    titleLine2Highlight: string;
    tagline: string;
    description: string;
    pillars: { audiovisual: string; ia: string; apps: string };
  };
  pillars: {
    title: string;
    titleHighlight: string;
    description: string;
    learnMore: string;
    ia: PillarItemTranslation;
    audiovisual: PillarItemTranslation;
    apps: PillarItemTranslation;
  };
  cases: {
    title: string;
    titleHighlight: string;
    description: string;
    viewProject: string;
    ctaTitle: string;
    ctaButton: string;
    oraculo: CaseItemTranslation;
    museuLingua: CaseItemTranslation;
    museuAmanha: CaseItemTranslation;
    griotAi: CaseItemTranslation;
    falatorio: CaseItemTranslation;
    memoriaNegra: CaseItemTranslation;
  };
  buildai: {
    sectionLabel: string;
    imageAlt: string;
    badge: string;
    headline: string;
    description: string;
    tags: string;
    scheduleConsultation: string;
    viewPortfolio: string;
    servicesLabel: string;
    metricsLabel: string;
    portfolio: BuildAIItemTranslation[];
    metrics: string[];
  };
  marcos: {
    sectionLabel: string;
    tag: string;
    headline: string;
    manifesto: string;
    highlightsTitle: string;
    highlights: MarcosHighlightTranslation[];
    timelineTitle: string;
    timeline: string[];
    bio: string;
    cta: string;
    ctaHint: string;
  };
  social: {
    clientsTitle: string;
    clientsTitleHighlight: string;
    clientsDescription: string;
    stats: { projects: string; videos: string; apps: string; years: string };
    awardsTitle: string;
    awardsTitleHighlight: string;
    awardsDescription: string;
    awards: Record<string, AwardTranslation>;
  };
  contact: {
    title: string;
    titleHighlight: string;
    description: string;
    whatsapp: string;
    whatsappAria: string;
    name: string;
    email: string;
    company: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    errorGeneric: string;
    followUs: string;
    cards: {
      email: { title: string; description: string };
      whatsapp: { title: string; description: string };
      office: { title: string; description: string };
    };
  };
  footer: {
    tagline1: string;
    tagline2: string;
    location: string;
    whatsapp: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
  whatsapp: {
    message: string;
    label: string;
    ariaLabel: string;
  };
}
