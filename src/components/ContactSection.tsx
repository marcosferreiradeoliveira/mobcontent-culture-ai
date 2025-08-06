import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const sectionDescription = useTypingEffect({
    text: "Pronto para transformar sua visão cultural em realidade? Entre em contato e vamos criar algo extraordinário juntos.",
    speed: 30,
    delay: 300
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 morphing-shape">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">Empresa/Organização</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent"
                  placeholder="Nome da sua organização"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card/50 border-white/20 text-white placeholder:text-white/50 focus:border-forest-accent resize-none"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-forest hover:bg-forest-dark text-white font-semibold forest-glow morphing-shape"
              >
                Enviar mensagem
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
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
                  description: "Resposta em até 24 horas"
                },
                {
                  icon: Phone,
                  title: "WhatsApp",
                  info: "+55 (11) 99999-9999",
                  description: "Horário comercial: 9h às 18h"
                },
                {
                  icon: MapPin,
                  title: "Localização",
                  info: "São Paulo, Brasil",
                  description: "Atendemos globalmente"
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                
                return (
                  <div
                    key={contact.title}
                    className="bg-card/20 border border-white/10 rounded-xl p-6 gallery-hover hover:border-forest-accent/40 transition-all duration-300 morphing-shape"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-forest-accent/10 rounded-xl flex items-center justify-center morphing-shape">
                        <Icon className="w-6 h-6 text-forest-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{contact.title}</h3>
                        <p className="text-forest-accent font-semibold mb-1">{contact.info}</p>
                        <p className="text-white/60 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-card/20 border border-white/10 rounded-xl p-6 morphing-shape">
              <h3 className="text-white font-bold text-lg mb-4">Por que escolher a mobCONTENT?</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full" />
                  <span>Expertise em IA e narrativas culturais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full" />
                  <span>Projetos premiados internacionalmente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full" />
                  <span>Foco em impacto social e cultural</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-accent rounded-full" />
                  <span>Tecnologia de ponta e inovação</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};