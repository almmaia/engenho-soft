import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const whatsapp = "https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Engenho%20Soft%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

function Contato() {
  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div>
          <span className="section-label">FALE COM A ENGENHO SOFT</span>
          <h1>Conte o desafio. A gente pensa na <span>solução</span></h1>
          <p>
            Fale diretamente com a Engenho Soft sobre o que precisa ser
            construído, integrado, automatizado ou aprimorado.
          </p>
          <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp size={19} /> Iniciar conversa no WhatsApp <ArrowRight size={18} />
          </a>
        </div>

        <div className="contact-card">
          <a href={whatsapp} target="_blank" rel="noreferrer">
            <span className="contact-label"><i><FaWhatsapp size={18} /></i> WhatsApp</span>
            <strong>Conversar agora</strong>
          </a>
          <a href="mailto:alanmaix@gmail.com">
            <span className="contact-label"><i><Mail size={18} /></i> E-mail</span>
            <strong>Enviar mensagem</strong>
          </a>
          <a href="https://www.instagram.com/engenhosoft/" target="_blank" rel="noreferrer">
            <span className="contact-label"><i><FaInstagram size={18} /></i> Instagram</span>
            <strong>Acessar perfil</strong>
          </a>
          <div className="contact-info">
            <span className="contact-label"><i><MapPin size={18} /></i> Localização</span>
            <strong>Florianópolis, Santa Catarina</strong>
            <small>Atendimento em todo o Brasil</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
