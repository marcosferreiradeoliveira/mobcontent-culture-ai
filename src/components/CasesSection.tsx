import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { trackEvent } from "@/utils/analytics";
import imaginePosters from "@/assets/imagine-poster.jpg";
import oraculoImage from "@/assets/oraculo.png";
import grioAIImage from "@/assets/grioai.png";
import falatorioImage from "@/assets/falatorio.jpeg";
import { SectionTracker } from "@/components/Analytics/SectionTracker";

const cases = [
  {
    id: "oraculo",
    category: "IA",
    title: "Oráculo Cultural",
    subtitle: "Agente de IA para Editais",
    description: "Sistema de IA que avalia seu projeto e cria textos voltados a editais culturais.",
    achievements: [
      { icon: Users, label: "Podcasts gerados por IA" },
      { icon: Globe, label: "Deep research de cada edital" }
    ],
    image: oraculoImage,
    color: "forest-accent"
  },
  {
    id: "museu-lingua",
    category: "Audiovisual",
    title: "Museu da Língua Portuguesa", 
    subtitle: "Produção Audiovisual Cultural",
    description: "Captação de mais de 120 vídeos para a exposição Linha do Tempo da Língua Portuguesa.",
    achievements: [
      { icon: Users, label: "Nomes como Bethânia, Gil e Arnaldo Antunes" },
      { icon: Globe, label: "Licenciamento de acervo audiovisual histórico" }
    ],
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/12.jpg",
    color: "forest",
    videoUrl: "https://www.youtube.com/watch?v=Dd_TIBGHY60"
  },
  {
    id: "museu-amanha",
    category: "Apps",
    title: "App Museu do Amanhã",
    subtitle: "Aplicativo com audioguia e integração com beacons",
    description: "Sistema de alertas georreferenciados para uma experiência de visitação aprimorada.",
    achievements: [
      { icon: Users, label: "Acessibilidade completa" },
      { icon: Globe, label: "Popups interativos nos locais de exposição" }
    ],
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/MuseuDoAmanha.png",
    color: "forest-light",
    videoUrl: "https://www.youtube.com/watch?v=JFg02dn56qU"
  },
  {
    id: "griot-ai",
    category: "IA",
    title: "Griô AI",
    subtitle: "História de Baquaqua com IA",
    description: "Descubra a história de Baquaqua através de documentos reais com a ajuda de um agente IA.",
    achievements: [
      { icon: Award, label: "Selecionado Lei Aldir Blanc" },
      { icon: Users, label: "Vídeos gerados por IA" }
    ],
    image: grioAIImage,
    color: "forest-accent"
  },
  {
    id: "falatorio-ruas",
    category: "Intervenção Urbana",
    title: "Falatório nas Ruas",
    subtitle: "Intervenções com lambe-lambes",
    description: "Intervenções com lambe-lambes de frases de Stella do Patrocínio pela cidade do Rio de Janeiro.",
    achievements: [
      { icon: Users, label: "QR code com texto curatorial" },
      { icon: Globe, label: "Acessibilidade completa" }
    ],
    image: "https://www.falatorionarua.com.br/static/media/projeto.ff22b6d08a2d6964fe84.png",
    color: "forest-light"
  },
  {
    id: "memoria-negra",
    category: "IA",
    title: "Museu da Memória Negra em IA",
    subtitle: "IA Generativa para Cultura",
    description: "Projeto que usa IA generativa para recolocar expoentes da história negra em lugar de altivez",
    achievements: [
      { icon: Globe, label: "Exibido na Alemanha, Áustria, México e Japão" },
      { icon: Award, label: "Escolhido pela The Ai Art Magazine (ALE)" }
    ],
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2024/11/mmobcontent_hyperrealistic_photo_of_a_black_woman_facing_camera_b30b7584-ec5b-4700-a96a-0812d112cc8b-scaled.jpeg",
    color: "forest-accent"
  }
];

export const CasesSection = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const sectionDescription = useTypingEffect({
    text: "Projetos que demonstram nossa capacidade de integrar IA, audiovisual e apps para criar soluções culturais transformadoras",
    speed: 40,
    delay: 500
  });

  return (
    <section id="projetos" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src={imaginePosters} alt="" className="parallax-bg-image opacity-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-accent/15 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-parallax-float delay-[5s]" />
        <div className="neural-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTracker sectionName="Cases de Sucesso">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Cases de <span className="text-gradient-forest">Sucesso</span>
            </h2>
            <p ref={sectionDescription.ref} className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed ${sectionDescription.isTyping ? 'typing-cursor' : ''}`}>
              {sectionDescription.displayText}
            </p>
          </div>
        </SectionTracker>

        {/* Cases Grid - Compact Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <SectionTracker key={caseItem.id} sectionName={`Case View - ${caseItem.title}`}>
              <div
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 group transition-all duration-300 hover:bg-card/50 hover:border-forest-accent/30"
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
                <div className="space-y-5">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 bg-forest-accent/25 rounded-full">
                    <div className="w-2 h-2 bg-forest-accent rounded-full mr-2" />
                    <span className="text-forest-accent font-semibold text-xs">{caseItem.category}</span>
                  </div>

                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-forest-accent/25 to-white/10 rounded-lg border border-white/20 backdrop-blur-sm overflow-hidden">
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
                  <div className="pt-2">
                    <h3 className="text-lg font-black text-white mb-1 group-hover:text-forest-light transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-xs text-forest-light font-medium">
                      {caseItem.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
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
                    href={
                      caseItem.id === 'oraculo' ? 'https://oraculocultural.com.br' :
                      caseItem.id === 'griot-ai' ? 'https://grioai.com.br/' :
                      caseItem.id === 'falatorio-ruas' ? 'https://www.falatorionarua.com.br/' :
                      caseItem.id === 'memoria-negra' ? 'https://mobcontent.com.br/museudamemorianegraemia/' :
                      caseItem.videoUrl || '#'
                    }
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
                          link_url: caseItem.id === 'oraculo' ? 'https://oraculocultural.com.br' :
                                    caseItem.id === 'griot-ai' ? 'https://grioai.com.br/' :
                                    caseItem.id === 'falatorio-ruas' ? 'https://www.falatorionarua.com.br/' :
                                    caseItem.id === 'memoria-negra' ? 'https://mobcontent.com.br/museudamemorianegraemia/' : '#'
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
      link_url: caseItem.id === 'oraculo' ? 'https://oraculocultural.com.br' :
               caseItem.id === 'griot-ai' ? 'https://grioai.com.br/' :
               caseItem.id === 'falatorio-ruas' ? 'https://www.falatorionarua.com.br/' :
               caseItem.id === 'memoria-negra' ? 'https://mobcontent.com.br/museudamemorianegraemia/' : '#'
    });
  }}
  className="w-full border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white transition-all duration-300 mt-4"
>
  Ver projeto
  <ArrowRight className="ml-2 w-3.5 h-3.5" />
</Button>
                  </a>
                </div>
              </div>
            </SectionTracker>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Pronto para criar algo revolucionário?
            </h3>
            <a href="#contato">
              <Button 
                size="lg"
                className="bg-forest hover:bg-forest-dark text-white font-semibold px-12 py-4 forest-glow morphing-shape"
              >
                Vamos conversar sobre seu projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};