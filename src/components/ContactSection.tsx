import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnalyticsButton } from "@/components/ui/analytics-button";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { trackFormSubmission, trackEvent } from "@/utils/analytics";
import { getWhatsAppUrl, useLocale } from "@/i18n/LocaleContext";
import equipeImage from "@/assets/equipe02-1024x683.jpg";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    fbq: (command: string, ...args: any[]) => void;
  }
}

export const ContactSection = () => {
  const { t } = useLocale();
  const whatsappUrl = getWhatsAppUrl(t.whatsapp.message);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sectionDescription = useTypingEffect({
    text: t.contact.description,
    speed: 30,
    delay: 300,
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
        // Track successful submission
        trackFormSubmission('contact_form', true);
        
        // Track Google Ads conversion
        if (window.gtag) {
          window.gtag('event', 'conversion', {'send_to': 'AW-819789199/2Y_XCMLkooUYEI_784YD'});
        }
        
        // Track Google Ads conversion using the analytics utility
        trackEvent('conversion', {
          event_category: 'conversion',
          event_label: 'contact_form_submission',
          value: 1.0
        });
        
        // Track Meta Pixel conversion
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Formulário de Contato',
            content_category: 'Lead',
            value: 0.00,
            currency: 'BRL'
          });
        }
        
        // Track form submission with GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'form_submission',
          'form_name': formName,
          'form_type': 'contact',
          'form_location': 'contact_section'
        });
        
        setIsSuccess(true);
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
        throw new Error(data.error || t.contact.errorGeneric);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t.contact.errorGeneric;
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
    <section 
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" 
      id="contato"
      style={{
        backgroundImage: `url(${equipeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70">
        <div className="absolute top-20 left-10 w-64 h-64 bg-forest-accent/15 rounded-full blur-3xl animate-parallax-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-parallax-float delay-[5s]" />
        <div className="neural-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            {t.contact.title}{t.contact.title ? " " : ""}
            <span className="text-gradient-forest">{t.contact.titleHighlight}</span>
          </h2>
          <p ref={sectionDescription.ref} className={`text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-1 ${sectionDescription.isTyping ? 'typing-cursor' : ''}`}>
            {sectionDescription.displayText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-colors text-sm sm:text-base"
            aria-label={t.contact.whatsappAria}
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            {t.contact.whatsapp}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
            {isSuccess ? (
              <div className="text-center p-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
                <p className="text-white/70">{t.contact.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">{t.contact.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                      placeholder={t.contact.namePlaceholder}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">{t.contact.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                      placeholder={t.contact.emailPlaceholder}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">{t.contact.company}</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                    placeholder={t.contact.companyPlaceholder}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent resize-none"
                    placeholder={t.contact.messagePlaceholder}
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
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {t.contact.send}
                      </>
                    )}
                  </AnalyticsButton>
                </div>
              </form>
            )}
            
            {/* Social Media Links */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-white/70 mb-3 sm:mb-4 text-center text-sm sm:text-base">{t.contact.followUs}</p>
              <div className="flex justify-center gap-6">
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
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: Mail,
                  title: t.contact.cards.email.title,
                  info: "contato@mobcontent.com.br",
                  description: t.contact.cards.email.description,
                  href: "mailto:contato@mobcontent.com.br",
                },
                {
                  icon: Phone,
                  title: t.contact.cards.whatsapp.title,
                  info: "+55 21 96622-5632",
                  description: t.contact.cards.whatsapp.description,
                  href: whatsappUrl,
                },
                {
                  icon: MapPin,
                  title: t.contact.cards.office.title,
                  info: "Rio de Janeiro - RJ",
                  description: t.contact.cards.office.description,
                  href: "#",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                
                return (
                  <a
                    key={contact.title}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block group"
                  >
                    <div
                      className="bg-black/40 border border-white/10 rounded-xl p-6 gallery-hover hover:border-forest-accent/40 transition-all duration-300 group-hover:bg-black/60"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-accent/20 transition-colors">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-bold mb-1 text-sm sm:text-base">{contact.title}</h3>
                          <p className="text-forest-accent font-semibold mb-1 text-sm sm:text-base break-all">{contact.info}</p>
                          <p className="text-white/60 text-xs sm:text-sm">{contact.description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};