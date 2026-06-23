import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "IA", href: "/ai", internal: true },
    { label: "Apps", href: "/desenvolvimento-apps", internal: true },
    { label: "Audiovisual", href: "/video-production", internal: true },
    { label: "Sobre a mob", href: "/sobre", internal: true },
    { label: "Marcos Ferreira", href: "https://marcosferreira.art.br/", internal: false },
    { label: "Contato", href: "#contato", internal: false }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-border/20 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="text-lg sm:text-xl font-black truncate">
              mob<span className="text-forest">CONTENT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.internal && !item.href.startsWith('#') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-forest ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`font-medium transition-colors duration-300 hover:text-forest ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-primary hover:bg-gallery' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border/20 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) =>
                item.internal && !item.href.startsWith('#') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block text-primary font-medium hover:text-forest transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block text-primary font-medium hover:text-forest transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};