import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

interface IconButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  className?: string;
  back?: boolean;
}

export function IconButton({ className, back = false, children, ...props }: IconButtonProps) {
  return (
    <button className={cn("ui-icon-button", back && "ui-icon-button--back", className)} {...props}>
      {children}
    </button>
  );
}
