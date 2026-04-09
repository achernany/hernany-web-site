import type { CSSProperties } from "react";
import { cn } from "../../lib/cn";
import "./case-study.css";

type HeroParallaxMode = "hero" | "standard" | "deep" | "reverse" | "none";

interface ResponsiveAsset {
  src: string;
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc?: string;
  width?: number;
  height?: number;
}

interface ResponsiveVideoAsset {
  src: string;
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc?: string;
  type: "video/webm" | "video/mp4";
}

interface HeroStageVideo {
  webm?: ResponsiveVideoAsset;
  mp4?: ResponsiveVideoAsset;
  poster?: ResponsiveAsset;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

interface HeroStageLayer {
  id: string;
  alt: string;
  asset: ResponsiveAsset;
  className?: string;
  parallax?: HeroParallaxMode;
  objectFit?: "cover" | "contain";
  opacity?: number;
  style?: CSSProperties;
}

interface HeroStageRatio {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

interface CaseHeroStageProps {
  alt: string;
  poster: ResponsiveAsset;
  video?: HeroStageVideo;
  layers?: HeroStageLayer[];
  className?: string;
  priority?: boolean;
  ratio?: HeroStageRatio;
  baseParallax?: HeroParallaxMode;
}

function ResponsivePicture({
  asset,
  alt,
  className,
  loading,
  decoding,
  fetchPriority,
  objectFit = "cover",
}: {
  asset: ResponsiveAsset;
  alt: string;
  className?: string;
  loading: "eager" | "lazy";
  decoding: "sync" | "async";
  fetchPriority: "high" | "auto";
  objectFit?: "cover" | "contain";
}) {
  return (
    <picture className={cn("case-hero-stage__picture", className)}>
      {asset.desktopSrc ? (
        <source media="(min-width: 1024px)" srcSet={asset.desktopSrc} />
      ) : null}
      {asset.tabletSrc ? (
        <source media="(min-width: 768px)" srcSet={asset.tabletSrc} />
      ) : null}
      {asset.mobileSrc ? (
        <source media="(max-width: 767px)" srcSet={asset.mobileSrc} />
      ) : null}
      <img
        src={asset.src}
        alt={alt}
        className="case-hero-stage__media"
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={asset.width}
        height={asset.height}
        style={{ objectFit }}
      />
    </picture>
  );
}

function ResponsiveVideo({
  video,
  fallbackPoster,
  priority,
}: {
  video: HeroStageVideo;
  fallbackPoster: ResponsiveAsset;
  priority: boolean;
}) {
  const poster = video.poster?.src ?? fallbackPoster.src;

  return (
    <video
      className="case-hero-stage__media"
      poster={poster}
      autoPlay={video.autoPlay ?? false}
      loop={video.loop ?? true}
      muted={video.muted ?? true}
      playsInline={video.playsInline ?? true}
      preload={priority ? "auto" : "metadata"}
      aria-hidden="true"
    >
      {video.webm?.desktopSrc ? (
        <source media="(min-width: 1024px)" src={video.webm.desktopSrc} type={video.webm.type} />
      ) : null}
      {video.webm?.tabletSrc ? (
        <source media="(min-width: 768px)" src={video.webm.tabletSrc} type={video.webm.type} />
      ) : null}
      {video.webm?.mobileSrc ? (
        <source media="(max-width: 767px)" src={video.webm.mobileSrc} type={video.webm.type} />
      ) : null}
      {video.webm ? <source src={video.webm.src} type={video.webm.type} /> : null}

      {video.mp4?.desktopSrc ? (
        <source media="(min-width: 1024px)" src={video.mp4.desktopSrc} type={video.mp4.type} />
      ) : null}
      {video.mp4?.tabletSrc ? (
        <source media="(min-width: 768px)" src={video.mp4.tabletSrc} type={video.mp4.type} />
      ) : null}
      {video.mp4?.mobileSrc ? (
        <source media="(max-width: 767px)" src={video.mp4.mobileSrc} type={video.mp4.type} />
      ) : null}
      {video.mp4 ? <source src={video.mp4.src} type={video.mp4.type} /> : null}
    </video>
  );
}

export function CaseHeroStage({
  alt,
  poster,
  video,
  layers = [],
  className,
  priority = false,
  ratio,
  baseParallax = "hero",
}: CaseHeroStageProps) {
  const stageStyle = {
    ["--case-hero-ratio-mobile" as string]: ratio?.mobile ?? "2 / 1",
    ["--case-hero-ratio-tablet" as string]: ratio?.tablet ?? ratio?.mobile ?? "2 / 1",
    ["--case-hero-ratio-desktop" as string]: ratio?.desktop ?? ratio?.tablet ?? ratio?.mobile ?? "2 / 1",
  } as CSSProperties;

  const loading = priority ? "eager" : "lazy";
  const decoding = priority ? "sync" : "async";
  const fetchPriority = priority ? "high" : "auto";

  return (
    <div
      className={cn(
        "case-hero-stage",
        "case-image-reveal",
        "case-image-reveal--bleed",
        className,
      )}
      data-animate="image"
      style={stageStyle}
    >
      <div className="case-hero-stage__viewport">
        <div
          className="case-hero-stage__base"
          data-parallax={baseParallax === "none" ? undefined : baseParallax}
        >
          {video ? (
            <ResponsiveVideo
              video={video}
              fallbackPoster={poster}
              priority={priority}
            />
          ) : (
            <ResponsivePicture
              asset={poster}
              alt={alt}
              loading={loading}
              decoding={decoding}
              fetchPriority={fetchPriority}
            />
          )}
        </div>

        {layers.map((layer) => (
          <div
            key={layer.id}
            className={cn("case-hero-stage__layer", layer.className)}
            data-parallax={layer.parallax === "none" ? undefined : (layer.parallax ?? "deep")}
            style={{
              opacity: layer.opacity,
              ...layer.style,
            }}
          >
            <ResponsivePicture
              asset={layer.asset}
              alt={layer.alt}
              loading={loading}
              decoding={decoding}
              fetchPriority={fetchPriority}
              objectFit={layer.objectFit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export type {
  CaseHeroStageProps,
  HeroParallaxMode,
  HeroStageLayer,
  HeroStageRatio,
  HeroStageVideo,
  ResponsiveAsset,
  ResponsiveVideoAsset,
};
