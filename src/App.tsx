import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VideoProduction from "./pages/VideoProduction";
import AI from "./pages/AI";
import ProducaoAudiovisual from "./pages/ProducaoAudiovisual";
import DesenvolvimentoApps from "./pages/DesenvolvimentoApps";
import Portfolio from "./pages/Portfolio";
import SobreMob from "./pages/SobreMob";
import NotFound from "./pages/NotFound";
import { PageViewTracker } from "./components/Analytics/PageViewTracker";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LocaleProvider } from "./i18n/LocaleContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocaleProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.VITE_CUSTOM_DOMAIN ? '' : (import.meta.env.PROD ? '/mobcontent-culture-ai' : '')}>
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/video-production" element={<VideoProduction />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/ia" element={<AI />} />
          <Route path="/producao-audiovisual" element={<ProducaoAudiovisual />} />
          <Route path="/desenvolvimento-apps" element={<DesenvolvimentoApps />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sobre" element={<SobreMob />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
    </LocaleProvider>
  </QueryClientProvider>
);

export default App;
