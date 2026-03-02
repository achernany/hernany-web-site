interface StatPillProps {
  label: string;
  value: string;
}

export function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="ui-stat-pill">
      <span className="ui-stat-pill__label">{label}</span>
      <span className="ui-stat-pill__value">{value}</span>
    </div>
  );
}
