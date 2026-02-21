import { Mail, MapPin, Globe, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content - em desktop os blocos ficam espalhados */}
        <div className="py-12 sm:py-16 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 sm:gap-12 lg:gap-16 xl:gap-24">
          {/* Brand + tagline */}
          <div className="space-y-4 sm:space-y-5 lg:max-w-sm">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              mob<span className="text-electric">CONTENT</span>
            </h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              Inteligência Artificial para Narrativas Culturais.
              <br />
              Criamos o futuro da cultura em código, pixels e narrativas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3 lg:min-w-[280px] lg:text-right">
            <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base lg:justify-end">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
              <span className="break-all">contato@mobcontent.com.br</span>
            </div>
            <a href="https://wa.me/5521966225632?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20mobCONTENT." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/80 hover:text-[#25D366] transition-colors text-sm sm:text-base lg:justify-end">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
              <span>+55 21 96622-5632</span>
            </a>
            <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base lg:justify-end">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
              <span>mobcontent.com.br</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-sm sm:text-base lg:justify-end">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-electric flex-shrink-0" />
              <span>Rio de Janeiro, Brasil & Internacional</span>
            </div>
            <div className="mt-2 lg:flex lg:justify-end">
              <a
                href="https://wa.me/5521966225632?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20mobCONTENT."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-xs sm:text-sm text-center md:text-left">
          <p>
            © {currentYear} mobCONTENT. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-0">
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