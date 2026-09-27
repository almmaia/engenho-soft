type BrandMarkProps = {
  variant?: "horizontal" | "vertical";
};

function BrandMark({ variant = "horizontal" }: BrandMarkProps) {
  return (
    <span className={`brand-mark engenho-brand-mark brand-mark-${variant}`} aria-label="Engenho Soft">
      <span className="engenho-monogram" aria-hidden="true">
        <i>E</i><i>S</i>
      </span>
      <span className="engenho-wordmark" aria-hidden="true">
        <strong>ENGENHO</strong><b>SOFT</b>
      </span>
      {variant === "vertical" && <em className="brand-mark-caption">Engenharia de software, automação e IA</em>}
    </span>
  );
}

export default BrandMark;
