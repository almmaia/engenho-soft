import type { PointerEvent as ReactPointerEvent } from "react";
import DigitalField from "./DigitalField";

type DigitalSceneProps = {
  variant: "hero" | "story";
  phase?: number;
};

const storyMedia = [
  { type: "image", src: "/visuals/story-context-pexels.jpg" },
  { type: "image", src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1800&q=85" },
  { type: "image", src: "/visuals/story-operation-pexels.jpg" },
];

function DigitalScene({ variant, phase = 0 }: DigitalSceneProps) {
  const moveScene = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--scene-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--scene-y", y.toFixed(3));
  };

  const resetScene = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--scene-x", "0");
    event.currentTarget.style.setProperty("--scene-y", "0");
  };

  if (variant === "hero") {
    return (
      <div className="digital-scene digital-scene-hero spatial-scene" aria-hidden="true" onPointerMove={moveScene} onPointerLeave={resetScene}>
        <DigitalField />
        <div className="real-visual real-visual-hero">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/video/ai-innovation-3d.mp4" type="video/mp4" />
          </video>
          <div className="real-visual-depth depth-back" />
          <div className="real-visual-depth depth-front" />
        </div>
        <div className="digital-scene-frame"><i /><i /><i /><i /></div>
      </div>
    );
  }

  return (
    <div className={`digital-scene digital-scene-story spatial-scene scene-phase-${phase}`} aria-hidden="true" onPointerMove={moveScene} onPointerLeave={resetScene}>
      <DigitalField />
      <div className="real-visual real-visual-story">
        {storyMedia.map((media, index) =>
          media.type === "video" ? (
            <video
              className={index === phase ? "active" : ""}
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              key={media.src}
            />
          ) : (
            <img className={index === phase ? "active" : ""} src={media.src} alt="" decoding="async" loading="eager" key={media.src} />
          ),
        )}
        <div className="real-visual-depth depth-back" />
        <div className="real-visual-depth depth-front" />
      </div>
      <div className="digital-scene-frame"><i /><i /><i /><i /></div>
    </div>
  );
}

export default DigitalScene;
