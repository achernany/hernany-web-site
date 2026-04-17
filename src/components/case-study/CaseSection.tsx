import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Typography } from "../ui/Typography";

type CaseSectionLayout = "text-image" | "text-only" | "text-grid";

interface CaseSectionProps {
  id?: string;
  number: string;
  label: string;
  heading: string;
  subheading?: ReactNode;
  body?: ReactNode;
  layout: CaseSectionLayout;
  align?: "left" | "center";
  className?: string;
  headClassName?: string;
  children?: ReactNode;
}

export function CaseSection({
  id,
  number,
  label,
  heading,
  subheading,
  body,
  layout,
  align = "left",
  className,
  headClassName,
  children,
}: CaseSectionProps) {
  return (
    <section
      id={id}
      className={cn("cs-section", `case-section--${layout}`, className)}
    >
      <div
        className={cn(
          "cs-section-head",
          align === "center" && "cs-section-head--center",
          headClassName,
        )}
      >
        <Typography
          variant="micro"
          tone="muted"
          className="case-section__eyebrow"
          data-animate="text"
          data-animate-delay="0"
        >
          {number} {"—"} {label}
        </Typography>
        <Typography
          variant="h2"
          className="case-section__title"
          data-animate="text"
          data-animate-delay="80"
        >
          {heading}
        </Typography>
        {subheading ? (
          <div
            className="case-section__subheading"
            data-animate="text"
            data-animate-delay="120"
          >
            {subheading}
          </div>
        ) : null}
        {body ? (
          <div
            className="case-section__body"
            data-animate="text"
            data-animate-delay="160"
          >
            {typeof body === "string" ? (
              <Typography variant="bodyLg" tone="secondary">
                {body}
              </Typography>
            ) : (
              body
            )}
          </div>
        ) : null}
      </div>

      {children ? <div className="cs-section-content">{children}</div> : null}
    </section>
  );
}
