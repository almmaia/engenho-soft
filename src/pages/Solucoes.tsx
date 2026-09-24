import {
  ArrowRight,
  BarChart3,
  Bot,
  Code2,
  Cloud,
  Database,
  Globe,
  LockKeyhole,
  Network,
  Settings2,
  Smartphone,
  Workflow,
} from "lucide-react";

function Solucoes() {
  return (
    <section className="section solutions">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">NOSSAS SOLUÇÕES</span>

          <h1>
            Desenvolvimento de
            <span> software sob medida</span>
          </h1>

          <p>
            Desenvolvemos tecnologia personalizada para empresas,
            profissionais, operações e novos produtos.
          </p>
        </div>

        <div className="solutions-grid">
          <SolutionCard
            id="produtos"
            icon={<Code2 />}
            title="Software sob medida"
            description="Desenvolvimento de sistemas personalizados para processos e necessidades específicas do negócio."
          />

          <SolutionCard
            icon={<Globe />}
            title="Plataformas Web"
            description="Aplicações web modernas para operações internas, clientes e novos produtos digitais."
          />

          <SolutionCard
            icon={<Network />}
            title="APIs e Integrações"
            description="Conectamos sistemas, plataformas e serviços para melhorar o fluxo de informações."
          />

          <SolutionCard
            id="automacao"
            icon={<Settings2 />}
            title="Automação"
            description="Automatizamos processos repetitivos para reduzir tarefas manuais e aumentar a produtividade."
          />

          <SolutionCard
            icon={<Database />}
            title="Dados e bancos de dados"
            description="Estruturamos dados e bancos confiáveis para organizar informações e apoiar a operação."
          />

          <SolutionCard
            icon={<BarChart3 />}
            title="Dashboards"
            description="Painéis gerenciais com indicadores claros para acompanhar resultados e tomar decisões."
          />

          <SolutionCard
            id="inteligencia"
            icon={<Bot />}
            title="Inteligência artificial"
            description="IA aplicada a tarefas, atendimento e análise de dados quando ela gera valor real para o negócio."
          />

          <SolutionCard
            icon={<Cloud />}
            title="Cloud para aplicações"
            description="Publicação, configuração e evolução de aplicações em ambientes de nuvem."
          />

          <SolutionCard
            icon={<Smartphone />}
            title="Aplicações mobile"
            description="Aplicações e experiências responsivas pensadas para celulares, tablets e diferentes telas."
          />

          <SolutionCard
            icon={<Workflow />}
            title="Consultoria tecnológica"
            description="Análise de necessidades e planejamento técnico para transformar desafios em soluções viáveis."
          />

          <SolutionCard
            icon={<LockKeyhole />}
            title="Segurança"
            description="Boas práticas de desenvolvimento e proteção para aplicações, integrações e dados."
          />

          <SolutionCard
            icon={<Settings2 />}
            title="Manutenção e evolução"
            description="Acompanhamento e melhorias contínuas para manter cada produto estável e preparado para evoluir."
          />
        </div>

        <section className="ai-automation-showcase" aria-labelledby="ai-automation-title">
          <div className="ai-showcase-copy">
            <span className="section-label">IA E AUTOMAÇÃO</span>
            <h2 id="ai-automation-title">Inteligência aplicada à operação</h2>
            <p>
              Combinamos automação, dados e inteligência artificial para reduzir tarefas manuais,
              conectar informações e apoiar decisões com mais agilidade.
            </p>
            <a
              href="https://wa.me/5548998141388?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20intelig%C3%AAncia%20artificial%20e%20automa%C3%A7%C3%A3o."
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre uma solução <ArrowRight size={18} />
            </a>
          </div>

          <div className="ai-system-visual" aria-hidden="true">
            <div className="ai-orbit ai-orbit-outer" />
            <div className="ai-orbit ai-orbit-inner" />
            <div className="ai-core"><Bot /></div>
            <div className="ai-node ai-node-automation"><Workflow /><span>Automação</span></div>
            <div className="ai-node ai-node-data"><Database /><span>Dados</span></div>
            <div className="ai-node ai-node-systems"><Network /><span>Sistemas</span></div>
            <i className="ai-signal ai-signal-one" />
            <i className="ai-signal ai-signal-two" />
            <i className="ai-signal ai-signal-three" />
          </div>

          <div className="solution-video-grid">
            <article className="solution-video-card">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/video/product-flow.mp4" type="video/mp4" />
              </video>
              <div><Workflow /><span>Automação</span><strong>Fluxos conectados</strong></div>
            </article>
            <article className="solution-video-card">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/video/product-team-analytics.mp4" type="video/mp4" />
              </video>
              <div><BarChart3 /><span>Dados</span><strong>Informação para decidir</strong></div>
            </article>
            <article className="solution-video-card">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="/video/software-showcase.mp4" type="video/mp4" />
              </video>
              <div><Network /><span>Sistemas</span><strong>Produtos em evolução</strong></div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

function SolutionCard({
  id,
  icon,
  title,
  description,
}: {
  id?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a
      id={id}
      className="solution-card"
      href={`https://wa.me/5548998141388?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${title} da Engenho Soft.`)}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Solicitar informações sobre ${title}`}
    >
      <div className="solution-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="card-arrow">
        <ArrowRight size={18} />
      </span>
    </a>
  );
}

export default Solucoes;
