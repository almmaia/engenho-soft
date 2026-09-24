import {
  Check,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

function Sobre() {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">SOBRE A ENGENHO SOFT</span>

          <h1>
            Tecnologia com
            <span> visão de negócio</span>
          </h1>

          <p>
            A Engenho Soft nasceu para desenvolver soluções
            digitais que aproximam tecnologia, operação e resultado.
          </p>
        </div>

        <div className="two-columns about-content">
          <div>
            <h2>Participação direta em cada etapa</h2>
          </div>

          <div className="section-text">
            <p>
              Trabalhamos com empresas, profissionais e organizações que
              precisam construir, integrar ou aprimorar produtos digitais.
            </p>

            <p>
              Cada projeto começa pela compreensão do contexto. Só depois
              definimos arquitetura, prioridades e tecnologia.
            </p>

            <p>
              O resultado é uma solução coerente com a realidade do cliente,
              acompanhada por comunicação direta e decisões técnicas claras.
            </p>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="icon-box">
              <Sparkles size={22} />
            </div>

            <h3>Clareza</h3>

            <p>
              Explicamos escolhas, prioridades e limites sem esconder a complexidade.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <ShieldCheck size={22} />
            </div>

            <h3>Responsabilidade</h3>

            <p>
              Tratamos cada produto como parte importante da operação de quem confia no nosso trabalho.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <Check size={22} />
            </div>

            <h3>Qualidade técnica</h3>

            <p>
              Construímos soluções organizadas, confiáveis e preparadas para manutenção.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-box">
              <Layers3 size={22} />
            </div>

            <h3>Continuidade</h3>

            <p>
              O trabalho continua depois da publicação, com acompanhamento e evolução.
            </p>
          </div>
        </div>

        <div className="company-principles">
          <article>
            <span className="section-label">MISSÃO</span>
            <h3>Simplificar negócios por meio da tecnologia</h3>
            <p>Desenvolver soluções digitais personalizadas que resolvam problemas reais, melhorem processos e impulsionem resultados.</p>
          </article>
          <article>
            <span className="section-label">VISÃO</span>
            <h3>Ser uma parceira de tecnologia reconhecida pela confiança</h3>
            <p>Crescer ao lado de empresas de todo o Brasil, transformando ideias e desafios em produtos digitais sustentáveis.</p>
          </article>
        </div>

        <div className="founder-card founder-editorial">
          <div className="founder-photo">
            <img src="/team/alan-maia.jpg" alt="Alan Maia, fundador e desenvolvedor de software da Engenho Soft" />
          </div>
          <div>
            <span className="section-label">QUEM ESTÁ À FRENTE</span>
            <h2>Alan Maia</h2>
            <strong>Fundador e Desenvolvedor de Software</strong>
            <p>Atua diretamente no entendimento de cada necessidade, nas decisões técnicas e no desenvolvimento das soluções da Engenho Soft.</p>
            <span className="founder-location">Florianópolis, Santa Catarina • Atendimento nacional</span>
            <a
              href="https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Engenho%20Soft%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="button button-primary founder-button"
            >
              Fale com a Engenho Soft <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
