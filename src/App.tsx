import { useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Processo from "./pages/Processo";
import Contato from "./pages/Contato";
import Regional from "./pages/Regional";

import "./index.css";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Engenho Soft | Engenharia de Software, Automação e IA",
    description: "Engenharia de software, sistemas, plataformas web, automação e inteligência artificial em Florianópolis, Santa Catarina, com atendimento em todo o Brasil.",
  },
  "/sobre": {
    title: "Sobre a Engenho Soft | Engenharia de Software",
    description: "Conheça a Engenho Soft, empresa de desenvolvimento de software, automação e inteligência artificial, com atendimento nacional.",
  },
  "/solucoes": {
    title: "Soluções em Software, Automação e IA | Engenho Soft",
    description: "Software sob medida, sistemas, plataformas web, aplicativos, automações, APIs, dados, dashboards, inteligência artificial, cloud, DevOps e segurança.",
  },
  "/processo": {
    title: "Como trabalhamos | Engenho Soft",
    description: "Do entendimento à evolução: conheça o processo da Engenho Soft para criar soluções digitais personalizadas.",
  },
  "/contato": {
    title: "Fale com a Engenho Soft | Software, Automação e IA",
    description: "Fale com a Engenho Soft sobre sistemas, plataformas, automações, inteligência artificial, APIs, dados e projetos de software em todo o Brasil.",
  },
  "/software-florianopolis": {
    title: "Empresa de Software em Florianópolis e Santa Catarina | Engenho Soft",
    description: "Desenvolvimento de software, sistemas, automação e inteligência artificial para empresas de Florianópolis, São José, Palhoça, Biguaçu, Tubarão e Santa Catarina.",
  },
  "/software-belem": {
    title: "Empresa de Software com Atendimento em Belém e no Pará | Engenho Soft",
    description: "Desenvolvimento de sistemas, automação, integrações e inteligência artificial para empresas de Belém, Região Metropolitana e todo o Pará.",
  },
  "/software-ananindeua": {
    title: "Desenvolvimento de Software em Ananindeua | Engenho Soft",
    description: "Software sob medida, automação, APIs e inteligência artificial para empresas atendidas em Ananindeua e na Região Metropolitana de Belém.",
  },
};

function PageBehavior() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
    const canonical = `https://www.engenhosoft.com.br${pathname === "/" ? "/" : pathname}`;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metadata.description);
    document.querySelector('meta[name="robots"]')?.setAttribute("content", "index, follow, max-image-preview:large");
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <PageBehavior />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/processo" element={<Processo />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/software-florianopolis" element={<Regional region="florianopolis" />} />
            <Route path="/software-belem" element={<Regional region="belem" />} />
            <Route path="/software-ananindeua" element={<Regional region="ananindeua" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
