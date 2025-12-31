import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AIProjectCard } from "@/components/AIProjectCard";
import { AIProjectModal } from "@/components/AIProjectModal";
import { useCursorTrail } from "@/hooks/useCursorTrail";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import imaginePosters from "@/assets/imagine-poster.jpg";
import blackWomanPortrait from "@/assets/black-woman-portrait.jpg";
import culturalArt from "@/assets/cultural-art.jpg";
import machineLearning from "@/assets/machine-learning.jpg";
import grioAI from "@/assets/grioai.png";
import geminiImage from "@/assets/Gemini_Generated_Image_yrunukyrunukyrun Medium.jpeg";

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
    title: "Museu da Memória Negra em IA",
    shortDescription: "Resgate da história afro-brasileira com IA generativa para recriar momentos sem registros pictóricos.",
    fullTitle: "Museu da Memória Negra em IA: Resgatando Memórias Culturais",
    detailedDescription: "Este projeto emprega IA generativa para criar representações visuais fotorrealistas de momentos significativos da história afro-brasileira que carecem de registros. Ao aliar pesquisa histórica detalhada com tecnologia de ponta, o museu preenche lacunas na memória e promove a inclusão. O projeto foi exposto na Alemanha e Áustria.",
    technologies: "Inteligência Artificial Generativa, Pesquisa Histórica",
    impact: "Resgate e inclusão memorial da história afro-brasileira",
    image: geminiImage
  },
  {
    id: "oraculo-cultural",
    title: "Oráculo Cultural",
    shortDescription: "Plataforma de assinatura com IA que capacita artistas e produtores a obterem aprovação em editais de fomento.",
    fullTitle: "Oráculo Cultural: Democratizando o Acesso a Recursos com IA",
    detailedDescription: "O Oráculo Cultural é uma solução que utiliza uma poderosa ferramenta de inteligência artificial para auxiliar na redação e realizar uma análise estratégica de propostas culturais, comparando-as com as regras do edital para identificar falhas, inconsistências e riscos de desclassificação.",
    technologies: "Inteligência Artificial, Análise Estratégica de Dados, Plataforma de Assinatura",
    impact: "Empodera a comunidade cultural, aumentando as chances de sucesso e democratizando o acesso a recursos culturais",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2025/08/Screenshot-2025-08-26-at-18.44.22.png"
  },
  {
    id: "griot-ai",
    title: "Grio AI",
    shortDescription: "Exploração da vida de Mohammed G. Baquaqua, figura da diáspora africana, usando IA generativa e storytelling interativo.",
    fullTitle: "Grio AI: Dando Voz à História com IA Interativa",
    detailedDescription: "Focado na jornada de Mohammed Gardo Baquaqua, este projeto utiliza IA generativa e storytelling interativo para personalizar a experiência narrativa. O objetivo é dar voz a figuras históricas, fomentando a educação e o engajamento cultural de forma inovadora.",
    technologies: "Inteligência Artificial Generativa, Storytelling Interativo",
    impact: "Educação e engajamento cultural através de narrativas personalizadas",
    image: grioAI
  },
  {
    id: "e-ia-professor",
    title: "E Ia, Professor?",
    shortDescription: "Série que explora como a IA está transformando o cenário educacional no Brasil, destacando oportunidades e desafios.",
    fullTitle: "E Ia, Professor? Desafios e Oportunidades no Brasil",
    detailedDescription: "Uma série documental que apresenta um panorama crítico sobre o impacto da inteligência artificial na educação brasileira. Combinando entrevistas com especialistas, visitas a escolas e análise de políticas públicas, o projeto debate o uso da IA para a inclusão, os desafios éticos de privacidade e vieses, e como a tecnologia pode preparar alunos e educadores para o futuro.",
    technologies: "Produção Documental, Pesquisa e Análise de IA",
    impact: "Inspirar soluções práticas para a educação, promovendo um debate sobre ética e inclusão",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2025/08/profess.jpg"
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
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2025/08/mmobcontent_a_movie_poster_of_a_true_crime_documentary_with_a_l_5dc2fdcb-be2a-40c4-be0c-45ca515b27f1-1-Medium.jpeg"
  },
  {
    id: "imagine-prompt",
    title: "/imagine prompt",
    shortDescription: "Longa-metragem que explora o poder da IA na criação de narrativas visuais para o cinema e a arte.",
    fullTitle: "/imagine prompt: O Futuro do Cinema com IA",
    detailedDescription: "Este projeto é um longa-metragem que investiga o potencial da Inteligência Artificial como ferramenta para a criação de narrativas visuais. A iniciativa busca abrir novas e empolgantes possibilidades para a linguagem cinematográfica e para a expressão artística na era digital.",
    technologies: "Inteligência Artificial, Cinema",
    impact: "Exploração de novas fronteiras criativas e narrativas para a indústria audiovisual",
    image: "https://cms.mobcontent.com.br/wp-content/uploads/2024/11/imaginePromptPoster_Wide.jpg"
  }
];

const AIPage = () => {
  const title = "Inteligência Artificial para Narrativas de Impacto";
  const { displayText } = useTypingEffect({ 
    text: title,
    speed: 50,
    delay: 500 
  });
  
  const [selectedProject, setSelectedProject] = useState<AIProject | null>(null);
  useCursorTrail();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white/90 mb-2 leading-tight">
            Inteligência Artificial para
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            <span className="text-gradient-parallax">Narrativas</span> de Impacto
          </h1>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Transformando histórias e criando impacto através da inteligência artificial
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {aiProjects.map((project, index) => (
            <AIProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </section>

        {selectedProject && (
          <AIProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AIPage;