import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users } from "lucide-react";

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
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-accent/15 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-parallax-float delay-[5s]" />
        <div className="neural-grid opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Cases de <span className="text-gradient-forest">Sucesso</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Projetos que demonstram nossa capacidade de integrar IA, audiovisual e apps 
            para criar soluções culturais transformadoras
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-24">
          {cases.map((case_, index) => (
            <div
              key={case_.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Category Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-forest-accent/25 rounded-full morphing-shape">
                  <div className="w-2 h-2 bg-forest-accent rounded-full mr-3 animate-parallax-float" />
                  <span className="text-forest-accent font-semibold text-sm">{case_.category}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-4xl font-black text-white mb-2">
                    {case_.title}
                  </h3>
                  <p className="text-lg text-forest-light font-medium">
                    {case_.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white/80 text-lg leading-relaxed">
                  {case_.description}
                </p>

                {/* Achievements */}
                <div className="space-y-4">
                  {case_.achievements.map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-forest-accent/25 rounded-lg flex items-center justify-center morphing-shape">
                          <Icon className="w-4 h-4 text-forest-accent" />
                        </div>
                        <span className="text-white/90 font-medium">{achievement.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline"
                  className="border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white transition-all duration-300 morphing-shape"
                >
                  Ver projeto completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  {/* Placeholder for now - will be replaced with actual images */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-forest-accent/25 to-white/10 rounded-2xl border border-white/20 backdrop-blur-sm gallery-hover morphing-shape">
                    <div className="absolute inset-0 flex items-center justify-center text-white/60">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-forest-accent/40 rounded-2xl mx-auto mb-4 flex items-center justify-center morphing-shape">
                          <span className="text-2xl font-bold">{case_.category}</span>
                        </div>
                        <p className="text-sm">Imagem do projeto será adicionada</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-forest-accent/80 rounded-full blur-sm animate-parallax-float" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-forest/60 rounded-full blur-sm animate-parallax-float delay-1000" />
                </div>
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