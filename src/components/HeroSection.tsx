import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Camera, Smartphone } from "lucide-react";

export const HeroSection = () => {
  const [currentPillar, setCurrentPillar] = useState(0);
  const pillars = [
    { icon: Camera, label: "Audiovisual", color: "text-white" },
    { icon: Brain, label: "IA", color: "text-electric" },
    { icon: Smartphone, label: "Apps", color: "text-white" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPillar((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-lab-dark to-secondary">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      {/* Electric Circuit Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric to-transparent animate-electric-flow" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric to-transparent animate-electric-flow delay-1000" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-electric to-transparent animate-electric-flow delay-500" />
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-electric to-transparent animate-electric-flow delay-1500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo/Brand Animation */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            mob<span className="text-gradient-electric">CONTENT</span>
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
                <div className={`p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 ${
                  isActive ? 'border-electric shadow-electric' : ''
                }`}>
                  <Icon className={`w-12 h-12 ${pillar.color} ${isActive ? 'animate-float' : ''}`} />
                </div>
                <p className={`mt-4 text-sm font-medium ${
                  isActive ? 'text-electric' : 'text-white/70'
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
            Narrativas <span className="text-gradient-electric">Culturais</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Criamos o futuro da cultura. Em código, em pixels e em narrativas.
            <br />
            Unindo IA, audiovisual e apps para redefinir a interação humana com a cultura.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-900">
          <Button 
            size="lg" 
            className="bg-electric hover:bg-electric-dark text-white font-semibold px-8 py-4 electric-glow group"
          >
            Conheça nossos projetos
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 gallery-hover"
          >
            Nossa história
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-electric rounded-full animate-float delay-1000" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-electric/60 rounded-full animate-float delay-2000" />
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-electric rounded-full animate-float delay-3000" />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-electric/80 rounded-full animate-float delay-4000" />
    </section>
  );
};