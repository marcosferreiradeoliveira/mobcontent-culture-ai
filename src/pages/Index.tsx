import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PillarsSection } from "@/components/PillarsSection";
import { CasesSection } from "@/components/CasesSection";
import { BuildAISection } from "@/components/BuildAISection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ContactSection } from "@/components/ContactSection";
import { MarcosFerreiraSection } from "@/components/MarcosFerreiraSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PillarsSection />
      <CasesSection />
      <BuildAISection />
      <SocialProofSection />
      <MarcosFerreiraSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
