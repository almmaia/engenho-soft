import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import BrandMark from "./BrandMark";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <BrandMark variant="vertical" />
          </Link>

          <p>Florianópolis, Santa Catarina<br />Atendimento nacional</p>
        </div>

        <div className="footer-navigation">
          <h3>Navegação</h3>
          <div className="footer-links">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/solucoes">Soluções</Link>
            <Link to="/processo">Como trabalhamos</Link>
            <Link to="/cases">Experiências</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </div>


        <div className="footer-contact">
          <h3>Redes e contato</h3>
          <div className="footer-social-icons" aria-label="Canais de contato da Engenho Soft">
          <a className="social-contact whatsapp-contact" href="https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Engenho%20Soft." target="_blank" rel="noreferrer" aria-label="Conversar com a Engenho Soft pelo WhatsApp" title="WhatsApp">
            <span className="social-icon"><FaWhatsapp size={19} /></span>
          </a>
          <a className="social-contact" href="mailto:alanmaix@gmail.com?subject=Contato pelo site Engenho Soft" aria-label="Enviar um e-mail para a Engenho Soft" title="E-mail">
            <span className="social-icon"><Mail size={18} /></span>
          </a>
          <a className="social-contact" href="https://www.instagram.com/engenhosoft/" target="_blank" rel="noreferrer" aria-label="Abrir o Instagram da Engenho Soft" title="Instagram">
            <span className="social-icon"><FaInstagram size={19} /></span>
          </a>
          <a className="social-contact" href="https://www.linkedin.com/company/maia-tecnologia/" target="_blank" rel="noreferrer" aria-label="Abrir o LinkedIn da Engenho Soft" title="LinkedIn">
            <span className="social-icon"><FaLinkedinIn size={18} /></span>
          </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Engenho Soft. Todos os direitos reservados.</span>

      </div>
    </footer>
  );
}

export default Footer;
