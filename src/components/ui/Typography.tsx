import { type ElementType, type PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type TypographyVariant = "h1" | "h2" | "h3" | "bodyLg" | "bodyMd" | "micro";

interface TypographyProps extends PropsWithChildren {
  as?: ElementType;
  variant: TypographyVariant;
  className?: string;
  center?: boolean;
  tone?: "default" | "secondary" | "muted";
}

const variantClass: Record<TypographyVariant, string> = {
  h1: "ui-typo--h1",
  h2: "ui-typo--h2",
  h3: "ui-typo--h3",
  bodyLg: "ui-typo--body-lg",
  bodyMd: "ui-typo--body-md",
  micro: "ui-typo--micro",
};

const defaultTag: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLg: "p",
  bodyMd: "p",
  micro: "p",
};

export function Typography({
  as,
  variant,
  className,
  center = false,
  tone = "default",
  children,
}: TypographyProps) {
  const Component = as ?? defaultTag[variant];

  return (
    <Component
      className={cn(
        "ui-typo",
        variantClass[variant],
        center && "ui-typo--center",
        tone === "secondary" && "ui-typo--secondary",
        tone === "muted" && "ui-typo--muted",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function Accent({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <span className={cn("ui-typo-accent", className)}>{children}</span>;
}
