import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  Video, 
  Camera, 
  Mic, 
  Edit3, 
  Monitor, 
  Users, 
  Building2, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { useEffect } from "react";

const ProducaoAudiovisual = () => {
  useEffect(() => {
    document.title = "Produção Audiovisual | mobCONTENT";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Produção audiovisual profissional para empresas. Vídeos comerciais, institucionais e corporativos com qualidade premium e tecnologia de ponta.');
    }
  }, []);

  const servicos = [
    {
      icon: Building2,
      title: "Vídeos Institucionais",
      description: "Conte a história da sua empresa de forma envolvente e profissional",
      features: ["Roteiro personalizado", "Produção completa", "Edição profissional", "Entrega em múltiplos formatos"]
    },
    {
      icon: Users,
      title: "Vídeos Comerciais",
      description: "Impacte seu público-alvo com campanhas que convertem",
      features: ["Estratégia de marketing", "Direção criativa", "Produção executiva", "Otimização para vendas"]
    },
    {
      icon: Monitor,
      title: "Conteúdo Digital",
      description: "Conteúdo otimizado para redes sociais e plataformas digitais",
      features: ["Múltiplos formatos", "Otimização SEO", "Adaptação por plataforma", "Analytics integrado"]
    },
    {
      icon: Video,
      title: "Documentários Corporativos",
      description: "Documente processos, conquistas e a cultura da sua empresa",
      features: ["Pesquisa aprofundada", "Entrevistas exclusivas", "Narrativa envolvente", "Arquivo histórico"]
    }
  ];

  const processo = [
    {
      step: "01",
      title: "Briefing & Estratégia",
      description: "Entendemos seus objetivos e definimos a estratégia criativa",
      duration: "1-2 dias"
    },
    {
      step: "02", 
      title: "Pré-Produção",
      description: "Roteiro, planejamento, casting e preparação técnica",
      duration: "3-5 dias"
    },
    {
      step: "03",
      title: "Produção",
      description: "Gravação com equipamentos profissionais e equipe especializada",
      duration: "1-3 dias"
    },
    {
      step: "04",
      title: "Pós-Produção",
      description: "Edição, motion graphics, trilha sonora e finalização",
      duration: "5-10 dias"
    },
    {
      step: "05",
      title: "Entrega & Distribuição",
      description: "Entrega nos formatos necessários e suporte à distribuição",
      duration: "1-2 dias"
    }
  ];

  const numeros = [
    { valor: "500+", label: "Vídeos Produzidos" },
    { valor: "12", label: "Anos de Experiência" },
    { valor: "150+", label: "Clientes Atendidos" },
    { valor: "98%", label: "Satisfação dos Clientes" }
  ];

  const premios = [
    "Prêmio Profissionais do Ano 2023",
    "Festival de Cinema Publicitário",
    "Top of Mind Marketing Digital",
    "Certificação Google Partner"
  ];

  const equipamentos = [
    { nome: "Câmeras 4K/8K", descricao: "Sony FX6, Canon C70, RED Komodo" },
    { nome: "Áudio Profissional", descricao: "Sennheiser, Rode, Zoom H6" },
    { nome: "Iluminação LED", descricao: "ARRI, Aputure, Godox" },
    { nome: "Estabilização", descricao: "DJI Ronin, Steadicam, Slider motorizado" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-deep via-lab-dark to-forest-green-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--forest-accent)/0.1),transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-forest-accent text-forest-accent">
              Produção Audiovisual Premium
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transformamos Sua{" "}
              <span className="text-transparent bg-gradient-to-r from-forest-green-light to-forest-accent bg-clip-text">
                Visão
              </span>{" "}
              em Realidade
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Produção audiovisual completa para empresas que buscam comunicação de impacto. 
              Vídeos institucionais, comerciais e corporativos com qualidade cinema.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-forest-green hover:bg-forest-green-dark">
                <Play className="mr-2 h-5 w-5" />
                Ver Nosso Reel
              </Button>
              <Button variant="outline" size="lg" className="border-forest-accent text-forest-accent hover:bg-forest-accent hover:text-white">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Números */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {numeros.map((numero, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-forest-green-light mb-2">
                    {numero.valor}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {numero.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em produção audiovisual para atender todas as necessidades da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicos.map((servico, index) => (
              <Card key={index} className="border-border hover:border-forest-accent transition-colors group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-forest-green/10 rounded-lg group-hover:bg-forest-accent/20 transition-colors">
                      <servico.icon className="h-6 w-6 text-forest-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{servico.title}</CardTitle>
                      <CardDescription>{servico.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {servico.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-forest-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nosso Processo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um fluxo de trabalho estruturado que garante qualidade e eficiência em cada projeto
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processo.map((etapa, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-forest-accent rounded-full flex items-center justify-center text-white font-bold">
                    {etapa.step}
                  </div>
                  {index !== processo.length - 1 && (
                    <div className="w-px h-16 bg-border ml-6 mt-4" />
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{etapa.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {etapa.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{etapa.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tecnologia de Ponta
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Equipamentos profissionais que garantem a máxima qualidade em cada produção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipamentos.map((equipamento, index) => (
              <Card key={index} className="border-border hover:border-forest-accent transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">{equipamento.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{equipamento.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prêmios e Reconhecimentos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reconhecimento da Indústria
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa excelência é reconhecida por clientes e pelo mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premios.map((premio, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <Award className="h-8 w-8 text-forest-accent mx-auto mb-2" />
                  <CardTitle className="text-base text-foreground">{premio}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-forest-green via-forest-accent to-forest-green-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Criar Seu Próximo Vídeo?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua comunicação
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-forest-green hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              (11) 99999-9999
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-forest-green">
              <Mail className="mr-2 h-5 w-5" />
              contato@mobcontent.com.br
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProducaoAudiovisual;