import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
  className?: string;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn("ui-button", `ui-button--${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
