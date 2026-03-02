import { type PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

interface SectionProps extends PropsWithChildren {
  className?: string;
  fullHeight?: boolean;
}

export function Section({ className, fullHeight = false, children }: SectionProps) {
  return <section className={cn("ui-section", fullHeight && "ui-section--full", className)}>{children}</section>;
}
