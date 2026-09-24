type BrandMarkProps = {
  variant?: "horizontal" | "vertical";
};

function BrandMark({ variant = "horizontal" }: BrandMarkProps) {
  return (
    <span className={`brand-mark engenho-brand-mark brand-mark-${variant}`} aria-label="Engenho Soft">
      <img src="/brand/engenho-soft-logo.png" alt="Engenho Soft" />
      {variant === "vertical" && <em className="brand-mark-caption">Engenharia de software, automação e IA</em>}
    </span>
  );
}

export default BrandMark;
