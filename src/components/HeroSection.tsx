import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Camera, Smartphone } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useCursorTrail } from "@/hooks/useCursorTrail";
import { useNavigate } from "react-router-dom";
import blackWomanPortrait from "@/assets/black-woman-portrait.jpg";
import machineLearning from "@/assets/machine-learning.jpg";
import culturalArt from "@/assets/cultural-art.jpg";
import imaginePosters from "@/assets/imagine-poster.jpg";
import anastaciaGrande from "@/assets/AnastaciaGrande.jpeg";

export const HeroSection = () => {
  useCursorTrail();
  const navigate = useNavigate();
  
  const [currentPillar, setCurrentPillar] = useState(0);
  const pillars = [
    { icon: Camera, label: "Audiovisual", color: "text-white" },
    { icon: Brain, label: "IA", color: "text-forest-light" },
    { icon: Smartphone, label: "Apps", color: "text-white" }
  ];

  const taglineTyping = useTypingEffect({
    text: "Criamos o futuro da cultura. Em código, em pixels e em narrativas.",
    speed: 50,
    delay: 1000
  });

  const descriptionTyping = useTypingEffect({
    text: "Unindo IA, audiovisual e apps para redefinir a interação humana com a cultura.",
    speed: 30,
    delay: 2500
  });
  
  const handleStartProject = () => {
    navigate('/video-production');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPillar((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById('customCursor');
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    const hoverElements = document.querySelectorAll('button, a, .gallery-hover');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black experimental-cursor cursor-vector">
      {/* Main Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${anastaciaGrande})`,
          opacity: 0.7
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Floating Particles */}
      <div className="floating-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Parallax Background Layers */}
      <div className="absolute inset-0 parallax-layer" style={{ transform: 'translateZ(-10px) scale(1.1)' }}>
        <div className="neural-grid opacity-15" />
      </div>
      
      {/* Morphing Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-forest-accent/10 morphing-shape animate-parallax-float" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-forest-light/15 morphing-shape animate-parallax-float delay-[5s]" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-forest/20 morphing-shape animate-parallax-float delay-[10s]" />
      </div>
      
      {/* Enhanced Circuit Lines */}
      <div className="absolute inset-0 parallax-layer" style={{ transform: 'translateZ(-5px)' }}>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-accent to-transparent animate-electric-flow" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-light to-transparent animate-electric-flow delay-1000" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-forest-accent to-transparent animate-electric-flow delay-500" />
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-forest-light to-transparent animate-electric-flow delay-1500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo/Brand Animation */}
        <div className="mb-12 animate-fade-in-up parallax-layer" style={{ transform: 'translateZ(5px)' }}>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-texture">
            mob<span className="text-gradient-parallax">CONTENT</span>
          </h1>
        </div>

        {/* Pillar Transformation Animation */}
        <div className="mb-12 flex justify-center items-center space-x-8 animate-fade-in-up delay-300">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = index === currentPillar;
            return (
              <div
                key={pillar.label}
                className={`relative transition-all duration-700 ${
                  isActive ? 'scale-125 filter-electric' : 'scale-100 opacity-60'
                }`}
              >
                <div className={`p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 morphing-shape ${
                  isActive ? 'border-forest-accent shadow-forest' : ''
                }`}>
                  <Icon className={`w-12 h-12 ${pillar.color} ${isActive ? 'animate-float filter-forest' : ''}`} />
                </div>
                <p className={`mt-4 text-sm font-medium ${
                  isActive ? 'text-forest-light' : 'text-white/70'
                }`}>
                  {pillar.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Tagline */}
        <div className="mb-12 animate-fade-in-up delay-600">
          <h2 className="text-3xl md:text-5xl font-light text-white/90 mb-6 leading-tight">
            Inteligência Artificial para
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Narrativas <span className="text-gradient-forest">Culturais</span>
          </h2>
          
          <div className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p className={`${taglineTyping.isTyping ? 'typing-cursor' : ''}`}>
              {taglineTyping.displayText}
            </p>
            <p className={`${descriptionTyping.isTyping ? 'typing-cursor' : ''}`}>
              {descriptionTyping.displayText}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-900">
          <a href="#contato" className="inline-flex">
            <Button 
              size="lg" 
              className="bg-forest hover:bg-forest-dark text-white font-semibold px-8 py-4 forest-glow group morphing-shape"
            >
              Começar Projeto
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          
          {/* Temporarily commented out
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 gallery-hover"
          >
            Nossa história
          </Button>
          */}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-forest-accent rounded-full animate-parallax-float delay-1000 parallax-layer" />
      <div className="absolute top-40 right-32 w-4 h-4 bg-forest-light/60 rounded-full animate-parallax-float delay-2000 parallax-layer" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-forest rounded-full animate-parallax-float delay-3000 parallax-layer" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-forest-accent/80 rounded-full animate-parallax-float delay-4000 parallax-layer" />
      
      {/* Custom Cursor */}
      <div className="custom-cursor" id="customCursor" />
    </section>
  );
};