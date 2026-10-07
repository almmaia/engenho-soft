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

import "./index.css";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Engenho Soft | Sistemas, Automação e IA em Belém - PA",
    description: "A Engenho Soft desenvolve sistemas sob medida, automações e soluções de inteligência artificial para empresas em Belém, Pará e todo o Brasil.",
  },
  "/sobre": {
    title: "Sobre a Engenho Soft | Engenharia de Software em Belém - PA",
    description: "Conheça a Engenho Soft: engenharia de software, sistemas, automação e inteligência artificial para empresas em Belém, Pará e todo o Brasil.",
  },
  "/solucoes": {
    title: "Software sob medida, automação e IA em Belém | Engenho Soft",
    description: "Desenvolvemos sistemas sob medida, plataformas, integrações, automações e inteligência artificial para empresas em Belém, Pará e no Brasil.",
  },
  "/processo": {
    title: "Processo de desenvolvimento de software | Engenho Soft",
    description: "Veja como a Engenho Soft transforma desafios de empresas de Belém, do Pará e de todo o Brasil em software sob medida.",
  },
  "/contato": {
    title: "Contato | Sistemas, automação e IA em Belém - Engenho Soft",
    description: "Converse com a Engenho Soft sobre sistemas sob medida, automação e inteligência artificial. Atendemos Belém, Pará e todo o Brasil.",
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
