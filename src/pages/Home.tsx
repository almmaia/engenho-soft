import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import DigitalScene from "../components/DigitalScene";

const WHATSAPP =
  "https://wa.me/5548998141388?text=Olá%2C%20vim%20pelo%20site%20da%20Engenho%20Soft%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const scenes = [
  {
    kicker: "CONTEXTO",
    core: "ENTENDER",
    title: "Antes do código, entendemos o sistema",
    text: "Pessoas, processos, dados e objetivos entram no projeto antes da primeira decisão técnica.",
  },
  {
    kicker: "PRODUTO",
    core: "CONSTRUIR",
    title: "Design e engenharia avançam juntos",
    text: "A experiência é validada enquanto a arquitetura ganha forma, reduzindo risco e retrabalho.",
  },
  {
    kicker: "OPERAÇÃO",
    core: "EVOLUIR",
    title: "O produto começa quando entra em uso",
    text: "Publicação, observabilidade, suporte e evolução fazem parte da mesma entrega.",
  },
];

const outcomes = [
  { title: "Criar um produto digital", text: "Do conceito ao software em produção, com produto, experiência e engenharia na mesma frente." },
  { title: "Organizar uma operação", text: "Sistemas sob medida para substituir controles dispersos e dar clareza ao trabalho diário." },
  { title: "Conectar sistemas e dados", text: "Integrações e APIs para reduzir retrabalho e manter informações consistentes entre plataformas." },
  { title: "Evoluir o que já existe", text: "Modernização, novas jornadas e sustentação técnica sem interromper a operação." },
];

const reelItems = [
  "Produtos digitais",
  "Engenharia de software",
  "Automação",
  "Dados e inteligência",
  "Experiências web",
];

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const lastSceneChangeRef = useRef(0);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateExperience = () => {
      frame = 0;
      const hero = heroRef.current;
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        const heroDistance = Math.max(hero.offsetHeight - window.innerHeight, 1);
        const heroProgress = Math.min(Math.max(-heroRect.top / heroDistance, 0), 1);
        hero.style.setProperty("--hero-progress", heroProgress.toFixed(3));
      }

      const story = storyRef.current;
      if (!story) return;
      const storyRect = story.getBoundingClientRect();
      const storyDistance = Math.max(story.offsetHeight - window.innerHeight, 1);
      const storyProgress = Math.min(Math.max(-storyRect.top / storyDistance, 0), 1);
      story.style.setProperty("--story-progress", storyProgress.toFixed(3));
      const targetScene = Math.min(2, Math.floor(storyProgress * 3));

      setActiveScene((currentScene) => {
        const now = window.performance.now();
        if (
          targetScene === currentScene ||
          now - lastSceneChangeRef.current < 520
        ) {
          return currentScene;
        }

        lastSceneChangeRef.current = now;
        return targetScene > currentScene ? currentScene + 1 : currentScene - 1;
      });

    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateExperience);
    };

    updateExperience();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section className="hero hero-premium hero-reveal" ref={heroRef}>
        <div className="hero-grid" />
        <div className="container hero-content executive-hero-layout">
          <div className="premium-hero-copy">
            <div className="hero-badge">
              ENGENHARIA / PRODUTO / DADOS / AUTOMAÇÃO
            </div>

            <h1>
              Tecnologia para
              <span> novos desafios</span>
            </h1>

            <p className="hero-description">
              Da estratégia à operação: projetamos sistemas, plataformas,
              automações e integrações que resolvem necessidades específicas
              e continuam evoluindo com o negócio.
            </p>

            <div className="hero-actions">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button button-primary">
                Fale sobre sua necessidade <ArrowRight size={19} />
              </a>
              <Link to="/processo" className="button button-ghost">
                Veja como trabalhamos
              </Link>
            </div>
          </div>

          <DigitalScene variant="hero" />

        </div>
      </section>

      <div className="studio-reel" aria-label="Áreas de atuação da Engenho Soft">
        <div className="studio-reel-track">
          {[0, 1].map((copy) => (
            <div className="studio-reel-group" aria-hidden={copy === 1} key={copy}>
              {reelItems.map((item) => (
                <span className="studio-reel-item" key={`${copy}-${item}`}>
                  <span>{item}</span><i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="immersive-story" ref={storyRef}>
        <div className="immersive-sticky">
          <div className="container immersive-layout">
            <div className="immersive-copy">
              <span className="section-label">{scenes[activeScene].kicker}</span>
              <h2>{scenes[activeScene].title}</h2>
              <p>{scenes[activeScene].text}</p>
              <div className="story-progress" aria-hidden="true">
                {scenes.map((scene, index) => (
                  <i className={index <= activeScene ? "active" : ""} key={scene.kicker} />
                ))}
              </div>
            </div>

            <DigitalScene variant="story" phase={activeScene} />
          </div>
        </div>
      </section>

      <section className="section work-intro">
        <div className="container work-intro-grid">
          <div>
            <span className="section-label">O QUE ENTREGAMOS</span>
            <h2>Do planejamento à operação</h2>
          </div>
          <p>
            Reunimos produto, experiência e engenharia para transformar uma
            necessidade concreta em software que funciona na rotina.
          </p>
        </div>

        <div className="container outcome-list">
          {outcomes.map((outcome) => (
            <Link to="/solucoes" key={outcome.title}>
              <MoveUpRight aria-hidden="true" />
              <strong>{outcome.title}</strong>
              <p>{outcome.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="product-film" aria-label="Tecnologia em movimento">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/video/ai-innovation-3d.mp4" type="video/mp4" />
        </video>
        <div className="product-film-caption" aria-hidden="true">
          <span>PRODUTO</span><i />
          <span>AUTOMAÇÃO</span><i />
          <span>DADOS</span>
        </div>
      </section>

      <section className="selected-work">
        <div className="container">
          <div className="selected-work-head">
            <div><span className="section-label">TRABALHOS SELECIONADOS</span><h2>Soluções desenvolvidas para diferentes operações</h2></div>
            <Link to="/cases">Ver todos os cases <ArrowRight size={18} /></Link>
          </div>
          <div className="selected-work-list">
            <Link to="/cases"><span>Operação financeira</span><strong>Uma plataforma para organizar jornadas, informações e rotinas</strong><ArrowRight /></Link>
            <Link to="/cases"><span>Cultura e comunidade</span><strong>Uma experiência digital para aproximar pessoas, atividades e gestão</strong><ArrowRight /></Link>
            <Link to="/cases"><span>Dados e acompanhamento</span><strong>Indicadores estruturados para tornar decisões mais claras</strong><ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="home-cta home-cta-editorial">
        <div className="container home-cta-content">
          <div>
            <span className="section-label">CONVERSE COM QUEM CONSTRÓI</span>
            <h2>Vamos construir a próxima solução</h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button button-primary">
            Fale com a Engenho Soft <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
