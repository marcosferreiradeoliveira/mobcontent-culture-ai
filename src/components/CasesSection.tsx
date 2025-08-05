import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import imaginePosters from "@/assets/imagine-poster.jpg";

const cases = [
  {
    id: "oraculo",
    category: "IA",
    title: "Oráculo Cultural",
    subtitle: "Inteligência Artificial para Narrativas Museológicas",
    description: "Sistema de IA que transforma a experiência museológica através de narrativas personalizadas e interativas, revolucionando como visitantes se conectam com acervos culturais.",
    achievements: [
      { icon: Award, label: "Prêmio British Council" },
      { icon: Users, label: "+50k interações" },
      { icon: Globe, label: "Expansão internacional" }
    ],
    image: "/api/placeholder/600/400",
    color: "forest-accent"
  },
  {
    id: "museu-lingua",
    category: "Audiovisual",
    title: "Museu da Língua Portuguesa", 
    subtitle: "Produção Audiovisual para Instituição Cultural",
    description: "Criação de conteúdo audiovisual imersivo que celebra a riqueza da língua portuguesa, combinando tecnologia e narrativa para criar experiências culturais únicas.",
    achievements: [
      { icon: Award, label: "Melhor Produção Cultural" },
      { icon: Users, label: "+1M visualizações" },
      { icon: Globe, label: "Reconhecimento nacional" }
    ],
    image: "/api/placeholder/600/400",
    color: "forest"
  },
  {
    id: "montana-limpia",
    category: "Apps",
    title: "Montaña Limpia",
    subtitle: "App Internacional para Turismo Sustentável",
    description: "Aplicativo desenvolvido para cliente internacional que promove turismo sustentável através de tecnologia, conectando viajantes a experiências culturais responsáveis.",
    achievements: [
      { icon: Globe, label: "Cliente Internacional" },
      { icon: Users, label: "Multi-idiomas" },
      { icon: Award, label: "Impacto Ambiental" }
    ],
    image: "/api/placeholder/600/400",
    color: "forest-light"
  }
];

export const CasesSection = () => {
  const sectionDescription = useTypingEffect({
    text: "Projetos que demonstram nossa capacidade de integrar IA, audiovisual e apps para criar soluções culturais transformadoras",
    speed: 40,
    delay: 500
  });

  return (
    <section className="py-32 bg-lab-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src={imaginePosters} alt="" className="parallax-bg-image opacity-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-accent/15 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-parallax-float delay-[5s]" />
        <div className="neural-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Cases de <span className="text-gradient-forest">Sucesso</span>
          </h2>
          <p ref={sectionDescription.ref} className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed ${sectionDescription.isTyping ? 'typing-cursor' : ''}`}>
            {sectionDescription.displayText}
          </p>
        </div>

        {/* Cases Grid - Compact Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div
              key={case_.id}
              className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 morphing-shape gallery-hover group transition-all duration-300 hover:bg-card/70 hover:border-forest-accent/30"
            >
              {/* Content */}
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-forest-accent/25 rounded-full morphing-shape">
                  <div className="w-2 h-2 bg-forest-accent rounded-full mr-2 animate-parallax-float" />
                  <span className="text-forest-accent font-semibold text-xs">{case_.category}</span>
                </div>

                {/* Project Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-forest-accent/25 to-white/10 rounded-xl border border-white/20 backdrop-blur-sm gallery-hover morphing-shape overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white/60">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-forest-accent/40 rounded-xl mx-auto mb-3 flex items-center justify-center morphing-shape">
                        <span className="text-lg font-bold">{case_.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-forest-light transition-colors">
                    {case_.title}
                  </h3>
                  <p className="text-sm text-forest-light font-medium line-clamp-2">
                    {case_.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                  {case_.description}
                </p>

                {/* Achievements - Compact */}
                <div className="grid grid-cols-1 gap-2">
                  {case_.achievements.slice(0, 2).map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-forest-accent/25 rounded-md flex items-center justify-center morphing-shape">
                          <Icon className="w-3 h-3 text-forest-accent" />
                        </div>
                        <span className="text-white/90 font-medium text-xs">{achievement.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white transition-all duration-300 morphing-shape text-xs"
                >
                  Ver projeto
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Pronto para criar algo revolucionário?
            </h3>
            <Button 
              size="lg"
              className="bg-forest hover:bg-forest-dark text-white font-semibold px-12 py-4 forest-glow morphing-shape"
            >
              Vamos conversar sobre seu projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};