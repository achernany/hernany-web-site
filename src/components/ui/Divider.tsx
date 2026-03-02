import { cn } from "../../lib/cn";

interface DividerProps {
  short?: boolean;
  className?: string;
}

export function Divider({ short = false, className }: DividerProps) {
  return <hr className={cn("ui-divider", short && "ui-divider--short", className)} />;
}
