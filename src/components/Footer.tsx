import { Brain, Camera, Smartphone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                mob<span className="text-electric">CONTENT</span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Inteligência Artificial para Narrativas Culturais.
                <br />
                Criamos o futuro da cultura em código, pixels e narrativas.
              </p>
            </div>

            {/* Pillars Icons */}
            <div className="flex space-x-6">
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-electric" />
              </div>
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-electric" />
              </div>
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-electric" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5 text-electric" />
                <span>contato@mobcontent.com.br</span>
              </div>
              <a href="https://wa.me/5521966225632?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20mobCONTENT." target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/80 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-5 h-5 text-electric" />
                <span>+55 21 96622-5632</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80">
                <Globe className="w-5 h-5 text-electric" />
                <span>mobcontent.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5 text-electric" />
                <span>Rio de Janeiro, Brasil & Internacional</span>
              </div>
              <a
                href="https://wa.me/5521966225632?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20mobCONTENT."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Soluções</h4>
            <ul className="space-y-3">
              {[
                "Inteligência Artificial",
                "Produção Audiovisual", 
                "Desenvolvimento de Apps",
                "Oráculo Cultural",
                "Narrativas Interativas",
                "Conteúdo para Streaming"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-electric transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {[
                "Sobre nós",
                "Projetos",
                "Cases de Sucesso",
                "Prêmios",
                "Equipe",
                "Carreira"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-electric transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Button 
                size="sm"
                className="bg-electric hover:bg-electric-dark text-white font-semibold w-full"
              >
                Vamos conversar
              </Button>
            </div>
          </div>
        </div>

        {/* Awards Banner */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric rounded-full" />
              <span>British Council Young Creative Entrepreneur</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric rounded-full" />
              <span>Prêmio TAL</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric rounded-full" />
              <span>Sunny Side of The Doc</span>
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>
            © {currentYear} mobCONTENT. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-electric transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-electric transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-electric transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-electric/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-electric/5 rounded-full blur-2xl" />
    </footer>
  );
};