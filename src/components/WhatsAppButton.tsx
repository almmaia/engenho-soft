import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Send, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const baseUrl = "https://wa.me/5548998141388";

function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [assistantReply, setAssistantReply] = useState("");
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      { threshold: 0.08 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);


  const sendMessage = (event: FormEvent) => {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;
    const normalized = text.toLocaleLowerCase("pt-BR");
    if (normalized.includes("valor") || normalized.includes("orçamento")) {
      setAssistantReply("O investimento depende do escopo e da complexidade. Envie essa mensagem ao Alan para receber uma avaliação inicial.");
    } else if (normalized.includes("prazo")) {
      setAssistantReply("O prazo é definido depois de entendermos o objetivo, as funcionalidades e as integrações necessárias.");
    } else if (normalized.includes("solu")) {
      setAssistantReply("A Engenho Soft desenvolve sistemas, plataformas, automações, integrações, dados e produtos digitais sob medida.");
    } else {
      setAssistantReply("Entendi. Posso encaminhar sua mensagem diretamente ao Alan para ele continuar o atendimento pelo WhatsApp.");
    }
  };

  const whatsappUrl = `${baseUrl}?text=${encodeURIComponent(message.trim() || "Olá, vim pelo site da Engenho Soft e gostaria de conversar sobre um projeto.")}`;

  return (
    <div className={`whatsapp-assistant${open ? " open" : ""}${footerVisible ? " footer-visible" : ""}`}>
      {open && (
        <div className="whatsapp-panel" role="dialog" aria-label="Atendimento pelo WhatsApp">
          <header>
            <span><FaWhatsapp size={21} /></span>
            <div><strong>Engenho Soft</strong><small>Atendimento pelo WhatsApp</small></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar atendimento"><X size={18} /></button>
          </header>
          <div className="whatsapp-greeting">
            <small>Engenho Soft</small>
            <p>Olá! Conte brevemente o que você precisa construir, melhorar ou automatizar.</p>
          </div>
          <div className="whatsapp-quick-options" aria-label="Assuntos rápidos">
            {["Quero solicitar um orçamento", "Quero conhecer as soluções", "Quero falar sobre prazo"].map((option) => (
              <button type="button" key={option} onClick={() => { setMessage(option); setAssistantReply(""); }}>{option}</button>
            ))}
          </div>
          {assistantReply && <div className="whatsapp-reply"><small>Assistente Engenho Soft</small><p>{assistantReply}</p></div>}
          <form onSubmit={sendMessage}>
            <label htmlFor="whatsapp-message">Sua mensagem</label>
            <div><input id="whatsapp-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Digite aqui..." /><button type="submit" aria-label="Continuar no WhatsApp"><Send size={18} /></button></div>
          </form>
          {assistantReply && <a className="whatsapp-handoff" href={whatsappUrl} target="_blank" rel="noreferrer"><FaWhatsapp size={17} /> Continuar com Alan no WhatsApp</a>}
        </div>
      )}
      <button className="whatsapp-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar atendimento" : "Conversar com a Engenho Soft pelo WhatsApp"}>
        {open ? <X size={23} /> : <FaWhatsapp size={25} />}
      </button>
    </div>
  );
}

export default WhatsAppButton;
