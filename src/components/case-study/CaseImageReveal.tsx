import { cn } from "../../lib/cn";
import { CaseMedia, type CaseMediaRatio } from "./CaseMedia";

interface CaseImageRevealProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  ratio?: CaseMediaRatio;
  className?: string;
  bleed?: boolean;
  width?: number;
  height?: number;
  parallax?: "hero" | "standard" | "deep" | "reverse" | "none";
  interactive?: boolean;
}

export function CaseImageReveal({
  src,
  alt,
  caption,
  priority = false,
  ratio = "landscape",
  className,
  bleed = true,
  width,
  height,
  parallax = "standard",
  interactive = false,
}: CaseImageRevealProps) {
  return (
    <div
      className={cn(
        "case-image-reveal",
        bleed && "case-image-reveal--bleed",
        interactive && "case-image-reveal--interactive",
        className,
      )}
      data-animate="image"
      data-parallax={parallax === "none" ? undefined : parallax}
    >
      <CaseMedia
        id={alt}
        src={src}
        alt={alt}
        caption={caption}
        priority={priority}
        ratio={ratio}
        width={width}
        height={height}
      />
    </div>
  );
}
