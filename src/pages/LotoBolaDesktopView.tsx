import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { LotoBolaSystemDiagram } from "../components/case-study/LotoBolaSystemDiagram";
import "./LotoBolaDesktopView.css";

type Lang = "es" | "en";

interface MetricItem {
  label: string;
  value: string;
}

interface SectionCopy {
  kicker: string;
  title: string;
  body: string;
  subtitle?: string;
}

interface ArchitectureGroup {
  title: string;
  items: string[];
}

interface ArchitectureCard {
  index: string;
  label: string;
  title: string;
  body: string;
  groups: ArchitectureGroup[];
}

interface FrictionRow {
  index: string;
  problem: string;
  solution: string;
}

interface DesktopCopy {
  hero: {
    title: string;
    subtitleAccent: string;
    subtitleRest: string;
    summary: string;
    cta: string;
    metrics: MetricItem[];
  };
  overview: SectionCopy;
  challenge: SectionCopy & {
    quote: string;
  };
  architecture: SectionCopy & {
    serviceTitle: string;
    serviceBody: string;
    serviceNote: string;
    frictionTitle: string;
    frictionBody: string;
    quote: string;
    cards: ArchitectureCard[];
    frictions: FrictionRow[];
  };
  publicExperience: SectionCopy;
  retailChannels: SectionCopy;
  multipleActors: SectionCopy;
  operations: SectionCopy & {
    communicationTitle: string;
    communicationBody: string;
  };
  system: SectionCopy;
  process: SectionCopy;
  reflection: SectionCopy & {
    quote: string;
  };
}

function SectionIntro({ kicker, title, body, subtitle }: SectionCopy) {
  return (
    <div className="lotobola-desktop__intro">
      <p className="lotobola-desktop__eyebrow">{kicker}</p>
      <h2 className="lotobola-desktop__title">{title}</h2>
      {subtitle ? <h3 className="lotobola-desktop__subtitle">{subtitle}</h3> : null}
      <p className="lotobola-desktop__body">{body}</p>
    </div>
  );
}

function QuoteBlock({
  children,
  accent = false,
}: {
  children: string;
  accent?: boolean;
}) {
  return (
    <div className="lotobola-desktop__quote-shell">
      <blockquote className={`lotobola-desktop__quote${accent ? " lotobola-desktop__quote--accent" : ""}`}>
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
      className={`lotobola-desktop__placeholder lotobola-desktop__placeholder--${variant}${
        bleed ? " lotobola-desktop__placeholder--bleed" : ""
      }`}
      aria-hidden="true"
    />
  );
}

function MediumIcon() {
  return (
    <svg
      className="lotobola-desktop__medium-icon"
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
    <article className="lotobola-desktop__system-card">
      <div className="lotobola-desktop__system-card-header">
        <div className="lotobola-desktop__system-chip">{card.index}</div>
        <p className="lotobola-desktop__system-label">{card.label}</p>
      </div>

      <h4 className="lotobola-desktop__system-title">{card.title}</h4>
      <p className="lotobola-desktop__system-body">{card.body}</p>

      <div className="lotobola-desktop__system-groups">
        {card.groups.map((group) => (
          <section key={`${card.index}-${group.title}`} className="lotobola-desktop__system-group">
            <h5 className="lotobola-desktop__system-group-title">{group.title}</h5>
            <ul className="lotobola-desktop__system-list">
              {group.items.map((item) => (
                <li key={item} className="lotobola-desktop__system-item">
                  <span className="lotobola-desktop__system-dot" aria-hidden="true" />
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
    <svg className="lotobola-desktop__carousel-button-icon" viewBox="0 0 532 532" aria-hidden="true">
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

      viewport.scrollTo({
        left: target.offsetLeft - (viewport.clientWidth - target.clientWidth) / 2,
        behavior: "smooth",
      });
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
    <div className="lotobola-desktop__system-carousel" aria-label={labels.title}>
      <div
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label={labels.title}
        className={`lotobola-desktop__system-carousel-viewport${
          isDragging ? " lotobola-desktop__system-carousel-viewport--dragging" : ""
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
        <div className="lotobola-desktop__system-carousel-track">
          {cards.map((card, index) => (
            <div
              key={card.index}
              className={`lotobola-desktop__system-carousel-slide${
                selectedIndex === index ? " lotobola-desktop__system-carousel-slide--selected" : ""
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

      <div className="lotobola-desktop__carousel-controls">
        <div className="lotobola-desktop__carousel-buttons">
          <button
            type="button"
            className="lotobola-desktop__carousel-button"
            onClick={() => scrollToIndex(selectedIndex - 1)}
            aria-label={labels.prev}
          >
            <ArrowIcon direction="prev" />
          </button>
          <button
            type="button"
            className="lotobola-desktop__carousel-button"
            onClick={() => scrollToIndex(selectedIndex + 1)}
            aria-label={labels.next}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>

        <div className="lotobola-desktop__carousel-dots">
          {cards.map((card, index) => (
            <button
              key={card.index}
              type="button"
              className={`lotobola-desktop__carousel-dot${
                selectedIndex === index ? " lotobola-desktop__carousel-dot--selected" : ""
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

function FrictionItem({ item }: { item: FrictionRow }) {
  return (
    <article className="lotobola-desktop__friction-row">
      <span className="lotobola-desktop__friction-index">{item.index}</span>
      <p className="lotobola-desktop__friction-problem">{item.problem}</p>
      <span className="lotobola-desktop__friction-arrow" aria-hidden="true">
        →
      </span>
      <p className="lotobola-desktop__friction-solution">{item.solution}</p>
    </article>
  );
}

const spanishCopy: DesktopCopy = {
  hero: {
    title: "Lotobola",
    subtitleAccent: "Diseñando un ecosistema de lotería",
    subtitleRest:
      " a través de experiencia pública, canales retail asistidos, operaciones y sistema en entorno regulado",
    summary:
      "Lotobola es un ecosistema de producto que conecta experiencia digital, operación comercial y lógica transaccional en un contexto de alta sensibilidad operativa. Mi trabajo consistió en estructurar flujos críticos, dar claridad a reglas complejas y construir una base escalable para la evolución del producto.",
    cta: "Otra mirada",
    metrics: [
      { label: "ROL", value: "Service Design / Product Designer / UX UI / System Thinking." },
      {
        label: "alcance",
        value: "Experiencia pública, flujos retail, capa operativa / admin, design system, comunicación.",
      },
      { label: "Foco", value: "Diseño de ecosistema multi-superficie digital, asistido y operativo." },
      {
        label: "Entregables",
        value: "Sitio web, flujos retail, herramientas admin, fundamentos de design system.",
      },
    ],
  },
  overview: {
    kicker: "01 — Panorama",
    title: "El caso en un minuto",
    body:
      "Lotobola fue el diseño de un ecosistema de lotería multicanal, transaccional y regulado, donde convivían experiencia pública de compra, venta asistida en retail, operación interna, comunicación en displays e integraciones con proveedores externos. El reto no era resolver una interfaz aislada, sino estructurar un sistema fragmentado por canales, actores, reglas de negocio, ritmos de uso y estados sensibles, para que pudiera operar con claridad, continuidad y confianza en cada punto de contacto. Mi trabajo consistió en traducir esa complejidad en una arquitectura de experiencia coherente: ordenar flujos, adaptar interfaces según contexto de uso, alinear interacción y operación, y construir una base visual y estructural capaz de sostener escalabilidad, control y consistencia a lo largo del producto.",
  },
  challenge: {
    kicker: "02 — Desafío",
    title: "El desafío real",
    body:
      "Diseñar Lotobola no consistía en optimizar un único journey digital, sino en dar forma a un sistema de lotería distribuido entre canales, superficies y actores muy distintos entre sí. La experiencia del jugador dependía tanto de la claridad de la capa visible como de la consistencia entre venta asistida, validaciones, operación interna, comunicación promocional e integraciones con terceros. El desafío era lograr que un ecosistema fragmentado, entre web, POS, backoffice, displays y canales retail con ritmos de uso diferentes, pudiera funcionar como una experiencia conectada, comprensible y operable, sin perder coherencia entre capas públicas, comerciales y operativas. La hipótesis de trabajo fue que, si conseguíamos alinear arquitectura de experiencia, lógica operativa y fundamentos de interfaz en un sistema común, el producto no solo sería más claro para el usuario final, sino también más fácil de vender, operar, gobernar y escalar con consistencia a lo largo del tiempo.",
    quote:
      "Un producto de lotería no es solo un problema de pantallas. Es un problema de servicio, de operaciones, de comunicación y de sistemas integrados multiplataforma y con roles y usuarios múltiples.",
  },
  architecture: {
    kicker: "03 — arquitectura",
    title: "Arquitectura del sistema",
    body:
      "La experiencia visible era solo una parte del producto. Detrás de cada momento público convivían venta asistida, reglas de negocio, validaciones, operación interna, comunicación en pantallas e integraciones críticas con terceros. Mi trabajo consistió en estructurar ese ecosistema como un sistema legible y coherente, capaz de conectar interfaces, canales y procesos sin romper continuidad entre capas visibles y lógicas operativas. Más que organizar pantallas, se trató de definir relaciones entre actores, superficies, dependencias y estados críticos para sostener claridad, control y consistencia a escala.",
    serviceTitle: "Lógica del servicio",
    serviceBody:
      "El servicio se organizó en seis fases principales. Mapearlas permitió entender cómo se conectaban expectativas del usuario, puntos de contacto visibles y procesos internos del sistema, y usar esa relación como base para tomar decisiones de experiencia.",
    serviceNote:
      "Esta estructura permitió diseñar la capa visible sin perder coherencia con la lógica operativa del producto.",
    frictionTitle: "Fricciones y oportunidades",
    frictionBody:
      "El journey map permitió identificar siete momentos donde la experiencia podía romperse o perder claridad. Cada uno se tradujo en una decisión concreta de producto e interfaz orientada a reducir fricción, reforzar comprensión y sostener confianza.",
    quote:
      "Esta arquitectura sirvió como base para definir prioridades, flujos críticos y decisiones de interfaz a lo largo del producto.",
    cards: [
      {
        index: "01",
        label: "Fundamentos del sistema",
        title: "La experiencia se ramifica",
        body: "Juegos, validaciones y reglas de premio que sostienen el ecosistema entero.",
        groups: [
          { title: "Juegos", items: ["PozoPower", "PozoPowerGO", "Revancha", "Lakidey", "Elige3", "Instantáneos"] },
          {
            title: "Ticket y cumplimiento",
            items: ["Creación de tickets", "Validación de tickets", "Control regulatorio", "Verificación de edad"],
          },
          { title: "Resultados y campaña", items: ["Resultados de sorteo", "Revancha", "Hero y promociones"] },
        ],
      },
      {
        index: "02",
        label: "Journeys",
        title: "La experiencia se ramifica",
        body: "El journey cambia según canal, velocidad de compra y nivel de asistencia.",
        groups: [
          { title: "Web player", items: ["Descubrimiento", "Registro + OTP", "Exploración", "Orden", "Pago", "Resultados"] },
          {
            title: "Retail asistido",
            items: ["Login vendedor", "Asistencia", "Orden", "Pago", "Impresión", "Entrega"],
          },
          { title: "Rutas alternas", items: ["Express purchase", "Falabella", "TinBet/AT/LiveSport", "Rapiraspas físicos"] },
        ],
      },
      {
        index: "03",
        label: "Superficies",
        title: "La experiencia se ramifica",
        body: "Cada journey cae en superficies distintas con ritmos y restricciones diferentes.",
        groups: [
          {
            title: "Frentes visibles",
            items: [
              "Website LotoBola",
              "Compra Expres Web",
              "Consulta de ticket",
              "Instantáneas web",
              "Promociones web",
              "Integración Partners",
            ],
          },
          {
            title: "Canales físicos",
            items: [
              "APP POS SUNMI V2S",
              "Integración TAMBO",
              "Integración BetHouse",
              "Integración Partners",
              "Control de inventario",
              "Dashboard de ventas",
            ],
          },
          {
            title: "Broadcast y soporte",
            items: [
              "Pantallas de TAMBO",
              "Animaciones promos",
              "Animaciones sorteos",
              "Panel de control BO",
              "Comunicaciones",
            ],
          },
        ],
      },
      {
        index: "04",
        label: "Lógica interna",
        title: "La experiencia se ramifica",
        body: "Aquí interacción se convierte en orden, ticket, pago, resultado y contenido.",
        groups: [
          {
            title: "Gestión central",
            items: ["Data de jugador", "Ventas / Operador", "Authentication", "KYC y verificación", "Flujo de conversión", "Compliance"],
          },
          {
            title: "Orden y ticketing",
            items: [
              "Catálogo de juegos",
              "Creador de orden",
              "Lógica de carrito",
              "Generación de tickets",
              "Estado de tickets",
              "Gifting y otros",
            ],
          },
          {
            title: "Pagos y resultados",
            items: ["Ruta de pago", "Callbacks", "Validación manual", "Lógica de ganadores", "Control de contenido", "Consulta de resultado"],
          },
        ],
      },
      {
        index: "05",
        label: "Integraciones",
        title: "La experiencia se ramifica",
        body: "Integraciones externas que alimentan, procesan o publican partes sensibles.",
        groups: [
          {
            title: "Core provider",
            items: ["SkillRock RNG", "Game catalog API", "Player data API", "Ticketing Engine", "Draw / Results"],
          },
          { title: "Pagos", items: ["PAYU", "Yape", "PagoEfectivo", "POS", "Banca y Pasarelas"] },
          { title: "Socios y contenido", items: ["Hero banner CMS", "Falabella Integration", "Mailing", "CRM integration"] },
        ],
      },
      {
        index: "06",
        label: "Operación",
        title: "La experiencia se ramifica",
        body: "La capa donde el sistema se vigila, se corrige, se reconcilia y se mantiene sano.",
        groups: [
          {
            title: "Sorteo y revancha",
            items: [
              "BackOffice sorteo",
              "DB sync monitores",
              "Validación manual",
              "Generador ganadores",
              "Promociones BO",
            ],
          },
          {
            title: "Monitoreo",
            items: ["Dashboard inventario", "Analítica de ventas", "DataDog web", "Monitoreo de transacciones"],
          },
          {
            title: "Soporte",
            items: ["Promo panel control", "Compliance dash", "Support BO", "Pago de premios", "Reclamos", "Derechos ARCO"],
          },
        ],
      },
    ],
    frictions: [
      {
        index: "01",
        problem: "Fricción en el registro y verificación OTP",
        solution: "Flujo de acceso simplificado con verificación contextualizada",
      },
      {
        index: "02",
        problem: "Dificultad para elegir los números correctos",
        solution: "Selector numérico interactivo con modo aleatorio como ruta alternativa",
      },
      {
        index: "03",
        problem: "Desconfianza en la seguridad del proceso de pago",
        solution: "Checkout transparente con estados de carga explícitos y confirmación inmediata",
      },
      {
        index: "04",
        problem: "Proceso de reclamo de premios complejo e incierto",
        solution: "Pantalla de resultados estructurada con flujo de reclamo de paso único",
      },
    ],
  },
  publicExperience: {
    kicker: "04 — experiencia publica",
    title: "Estructurando la experiencia pública",
    body:
      "La capa pública concentraba los momentos más visibles y sensibles del producto: descubrimiento, registro, exploración, compra, validación y resultados. El reto no era solo hacerla clara o atractiva, sino convertir reglas complejas y estados transaccionales en una experiencia comprensible, confiable y fácil de recorrer. Las decisiones de esta capa se orientaron a reducir ambigüedad, reforzar legitimidad desde el primer contacto y sostener continuidad en los momentos más críticos del journey, sin perder alineación con la lógica operativa que la hacía posible.",
  },
  retailChannels: {
    kicker: "05 — retail y canales",
    title: "Diseñando la capa retail asistida",
    subtitle: "Diseñar para contextos de mediación, operación y ejecución",
    body:
      "Una parte central del producto no ocurría en autoservicio digital, sino en contextos de venta asistida. El sistema debía funcionar en canales con ritmos, restricciones y lógicas comerciales distintas: bodegas, Tambo, casas de apuesta, partners y otros puntos de venta donde velocidad, claridad y facilidad de ejecución eran determinantes. Diseñar esta capa implicó adaptar flujos, jerarquías y decisiones de interfaz a contextos reales de operación. No era lo mismo vender en un entorno de atención rápida que en uno de mediación más pausada; tampoco era igual diseñar para operadores experimentados que para usuarios con menor familiaridad digital o menor tolerancia a la fricción. El objetivo fue construir una estructura de venta comprensible, directa y operable, capaz de facilitar la comercialización del producto sin perder coherencia con el resto del ecosistema.",
  },
  multipleActors: {
    kicker: "06 — retail y canales",
    title: "Diseñando para múltiples actores",
    subtitle: "Diseñar para contextos de mediación, operación y ejecución",
    body:
      "El producto no se dirigía a un único usuario promedio, sino a actores con capacidades, tiempos, objetivos y umbrales de fricción muy distintos entre sí: jugadores digitales, compradores exprés, vendedores en retail, operadores de punto de venta, usuarios internos y audiencias expuestas a comunicación en displays. Esa diversidad obligó a diseñar no solo para tareas, sino para contextos reales de uso. Cada superficie debía responder a niveles distintos de expertise, presión operativa, velocidad de atención y necesidad de información visible.",
  },
  operations: {
    kicker: "07 — operaciones",
    title: "Diseñando la capa operacional",
    subtitle: "Estructurar control, visibilidad y continuidad interna",
    body:
      "El producto no podía sostenerse solo desde la experiencia orientada al jugador. La operación interna era clave para asegurar continuidad, visibilidad y control sobre procesos sensibles: validación manual, sincronización de resultados, monitoreo y soporte a la gestión diaria del sistema. Diseñar esta capa implicó traducir complejidad administrativa y lógica operativa en herramientas claras, útiles y consistentes. Más que un backoffice aislado, debía funcionar como una extensión estructural del producto: una interfaz capaz de recoger información, acompañar validaciones críticas, mostrar estados relevantes y sostener decisiones internas con mayor claridad. Esta capa permitió conectar la experiencia visible con los procesos que realmente la hacían viable detrás de escena.",
    communicationTitle: "Comunicación en espacio restringido",
    communicationBody:
      "Parte del sistema también se expresaba en superficies de comunicación rápida, donde la interacción no era profunda pero la claridad seguía siendo crítica. En las pantallas de Tambo, el reto consistía en jerarquizar contenido dinámico, resultados, promociones y mensajes sensibles dentro de un espacio muy acotado y bajo condiciones de lectura inmediata. Diseñar esta capa implicó tomar decisiones de distribución, visibilidad y prioridad informativa para asegurar comprensión sin saturación, manteniendo coherencia con el resto del ecosistema.",
  },
  system: {
    kicker: "08 — Sistema y Coherencia",
    title: "Construyendo coherencia entre superficies",
    subtitle: "Alinear patrones, lenguaje visual y continuidad entre superficies",
    body:
      "Dado que el producto se extendía a través de múltiples superficies, la consistencia no podía depender de decisiones aisladas ni de ajustes manuales por canal. Fue necesario construir una base común capaz de alinear patrones, componentes, lenguaje visual y comportamiento de interfaz entre web, POS, operación interna y comunicación pública. Este trabajo permitió reducir fragmentación, sostener continuidad entre capas distintas del sistema y facilitar una evolución más ordenada del producto a medida que crecían sus flujos, canales y necesidades operativas.",
  },
  process: {
    kicker: "09 — proceso",
    title: "iteración y evolución",
    subtitle: "De exploraciones tempranas a un sistema más estructurado",
    body:
      "El proyecto no surgió como una solución cerrada desde el inicio. Fue tomando forma a través de exploraciones, ajustes de flujo, decisiones operativas, pruebas de estructura y refinamientos visuales que respondían a la complejidad real del sistema. Mostrar esa evolución permite entender cómo la solución pasó de exploraciones iniciales y necesidades fragmentadas a una arquitectura más madura, capaz de sostener múltiples superficies, distintos tipos de usuario y una operación más consistente en el tiempo.",
  },
  reflection: {
    kicker: "10 — reflexión",
    title: "El punto de inflexión",
    body:
      "El proyecto en cuestión condensó, con una claridad poco común, una forma de abordar el diseño. Lo que este caso me permitió fue, profundizar desde la claridad de que la experiencia nunca ocurre solo en la interfaz, sino en la relación entre reglas, operaciones, tiempos, canales, actores, validaciones y expectativas. Diseñar aquí implicó leer un sistema completo, entender sus fricciones como síntomas de una estructura mayor y traducir esa complejidad en una experiencia legible, consistente y confiable para los diferentes tipos de usuarios, en los diferentes niveles.",
    quote:
      "La expresión más clara de cómo mi práctica se ha ido constituyendo en formas cada vez más complejas de abordar el diseño: desde el producto y el servicio hasta los sistemas en los que ambos se insertan y operan.",
  },
};

const englishCopy: DesktopCopy = {
  ...spanishCopy,
  hero: {
    ...spanishCopy.hero,
    subtitleAccent: "Designing a lottery ecosystem",
    subtitleRest:
      " across public experience, assisted retail channels, operations, and system design in a regulated setting",
    summary:
      "LotoBola is a product ecosystem that connects digital experience, commercial operation, and transaction logic in a highly sensitive operating context. My role was to structure critical flows, clarify complex rules, and build a scalable foundation for the product to evolve.",
    cta: "Another view",
    metrics: [
      { label: "ROLE", value: "Service Design / Product Designer / UX UI / System Thinking." },
      {
        label: "scope",
        value: "Public experience, retail flows, operational / admin layer, design system, communication.",
      },
      { label: "Focus", value: "Multi-surface ecosystem design across digital, assisted, and operational contexts." },
      {
        label: "Deliverables",
        value: "Website, retail flows, admin tooling, design system foundations.",
      },
    ],
  },
  overview: {
    kicker: "01 — Overview",
    title: "The case in one minute",
    body:
      "LotoBola was the design of a multichannel, transactional, and regulated lottery ecosystem where public purchasing experience, assisted retail sales, internal operations, display communication, and third-party integrations all had to coexist. The challenge was not to solve an isolated interface, but to structure a system fragmented by channels, actors, business rules, usage rhythms, and sensitive states so it could operate with clarity, continuity, and trust at every touchpoint. My work translated that complexity into a coherent experience architecture: ordering flows, adapting interfaces to context, aligning interaction and operation, and building a visual and structural base able to support scale, control, and consistency over time.",
  },
  challenge: {
    kicker: "02 — Challenge",
    title: "The real challenge",
    body:
      "Designing LotoBola was not about optimizing a single digital journey, but about giving form to a lottery system distributed across channels, surfaces, and very different actors. The player experience depended both on the clarity of the visible layer and on consistency across assisted sales, validations, internal operations, promotional communication, and third-party integrations. The challenge was to make a fragmented ecosystem across web, POS, back office, displays, and retail channels function as one connected, understandable, and operable experience without losing coherence between public, commercial, and operational layers.",
    quote:
      "A lottery product is not only a screen problem. It is a service, operations, communication, and integrated system problem across platforms and multiple roles.",
  },
  architecture: {
    ...spanishCopy.architecture,
    kicker: "03 — Architecture",
    title: "System architecture",
    serviceTitle: "Service logic",
    serviceBody:
      "The service was organized into six main phases. Mapping them made it possible to understand how user expectations, visible touchpoints, and internal processes connected, and to use that relationship as the basis for experience decisions.",
    serviceNote:
      "This structure made it possible to design the visible layer without losing coherence with the product's operational logic.",
    frictionTitle: "Friction points and opportunities",
    frictionBody:
      "The journey map made it possible to identify moments where the experience could break or lose clarity. Each one became a concrete product and interface decision.",
    quote:
      "This architecture became the basis for defining priorities, critical flows, and interface decisions throughout the product.",
  },
  publicExperience: {
    kicker: "04 — Public Experience",
    title: "Structuring the public experience",
    body:
      "The public layer concentrated the most visible and sensitive moments of the product: discovery, registration, exploration, purchase, validation, and results. The goal was not only to make it clear or attractive, but to turn complex rules and transactional states into an understandable, trustworthy, and easy-to-navigate experience.",
  },
  retailChannels: {
    kicker: "05 — Retail & Channels",
    title: "Designing the assisted retail layer",
    subtitle: "Designing for mediation, operation, and execution",
    body:
      "A central part of the product did not happen in digital self-service, but in assisted sales contexts. The system had to work across channels with different rhythms, constraints, and commercial logics. Designing this layer meant adapting flows, hierarchy, and interface decisions to real operating conditions while preserving coherence with the rest of the ecosystem.",
  },
  multipleActors: {
    kicker: "06 — Retail & Channels",
    title: "Designing for multiple actors",
    subtitle: "Designing for mediation, operation, and execution",
    body:
      "The product did not target a single average user, but actors with very different capabilities, goals, timing, and friction thresholds: digital players, express buyers, retail sellers, point-of-sale operators, internal users, and audiences exposed to display communication. That forced the design to respond not only to tasks, but to real usage contexts.",
  },
  operations: {
    kicker: "07 — Operations",
    title: "Designing the operational layer",
    subtitle: "Structuring control, visibility, and internal continuity",
    body:
      "The product could not stand only on player-facing experience. Internal operation was essential for continuity, visibility, and control over sensitive processes. Designing this layer meant translating administrative complexity and operational logic into clear, useful, and consistent tools connected to the visible product layer.",
    communicationTitle: "Communication in constrained space",
    communicationBody:
      "Part of the system also lived in fast communication surfaces where interaction was shallow but clarity still mattered. On Tambo screens, the challenge was to prioritize dynamic content, results, promotions, and sensitive messaging in a very limited space and under immediate-reading conditions.",
  },
  system: {
    kicker: "08 — System & Coherence",
    title: "Building coherence across surfaces",
    subtitle: "Aligning patterns, visual language, and continuity across surfaces",
    body:
      "Because the product extended across multiple surfaces, consistency could not depend on isolated decisions or manual per-channel adjustments. A shared foundation was needed to align patterns, components, visual language, and behavior across web, POS, internal operations, and public communication.",
  },
  process: {
    kicker: "09 — Process",
    title: "Iteration and evolution",
    subtitle: "From early explorations to a more structured system",
    body:
      "The project did not emerge as a closed solution from the beginning. It took shape through explorations, flow adjustments, operational decisions, structure tests, and visual refinements that responded to the real complexity of the system.",
  },
  reflection: {
    kicker: "10 — Reflection",
    title: "The turning point",
    body:
      "This project condensed, with unusual clarity, a way of approaching design. More than any other case, it shows how I now work through the relationship between rules, operations, timing, channels, actors, validations, and expectations rather than through interface alone.",
    quote:
      "The clearest expression of how my practice has evolved toward increasingly complex ways of approaching design: from product and service into the systems where both are inserted and operate.",
  },
};

const copyByLang: Record<Lang, DesktopCopy> = {
  es: spanishCopy,
  en: englishCopy,
};

export function LotoBolaDesktopView({ lang }: { lang: Lang }) {
  const c = copyByLang[lang];

  return (
    <div className="lotobola-desktop-view">
      <section className="lotobola-desktop__section lotobola-desktop__section--hero" id="hero">
        <div className="lotobola-desktop__hero">
          <h1 className="lotobola-desktop__hero-title">{c.hero.title}</h1>
          <p className="lotobola-desktop__hero-subtitle">
            <span className="lotobola-desktop__accent">{c.hero.subtitleAccent}</span>
            {c.hero.subtitleRest}
          </p>
          <p className="lotobola-desktop__hero-summary">{c.hero.summary}</p>

          <button type="button" className="lotobola-desktop__hero-cta" disabled aria-disabled="true">
            <MediumIcon />
            <span>{c.hero.cta}</span>
          </button>
        </div>

        <div className="lotobola-desktop__metrics">
          {c.hero.metrics.map((metric) => (
            <article key={metric.label} className="lotobola-desktop__metric">
              <p className="lotobola-desktop__metric-label">{metric.label}</p>
              <p className="lotobola-desktop__metric-value">{metric.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lotobola-desktop__section" id="overview">
        <SectionIntro {...c.overview} />
        <div className="lotobola-desktop__overview-diagram">
          <LotoBolaSystemDiagram lang={lang} />
        </div>
      </section>

      <section className="lotobola-desktop__section" id="challenge">
        <SectionIntro {...c.challenge} />

        <div className="lotobola-desktop__placeholder-row">
          <Placeholder variant="card" />
          <Placeholder variant="card" />
          <Placeholder variant="card" />
        </div>

        <QuoteBlock accent>{c.challenge.quote}</QuoteBlock>
      </section>

      <section className="lotobola-desktop__section" id="architecture">
        <SectionIntro {...c.architecture} />

        <div className="lotobola-desktop__architecture-copy">
          <h3 className="lotobola-desktop__subtitle">{c.architecture.serviceTitle}</h3>
          <p className="lotobola-desktop__body">{c.architecture.serviceBody}</p>
          <p className="lotobola-desktop__note">{c.architecture.serviceNote}</p>
        </div>

        <ArchitectureCarousel cards={c.architecture.cards} lang={lang} />

        <div className="lotobola-desktop__architecture-copy">
          <h3 className="lotobola-desktop__subtitle">{c.architecture.frictionTitle}</h3>
          <p className="lotobola-desktop__body">{c.architecture.frictionBody}</p>
        </div>

        <div className="lotobola-desktop__frictions">
          {c.architecture.frictions.map((item) => (
            <FrictionItem key={item.index} item={item} />
          ))}
        </div>

        <QuoteBlock accent>{c.architecture.quote}</QuoteBlock>
      </section>

      <section className="lotobola-desktop__section" id="public-experience">
        <SectionIntro {...c.publicExperience} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-desktop__section" id="retail-channels">
        <SectionIntro {...c.retailChannels} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-desktop__section" id="multiple-actors">
        <SectionIntro {...c.multipleActors} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-desktop__section" id="operations">
        <SectionIntro {...c.operations} />

        <div className="lotobola-desktop__placeholder-row">
          <Placeholder variant="card" />
          <Placeholder variant="card" />
          <Placeholder variant="card" />
        </div>

        <div className="lotobola-desktop__communication">
          <h3 className="lotobola-desktop__subtitle">{c.operations.communicationTitle}</h3>
          <p className="lotobola-desktop__body">{c.operations.communicationBody}</p>
        </div>

        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-desktop__section" id="system">
        <SectionIntro {...c.system} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-desktop__section" id="process">
        <SectionIntro {...c.process} />
        <Placeholder variant="landscape" />
      </section>

      <section className="lotobola-desktop__section lotobola-desktop__section--final" id="reflection">
        <SectionIntro {...c.reflection} />
        <QuoteBlock>{c.reflection.quote}</QuoteBlock>
        <Placeholder variant="final" bleed />
      </section>
    </div>
  );
}
