import { useState } from "react";
import { ArrowUpRight, Terminal } from "lucide-react";
import { SectionTracker } from "@/components/Analytics/SectionTracker";
import { trackEvent } from "@/utils/analytics";
import marcosFerreiraImage from "@/assets/marcos-ferreira.jpeg";

type Lang = "pt" | "en" | "es";

const content: Record<
  Lang,
  {
    tag: string;
    headline: string;
    manifesto: string;
    highlightsTitle: string;
    highlights: { label: string; detail: string }[];
    timelineTitle: string;
    timeline: string[];
    bio: string;
    cta: string;
    ctaHint: string;
  }
> = {
  pt: {
    tag: "Sistema Decolonial",
    headline: "Tecnologia para gerar impacto e transformar realidades",
    manifesto:
      "Minha filosofia é usar a tecnologia como ferramenta de impacto social e cultural. Foco em narrativas decoloniais que resgatam memórias e empoderam vozes silenciadas — inovação digital fundida à cultura.",
    highlightsTitle: "Arquivo Vivo",
    highlights: [
      {
        label: "Soberania Visual",
        detail: "IA generativa como reparação histórica — obra Anastácia exposta na Alemanha, Japão, México, França e Áustria.",
      },
      {
        label: "Griô AI",
        detail: "Memória oracular recompilada — biografia de Mohammed Gardo Baquaqua, ícone da diáspora africana.",
      },
      {
        label: "Museu da Memória Negra em IA",
        detail: "Imagens que o arquivo colonial negou — exposições internacionais com IA generativa.",
      },
      {
        label: "Falatório nas Ruas",
        detail: "Stella do Patrocínio — voz colada no muro. Museu a céu aberto com QR codes.",
      },
      {
        label: "Cartografias Invisíveis",
        detail: "App oficial do Museu do Amanhã — prêmio de Melhor App IoT em 2016.",
      },
      {
        label: "Oráculo Cultural",
        detail: "Plataforma de IA que analisa editais e otimiza projetos culturais.",
      },
    ],
    timelineTitle: "Cronologia de Código",
    timeline: [
      "2013 · British Council — Young Creative Entrepreneur",
      "2013 · Sunny Side of the Doc — Inovação Transmídia",
      "2015 · Power to the Pixel — Vanguarda Latino-Americana",
      "2016 · Rio Criativo — Incubação de ecossistema",
      "2018 · Prêmio TAL — Garagem Maker finalista continental",
      "2025 · The AI Art Magazine — Golden Ticket com Anastácia",
    ],
    bio: "Do éter analógico da TV UFRJ e Rádio UFRJ ao tensor neural — narrativa e algoritmo fundidos no mesmo fluxo de dados.",
    cta: "Executar Portfólio.exe",
    ctaHint: "Portfólio completo em marcosferreira.art.br",
  },
  en: {
    tag: "Decolonial System",
    headline: "Technology to create impact and transform realities",
    manifesto:
      "My philosophy is to use technology as a tool for social and cultural impact. I focus on decolonial narratives that recover memories and empower silenced voices — digital innovation fused with culture.",
    highlightsTitle: "Living Archive",
    highlights: [
      {
        label: "Visual Sovereignty",
        detail: "Generative AI as historical repair — Anastácia exhibited in Germany, Japan, Mexico, France and Austria.",
      },
      {
        label: "Griô AI",
        detail: "Recompiled oracular memory — biography of Mohammed Gardo Baquaqua, icon of the African diaspora.",
      },
      {
        label: "Black Memory Museum in AI",
        detail: "Images the colonial archive denied — international exhibitions with generative AI.",
      },
      {
        label: "Falatório nas Ruas",
        detail: "Stella do Patrocínio — voice pasted on the wall. Open-air museum with QR codes.",
      },
      {
        label: "Invisible Cartographies",
        detail: "Official Museu do Amanhã app — Best IoT App award in 2016.",
      },
      {
        label: "Oráculo Cultural",
        detail: "AI platform that analyzes grants and optimizes cultural project proposals.",
      },
    ],
    timelineTitle: "Code Chronology",
    timeline: [
      "2013 · British Council — Young Creative Entrepreneur",
      "2013 · Sunny Side of the Doc — Transmedia Innovation",
      "2015 · Power to the Pixel — Latin American Vanguard",
      "2016 · Rio Criativo — Ecosystem incubation",
      "2018 · Prêmio TAL — Garagem Maker continental finalist",
      "2025 · The AI Art Magazine — Golden Ticket with Anastácia",
    ],
    bio: "From the analog ether of TV UFRJ and Rádio UFRJ to the neural tensor — narrative and algorithm fused in the same data stream.",
    cta: "Run Portfolio.exe",
    ctaHint: "Full portfolio at marcosferreira.art.br",
  },
  es: {
    tag: "Sistema Decolonial",
    headline: "Tecnología para generar impacto y transformar realidades",
    manifesto:
      "Mi filosofía es usar la tecnología como herramienta de impacto social y cultural. Me enfoco en narrativas decoloniales que rescatan memorias y empoderan voces silenciadas — innovación digital fusionada con la cultura.",
    highlightsTitle: "Archivo Vivo",
    highlights: [
      {
        label: "Soberanía Visual",
        detail: "IA generativa como reparación histórica — obra Anastácia expuesta en Alemania, Japón, México, Francia y Austria.",
      },
      {
        label: "Griô AI",
        detail: "Memoria oracular recompilada — biografía de Mohammed Gardo Baquaqua, ícono de la diáspora africana.",
      },
      {
        label: "Museo de la Memoria Negra en IA",
        detail: "Imágenes que el archivo colonial negó — exposiciones internacionales con IA generativa.",
      },
      {
        label: "Falatório nas Ruas",
        detail: "Stella do Patrocínio — voz pegada en el muro. Museo al aire libre con códigos QR.",
      },
      {
        label: "Cartografías Invisibles",
        detail: "App oficial del Museu do Amanhã — premio a la Mejor App IoT en 2016.",
      },
      {
        label: "Oráculo Cultural",
        detail: "Plataforma de IA que analiza convocatorias y optimiza proyectos culturales.",
      },
    ],
    timelineTitle: "Cronología de Código",
    timeline: [
      "2013 · British Council — Young Creative Entrepreneur",
      "2013 · Sunny Side of the Doc — Innovación Transmedia",
      "2015 · Power to the Pixel — Vanguardia Latinoamericana",
      "2016 · Rio Criativo — Incubación de ecosistema",
      "2018 · Prêmio TAL — Garagem Maker finalista continental",
      "2025 · The AI Art Magazine — Golden Ticket con Anastácia",
    ],
    bio: "Del éter analógico de TV UFRJ y Rádio UFRJ al tensor neural — narrativa y algoritmo fundidos en el mismo flujo de datos.",
    cta: "Ejecutar Portfólio.exe",
    ctaHint: "Portafolio completo en marcosferreira.art.br",
  },
};

const langs: { id: Lang; label: string }[] = [
  { id: "pt", label: "PT" },
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
];

export const MarcosFerreiraSection = () => {
  const [lang, setLang] = useState<Lang>("pt");
  const t = content[lang];

  const handlePortfolioClick = () => {
    trackEvent("portfolio_click", {
      event_category: "outbound",
      event_label: "marcosferreira.art.br",
      section: "marcos_ferreira",
    });
  };

  return (
    <section
      id="marcos-ferreira"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-lab-darker relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTracker sectionName="Marcos Ferreira">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <p className="font-mono text-xs sm:text-sm text-forest-light tracking-widest uppercase mb-2">
                [01 // Manifesto]
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                Marcos <span className="text-gradient-forest">Ferreira</span>
              </h2>
            </div>

            <div className="flex items-center gap-1 self-start sm:self-auto bg-white/5 border border-white/10 rounded-lg p-1">
              {langs.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLang(id)}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors ${
                    lang === id
                      ? "bg-forest text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-forest">
                <img
                  src={marcosFerreiraImage}
                  alt="Marcos Ferreira — tecnologia para impacto social e cultural"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-forest-accent/40 bg-forest-accent/10">
                <Terminal className="w-3.5 h-3.5 text-forest-light" />
                <span className="font-mono text-xs text-forest-light uppercase tracking-wider">
                  {t.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {t.headline}
              </h3>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {t.manifesto}
              </p>

              <p className="font-mono text-sm text-white/50 leading-relaxed border-l-2 border-forest-accent/50 pl-4">
                {t.bio}
              </p>

              <div className="pt-2">
                <a
                  href="https://marcosferreira.art.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePortfolioClick}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest hover:bg-forest-accent text-white font-mono text-sm font-semibold rounded-lg transition-colors group"
                >
                  <span className="text-forest-light group-hover:text-white">&gt;</span>
                  {t.cta}
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="mt-3 font-mono text-xs text-white/40">{t.ctaHint}</p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div>
                <p className="font-mono text-xs text-forest-light tracking-widest uppercase mb-4">
                  [02 // {t.highlightsTitle}]
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {t.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-forest-accent/30 transition-colors"
                    >
                      <p className="font-mono text-xs text-forest-light mb-1.5">
                        // {item.label.toLowerCase().replace(/\s+/g, "_")}
                      </p>
                      <h4 className="text-white font-semibold text-sm sm:text-base mb-1.5">
                        {item.label}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/40 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10 bg-white/5">
                  <p className="font-mono text-xs text-forest-light tracking-widest uppercase">
                    [03 // {t.timelineTitle}]
                  </p>
                </div>
                <div className="p-4 font-mono text-xs sm:text-sm space-y-2">
                  <p className="text-white/30">[LOG_START]-------------------------------------------------</p>
                  {t.timeline.map((entry) => (
                    <p key={entry} className="text-white/70">
                      <span className="text-forest-light">&gt;</span> {entry}
                    </p>
                  ))}
                  <p className="text-white/30">---------------------------------------------------[LOG_END]</p>
                </div>
              </div>
            </div>
          </div>
        </SectionTracker>
      </div>
    </section>
  );
};
