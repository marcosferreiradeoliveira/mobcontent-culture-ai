import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import vetoresImage from "@/assets/vetores.jpeg";

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
    <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline" className="bg-forest/10 text-forest">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
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
            <Badge key={tech} variant="secondary" className="font-normal">
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
      title: "APDX",
      description: "Um aplicativo com o objetivo de estimular a leitura.",
      technologies: ["Aplicativo Móvel"],
      category: "Educação",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/APDX.jpg"
    },
    {
      title: "Montaña Limpia",
      description: "Um aplicativo focado em sustentabilidade para mobilização e coleta de lixo em montanhas.",
      technologies: ["Aplicativo Móvel"],
      category: "Sustentabilidade e Meio Ambiente",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/MontanaLimpia-1-e1678294420821.jpg"
    },
    {
      title: "Vetores Vertentes",
      description: "App da exposição do CCBB com acessibilidade e audioguia.",
      technologies: ["Flutter"],
      category: "Cultura e Acessibilidade",
      imageUrl: vetoresImage
    },
    {
      title: "App 'Amanhã'",
      description: "Um guia interativo que enriquece a experiência do visitante no Museu do Amanhã, utilizando a tecnologia de beacons.",
      technologies: ["Aplicativo Móvel", "Internet das Coisas (IoT)"],
      category: "Cultura e Interatividade",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/MuseuDoAmanha.png"
    },
    {
      title: "Cidade Antigamente",
      description: "Uma experiência de realidade virtual que explora o potencial das narrativas imersivas e foi premiada como o melhor aplicativo de RV em 2017.",
      technologies: ["Realidade Virtual (RV)"],
      category: "Realidade Virtual",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/03/CidadeAntigametne.jpg"
    },
    {
      title: "Griô AI",
      description: "Um projeto que usa IA generativa e storytelling interativo para dar voz a figuras históricas e personalizar a experiência narrativa de forma educativa e cultural.",
      technologies: ["Inteligência Artificial (IA) Generativa", "Storytelling Interativo"],
      category: "IA e Cultura",
      imageUrl: "src/assets/grioai.png"
    },
    {
      title: "Trilha Transcarioca",
      description: "Desenvolvido para a Conservation International, este aplicativo foca em sustentabilidade para auxiliar na gestão de uma trilha.",
      technologies: ["Aplicativo Móvel"],
      category: "Sustentabilidade e Meio Ambiente",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/cropped-Trilha-Transcarioca.jpg"
    },
    {
      title: "Polissonorum",
      description: "Um aplicativo que narra histórias de pontos específicos do Rio de Janeiro, transformando a cidade em um palco de narrativas auditivas.",
      technologies: ["Aplicativo Móvel"],
      category: "Cultura e Narrativa Digital",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/Polissonorum-1.jpg"
    },
    {
      title: "Cidades Empreendedoras",
      description: "Um jogo interativo para o Sebrae que aplica a gamificação para fomentar o empreendedorismo.",
      technologies: ["Jogo Interativo"],
      category: "Jogos e Gamificação",
      imageUrl: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/CidadesEmpreendedoras.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {sectionTitle.displayText}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Soluções inovadoras que combinam tecnologia e criatividade para criar experiências únicas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <AppCard key={index} {...app} />
        ))}
      </div>
    </section>
  );
};

export default AppsWeDeveloped;
