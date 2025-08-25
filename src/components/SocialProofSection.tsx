import { Award, Globe, Trophy, Target } from "lucide-react";
import theAiArtImage from "@/assets/theaiart.jpeg";
import globalFusionImage from "@/assets/globalfusion.jpeg";
import sxswImage from "@/assets/sxsw.jpg";

const clients = [
  { 
    name: "Fundação Roberto Marinho", 
    logo: "FRM",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/FRM.png"
  },
  { 
    name: "Canal Brasil",
    logo: "CB",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/CB.png"
  },
  { 
    name: "Futura",
    logo: "FUT",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/Futura.png"
  },
  { 
    name: "Conservation International",
    logo: "CI",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/CI.png"
  },
  { 
    name: "Museu do Amanhã",
    logo: "MDA",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/MDA.png"
  },
  { 
    name: "Governo do Estado do Rio de Janeiro",
    logo: "GERJ",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/GE.png"
  },
  { 
    name: "Sebrae",
    logo: "SEBRAE",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/sebrae.png"
  },
  { 
    name: "British Council",
    logo: "BC",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/BC.png"
  },
  { 
    name: "Museu da Língua Portuguesa", 
    logo: "MLP", 
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/MLP.png" 
  },
  { 
    name: "Benfeitoria",
    logo: "BENF",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/Benfeitoria.png"
  },
  { 
    name: "Webedia",
    logo: "WEB",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/webedia-group.png"
  },
  { 
    name: "BR Malls",
    logo: "BRMALLS",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/brmalls.png"
  },
  { 
    name: "Credipronto",
    logo: "CRED",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/crediponto.png"
  },
  { 
    name: "Abstartups",
    logo: "ABST",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/logo-branca.png"
  },
  { 
    name: "CBEDS",
    logo: "CEBDS",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/CEBDS.png"
  },
  { 
    name: "AccesoPanam",
    logo: "AP",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/panam.png"
  },
  { 
    name: "Sistac",
    logo: "SIST",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/sistac-logo.png"
  },
  { 
    name: "Multiseguros",
    logo: "MULTI",
    logoImage: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/multiseguros.png"
  }
];

const awards = [
  {
    icon: Award,
    title: "British Council",
    subtitle: "Young Creative Entrepreneur",
    description: "Reconhecimento internacional pela inovação em projetos culturais",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2022/12/1400226_10151692115789499_1362031008_o.jpeg",
    country: "gb"
  },
  {
    icon: Trophy,
    title: "Prêmios TAL",
    subtitle: "Prêmio de TVs públicas da América Latina",
    description: "Série 'Garagem Maker' indicada a melhor interprograma",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/garagem-maker.jpg",
    country: "uy"
  },
  {
    icon: Globe,
    title: "Sunny Side of The Doc",
    subtitle: "Prêmio de melhor projeto transmídia",
    description: "Bike Lovers App de Segunda Tela no Docs Wanted",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_Yx3fc6ALvSC7-DM1hWCeiK5oxZs5Zg6qg&s",
    country: "fr"
  },
  {
    icon: Target,
    title: "The AI Art Magazine",
    subtitle: "Escolhido pela revista alemã",
    description: "Selecionado com destaque pela curadora Hannah Johson com o Golden Ticket",
    image: theAiArtImage,
    country: "de"
  },
  {
    icon: Award,
    title: "Power To The Pixel",
    subtitle: "Selecionado brasileiro para competição internacional",
    description: "Projeto selecionado para competição internacional de projetos Transmídia",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2025/07/Screenshot-2025-07-30-at-17.17.24.png",
    country: "gb"
  },
  {
    icon: Globe,
    title: "Global Fusion",
    subtitle: "Exposição de arte gerada por IA",
    description: "Obra 'Anastácia' exibida na Alemanha e Áustria",
    image: globalFusionImage,
    country: "at"
  },
  {
    icon: Trophy,
    title: "Culture Shift",
    subtitle: "Evento do British Council",
    description: "Edição realizada no Brasil com a empresa Technology Will Save Us",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2024/03/14662161862_d6f780bd6c_o.jpg",
    country: "br"
  },
  {
    icon: Target,
    title: "MICSUR",
    subtitle: "Mercado de Indústrias Culturais da América Latina",
    description: "Selecionado para caravana brasileira no evento",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwQ0IsreJNSGFcOHcFyCJdtSjqqPjvzX4WQ&s",
    country: "ar"
  },
  {
    icon: Award,
    title: "SXSW",
    subtitle: "Selecionado pela Apex Brasil",
    description: "Participação com stand no evento",
    image: sxswImage,
    country: "us"
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
                <div className={`${client.name === 'Fundação Roberto Marinho' ? 'h-40' : 'h-28'} bg-card/20 rounded-lg flex items-center justify-center p-6`}>
                  {client.logoImage ? (
                    <img 
                      src={client.logoImage} 
                      alt={client.name} 
                      className={`mx-auto ${client.name === 'Fundação Roberto Marinho' ? 'h-28 w-auto' : 'h-16 w-auto'}`}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="h-16 w-16 bg-forest-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-forest font-bold text-sm">{client.logo}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Numbers Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card/20 rounded-xl p-6 text-center test-change">
              <div className="text-4xl md:text-5xl font-black text-forest mb-2">50+</div>
              <div className="text-white/80 uppercase">projetos Culturais</div>
            </div>
            <div className="bg-card/20 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-black text-forest mb-2">400+</div>
              <div className="text-white/80 uppercase">Videos Produzidos</div>
            </div>
            <div className="bg-card/20 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-black text-forest mb-2">20+</div>
              <div className="text-white/80 uppercase">Apps Produzidos</div>
            </div>
            <div className="bg-card/20 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-black text-forest mb-2">15+</div>
              <div className="text-white/80 uppercase">Anos no Mercado</div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
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
                  className="group relative parallax-layer overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transform: `translateZ(${index * 4}px) rotateX(${index}deg)`
                  }}
                >
                  {/* Background Image */}
                  {award.image && (
                    <div 
                      className="absolute inset-0 z-0 opacity-40"
                      style={{
                        backgroundImage: `url(${award.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  )}
                  
                  <div className="relative z-10 bg-card/20 border-2 border-white/15 rounded-xl p-8 h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-forest-accent/10 rounded-xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300 morphing-shape">
                        <Icon className="w-6 h-6 text-forest group-hover:scale-125 filter-forest transition-all duration-300" />
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
                      {award.country && (
                        <img 
                          src={`https://flagcdn.com/w20/${award.country.toLowerCase()}.png`}
                          alt={award.country}
                          className="w-4 h-4 ml-1"
                        />
                      )}
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-forest-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};