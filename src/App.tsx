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
import NotFound from "./pages/NotFound";
import { PageViewTracker } from "./components/Analytics/PageViewTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
