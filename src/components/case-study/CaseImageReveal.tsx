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
}: CaseImageRevealProps) {
  return (
    <div
      className={cn(
        "case-image-reveal",
        bleed && "case-image-reveal--bleed",
        className,
      )}
      data-animate="image"
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
