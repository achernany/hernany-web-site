import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import { useI18n } from "../i18n";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "EVA-HERO-01").
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
   EvaSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "eva".
   ============================================================ */

export function EvaSections() {
  const { lang } = useI18n();

  const c = lang === "es" ? {
    /* ── HERO ── */
    heroKicker: "Trabajo Seleccionado — Caso de Estudio",
    heroAccent: "Humanizando la experiencia del campus virtual",
    heroAccentRest: " a través de una UX guiada y orientada a la comunidad.",
    heroBody: "EVA fue parte de un esfuerzo más amplio para evolucionar un campus virtual desde una plataforma académica funcional hacia un entorno digital más humano, más guiado y más conectado. Mi contribución se centró en login, recuperación de contraseña y especialmente notificaciones — tratándolos no como pantallas aisladas, sino como momentos esenciales en cómo los estudiantes se orientan dentro de la vida académica.",
    heroMetaRoleLabel: "Rol",
    heroMetaRoleValue: "Líder UX/UI — flujos asignados",
    heroMetaScopeLabel: "Alcance",
    heroMetaScopeValue: "Login, recuperación de contraseña, sistema de notificaciones, prototipado, testing y handoff",
    heroMetaFocusLabel: "Enfoque",
    heroMetaFocusValue: "Humanizar la experiencia del campus virtual a través de acceso guiado y comunicación más clara",
    heroMetaInstitutionLabel: "Institución",
    heroMetaInstitutionValue: "InLearning — IDAT, ZEGEL, IPAE, Corriente Alterna",
    heroPlaceholderHint: "Vista general de la plataforma EVA",

    /* ── S2 — THE CASE IN ONE MINUTE ── */
    s2Kicker: "01 — Panorama",
    s2Title: "El caso en un minuto",
    s2Body: "EVA era una plataforma de campus virtual utilizada en los institutos de InLearning en Perú. Originalmente moldeada por la urgencia de la educación virtual durante la pandemia, luego se convirtió en el foco de un esfuerzo de rediseño más amplio: hacer que la plataforma se sintiera más coherente, más humana y más alineada con la realidad social y académica de la vida en el campus.",
    s2Block1Title: "Qué era",
    s2Block1Body: "Una plataforma de campus virtual para estudiantes, docentes y personal académico en múltiples instituciones.",
    s2Block2Title: "Qué cambió",
    s2Block2Body: "El rediseño movió partes clave de la experiencia desde un modelo puramente funcional hacia un entorno digital más guiado y orientado a la comunidad.",
    s2Block3Title: "Por qué importaba",
    s2Block3Body: "Porque las plataformas académicas no son solo herramientas para tareas. También moldean la orientación, la pertenencia y el tono emocional del aprendizaje.",
    s2PlaceholderHint: "Vista general de la plataforma o diagrama del sistema",

    /* ── S3 — THE THESIS ── */
    s3Kicker: "02 — Tesis",
    s3Title: "La tesis",
    s3Body: "La idea central detrás del rediseño no era simplemente mejorar la usabilidad en flujos aislados. Era hacer que el campus virtual se sintiera más como un campus real: un lugar donde los estudiantes son guiados, informados, conectados y continuamente orientados en vez de dejados solos dentro de una interfaz administrativa fría.",
    s3Callout: "El objetivo no era solo hacer EVA más fácil de usar. Era hacer que se sintiera más humano.",
    s3PlaceholderHint: "Concepto o visión — campus guiado vs. portal frío",

    /* ── S4 — MY ROLE AND PROCESS ── */
    s4Kicker: "03 — Rol y Proceso",
    s4Title: "Mi rol y proceso",
    s4Body: "Lideré el trabajo en mis flujos asignados a lo largo de la síntesis de investigación, construcción de hipótesis, validación, definición UX/UI, prototipado, testing con usuarios y handoff final. El equipo interno ya había realizado descubrimiento sustancial; a partir de ahí, el trabajo avanzó desde baja fidelidad hasta propuestas de alta fidelidad testeadas y listas para implementación.",
    s4Block1Label: "Investigación y encuadre",
    s4Block1Body: "Revisar hallazgos internos, definir hipótesis y determinar la dirección correcta para cada flujo.",
    s4Block2Label: "Diseño UX y UI",
    s4Block2Body: "Traducir la visión de plataforma más amplia en decisiones de interfaz usables y consistentes.",
    s4Block3Label: "Validación e iteración",
    s4Block3Body: "Testear ideas con usuarios, refinar propuestas y alinear decisiones con stakeholders internos.",
    s4Block4Label: "Coordinación entre equipos",
    s4Block4Body: "Trabajar con equipos paralelos y la contraparte interna para mantener la experiencia alineada a través de la plataforma.",
    s4PlaceholderHint: "Proceso — diagrama de fases o referencia de proceso",

    /* ── S5 — DESIGNING ACCESS ── */
    s5Kicker: "04 — Acceso",
    s5Title: "Diseñando el acceso",
    s5Body: "El login y la recuperación de contraseña fueron tratados como capas de coherencia, no como momentos de reinvención. La versión anterior se sentía visualmente débil e institucionalmente inconsistente. El rediseño se enfocó en claridad, tono institucional más sólido y alineación con el lenguaje visual del resto de la plataforma.",
    s5SubheadTitle: "Patrones familiares, rediseñados para coherencia y tono",
    s5SubheadBody: "EVA servía a diferentes instituciones con identidades distintas. La experiencia de acceso necesitaba ser lo suficientemente estandarizada para ser coherente, pero lo suficientemente flexible para preservar el sentido de identidad de cada marca.",
    s5Login1Hint: "Rediseño de login — vista principal",
    s5Login1Caption: "Login redesign",
    s5Recovery1Hint: "Flujo de recuperación de contraseña",
    s5Recovery1Caption: "Password recovery",

    /* ── S6 — THE CORE INTERVENTION: NOTIFICATIONS ── */
    s6Kicker: "05 — Intervención Central",
    s6Title: "La intervención central: notificaciones",
    s6Body: "Las notificaciones se convirtieron en la parte más estratégica de mi contribución porque abordaban una brecha real en cómo la plataforma se comunicaba con los estudiantes. Antes de esta intervención, no existía un espacio asincrónico claro donde la información académica, financiera e institucional pudiera llegar de manera estructurada, visible y manejable.",
    s6Callout: "Las notificaciones no eran un complemento funcional. Eran una nueva capa de comunicación entre la institución y el estudiante.",
    s6SystemBody: "El sistema debía soportar muchos tipos de información sin abrumar al usuario. Alertas académicas, calificaciones, recordatorios de pago, fechas límite y mensajes institucionales competían por atención. El diseño estableció jerarquía, estados de leído/no leído, categorización y lógica de preferencias — balanceando las necesidades de alcance comunicacional del negocio con el control del usuario.",
    s6Notif1Hint: "Vista compuesta principal del sistema de notificaciones",
    s6Notif2Hint: "Estados de leído / no leído y jerarquía",
    s6Notif3Hint: "Categorías, vacío y lógica de preferencias",

    /* ── S7 — HUMANIZING THE PLATFORM ── */
    s7Kicker: "06 — Tono y Guía",
    s7Title: "Humanizando la plataforma",
    s7Body: "Una parte clave del rediseño fue hacer que EVA se sintiera menos mecánica y más de apoyo. Esto se reflejó no solo en la estructura de la interfaz, sino también en el tono de voz, la lógica de orientación y la idea de EVA como una presencia más guiadora dentro del campus digital. En educación, la confusión y la distancia pueden convertir rápidamente una plataforma en una fuente de frustración. Pequeños momentos — cómo un estudiante inicia sesión, recibe información o entiende qué hacer a continuación — contribuyen directamente a esa experiencia emocional más amplia.",
    s7PlaceholderHint: "Tono y guía — voz de la plataforma o momento de orientación",

    /* ── S8 — BEFORE AND AFTER ── */
    s8Kicker: "07 — Transformación",
    s8Title: "Antes y después",
    s8Body: "El rediseño mejoró la claridad, el tono institucional, la consistencia visual y la capacidad del usuario para entender qué requería atención. Las notificaciones en particular crearon una capa de comunicación más clara que ayudó a los estudiantes a mantenerse informados sin depender de canales desconectados. El resultado fue una plataforma que se sentía más madura, más coordinada y más de apoyo en las rutinas cotidianas de la vida académica.",
    s8Before1Hint: "Antes — estado anterior del login o acceso",
    s8Before1Caption: "Antes",
    s8After1Hint: "Después — rediseño del login",
    s8After1Caption: "Después",
    s8Before2Hint: "Antes — sin capa de notificaciones",
    s8Before2Caption: "Antes",
    s8After2Hint: "Después — sistema de notificaciones",
    s8After2Caption: "Después",

    /* ── S9 — WHAT THIS PROJECT REPRESENTS ── */
    s9Kicker: "08 — Reflexión",
    s9Title: "Qué representa este proyecto en mi práctica",
    s9Body: "EVA refleja una parte importante de mi práctica de diseño: trabajar en la intersección de educación, comportamiento humano, sistemas de interfaz y pensamiento de producto. Es un caso donde el UX no fue solo sobre completar tareas, sino sobre hacer que un entorno digital se sienta más orientado, más relacional y más alineado con la realidad vivida de sus usuarios.",
    s9ClosingRest: "Es uno de los ejemplos más claros de cómo abordo el diseño como estructura funcional y ",
    s9ClosingAccent: "mediación humana.",
    s9PlaceholderHint: "Visual de cierre — composición final de la plataforma",

  } : {
    /* ── HERO ── */
    heroKicker: "Selected Work — Case Study",
    heroAccent: "Humanizing the virtual campus experience",
    heroAccentRest: " through guided, community-aware UX.",
    heroBody: "EVA was part of a broader effort to evolve a virtual campus from a functional academic platform into a more human, more guided, and more connected digital environment. My contribution focused on login, password recovery, and especially notifications — treating them not as isolated screens, but as essential moments in how students orient themselves inside academic life.",
    heroMetaRoleLabel: "Role",
    heroMetaRoleValue: "UX/UI Lead — assigned streams",
    heroMetaScopeLabel: "Scope",
    heroMetaScopeValue: "Login, password recovery, notification system, prototyping, testing, and handoff",
    heroMetaFocusLabel: "Focus",
    heroMetaFocusValue: "Humanizing the virtual campus experience through guided access and clearer communication",
    heroMetaInstitutionLabel: "Institution",
    heroMetaInstitutionValue: "InLearning — IDAT, ZEGEL, IPAE, Corriente Alterna",
    heroPlaceholderHint: "EVA platform overview",

    /* ── S2 — THE CASE IN ONE MINUTE ── */
    s2Kicker: "01 — Overview",
    s2Title: "The case in one minute",
    s2Body: "EVA was a virtual campus platform used across InLearning Institutes in Peru. Originally shaped by the urgency of pandemic-driven virtual education, it later became the focus of a broader redesign effort: making the platform feel more coherent, more human, and more aligned with the social and academic reality of campus life.",
    s2Block1Title: "What it was",
    s2Block1Body: "A virtual campus platform for students, teachers, and academic staff across multiple institutions.",
    s2Block2Title: "What changed",
    s2Block2Body: "The redesign moved key parts of the experience away from a purely functional model toward a more guided and community-aware digital environment.",
    s2Block3Title: "Why it mattered",
    s2Block3Body: "Because academic platforms are not only tools for tasks. They also shape orientation, belonging, and the emotional tone of learning.",
    s2PlaceholderHint: "Platform overview or system diagram",

    /* ── S3 — THE THESIS ── */
    s3Kicker: "02 — Thesis",
    s3Title: "The thesis",
    s3Body: "The central idea behind the redesign was not simply to improve usability in isolated flows. It was to make the virtual campus feel more like a real campus: a place where students are guided, informed, connected, and continuously oriented — rather than left alone inside a cold administrative interface.",
    s3Callout: "The goal was not only to make EVA easier to use. It was to make it feel more human.",
    s3PlaceholderHint: "Concept or vision — guided campus vs. cold portal",

    /* ── S4 — MY ROLE AND PROCESS ── */
    s4Kicker: "03 — Role & Process",
    s4Title: "My role and process",
    s4Body: "I led the work across my assigned streams through research synthesis, hypothesis building, validation, UX/UI definition, prototyping, user testing, and implementation-ready handoff. The internal team had already done substantial discovery work; from there, the work moved from low-fidelity through to tested, high-fidelity proposals.",
    s4Block1Label: "Research and framing",
    s4Block1Body: "Review internal findings, define hypotheses, and determine the right direction for each flow.",
    s4Block2Label: "UX and UI design",
    s4Block2Body: "Translate the broader platform vision into usable, consistent interface decisions.",
    s4Block3Label: "Validation and iteration",
    s4Block3Body: "Test ideas with users, refine proposals, and align decisions with internal stakeholders.",
    s4Block4Label: "Cross-team coordination",
    s4Block4Body: "Work with parallel teams and the internal counterpart to keep the experience aligned across the platform.",
    s4PlaceholderHint: "Process — phase diagram or process reference",

    /* ── S5 — DESIGNING ACCESS ── */
    s5Kicker: "04 — Access",
    s5Title: "Designing access",
    s5Body: "Login and password recovery were treated as coherence layers, not reinvention moments. The previous version felt visually weak and institutionally inconsistent. The redesign focused on clarity, stronger institutional tone, and alignment with the platform's broader visual language.",
    s5SubheadTitle: "Familiar patterns, redesigned for coherence and tone",
    s5SubheadBody: "EVA served different institutions with distinct identities. The access experience needed to be standardized enough to feel coherent, yet flexible enough to preserve each brand's sense of identity.",
    s5Login1Hint: "Login redesign — main view",
    s5Login1Caption: "Login redesign",
    s5Recovery1Hint: "Password recovery flow",
    s5Recovery1Caption: "Password recovery",

    /* ── S6 — THE CORE INTERVENTION: NOTIFICATIONS ── */
    s6Kicker: "05 — Core Intervention",
    s6Title: "The core intervention: notifications",
    s6Body: "Notifications became the most strategic part of my contribution because they addressed a real gap in how the platform communicated with students. Before this intervention, there was no clear asynchronous space where academic, financial, and institutional information could reach users in a structured, visible, and manageable way.",
    s6Callout: "Notifications were not a functional add-on. They were a new communication layer between the institution and the student.",
    s6SystemBody: "The system had to support many types of information without overwhelming the user. Academic alerts, grades, payment reminders, deadlines, and institutional messages competed for attention. The design established hierarchy, read/unread states, categorization, and preference logic — balancing the business's communication reach needs with genuine user control.",
    s6Notif1Hint: "Notification system — main composed view",
    s6Notif2Hint: "Read / unread states and hierarchy",
    s6Notif3Hint: "Categories, empty state, and preference logic",

    /* ── S7 — HUMANIZING THE PLATFORM ── */
    s7Kicker: "06 — Tone & Guidance",
    s7Title: "Humanizing the platform",
    s7Body: "A key part of the redesign was making EVA feel less mechanical and more supportive. This showed not only in interface structure, but also in tone of voice, guidance logic, and the idea of EVA as a more orienting presence inside the digital campus. In education, confusion and distance can quickly turn a platform into a source of frustration. Small moments — how a student logs in, receives information, or understands what to do next — contribute directly to that broader emotional experience.",
    s7PlaceholderHint: "Tone and guidance — platform voice or orientation moment",

    /* ── S8 — BEFORE AND AFTER ── */
    s8Kicker: "07 — Transformation",
    s8Title: "Before and after",
    s8Body: "The redesign improved clarity, institutional tone, visual consistency, and the user's ability to understand what required attention. Notifications in particular created a clearer communication layer that helped students stay informed without relying on disconnected channels. The result was a platform that felt more mature, more coordinated, and more supportive in the everyday rhythms of academic life.",
    s8Before1Hint: "Before — previous login or access state",
    s8Before1Caption: "Before",
    s8After1Hint: "After — login redesign",
    s8After1Caption: "After",
    s8Before2Hint: "Before — no notification layer",
    s8Before2Caption: "Before",
    s8After2Hint: "After — notification system",
    s8After2Caption: "After",

    /* ── S9 — WHAT THIS PROJECT REPRESENTS ── */
    s9Kicker: "08 — Reflection",
    s9Title: "What this project represents in my practice",
    s9Body: "EVA reflects an important part of my design practice: working at the intersection of education, human behavior, interface systems, and product thinking. It is a case where UX was not only about completing tasks, but about making a digital environment feel more oriented, more relational, and more aligned with the lived reality of its users.",
    s9ClosingRest: "It remains one of the clearest examples of how I approach design as both functional structure and ",
    s9ClosingAccent: "human mediation.",
    s9PlaceholderHint: "Closing visual — final platform composition",
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
          <Typography variant="h1">EVA</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.heroAccent}</Accent>{c.heroAccentRest}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.heroBody}
          </Typography>
        </div>

        {/* asset-slot: EVA-HERO-01 — Replace with platform hero / composed opening visual */}
        <CasePlaceholder id="EVA-HERO-01" ratio="hero" hint={c.heroPlaceholderHint} />

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
            <p className="cs-meta__label">{c.heroMetaInstitutionLabel}</p>
            <p className="cs-meta__value">{c.heroMetaInstitutionValue}</p>
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
              <Typography variant="bodyMd" tone="secondary">{c.s2Block1Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s2Block2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s2Block2Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s2Block3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s2Block3Body}</Typography>
            </div>
          </div>
          {/* asset-slot: EVA-OVERVIEW-01 — Replace with platform overview or system diagram */}
          <CasePlaceholder id="EVA-OVERVIEW-01" ratio="landscape" hint={c.s2PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE THESIS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="thesis">
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
              <Accent>{c.s3Callout}</Accent>
            </Typography>
          </div>
          {/* asset-slot: EVA-THESIS-01 — Replace with concept visual / guided campus vs. cold portal */}
          <CasePlaceholder id="EVA-THESIS-01" ratio="landscape" hint={c.s3PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — MY ROLE AND PROCESS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="process">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">{c.s4Block1Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s4Block1Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s4Block2Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s4Block2Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s4Block3Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s4Block3Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s4Block4Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s4Block4Body}</Typography>
            </div>
          </div>
          {/* asset-slot: EVA-PROCESS-01 — Replace with process diagram or phase reference */}
          <CasePlaceholder id="EVA-PROCESS-01" ratio="landscape" hint={c.s4PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — DESIGNING ACCESS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="access">
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
            <Typography variant="bodyLg" tone="secondary">{c.s5SubheadBody}</Typography>
          </div>
          <div className="cs-split">
            {/* asset-slot: EVA-LOGIN-01 — Replace with login redesign main view */}
            <CasePlaceholder id="EVA-LOGIN-01" ratio="portrait" caption={c.s5Login1Caption} hint={c.s5Login1Hint} />
            {/* asset-slot: EVA-RECOVERY-01 — Replace with password recovery flow */}
            <CasePlaceholder id="EVA-RECOVERY-01" ratio="portrait" caption={c.s5Recovery1Caption} hint={c.s5Recovery1Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — THE CORE INTERVENTION: NOTIFICATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="notifications">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>{c.s6Callout}</Accent>
            </Typography>
          </div>
          {/* asset-slot: EVA-NOTIF-01 — Replace with main composed notification system view */}
          <CasePlaceholder id="EVA-NOTIF-01" ratio="wide" hint={c.s6Notif1Hint} />
          <Typography variant="bodyLg" tone="secondary" as="p">
            {c.s6SystemBody}
          </Typography>
          <div className="cs-split">
            {/* asset-slot: EVA-NOTIF-02 — Replace with read/unread states and hierarchy detail */}
            <CasePlaceholder id="EVA-NOTIF-02" ratio="portrait" hint={c.s6Notif2Hint} />
            {/* asset-slot: EVA-NOTIF-03 — Replace with categories, empty state, preference logic */}
            <CasePlaceholder id="EVA-NOTIF-03" ratio="portrait" hint={c.s6Notif3Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — HUMANIZING THE PLATFORM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="tone">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: EVA-TONE-01 — Replace with tone/guidance visual: platform voice or orientation moment */}
          <CasePlaceholder id="EVA-TONE-01" ratio="landscape" hint={c.s7PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — BEFORE AND AFTER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="transformation">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s8Kicker}</Typography>
          <Typography variant="h2">{c.s8Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s8Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            {/* asset-slot: EVA-BEFOREAFTER-01 — Replace with before/after login comparison */}
            <CasePlaceholder id="EVA-BEFOREAFTER-01" ratio="landscape" caption={c.s8Before1Caption} hint={c.s8Before1Hint} />
            <CasePlaceholder id="EVA-BEFOREAFTER-01" ratio="landscape" caption={c.s8After1Caption} hint={c.s8After1Hint} />
          </div>
          <div className="cs-split">
            {/* asset-slot: EVA-BEFOREAFTER-02 — Replace with before/after notification comparison */}
            <CasePlaceholder id="EVA-BEFOREAFTER-02" ratio="landscape" caption={c.s8Before2Caption} hint={c.s8Before2Hint} />
            <CasePlaceholder id="EVA-BEFOREAFTER-02" ratio="landscape" caption={c.s8After2Caption} hint={c.s8After2Hint} />
          </div>
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
          {/* asset-slot: EVA-CLOSING-01 — Replace with strong closing visual / final platform composition */}
          <CasePlaceholder id="EVA-CLOSING-01" ratio="landscape" hint={c.s9PlaceholderHint} />
        </div>
      </section>

    </div>
  );
}
