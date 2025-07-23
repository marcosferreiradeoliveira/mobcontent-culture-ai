import { Button } from "@/components/ui/button";
import { Brain, Camera, Smartphone, ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "ia",
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Desenvolvemos IAs generativas e narrativas interativas que revolucionam a experiência cultural. Do Oráculo Cultural ao Griot AI, criamos sistemas inteligentes que conectam pessoas à cultura de forma inovadora.",
    highlights: ["Oráculo Cultural", "IA Generativa", "Narrativas Interativas", "Griot AI"],
    gradient: "from-electric/20 to-electric/5"
  },
  {
    id: "audiovisual",
    icon: Camera,
    title: "Produção Audiovisual",
    description: "Criamos conteúdo audiovisual de alta qualidade para TV, streaming e instituições culturais. Séries, documentários e conteúdo de marca que transformam narrativas em experiências visuais impactantes.",
    highlights: ["Séries & Documentários", "Conteúdo para Streaming", "TV & Marca", "Narrativas Visuais"],
    gradient: "from-primary/20 to-primary/5"
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "Desenvolvimento de Apps",
    description: "Desenvolvemos aplicativos para museus, turismo e clientes corporativos com experiência internacional. Soluções digitais que aproximam pessoas da cultura através da tecnologia.",
    highlights: ["Apps para Museus", "Turismo Digital", "eTrilhas", "Clientes Internacionais"],
    gradient: "from-secondary/20 to-secondary/5"
  }
];

export const PillarsSection = () => {
  return (
    <section className="py-32 bg-gallery relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-primary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-6">
            Nossos <span className="text-gradient-electric">Pilares</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Três expertises integradas que formam nossa metodologia única 
            para transformar a interação humana com a cultura
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            
            return (
              <div
                key={pillar.id}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-500 gallery-hover border border-border/50 hover:border-electric/30 hover:shadow-2xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center group-hover:bg-electric/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-electric group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-electric transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-8">
                      <div className="grid grid-cols-2 gap-2">
                        {pillar.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-primary/70 bg-primary/5 px-3 py-2 rounded-lg group-hover:bg-electric/10 group-hover:text-electric transition-all duration-300"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline"
                      className="w-full group-hover:border-electric group-hover:text-electric transition-all duration-300"
                    >
                      Conheça os projetos
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-electric rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-electric rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Button 
            size="lg"
            className="bg-electric hover:bg-electric-dark text-white font-semibold px-12 py-4 electric-glow"
          >
            Explorar todas as soluções
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};