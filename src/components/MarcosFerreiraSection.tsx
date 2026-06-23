import { ArrowUpRight, Terminal } from "lucide-react";
import { SectionTracker } from "@/components/Analytics/SectionTracker";
import { trackEvent } from "@/utils/analytics";
import { useLocale } from "@/i18n/LocaleContext";
import marcosFerreiraImage from "@/assets/marcos-ferreira.jpeg";

export const MarcosFerreiraSection = () => {
  const { t } = useLocale();
  const m = t.marcos;

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
          <div className="mb-10 sm:mb-14">
            <p className="font-mono text-xs sm:text-sm text-forest-light tracking-widest uppercase mb-2">
              {m.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Marcos <span className="text-gradient-forest">Ferreira</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-forest">
                <img
                  src={marcosFerreiraImage}
                  alt="Marcos Ferreira"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-forest-accent/40 bg-forest-accent/10">
                <Terminal className="w-3.5 h-3.5 text-forest-light" />
                <span className="font-mono text-xs text-forest-light uppercase tracking-wider">
                  {m.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {m.headline}
              </h3>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">{m.manifesto}</p>

              <p className="font-mono text-sm text-white/50 leading-relaxed border-l-2 border-forest-accent/50 pl-4">
                {m.bio}
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
                  {m.cta}
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="mt-3 font-mono text-xs text-white/40">{m.ctaHint}</p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div>
                <p className="font-mono text-xs text-forest-light tracking-widest uppercase mb-4">
                  [02 // {m.highlightsTitle}]
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {m.highlights.map((item) => (
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
                    [03 // {m.timelineTitle}]
                  </p>
                </div>
                <div className="p-4 font-mono text-xs sm:text-sm space-y-2">
                  <p className="text-white/30">[LOG_START]-------------------------------------------------</p>
                  {m.timeline.map((entry) => (
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
