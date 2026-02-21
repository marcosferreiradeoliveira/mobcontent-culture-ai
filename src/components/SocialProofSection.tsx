import { Award, Globe, Trophy, Target } from "lucide-react";
import { useState } from "react";
import showMambembeImage from "@/assets/ShowMambembe-1536x864.jpg";
// Parceiros – logos em assets/partners
import imgFundacaoRobertoMarinho from "@/assets/partners/fundacao-roberto-marinho-286x300.png";
import imgFutura from "@/assets/partners/futura.png";
import imgMuseuAmanha from "@/assets/partners/museu-do-amanha-300x189.png";
import imgLogoBranca from "@/assets/partners/logo-branca-300x68.png";
import imgGovRj from "@/assets/partners/GOV-RJ-300x197.png";
import imgSebrae from "@/assets/partners/sebrae-300x149.png";
import imgBritishCouncil from "@/assets/partners/british-council-300x87.png";
import imgYCEMedium from "@/assets/YCEMedium.jpeg";
import imgMuseuLingua from "@/assets/partners/Museu-da-Lingua-Portuguesa-300x216.png";
import imgBenfeitoria from "@/assets/partners/Benfeitoria-300x76.png";
import imgWebedia from "@/assets/partners/webedia-group-300x75.png";
import imgBrmalls from "@/assets/partners/brmalls-300x66.png";
import imgCrediponto from "@/assets/partners/crediponto-300x44.png";
import imgSistac from "@/assets/partners/sistac-logo-300x121.png";
import imgMultiseguros from "@/assets/partners/multiseguros.png";
import imgCebds from "@/assets/cebds.png";
import imgCanalBrasil from "@/assets/canal-brasil-300x229.png";
import imgSoftex from "@/assets/partners/softex-300x92.png";
import imgRioCriativo from "@/assets/partners/rio-criativo.png";
import imgCertificadoRioCriativo from "@/assets/certificado-rio-criativo-300x213.jpg";
// Premiações – logos em assets/partners
import imgGaragemMaker from "@/assets/garagem-maker-300x225.jpg";
import imgPremioTelaViva768 from "@/assets/premio-tela-viva-768x512.jpg";
import imgSunnySideDocAwards from "@/assets/sunny-side-doc-awards-300x225.jpg";
import imgPttp from "@/assets/PTTP.png";
import imgSxsw from "@/assets/sxsw.jpg";
import theAiArtImage from "@/assets/theaiart.jpeg";
import globalFusionImage from "@/assets/globalfusion.jpeg";

const clients = [
  { name: "Fundação Roberto Marinho", logo: "FRM", logoImage: imgFundacaoRobertoMarinho },
  { name: "Canal Brasil", logo: "CB", logoImage: imgCanalBrasil },
  { name: "Futura", logo: "FUT", logoImage: imgFutura },
  { name: "Museu do Amanhã", logo: "MDA", logoImage: imgMuseuAmanha },
  { name: "Governo do Estado do Rio de Janeiro", logo: "GERJ", logoImage: imgGovRj },
  { name: "Sebrae", logo: "SEBRAE", logoImage: imgSebrae },
  { name: "British Council", logo: "BC", logoImage: imgBritishCouncil },
  { name: "Museu da Língua Portuguesa", logo: "MLP", logoImage: imgMuseuLingua },
  { name: "Benfeitoria", logo: "BENF", logoImage: imgBenfeitoria },
  { name: "Webedia", logo: "WEB", logoImage: imgWebedia },
  { name: "BR Malls", logo: "BRMALLS", logoImage: imgBrmalls },
  { name: "Credipronto", logo: "CRED", logoImage: imgCrediponto },
  { name: "CEBDS", logo: "CEBDS", logoImage: imgCebds },
  { name: "Sistac", logo: "SIST", logoImage: imgSistac },
  { name: "Multiseguros", logo: "MULTI", logoImage: imgMultiseguros },
  { name: "Softex", logo: "SOFTEX", logoImage: imgSoftex },
  { name: "Logo Branca", logo: "LB", logoImage: imgLogoBranca },
  { name: "Rio Criativo", logo: "RC", logoImage: imgRioCriativo },
];

const awards = [
  {
    icon: Award,
    title: "British Council",
    subtitle: "Young Creative Entrepreneur",
    description: "Reconhecimento internacional pela inovação em projetos culturais",
    image: imgYCEMedium,
    country: "gb"
  },
  {
    icon: Trophy,
    title: "Prêmios TAL",
    subtitle: "Prêmio de TVs públicas da América Latina",
    description: "Série 'Garagem Maker' indicada a melhor interprograma",
    image: imgGaragemMaker,
    country: "uy"
  },
  {
    icon: Globe,
    title: "Sunny Side of The Doc",
    subtitle: "Prêmio de melhor projeto transmídia",
    description: "Bike Lovers App de Segunda Tela no Docs Wanted",
    image: imgSunnySideDocAwards,
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
    image: imgPttp,
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
    title: "Prêmio Tela Viva",
    subtitle: "Reconhecimento em produção audiovisual",
    description: "Premiação em produção para TV e streaming",
    image: imgPremioTelaViva768,
    country: "br"
  },
  {
    icon: Award,
    title: "Rio Criativo",
    subtitle: "Certificado Rio Criativo",
    description: "Reconhecimento em projetos culturais do Rio de Janeiro",
    image: imgCertificadoRioCriativo,
    country: "br"
  },
  {
    icon: Award,
    title: "SXSW",
    subtitle: "Selecionado pela Apex Brasil",
    description: "Participação com stand no evento",
    image: imgSxsw,
    country: "us"
  }
];

export const SocialProofSection = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-lab-darker relative overflow-hidden"
      style={{
        backgroundImage: `url(${showMambembeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70">
        <div className="neural-grid opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Clients Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
              Clientes que <span className="text-gradient-forest">Confiam</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-1">
              Grandes instituições culturais e marcas escolhem a mobCONTENT 
              para transformar suas narrativas
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group relative parallax-layer"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateZ(${index * 2}px)`
                }}
              >
                <div className="aspect-square w-full bg-card/20 rounded-lg flex items-center justify-center p-3 sm:p-4">
                  {client.logoImage && !imageErrors[`client-${index}`] ? (
                    <img 
                      src={client.logoImage} 
                      alt={client.name} 
                      className="mx-auto logo-parceiro-branco max-h-full max-w-full w-full h-full object-contain"
                      style={{ objectFit: 'contain' }}
                      onError={() => setImageErrors(prev => ({ ...prev, [`client-${index}`]: true }))}
                    />
                  ) : (
                    <div className="h-12 w-12 bg-forest-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-forest font-bold text-xs">{client.logo}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Numbers Section */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-card/20 rounded-xl p-4 sm:p-6 text-center test-change">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-forest mb-1 sm:mb-2">50+</div>
              <div className="text-white/80 uppercase text-xs sm:text-sm">projetos Culturais</div>
            </div>
            <div className="bg-card/20 rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-forest mb-1 sm:mb-2">400+</div>
              <div className="text-white/80 uppercase text-xs sm:text-sm">Videos Produzidos</div>
            </div>
            <div className="bg-card/20 rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-forest mb-1 sm:mb-2">20+</div>
              <div className="text-white/80 uppercase text-xs sm:text-sm">Apps Produzidos</div>
            </div>
            <div className="bg-card/20 rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-forest mb-1 sm:mb-2">15+</div>
              <div className="text-white/80 uppercase text-xs sm:text-sm">Anos no Mercado</div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
              Reconhecimento <span className="text-gradient-forest">Internacional</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-1">
              Nosso trabalho é reconhecido globalmente por sua excelência 
              e impacto transformador na cultura
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
                  {award.image && !imageErrors[`award-${index}`] && (
                    <div 
                      className="absolute inset-0 z-0 opacity-40"
                      style={{
                        backgroundImage: `url(${award.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <img 
                        src={award.image}
                        alt=""
                        className="hidden"
                        onError={() => setImageErrors(prev => ({ ...prev, [`award-${index}`]: true }))}
                      />
                    </div>
                  )}
                  
                  <div className="relative z-10 bg-card/20 border-2 border-white/15 rounded-xl p-5 sm:p-8 h-full">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-accent/10 rounded-xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300 morphing-shape">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest group-hover:scale-125 filter-forest transition-all duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-forest-light transition-colors duration-300">
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