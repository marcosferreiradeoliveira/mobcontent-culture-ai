import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { PageViewTracker } from "@/components/Analytics/PageViewTracker";
import { motion } from "framer-motion";
import { Award, Lightbulb, Target, Sparkles } from "lucide-react";

const SobreMob = () => {
  useEffect(() => {
    document.title = "Sobre a mob | mobCONTENT";
    window.scrollTo(0, 0);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Conheça a trajetória da mobCONTENT: inovação, cultura e narrativas digitais na vanguarda brasileira desde 2011.");
    }
  }, []);

  const sections = [
    {
      id: "genese",
      icon: Sparkles,
      title: "A gênese de uma potência criativa",
      content: "A mobCONTENT emerge no cenário brasileiro na confluência entre criatividade, tecnologia e cultura. Nossa missão é usar tecnologia e inovação para inventar um jeito novo de contar histórias — com foco em IA Generativa, Vídeos, Apps e Games. A adoção contínua de tecnologias de ponta, da Realidade Virtual à Inteligência Artificial Generativa, reflete a busca por desbloquear potenciais narrativos inexplorados e gerar impacto cultural significativo."
    },
    {
      id: "vanguarda",
      icon: Lightbulb,
      title: "Vanguarda tecnológica",
      content: "A mobCONTENT domina um espectro que inclui Realidade Virtual e Aumentada, IA Generativa, aplicativos móveis e games. Destaques: oficina Little Inventors (RV para crianças, parceria Olabi, 2015); app Cidade Antigamente, eleito melhor app de RV em 2017; Museu da Memória Negra em IA e Griot AI (IA para resgate cultural); App Museu do Amanhã (melhor app IoT 2016); eTrilhas, Montaña Limpia, Trilha Transcarioca, Cidades Empreendedoras (Sebrae), APDX, Polissonorum. Na produção audiovisual: animações, licenciamento de acervo, gravações com Gilberto Gil, Maria Bethânia, Tom Zé, Arnaldo Antunes; interatividade para o Museu da Língua Portuguesa e produção para a Fundação Roberto Marinho."
    },
    {
      id: "projetos",
      icon: Target,
      title: "Projetos emblemáticos e legado",
      content: "Projetos como Museu da Memória Negra em IA e Griot AI materializam o uso da IA para resgatar memórias e dar voz a figuras históricas. O App Museu do Amanhã e o Cidade Antigamente receberam prêmios de destaque. A empresa atua com instituições como Museu da Língua Portuguesa, Fundação Roberto Marinho, Conservation International, Sebrae e Olabi, sempre com foco em impacto social, educação e sustentabilidade. O objetivo é democratizar o acesso à cultura e à história usando a tecnologia como ponte."
    },
    {
      id: "premios",
      icon: Award,
      title: "Reconhecimento e marcos",
      content: "Marcos Ferreira foi agraciado com o Young Creative Entrepreneur pelo British Council em 2013. A mobCONTENT foi destaque no Power To The Pixel (Londres, 2015). Projetos premiados: App Amanhã (melhor app IoT, 2016), Cidade Antigamente (melhor app RV, 2017), e seleção para o 14º Doc Futura (Canal Futura / Fundação Roberto Marinho, 2023). A empresa tem presença internacional (UK, USA, França, Espanha, Alemanha, Itália, Argentina)."
    },
    {
      id: "hoje",
      icon: Sparkles,
      title: "mobCONTENT hoje",
      content: "A empresa consolida-se como referência em IA Generativa, Vídeos, Apps e Games, com equipe multidisciplinar e squads de engenheiros, designers, desenvolvedores, UX e marketing. Utiliza low-code e no-code para validar hipóteses (ex.: eTrilhas) e participa de discussões sobre o futuro digital (metaverso, ao lado de players como Samsung e Qualcomm). Com sede no Rio de Janeiro, a mobCONTENT mantém cultura ágil e avança de projetos sob demanda para plataformas e iniciativas de maior escala e impacto."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageViewTracker />

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Sobre a <span className="text-forest-accent">mob</span>CONTENT
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Inovação, cultura e narrativas digitais na vanguarda brasileira
          </p>
        </motion.header>

        <div className="space-y-12 sm:space-y-16">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-accent/20 flex items-center justify-center">
                  <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-white/70 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
            A trajetória da mobCONTENT ilustra como empreendimentos brasileiros no setor de tecnologia criativa podem alcançar reconhecimento nacional e internacional, combinando talento local com visão global e compromisso com a inovação com propósito.
          </p>
        </motion.div>

        <section className="mt-16 sm:mt-24">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreMob;
