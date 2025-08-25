"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface ParticleHoverEffectProps {
  id: string;
  isHovered: boolean;
  backgroundImage?: string;
}

export const ParticleHoverEffect = ({ id, isHovered, backgroundImage }: ParticleHoverEffectProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          width: 800,  // largura da área
          height: 800  // altura da área
        },
      },
      color: {
        value: "#4ade80", // forest-accent color
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: {
          enable: true,  // Enable random opacity
          minimumValue: 0.1  // Minimum opacity value
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: 3,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4ade80",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: isHovered,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          lineLinked: {
            opacity: 0.5,
          },
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
      {backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.8
          }}
        />
      )}
      <Particles
        id={`tsparticles-${id}`}
        options={options}
        className="relative z-10"
        init={particlesInit}
      />
    </div>
  );
};
