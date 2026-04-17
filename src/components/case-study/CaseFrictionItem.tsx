interface CaseFrictionItemProps {
  index: number;
  problem: string;
  solution: string;
}

export function CaseFrictionItem({ index, problem, solution }: CaseFrictionItemProps) {
  return (
    <div
      className="cs-friction-item"
      data-animate="text"
      data-animate-delay={String(index * 65)}
    >
      <span className="cs-friction-number">{String(index + 1).padStart(2, "0")}</span>
      <p className="cs-friction-problem">{problem}</p>
      <span className="cs-friction-arrow" aria-hidden="true">
        →
      </span>
      <p className="cs-friction-solution">{solution}</p>
    </div>
  );
}
