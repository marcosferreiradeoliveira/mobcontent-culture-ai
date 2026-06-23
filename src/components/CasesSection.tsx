import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { trackEvent } from "@/utils/analytics";
import imaginePosters from "@/assets/imagine-poster.jpg";
import oraculoImage from "@/assets/oraculo.png";
import grioAIImage from "@/assets/grioai.png";
import stellaImage from "@/assets/Stella Medium.jpeg";
import tomzeImage from "@/assets/TomZe-768x576.jpg";
import museuAmanhaImage from "@/assets/MuseuDoAmanha-300x277.png";
import geminiImage from "@/assets/Gemini_Generated_Image_yrunukyrunukyrun Medium.jpeg";
import { SectionTracker } from "@/components/Analytics/SectionTracker";
import { useLocale } from "@/i18n/LocaleContext";

const caseConfig = [
  { id: "oraculo" as const, image: oraculoImage, color: "forest-accent" },
  { id: "museu-lingua" as const, image: tomzeImage, color: "forest", videoUrl: "https://www.youtube.com/watch?v=Dd_TIBGHY60" },
  { id: "museu-amanha" as const, image: museuAmanhaImage, color: "forest-light", videoUrl: "https://www.youtube.com/watch?v=JFg02dn56qU" },
  { id: "griot-ai" as const, image: grioAIImage, color: "forest-accent" },
  { id: "falatorio-ruas" as const, image: stellaImage, color: "forest-light" },
  { id: "memoria-negra" as const, image: geminiImage, color: "forest-accent" },
];

const caseTranslationKey: Record<(typeof caseConfig)[number]["id"], "oraculo" | "museuLingua" | "museuAmanha" | "griotAi" | "falatorio" | "memoriaNegra"> = {
  oraculo: "oraculo",
  "museu-lingua": "museuLingua",
  "museu-amanha": "museuAmanha",
  "griot-ai": "griotAi",
  "falatorio-ruas": "falatorio",
  "memoria-negra": "memoriaNegra",
};

const caseLinks: Record<string, string> = {
  oraculo: "https://oraculocultural.com.br",
  "griot-ai": "https://grioai-20163.web.app/",
  "falatorio-ruas": "https://www.falatorionarua.com.br/",
  "memoria-negra": "https://mobcontent.com.br/museudamemorianegraemia/",
};

export const CasesSection = () => {
  const { t } = useLocale();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const sectionDescription = useTypingEffect({
    text: t.cases.description,
    speed: 40,
    delay: 500,
  });

  const cases = caseConfig.map((config) => {
    const copy = t.cases[caseTranslationKey[config.id]];
    return {
      ...config,
      category: copy.category,
      title: copy.title,
      subtitle: copy.subtitle,
      description: copy.description,
      achievements: [
        { icon: Users, label: copy.achievements[0] },
        { icon: config.id === "griot-ai" || config.id === "memoria-negra" ? Award : Globe, label: copy.achievements[1] },
      ],
    };
  });

  return (
    <section id="projetos" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src={imaginePosters} alt="" className="parallax-bg-image opacity-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-accent/15 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-parallax-float delay-[5s]" />
        <div className="neural-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTracker sectionName="Cases de Sucesso">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              {t.cases.title}{" "}
              <span className="text-gradient-forest">{t.cases.titleHighlight}</span>
            </h2>
            <p ref={sectionDescription.ref} className={`text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed ${sectionDescription.isTyping ? 'typing-cursor' : ''}`}>
              {sectionDescription.displayText}
            </p>
          </div>
        </SectionTracker>

        {/* Cases Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((caseItem, index) => (
            <SectionTracker key={caseItem.id} sectionName={`Case View - ${caseItem.title}`}>
              <div
                className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 group transition-all duration-300 hover:bg-black/70 hover:border-forest-accent/30"
                onClick={() => {
                  trackEvent('case_view', {
                    event_category: 'engagement',
                    event_label: `Case: ${caseItem.title}`,
                    case_id: caseItem.id,
                    position: index + 1
                  });
                }}
              >
                {/* Content */}
                <div className="space-y-4 sm:space-y-5">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 bg-forest-accent/25 rounded-full">
                    <div className="w-2 h-2 bg-forest-accent rounded-full mr-2" />
                    <span className="text-forest-accent font-semibold text-xs">{caseItem.category}</span>
                  </div>

                  {/* Project Image */}
                  <div className="aspect-[4/3] min-h-[140px] sm:min-h-0 bg-gradient-to-br from-forest-accent/20 to-black/40 rounded-lg border border-white/20 backdrop-blur-sm overflow-hidden">
                    {!imageErrors[caseItem.id] ? (
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title} 
                        className="w-full h-full object-cover"
                        onError={() => setImageErrors(prev => ({ ...prev, [caseItem.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-forest-accent/50 text-xs text-center px-4">
                          {caseItem.title}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-base sm:text-lg font-black text-white mb-1 group-hover:text-forest-light transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-xs text-forest-light font-medium line-clamp-1">
                      {caseItem.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {caseItem.description}
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {caseItem.achievements.map((achievement, idx) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-forest-accent/25 rounded-sm flex items-center justify-center">
                            <Icon className="w-2.5 h-2.5 text-forest-accent" />
                          </div>
                          <span className="text-white/90 font-medium text-xs">{achievement.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <a 
                    href={caseLinks[caseItem.id] || caseItem.videoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                    onClick={() => {
                      if (caseItem.videoUrl) {
                        trackEvent('video_play', {
                          event_category: 'video',
                          event_label: caseItem.title,
                          video_url: caseItem.videoUrl,
                          location: 'cases_section'
                        });
                      } else {
                        trackEvent('external_link_click', {
                          event_category: 'outbound',
                          event_label: caseItem.title,
                          link_url: caseLinks[caseItem.id] || caseItem.videoUrl || "#",
                        });
                      }
                    }}
                  >
                    <Button 
  variant="outline"
  size="sm"
  onClick={() => {
    trackEvent('case_study_click', {
      event_category: 'engagement',
      event_label: `View Project: ${caseItem.title}`,
      link_url: caseLinks[caseItem.id] || caseItem.videoUrl || "#",
    });
  }}
  className="w-full border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white transition-all duration-300 mt-4"
>
  {t.cases.viewProject}
  <ArrowRight className="ml-2 w-3.5 h-3.5" />
</Button>
                  </a>
                </div>
              </div>
            </SectionTracker>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white px-2">
              {t.cases.ctaTitle}
            </h3>
            <a href="#contato">
              <Button 
                size="lg"
                className="bg-forest hover:bg-forest-dark text-white font-semibold px-12 py-4 forest-glow morphing-shape"
              >
                {t.cases.ctaButton}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};