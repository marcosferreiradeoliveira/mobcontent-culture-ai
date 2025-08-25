import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnalyticsButton } from "@/components/ui/analytics-button";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2, Instagram, Linkedin } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { trackFormSubmission, trackEvent } from "@/utils/analytics";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sectionDescription = useTypingEffect({
    text: "Pronto para transformar sua visão cultural em realidade? Entre em contato e vamos criar algo extraordinário juntos.",
    speed: 30,
    delay: 300
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const formName = 'Contato - Formulário Principal';
    
    // Track form start
    trackEvent('form_start', {
      event_category: 'form',
      event_label: formName,
      form_name: formName,
      form_fields: Array.from(formData.keys()).join(',')
    });
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      const response = await fetch("https://formspree.io/f/xnnzwnlz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        // Track successful submission
        trackFormSubmission(formName, true);
        // Reset form
        e.currentTarget.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        // Track form error
        trackEvent('form_error', {
          event_category: 'form',
          event_label: formName,
          form_name: formName,
          error: data.error || 'Unknown error'
        });
        throw new Error(data.error || 'Ocorreu um erro ao enviar a mensagem');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro inesperado';
      setError(errorMessage);
      // Track form error
      trackEvent('form_error', {
        event_category: 'form',
        event_label: formName,
        form_name: formName,
        error: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-forest-darker relative overflow-hidden" id="contato">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-accent/15 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-parallax-float delay-[5s]" />
        <div className="neural-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Vamos <span className="text-gradient-forest">Conversar</span>
          </h2>
          <p ref={sectionDescription.ref} className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed ${sectionDescription.isTyping ? 'typing-cursor' : ''}`}>
            {sectionDescription.displayText}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {isSuccess ? (
              <div className="text-center p-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-white/70">Obrigado pelo seu contato. Retornaremos em breve!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                      placeholder="Seu nome completo"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                      placeholder="seu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Empresa/Organização</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                    placeholder="Nome da sua organização"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500 focus:border-forest-accent resize-none"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="pt-2">
                  <AnalyticsButton 
                    eventName="form_submit_click"
                    eventCategory="form"
                    eventLabel="Enviar Mensagem"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-forest hover:bg-forest-dark text-white font-semibold py-6 px-8 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </AnalyticsButton>
                </div>
              </form>
            )}
            
            {/* Social Media Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/70 mb-4 text-center">Siga-nos nas redes sociais</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/mobcontent/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-forest-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/mobcontent/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-forest-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "contato@mobcontent.com.br",
                  description: "Resposta em até 24h úteis"
                },
                {
                  icon: Phone,
                  title: "WhatsApp",
                  info: "+55 21 99211-3485",
                  description: "Atendimento: Seg-Sex, 9h-18h"
                },
                {
                  icon: MapPin,
                  title: "Sede",
                  info: "Rio de Janeiro - RJ",
                  description: "Atendemos clientes em todo o Brasil"
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                
                return (
                  <a
                    key={contact.title}
                    href={contact.title === "Email" ? "mailto:contato@mobcontent.com.br" : 
                         contact.title === "WhatsApp" ? "https://wa.me/5521992113485" : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div
                      className="bg-card/20 border border-white/10 rounded-xl p-6 gallery-hover hover:border-forest-accent/40 transition-all duration-300 group-hover:bg-forest/5"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-forest-accent/10 rounded-xl flex items-center justify-center group-hover:bg-forest-accent/20 transition-colors">
                          <Icon className="w-6 h-6 text-forest-accent" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">{contact.title}</h3>
                          <p className="text-forest-accent font-semibold mb-1">{contact.info}</p>
                          <p className="text-white/60 text-sm">{contact.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-card/20 border border-white/10 rounded-xl p-6 h-full">
              <h3 className="text-white font-bold text-xl mb-4">Nossa Abordagem</h3>
              <p className="text-white/80 mb-5">Na mobCONTENT, combinamos tecnologia de ponta com narrativas culturais impactantes para criar experiências únicas e memoráveis.</p>
              
              <h4 className="text-forest-accent font-semibold mb-3">Nossos Diferenciais:</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full mt-2 flex-shrink-0" />
                  <span><strong>IA Generativa:</strong> Soluções personalizadas com inteligência artificial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Storytelling Imersivo:</strong> Narrativas que engajam e emocionam</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Inovação Contínua:</strong> Sempre à frente nas últimas tendências tecnológicas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Impacto Cultural:</strong> Projetos que fazem a diferença na sociedade</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/60 text-sm">Agende uma consultoria gratuita e descubra como podemos elevar a presença digital da sua marca.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};