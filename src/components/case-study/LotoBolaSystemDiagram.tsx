import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "./LotoBolaSystemDiagram.css";

type View = "ecosystem" | "flow" | "journey" | "actors" | "surfaces";

interface ViewMeta {
  id: View;
  es: string;
  en: string;
  descEs: string;
  descEn: string;
  exUrl: string;
}

const VIEWS: ViewMeta[] = [
  {
    id: "ecosystem",
    es: "Ecosistema",
    en: "Ecosystem",
    descEs: "9 tipos de actor · 5 superficies · múltiples dependencias externas críticas",
    descEn: "9 actor types · 5 surfaces · multiple critical external dependencies",
    exUrl: "https://excalidraw.com/#json=RwTX2SCZunSmHZdkRxhi-,VCEd75DBO6SgqKw79cju3g",
  },
  {
    id: "flow",
    es: "Flujo Operacional",
    en: "Op. Flow",
    descEs: "Lógica invisible: experiencia visible, operación y sistemas conectados por dependencias",
    descEn: "Invisible logic: visible experience, operation, and systems connected by dependencies",
    exUrl: "https://excalidraw.com/#json=TxVIkDJSHeB1cP1LgMzr7,lTLrRlUNZ8856c4nFHqC9Q",
  },
  {
    id: "journey",
    es: "Journey Multicanal",
    en: "Multi-Channel",
    descEs: "5 canales · contextos radicalmente diferentes · POS Tambo como caso extremo",
    descEn: "5 channels · radically different contexts · POS Tambo as extreme case",
    exUrl: "https://excalidraw.com/#json=Qxx6wy2b6d92v_ah57AeC,5kVjFJZSTrl0WVEkeU7avA",
  },
  {
    id: "actors",
    es: "Actores",
    en: "Actors",
    descEs: "El mito del usuario promedio destruido: de 0 interacción a sesiones de alta complejidad",
    descEn: "The average user myth destroyed: from 0 interaction to high-complexity sessions",
    exUrl: "https://excalidraw.com/#json=-9Apf2VwcxyKEQCoO2ghl,raFdav4Z0W-xShSLOYvVZg",
  },
  {
    id: "surfaces",
    es: "Superficies",
    en: "Surfaces",
    descEs: "4 superficies · 8 dimensiones · Display Tambo: el caso de diseño más extremo",
    descEn: "4 surfaces · 8 dimensions · Display Tambo: the most extreme design case",
    exUrl: "https://excalidraw.com/#json=2gQ2tFYYHg6NULfT-ui7c,PLACp4Bs4wTMDxvDscUq_A",
  },
];

/* ──────────────────────────────────────────────
   VIEW 1 — ECOSYSTEM MAP
   ────────────────────────────────────────────── */
function EcosystemView({ visible }: { visible: boolean }) {
  const actors = [
    { label: "Usuario\nWeb", type: "default" },
    { label: "Usuario\nExprés", type: "default" },
    { label: "Op. POS\nBodega", type: "default" },
    { label: "Op. POS\nTambo", type: "critical" },
    { label: "Op. POS\nFranquicia", type: "default" },
    { label: "Supervisor", type: "default" },
    { label: "Admin\nNegocio", type: "default" },
    { label: "Admin\nTécnico", type: "default" },
    { label: "Audiencia\nDisplay", type: "accent" },
  ];

  const surfaces = [
    { label: "Web", type: "accent" },
    { label: "Exprés", type: "accent" },
    { label: "POS Bodega", type: "default" },
    { label: "POS Tambo", type: "critical" },
    { label: "POS Franquicia", type: "default" },
  ];

  const systems = [
    { label: "Core\nde Juego", type: "critical" },
    { label: "Pasarela\nde Pago", type: "default" },
    { label: "Backoffice", type: "default" },
    { label: "Analytics", type: "default" },
    { label: "Display\nEngine", type: "accent" },
  ];

  return (
    <div className="lbsd-ecosystem">
      <div className="lbsd-ecosystem__io lbsd-ecosystem__io--left" aria-hidden="true">
        <span>INPUTS</span>
        <span>Traffic · Retail · Operadores</span>
      </div>
      <div className="lbsd-ecosystem__io lbsd-ecosystem__io--right" aria-hidden="true">
        <span>OUTPUTS</span>
        <span>Boletos · Resultados · Reportes</span>
      </div>

      <div className="lbsd-ecosystem__layers">
        {/* ACTORS */}
        <div className="lbsd-layer" style={{ "--layer-delay": "0ms" } as React.CSSProperties}>
          <span className="lbsd-layer__label">ACTORES</span>
          <div className="lbsd-layer__nodes" role="list">
            {actors.map((a, i) => (
              <div
                key={i}
                className={`lbsd-node lbsd-node--${a.type}`}
                role="listitem"
                style={{ "--node-delay": `${i * 40}ms` } as React.CSSProperties}
                data-visible={visible}
              >
                {a.label.split("\n").map((line, li) => (
                  <span key={li}>{line}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="lbsd-connector-row" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="lbsd-connector-row__line" style={{ "--conn-delay": `${200 + i * 60}ms` } as React.CSSProperties} data-visible={visible} />
          ))}
        </div>

        {/* SURFACES */}
        <div className="lbsd-layer" style={{ "--layer-delay": "120ms" } as React.CSSProperties}>
          <span className="lbsd-layer__label">SUPERFICIES</span>
          <div className="lbsd-layer__nodes" role="list">
            {surfaces.map((s, i) => (
              <div
                key={i}
                className={`lbsd-node lbsd-node--${s.type} lbsd-node--surface`}
                role="listitem"
                style={{ "--node-delay": `${120 + i * 50}ms` } as React.CSSProperties}
                data-visible={visible}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>

        <div className="lbsd-connector-row" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="lbsd-connector-row__line" style={{ "--conn-delay": `${380 + i * 60}ms` } as React.CSSProperties} data-visible={visible} />
          ))}
        </div>

        {/* SYSTEMS */}
        <div className="lbsd-layer" style={{ "--layer-delay": "240ms" } as React.CSSProperties}>
          <span className="lbsd-layer__label">SISTEMAS</span>
          <div className="lbsd-layer__nodes" role="list">
            {systems.map((s, i) => (
              <div
                key={i}
                className={`lbsd-node lbsd-node--${s.type} ${s.type === "critical" ? "lbsd-node--pulse-critical" : ""}`}
                role="listitem"
                style={{ "--node-delay": `${240 + i * 50}ms` } as React.CSSProperties}
                data-visible={visible}
              >
                {s.label.split("\n").map((line, li) => (
                  <span key={li}>{line}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   VIEW 2 — OPERATIONAL FLOW
   ────────────────────────────────────────────── */
function FlowView({ lang, visible }: { lang: string; visible: boolean }) {
  const isEs = lang === "es";

  const columns = [
    {
      id: "visible",
      label: isEs ? "Experiencia Visible" : "Visible Experience",
      items: isEs
        ? ["Onboarding", "Catálogo sorteos", "Selector números", "Checkout", "Confirmación", "Resultados"]
        : ["Onboarding", "Draw catalog", "Number selector", "Checkout", "Confirmation", "Results"],
      type: "default",
    },
    {
      id: "operation",
      label: isEs ? "Operación" : "Operation",
      items: isEs
        ? ["Gestión de juegos", "Disponibilidad boletos", "Validación pago", "Generación ticket", "Administración"]
        : ["Game management", "Ticket availability", "Payment validation", "Ticket generation", "Administration"],
      type: "default",
    },
    {
      id: "systems",
      label: isEs ? "Sistemas" : "Systems",
      items: isEs
        ? ["Core de Juego ★", "Payment Gateway", "Base de Datos", "Analytics Engine", "Display Engine"]
        : ["Game Core ★", "Payment Gateway", "Database", "Analytics Engine", "Display Engine"],
      type: "systems",
    },
  ];

  return (
    <div className="lbsd-flow">
      {columns.map((col, ci) => (
        <div key={col.id} className={`lbsd-flow__col lbsd-flow__col--${col.type}`} data-visible={visible} style={{ "--col-delay": `${ci * 100}ms` } as React.CSSProperties}>
          <div className="lbsd-flow__col-label">{col.label}</div>
          <div className="lbsd-flow__col-items">
            {col.items.map((item, ii) => (
              <div
                key={ii}
                className={`lbsd-flow__item ${item.includes("★") ? "lbsd-flow__item--critical" : ""}`}
                style={{ "--item-delay": `${ci * 100 + ii * 55}ms` } as React.CSSProperties}
                data-visible={visible}
              >
                {item}
                {item.includes("★") && <span className="lbsd-flow__critical-badge" aria-label="dependencia crítica">CRÍTICO</span>}
              </div>
            ))}
          </div>
          {ci < columns.length - 1 && (
            <div className="lbsd-flow__connector" aria-hidden="true" data-visible={visible} style={{ "--conn-delay": `${ci * 100 + 300}ms` } as React.CSSProperties}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="lbsd-flow__connector-dot" style={{ "--dot-i": i } as React.CSSProperties} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   VIEW 3 — MULTI-CHANNEL JOURNEY
   ────────────────────────────────────────────── */
function JourneyView({ lang, visible }: { lang: string; visible: boolean }) {
  const isEs = lang === "es";
  const [activeChannel, setActiveChannel] = useState(0);

  const channels = isEs
    ? [
        {
          name: "Web",
          context: "Individual · autoservicio · mobile/desktop",
          flow: "Registro → Exploración → Selección → Pago → Confirmación",
          friction: "Confianza inicial · Claridad de reglas",
          decision: "Legitimidad visual · Jerarquía editorial",
          ui: "Auto-guiado · Responsive · Confirmación explícita",
          critical: false,
        },
        {
          name: "Exprés",
          context: "Asistido básico · punto de acceso rápido",
          flow: "Acceso → Selección rápida → Pago",
          friction: "Velocidad de transacción · Simplificación",
          decision: "Flujo mínimo · Opciones reducidas",
          ui: "Acción directa · Sin distracciones",
          critical: false,
        },
        {
          name: "POS Bodega",
          context: "Asistido completo · bodeguero como intermediario",
          flow: "Atención → Selección asistida → Validación → Pago → Recibo",
          friction: "Dependencia del operador · Errores de intermediación",
          decision: "Interfaz dual · Confirmaciones visibles para cliente",
          ui: "Claridad de estados · Feedback bidireccional",
          critical: false,
        },
        {
          name: "POS Tambo",
          context: "Tiempo extremo · alta presión · <60 seg/transacción",
          flow: "Selección ultrarrápida → Pago → Impresión",
          friction: "Presión temporal máxima · Errores con consecuencias",
          decision: "Urgencia visual · Tap areas grandes · Sin ambigüedad",
          ui: "Mínima fricción · Confirmación inmediata · Undo crítico",
          critical: true,
        },
        {
          name: "POS Franquicia",
          context: "Estandarizado · operador entrenado · protocolo fijo",
          flow: "Protocolo → Validación → Pago → Cierre",
          friction: "Desviaciones del protocolo · Manejo de excepciones",
          decision: "Interfaz de protocolo · Guías contextuales",
          ui: "Proceso paso a paso · Estados claros de validación",
          critical: false,
        },
      ]
    : [
        {
          name: "Web",
          context: "Individual · self-service · mobile/desktop",
          flow: "Register → Explore → Select → Pay → Confirm",
          friction: "Initial trust · Rule clarity",
          decision: "Visual legitimacy · Editorial hierarchy",
          ui: "Self-guided · Responsive · Explicit confirmation",
          critical: false,
        },
        {
          name: "Exprés",
          context: "Basic assisted · fast access point",
          flow: "Access → Quick selection → Pay",
          friction: "Transaction speed · Simplification",
          decision: "Minimal flow · Reduced options",
          ui: "Direct action · No distractions",
          critical: false,
        },
        {
          name: "POS Bodega",
          context: "Full assisted · shopkeeper as intermediary",
          flow: "Service → Assisted selection → Validation → Pay → Receipt",
          friction: "Operator dependency · Intermediation errors",
          decision: "Dual interface · Client-visible confirmations",
          ui: "State clarity · Bidirectional feedback",
          critical: false,
        },
        {
          name: "POS Tambo",
          context: "Extreme time pressure · <60 sec/transaction",
          flow: "Ultra-fast selection → Pay → Print",
          friction: "Maximum time pressure · Errors with consequences",
          decision: "Visual urgency · Large tap areas · No ambiguity",
          ui: "Minimum friction · Immediate confirmation · Critical undo",
          critical: true,
        },
        {
          name: "POS Franquicia",
          context: "Standardized · trained operator · fixed protocol",
          flow: "Protocol → Validation → Pay → Close",
          friction: "Protocol deviations · Exception handling",
          decision: "Protocol interface · Contextual guides",
          ui: "Step-by-step · Clear validation states",
          critical: false,
        },
      ];

  const dims = isEs
    ? ["Contexto", "Flujo", "Fricciones", "Decisión de diseño", "Necesidades UI"]
    : ["Context", "Flow", "Frictions", "Design decision", "UI needs"];

  const channel = channels[activeChannel];

  return (
    <div className="lbsd-journey" data-visible={visible}>
      {/* Channel selector */}
      <div className="lbsd-journey__channels" role="tablist">
        {channels.map((ch, i) => (
          <button
            key={i}
            className={`lbsd-journey__ch-btn ${activeChannel === i ? "lbsd-journey__ch-btn--active" : ""} ${ch.critical ? "lbsd-journey__ch-btn--critical" : ""}`}
            onClick={() => setActiveChannel(i)}
            role="tab"
            aria-selected={activeChannel === i}
          >
            {ch.critical && <span className="lbsd-journey__ch-dot" aria-hidden="true" />}
            {ch.name}
          </button>
        ))}
      </div>

      {/* Channel detail */}
      <div className={`lbsd-journey__detail ${channel.critical ? "lbsd-journey__detail--critical" : ""}`} key={activeChannel}>
        {channel.critical && (
          <div className="lbsd-journey__alert" aria-label="Canal crítico">
            {isEs ? "⚠ CANAL CRÍTICO — Presión temporal extrema" : "⚠ CRITICAL CHANNEL — Extreme time pressure"}
          </div>
        )}
        <div className="lbsd-journey__grid">
          {[channel.context, channel.flow, channel.friction, channel.decision, channel.ui].map((val, i) => (
            <div key={i} className="lbsd-journey__row">
              <span className="lbsd-journey__dim">{dims[i]}</span>
              <span className="lbsd-journey__val">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   VIEW 4 — ACTORS & CONTEXT MATRIX
   ────────────────────────────────────────────── */
function ActorsView({ lang, visible }: { lang: string; visible: boolean }) {
  const isEs = lang === "es";

  const dims = isEs
    ? ["Téc.", "Asistencia", "Frecuencia", "Sesión", "Atención", "Inter. UI", "Complejidad", "Impacto error"]
    : ["Tech.", "Assistance", "Frequency", "Session", "Attention", "UI Inter.", "Complexity", "Error impact"];

  type Level = "H" | "M" | "L" | "Z" | "X";

  const actors: { name: string; vals: Level[]; extreme?: boolean }[] = [
    { name: "Usuario Web", vals: ["M", "L", "M", "M", "H", "H", "M", "H"] },
    { name: "Usuario Exprés", vals: ["L", "H", "L", "L", "M", "M", "L", "M"] },
    { name: "Cajero Bodega", vals: ["M", "H", "H", "H", "M", "H", "M", "M"] },
    { name: isEs ? "Cajero Tambo ★" : "Tambo Cashier ★", vals: ["M", "H", "H", "H", "X", "H", "L", "X"], extreme: true },
    { name: "Cajero Franquicia", vals: ["M", "H", "H", "H", "M", "H", "H", "M"] },
    { name: isEs ? "Admin Negocio" : "Biz Admin", vals: ["M", "L", "M", "H", "H", "M", "H", "M"] },
    { name: isEs ? "Admin Técnico" : "Tech Admin", vals: ["H", "L", "L", "H", "H", "L", "H", "H"] },
    { name: "Display Tambo", vals: ["L", "Z", "H", "Z", "X", "Z", "L", "M"], extreme: true },
  ];

  const levelColor: Record<Level, string> = {
    H: "high",
    M: "mid",
    L: "low",
    Z: "zero",
    X: "extreme",
  };

  const levelLabel: Record<Level, string> = {
    H: isEs ? "Alta" : "High",
    M: isEs ? "Media" : "Medium",
    L: isEs ? "Baja" : "Low",
    Z: isEs ? "Nula" : "None",
    X: isEs ? "Extremo" : "Extreme",
  };

  return (
    <div className="lbsd-actors" data-visible={visible}>
      <div className="lbsd-actors__scroll">
        <table className="lbsd-actors__table" role="table">
          <thead>
            <tr>
              <th className="lbsd-actors__th-actor">{isEs ? "Actor" : "Actor"}</th>
              {dims.map((d, i) => (
                <th key={i} className="lbsd-actors__th">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actors.map((actor, ai) => (
              <tr key={ai} className={actor.extreme ? "lbsd-actors__row--extreme" : ""} style={{ "--row-delay": `${ai * 50}ms` } as React.CSSProperties}>
                <td className="lbsd-actors__td-name">{actor.name}</td>
                {actor.vals.map((v, vi) => (
                  <td key={vi} className={`lbsd-actors__cell lbsd-actors__cell--${levelColor[v]}`}>
                    <span className={`lbsd-actors__dot lbsd-actors__dot--${levelColor[v]}`} title={levelLabel[v]} aria-label={levelLabel[v]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lbsd-actors__legend">
        {(["H", "M", "L", "Z", "X"] as Level[]).map((l) => (
          <span key={l} className="lbsd-actors__legend-item">
            <span className={`lbsd-actors__dot lbsd-actors__dot--${levelColor[l]}`} aria-hidden="true" />
            {levelLabel[l]}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   VIEW 5 — SURFACES & INFORMATION DESIGN
   ────────────────────────────────────────────── */
function SurfacesView({ lang, visible }: { lang: string; visible: boolean }) {
  const isEs = lang === "es";

  const dimensions = isEs
    ? [
        "Tiempo de atención",
        "Nivel de interacción",
        "Densidad información",
        "Urgencia operativa",
        "Conocimiento previo",
        "Asistencia humana",
        "Legibilidad crítica",
        "Complejidad de flujo",
      ]
    : [
        "Attention time",
        "Interaction level",
        "Info density",
        "Operational urgency",
        "Prior knowledge",
        "Human assistance",
        "Critical readability",
        "Flow complexity",
      ];

  type Level = "H" | "M" | "L" | "Z" | "X";

  const surfaces: { name: string; vals: Level[]; critical?: boolean }[] = [
    { name: "Web", vals: ["L", "H", "M", "M", "L", "Z", "M", "M"] },
    { name: "POS", vals: ["M", "H", "L", "H", "H", "H", "M", "H"] },
    { name: "Backoffice", vals: ["H", "M", "H", "M", "H", "Z", "M", "H"] },
    {
      name: "Display\nTambo",
      vals: ["X", "Z", "X", "X", "Z", "Z", "X", "X"],
      critical: true,
    },
  ];

  const levelColor: Record<Level, string> = { H: "high", M: "mid", L: "low", Z: "zero", X: "extreme" };
  const levelLabel: Record<Level, string> = {
    H: isEs ? "Alta" : "High",
    M: isEs ? "Media" : "Med",
    L: isEs ? "Baja" : "Low",
    Z: isEs ? "Nula" : "None",
    X: isEs ? "Extremo" : "Extreme",
  };

  return (
    <div className="lbsd-surfaces" data-visible={visible}>
      <div className="lbsd-surfaces__grid">
        {/* Header */}
        <div className="lbsd-surfaces__header">
          <div className="lbsd-surfaces__dim-col">{isEs ? "Dimensión" : "Dimension"}</div>
          {surfaces.map((s, i) => (
            <div key={i} className={`lbsd-surfaces__surf-header ${s.critical ? "lbsd-surfaces__surf-header--critical" : ""}`}>
              {s.name.split("\n").map((line, li) => <span key={li}>{line}</span>)}
              {s.critical && <span className="lbsd-surfaces__critical-tag">EXTREMO</span>}
            </div>
          ))}
        </div>

        {/* Rows */}
        {dimensions.map((dim, di) => (
          <div key={di} className="lbsd-surfaces__row" style={{ "--row-delay": `${di * 60}ms` } as React.CSSProperties} data-visible={visible}>
            <div className="lbsd-surfaces__dim">{dim}</div>
            {surfaces.map((s, si) => {
              const v = s.vals[di];
              return (
                <div key={si} className={`lbsd-surfaces__cell ${s.critical ? "lbsd-surfaces__cell--critical-col" : ""} lbsd-surfaces__cell--${levelColor[v]}`}>
                  <span className={`lbsd-actors__dot lbsd-actors__dot--${levelColor[v]}`} title={levelLabel[v]} aria-label={levelLabel[v]} />
                  <span className="lbsd-surfaces__cell-label">{levelLabel[v]}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="lbsd-actors__legend">
        {(["H", "M", "L", "Z", "X"] as Level[]).map((l) => (
          <span key={l} className="lbsd-actors__legend-item">
            <span className={`lbsd-actors__dot lbsd-actors__dot--${levelColor[l]}`} aria-hidden="true" />
            {levelLabel[l]}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────── */
export function LotoBolaSystemDiagram({ lang }: { lang: string }) {
  const [activeView, setActiveView] = useState<View>("ecosystem");
  const [prevView, setPrevView] = useState<View | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          setTimeout(() => setScanned(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  const changeView = (v: View) => {
    if (v === activeView || isTransitioning) return;
    setIsTransitioning(true);
    setPrevView(activeView);
    setTimeout(() => {
      setActiveView(v);
      setPrevView(null);
      setIsTransitioning(false);
    }, 200);
  };

  const activeIdx = VIEWS.findIndex((v) => v.id === activeView);
  const goNext = () => changeView(VIEWS[(activeIdx + 1) % VIEWS.length].id);
  const goPrev = () => changeView(VIEWS[(activeIdx - 1 + VIEWS.length) % VIEWS.length].id);
  const meta = VIEWS[activeIdx];

  return (
    <div
      ref={containerRef}
      className={`lbsd ${visible ? "lbsd--visible" : ""} ${scanned ? "lbsd--scanned" : ""}`}
      aria-label={lang === "es" ? "Diagrama del sistema interactivo" : "Interactive system diagram"}
    >
      {/* Scan line */}
      {visible && !scanned && <div className="lbsd__scan-line" aria-hidden="true" />}

      {/* Grid background */}
      <div className="lbsd__grid-bg" aria-hidden="true" />

      <div className="lbsd__stepper">
        <button
          type="button"
          className="lbsd__step-btn"
          onClick={goPrev}
          aria-label={lang === "es" ? "Vista anterior" : "Previous view"}
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </button>
        <div className="lbsd__step-info">
          <span className="lbsd__step-count">
            {String(activeIdx + 1).padStart(2, "0")} / {String(VIEWS.length).padStart(2, "0")}
          </span>
          <span className="lbsd__step-label">{lang === "es" ? meta.es : meta.en}</span>
        </div>
        <button
          type="button"
          className="lbsd__step-btn"
          onClick={goNext}
          aria-label={lang === "es" ? "Siguiente vista" : "Next view"}
        >
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>

      <nav className="lbsd__nav" aria-label={lang === "es" ? "Vistas del diagrama" : "Diagram views"}>
        <div className="lbsd__nav-track">
          {VIEWS.map((view, i) => (
            <button
              type="button"
              key={view.id}
              className={`lbsd__nav-btn ${activeView === view.id ? "lbsd__nav-btn--active" : ""}`}
              onClick={() => changeView(view.id)}
              aria-pressed={activeView === view.id}
            >
              <span className="lbsd__nav-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="lbsd__nav-label">{lang === "es" ? view.es : view.en}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Canvas */}
      <div className={`lbsd__canvas ${isTransitioning ? "lbsd__canvas--exiting" : "lbsd__canvas--entering"}`}>
        {activeView === "ecosystem" && <EcosystemView visible={visible} />}
        {activeView === "flow" && <FlowView lang={lang} visible={visible} />}
        {activeView === "journey" && <JourneyView lang={lang} visible={visible} />}
        {activeView === "actors" && <ActorsView lang={lang} visible={visible} />}
        {activeView === "surfaces" && <SurfacesView lang={lang} visible={visible} />}
      </div>

      <div className="lbsd__dots" role="tablist" aria-label={lang === "es" ? "Índice de vistas" : "View index"}>
        {VIEWS.map((view, i) => (
          <button
            type="button"
            key={view.id}
            className={`lbsd__dot ${i === activeIdx ? "lbsd__dot--active" : ""}`}
            onClick={() => changeView(view.id)}
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={lang === "es" ? view.es : view.en}
          />
        ))}
      </div>

      <div className="lbsd__footer">
        <div className="lbsd__footer-left">
          <span className="lbsd__footer-idx">
            {String(activeIdx + 1).padStart(2, "0")} / {String(VIEWS.length).padStart(2, "0")}
          </span>
          <span className="lbsd__footer-desc">
            {lang === "es" ? meta.descEs : meta.descEn}
          </span>
        </div>
        <a
          href={meta.exUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lbsd__ex-link"
          aria-label={lang === "es" ? "Abrir diagrama en Excalidraw" : "Open diagram in Excalidraw"}
        >
          <ExternalLink size={11} aria-hidden="true" />
          {lang === "es" ? "Ver diagrama" : "View diagram"}
        </a>
      </div>
    </div>
  );
}
