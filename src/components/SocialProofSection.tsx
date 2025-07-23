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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="neural-grid" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Clients Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Clientes que <span className="text-gradient-forest">Confiam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Grandes instituições culturais e marcas escolhem a mobCONTENT 
            para transformar suas narrativas
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative parallax-layer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateZ(${index * 2}px)`
              }}
            >
              <div className="aspect-square bg-gallery rounded-2xl flex items-center justify-center gallery-hover border border-border/20 hover:border-forest-accent/40 transition-all duration-300 morphing-shape">
                {/* Placeholder for logo - will be replaced with actual logos */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-forest-accent/10 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors morphing-shape">
                    <span className="text-forest font-bold text-sm">{client.logo}</span>
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-forest transition-colors">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Reconhecimento <span className="text-gradient-forest">Internacional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <div className="bg-white border border-border/20 rounded-2xl p-6 h-full gallery-hover hover:border-forest-accent/40 hover:shadow-forest transition-all duration-500 morphing-shape">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-forest-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300 morphing-shape">
                      <Icon className="w-7 h-7 text-forest group-hover:scale-125 filter-forest transition-all duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-forest-light transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-forest font-semibold text-sm mb-3">
                      {award.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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