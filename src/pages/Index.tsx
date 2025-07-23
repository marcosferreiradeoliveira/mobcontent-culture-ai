import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PillarsSection } from "@/components/PillarsSection";
import { CasesSection } from "@/components/CasesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PillarsSection />
      <CasesSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
};

export default Index;
