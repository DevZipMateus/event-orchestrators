import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/limpeza-para-eventos" element={<ServicePage />} />
          <Route path="/bombeiro-civil-para-eventos" element={<ServicePage />} />
          <Route path="/carregadores-para-eventos" element={<ServicePage />} />
          <Route path="/tradutores-para-eventos" element={<ServicePage />} />
          <Route path="/recepcionista-para-eventos" element={<ServicePage />} />
          <Route path="/segurancas-para-eventos" element={<ServicePage />} />
          <Route path="/staff-para-eventos" element={<ServicePage />} />
          <Route path="/locacoes-para-eventos" element={<ServicePage />} />
          <Route path="/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
