import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
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
  Phone,
  Mail,
  Globe,
  Download,
  Layers
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { useEffect } from "react";
import { PageViewTracker } from '@/components/Analytics/PageViewTracker';
import { AppsWeDeveloped } from "@/components/AppsWeDeveloped";
import { trackButtonClick } from "@/utils/analytics";

const DesenvolvimentoApps = () => {
  useEffect(() => {
    document.title = "Desenvolvimento de Aplicativos e Sites | mobCONTENT";
    window.scrollTo(0, 0);
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Desenvolvimento de aplicativos móveis e web personalizados. Apps nativos iOS/Android, PWAs e soluções digitais inovadoras para sua empresa.");
    }
  }, []);

  const plataformas = [
    {
      icon: Smartphone,
      title: "Apps Nativos iOS",
      description: "Aplicativos nativos para iPhone e iPad com performance máxima",
      features: ["Swift/Objective-C", "Interface nativa", "App Store otimizado", "Push notifications"]
    },
    {
      icon: Tablet,
      title: "Apps Nativos Android",
      description: "Aplicativos Android com integração completa ao ecossistema Google",
      features: ["Kotlin/Java", "Material Design", "Google Play Store", "Firebase integration"]
    },
    {
      icon: Monitor,
      title: "Progressive Web Apps",
      description: "PWAs que funcionam como apps nativos em qualquer dispositivo",
      features: ["Trabalha offline", "Instalável", "Responsivo", "Cross-platform"]
    },
    {
      icon: Globe,
      title: "Apps Híbridos",
      description: "Desenvolvimento multiplataforma com React Native e Flutter",
      features: ["Código compartilhado", "Deploy simultâneo", "Performance nativa", "Manutenção eficiente"]
    }
  ];

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

  const handleWhatsAppClick = (location: string) => {
    trackButtonClick('whatsapp_click', 'conversion', { location });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageViewTracker/>
      
      {/* WhatsApp Button - Fixed */}
      <a 
        href="https://wa.me/5521966225632" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Fale conosco no WhatsApp"
        onClick={() => handleWhatsAppClick('floating')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.349.223-.646.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.499.1-.202.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.198 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{
          backgroundImage: "url('https://cms.mobcontent.com.br/wp-content/uploads/2023/02/cropped-MG_0671.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Desenvolvimento de Aplicativos e Sites
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Criação de aplicativos móveis e web personalizados que impulsionam negócios e engajam usuários
          </p>
          <a 
            href="https://wa.me/5521966225632" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => handleWhatsAppClick('hero_section')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.349.223-.646.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.499.1-.202.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.198 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Fale Conosco no WhatsApp
          </a>
        </div>
      </section>

      {/* Apps We've Developed Section */}
      <section 
        className="py-16 relative"
        style={{
          backgroundImage: "url('https://cms.mobcontent.com.br/wp-content/uploads/2023/02/rq48n957djcp028jlv59.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <AppsWeDeveloped />
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url('https://cms.mobcontent.com.br/wp-content/uploads/2021/04/Etrilhas-1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Plataformas que Dominamos
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Desenvolvemos para todas as principais plataformas, garantindo alcance máximo para seu app
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plataformas.map((plataforma, index) => (
                <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-forest/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-forest/20 rounded-full w-fit">
                      <plataforma.icon className="h-8 w-8 text-forest" />
                    </div>
                    <CardTitle className="text-white">{plataforma.title}</CardTitle>
                    <CardDescription className="text-gray-300">{plataforma.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plataforma.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-forest mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Entre em Contato</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">Tem um projeto em mente? Fale com nossa equipe agora mesmo!</p>
            <a 
              href="https://wa.me/5521966225632" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => handleWhatsAppClick('contact_section')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.349.223-.646.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.499.1-.202.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.198 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Fale Conosco no WhatsApp
            </a>
          </div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default DesenvolvimentoApps;