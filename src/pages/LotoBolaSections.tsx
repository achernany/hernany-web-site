import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import { useI18n } from "../i18n";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "LB-HERO-01").
   ============================================================ */

type PlaceholderRatio = "hero" | "wide" | "landscape" | "portrait" | "card" | "square";

interface CasePlaceholderProps {
  id: string;
  ratio?: PlaceholderRatio;
  caption?: string;
  hint?: string;
  className?: string;
  src?: string;
  alt?: string;
}

function CasePlaceholder({ id, ratio = "landscape", caption, hint, className, src, alt }: CasePlaceholderProps) {
  return (
    <figure className={cn("cs-ph-wrap", className)}>
      {src ? (
        <img
          src={src}
          alt={alt ?? id}
          className="cs-asset"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className={cn("cs-placeholder", `cs-placeholder--${ratio}`)}
          aria-label={`Visual placeholder: ${id}`}
          role="img"
        >
          <span className="cs-placeholder__id">{id}</span>
          {hint && <span className="cs-placeholder__hint">{hint}</span>}
        </div>
      )}
      {caption && <figcaption className="cs-caption">{caption}</figcaption>}
    </figure>
  );
}

/* ============================================================
   LotoBolaSections
   Pure content component — no header, no footer, no Container.
   Used by both the standalone page and SelectedWorkDetail.
   ============================================================ */

export function LotoBolaSections() {
  const { lang } = useI18n();

  const c = lang === "es" ? {
    /* ── HERO ── */
    heroKicker: "Trabajo Seleccionado — Caso de Estudio",
    heroBodyAccent: "Diseñando un ecosistema de lotería",
    heroBodyRest: " a través de experiencia pública, canales retail asistidos, operaciones y sistema.",
    heroBody2: "LotoBola es la expresión más clara de cómo trabajo a través de capas: estructurando lógica de producto, diseñando interfaces coherentes y traduciendo necesidades operativas complejas en experiencias conectadas.",
    heroMetaRoleLabel: "Rol",
    heroMetaRoleValue: "Product Designer / UX·UI / Service Design",
    heroMetaScopeLabel: "Alcance",
    heroMetaScopeValue: "Experiencia pública, flujos retail, capa operativa/admin, design system, comunicación",
    heroMetaFocusLabel: "Foco",
    heroMetaFocusValue: "Diseño de ecosistema multi-superficie — digital, asistido y operativo",
    heroMetaOutputLabel: "Entregables",
    heroMetaOutputValue: "Sitio web, flujos retail, herramientas admin, fundamentos de design system",
    heroPlaceholderHint: "Vista general del ecosistema",

    /* ── S2 — THE CASE IN ONE MINUTE ── */
    s2Kicker: "01 — Panorama",
    s2Title: "El caso en un minuto",
    s2Body: "LotoBola era más que un producto digital. Era un ecosistema con dimensiones públicas, asistidas, operativas y administrativas. El desafío no era solo hacer interfaces usables, sino construir coherencia entre puntos de contacto, clarificar la experiencia y crear fundamentos para escalar.",
    s2Block1Title: "Qué era",
    s2Block1Body: "Un ecosistema de lotería que combinaba puntos de entrada públicos, flujos de servicio asistido, soporte retail y lógica operativa.",
    s2Block2Title: "Qué estaba resolviendo",
    s2Block2Body: "Una experiencia fragmentada y multicapa que necesitaba funcionar a través de usuarios, equipos internos y entornos asistidos.",
    s2Block3Title: "Por qué importaba",
    s2Block3Body: "Porque la confianza, la claridad, la viabilidad operativa y la escalabilidad dependían de que el sistema funcionara como una experiencia conectada.",
    s2PlaceholderHint: "Diagrama del ecosistema",

    /* ── S3 — THE CHALLENGE ── */
    s3Kicker: "02 — Desafío",
    s3Title: "El desafío real",
    s3Body: "Esto nunca fue solo un ejercicio de UI. Diseñar para un ecosistema de lotería significaba lidiar con confianza, comprensión, flujos de participación, restricciones operativas, realidades retail y consistencia a lo largo del tiempo. El problema era sistémico: diferentes superficies, diferentes actores y diferentes niveles de asistencia debían alinearse en una sola lógica de experiencia.",
    s3CalloutAccent: "Un producto de lotería no es solo un problema de pantallas.",
    s3CalloutRest: " Es un problema de servicio, de operaciones, de comunicación y de sistemas.",
    s3PlaceholderHint: "Encuadre del desafío — complejidad del ecosistema",

    /* ── S3.5 — EXPERIENCE ARCHITECTURE ── */
    archKicker: "03 — Arquitectura",
    archTitle: "Arquitectura de la experiencia",
    archBody: "Antes de las interfaces, estructuré cómo funciona el servicio. Estos artefactos documentan la lógica de participación, la arquitectura de navegación y los momentos de fricción que informaron cada decisión de diseño.",
    archB1Title: "Lógica del servicio",
    archB1Body: "El servicio opera en 7 fases consecutivas. Cada una involucra acciones del usuario, puntos de contacto visibles y procesos internos del sistema. La coherencia entre estas capas fue el fundamento del diseño.",
    archPhases: ["Descubrimiento", "Registro", "Exploración", "Creación de orden", "Pago", "Confirmación", "Resultados"],
    archServiceRows: [
      { layer: "Usuario", items: "Descarga la app → crea cuenta → explora sorteos → elige números → paga → recibe ticket → consulta resultados" },
      { layer: "Interfaz", items: "Onboarding · Catálogo de sorteos · Selector numérico · Checkout · Pantalla de éxito · Ticket digital" },
      { layer: "Sistema", items: "Validación de registro · Disponibilidad de boletos · Procesamiento de pago · Generación de ticket único · Sorteo certificado" },
    ],
    archB2Title: "Estructura de navegación",
    archB2Body: "La navegación sigue un eje lineal con 7 zonas funcionales. El flujo principal va del acceso al resultado. Las pantallas secundarias son accesibles sin interrumpir el camino principal.",
    archNavCols: [
      { phase: "Entrada", screens: ["Splash screen", "Onboarding", "Login / Registro", "Verificación OTP"] },
      { phase: "Home", screens: ["Dashboard", "Notificaciones", "Mi Perfil", "Mi Wallet"] },
      { phase: "Juego", screens: ["Catálogo de sorteos", "Detalle del sorteo", "Reglas del juego"] },
      { phase: "Orden", screens: ["Selector de números", "Carrito", "Resumen de orden"] },
      { phase: "Pago", screens: ["Métodos de pago", "Checkout", "Autenticación (3DS)"] },
      { phase: "Confirmación", screens: ["Pantalla de éxito", "Ticket digital", "Compartir ticket"] },
      { phase: "Post-compra", screens: ["Mis boletos", "Resultados", "Reclamo de premio"] },
    ],
    archB3Title: "Fricciones y oportunidades",
    archB3Body: "El journey map identificó 7 momentos críticos donde la experiencia podía romperse. Cada fricción se convirtió en una decisión de diseño concreta.",
    archFrictionLabel: "Fricción",
    archOpportunityLabel: "Decisión de diseño",
    archFrictions: [
      { pain: "Confianza inicial en una plataforma desconocida", opp: "Diseño de legitimidad desde el primer contacto — marca, tono y onboarding estructurado" },
      { pain: "Fricción en el registro y verificación OTP", opp: "Flujo de acceso simplificado con verificación contextualizada" },
      { pain: "Reglas del juego poco claras antes de entrar", opp: "Jerarquía editorial en el catálogo — premio, fecha y mecánica visible desde el inicio" },
      { pain: "Dificultad para elegir los números correctos", opp: "Selector numérico interactivo con modo aleatorio como ruta alternativa" },
      { pain: "Desconfianza en la seguridad del proceso de pago", opp: "Checkout transparente con estados de carga explícitos y confirmación inmediata" },
      { pain: "Ticket difícil de localizar, guardar o compartir", opp: "Ticket digital prominente con QR y flujo de compartir nativo integrado" },
      { pain: "Proceso de reclamo de premios complejo e incierto", opp: "Pantalla de resultados estructurada con flujo de reclamo de paso único" },
    ],

    /* ── S4 — DESIGNING THE PUBLIC EXPERIENCE ── */
    s4Kicker: "04 — Experiencia Pública",
    s4Title: "Diseñando la experiencia pública",
    s4Body: "La experiencia pública debía equilibrar claridad, legitimidad y engagement. Necesitaba explicar el producto, reducir ambigüedad y hacer que la participación se sintiera comprensible y confiable. Las decisiones visuales y estructurales aquí estuvieron estrechamente ligadas a la comprensión y la confianza desde el primer contacto.",
    s4Placeholder1Hint: "Sitio web — vista general",
    s4Placeholder2Hint: "Landing / homepage — sección principal",
    s4Placeholder3Hint: "Flujo de producto / participación",

    /* ── S5 — DESIGNING THE ASSISTED RETAIL LAYER ── */
    s5Kicker: "05 — Retail y Canales",
    s5Title: "Diseñando la capa retail asistida",
    s5Body: "Uno de los aspectos más importantes del proyecto fue diseñar para interacciones asistidas y basadas en retail. Esto requería un tipo diferente de claridad: no solo simplicidad para el usuario, sino utilidad operativa en contextos reales de soporte, mediación y ejecución.",
    s5SubheadTitle: "Diseñando más allá del autoservicio",
    s5SubheadBody: "Los entornos retail introdujeron necesidades, ritmos y restricciones diferentes. El trabajo aquí se enfocó en hacer los flujos comprensibles, estructurados y viables en contextos asistidos.",
    s5Caption1: "Entrada y selección de producto",
    s5Caption2: "Confirmación y validación asistida",
    s5Caption3: "Transacción y recibo",
    s5Caption4: "Manejo de errores y soporte al operador",
    s5Placeholder1Hint: "Interfaz retail / vista POS",
    s5Placeholder2Hint: "Flujo — paso 01",
    s5Placeholder3Hint: "Flujo — paso 02",
    s5Placeholder4Hint: "Flujo — paso 03 / cierre",

    /* ── S6 — DESIGNING THE OPERATIONAL LAYER ── */
    s6Kicker: "06 — Operaciones",
    s6Title: "Diseñando la capa operacional",
    s6Body: "El ecosistema no podía depender solo del diseño orientado al cliente. La capa administrativa importaba porque soportaba la gestión diaria, la visibilidad interna y el control operativo. Diseñar esta capa con la misma rigurosidad que las superficies públicas fue parte de hacer el sistema coherente de extremo a extremo.",
    s6Placeholder1Hint: "Dashboard admin / panel de control",
    s6Placeholder2Hint: "Admin — lista / reportes / gestión",

    /* ── S7 — BUILDING COHERENCE ACROSS THE SYSTEM ── */
    s7Kicker: "07 — Sistema y Coherencia",
    s7Title: "Construyendo coherencia en el sistema",
    s7Body: "Dado que el proyecto se extendía a través de múltiples superficies, la consistencia no podía depender de decisiones de diseño repetidas manualmente. Una base sistémica fue necesaria para alinear patrones, lenguaje visual, módulos reutilizables y comportamiento de interfaz a través del ecosistema — incluyendo también las superficies de comunicación.",
    s7SubheadTitle: "Un sistema de comunicación coherente",
    s7SubheadBody: "Los mailings estructurados y las superficies de contenido extendieron el lenguaje del producto hacia la comunicación, reforzando confianza y coherencia de marca más allá de las interfaces centrales.",
    s7PlaceholderHint: "Design system — librería de componentes y fundamentos",

    /* ── S8 — ITERATION AND EVOLUTION ── */
    s8Kicker: "08 — Proceso",
    s8Title: "Iteración y evolución",
    s8Body: "El trabajo evolucionó a través de múltiples fases, referencias y direcciones de diseño. Mostrar esa evolución importa porque revela cómo el proyecto fue moldeado y refinado a lo largo del tiempo en lugar de aparecer como un resultado único y pulido.",
    s8SubheadTitle: "De la exploración temprana al ecosistema estructurado",
    s8PlaceholderHint: "Evolución — exploración temprana vs. dirección madura",

    /* ── S9 — WHAT THIS PROJECT REPRESENTS ── */
    s9Kicker: "09 — Reflexión",
    s9Title: "Qué representa este proyecto en mi práctica",
    s9Body: "LotoBola marcó un quiebre en mi trabajo. Empujó mi práctica más allá del diseño de interfaces hacia la orquestación de servicios, el encuadre de producto, el diseño operativo y el pensamiento sistémico. Más que cualquier otro proyecto, refleja cómo abordo problemas complejos de diseño hoy: a través de capas, equipos y puntos de contacto.",
    s9ClosingRest: "Sigue siendo la expresión más clara de mi transición hacia una práctica de diseño más senior, sistémica, ",
    s9ClosingAccent: "orientada a producto y servicio.",
    s9PlaceholderHint: "Visual de cierre — composición final del ecosistema",

  } : {
    /* ── HERO ── */
    heroKicker: "Selected Work — Case Study",
    heroBodyAccent: "Designing a lottery ecosystem",
    heroBodyRest: " across public experience, assisted retail channels, operations, and system.",
    heroBody2: "LotoBola is the clearest expression of how I work across layers: structuring product logic, designing coherent interfaces, and translating complex operational needs into connected experiences.",
    heroMetaRoleLabel: "Role",
    heroMetaRoleValue: "Product Designer / UX·UI / Service Design",
    heroMetaScopeLabel: "Scope",
    heroMetaScopeValue: "Public experience, retail flows, operational/admin layer, design system, communication",
    heroMetaFocusLabel: "Focus",
    heroMetaFocusValue: "Multi-surface ecosystem design — digital, assisted, and operational",
    heroMetaOutputLabel: "Output",
    heroMetaOutputValue: "Website, retail flows, admin tooling, design system foundations",
    heroPlaceholderHint: "Ecosystem overview",

    /* ── S2 — THE CASE IN ONE MINUTE ── */
    s2Kicker: "01 — Overview",
    s2Title: "The case in one minute",
    s2Body: "LotoBola was more than a digital product. It was an ecosystem with public-facing, assisted, operational, and administrative dimensions. The challenge was not only to make interfaces usable, but to build coherence across touchpoints, clarify the experience, and create foundations for scale.",
    s2Block1Title: "What it was",
    s2Block1Body: "A lottery ecosystem combining public entry points, assisted service flows, retail support, and operational logic.",
    s2Block2Title: "What I was solving",
    s2Block2Body: "A fragmented, multi-layered experience that needed to work across users, internal teams, and assisted environments.",
    s2Block3Title: "Why it mattered",
    s2Block3Body: "Because trust, clarity, operational viability, and scalability all depended on the system working as one connected experience.",
    s2PlaceholderHint: "Ecosystem diagram",

    /* ── S3 — THE CHALLENGE ── */
    s3Kicker: "02 — Challenge",
    s3Title: "The real challenge",
    s3Body: "This was never just a UI exercise. Designing for a lottery ecosystem meant dealing with trust, comprehension, participation flows, operational constraints, retail realities, and communication consistency over time. The problem was systemic: different surfaces, different actors, and different levels of assistance had to align into one experience logic.",
    s3CalloutAccent: "A lottery product is not just a screen problem.",
    s3CalloutRest: " It is a service problem, an operations problem, a communication problem, and a systems problem.",
    s3PlaceholderHint: "Challenge framing — ecosystem complexity",

    /* ── S3.5 — EXPERIENCE ARCHITECTURE ── */
    archKicker: "03 — Architecture",
    archTitle: "Experience architecture",
    archBody: "Before the interfaces, I structured how the service works. These artifacts document the participation logic, navigation structure, and friction points that informed every design decision.",
    archB1Title: "Service logic",
    archB1Body: "The service operates in 7 consecutive phases. Each involves user actions, visible touchpoints, and internal system processes. Coherence across these layers was the foundation of the design.",
    archPhases: ["Discovery", "Registration", "Exploration", "Order creation", "Payment", "Confirmation", "Results"],
    archServiceRows: [
      { layer: "User", items: "Downloads app → creates account → browses draws → picks numbers → pays → receives ticket → checks results" },
      { layer: "Interface", items: "Onboarding · Game catalog · Number selector · Checkout · Success screen · Digital ticket" },
      { layer: "System", items: "Registration validation · Ticket availability · Payment processing · Unique ticket generation · Certified draw" },
    ],
    archB2Title: "Navigation structure",
    archB2Body: "Navigation follows a linear axis with 7 functional zones. The main flow goes from access to result. Secondary screens remain accessible without interrupting the primary path.",
    archNavCols: [
      { phase: "Entry", screens: ["Splash screen", "Onboarding", "Login / Register", "OTP verification"] },
      { phase: "Home", screens: ["Dashboard", "Notifications", "My Profile", "My Wallet"] },
      { phase: "Game", screens: ["Game catalog", "Game detail", "Game rules"] },
      { phase: "Order", screens: ["Number selector", "Order cart", "Order summary"] },
      { phase: "Payment", screens: ["Payment methods", "Checkout", "3DS authentication"] },
      { phase: "Confirmation", screens: ["Success screen", "Digital ticket", "Share ticket"] },
      { phase: "Post-purchase", screens: ["My tickets", "Results", "Prize claim"] },
    ],
    archB3Title: "Friction points and opportunities",
    archB3Body: "The journey map identified 7 critical moments where the experience could break down. Each friction point became a concrete design decision.",
    archFrictionLabel: "Friction",
    archOpportunityLabel: "Design decision",
    archFrictions: [
      { pain: "Initial trust deficit with an unknown platform", opp: "Legitimacy framing from first contact — brand, tone, and structured onboarding" },
      { pain: "Registration and OTP verification friction", opp: "Simplified access flow with contextual verification" },
      { pain: "Game rules unclear before entering", opp: "Editorial hierarchy in catalog — prize, date, and mechanic visible from the start" },
      { pain: "Difficulty choosing the right numbers", opp: "Interactive number selector with random pick as an alternate path" },
      { pain: "Distrust in the security of the payment process", opp: "Transparent checkout with explicit loading states and immediate confirmation" },
      { pain: "Ticket hard to find, save, or share", opp: "Prominent digital ticket with QR and integrated native share flow" },
      { pain: "Complex and unclear prize claim process", opp: "Structured results screen with single-step claim flow" },
    ],

    /* ── S4 — DESIGNING THE PUBLIC EXPERIENCE ── */
    s4Kicker: "04 — Public Experience",
    s4Title: "Designing the public experience",
    s4Body: "The public experience had to balance clarity, legitimacy, and engagement. It needed to explain the product, reduce ambiguity, and make participation feel understandable and trustworthy. The visual and structural decisions here were closely tied to comprehension and confidence from the very first contact.",
    s4Placeholder1Hint: "Website — full overview",
    s4Placeholder2Hint: "Landing / homepage — main section",
    s4Placeholder3Hint: "Product flow / participation",

    /* ── S5 — DESIGNING THE ASSISTED RETAIL LAYER ── */
    s5Kicker: "05 — Retail & Channels",
    s5Title: "Designing the assisted retail layer",
    s5Body: "One of the most important aspects of the project was designing for assisted and retail-based interactions. This required a different kind of clarity: not only user-facing simplicity, but operational usefulness in real contexts of support, mediation, and execution.",
    s5SubheadTitle: "Designing beyond self-service",
    s5SubheadBody: "Retail environments introduced different needs, different rhythms, and different constraints. The work here focused on making flows understandable, structured, and viable in assisted contexts.",
    s5Caption1: "Entry and product selection",
    s5Caption2: "Confirmation and assisted validation",
    s5Caption3: "Transaction and receipt",
    s5Caption4: "Error handling and operator support",
    s5Placeholder1Hint: "Retail interface / POS overview",
    s5Placeholder2Hint: "Flow — step 01",
    s5Placeholder3Hint: "Flow — step 02",
    s5Placeholder4Hint: "Flow — step 03 / closing",

    /* ── S6 — DESIGNING THE OPERATIONAL LAYER ── */
    s6Kicker: "06 — Operations",
    s6Title: "Designing the operational layer",
    s6Body: "The ecosystem could not rely only on customer-facing design. The administrative layer mattered because it supported daily management, internal visibility, and operational control. Designing this layer with the same rigor as the public surfaces was part of making the system coherent end to end.",
    s6Placeholder1Hint: "Admin dashboard / control panel",
    s6Placeholder2Hint: "Admin — list view / reporting / management",

    /* ── S7 — BUILDING COHERENCE ACROSS THE SYSTEM ── */
    s7Kicker: "07 — System & Coherence",
    s7Title: "Building coherence across the system",
    s7Body: "Because the project extended across multiple surfaces, consistency could not depend on manually repeated design decisions. A system foundation was necessary to align patterns, visual language, reusable modules, and interface behavior across the ecosystem — including communication surfaces.",
    s7SubheadTitle: "A coherent communication layer",
    s7SubheadBody: "Structured email templates and content surfaces extended the product language into communication, reinforcing brand trust and coherence beyond the core interfaces.",
    s7PlaceholderHint: "Design system — component library and foundations",

    /* ── S8 — ITERATION AND EVOLUTION ── */
    s8Kicker: "08 — Process",
    s8Title: "Iteration and evolution",
    s8Body: "The work evolved through multiple phases, references, and design directions. Showing that evolution matters because it reveals how the project was shaped and refined over time rather than appearing as a single polished output.",
    s8SubheadTitle: "From early exploration to structured ecosystem",
    s8PlaceholderHint: "Evolution — early exploration vs. mature direction",

    /* ── S9 — WHAT THIS PROJECT REPRESENTS ── */
    s9Kicker: "09 — Reflection",
    s9Title: "What this project represents in my practice",
    s9Body: "LotoBola marked a shift in my work. It pushed my practice beyond interface-making into service orchestration, product framing, operational design, and systems thinking. More than any other project, it reflects how I approach complex design problems today: across layers, across teams, and across touchpoints.",
    s9ClosingRest: "It remains the clearest expression of my transition into a more senior, systemic, ",
    s9ClosingAccent: "product-and-service-oriented design practice.",
    s9PlaceholderHint: "Closing visual — final ecosystem composition",
  };

  return (
    <div className="cs-body">

      {/* ════════════════════════════════════════════
          S1 — HERO
          ════════════════════════════════════════════ */}
      <section className="cs-section cs-section--hero" id="hero">

        <div className="cs-hero-text">
          <Typography variant="micro" tone="muted">
            {c.heroKicker}
          </Typography>
          <Typography variant="h1">LotoBola</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.heroBodyAccent}</Accent>{c.heroBodyRest}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.heroBody2}
          </Typography>
        </div>

        <CasePlaceholder id="LB-HERO-01" ratio="hero"
          src="/images/lotobola/lb_hero_01.webp"
          alt="LotoBola — draw results management panel in a live lottery broadcast context" />

        <div className="cs-meta">
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaRoleLabel}</p>
            <p className="cs-meta__value">{c.heroMetaRoleValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaScopeLabel}</p>
            <p className="cs-meta__value">{c.heroMetaScopeValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaFocusLabel}</p>
            <p className="cs-meta__value">{c.heroMetaFocusValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaOutputLabel}</p>
            <p className="cs-meta__value">{c.heroMetaOutputValue}</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S2 — THE CASE IN ONE MINUTE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="overview">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s2Kicker}</Typography>
          <Typography variant="h2">{c.s2Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s2Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">{c.s2Block1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s2Block1Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s2Block2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s2Block2Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s2Block3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s2Block3Body}
              </Typography>
            </div>
          </div>
          <CasePlaceholder id="LB-OVERVIEW-01" ratio="landscape"
            src="/images/lotobola/lb_overview_01.webp"
            alt="LotoBola service ecosystem — user, touchpoints, retail mediation, operations, and continuity layers" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE CHALLENGE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="challenge">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s3Kicker}</Typography>
          <Typography variant="h2">{c.s3Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s3Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>{c.s3CalloutAccent}</Accent>{" "}
              {c.s3CalloutRest}
            </Typography>
          </div>
          <CasePlaceholder id="LB-CHALLENGE-01" ratio="landscape"
            src="/images/lotobola/lb_challenge_01.webp"
            alt="LotoBola challenge framing — ecosystem complexity and multi-surface scope" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3.5 — EXPERIENCE ARCHITECTURE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="architecture">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.archKicker}</Typography>
          <Typography variant="h2">{c.archTitle}</Typography>
          <Typography variant="bodyLg" tone="secondary">{c.archBody}</Typography>
        </div>
        <div className="cs-section-content">

          {/* Block 1 — Service logic */}
          <div className="lba-block">
            <div className="cs-subhead">
              <Typography variant="h3">{c.archB1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.archB1Body}</Typography>
            </div>
            <div className="lba-artifact">
              <div className="lba-phases" role="list" aria-label={c.archB1Title}>
                {c.archPhases.map((phase, i) => (
                  <div key={i} className="lba-phase" role="listitem">
                    <div className="lba-phase__dot">{String(i + 1).padStart(2, "0")}</div>
                    <span className="lba-phase__label">{phase}</span>
                  </div>
                ))}
              </div>
              <div className="lba-service-layers">
                {c.archServiceRows.map((row, i) => (
                  <div key={i} className="lba-service-row">
                    <span className="lba-service-row__layer">{row.layer}</span>
                    <span className="lba-service-row__items">{row.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 2 — Navigation structure */}
          <div className="lba-block">
            <div className="cs-subhead">
              <Typography variant="h3">{c.archB2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.archB2Body}</Typography>
            </div>
            <div className="lba-artifact lba-artifact--nav">
              <div className="lba-nav" role="list" aria-label={c.archB2Title}>
                {c.archNavCols.map((col, i) => (
                  <div key={i} className="lba-nav-col" role="listitem">
                    <span className="lba-nav-col__label">{col.phase}</span>
                    <ul className="lba-nav-col__screens">
                      {col.screens.map((screen, j) => (
                        <li key={j}>{screen}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 3 — Friction & opportunities */}
          <div className="lba-block">
            <div className="cs-subhead">
              <Typography variant="h3">{c.archB3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.archB3Body}</Typography>
            </div>
            <div className="lba-artifact">
              <div className="lba-friction">
                <div className="lba-friction__header">
                  <span>{c.archFrictionLabel}</span>
                  <span className="lba-friction__col--opp">{c.archOpportunityLabel}</span>
                </div>
                {c.archFrictions.map((row, i) => (
                  <div key={i} className="lba-friction__row">
                    <span className="lba-friction__pain">{row.pain}</span>
                    <span className="lba-friction__opp">{row.opp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — DESIGNING THE PUBLIC EXPERIENCE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="public">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <CasePlaceholder id="LB-WEB-01" ratio="landscape"
            src="/images/lotobola/lb_web_01.webp"
            alt="LotoBola public website and product ecosystem — digital and physical touchpoints" />
          <div className="cs-split">
            <CasePlaceholder id="LB-WEB-02" ratio="portrait"
              src="/images/lotobola/lb_web_02.webp"
              alt="LotoBola website — homepage and main product section" />
            <CasePlaceholder id="LB-WEB-03" ratio="portrait"
              src="/images/lotobola/lb_web_03.webp"
              alt="LotoBola website — product flow and participation experience" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — DESIGNING THE ASSISTED RETAIL LAYER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="retail">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s5Kicker}</Typography>
          <Typography variant="h2">{c.s5Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s5Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s5SubheadTitle}</Typography>
            <Typography variant="bodyLg" tone="secondary">
              {c.s5SubheadBody}
            </Typography>
          </div>
          <CasePlaceholder id="LB-RETAIL-01" ratio="wide"
            src="/images/lotobola/lb_retail_01.webp"
            alt="LotoBola retail interface — full POS and assisted channel overview" />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              <CasePlaceholder id="LB-RETAIL-02" ratio="portrait"
                src="/images/lotobola/lb_retail_02.webp"
                alt="LotoBola retail — step 1: product entry and selection" />
              <p className="cs-caption">{c.s5Caption1}</p>
            </div>
            <div className="cs-supporting-item">
              <CasePlaceholder id="LB-RETAIL-03" ratio="portrait"
                src="/images/lotobola/lb_retail_03.webp"
                alt="LotoBola retail — step 2: confirmation and assisted validation" />
              <p className="cs-caption">{c.s5Caption2}</p>
            </div>
            <div className="cs-supporting-item">
              <CasePlaceholder id="LB-RETAIL-04" ratio="portrait"
                src="/images/lotobola/lb_retail_04.webp"
                alt="LotoBola retail — step 3: transaction and receipt" />
              <p className="cs-caption">{c.s5Caption3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — DESIGNING THE OPERATIONAL LAYER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="admin">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <CasePlaceholder id="LB-ADMIN-01" ratio="landscape"
            src="/images/lotobola/lb_admin_01.webp"
            alt="LotoBola admin — draw results control panel" />
          <CasePlaceholder id="LB-ADMIN-02" ratio="landscape"
            src="/images/lotobola/lb_admin_02.webp"
            alt="LotoBola admin — tickets, inventory, and operational management views" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — BUILDING COHERENCE ACROSS THE SYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="system">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <CasePlaceholder id="LB-DS-01" ratio="landscape"
            src="/images/lotobola/lb_ds_01.webp"
            alt="LotoBola design system — typography, colors, components, and Figma foundation" />
          <div className="cs-subhead">
            <Typography variant="h3">{c.s7SubheadTitle}</Typography>
            <Typography variant="bodyLg" tone="secondary">
              {c.s7SubheadBody}
            </Typography>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — ITERATION AND EVOLUTION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="iteration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s8Kicker}</Typography>
          <Typography variant="h2">{c.s8Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s8Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s8SubheadTitle}</Typography>
          </div>
          <CasePlaceholder id="LB-ITER-01" ratio="wide"
            src="/images/lotobola/lb_iter_01.webp"
            alt="LotoBola design iteration — early exploration to structured mature ecosystem" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — WHAT THIS PROJECT REPRESENTS IN MY PRACTICE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="reflection">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s9Kicker}</Typography>
          <Typography variant="h2">{c.s9Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s9Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <Typography variant="bodyLg" tone="secondary" as="p">
            {c.s9ClosingRest}
            <Accent>{c.s9ClosingAccent}</Accent>
          </Typography>
          <CasePlaceholder id="LB-CLOSING-01" ratio="landscape"
            src="/images/lotobola/lb_closing_01.webp"
            alt="LotoBola — closing ecosystem composition" />
        </div>
      </section>

    </div>
  );
}
