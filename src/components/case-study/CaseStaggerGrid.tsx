import { Children, type CSSProperties, type PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

interface CaseStaggerGridProps extends PropsWithChildren {
  columns: 1 | 2 | 3;
  className?: string;
  itemClassName?: string;
  baseDelay?: number;
  stepDelay?: number;
  animateAs?: "text" | "image";
  delegateToChild?: boolean;
}

export function CaseStaggerGrid({
  columns,
  className,
  itemClassName,
  children,
  baseDelay = 0,
  stepDelay = 65,
  animateAs = "text",
  delegateToChild = false,
}: CaseStaggerGridProps) {
  const items = Children.toArray(children);

  return (
    <div className={cn("case-stagger-grid", `case-stagger-grid--${columns}`, className)}>
      {items.map((child, index) => (
        <div
          key={index}
          className={cn(
            "case-stagger-grid__item",
            delegateToChild && "case-stagger-grid__item--delegated",
            itemClassName,
          )}
          data-animate={delegateToChild ? undefined : animateAs}
          data-animate-delay={delegateToChild ? undefined : String(baseDelay + index * stepDelay)}
          style={
            delegateToChild
              ? ({ ["--animate-delay" as string]: `${baseDelay + index * stepDelay}ms` } as CSSProperties)
              : undefined
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}
