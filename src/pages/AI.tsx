import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AIProjectCard } from "@/components/AIProjectCard";
import { AIProjectModal } from "@/components/AIProjectModal";
import { useCursorTrail } from "@/hooks/useCursorTrail";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import imaginePosters from "@/assets/imagine-poster.jpg";
import blackWomanPortrait from "@/assets/black-woman-portrait.jpg";
import culturalArt from "@/assets/cultural-art.jpg";
import machineLearning from "@/assets/machine-learning.jpg";

interface AIProject {
  id: string;
  title: string;
  shortDescription: string;
  fullTitle: string;
  detailedDescription: string;
  technologies: string;
  impact: string;
  format?: string;
  image: string;
}

const aiProjects: AIProject[] = [
  {
    id: "museum-black-memory",
    title: "Museum of Black Memory in IA",
    shortDescription: "Resgate da história afro-brasileira com IA generativa para recriar momentos sem registros pictóricos.",
    fullTitle: "Museum of Black Memory in IA: Resgatando Memórias Culturais",
    detailedDescription: "Este projeto emprega IA generativa para criar representações visuais fotorrealistas de momentos significativos da história afro-brasileira que carecem de registros. Ao aliar pesquisa histórica detalhada com tecnologia de ponta, o museu preenche lacunas na memória e promove a inclusão. O projeto foi exposto na Alemanha e Áustria.",
    technologies: "Inteligência Artificial Generativa, Pesquisa Histórica",
    impact: "Resgate e inclusão memorial da história afro-brasileira",
    image: blackWomanPortrait
  },
  {
    id: "oraculo-cultural",
    title: "Oráculo Cultural",
    shortDescription: "Plataforma de assinatura com IA que capacita artistas e produtores a obterem aprovação em editais de fomento.",
    fullTitle: "Oráculo Cultural: Democratizando o Acesso a Recursos com IA",
    detailedDescription: "O Oráculo Cultural é uma solução que utiliza uma poderosa ferramenta de inteligência artificial para auxiliar na redação e realizar uma análise estratégica de propostas culturais, comparando-as com as regras do edital para identificar falhas, inconsistências e riscos de desclassificação.",
    technologies: "Inteligência Artificial, Análise Estratégica de Dados, Plataforma de Assinatura",
    impact: "Empodera a comunidade cultural, aumentando as chances de sucesso e democratizando o acesso a recursos culturais",
    image: culturalArt
  },
  {
    id: "griot-ai",
    title: "Griot AI",
    shortDescription: "Exploração da vida de Mohammed G. Baquaqua, figura da diáspora africana, usando IA generativa e storytelling interativo.",
    fullTitle: "Griot AI: Dando Voz à História com IA Interativa",
    detailedDescription: "Focado na jornada de Mohammed Gardo Baquaqua, este projeto utiliza IA generativa e storytelling interativo para personalizar a experiência narrativa. O objetivo é dar voz a figuras históricas, fomentando a educação e o engajamento cultural de forma inovadora.",
    technologies: "Inteligência Artificial Generativa, Storytelling Interativo",
    impact: "Educação e engajamento cultural através de narrativas personalizadas",
    image: imaginePosters
  },
  {
    id: "e-ia-professor",
    title: "E Ia, Professor?",
    shortDescription: "Série que explora como a IA está transformando o cenário educacional no Brasil, destacando oportunidades e desafios.",
    fullTitle: "E Ia, Professor? Desafios e Oportunidades no Brasil",
    detailedDescription: "Uma série documental que apresenta um panorama crítico sobre o impacto da inteligência artificial na educação brasileira. Combinando entrevistas com especialistas, visitas a escolas e análise de políticas públicas, o projeto debate o uso da IA para a inclusão, os desafios éticos de privacidade e vieses, e como a tecnologia pode preparar alunos e educadores para o futuro.",
    technologies: "Produção Documental, Pesquisa e Análise de IA",
    impact: "Inspirar soluções práticas para a educação, promovendo um debate sobre ética e inclusão",
    image: machineLearning
  },
  {
    id: "lobotomia-mulheres",
    title: "O Caso da Lobotomia em Mulheres",
    shortDescription: "Série documental que usa IA para recriar e denunciar o uso da lobotomia como forma de controle de gênero.",
    fullTitle: "O Caso da Lobotomia em Mulheres: Uma Análise Crítica com IA",
    detailedDescription: "Esta série documental de seis episódios revela como a lobotomia foi uma ferramenta para silenciar e controlar mulheres que desafiavam os papéis de gênero tradicionais. O projeto combina documentários em live action com recriações históricas geradas por Inteligência Artificial para traçar paralelos entre as práticas do passado e casos contemporâneos de discriminação psiquiátrica.",
    technologies: "Inteligência Artificial Generativa (para recriações históricas), Produção Documental",
    impact: "Conscientização sobre discriminação de gênero na história da medicina",
    format: "Série de 6 episódios de 20 minutos",
    image: blackWomanPortrait
  },
  {
    id: "imagine-prompt",
    title: "/imagine prompt",
    shortDescription: "Longa-metragem que explora o poder da IA na criação de narrativas visuais para o cinema e a arte.",
    fullTitle: "/imagine prompt: O Futuro do Cinema com IA",
    detailedDescription: "Este projeto é um longa-metragem que investiga o potencial da Inteligência Artificial como ferramenta para a criação de narrativas visuais. A iniciativa busca abrir novas e empolgantes possibilidades para a linguagem cinematográfica e para a expressão artística na era digital.",
    technologies: "Inteligência Artificial, Cinema",
    impact: "Exploração de novas fronteiras criativas e narrativas para a indústria audiovisual",
    image: imaginePosters
  }
];

const AI = () => {
  const [selectedProject, setSelectedProject] = useState<AIProject | null>(null);
  useCursorTrail();

  const titleTyping = useTypingEffect({
    text: "Inteligência Artificial para Narrativas de Impacto",
    speed: 60,
    delay: 300
  });

  const subtitleTyping = useTypingEffect({
    text: "Explore nossos projetos pioneiros que utilizam IA para resgatar memórias, dar voz a figuras históricas, denunciar injustiças e transformar a educação.",
    speed: 30,
    delay: 2000
  });

  return (
    <div className="min-h-screen bg-black cursor-vector">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <img src={imaginePosters} alt="" className="parallax-bg-image opacity-5" />
        <img src={blackWomanPortrait} alt="" className="parallax-bg-image opacity-5" style={{top: '20%', right: '-10%'}} />
        <img src={culturalArt} alt="" className="parallax-bg-image opacity-5" style={{bottom: '10%', left: '60%'}} />
        <div className="neural-grid opacity-20" />
        
        {/* Enhanced Floating Particles */}
        <div className="floating-particles">
          {Array.from({ length: 25 }).map((_, i) => (
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
        
        {/* Additional Background Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-forest-accent/10 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-forest-green/15 rounded-full blur-3xl animate-parallax-float delay-[7s]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-forest-light/8 rounded-full blur-3xl animate-parallax-float delay-[3s]" />
      </div>

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-24">
            <div className="mb-4">
              <span className="text-forest-accent font-semibold text-lg uppercase tracking-wider">
                mobCONTENT
              </span>
            </div>
            <h1 
              ref={titleTyping.ref}
              className={`text-5xl md:text-7xl font-black text-white mb-8 text-texture ${titleTyping.isTyping ? 'typing-cursor' : ''}`}
            >
              {titleTyping.displayText}
            </h1>
            <p 
              ref={subtitleTyping.ref}
              className={`text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed ${subtitleTyping.isTyping ? 'typing-cursor' : ''}`}
            >
              {subtitleTyping.displayText}
            </p>
          </div>

          {/* Projects Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
            {aiProjects.map((project, index) => (
              <AIProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <AIProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default AI;