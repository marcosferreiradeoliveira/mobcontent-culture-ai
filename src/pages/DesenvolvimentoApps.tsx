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

const DesenvolvimentoApps = () => {
  useEffect(() => {
    document.title = "Desenvolvimento de Apps | mobCONTENT";
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

  return (
    <div className="min-h-screen bg-black text-white">
      <PageViewTracker />
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 lg:pt-32 lg:pb-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Desenvolvimento de Apps
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transformamos ideias em 
              <span className="text-forest"> aplicativos </span>
              poderosos
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Desenvolvemos aplicativos móveis e web que conectam sua marca aos usuários. 
              Soluções nativas, híbridas e PWAs com foco na experiência do usuário e resultados de negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Iniciar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Ver Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-forest/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-forest/10 rounded-full blur-xl animate-ping"></div>
        <div className="absolute top-1/2 left-0 w-2 h-64 bg-gradient-to-b from-transparent via-forest/20 to-transparent"></div>
        
        {/* Neural grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="neural-grid"></div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plataformas que Dominamos
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvemos para todas as principais plataformas, garantindo alcance máximo para seu app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plataformas.map((plataforma, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-forest/50 transition-all duration-300 hover:shadow-lg">
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
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Soluções completas para levar seu app do conceito ao sucesso no mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-forest/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-forest/20 rounded-lg w-fit group-hover:bg-forest/30 transition-colors">
                    <servico.icon className="h-6 w-6 text-forest" />
                  </div>
                  <CardTitle className="text-white">{servico.title}</CardTitle>
                  <CardDescription className="text-gray-300">{servico.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tecnologias de Ponta
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Utilizamos as tecnologias mais modernas e confiáveis do mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tecnologias.map((tech, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-forest/50 transition-all duration-300 hover:shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{tech.logo}</div>
                  <h3 className="font-semibold text-white mb-1">{tech.nome}</h3>
                  <p className="text-sm text-gray-300">{tech.categoria}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nosso Processo
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Metodologia ágil e transparente para entregar seu app no prazo e orçamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processo.map((etapa, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-forest/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-forest text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                      {etapa.numero}
                    </div>
                    <CardTitle className="text-white">{etapa.titulo}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed text-gray-300">
                    {etapa.descricao}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apps que Desenvolvemos
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Conheça alguns dos aplicativos que criamos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((app, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-forest/50 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-forest border-forest">
                      {app.category}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{app.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-forest transition-colors">
                    {app.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-gray-300">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <Layers className="h-4 w-4 mr-1" />
                      <span>{app.platform}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{app.downloads}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default DesenvolvimentoApps;