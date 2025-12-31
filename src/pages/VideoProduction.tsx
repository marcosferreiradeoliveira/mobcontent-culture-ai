import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Film, Wand2, Send, Mail, MessageCircle, ArrowDown, Menu, X, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCursorTrail } from '@/hooks/useCursorTrail';
import monstroVideo from '@/assets/monstro.mp4';
import mentoriaVideo from '@/assets/mentoria.mp4';
import podcast2Video from '@/assets/podcast2.mp4';
import eliminatoriaVideo from '@/assets/eliminatoria.mp4';

const VideoProduction = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{sender: 'user' | 'ai', message: string}>>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showSuccess, setShowSuccess] = useState(false);
  
  useCursorTrail();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Soluções", href: "/#solucoes" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Contato", href: "/#contato" },
    { 
      label: "Marcos Ferreira", 
      href: "https://mobcontent.com.br/marcos-ferreira/",
      external: true
    }
  ];

  const titleTyping = useTypingEffect({ 
    text: "Seu Roteiro. Nossa IA. Um Vídeo Inesquecível.", 
    speed: 80, 
    delay: 500 
  });

  const subtitleTyping = useTypingEffect({ 
    text: "Produzimos vídeos com Inteligência Artificial Generativa, transformando ideias em narrativas visuais de alto impacto. Do roteiro à finalização, o futuro da produção audiovisual começa aqui.", 
    speed: 20, 
    delay: 1500 
  });

  const scrollToChat = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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
      icon: Film,
      title: "Captação e Animação",
      description: "Da captação de imagens ao motion graphics, oferecemos soluções completas em produção audiovisual. Nossa equipe especializada garante qualidade excepcional em cada projeto, seja em filmagens ou animações personalizadas.",
      videoId: "x12kSnfRdI8",
      image: "https://cms.mobcontent.com.br/wp-content/uploads/2023/08/4.jpg"
    },
    {
      icon: Brain,
      title: "Vídeos Gerados por IA",
      description: "Na vanguarda da inovação, criamos vídeos impressionantes com o poder da Inteligência Artificial. Transformamos conceitos em realidade visual de forma rápida e impactante.",
      videoId: "jnS9yob6J5o",
      image: "https://cms.mobcontent.com.br/wp-content/uploads/2025/08/profess.jpg"
    },
    {
      icon: Wand2,
      title: "Projetos Autorais",
      description: "Conheça nossa produção autoral, onde criatividade e inovação se encontram. Projetos únicos que refletem nossa paixão por contar histórias impactantes através do audiovisual.",
      videoId: "6UeMqSE6Sss",
      image: "https://cms.mobcontent.com.br/wp-content/uploads/2021/04/IneditasDispersas.jpg"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Reparação - Série de TV",
      description: "Série criada com IA, recriando momentos históricos de reparação estrutural",
      videoId: "6EuR2lEwVcU",
      category: "Série de TV"
    },
    {
      id: 2,
      title: "Museu da Língua Portuguesa",
      description: "Captação de 130 vídeos para a exposição permanente da Linha do Tempo da Língua Portuguesa",
      videoId: "Dd_TIBGHY60",
      category: "Documentário"
    },
    {
      id: 3,
      title: "Cabe na Mala",
      description: "Animação desenvolvida para startup com uso de animações vetoriais",
      videoId: "bB1OcCu3iJE",
      category: "Animação"
    },
    {
      id: 4,
      title: "Garagem Maker",
      description: "Série de TV para o Canal Futura indicada a melhor interprograma da América Latina em TVs públicas",
      videoId: "nO4oZfh_UCA",
      category: "Série de TV"
    },
    {
      id: 5,
      title: "Show Mambembe",
      description: "Série de TV para o Canal Futura com 13 episódios",
      videoId: "djsamMyVQq4",
      category: "Série de TV"
    },
    {
      id: 6,
      title: "Inéditas, Dispersas e Animadas",
      description: "Série de TV de interprogramas para o Canal Brasil",
      videoId: "BtEJJW7daNk",
      category: "Série de TV"
    }
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('https://formspree.io/f/xnnzwnlz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Falha ao enviar o formulário');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-border/20 shadow-sm text-gray-900' 
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-black">
                mob<span className={`${isScrolled ? 'text-forest' : 'text-white'}`}>
                  CONTENT
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  className={`text-sm font-medium hover:text-forest transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-forest' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a href="/">
                <Button className="bg-forest hover:bg-forest/90 text-white">
                  Voltar para o Início
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-forest' : 'text-white hover:text-forest'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          } ${isScrolled ? 'bg-white' : 'bg-gray-900'}`}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className={`block py-2 hover:text-forest transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-forest' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/" 
              className="block py-2 text-forest font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Voltar para o Início
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src={monstroVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-6 py-20">
          <h1 
            className="text-4xl md:text-6xl font-bold text-center mb-6 max-w-4xl mx-auto"
            style={{ 
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            {titleTyping.displayText}
          </h1>
          
          <p 
            className="text-lg md:text-xl text-center mb-8 max-w-2xl mx-auto"
            style={{ 
              textShadow: '0 1px 5px rgba(0,0,0,0.8)'
            }}
          >
            {subtitleTyping.displayText}
          </p>

          <Button 
            onClick={scrollToChat}
            className="bg-forest-accent hover:bg-forest-light text-black font-bold py-4 px-8 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 forest-glow"
          >
            Crie seu orçamento agora
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
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-40">
          <img 
            src="https://cms.mobcontent.com.br/wp-content/uploads/2023/08/275834393_152110030564858_7985067907118765247_n-e1691006390190.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 text-white">
            O Futuro do Vídeo, Hoje
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative block"
              >
                <div className="h-full rounded-2xl bg-forest-deep/80 backdrop-blur-sm border border-forest-accent/20 hover:border-forest-accent/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="aspect-video relative">
                    <iframe 
                      src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&controls=0&showinfo=0&modestbranding=1&mute=1&loop=1&playlist=${service.videoId}`} 
                      frameBorder="0" 
                      allowFullScreen 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-accent/20 mb-6 group-hover:bg-forest-accent/30 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-forest-accent" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-forest-accent transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-forest-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="text-forest-accent font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Ver Playlist
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 opacity-40">
          <img 
            src="https://cms.mobcontent.com.br/wp-content/uploads/2023/08/275959670_708304946833345_113456570046816459_n-e1691006413440.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
            Nossos Cases
          </h2>
          <p className="text-xl text-forest-light text-center mb-16 max-w-4xl mx-auto">
            Confira alguns dos nossos trabalhos mais recentes e inovadores na produção audiovisual.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a 
                key={project.id}
                href={`https://www.youtube.com/watch?v=${project.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-2xl bg-forest-deep/80 backdrop-blur-sm border border-forest-accent/20 hover:border-forest-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-video relative">
                  <img 
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-forest-accent/80 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-forest-accent font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-forest-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-forest-light text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="text-sm font-medium text-forest-accent group-hover:text-white transition-colors inline-flex items-center">
                    Assistir no YouTube
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Section - Temporarily Hidden */}
      {false && (
        <section id="ai-chat" className="relative py-24">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <img 
              src="https://cms.mobcontent.com.br/wp-content/uploads/2023/08/Denise_banner.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black text-center mb-6 text-forest-light">
                Sua Ideia. Nosso Orçamento. Em Instantes.
              </h2>
              <p className="text-xl text-forest-light/90 mb-4">
                Sem formulários, sem espera. Descreva seu projeto em nosso chat e nossa IA irá gerar uma proposta e um orçamento inicial para você.
              </p>
              <div className="flex items-center justify-center gap-6 text-forest-accent text-sm font-semibold">
                <span>✨ +500 vídeos produzidos</span>
                <span>🏆 Prêmios nacionais e internacionais</span>
                <span>🚀 Líder em IA no Brasil</span>
              </div>
            </div>
            
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
                          ? 'bg-forest-accent text-forest-deep' 
                          : 'bg-forest-deep/40 text-forest-light border border-forest-accent/20'
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
                className="flex-1 bg-forest-deep/50 border border-forest-accent/30 text-forest-light placeholder-forest-light/50 focus:border-forest-accent focus:text-forest-light"
              />
              <Button 
                type="submit"
                className="self-end bg-forest-accent hover:bg-forest-accent/90 text-forest-deep font-semibold"
                disabled={!chatMessage.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </section>
      )}
      
      {/* Human Contact Form Section */}
      <section id="contato" className="py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <img 
            src="https://cms.mobcontent.com.br/wp-content/uploads/2021/05/groundbreaker.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-forest-deep rounded-xl p-8 max-w-md w-full border-2 border-forest-accent/50 shadow-2xl">
              <div className="text-center">
                <CheckCircle2 className="w-16 h-16 text-forest-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-forest-light mb-2">Mensagem Enviada!</h3>
                <p className="text-forest-light/90 mb-6">Obrigado pelo seu contato. Nossa equipe retornará em breve!</p>
                <Button 
                  onClick={() => setShowSuccess(false)}
                  className="bg-forest-accent hover:bg-forest-accent/90 text-forest-deep font-semibold px-8 py-2"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-forest-light mb-6">
              Fale com nosso time
            </h2>
            <p className="text-xl text-forest-light/80 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
            </p>
          </div>

          <div className="bg-forest-deep/80 backdrop-blur-sm rounded-2xl border border-forest-accent/20 p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-forest-light font-medium">Nome *</label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-forest-deep/50 border border-forest-accent/30 text-forest-light placeholder-forest-light/50 focus:border-forest-accent focus:text-forest-light"
                    placeholder="Seu nome completo"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-forest-light font-medium">Email *</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-forest-deep/50 border border-forest-accent/30 text-forest-light placeholder-forest-light/50 focus:border-forest-accent focus:text-forest-light"
                    placeholder="seu@email.com"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-forest-light font-medium">Empresa/Organização</label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-forest-deep/50 border border-forest-accent/30 text-forest-light placeholder-forest-light/50 focus:border-forest-accent focus:text-forest-light"
                  placeholder="Nome da sua organização"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-forest-light font-medium">Mensagem *</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-forest-deep/50 border border-forest-accent/30 rounded-lg p-4 text-forest-light placeholder-forest-light/50 focus:border-forest-accent focus:text-forest-light focus:outline-none focus:ring-2 focus:ring-forest-accent/50 resize-none"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-forest-accent hover:bg-forest-accent/90 text-forest-deep font-semibold py-6 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-forest-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : 'Enviar mensagem'}
                </Button>
              </div>
              
              {formStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 text-red-200 rounded-lg text-sm text-center">
                  Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.
                </div>
              )}
            </form>
          </div>
          
          <div className="mt-12 text-center text-forest-light/80">
            <p>Ou se preferir, entre em contato diretamente:</p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <a href="mailto:contato@mobcontent.com.br" className="flex items-center gap-2 hover:text-forest-accent transition-colors">
                <Mail className="h-5 w-5" />
                contato@mobcontent.com.br
              </a>
              <a href="tel:+5521992113485" className="flex items-center gap-2 hover:text-forest-accent transition-colors">
                <Phone className="h-5 w-5" />
                (21) 99211-3485
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-forest-light/80 mb-4">Ou se preferir, fale conosco pelo WhatsApp:</p>
            <a 
              href="https://wa.me/5521992113485" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.174-.297-.018-.458.13-.606.136-.135.298-.353.446-.52.146-.181.194-.296.297-.494.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.1 3.195 5.1 4.485.714.3 1.27.489 1.704.625.714.227 1.365.195 1.88.121.574-.09 1.758-.719 2.006-1.413.248-.691.248-1.289.173-1.413-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.77 9.77 0 01-5.469-1.695l-.37-.225-3.75.975 1.005-3.645-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.022 2.9 9.85 9.85 0 01-1.43 14.896 9.8 9.8 0 01-4.69 1.267M12 2.165A9.864 9.864 0 002.929 17.25a.75.75 0 01-.09.38L1.25 22.5l4.92-1.3a.75.75 0 01.36-.09 9.864 9.864 0 009.94-9.94 9.864 9.864 0 00-9.94-9.94A9.864 9.864 0 002.25 12v.67a.75.75 0 01-1.5 0V12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z"/>
              </svg>
              (21) 99211-3485
            </a>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default VideoProduction;