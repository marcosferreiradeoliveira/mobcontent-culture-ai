import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { PageViewTracker } from "@/components/Analytics/PageViewTracker";
import { motion } from "framer-motion";
import { Award, Lightbulb, Target, Sparkles } from "lucide-react";
import thisIsGreatImage from "@/assets/this-is-great.jpg";
import pequenosImage from "@/assets/Pequenos.jpg";
import gambiarraImage from "@/assets/gambiarra.jpg";
import sunnySideImage from "@/assets/sunny-side-doc-awards.jpg";
import premioTelaVivaImage from "@/assets/premio-tela-viva-768x512.jpg";
import showMambembeBg from "@/assets/ShowMambembe-1536x864.jpg";

const SobreMob = () => {
  usePageMeta({
    title: "Sobre a mob",
    description: "Conheça a trajetória da mobCONTENT: inovação, cultura e narrativas digitais na vanguarda brasileira desde 2011.",
    ogImage: "/og-sobre.jpg",
    path: "/sobre",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    // Corrige URL corrompida (?/&/~and~/...) mantendo só o path atual
    const q = window.location.search;
    if (q && (q.includes('?/&') || (q.match(/~and~/g)?.length ?? 0) > 2)) {
      const path = window.location.pathname.replace(/\/$/, '') || '/sobre';
      window.history.replaceState(null, '', path + (window.location.hash || ''));
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
      title: "Reconhecimento internacional",
      content: "Marcos Ferreira foi agraciado com o Young Creative Entrepreneur pelo British Council em 2013. A mobCONTENT foi destaque no Power To The Pixel (Londres, 2015). Projetos premiados: App Amanhã (melhor app IoT, 2016), Cidade Antigamente (melhor app RV, 2017). A empresa tem presença internacional (UK, USA, França, Espanha, Alemanha, Itália, Argentina)."
    },
    {
      id: "hoje",
      icon: Sparkles,
      title: "mobCONTENT hoje",
      content: "A empresa consolida-se como referência em IA Generativa, Vídeos, Apps e Games, com equipe multidisciplinar e squads de engenheiros, designers, desenvolvedores, UX e marketing. Utiliza low-code e no-code para validar hipóteses (ex.: eTrilhas) e participa de discussões sobre o futuro digital (metaverso, ao lado de players como Samsung e Qualcomm). Com sede no Rio de Janeiro, a mobCONTENT mantém cultura ágil e avança de projetos sob demanda para plataformas e iniciativas de maior escala e impacto."
    }
  ];

  return (
    <div className="min-h-screen text-white relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${showMambembeBg})` }}
      />
      <div className="fixed inset-0 bg-black/70 -z-10" aria-hidden />
      <Navigation />
      <PageViewTracker />

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-5xl relative z-0">
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

        <div className="space-y-12 sm:space-y-20 max-w-5xl mx-auto">
          {/* Imagem à esquerda */}
          <motion.section
            id="genese"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg order-2 md:order-1">
              <img
                src={thisIsGreatImage}
                alt="mobCONTENT - Inovação e narrativas digitais"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-accent/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {sections[0].title}
                  </h2>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    {sections[0].content}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Imagem à direita */}
          <motion.section
            id="vanguarda"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-accent/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {sections[1].title}
                  </h2>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    {sections[1].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src={pequenosImage}
                alt="Pequenos - mobCONTENT"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
          </motion.section>

          {/* Imagem à esquerda */}
          <motion.section
            id="projetos"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg order-2 md:order-1">
              <img
                src={gambiarraImage}
                alt="Gambiarra - mobCONTENT"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-accent/20 flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {sections[2].title}
                  </h2>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    {sections[2].content}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Imagem à direita */}
          <motion.section
            id="premios"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {sections[3].title}
                  </h2>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    {sections[3].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src={sunnySideImage}
                alt="Sunny Side of the Doc - premiação"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
          </motion.section>

          {/* Imagem à esquerda */}
          <motion.section
            id="hoje"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg order-2 md:order-1">
              <img
                src={premioTelaVivaImage}
                alt="Prêmio Tela Viva"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-accent/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-forest-accent" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {sections[4].title}
                  </h2>
                  <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                    {sections[4].content}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-20 text-white/70 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto"
        >
          A trajetória da mobCONTENT ilustra como empreendimentos brasileiros no setor de tecnologia criativa podem alcançar reconhecimento nacional e internacional, combinando talento local com visão global e compromisso com a inovação com propósito.
        </motion.p>

        <section className="mt-16 sm:mt-24">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreMob;
