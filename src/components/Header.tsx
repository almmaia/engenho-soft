import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (group: string) => {
    setOpenGroup((current) => (current === group ? null : group));
  };

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <BrandMark />
        </Link>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>
            Início
          </NavLink>

          <div className={openGroup === "sobre" ? "nav-group open" : "nav-group"}>
            <button type="button" className="nav-group-trigger" onClick={() => toggleGroup("sobre")} aria-expanded={openGroup === "sobre"}>Sobre <ChevronDown size={13} /></button>
            <div className="nav-mega">
              <Link to="/sobre" onClick={closeMenu}><strong>Quem somos</strong><span>Empresa, propósito e atuação</span></Link>
              <Link to="/sobre#fundador" onClick={closeMenu}><strong>Quem está à frente</strong><span>Conheça Alan Maia</span></Link>
            </div>
          </div>

          <div className={openGroup === "solucoes" ? "nav-group nav-group-wide open" : "nav-group nav-group-wide"}>
            <button type="button" className="nav-group-trigger" onClick={() => toggleGroup("solucoes")} aria-expanded={openGroup === "solucoes"}>Soluções <ChevronDown size={13} /></button>
            <div className="nav-mega">
              <Link to="/solucoes" onClick={closeMenu}><strong>Visão geral</strong><span>Conheça todas as soluções</span></Link>
              <Link to="/solucoes#produtos" onClick={closeMenu}><strong>Produtos digitais</strong><span>Sistemas e plataformas</span></Link>
              <Link to="/solucoes#automacao" onClick={closeMenu}><strong>Automação e integração</strong><span>APIs, fluxos e dados</span></Link>
              <Link to="/solucoes#inteligencia" onClick={closeMenu}><strong>IA e inteligência</strong><span>Soluções aplicadas ao contexto</span></Link>
            </div>
          </div>

          <div className={openGroup === "processo" ? "nav-group open" : "nav-group"}>
            <button type="button" className="nav-group-trigger" onClick={() => toggleGroup("processo")} aria-expanded={openGroup === "processo"}>Como trabalhamos <ChevronDown size={13} /></button>
            <div className="nav-mega">
              <Link to="/processo" onClick={closeMenu}><strong>Visão geral</strong><span>Conheça nossa forma de trabalhar</span></Link>
              <Link to="/processo" onClick={closeMenu}><strong>Da descoberta à entrega</strong><span>Nosso processo de trabalho</span></Link>
              <Link to="/processo" onClick={closeMenu}><strong>Evolução contínua</strong><span>Software depois da publicação</span></Link>
            </div>
          </div>

          <Link to="/contato" className="nav-cta" onClick={closeMenu}>
            Fale conosco
          </Link>
        </nav>

        <button
          className="menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setOpenGroup(null);
          }}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
