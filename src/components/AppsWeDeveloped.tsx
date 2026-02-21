import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import vetoresImage from "@/assets/vetores.jpeg";
import apdxImage from "@/assets/APDX-768x730.jpg";
import museuAmanhaImage from "@/assets/MuseuDoAmanha-300x277.png";
import antigamenteImage from "@/assets/antigamente2.png";
import cidadesEmpreendedorasImage from "@/assets/CidadesEmpreendedoras-300x193.jpg";
import montanaLimpiaImage from "@/assets/MontanaLimpia-1-300x169.jpg";
import trilhaTranscariocaImage from "@/assets/Trilha-Transcarioca-300x168.jpg";
import polissonorumImage from "@/assets/Polissonorum-1-300x209.jpg";
import itinereImage from "@/assets/itinere-1-300x169.jpg";
import etrilhasImage from "@/assets/Etrilhas-1-300x169.jpg";
import animapaImage from "@/assets/Animapa2-768x454.jpg";

interface AppCardProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  imageUrl?: string;
}

const AppCard = ({ title, description, technologies, category, imageUrl }: AppCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 text-white">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg sm:text-xl min-w-0 text-white">{title}</CardTitle>
          <Badge variant="outline" className="bg-forest/10 text-forest border-white/20">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-white/90 mb-4 flex-1">{description}</p>
        {imageUrl && !imageError && (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover mb-4" 
            onError={() => setImageError(true)}
          />
        )}
        {imageError && imageUrl && (
          <div className="w-full h-48 bg-gradient-to-br from-forest-accent/25 to-white/10 flex items-center justify-center mb-4 rounded">
            <div className="text-forest-accent/50 text-xs text-center px-4">
              {title}
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal bg-white/10 text-white/90 border-white/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const AppsWeDeveloped = () => {
  const sectionTitle = useTypingEffect({
    text: "Aplicativos que desenvolvemos",
    speed: 40,
    delay: 200,
  });

  const apps = [
    {
      title: "App Museu do Amanhã",
      description: "Um guia interativo que enriquece a experiência do visitante no Museu do Amanhã, utilizando a tecnologia de beacons.",
      technologies: ["Aplicativo Móvel", "Internet das Coisas (IoT)"],
      category: "Cultura e Interatividade",
      imageUrl: museuAmanhaImage
    },
    {
      title: "Griô AI",
      description: "Um projeto que usa IA generativa e storytelling interativo para dar voz a figuras históricas e personalizar a experiência narrativa de forma educativa e cultural.",
      technologies: ["Inteligência Artificial (IA) Generativa", "Storytelling Interativo"],
      category: "IA e Cultura",
      imageUrl: "src/assets/grioai.png"
    },
    {
      title: "Vetores Vertentes",
      description: "App da exposição do CCBB com acessibilidade e audioguia.",
      technologies: ["Flutter"],
      category: "Cultura e Acessibilidade",
      imageUrl: vetoresImage
    },
    {
      title: "Trilha Transcarioca",
      description: "Desenvolvido para a Conservation International, este aplicativo foca em sustentabilidade para auxiliar na gestão de uma trilha.",
      technologies: ["Aplicativo Móvel"],
      category: "Sustentabilidade e Meio Ambiente",
      imageUrl: trilhaTranscariocaImage
    },
    {
      title: "Polissonorum",
      description: "Um aplicativo que narra histórias de pontos específicos do Rio de Janeiro, transformando a cidade em um palco de narrativas auditivas.",
      technologies: ["Aplicativo Móvel"],
      category: "Cultura e Narrativa Digital",
      imageUrl: polissonorumImage
    },
    {
      title: "Cidade Antigamente",
      description: "Uma experiência de realidade virtual que explora o potencial das narrativas imersivas e foi premiada como o melhor aplicativo de RV em 2017.",
      technologies: ["Realidade Virtual (RV)"],
      category: "Realidade Virtual",
      imageUrl: antigamenteImage
    },
    {
      title: "Montaña Limpia",
      description: "Um aplicativo focado em sustentabilidade para mobilização e coleta de lixo em montanhas.",
      technologies: ["Aplicativo Móvel"],
      category: "Sustentabilidade e Meio Ambiente",
      imageUrl: montanaLimpiaImage
    },
    {
      title: "APDX",
      description: "Um aplicativo com o objetivo de estimular a leitura.",
      technologies: ["Aplicativo Móvel"],
      category: "Educação",
      imageUrl: apdxImage
    },
    {
      title: "Cidades Empreendedoras",
      description: "Um jogo interativo para o Sebrae que aplica a gamificação para fomentar o empreendedorismo.",
      technologies: ["Jogo Interativo"],
      category: "Jogos e Gamificação",
      imageUrl: cidadesEmpreendedorasImage
    },
    {
      title: "Itinere",
      description: "App colaborativo de marcação de rotas de ciclistas. Patrocinado pelo ITDP e realizado com crowdfunding.",
      technologies: ["Aplicativo Móvel"],
      category: "Mobilidade Urbana",
      imageUrl: itinereImage
    },
    {
      title: "Etrilhas",
      description: "Principal aplicativo de turismo de natureza, com site e app, patrocinado pela Fundação Boticário.",
      technologies: ["Aplicativo Móvel", "Web"],
      category: "Turismo de Natureza",
      imageUrl: etrilhasImage
    },
    {
      title: "Animapa",
      description: "App de rotas turísticas da região do Centro do Rio. Patrocinado pela Light e realizado pelo ICCV.",
      technologies: ["Aplicativo Móvel"],
      category: "Turismo",
      imageUrl: animapaImage
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
          {sectionTitle.displayText}
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-1">
          Soluções inovadoras que combinam tecnologia e criatividade para criar experiências únicas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {apps.map((app, index) => (
          <AppCard key={index} {...app} />
        ))}
      </div>
    </section>
  );
};

export default AppsWeDeveloped;
