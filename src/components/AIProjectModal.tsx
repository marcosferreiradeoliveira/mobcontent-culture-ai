import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIProject {
  id: string;
  title: string;
  shortDescription: string;
  fullTitle: string;
  detailedDescription: string;
  technologies: string;
  impact: string;
  format?: string;
  image: string;
}

interface AIProjectModalProps {
  project: AIProject;
  onClose: () => void;
}

export const AIProjectModal = ({ project, onClose }: AIProjectModalProps) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-white/20 rounded-3xl"
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-white hover:text-forest-accent hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Header with Background Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            {/* Header Content */}
            <div className="absolute bottom-8 left-8 right-16">
              <div className="inline-flex items-center px-4 py-2 bg-forest-accent/25 backdrop-blur-sm rounded-full mb-4">
                <div className="w-2 h-2 bg-forest-accent rounded-full mr-2 animate-pulse" />
                <span className="text-forest-accent font-bold text-sm">IA</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                {project.fullTitle}
              </h2>
              <h3 className="text-xl font-medium text-forest-accent">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-forest-accent/25 rounded-lg mr-3 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-forest-accent" />
                </div>
                Sobre o Projeto
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {project.detailedDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-forest-accent/25 rounded-lg mr-3 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-forest-accent" />
                </div>
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.split(', ').map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-forest-accent/20 text-forest-light rounded-full border border-forest-accent/30 text-sm font-medium hover:bg-forest-accent/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-forest-accent/25 rounded-lg mr-3 flex items-center justify-center">
                  <Target className="w-4 h-4 text-forest-accent" />
                </div>
                Impacto
              </h3>
              <p className="text-white/90 leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Format if available */}
            {project.format && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Formato</h3>
                <p className="text-forest-light font-medium">
                  {project.format}
                </p>
              </div>
            )}

            {/* CTA Section */}
            <div className="pt-8 border-t border-white/10">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Interessado em saber mais?
                </h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-forest hover:bg-forest-dark text-white font-semibold px-8 py-3 forest-glow"
                >
                  <a 
                    href={
                      project.id === "museum-black-memory" 
                        ? "https://www.instagram.com/museudamemorianegraemia/" 
                        : project.id === "oraculo-cultural"
                        ? "https://oraculocultural.com.br/"
                        : project.id === "griot-ai"
                        ? "https://grioai.com.br/"
                        : project.id === "e-ia-professor"
                        ? "https://www.youtube.com/watch?v=5KkIA1xMxuI"
                        : project.id === "lobotomia-mulheres"
                        ? "https://www.youtube.com/watch?v=CfgIYrNHCqA"
                        : project.id === "imagine-prompt"
                        ? "https://www.youtube.com/watch?v=8THwwhAtUMY"
                        : "#contato"
                    }
                    target={
                      project.id === "museum-black-memory" || 
                      project.id === "oraculo-cultural" ||
                      project.id === "griot-ai" ||
                      project.id === "e-ia-professor" ||
                      project.id === "lobotomia-mulheres" ||
                      project.id === "imagine-prompt"
                        ? "_blank" 
                        : "_self"
                    }
                    rel="noopener noreferrer"
                  >
                    {
                      project.id === "museum-black-memory" 
                        ? "Saiba mais" 
                        : project.id === "oraculo-cultural"
                        ? "Acessar site"
                        : project.id === "griot-ai"
                        ? "Acessar site"
                        : project.id === "e-ia-professor" || 
                          project.id === "lobotomia-mulheres" ||
                          project.id === "imagine-prompt"
                        ? "Assistir no YouTube"
                        : "Entre em contato"
                    }
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
