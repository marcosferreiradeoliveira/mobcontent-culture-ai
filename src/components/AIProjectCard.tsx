import { motion } from "framer-motion";

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

interface AIProjectCardProps {
  project: AIProject;
  index: number;
  onClick: () => void;
}

export const AIProjectCard = ({ project, index, onClick }: AIProjectCardProps) => {
  // Create asymmetric grid layout with different sizes
  const getCardSize = (index: number) => {
    const patterns = [
      "md:col-span-2 lg:col-span-1 md:row-span-2", // Large card
      "md:col-span-1 lg:col-span-1", // Regular card
      "md:col-span-1 lg:col-span-2", // Wide card
      "md:col-span-2 lg:col-span-1", // Tall card
      "md:col-span-1 lg:col-span-1", // Regular card
      "md:col-span-1 lg:col-span-1 md:row-span-2" // Tall card
    ];
    return patterns[index % patterns.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${getCardSize(index)} group cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative h-full bg-card/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden morphing-shape gallery-hover transition-all duration-500 hover:bg-card/40 hover:border-forest-accent/40 hover:shadow-2xl hover:shadow-forest-accent/20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <div className="inline-flex items-center px-4 py-2 bg-forest-accent/25 backdrop-blur-sm rounded-full morphing-shape">
              <div className="w-2 h-2 bg-forest-accent rounded-full mr-2 animate-pulse" />
              <span className="text-forest-accent font-bold text-sm">IA</span>
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-forest-light transition-colors duration-300 text-texture">
              {project.title}
            </h3>
            
            <p className="text-white/90 leading-relaxed text-sm md:text-base line-clamp-3 group-hover:text-white transition-colors duration-300">
              {project.shortDescription}
            </p>

            {/* Hover CTA */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div className="flex items-center text-forest-accent font-semibold text-sm">
                <span>Explorar projeto</span>
                <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-accent/10 via-transparent to-forest-green/10 blur-xl" />
        </div>
      </div>
    </motion.div>
  );
};