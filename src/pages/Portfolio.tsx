import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Smartphone, Award, Globe, MapPin, Zap, Brain, Users, TreePine } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useCursorTrail } from '@/hooks/useCursorTrail';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: any;
  category: string;
  highlights?: string[];
}

const Portfolio = () => {
  useCursorTrail();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heroTyping = useTypingEffect({ 
    text: "Da Ideia à Interação: Aplicativos e Plataformas com Propósito.",
    speed: 50,
    delay: 500 
  });

  useEffect(() => {
    document.title = 'Portfólio - mobCONTENT | Aplicativos e Plataformas Digitais';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça nosso portfólio de aplicativos culturais, plataformas de impacto social e soluções inovadoras com IA. Da cultura urbana ao futuro sustentável.');
    }
  }, []);

  const culturalProjects: Project[] = [
    {
      id: 'polissonorum',
      title: 'Polissonorum',
      description: 'Um audioguia que narra as histórias e curiosidades de pontos específicos do Rio de Janeiro. O projeto foi patrocinado pela Oi e ganhou destaque em jornais de grande circulação.',
      details: 'Um aplicativo que enriquece a experiência urbana, aprofundando a conexão das pessoas com a história da sua cidade através de narrativas em áudio geolocalizadas.',
      icon: MapPin,
      category: 'Cultura e Cidade',
      highlights: ['Patrocínio Oi', 'Destaque na mídia', 'Geolocalização']
    },
    {
      id: 'amanha',
      title: "App 'Amanhã'",
      description: 'Guia interativo do Museu do Amanhã, eleito o melhor aplicativo de Internet das Coisas (IoT) em 2016.',
      details: 'Uma ferramenta de navegação para o museu que utiliza tecnologias como beacons para interatividade contextual, enriquecendo a experiência do visitante.',
      icon: Award,
      category: 'Museu Interativo',
      highlights: ['Melhor App IoT 2016', 'Tecnologia Beacons', 'Museu do Amanhã']
    }
  ];

  const impactProjects: Project[] = [
    {
      id: 'etrilhas',
      title: 'eTrilhas',
      description: 'Uma iniciativa focada em "gerar dados para estruturar o turismo sustentável".',
      details: 'A eTrilhas é uma companhia que utiliza plataformas de low-code e no-code para validar hipóteses e acelerar o desenvolvimento de soluções para o turismo sustentável, otimizando processos de descoberta e validação.',
      icon: Globe,
      category: 'Turismo Sustentável',
      highlights: ['Low-code/No-code', 'Turismo Sustentável', 'Validação de Hipóteses']
    },
    {
      id: 'transcarioca',
      title: 'App Trilha Transcarioca',
      description: 'Ferramenta de conservação e engajamento comunitário para a Conservation International.',
      details: 'Criado para a Conservation International, o aplicativo permite que os usuários se tornem guardiões da trilha, reportando incidentes como árvores caídas ou avistamentos de animais.',
      icon: TreePine,
      category: 'Conservação',
      highlights: ['Conservation International', 'Engajamento Comunitário', 'Conservação Ambiental']
    }
  ];

  const aiProjects: Project[] = [
    {
      id: 'oraculo',
      title: 'Oráculo Cultural',
      description: 'Uma plataforma de assinatura digital que utiliza IA para capacitar artistas a obterem aprovação em editais de fomento.',
      details: 'A solução oferece uma ferramenta de IA que auxilia na redação de projetos e realiza uma análise estratégica da proposta, comparando-a com as regras do edital para identificar falhas e riscos de desclassificação.',
      icon: Brain,
      category: 'IA para Cultura',
      highlights: ['IA Generativa', 'Análise de Editais', 'Capacitação de Artistas']
    },
    {
      id: 'griot',
      title: 'Griot AI',
      description: 'Um projeto que explora a vida de Mohammed Gardo Baquaqua, figura histórica da diáspora africana, através de IA generativa e storytelling interativo.',
      details: 'O Griot AI utiliza IA para personalizar a experiência narrativa e dar voz a figuras históricas, fomentando a educação e o engajamento cultural.',
      icon: Users,
      category: 'Storytelling IA',
      highlights: ['IA Generativa', 'História Africana', 'Storytelling Interativo']
    }
  ];

  const ProjectCard = ({ project, delay = 0 }: { project: Project; delay?: number }) => {
    const IconComponent = project.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <Card 
          className="h-full cursor-pointer group transition-all duration-300 hover:shadow-elegant border-forest-green-200/20 hover:border-forest-green-400/40 bg-gradient-to-br from-background to-background/50"
          onClick={() => setSelectedProject(project)}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-forest-green-500/10 text-forest-green-400 group-hover:bg-forest-green-500/20 transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="text-xs border-forest-green-300/30 text-forest-green-300">
                {project.category}
              </Badge>
            </div>
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-forest-green-300 transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </CardDescription>
            {project.highlights && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-forest-green-500/10 text-forest-green-400 border-none">
                    {highlight}
                  </Badge>
                ))}
              </div>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              className="group-hover:bg-forest-green-500/10 group-hover:border-forest-green-400/40 transition-all"
            >
              Ver Detalhes
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Efeitos de Fundo */}
      <div className="fixed inset-0 bg-gradient-subtle opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--forest-green-500))_0%,transparent_50%)] opacity-5 pointer-events-none" />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Criando Ecossistemas Digitais
              </h1>
              <div 
                ref={heroTyping.ref}
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                {heroTyping.displayText}
                {heroTyping.isTyping && <span className="animate-pulse">|</span>}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6"
              >
                Nossa trajetória é marcada pelo desenvolvimento de soluções digitais que conectam pessoas, cultura e causas. 
                De apps de exploração urbana a plataformas de IA, construímos tecnologias que geram impacto.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Seção Aplicativos Culturais */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Cultura e Cidade na Palma da Mão
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Aplicativos que conectam pessoas com a riqueza cultural e histórica das cidades
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {culturalProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Plataformas de Impacto */}
        <section className="py-16 px-6 bg-forest-green-950/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Tecnologia para um Futuro Sustentável
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Plataformas que promovem conservação, turismo sustentável e engajamento comunitário
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {impactProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Projetos com IA */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                O Futuro é Agora: Plataformas com IA
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluções inteligentes que capacitam artistas e preservam histórias através da tecnologia
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Pronto para Criar Seu Próximo Projeto?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Da concepção ao lançamento, desenvolvemos soluções digitais que conectam, engajam e transformam.
              </p>
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:bg-primary/90">
                <Smartphone className="w-5 h-5 mr-2" />
                Vamos Conversar
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Modal de Detalhes */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-forest-green-500/10 text-forest-green-400">
                    <selectedProject.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {selectedProject.title}
                    </DialogTitle>
                    <Badge variant="outline" className="mt-1 border-forest-green-300/30 text-forest-green-300">
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Sobre o Projeto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>
                
                {selectedProject.highlights && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Destaques</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <Badge 
                          key={index} 
                          className="bg-forest-green-500/10 text-forest-green-400 border-forest-green-300/30"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setSelectedProject(null)}
                  >
                    Entre em Contato
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;