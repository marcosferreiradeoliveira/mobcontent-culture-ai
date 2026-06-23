import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionTracker } from "@/components/Analytics/SectionTracker";
import { trackEvent } from "@/utils/analytics";
import buildaiImage from "@/assets/buildai-hero.png";

const BUILDAI_URL = "https://buildai.agency";
const BUILDAI_CONTACT = "https://buildai.agency/#contato";

const portfolio = [
  {
    label: "MicroSaaS",
    detail: "Do MVP à escala — produtos SaaS enxutos, validados e prontos para crescer.",
  },
  {
    label: "Automações com IA",
    detail: "Agentes inteligentes nos fluxos — menos tarefas repetitivas, menos custo operacional.",
  },
  {
    label: "NewsGen AI",
    detail: "Texto vira vídeo com apresentador virtual — roteiro, voz e montagem em um só fluxo.",
  },
  {
    label: "Green Sky",
    detail: "Turismo de aventura com checkout Stripe, fundo Propósito e i18n em 6 idiomas.",
  },
  {
    label: "GrowthOS",
    detail: "Dashboard para CGO com funil completo e relatório estratégico gerado por Gemini.",
  },
  {
    label: "Conexão Ativa",
    detail: "Telegram → artigo SEO → WordPress e redes — texto ou áudio, publicação automática.",
  },
];

const metrics = [
  "50+ projetos entregues",
  "98% de satisfação dos clientes",
  "10x ROI médio reportado",
  "React · Firebase · OpenAI · Gemini · Claude",
];

export const BuildAISection = () => {
  const handleClick = (label: string) => {
    trackEvent("buildai_click", {
      event_category: "outbound",
      event_label: label,
      section: "buildai",
    });
  };

  return (
    <section
      id="buildai"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 neural-grid opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-forest-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTracker sectionName="BuildAI">
          <div className="mb-10 sm:mb-14">
            <p className="font-mono text-xs sm:text-sm text-forest-light tracking-widest uppercase mb-2">
              [01 // Tecnologia & Automação]
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Build<span className="text-gradient-forest">AI</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-forest">
                <img
                  src={buildaiImage}
                  alt="BuildAI — tecnologia e automação com IA"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-forest-accent/40 bg-forest-accent/10">
                <Sparkles className="w-3.5 h-3.5 text-forest-light" />
                <span className="font-mono text-xs text-forest-light uppercase tracking-wider">
                  Build-in-Public Agency
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                Construímos o futuro do seu negócio com MicroSaaS e IA
              </h3>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Braço de tecnologia e automação da mobCONTENT. Transformamos ideias em softwares
                escaláveis e automações inteligentes que economizam centenas de horas e maximizam
                seu ROI.
              </p>

              <p className="font-mono text-sm text-white/50 leading-relaxed border-l-2 border-forest-accent/50 pl-4">
                MicroSaaS · Automações com IA · Software sob medida · Agentes inteligentes ·
                Content Factory
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={BUILDAI_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("agendar_consultoria")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest hover:bg-forest-accent text-white font-mono text-sm font-semibold rounded-lg transition-colors group"
                >
                  <span className="text-forest-light group-hover:text-white">&gt;</span>
                  Agendar Consultoria
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href={BUILDAI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClick("ver_site")}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-forest-accent/50 text-white font-mono text-sm font-semibold rounded-lg transition-colors"
                >
                  Ver Portfólio
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
              <p className="font-mono text-xs text-white/40">buildai.agency</p>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div>
                <p className="font-mono text-xs text-forest-light tracking-widest uppercase mb-4">
                  [02 // Serviços & Projetos]
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {portfolio.map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-forest-accent/30 transition-colors"
                    >
                      <p className="font-mono text-xs text-forest-light mb-1.5">
                        // {item.label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")}
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
                    [03 // Métricas]
                  </p>
                </div>
                <div className="p-4 font-mono text-xs sm:text-sm space-y-2">
                  <p className="text-white/30">[LOG_START]-------------------------------------------------</p>
                  {metrics.map((entry) => (
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
