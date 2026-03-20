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
}

function CasePlaceholder({ id, ratio = "landscape", caption, hint, className }: CasePlaceholderProps) {
  return (
    // asset-slot: {id} — swap this <div> for <img src="..." alt="..." /> or <video>
    <figure className={cn("cs-ph-wrap", className)}>
      <div
        className={cn("cs-placeholder", `cs-placeholder--${ratio}`)}
        aria-label={`Visual placeholder: ${id}`}
        role="img"
      >
        <span className="cs-placeholder__id">{id}</span>
        {hint && <span className="cs-placeholder__hint">{hint}</span>}
      </div>
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

    /* ── S4 — DESIGNING THE PUBLIC EXPERIENCE ── */
    s4Kicker: "03 — Experiencia Pública",
    s4Title: "Diseñando la experiencia pública",
    s4Body: "La experiencia pública debía equilibrar claridad, legitimidad y engagement. Necesitaba explicar el producto, reducir ambigüedad y hacer que la participación se sintiera comprensible y confiable. Las decisiones visuales y estructurales aquí estuvieron estrechamente ligadas a la comprensión y la confianza desde el primer contacto.",
    s4Placeholder1Hint: "Sitio web — vista general",
    s4Placeholder2Hint: "Landing / homepage — sección principal",
    s4Placeholder3Hint: "Flujo de producto / participación",

    /* ── S5 — DESIGNING THE ASSISTED RETAIL LAYER ── */
    s5Kicker: "04 — Retail y Canales",
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
    s6Kicker: "05 — Operaciones",
    s6Title: "Diseñando la capa operacional",
    s6Body: "El ecosistema no podía depender solo del diseño orientado al cliente. La capa administrativa importaba porque soportaba la gestión diaria, la visibilidad interna y el control operativo. Diseñar esta capa con la misma rigurosidad que las superficies públicas fue parte de hacer el sistema coherente de extremo a extremo.",
    s6Placeholder1Hint: "Dashboard admin / panel de control",
    s6Placeholder2Hint: "Admin — lista / reportes / gestión",

    /* ── S7 — BUILDING COHERENCE ACROSS THE SYSTEM ── */
    s7Kicker: "06 — Sistema y Coherencia",
    s7Title: "Construyendo coherencia en el sistema",
    s7Body: "Dado que el proyecto se extendía a través de múltiples superficies, la consistencia no podía depender de decisiones de diseño repetidas manualmente. Una base sistémica fue necesaria para alinear patrones, lenguaje visual, módulos reutilizables y comportamiento de interfaz a través del ecosistema — incluyendo también las superficies de comunicación.",
    s7SubheadTitle: "Un sistema de comunicación coherente",
    s7SubheadBody: "Los mailings estructurados y las superficies de contenido extendieron el lenguaje del producto hacia la comunicación, reforzando confianza y coherencia de marca más allá de las interfaces centrales.",
    s7PlaceholderHint: "Design system — librería de componentes y fundamentos",

    /* ── S8 — ITERATION AND EVOLUTION ── */
    s8Kicker: "07 — Proceso",
    s8Title: "Iteración y evolución",
    s8Body: "El trabajo evolucionó a través de múltiples fases, referencias y direcciones de diseño. Mostrar esa evolución importa porque revela cómo el proyecto fue moldeado y refinado a lo largo del tiempo en lugar de aparecer como un resultado único y pulido.",
    s8SubheadTitle: "De la exploración temprana al ecosistema estructurado",
    s8PlaceholderHint: "Evolución — exploración temprana vs. dirección madura",

    /* ── S9 — WHAT THIS PROJECT REPRESENTS ── */
    s9Kicker: "08 — Reflexión",
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

    /* ── S4 — DESIGNING THE PUBLIC EXPERIENCE ── */
    s4Kicker: "03 — Public Experience",
    s4Title: "Designing the public experience",
    s4Body: "The public experience had to balance clarity, legitimacy, and engagement. It needed to explain the product, reduce ambiguity, and make participation feel understandable and trustworthy. The visual and structural decisions here were closely tied to comprehension and confidence from the very first contact.",
    s4Placeholder1Hint: "Website — full overview",
    s4Placeholder2Hint: "Landing / homepage — main section",
    s4Placeholder3Hint: "Product flow / participation",

    /* ── S5 — DESIGNING THE ASSISTED RETAIL LAYER ── */
    s5Kicker: "04 — Retail & Channels",
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
    s6Kicker: "05 — Operations",
    s6Title: "Designing the operational layer",
    s6Body: "The ecosystem could not rely only on customer-facing design. The administrative layer mattered because it supported daily management, internal visibility, and operational control. Designing this layer with the same rigor as the public surfaces was part of making the system coherent end to end.",
    s6Placeholder1Hint: "Admin dashboard / control panel",
    s6Placeholder2Hint: "Admin — list view / reporting / management",

    /* ── S7 — BUILDING COHERENCE ACROSS THE SYSTEM ── */
    s7Kicker: "06 — System & Coherence",
    s7Title: "Building coherence across the system",
    s7Body: "Because the project extended across multiple surfaces, consistency could not depend on manually repeated design decisions. A system foundation was necessary to align patterns, visual language, reusable modules, and interface behavior across the ecosystem — including communication surfaces.",
    s7SubheadTitle: "A coherent communication layer",
    s7SubheadBody: "Structured email templates and content surfaces extended the product language into communication, reinforcing brand trust and coherence beyond the core interfaces.",
    s7PlaceholderHint: "Design system — component library and foundations",

    /* ── S8 — ITERATION AND EVOLUTION ── */
    s8Kicker: "07 — Process",
    s8Title: "Iteration and evolution",
    s8Body: "The work evolved through multiple phases, references, and design directions. Showing that evolution matters because it reveals how the project was shaped and refined over time rather than appearing as a single polished output.",
    s8SubheadTitle: "From early exploration to structured ecosystem",
    s8PlaceholderHint: "Evolution — early exploration vs. mature direction",

    /* ── S9 — WHAT THIS PROJECT REPRESENTS ── */
    s9Kicker: "08 — Reflection",
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

        {/* asset-slot: LB-HERO-01 — Replace with ecosystem overview / composed hero image */}
        <CasePlaceholder id="LB-HERO-01" ratio="hero" hint={c.heroPlaceholderHint} />

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
          {/* asset-slot: LB-OVERVIEW-01 — Replace with ecosystem diagram / service map */}
          <CasePlaceholder id="LB-OVERVIEW-01" ratio="landscape" hint={c.s2PlaceholderHint} />
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
          {/* asset-slot: LB-CHALLENGE-01 — Replace with challenge framing / complexity map */}
          <CasePlaceholder id="LB-CHALLENGE-01" ratio="landscape" hint={c.s3PlaceholderHint} />
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
          {/* asset-slot: LB-WEB-01 — Replace with full website showcase / hero screen */}
          <CasePlaceholder id="LB-WEB-01" ratio="landscape" hint={c.s4Placeholder1Hint} />
          <div className="cs-split">
            {/* asset-slot: LB-WEB-02 — Replace with homepage or landing section detail */}
            <CasePlaceholder id="LB-WEB-02" ratio="portrait" hint={c.s4Placeholder2Hint} />
            {/* asset-slot: LB-WEB-03 — Replace with product explanation or participation flow */}
            <CasePlaceholder id="LB-WEB-03" ratio="portrait" hint={c.s4Placeholder3Hint} />
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
          {/* asset-slot: LB-RETAIL-01 — Replace with wide retail interface or POS overview */}
          <CasePlaceholder id="LB-RETAIL-01" ratio="wide" hint={c.s5Placeholder1Hint} />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-02 — Replace with retail flow step 1 */}
              <CasePlaceholder id="LB-RETAIL-02" ratio="portrait" hint={c.s5Placeholder2Hint} />
              <p className="cs-caption">{c.s5Caption1}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-03 — Replace with retail flow step 2 */}
              <CasePlaceholder id="LB-RETAIL-03" ratio="portrait" hint={c.s5Placeholder3Hint} />
              <p className="cs-caption">{c.s5Caption2}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-04 — Replace with retail flow step 3 / closing */}
              <CasePlaceholder id="LB-RETAIL-04" ratio="portrait" hint={c.s5Placeholder4Hint} />
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
          {/* asset-slot: LB-ADMIN-01 — Replace with featured admin dashboard or control panel */}
          <CasePlaceholder id="LB-ADMIN-01" ratio="landscape" hint={c.s6Placeholder1Hint} />
          {/* asset-slot: LB-ADMIN-02 — Replace with admin list view, reporting, or data table */}
          <CasePlaceholder id="LB-ADMIN-02" ratio="landscape" hint={c.s6Placeholder2Hint} />
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
          {/* asset-slot: LB-DS-01 — Replace with design system overview / component library spread */}
          <CasePlaceholder id="LB-DS-01" ratio="landscape" hint={c.s7PlaceholderHint} />
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
          {/* asset-slot: LB-ITER-01 — Replace with evolution spread: early vs. mature direction */}
          <CasePlaceholder id="LB-ITER-01" ratio="wide" hint={c.s8PlaceholderHint} />
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
          {/* asset-slot: LB-CLOSING-01 — Replace with strong closing visual / composed final image */}
          <CasePlaceholder id="LB-CLOSING-01" ratio="landscape" hint={c.s9PlaceholderHint} />
        </div>
      </section>

    </div>
  );
}
