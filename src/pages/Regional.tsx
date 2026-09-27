import { ArrowRight, Bot, Code2, Network, Workflow } from "lucide-react";

const WHATSAPP = "https://wa.me/5548998141388?text=Olá%2C%20encontrei%20a%20Engenho%20Soft%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const regions = {
  florianopolis: {
    label: "FLORIANÓPOLIS E SANTA CATARINA",
    title: "Engenharia de software para empresas de Santa Catarina",
    text: "Atendemos empresas de Florianópolis, São José, Palhoça, Biguaçu, Tubarão e outras cidades de Santa Catarina com desenvolvimento de sistemas, automação, integrações e inteligência artificial.",
  },
  belem: {
    label: "BELÉM E PARÁ",
    title: "Tecnologia sob medida para empresas de Belém e do Pará",
    text: "Atendemos empresas de Belém, Nazaré, Região Metropolitana e todo o Pará com soluções digitais construídas para operações, atendimento, vendas e gestão.",
  },
  ananindeua: {
    label: "ANANINDEUA E REGIÃO METROPOLITANA",
    title: "Software e automação para empresas de Ananindeua",
    text: "Atendemos empresas de Ananindeua e da Região Metropolitana de Belém com sistemas personalizados, automações, APIs, dados e inteligência artificial aplicada.",
  },
} as const;

type RegionalProps = { region: keyof typeof regions };

function Regional({ region }: RegionalProps) {
  const content = regions[region];

  return (
    <section className="section regional-page">
      <div className="container regional-hero">
        <span className="section-label">{content.label}</span>
        <h1>{content.title}</h1>
        <p>{content.text}</p>
        <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
          Falar pelo WhatsApp <ArrowRight size={18} />
        </a>
      </div>

      <div className="container regional-services" aria-label="Soluções oferecidas">
        <article><Code2 /><strong>Software sob medida</strong><p>Sistemas e plataformas adequados à rotina e aos objetivos do negócio.</p></article>
        <article><Workflow /><strong>Automação de processos</strong><p>Fluxos que reduzem tarefas repetitivas, erros e retrabalho.</p></article>
        <article><Network /><strong>APIs e integrações</strong><p>Conexão segura entre sistemas, dados e serviços utilizados pela empresa.</p></article>
        <article><Bot /><strong>Inteligência artificial</strong><p>IA aplicada ao atendimento, análise e operação quando gera valor real.</p></article>
      </div>

      <div className="container regional-note">
        <strong>Atendimento remoto e nacional</strong>
        <p>A Engenho Soft tem sede em Florianópolis e atende projetos em todo o Brasil, incluindo Pará e Santa Catarina.</p>
      </div>
    </section>
  );
}

export default Regional;
