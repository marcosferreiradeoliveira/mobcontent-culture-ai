import { Button } from "@/components/ui/button";
import { Brain, Camera, Smartphone, ArrowRight } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const pillars = [
  {
    id: "ia",
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Desenvolvemos IAs generativas e narrativas interativas que revolucionam a experiência cultural. Do Oráculo Cultural ao Griot AI, criamos sistemas inteligentes que conectam pessoas à cultura de forma inovadora.",
    highlights: ["Oráculo Cultural", "IA Generativa", "Narrativas Interativas", "Griot AI"],
    gradient: "from-forest-accent/20 to-forest-accent/5"
  },
  {
    id: "audiovisual",
    icon: Camera,
    title: "Produção Audiovisual",
    description: "Criamos conteúdo audiovisual de alta qualidade para TV, streaming e instituições culturais. Séries, documentários e conteúdo de marca que transformam narrativas em experiências visuais impactantes.",
    highlights: ["Séries & Documentários", "Conteúdo para Streaming", "TV & Marca", "Narrativas Visuais"],
    gradient: "from-forest/20 to-forest/5"
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "Desenvolvimento de Apps",
    description: "Desenvolvemos aplicativos para museus, turismo e clientes corporativos com experiência internacional. Soluções digitais que aproximam pessoas da cultura através da tecnologia.",
    highlights: ["Apps para Museus", "Turismo Digital", "eTrilhas", "Clientes Internacionais"],
    gradient: "from-forest-light/20 to-forest-light/5"
  }
];

export const PillarsSection = () => {
  const sectionDescription = useTypingEffect({
    text: "Três expertises integradas que formam nossa metodologia única para transformar a interação humana com a cultura",
    speed: 40,
    delay: 500
  });

  return (
    <section className="py-16 bg-lab-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-accent/15 via-transparent to-forest/10" />
        <div className="neural-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Nossos <span className="text-gradient-forest">Pilares</span>
          </h2>
          <p ref={sectionDescription.ref} className={`text-lg text-white/70 max-w-2xl mx-auto leading-relaxed ${sectionDescription.isTyping ? 'typing-cursor' : ''}`}>
            {sectionDescription.displayText}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <div
                key={pillar.id}
                className="group relative parallax-layer"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: `translateZ(${index * 5}px) rotateY(${index * 2}deg)`
                }}
              >
                <div className="bg-card/20 border border-white/10 rounded-2xl p-8 h-full gallery-hover hover:border-forest-accent/40 hover:shadow-forest backdrop-blur-sm transition-all duration-500 morphing-shape">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-forest-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300 morphing-shape">
                      <Icon className="w-8 h-8 text-forest-accent group-hover:scale-125 filter-forest transition-all duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-white mb-2 group-hover:text-forest-light transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white transition-all duration-300 morphing-shape text-xs"
                    >
                      Explorar {pillar.title}
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-forest-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-forest-light rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float delay-150" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-forest hover:bg-forest-dark text-white font-semibold px-12 py-4 forest-glow morphing-shape"
          >
            Explorar todas as soluções
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};