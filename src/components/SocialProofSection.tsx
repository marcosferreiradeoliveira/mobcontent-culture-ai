import { Award, Globe, Trophy, Target } from "lucide-react";

const clients = [
  { name: "Fundação Roberto Marinho", logo: "FRM" },
  { name: "Museu do Amanhã", logo: "MDA" },
  { name: "AccesoPanam", logo: "AP" },
  { name: "Museu da Língua Portuguesa", logo: "MLP" },
  { name: "British Council", logo: "BC" },
  { name: "Sunny Side of The Doc", logo: "SSD" }
];

const awards = [
  {
    icon: Award,
    title: "British Council",
    subtitle: "Young Creative Entrepreneur",
    description: "Reconhecimento internacional pela inovação em projetos culturais"
  },
  {
    icon: Trophy,
    title: "Prêmio TAL",
    subtitle: "Tecnologia Aplicada à Linguagem",
    description: "Premiação pela excelência em IA aplicada à cultura"
  },
  {
    icon: Globe,
    title: "Sunny Side of The Doc",
    subtitle: "Festival Internacional",
    description: "Seleção em festival de documentários em La Rochelle, França"
  },
  {
    icon: Target,
    title: "The AI Art Magazine",
    subtitle: "Destaque em IA Criativa",
    description: "Reconhecimento por inovação em arte generativa"
  },
  {
    icon: Award,
    title: "Power To The Pixel",
    subtitle: "Festival Digital",
    description: "Seleção em festival de narrativas transmídia"
  },
  {
    icon: Globe,
    title: "Global Fusion",
    subtitle: "Inovação Cultural",
    description: "Prêmio por projetos de fusão cultural digital"
  },
  {
    icon: Trophy,
    title: "Culture Shift",
    subtitle: "Transformação Digital",
    description: "Reconhecimento por mudança cultural através da tecnologia"
  },
  {
    icon: Target,
    title: "MICSUR",
    subtitle: "Cooperação Internacional",
    description: "Mercado de Indústrias Culturais do Sul"
  },
  {
    icon: Award,
    title: "Projetos Internacionais",
    subtitle: "Expansão Global",
    description: "Clientes e projetos em diversos países"
  }
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-lab-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="neural-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Clients Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Clientes que <span className="text-gradient-forest">Confiam</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Grandes instituições culturais e marcas escolhem a mobCONTENT 
            para transformar suas narrativas
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative parallax-layer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateZ(${index * 2}px)`
              }}
            >
              <div className="aspect-square bg-card/20 rounded-lg flex items-center justify-center gallery-hover border border-white/10 hover:border-forest-accent/40 transition-all duration-300 morphing-shape">
                {/* Placeholder for logo - will be replaced with actual logos */}
                <div className="text-center">
                  <div className="w-6 h-6 bg-forest-accent/10 rounded-lg mx-auto mb-1 flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors morphing-shape">
                    <span className="text-forest font-bold text-xs">{client.logo}</span>
                  </div>
                  <span className="text-xs text-white/60 group-hover:text-forest transition-colors">
                    {client.name.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Reconhecimento <span className="text-gradient-forest">Internacional</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Nosso trabalho é reconhecido globalmente por sua excelência 
            e impacto transformador na cultura
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            
            return (
              <div
                key={award.title}
                className="group relative parallax-layer"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `translateZ(${index * 4}px) rotateX(${index}deg)`
                }}
              >
                <div className="bg-card/20 border border-white/10 rounded-xl p-3 h-full gallery-hover hover:border-forest-accent/40 hover:shadow-forest transition-all duration-500 morphing-shape">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-forest-accent/10 rounded-xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300 morphing-shape">
                      <Icon className="w-5 h-5 text-forest group-hover:scale-125 filter-forest transition-all duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-forest-light transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-forest font-semibold text-xs mb-1">
                      {award.subtitle}
                    </p>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-forest-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projetos Culturais" },
            { number: "10+", label: "Países Atendidos" },
            { number: "1M+", label: "Pessoas Impactadas" },
            { number: "5+", label: "Prêmios Internacionais" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black text-forest mb-2 group-hover:scale-125 transition-transform duration-300 filter-forest">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};