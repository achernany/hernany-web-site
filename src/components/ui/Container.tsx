import { type ElementType, type PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
}

export function Container({ as: Component = "div", className, children }: ContainerProps) {
  return <Component className={cn("ui-container", className)}>{children}</Component>;
}
