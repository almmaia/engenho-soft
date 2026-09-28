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
  if (variant === "hero") {
    return (
      <div className="digital-scene digital-scene-hero" aria-hidden="true">
        <div className="real-visual real-visual-hero">
          <img src="https://images.unsplash.com/photo-1643959144243-8ac12487c287?auto=format&fit=crop&w=1800&q=85" alt="" decoding="async" fetchPriority="high" />
          <div className="real-visual-depth depth-back" />
          <div className="real-visual-depth depth-front" />
        </div>
        <div className="digital-scene-frame"><i /><i /><i /><i /></div>
      </div>
    );
  }

  return (
    <div className={`digital-scene digital-scene-story scene-phase-${phase}`} aria-hidden="true">
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
