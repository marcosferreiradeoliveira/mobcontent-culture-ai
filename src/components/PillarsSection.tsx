import { AnalyticsButton } from "@/components/ui/analytics-button";
import { Button } from "@/components/ui/button";
import { Brain, Camera, Smartphone, ArrowRight } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useState } from "react";
import { ParticleHoverEffect } from "./ParticleHoverEffect";
import { useNavigate } from "react-router-dom";
import machineLearningImage from "@/assets/machine-learning.jpg";
import texturaImage from "@/assets/textura.png";
import anastaciaImage from "@/assets/anastacia.png";
import museuLinguaImage from "@/assets/cropped-MuseuDaLinguaPOrtuguesa2.jpg";
import mg0671Image from "@/assets/MG_0671-1024x683.jpg";

const pillars = [
  {
    id: "ia",
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Desenvolvemos IAs generativas e narrativas interativas que revolucionam a experiência cultural. Do Oráculo Cultural ao Griot AI, criamos sistemas inteligentes que conectam pessoas à cultura de forma inovadora.",
    highlights: ["Oráculo Cultural", "IA Generativa", "Narrativas Interativas", "Griot AI"],
    gradient: "from-forest-accent/20 to-forest-accent/5",
    backgroundImage: anastaciaImage,
    path: '/ai'
  },
  {
    id: "audiovisual",
    icon: Camera,
    title: "Produção Audiovisual",
    description: "Criamos conteúdo audiovisual de alta qualidade para TV, streaming e instituições culturais. Séries, documentários e conteúdo de marca que transformam narrativas em experiências visuais impactantes.",
    highlights: ["Séries & Documentários", "Conteúdo para Streaming", "TV & Marca", "Narrativas Visuais"],
    gradient: "from-forest/20 to-forest/5",
    backgroundImage: museuLinguaImage,
    path: '/video-production'
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "Desenvolvimento de Apps",
    description: "Desenvolvemos aplicativos para museus, turismo e clientes corporativos com experiência internacional. Soluções digitais que aproximam pessoas da cultura através da tecnologia.",
    highlights: ["Apps para Museus", "Turismo Digital", "eTrilhas", "Clientes Internacionais"],
    gradient: "from-forest-light/20 to-forest-light/5",
    backgroundImage: mg0671Image,
    path: '/desenvolvimento-apps'
  }
];

export const PillarsSection = () => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const sectionDescription = useTypingEffect({
    text: "Soluções integradas que formam nossa metodologia única para transformar a interação humana com a cultura",
    speed: 40,
    delay: 500
  });

  const handlePillarClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section 
      id="solucoes" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${texturaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-accent/15 via-black/20 to-forest/15" />
        <div className="neural-grid opacity-15" />
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
            const isHovered = hoveredPillar === pillar.id;
            
            return (
              <div
                key={pillar.id}
                className="group relative"
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <ParticleHoverEffect id={pillar.id} isHovered={isHovered} />
                  {pillar.backgroundImage && !imageErrors[pillar.id] && (
                    <div 
                      className="absolute inset-0 z-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${pillar.backgroundImage})`,
                        opacity: 0.5,
                      }}
                    >
                      <img 
                        src={pillar.backgroundImage}
                        alt=""
                        className="hidden"
                        onError={() => setImageErrors(prev => ({ ...prev, [pillar.id]: true }))}
                      />
                    </div>
                  )}
                  <div 
                    className={`relative border border-white/10 rounded-2xl p-10 h-full gallery-hover hover:border-forest-accent/40 hover:shadow-forest backdrop-blur-[1px] transition-all duration-500 z-10 bg-black/40`}
                    style={{
                      transform: `translateZ(${index * 5}px) rotateY(${index * 2}deg)`,
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-forest-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-forest-accent/25 transition-colors duration-300">
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
                      <AnalyticsButton
                        eventName={`pillar_${pillar.id}_click`}
                        eventCategory="engagement"
                        eventLabel={`Pillar CTA - ${pillar.title}`}
                        variant="outline"
                        size="sm"
                        className="w-full border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white transition-all duration-300 morphing-shape text-xs"
                        onClick={() => handlePillarClick(pillar.path)}
                      >
                        Saiba mais
                      </AnalyticsButton>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-forest-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float" />
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-forest-light rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-parallax-float delay-150" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};