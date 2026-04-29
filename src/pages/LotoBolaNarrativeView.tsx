import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { LotoBolaSystemDiagram } from "../components/case-study/LotoBolaSystemDiagram";
import {
  copyByLang,
  type ArchitectureCard,
  type FrictionRow,
  type Lang,
  type ProcessCard,
  type SectionCopy,
} from "./LotoBolaNarrativeContent";
import "./LotoBolaNarrativeView.css";

function easeInOutCubic(progress: number) {
  return progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function animateScrollLeft(element: HTMLElement, targetLeft: number, duration = 760) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.scrollLeft = targetLeft;
    return;
  }

  const startLeft = element.scrollLeft;
  const distance = targetLeft - startLeft;
  const startTime = window.performance.now();

  const tick = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    element.scrollLeft = startLeft + distance * easeInOutCubic(progress);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
}

function KickerText({ kicker }: { kicker: string }) {
  const parts = kicker.split(" — ");

  if (parts.length < 2) return <>{kicker}</>;

  return (
    <>
      {parts[0]}
      <span className="lotobola-narrative__eyebrow-separator">-</span>
      {parts.slice(1).join(" - ")}
    </>
  );
}

function SectionIntro({ kicker, title, body, subtitle }: SectionCopy) {
  return (
    <div className="lotobola-narrative__intro">
      <p className="lotobola-narrative__eyebrow">
        <KickerText kicker={kicker} />
      </p>
      <h2 className="lotobola-narrative__title">{title}</h2>
      {subtitle ? <h3 className="lotobola-narrative__subtitle">{subtitle}</h3> : null}
      <p className="lotobola-narrative__body">{body}</p>
    </div>
  );
}

function QuoteBlock({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="lotobola-narrative__quote-shell">
      <blockquote className={`lotobola-narrative__quote${accent ? " lotobola-narrative__quote--accent" : ""}`}>
        {children}
      </blockquote>
    </div>
  );
}

function Placeholder({
  variant,
  bleed = false,
}: {
  variant: "hero" | "card" | "landscape" | "final";
  bleed?: boolean;
}) {
  return (
    <div
      className={`lotobola-narrative__placeholder lotobola-narrative__placeholder--${variant}${
        bleed ? " lotobola-narrative__placeholder--bleed" : ""
      }`}
      aria-hidden="true"
    />
  );
}

function PlaceholderCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCards = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      const falloff = Math.min(distance / (viewportRect.width * 0.48), 1);

      card.style.setProperty("--placeholder-opacity", (1 - falloff * 0.58).toFixed(3));
      card.style.setProperty("--placeholder-scale", (1 - falloff * 0.08).toFixed(3));

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const closestCard = cardRefs.current[closestIndex];
    if (closestCard) {
      closestCard.style.setProperty("--placeholder-opacity", "1");
      closestCard.style.setProperty("--placeholder-scale", "1");
    }

    setSelectedIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateCards();
    });
  }, [updateCards]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    updateCards();
    viewport.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      viewport.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleUpdate, updateCards]);

  const scrollToIndex = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const target = cardRefs.current[index];
    if (!viewport || !target) return;

    const viewportRect = viewport.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const scrollDelta =
      targetRect.left + targetRect.width / 2 - (viewportRect.left + viewportRect.width / 2);

    animateScrollLeft(viewport, viewport.scrollLeft + scrollDelta, 720);
    setSelectedIndex(index);
  }, []);

  return (
    <div className="lotobola-narrative__mobile-carousel-shell">
      <div ref={viewportRef} className="lotobola-narrative__placeholder-row">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="lotobola-narrative__placeholder-slide"
            ref={(node) => {
              cardRefs.current[item] = node;
            }}
          >
            <Placeholder variant="card" />
          </div>
        ))}
      </div>
      <div className="lotobola-narrative__mobile-dots">
        {[0, 1, 2].map((item) => (
          <button
            key={item}
            type="button"
            className={`lotobola-narrative__mobile-dot${
              selectedIndex === item ? " lotobola-narrative__mobile-dot--active" : ""
            }`}
            onClick={() => scrollToIndex(item)}
            aria-label={`Show card ${item + 1}`}
            aria-current={selectedIndex === item ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function MediumIcon() {
  return (
    <svg
      className="lotobola-narrative__medium-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="6" cy="12" r="4.5" />
      <ellipse cx="13" cy="12" rx="3.25" ry="6.25" />
      <ellipse cx="18.75" cy="12" rx="1.75" ry="5.5" />
    </svg>
  );
}

function ArchitecturePanel({ card }: { card: ArchitectureCard }) {
  return (
    <article className="lotobola-narrative__system-card">
      <div className="lotobola-narrative__system-card-header">
        <div className="lotobola-narrative__system-chip">{card.index}</div>
        <p className="lotobola-narrative__system-label">{card.label}</p>
      </div>

      <h4 className="lotobola-narrative__system-title">{card.title}</h4>
      <p className="lotobola-narrative__system-body">{card.body}</p>

      <div className="lotobola-narrative__system-groups">
        {card.groups.map((group) => (
          <section key={`${card.index}-${group.title}`} className="lotobola-narrative__system-group">
            <h5 className="lotobola-narrative__system-group-title">{group.title}</h5>
            <ul className="lotobola-narrative__system-list">
              {group.items.map((item) => (
                <li key={item} className="lotobola-narrative__system-item">
                  <span className="lotobola-narrative__system-dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg className="lotobola-narrative__carousel-button-icon" viewBox="0 0 532 532" aria-hidden="true">
      <path
        fill="currentColor"
        d={
          direction === "prev"
            ? "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0L126.328 291.2a35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2L355.66 11.354Z"
            : "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0l229.332 229.454A35.065 35.065 0 0 1 416 265.927c0 9.2-3.393 18.26-10.326 25.2L176.34 520.646Z"
        }
      />
    </svg>
  );
}

function ArchitectureCarousel({ cards, lang }: { cards: ArchitectureCard[]; lang: Lang }) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const dragRef = useRef({
    isDragging: false,
    pointerId: -1,
    startX: 0,
    scrollLeft: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateSlides = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const firstSlide = slideRefs.current[0];
    if (firstSlide) {
      const edgeSpace = Math.max((viewport.clientWidth - firstSlide.offsetWidth) / 2, 0);
      viewport.style.setProperty("--carousel-edge-space", `${edgeSpace}px`);
    }

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - viewportCenter);
      const falloff = Math.min(distance / (viewportRect.width * 0.48), 1);
      const scale = 1 - falloff * 0.22;
      const opacity = 1 - falloff * 0.38;
      const blur = falloff * 1.4;

      slide.style.setProperty("--slide-scale", scale.toFixed(3));
      slide.style.setProperty("--slide-opacity", opacity.toFixed(3));
      slide.style.setProperty("--slide-blur", `${blur.toFixed(2)}px`);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const closestSlide = slideRefs.current[closestIndex];
    if (closestSlide) {
      closestSlide.style.setProperty("--slide-scale", "1");
      closestSlide.style.setProperty("--slide-opacity", "1");
      closestSlide.style.setProperty("--slide-blur", "0px");
    }

    setSelectedIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateSlides();
    });
  }, [updateSlides]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      const total = cards.length;
      if (!viewport || total === 0) return;

      const targetIndex = (index + total) % total;
      const target = slideRefs.current[targetIndex];
      if (!target) return;

      const viewportRect = viewport.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const scrollDelta =
        targetRect.left + targetRect.width / 2 - (viewportRect.left + viewportRect.width / 2);

      animateScrollLeft(viewport, viewport.scrollLeft + scrollDelta, 820);
      setSelectedIndex(targetIndex);
    },
    [cards.length],
  );

  const stopDragging = useCallback((event?: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!dragRef.current.isDragging) return;

    if (event && viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    dragRef.current.isDragging = false;
    dragRef.current.pointerId = -1;
    setIsDragging(false);
    scheduleUpdate();
  }, [scheduleUpdate]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    updateSlides();
    viewport.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      viewport.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleUpdate, updateSlides]);

  const labels =
    lang === "es"
      ? {
          title: "Carrusel de arquitectura del sistema",
          prev: "Ver tarjeta anterior",
          next: "Ver siguiente tarjeta",
          dot: "Ver tarjeta",
        }
      : {
          title: "System architecture carousel",
          prev: "Show previous card",
          next: "Show next card",
          dot: "Show card",
        };

  return (
    <div className="lotobola-narrative__system-carousel" aria-label={labels.title}>
      <div
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label={labels.title}
        className={`lotobola-narrative__system-carousel-viewport${
          isDragging ? " lotobola-narrative__system-carousel-viewport--dragging" : ""
        }`}
        onPointerDown={(event) => {
          if (event.button !== 0 || !event.isPrimary) return;

          const viewport = viewportRef.current;
          if (!viewport) return;

          dragRef.current = {
            isDragging: true,
            pointerId: event.pointerId,
            startX: event.clientX,
            scrollLeft: viewport.scrollLeft,
          };
          viewport.setPointerCapture(event.pointerId);
          setIsDragging(true);
        }}
        onPointerMove={(event) => {
          const viewport = viewportRef.current;
          const drag = dragRef.current;
          if (!viewport || !drag.isDragging || drag.pointerId !== event.pointerId) return;

          event.preventDefault();
          viewport.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
          scheduleUpdate();
        }}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={(event) => {
          if (dragRef.current.isDragging) stopDragging(event);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") scrollToIndex(selectedIndex - 1);
          if (event.key === "ArrowRight") scrollToIndex(selectedIndex + 1);
        }}
      >
        <div className="lotobola-narrative__system-carousel-track">
          {cards.map((card, index) => (
            <div
              key={card.index}
              className={`lotobola-narrative__system-carousel-slide${
                selectedIndex === index ? " lotobola-narrative__system-carousel-slide--selected" : ""
              }`}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
            >
              <ArchitecturePanel card={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="lotobola-narrative__carousel-controls">
        <div className="lotobola-narrative__carousel-buttons">
          <button
            type="button"
            className="lotobola-narrative__carousel-button"
            onClick={() => scrollToIndex(selectedIndex - 1)}
            aria-label={labels.prev}
          >
            <ArrowIcon direction="prev" />
          </button>
          <button
            type="button"
            className="lotobola-narrative__carousel-button"
            onClick={() => scrollToIndex(selectedIndex + 1)}
            aria-label={labels.next}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <div className="lotobola-narrative__carousel-dots">
          {cards.map((card, index) => (
            <button
              key={card.index}
              type="button"
              className={`lotobola-narrative__carousel-dot${
                selectedIndex === index ? " lotobola-narrative__carousel-dot--selected" : ""
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`${labels.dot} ${card.index}`}
              aria-current={selectedIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessCarousel({ cards, lang }: { cards: ProcessCard[]; lang: Lang }) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<ProcessCard | null>(null);

  const updateCards = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      card.style.setProperty("--process-card-opacity", "1");

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const closestCard = cardRefs.current[closestIndex];
    if (closestCard) {
      closestCard.style.setProperty("--process-card-opacity", "1");
    }

    setSelectedIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateCards();
    });
  }, [updateCards]);

  const scrollToIndex = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const target = cardRefs.current[index];
    if (!viewport || !target) return;

    const viewportRect = viewport.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const scrollDelta =
      targetRect.left + targetRect.width / 2 - (viewportRect.left + viewportRect.width / 2);

    animateScrollLeft(viewport, viewport.scrollLeft + scrollDelta, 780);
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    updateCards();
    viewport.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      viewport.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleUpdate, updateCards]);

  const labels =
    lang === "es"
      ? {
          title: "Carrusel de iteración y evolución",
          dot: "Ver etapa",
          open: "Abrir detalle de etapa",
          close: "Cerrar detalle",
        }
      : {
          title: "Iteration and evolution carousel",
          dot: "Show stage",
          open: "Open stage detail",
          close: "Close detail",
        };

  useEffect(() => {
    if (!activeCard) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && window.matchMedia("(max-width: 1023px)").matches) setActiveCard(null);
    };
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverscroll = document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscroll;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

  return (
    <div className="lotobola-narrative__process-carousel" aria-label={labels.title}>
      <div ref={viewportRef} className="lotobola-narrative__process-carousel-viewport" role="region">
        <div className="lotobola-narrative__process-carousel-track">
          {cards.map((card, index) => (
            <article
              key={card.index}
              className="lotobola-narrative__process-card"
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
            >
              <button
                type="button"
                className="lotobola-narrative__process-card-button"
                onClick={() => setActiveCard(card)}
                aria-label={`${labels.open}: ${card.title}`}
              >
                <div className="lotobola-narrative__process-card-media" aria-hidden="true" />
                <div className="lotobola-narrative__process-card-copy">
                  <p className="lotobola-narrative__process-card-label">{card.label}</p>
                  <h3 className="lotobola-narrative__process-card-title">{card.title}</h3>
                  <p className="lotobola-narrative__process-card-body">{card.body}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="lotobola-narrative__process-dots">
        {cards.map((card, index) => (
          <button
            key={card.index}
            type="button"
            className={`lotobola-narrative__process-dot${
              selectedIndex === index ? " lotobola-narrative__process-dot--selected" : ""
            }`}
            onClick={() => scrollToIndex(index)}
            aria-label={`${labels.dot} ${card.index}`}
            aria-current={selectedIndex === index ? "true" : undefined}
          />
        ))}
      </div>

      {activeCard ? (
        <div className="lotobola-narrative__process-modal" role="dialog" aria-modal="true" aria-labelledby="process-detail-title">
          <button
            type="button"
            className="lotobola-narrative__process-modal-backdrop"
            aria-label={labels.close}
            onClick={() => {
              if (window.matchMedia("(max-width: 1023px)").matches) setActiveCard(null);
            }}
          />
          <div className="lotobola-narrative__process-modal-panel">
            <button
              type="button"
              className="lotobola-narrative__process-modal-close"
              onClick={() => setActiveCard(null)}
              aria-label={labels.close}
            >
              ×
            </button>
            <div className="lotobola-narrative__process-modal-media" aria-hidden="true" />
            <div className="lotobola-narrative__process-modal-copy">
              <p className="lotobola-narrative__process-card-label">{activeCard.label}</p>
              <h3 id="process-detail-title" className="lotobola-narrative__process-modal-title">
                {activeCard.title}
              </h3>
              <p className="lotobola-narrative__process-modal-body">{activeCard.body}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FrictionItem({ item }: { item: FrictionRow }) {
  return (
    <article className="lotobola-narrative__friction-row">
      <span className="lotobola-narrative__friction-index">{item.index}</span>
      <p className="lotobola-narrative__friction-problem">{item.problem}</p>
      <span className="lotobola-narrative__friction-arrow" aria-hidden="true">
        ↓
      </span>
      <p className="lotobola-narrative__friction-solution">{item.solution}</p>
    </article>
  );
}

function ArchitectureQuote({ lang }: { lang: Lang }) {
  if (lang === "es") {
    return (
      <>
        Esta arquitectura sirvió como{" "}
        <span className="lotobola-narrative__quote-accent">
          base para definir prioridades, flujos críticos y decisiones de interfaz
        </span>{" "}
        a lo largo del producto.
      </>
    );
  }

  return (
    <>
      This architecture became the{" "}
      <span className="lotobola-narrative__quote-accent">
        basis for defining priorities, critical flows, and interface decisions
      </span>{" "}
      throughout the product.
    </>
  );
}

function ReflectionQuote({ lang }: { lang: Lang }) {
  if (lang === "es") {
    return (
      <>
        La expresión más clara de cómo mi práctica se ha ido constituyendo en{" "}
        <span className="lotobola-narrative__quote-accent">
          formas cada vez más complejas de abordar el diseño:
        </span>{" "}
        desde el producto y el servicio hasta los sistemas en los que ambos se insertan y operan.
      </>
    );
  }

  return (
    <>
      The clearest expression of how my practice has evolved toward{" "}
      <span className="lotobola-narrative__quote-accent">
        increasingly complex ways of approaching design:
      </span>{" "}
      from product and service into the systems where both are inserted and operate.
    </>
  );
}

export function LotoBolaNarrativeView({ lang }: { lang: Lang }) {
  const c = copyByLang[lang];

  return (
    <div className="lotobola-narrative-view">
      <section className="lotobola-narrative__section lotobola-narrative__section--hero" id="hero">
        <div className="lotobola-narrative__hero">
          <h1 className="lotobola-narrative__hero-title">{c.hero.title}</h1>
          <p className="lotobola-narrative__hero-subtitle">
            <span className="lotobola-narrative__accent">{c.hero.subtitleAccent}</span>
            {c.hero.subtitleRest}
          </p>
          <p className="lotobola-narrative__hero-summary">{c.hero.summary}</p>

          <button type="button" className="lotobola-narrative__hero-cta" disabled aria-disabled="true">
            <MediumIcon />
            <span>{c.hero.cta}</span>
          </button>
        </div>

        <div className="lotobola-narrative__metrics">
          {c.hero.metrics.map((metric) => (
            <article key={metric.label} className="lotobola-narrative__metric">
              <p className="lotobola-narrative__metric-label">{metric.label}</p>
              <p className="lotobola-narrative__metric-value">{metric.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lotobola-narrative__section" id="overview">
        <SectionIntro {...c.overview} />
        <div className="lotobola-narrative__overview-diagram">
          <LotoBolaSystemDiagram lang={lang} />
        </div>
      </section>

      <section className="lotobola-narrative__section" id="challenge">
        <SectionIntro {...c.challenge} />

        <PlaceholderCarousel />

        <QuoteBlock accent>{c.challenge.quote}</QuoteBlock>
      </section>

      <section className="lotobola-narrative__section" id="architecture">
        <SectionIntro {...c.architecture} />

        <div className="lotobola-narrative__architecture-copy">
          <h3 className="lotobola-narrative__subtitle">{c.architecture.serviceTitle}</h3>
          <p className="lotobola-narrative__body">{c.architecture.serviceBody}</p>
          <p className="lotobola-narrative__note">{c.architecture.serviceNote}</p>
        </div>

        <ArchitectureCarousel cards={c.architecture.cards} lang={lang} />

        <div className="lotobola-narrative__architecture-copy">
          <h3 className="lotobola-narrative__subtitle">{c.architecture.frictionTitle}</h3>
          <p className="lotobola-narrative__body">{c.architecture.frictionBody}</p>
        </div>

        <div className="lotobola-narrative__frictions">
          {c.architecture.frictions.map((item) => (
            <FrictionItem key={item.index} item={item} />
          ))}
        </div>

        <QuoteBlock>
          <ArchitectureQuote lang={lang} />
        </QuoteBlock>
      </section>

      <section className="lotobola-narrative__section" id="public-experience">
        <SectionIntro {...c.publicExperience} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-narrative__section" id="retail-channels">
        <SectionIntro {...c.retailChannels} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-narrative__section" id="multiple-actors">
        <SectionIntro {...c.multipleActors} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-narrative__section" id="operations">
        <SectionIntro {...c.operations} />

        <PlaceholderCarousel />

        <div className="lotobola-narrative__communication">
          <h3 className="lotobola-narrative__subtitle">{c.operations.communicationTitle}</h3>
          <p className="lotobola-narrative__body">{c.operations.communicationBody}</p>
        </div>

        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-narrative__section" id="system">
        <SectionIntro {...c.system} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-narrative__section" id="process">
        <SectionIntro {...c.process} />
        <ProcessCarousel cards={c.process.cards} lang={lang} />
      </section>

      <section className="lotobola-narrative__section lotobola-narrative__section--final" id="reflection">
        <SectionIntro {...c.reflection} />
        <QuoteBlock>
          <ReflectionQuote lang={lang} />
        </QuoteBlock>
        <Placeholder variant="final" bleed />
      </section>
    </div>
  );
}
