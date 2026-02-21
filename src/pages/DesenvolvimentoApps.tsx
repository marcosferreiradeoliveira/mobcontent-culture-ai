import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Palette, 
  ArrowRight,
  CheckCircle,
  Star,
  Download,
  Layers
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";
import { PageViewTracker } from '@/components/Analytics/PageViewTracker';
import { AppsWeDeveloped } from "@/components/AppsWeDeveloped";
import heroBgImage from "@/assets/MG_0671-1024x683.jpg";
import appsSectionBg from "@/assets/rq48n957djcp028jlv59-1024x576.webp";

const DesenvolvimentoApps = () => {
  useEffect(() => {
    document.title = "Desenvolvimento de Aplicativos e Sites | mobCONTENT";
    window.scrollTo(0, 0);
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Desenvolvimento de aplicativos móveis e web personalizados. Apps nativos iOS/Android, PWAs e soluções digitais inovadoras para sua empresa.");
    }
  }, []);

  const tecnologias = [
    { nome: "React Native", categoria: "Mobile Híbrido", logo: "⚛️" },
    { nome: "Flutter", categoria: "Mobile Híbrido", logo: "🦋" },
    { nome: "Swift", categoria: "iOS Nativo", logo: "🍎" },
    { nome: "Kotlin", categoria: "Android Nativo", logo: "🤖" },
    { nome: "React", categoria: "Web/PWA", logo: "⚛️" },
    { nome: "Node.js", categoria: "Backend", logo: "🟢" },
    { nome: "Firebase", categoria: "Backend", logo: "🔥" },
    { nome: "AWS", categoria: "Cloud", logo: "☁️" }
  ];

  const processo = [
    {
      numero: "01",
      titulo: "Descoberta e Estratégia",
      descricao: "Análise de requisitos, pesquisa de mercado e definição da estratégia digital"
    },
    {
      numero: "02",
      titulo: "UX/UI Design",
      descricao: "Criação de wireframes, protótipos interativos e design de interface"
    },
    {
      numero: "03",
      titulo: "Desenvolvimento",
      descricao: "Codificação do app com metodologias ágeis e testes constantes"
    },
    {
      numero: "04",
      titulo: "Testes e QA",
      descricao: "Testes funcionais, de performance e usabilidade em diferentes dispositivos"
    },
    {
      numero: "05",
      titulo: "Deploy e Publicação",
      descricao: "Publicação nas app stores e configuração de analytics"
    },
    {
      numero: "06",
      titulo: "Suporte e Evolução",
      descricao: "Manutenção contínua, atualizações e novas funcionalidades"
    }
  ];

  const portfolio = [
    {
      title: "EduConnect",
      description: "Plataforma educacional com gamificação para escolas, conectando alunos, professores e pais.",
      category: "Educação",
      platform: "iOS/Android",
      downloads: "50k+",
      rating: 4.8
    },
    {
      title: "FinTracker Pro",
      description: "App de gestão financeira pessoal com IA para análise de gastos e investimentos.",
      category: "Fintech",
      platform: "PWA",
      downloads: "25k+",
      rating: 4.7
    },
    {
      title: "HealthSync",
      description: "Aplicativo de saúde que conecta pacientes e médicos com telemedicina integrada.",
      category: "Saúde",
      platform: "React Native",
      downloads: "100k+",
      rating: 4.9
    },
    {
      title: "RetailPOS",
      description: "Sistema de ponto de venda para pequenos comércios com gestão de estoque.",
      category: "Varejo",
      platform: "Híbrido",
      downloads: "15k+",
      rating: 4.6
    },
    {
      title: "Event Planner",
      description: "Plataforma para organização de eventos com gestão completa e networking.",
      category: "Eventos",
      platform: "Flutter",
      downloads: "30k+",
      rating: 4.5
    },
    {
      title: "FoodDelivery Plus",
      description: "App de delivery com recursos avançados de localização e pagamento.",
      category: "Food Tech",
      platform: "Native",
      downloads: "200k+",
      rating: 4.8
    }
  ];

  const servicos = [
    {
      icon: Code,
      title: "Desenvolvimento Custom",
      description: "Apps sob medida para suas necessidades específicas"
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Design centrado no usuário com foco na conversão"
    },
    {
      icon: Database,
      title: "Backend e APIs",
      description: "Infraestrutura robusta e APIs escaláveis"
    },
    {
      icon: Cloud,
      title: "Cloud e DevOps",
      description: "Deploy automatizado e infraestrutura na nuvem"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementação de boas práticas de segurança"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização para máxima velocidade e eficiência"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageViewTracker/>
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-white px-1">
            Desenvolvimento de Aplicativos e Sites
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-1">
            Criação de aplicativos móveis e web personalizados que impulsionam negócios e engajam usuários
          </p>
        </div>
      </section>

      {/* Apps We've Developed Section */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url(${appsSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <AppsWeDeveloped />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default DesenvolvimentoApps;