import { useEffect, useState } from "react";
import { Brain, Camera, Smartphone } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useCursorTrail } from "@/hooks/useCursorTrail";
import { useNavigate } from "react-router-dom";
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouch) return;

    const cursor = document.getElementById('customCursor');
    if (!cursor) return;
    let rafId: number | null = null;
    let x = 0;
    let y = 0;

    const updateCursor = () => {
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (rafId === null) rafId = requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => cursor.classList.add('hover');
    const handleMouseLeave = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    const hoverElements = document.querySelectorAll('button, a, .gallery-hover');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full max-w-[100vw] flex flex-col items-start md:items-center justify-start md:justify-center overflow-x-hidden bg-black experimental-cursor cursor-vector pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Main Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${anastaciaGrande})`,
          opacity: 0.7
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Floating Particles - hidden on very small to avoid overflow */}
      <div className="floating-particles hidden sm:block">
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

      {/* Parallax Background - sem scale para evitar scroll horizontal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="neural-grid opacity-15 w-full h-full" />
      </div>

      {/* Morphing Geometric Shapes - hidden on small screens */}
      <div className="absolute inset-0 hidden sm:block pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-forest-accent/10 morphing-shape animate-parallax-float" />
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-forest-light/15 morphing-shape animate-parallax-float delay-[5s]" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-forest/20 morphing-shape animate-parallax-float delay-[10s]" />
      </div>

      {/* Circuit Lines - thin and contained */}
      <div className="absolute inset-0 parallax-layer overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-forest-accent to-transparent animate-electric-flow" />
        <div className="absolute top-3/4 left-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-forest-light to-transparent animate-electric-flow delay-1000" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px h-full bg-gradient-to-b from-transparent via-forest-accent to-transparent animate-electric-flow delay-500" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px h-full bg-gradient-to-b from-transparent via-forest-light to-transparent animate-electric-flow delay-1500" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col justify-center min-w-0 box-border max-w-[100vw]">
        {/* Logo/Brand Animation */}
        <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 tracking-tighter text-white drop-shadow-lg">
            mob<span className="text-gradient-parallax">CONTENT</span>
          </h1>
        </div>

        {/* Pillar Transformation Animation */}
        <div className="mb-6 sm:mb-8 md:mb-12 flex flex-row sm:flex-row justify-center items-center gap-4 sm:gap-4 md:gap-8 animate-fade-in-up delay-300">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isActive = index === currentPillar;
            return (
              <div
                key={pillar.label}
                className={`relative transition-all duration-700 flex items-center gap-3 sm:flex-col ${
                  isActive ? 'scale-110 sm:scale-125 filter-electric' : 'scale-100 opacity-60'
                }`}
              >
                <div className={`p-4 sm:p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 morphing-shape ${
                  isActive ? 'border-forest-accent shadow-forest' : ''
                }`}>
                  <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${pillar.color} ${isActive ? 'animate-float filter-forest' : ''}`} />
                </div>
                <p className={`sm:mt-4 text-sm font-medium ${
                  isActive ? 'text-forest-light' : 'text-white/70'
                }`}>
                  {pillar.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Tagline */}
        <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-in-up delay-600">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white/90 mb-3 sm:mb-6 leading-tight">
            Inteligência Artificial para
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight">
            Narrativas <span className="text-gradient-forest">Culturais</span>
          </h2>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed space-y-2 sm:space-y-4 px-0 sm:px-2">
            <p className={`${taglineTyping.isTyping ? 'typing-cursor' : ''}`}>
              {taglineTyping.displayText}
            </p>
            <p className={`${descriptionTyping.isTyping ? 'typing-cursor' : ''}`}>
              {descriptionTyping.displayText}
            </p>
          </div>
        </div>

      </div>

      {/* Floating dots - hidden on very small to avoid overflow */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-forest-accent rounded-full animate-parallax-float delay-1000 parallax-layer hidden sm:block" />
      <div className="absolute top-40 right-32 w-4 h-4 bg-forest-light/60 rounded-full animate-parallax-float delay-2000 parallax-layer hidden sm:block" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-forest rounded-full animate-parallax-float delay-3000 parallax-layer hidden sm:block" />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-forest-accent/80 rounded-full animate-parallax-float delay-4000 parallax-layer hidden sm:block" />
      
      {/* Custom Cursor */}
      <div className="custom-cursor" id="customCursor" />
    </section>
  );
};