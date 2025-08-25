import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Film, Wand2, Send, Mail, MessageCircle, ArrowDown } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCursorTrail } from '@/hooks/useCursorTrail';
import { Navigation } from '@/components/Navigation';
import { PageViewTracker } from '@/components/Analytics/PageViewTracker';

// Import videos
import monstroVideo from '@/assets/monstro.mp4';
import mentoriaVideo from '@/assets/mentoria.mp4';
import podcast2Video from '@/assets/podcast2.mp4';
import networkVideo from '@/assets/network.mp4';
import eliminacaoVideo from '@/assets/eliminatoria.mp4';

const VideoProduction = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{sender: string, message: string}>>([]);
  const [showChatSection, setShowChatSection] = useState(false); // Novo estado para controlar a visibilidade
  // Estado para o formulário de contato
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null);

  // Typing effect for the title
  const titleTyping = useTypingEffect({
    text: 'Produção de Vídeo Profissional',
    speed: 50,
  });

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    // Adiciona a mensagem do usuário ao histórico
    const userMessage = { sender: 'user', message: chatMessage };
    setChatHistory(prev => [...prev, userMessage]);
    setChatMessage('');
    
    try {
      // Envia para a API da OpenAI
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: chatMessage,
          history: chatHistory.slice(-4) // Envia as últimas 4 mensagens para contexto
        }),
      });
      
      if (!response.ok) throw new Error('Erro ao processar sua mensagem');
      
      const data = await response.json();
      
      // Adiciona a resposta da IA ao histórico
      setChatHistory(prev => [...prev, { 
        sender: 'ai', 
        message: data.response 
      }]);
      
    } catch (error) {
      console.error('Erro:', error);
      setChatHistory(prev => [...prev, { 
        sender: 'ai', 
        message: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.'
      }]);
    }
  };

  // Função para lidar com o envio do formulário
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mrblwrrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para atualizar os campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Sample data
  const services = [
    {
      title: 'Vídeos Corporativos',
      description: 'Conteúdo profissional para apresentar sua empresa, time e valores de forma impactante.',
      icon: Film,
    },
    {
      title: 'Mídia Social',
      description: 'Conteúdo otimizado para redes sociais que engaja e converte seu público.',
      icon: Wand2,
    },
    {
      title: 'Animações',
      description: 'Trazemos suas ideias à vida com animações de alta qualidade e criatividade.',
      icon: Brain,
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Captação de Vídeos',
      description: 'Produção em live action, em estúdio ou em externa.',
      imageUrl: 'https://cms.mobcontent.com.br/wp-content/uploads/2023/08/4.jpg',
      url: 'https://www.youtube.com/playlist?list=PL15qRxeedu9aUcgQCtyYVUYSVMsQdbJrt'
    },
    {
      id: 2,
      title: 'Animações',
      description: 'Diferentes estilos, em motion e elementos vetoriais',
      imageUrl: 'https://cms.mobcontent.com.br/wp-content/uploads/2021/04/IneditasDispersas.jpg',
      url: 'https://www.youtube.com/playlist?list=PL15qRxeedu9bXfdRFXUA-4hiVTFiZj8TF'
    },
    {
      id: 3,
      title: 'Vídeos Gerados por IA',
      description: 'Animações e vídeos live action, com locução e trilhas.',
      imageUrl: 'https://cms.mobcontent.com.br/wp-content/uploads/2024/11/Anastacia-Grande.jpeg',
      url: 'https://www.youtube.com/playlist?list=PL15qRxeedu9YGikVkXhTBZVrT5wb1pqgt'
    },
  ];

  return (
    <div className="min-h-screen bg-forest-deep text-white">
      <PageViewTracker />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
            <source src={monstroVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-forest-deep/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">{titleTyping.displayText}</h1>
          <p className="text-xl md:text-2xl text-forest-light mb-12 max-w-3xl mx-auto">
            Criamos experiências visuais impressionantes que contam a história da sua marca com impacto e emoção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="inline-flex w-full sm:w-auto">
              <Button className="bg-forest-accent hover:bg-forest-light text-black px-8 py-6 text-lg w-full">
                Solicitar Orçamento
              </Button>
            </a>
            <a href="https://www.youtube.com/@mobcontent" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto">
              <Button variant="outline" className="border-2 border-forest-accent text-forest-accent hover:bg-forest-accent/10 px-8 py-6 text-lg w-full">
                Ver Portfólio
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-forest-accent" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          >
            <source src={mentoriaVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-forest-deep/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
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
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          >
            <source src={podcast2Video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-forest-deep/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
            Nossa Inovação em Ação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a 
                key={project.id}
                href={project.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-2xl bg-forest-deep/20 border border-forest-accent/20 hover:border-forest-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-forest-accent/20 to-forest-deep/40 flex items-center justify-center overflow-hidden">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Film className="h-16 w-16 text-forest-accent" />
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-forest-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      {showChatSection && (
        <section id="ai-chat" className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-50"
            >
              <source src={networkVideo} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-forest-deep/70"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="bg-forest-deep/30 p-8 rounded-2xl border border-forest-accent/20">
              {/* Chat History */}
              <div className="h-96 overflow-y-auto mb-6 pr-4 space-y-4">
                {chatHistory.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-4">
                    <MessageCircle className="h-12 w-12 text-forest-accent mb-3" />
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-4">Conte-nos sobre seu projeto</h3>
                    <p className="text-gray-300 max-w-md">
                      Descreva o que você precisa e nossa IA irá gerar um orçamento personalizado em segundos.
                    </p>
                  </div>
                ) : (
                  chatHistory.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-3xl rounded-2xl px-6 py-4 ${
                          msg.sender === 'user' 
                            ? 'bg-forest-accent text-black' 
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.message}</p>
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
                  rows={6}
                  className="w-full p-4 text-base bg-white/90 text-gray-900 border border-forest-accent/30 rounded-md placeholder:text-gray-500 focus:border-forest-accent focus:ring-2 focus:ring-forest-accent/50 focus:outline-none min-h-[150px]"
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
      )}

      {/* Contact Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50"
          >
            <source src={eliminacaoVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-forest-deep/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Prefere falar com um humano?
          </h2>
          <p className="text-xl text-forest-light mb-8">
            Sem problemas. Nossa equipe está pronta para conversar sobre seu projeto.
          </p>
          
          {submitStatus && (
            <div className={`p-4 mb-6 rounded-md ${
              submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          {/* WhatsApp Button */}
          <div className="flex justify-center mb-6">
            <a 
              href="https://wa.me/5521992113485" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.006c6.553 0 11.89-5.335 11.89-11.893 0-3.18-1.262-6.202-3.556-8.471"/>
              </svg>
              Falar via WhatsApp
            </a>
          </div>
          
          <form onSubmit={handleContactSubmit} className="space-y-6 max-w-2xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-forest-light">
                  Nome completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/90 text-gray-900 border border-forest-accent/30 rounded-md placeholder:text-gray-500 focus:border-forest-accent focus:ring-2 focus:ring-forest-accent/50 focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-forest-light">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/90 text-gray-900 border border-forest-accent/30 rounded-md placeholder:text-gray-500 focus:border-forest-accent focus:ring-2 focus:ring-forest-accent/50 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-forest-light">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/90 text-gray-900 border border-forest-accent/30 rounded-md placeholder:text-gray-500 focus:border-forest-accent focus:ring-2 focus:ring-forest-accent/50 focus:outline-none"
                placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
              />
            </div>
            <div className="flex justify-center pt-2">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-forest-accent hover:bg-forest-light text-black px-8 py-6 text-lg w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VideoProduction;