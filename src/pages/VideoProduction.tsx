import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Film, Wand2, Send, Mail, MessageCircle, ArrowDown } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCursorTrail } from '@/hooks/useCursorTrail';

const VideoProduction = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{sender: 'user' | 'ai', message: string}>>([]);
  
  useCursorTrail();

  const titleTyping = useTypingEffect({ 
    text: "Seu Roteiro. Nossa IA. Um Vídeo Inesquecível.", 
    speed: 80, 
    delay: 500 
  });

  const subtitleTyping = useTypingEffect({ 
    text: "Produzimos vídeos com Inteligência Artificial Generativa, transformando ideias em narrativas visuais de alto impacto. Do roteiro à finalização, o futuro da produção audiovisual começa aqui.", 
    speed: 50, 
    delay: 2000 
  });

  const scrollToChat = () => {
    document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    setChatHistory(prev => [...prev, { sender: 'user', message: chatMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        sender: 'ai', 
        message: "Obrigado por compartilhar seu projeto! Baseado na sua descrição, posso gerar uma proposta inicial. Para um orçamento mais preciso, preciso de alguns detalhes adicionais. Nossa equipe entrará em contato em até 24 horas." 
      }]);
    }, 1500);

    setChatMessage('');
  };

  const services = [
    {
      icon: Brain,
      title: "Vídeos Comerciais com IA",
      description: "Criamos campanhas publicitárias, vídeos de produto e conteúdo promocional com visuais únicos gerados por IA. Destaque sua marca com narrativas visuais impossíveis de filmar."
    },
    {
      icon: Film,
      title: "Vídeos Institucionais e Corporativos",
      description: "Desenvolvemos apresentações empresariais, treinamentos e comunicação interna usando IA para criar cenários e situações personalizadas para sua empresa."
    },
    {
      icon: Wand2,
      title: "Pós-Produção Inteligente",
      description: "Elevamos seus materiais existentes com correção automática, efeitos visuais e edições complexas assistidas por IA. Resultados profissionais em tempo reduzido."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Campanha McDonald's Brasil",
      description: "Vídeos comerciais com cenários impossíveis criados por IA para campanha nacional.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 2,
      title: "Treinamento Corporativo Petrobras",
      description: "Simulações de segurança industrial geradas por IA para capacitação de funcionários.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 3,
      title: "Apresentação Institucional Banco Santander",
      description: "Vídeo institucional com infográficos animados e cenários futuristas criados por IA.",
      thumbnail: "/api/placeholder/400/225"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="custom-cursor"></div>
      
      {/* Floating Particles */}
      <div className="floating-particles"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video Effect */}
        <div className="absolute inset-0">
          <div className="neural-grid"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-forest-deep/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 
            ref={titleTyping.ref}
            className={`text-5xl md:text-7xl font-black mb-8 text-texture ${titleTyping.isTyping ? 'typing-cursor' : ''}`}
          >
            {titleTyping.displayText}
          </h1>
          
          <p 
            ref={subtitleTyping.ref}
            className={`text-xl md:text-2xl text-forest-light leading-relaxed mb-12 max-w-4xl mx-auto ${subtitleTyping.isTyping ? 'typing-cursor' : ''}`}
          >
            {subtitleTyping.displayText}
          </p>

          <Button 
            onClick={scrollToChat}
            className="bg-forest-accent hover:bg-forest-light text-black font-bold py-4 px-8 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 forest-glow"
          >
            Crie seu Orçamento com IA Agora
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-forest-accent" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 text-texture">
            O Futuro do Vídeo, Hoje
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-forest-deep/20 border border-forest-accent/20 hover:border-forest-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-accent/20 mb-6 group-hover:bg-forest-accent/30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-forest-accent" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-forest-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 relative bg-forest-deep/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 text-texture">
            Nossa Inovação em Ação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-forest-deep/20 border border-forest-accent/20 hover:border-forest-accent/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-forest-accent/20 to-forest-deep/40 flex items-center justify-center">
                  <Film className="h-16 w-16 text-forest-accent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-forest-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-forest-light text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="ai-chat" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-texture">
              Sua Ideia. Nosso Orçamento. Em Instantes.
            </h2>
            <p className="text-xl text-forest-light mb-4">
              Sem formulários, sem espera. Descreva seu projeto em nosso chat e nossa IA irá gerar uma proposta e um orçamento inicial para você.
            </p>
            <div className="flex items-center justify-center gap-8 text-forest-accent text-sm font-semibold">
              <span>✨ +500 vídeos produzidos</span>
              <span>🏆 Prêmios nacionais e internacionais</span>
              <span>🚀 Líder em IA no Brasil</span>
            </div>
          </div>

          <div className="bg-forest-deep/20 rounded-2xl border border-forest-accent/20 p-8">
            {/* Chat History */}
            <div className="mb-6 min-h-[200px] max-h-[400px] overflow-y-auto space-y-4">
              {chatHistory.length === 0 ? (
                <div className="text-center text-forest-light py-12">
                  <Brain className="h-12 w-12 text-forest-accent mx-auto mb-4" />
                  <p className="mb-3">Olá! Sou a IA da mobCONTENT. Conte-me sobre seu projeto de vídeo e eu criarei uma proposta personalizada para você.</p>
                  <p className="text-sm text-forest-light/80">Com mais de 500 vídeos produzidos e prêmios nacionais, somos especialistas em IA aplicada à produção audiovisual.</p>
                </div>
              ) : (
                chatHistory.map((chat, index) => (
                  <div 
                    key={index}
                    className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-4 rounded-lg ${
                        chat.sender === 'user' 
                          ? 'bg-forest-accent text-black' 
                          : 'bg-forest-deep/40 text-white border border-forest-accent/20'
                      }`}
                    >
                      {chat.message}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="flex gap-4">
              <textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Descreva seu projeto de vídeo aqui... (ex: 'Preciso de um vídeo comercial de 30 segundos para lançamento de produto' ou 'Quero um vídeo institucional para apresentar nossa empresa')"
                rows={4}
                className="flex-1 bg-forest-deep/20 border border-forest-accent/30 text-white placeholder:text-forest-light/60 focus:border-forest-accent rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-forest-accent/50"
              />
              <Button 
                type="submit"
                className="bg-forest-accent hover:bg-forest-light text-black px-6 h-fit mt-auto"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative bg-forest-deep/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-texture">
            Prefere falar com um humano?
          </h2>
          <p className="text-xl text-forest-light mb-8">
            Sem problemas. Nossa equipe está pronta para conversar sobre seu projeto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-forest-deep/40 border border-forest-accent/30 hover:bg-forest-accent/20 text-white">
              <Mail className="mr-2 h-5 w-5" />
              contato@mobcontent.com
            </Button>
            <Button className="bg-forest-deep/40 border border-forest-accent/30 hover:bg-forest-accent/20 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoProduction;