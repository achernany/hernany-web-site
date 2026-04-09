import type { PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

interface CasePullquoteProps extends PropsWithChildren {
  className?: string;
}

export function CasePullquote({ children, className }: CasePullquoteProps) {
  return (
    <blockquote
      className={cn("case-pullquote", className)}
      data-animate="pullquote"
    >
      {children}
    </blockquote>
  );
}
