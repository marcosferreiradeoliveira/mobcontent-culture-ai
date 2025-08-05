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
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                  <div className="w-8 h-8 bg-forest-accent/10 rounded-lg mx-auto mb-1 flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors morphing-shape">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="bg-card/20 border border-white/10 rounded-xl p-4 h-full gallery-hover hover:border-forest-accent/40 hover:shadow-forest transition-all duration-500 morphing-shape">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-forest-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300 morphing-shape">
                      <Icon className="w-7 h-7 text-forest group-hover:scale-125 filter-forest transition-all duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-forest-light transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-forest font-semibold text-sm mb-2">
                      {award.subtitle}
                    </p>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-forest-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float" />
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