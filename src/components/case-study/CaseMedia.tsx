import { cn } from "../../lib/cn";
import "./case-study.css";

export type CaseMediaRatio = "hero" | "wide" | "landscape" | "portrait" | "card" | "square";

interface CaseMediaProps {
  id: string;
  ratio?: CaseMediaRatio;
  caption?: string;
  hint?: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function CaseMedia({
  id,
  ratio = "landscape",
  caption,
  hint,
  className,
  src,
  alt,
  priority = false,
  width,
  height,
}: CaseMediaProps) {
  return (
    <figure className={cn("cs-media", className)}>
      <div className={cn("cs-media__frame", `cs-media__frame--${ratio}`)}>
        {src ? (
          <img
            src={src}
            alt={alt ?? id}
            className="cs-media__image"
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={priority ? "high" : "auto"}
            width={width}
            height={height}
          />
        ) : (
          <div
            className="cs-media__placeholder"
            aria-label={`Visual placeholder: ${id}`}
            role="img"
          >
            <span className="cs-media__placeholder-id">{id}</span>
            {hint && <span className="cs-media__placeholder-hint">{hint}</span>}
          </div>
        )}
      </div>
      {caption && <figcaption className="cs-caption">{caption}</figcaption>}
    </figure>
  );
}
