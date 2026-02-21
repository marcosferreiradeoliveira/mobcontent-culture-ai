import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { trackEvent } from "@/utils/analytics";
import { Footer } from "@/components/Footer";
import { AIProjectCard } from "@/components/AIProjectCard";
import { AIProjectModal } from "@/components/AIProjectModal";
import { useCursorTrail } from "@/hooks/useCursorTrail";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import imaginePosters from "@/assets/imagine-poster.jpg";
import blackWomanPortrait from "@/assets/black-woman-portrait.jpg";
import culturalArt from "@/assets/cultural-art.jpg";
import machineLearning from "@/assets/machine-learning.jpg";
import grioAI from "@/assets/grioai.png";
import geminiImage from "@/assets/Gemini_Generated_Image_yrunukyrunukyrun Medium.jpeg";
import oraculoImage from "@/assets/oraculo.png";
import fabuladorImage from "@/assets/fabulador.png";
import eIaProfessorImage from "@/assets/EIAlow.jpeg";
import lobotomiaImage from "@/assets/Cartaz_Juquery2Large.jpeg";
import imaginePromptImage from "@/assets/imageineLow.jpeg";
import fabricaConteudoImage from "@/assets/FabricadeConeudo.png";
import rouanetImage from "@/assets/rouanet.jpeg";
import execucaoImage from "@/assets/execucao.jpeg";
import growthImage from "@/assets/growth.jpeg";
import aiPageBg from "@/assets/fundoIA.jpeg";

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
  link?: string;
}

const aiProjects: AIProject[] = [
  {
    id: "museum-black-memory",
    title: "Museu da Memória Negra em IA",
    shortDescription: "Reimaginação artística e poética de grandes nomes da história negra brasileira.",
    fullTitle: "Museu da Memória Negra em IA",
    detailedDescription: "Reimaginação artística e poética de grandes nomes da história negra brasileira, com IA generativa. O projeto cria representações visuais que preenchem lacunas na memória e promovem a inclusão. Foi exposto na Alemanha e Áustria.",
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
    image: oraculoImage
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
    id: "fabulador",
    title: "Fabulador",
    shortDescription: "App com IA que ajuda a transformar relatos orais em literatura, com um agente estimulador.",
    fullTitle: "Fabulador: Relatos Orais em Literatura com IA",
    detailedDescription: "O Fabulador é um aplicativo com inteligência artificial que auxilia a transformar relatos orais em literatura. Um agente de IA atua como estimulador, guiando o usuário no processo de estruturação e escrita, preservando a voz e a história de cada narrador.",
    technologies: "Inteligência Artificial, Agente Conversacional, Literatura",
    impact: "Democratização da escrita literária a partir de histórias orais",
    image: fabuladorImage,
    link: "https://fabulador.web.app/"
  },
  {
    id: "chief-growth-officer",
    title: "Chief Growth Officer",
    shortDescription: "Dashboard com IA que analisa dados de vários canais (Ads, Outbound, CRM, Produto) para identificar gargalos e sugerir estratégias de crescimento, com Gemini.",
    fullTitle: "Chief Growth Officer",
    detailedDescription: "Dashboard com IA que consolida e analisa dados de múltiplos canais — anúncios, outbound, CRM e produto — para identificar gargalos e sugerir estratégias de crescimento acionáveis, utilizando Gemini.",
    technologies: "Inteligência Artificial (Gemini), Análise de Dados, Growth",
    impact: "Decisões de crescimento baseadas em dados e recomendações acionáveis",
    image: growthImage
  },
  {
    id: "fabrica-conteudo",
    title: "Fábrica de Conteúdo de Redes Sociais",
    shortDescription: "Gerador em IA de vídeos, imagens, carrosséis e textos para todas as redes sociais a partir de uma ideia.",
    fullTitle: "Fábrica de Conteúdo de Redes Sociais",
    detailedDescription: "Solução em IA que gera vídeos, imagens, carrosséis e textos para todas as redes sociais a partir de uma única ideia. Ideal para marcas e criadores que precisam escalar conteúdo de forma consistente e criativa.",
    technologies: "Inteligência Artificial Generativa, Redes Sociais, Vídeo e Imagem",
    impact: "Escala e consistência de conteúdo para marcas e criadores",
    image: fabricaConteudoImage
  },
  {
    id: "analista-rouanet",
    title: "Analista de Padrões de Rouanet",
    shortDescription: "Ferramenta que analisa com IA padrões dos projetos de sucesso da Rouanet.",
    fullTitle: "Analista de Padrões de Rouanet",
    detailedDescription: "Ferramenta que utiliza inteligência artificial para analisar e identificar padrões nos projetos aprovados e de sucesso da Lei Rouanet. Ajuda proponentes e produtores culturais a entender o que funciona e a qualificar suas propostas de incentivo fiscal.",
    technologies: "Inteligência Artificial, Análise de Dados, Lei Rouanet",
    impact: "Qualificação de propostas e maior taxa de aprovação em editais de incentivo fiscal",
    image: rouanetImage
  },
  {
    id: "prestacao-contas-ia",
    title: "Prestação de Contas com IA",
    shortDescription: "Ferramenta que analisa orçamentos e notas fiscais com IA junto à Rouanet.",
    fullTitle: "Prestação de Contas com IA",
    detailedDescription: "Ferramenta que utiliza inteligência artificial para analisar orçamentos e notas fiscais no contexto da Lei Rouanet. Ajuda proponentes e produtores a organizar, validar e prestar contas de projetos de incentivo fiscal com mais agilidade e conformidade.",
    technologies: "Inteligência Artificial, Análise Documental, Lei Rouanet",
    impact: "Agilidade e conformidade na prestação de contas de projetos culturais",
    image: execucaoImage
  },
  {
    id: "e-ia-professor",
    title: "E Ia, Professor?",
    shortDescription: "Série que explora como a IA está transformando o cenário educacional no Brasil, destacando oportunidades e desafios.",
    fullTitle: "E Ia, Professor? Desafios e Oportunidades no Brasil",
    detailedDescription: "Uma série documental que apresenta um panorama crítico sobre o impacto da inteligência artificial na educação brasileira. Combinando entrevistas com especialistas, visitas a escolas e análise de políticas públicas, o projeto debate o uso da IA para a inclusão, os desafios éticos de privacidade e vieses, e como a tecnologia pode preparar alunos e educadores para o futuro.",
    technologies: "Produção Documental, Pesquisa e Análise de IA",
    impact: "Inspirar soluções práticas para a educação, promovendo um debate sobre ética e inclusão",
    image: eIaProfessorImage
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
    image: lobotomiaImage
  },
  {
    id: "imagine-prompt",
    title: "/imagine prompt",
    shortDescription: "Longa-metragem que explora o poder da IA na criação de narrativas visuais para o cinema e a arte.",
    fullTitle: "/imagine prompt: O Futuro do Cinema com IA",
    detailedDescription: "Este projeto é um longa-metragem que investiga o potencial da Inteligência Artificial como ferramenta para a criação de narrativas visuais. A iniciativa busca abrir novas e empolgantes possibilidades para a linguagem cinematográfica e para a expressão artística na era digital.",
    technologies: "Inteligência Artificial, Cinema",
    impact: "Exploração de novas fronteiras criativas e narrativas para a indústria audiovisual",
    image: imaginePromptImage
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
  const location = useLocation();
  usePageMeta({
    title: "Inteligência Artificial",
    description: "IA generativa e narrativas interativas para cultura: Museu da Memória Negra, Oráculo Cultural, Griot AI, Fabulador e mais projetos da mobCONTENT.",
    ogImage: "/og-ia.jpg",
    path: location.pathname,
  });

  return (
    <div className="min-h-screen text-white relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aiPageBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-2 leading-tight">
            Inteligência Artificial para
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            <span className="text-gradient-parallax">Narrativas</span> de Impacto
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed px-1">
            Transformando histórias e criando impacto através da inteligência artificial
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {aiProjects.map((project, index) => (
            <AIProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => {
                trackEvent('project_detail_view', {
                  event_category: 'engagement',
                  event_label: project.title,
                  project_id: project.id,
                  page: '/ai'
                });
                setSelectedProject(project);
              }}
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
    </div>
  );
};

export default AIPage;