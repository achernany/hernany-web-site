import { Typography, Accent } from "../components/ui/Typography";
import { CaseMedia } from "../components/case-study/CaseMedia";
import { useI18n } from "../i18n";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   AlazSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "alaz".
   ============================================================ */

export function AlazSections() {
  const { lang } = useI18n();

  const c = lang === "es" ? {
    /* ── HERO ── */
    heroKicker: "Trabajos Seleccionados — Consultoría",
    heroAccent: "Tres productos. Una consultoría.",
    heroAccentRest: " Alcance, adaptabilidad y pensamiento de producto a través de industrias.",
    heroBody: "Durante mi período en ALAZ trabajé como diseñador integrado en tres proyectos simultáneos de clientes — cada uno con su propia industria, lógica operativa y restricciones de entrega. Esta página muestra esos tres proyectos como rebanadas representativas de un período que amplió y profundizó mi práctica.",
    heroMetaRoleLabel: "Rol",
    heroMetaRoleValue: "Lead de Diseño de Producto — Consultor Integrado",
    heroMetaClientsLabel: "Proyectos",
    heroMetaClientsValue: "Wetrax · Clínica San Felipe · EGCAPP",
    heroMetaScopeLabel: "Alcance",
    heroMetaScopeValue: "UX, UI, investigación, coordinación de stakeholders, lógica de integración, entrega consciente de implementación",
    heroMetaIndustryLabel: "Industrias",
    heroMetaIndustryValue: "Trade · Salud · Sector Público",
    heroPlaceholderHint: "Composición de los tres proyectos — vista general de ALAZ",

    /* ── S2 — THE CASE IN ONE MINUTE ── */
    s2Kicker: "01 — Panorama",
    s2Title: "El caso en un minuto",
    s2Body: "ALAZ es una consultoría boutique de producto y tecnología que trabaja con clientes en industrias reguladas y operacionalmente complejas. Durante este período me integré en tres programas de clientes simultáneos, tomando responsabilidad de diseño completa desde el discovery hasta la entrega — coordinando con stakeholders, mapeando restricciones reales y construyendo cosas que funcionaran dentro del sistema, no en el ideal.",
    s2Block1Title: "El contexto",
    s2Block1Body: "Una consultoría donde el trabajo de diseño requería entender la lógica operativa primero, y diseñar la superficie después.",
    s2Block2Title: "Los tres proyectos",
    s2Block2Body: "Wetrax (trade), Clínica San Felipe (salud) y EGCAPP (sector público) — industrias distintas, restricciones distintas, el mismo toolkit base.",
    s2Block3Title: "El valor de la página",
    s2Block3Body: "Alcance con estructura — no documentación exhaustiva, sino rebanadas representativas que muestran adaptabilidad y pensamiento de producto.",
    s2PlaceholderHint: "Vista general de los tres proyectos o diagrama del período",

    /* ── S3 — MY ROLE AT ALAZ ── */
    s3Kicker: "02 — Rol",
    s3Title: "Mi rol en ALAZ",
    s3Body: "En cada proyecto funcioné como consultor de diseño integrado, lo que significaba estar dentro del proceso del cliente — no entregar desde afuera. Eso requería entender la lógica del negocio antes de diseñar flujos, manejar la ambigüedad de los requerimientos, alinear a stakeholders con perspectivas distintas y entregar algo que el equipo de desarrollo pudiera realmente implementar.",
    s3Block1Label: "Comprensión de producto",
    s3Block1Body: "Mapear lógica operativa, flujos de negocio y restricciones del sistema antes de diseñar la interfaz.",
    s3Block2Label: "UX y UI",
    s3Block2Body: "Desde arquitectura de información y wireframes hasta diseño de interfaz de alta fidelidad y sistemas de componentes.",
    s3Block3Label: "Coordinación de stakeholders",
    s3Block3Body: "Facilitar la alineación entre equipos de negocio, técnicos y operativos con necesidades frecuentemente distintas.",
    s3Block4Label: "Entrega consciente de implementación",
    s3Block4Body: "Asegurar que los entregables de diseño fueran accionables — documentados, priorizados y listos para el handoff de desarrollo.",

    /* ── S4 — WETRAX ── */
    s4Kicker: "03 — Wetrax · Trade",
    s4Title: "Wetrax",
    s4Subtitle: "Lógica comercial compleja traducida en producto digital",
    s4Body: "Wetrax era una herramienta de gestión de operaciones de trading que vivía en hojas de cálculo sofisticadas. El sistema rastreaba transacciones de commodity, PnL, posiciones de cobertura y flujos de liquidación — lógica que era altamente estructurada pero completamente inmanejable para usuarios no especializados y para escalar más allá de un equipo pequeño.",
    s4Challenge: "El desafío no era hacer que los datos se vieran bien. Era entender qué significaban los datos, cómo los usaban los operadores de trading y cómo traducir esa lógica en algo que pudiera funcionar como un producto sin perder la precisión que los usuarios necesitaban.",
    s4Value: "El trabajo se enfocó en la arquitectura de información, los flujos de usuario clave y los patrones de interfaz que podían manejar la densidad operativa del sistema mientras permanecían comprensibles para usuarios fuera del trading.",
    s4Placeholder1Hint: "Wetrax — vista del dashboard principal o panel de operaciones",
    s4Placeholder2Hint: "Wetrax — flujo de detalle o módulo clave",

    /* ── S5 — CLÍNICA SAN FELIPE ── */
    s5Kicker: "04 — Clínica San Felipe · Salud",
    s5Title: "Clínica San Felipe",
    s5Subtitle: "Coordinación de salud y servicios auxiliares integrados",
    s5Body: "Clínica San Felipe es un centro de salud privado en Lima con múltiples especialidades y servicios auxiliares — laboratorio, imagenología, farmacia, emergencias y atención ambulatoria. El trabajo de diseño se centró en hacer que el agendamiento y la coordinación de servicios fueran más manejables, tanto para los pacientes navegando un sistema complejo como para el personal clínico coordinando entre áreas.",
    s5Challenge: "El desafío fue reducir la fragmentación: múltiples puntos de entrada, sistemas inconexos y un flujo de paciente que raramente era lineal. El diseño tuvo que respetar los flujos clínicos existentes mientras los hacía más coherentes para el paciente.",
    s5Value: "El resultado fue una experiencia más centralizada alrededor del agendamiento y la orientación del paciente, con mayor claridad sobre los próximos pasos, confirmaciones y puntos de contacto de soporte.",
    s5Placeholder1Hint: "Clínica San Felipe — vista de agendamiento o portal del paciente",
    s5Placeholder2Hint: "Clínica San Felipe — flujo de servicios auxiliares o detalle de coordinación",

    /* ── S6 — EGCAPP ── */
    s6Kicker: "05 — EGCAPP · Sector Público",
    s6Title: "EGCAPP",
    s6Subtitle: "Operaciones de campo y producto móvil con conciencia de seguridad",
    s6Body: "EGCAPP era una aplicación móvil para agentes de seguridad y personal de campo en operaciones del sector público. Los usuarios operaban en contextos donde el acceso rápido, la conciencia situacional y la documentación segura importaban más que la elegancia visual. El producto necesitaba funcionar en condiciones exigentes: poca luz, guantes, presión de tiempo y conectividad intermitente.",
    s6Challenge: "El desafío fue diseñar para el uso real en campo — no para un demo. Eso significaba decisiones de interacción que funcionaran con gestos grandes, flujos que redujeran errores bajo estrés y lógica de seguridad que no creara fricción sin necesidad cuando los usuarios ya estaban bajo presión.",
    s6Value: "El trabajo se enfocó en la simplificación de flujos de campo, jerarquía de información clara y patrones de interacción pensados para el contexto real de uso — no el contexto de oficina.",
    s6Placeholder1Hint: "EGCAPP — vista principal de la app o pantalla de operaciones de campo",
    s6Placeholder2Hint: "EGCAPP — flujo de reporte de incidente o módulo de documentación",

    /* ── S7 — WHAT THESE PROJECTS TOGETHER REPRESENT ── */
    s7Kicker: "06 — Síntesis",
    s7Title: "Lo que estos proyectos representan juntos",
    s7Body: "Wetrax, Clínica San Felipe y EGCAPP son industrias distintas con usuarios distintos, restricciones distintas y entregables distintos. Lo que los conecta es el mismo proceso subyacente: mapear la lógica operativa real, identificar dónde el diseño agrega el mayor valor y entregar algo que funcione dentro del sistema que ya existe.",
    s7Callout: "Diferentes industrias. La misma habilidad de traducir complejidad operativa en estructura de producto.",
    s7PlaceholderHint: "Síntesis — comparación de los tres proyectos o vista de alcance",

    /* ── S8 — WHAT THIS PERIOD REPRESENTS ── */
    s8Kicker: "07 — Reflexión",
    s8Title: "Qué representa este período en mi práctica",
    s8Body: "ALAZ fue el período donde aprendí a trabajar en complejidad real — no la complejidad de los casos de estudio, sino la de clientes con sistemas heredados, stakeholders con necesidades en conflicto y entornos de entrega donde el diseño perfecto no siempre puede aterrizar. Es donde desarrollé el músculo de entender restricciones primero y diseñar dentro de ellas, no a pesar de ellas.",
    s8ClosingRest: "Ese período moldeó cómo me aproximé a todo lo que vino después: producto, operaciones, sistemas y ",
    s8ClosingAccent: "entrega en el mundo real.",
    s8PlaceholderHint: "Visual de cierre — composición representativa del período ALAZ",

  } : {
    /* ── HERO ── */
    heroKicker: "Selected Works — Consultancy",
    heroAccent: "Three products. One consultancy.",
    heroAccentRest: " Range, adaptability, and product thinking across industries.",
    heroBody: "During my time at ALAZ I worked as an embedded designer across three simultaneous client projects — each with its own industry, operational logic, and delivery constraints. This page presents those three projects as representative slices of a period that expanded and deepened my practice.",
    heroMetaRoleLabel: "Role",
    heroMetaRoleValue: "Product Design Lead — Embedded Consultant",
    heroMetaClientsLabel: "Projects",
    heroMetaClientsValue: "Wetrax · Clínica San Felipe · EGCAPP",
    heroMetaScopeLabel: "Scope",
    heroMetaScopeValue: "UX, UI, research, stakeholder coordination, integration mapping, implementation-aware delivery",
    heroMetaIndustryLabel: "Industries",
    heroMetaIndustryValue: "Trade · Healthcare · Public Sector",
    heroPlaceholderHint: "Three-project composition — ALAZ period overview",

    /* ── S2 — THE CASE IN ONE MINUTE ── */
    s2Kicker: "01 — Overview",
    s2Title: "The case in one minute",
    s2Body: "ALAZ is a boutique product and technology consultancy working with clients in regulated and operationally complex industries. During this period I embedded into three simultaneous client programs, taking full design ownership from discovery through delivery — coordinating with stakeholders, mapping real constraints, and building things that worked inside the actual system, not the ideal one.",
    s2Block1Title: "The context",
    s2Block1Body: "A consultancy where design work required understanding operational logic first, and designing the surface second.",
    s2Block2Title: "The three projects",
    s2Block2Body: "Wetrax (trade), Clínica San Felipe (healthcare), and EGCAPP (public sector) — different industries, different constraints, the same base toolkit.",
    s2Block3Title: "The value of this page",
    s2Block3Body: "Range with structure — not exhaustive documentation, but representative slices that show adaptability and product thinking.",
    s2PlaceholderHint: "Three-project overview or period diagram",

    /* ── S3 — MY ROLE AT ALAZ ── */
    s3Kicker: "02 — Role",
    s3Title: "My role at ALAZ",
    s3Body: "On each project I functioned as an embedded design consultant, which meant being inside the client's process — not delivering from outside. That required understanding business logic before designing flows, managing requirements ambiguity, aligning stakeholders with different perspectives, and delivering something the development team could actually build.",
    s3Block1Label: "Product understanding",
    s3Block1Body: "Mapping operational logic, business flows, and system constraints before designing the interface.",
    s3Block2Label: "UX and UI",
    s3Block2Body: "From information architecture and wireframes through high-fidelity interface design and component systems.",
    s3Block3Label: "Stakeholder coordination",
    s3Block3Body: "Facilitating alignment between business, technical, and operational teams with frequently different needs.",
    s3Block4Label: "Implementation-aware delivery",
    s3Block4Body: "Ensuring design deliverables were actionable — documented, prioritized, and ready for development handoff.",

    /* ── S4 — WETRAX ── */
    s4Kicker: "03 — Wetrax · Trade",
    s4Title: "Wetrax",
    s4Subtitle: "Complex trade logic translated into digital product",
    s4Body: "Wetrax was a trading operations management tool that lived in sophisticated spreadsheets. The system tracked commodity transactions, PnL, hedge positions, and settlement flows — logic that was highly structured but completely unmanageable for non-specialist users and for scaling beyond a small team.",
    s4Challenge: "The challenge was not to make data look good. It was to understand what the data meant, how trading operators used it, and how to translate that logic into something that could work as a product without losing the precision users depended on.",
    s4Value: "The work focused on information architecture, key user flows, and interface patterns that could handle the system's operational density while remaining comprehensible to users outside of trading.",
    s4Placeholder1Hint: "Wetrax — main dashboard or trading operations panel",
    s4Placeholder2Hint: "Wetrax — detail flow or key module",

    /* ── S5 — CLÍNICA SAN FELIPE ── */
    s5Kicker: "04 — Clínica San Felipe · Healthcare",
    s5Title: "Clínica San Felipe",
    s5Subtitle: "Healthcare coordination and integrated auxiliary services",
    s5Body: "Clínica San Felipe is a private healthcare center in Lima with multiple specialties and auxiliary services — laboratory, imaging, pharmacy, emergency, and outpatient care. The design work focused on making appointment scheduling and service coordination more manageable, both for patients navigating a complex system and for clinical staff coordinating across departments.",
    s5Challenge: "The challenge was reducing fragmentation: multiple entry points, disconnected systems, and a patient flow that was rarely linear. The design had to respect existing clinical workflows while making them more coherent to the patient.",
    s5Value: "The result was an experience more centralized around scheduling and patient orientation, with greater clarity around next steps, confirmations, and support touchpoints.",
    s5Placeholder1Hint: "Clínica San Felipe — scheduling view or patient portal",
    s5Placeholder2Hint: "Clínica San Felipe — auxiliary services flow or coordination detail",

    /* ── S6 — EGCAPP ── */
    s6Kicker: "05 — EGCAPP · Public Sector",
    s6Title: "EGCAPP",
    s6Subtitle: "Field operations and security-aware mobile product",
    s6Body: "EGCAPP was a mobile application for security agents and field personnel in public sector operations. Users operated in contexts where fast access, situational awareness, and secure documentation mattered more than visual elegance. The product needed to work under demanding conditions: low light, gloves, time pressure, and intermittent connectivity.",
    s6Challenge: "The challenge was designing for real field use — not for a demo. That meant interaction decisions that worked with large gestures, flows that reduced errors under stress, and security logic that did not create unnecessary friction when users were already under pressure.",
    s6Value: "The work focused on field flow simplification, clear information hierarchy, and interaction patterns designed for the actual context of use — not the office context.",
    s6Placeholder1Hint: "EGCAPP — main app view or field operations screen",
    s6Placeholder2Hint: "EGCAPP — incident report flow or documentation module",

    /* ── S7 — WHAT THESE PROJECTS TOGETHER REPRESENT ── */
    s7Kicker: "06 — Synthesis",
    s7Title: "What these projects represent together",
    s7Body: "Wetrax, Clínica San Felipe, and EGCAPP are different industries with different users, different constraints, and different deliverables. What connects them is the same underlying process: map the real operational logic, identify where design adds the most value, and deliver something that works inside the system that already exists.",
    s7Callout: "Different industries. The same ability to translate operational complexity into product structure.",
    s7PlaceholderHint: "Synthesis — three-project comparison or scope overview",

    /* ── S8 — WHAT THIS PERIOD REPRESENTS ── */
    s8Kicker: "07 — Reflection",
    s8Title: "What this period represents in my practice",
    s8Body: "ALAZ was the period where I learned to work in real complexity — not case-study complexity, but the kind that comes from clients with legacy systems, stakeholders with conflicting needs, and delivery environments where perfect design does not always land. It is where I built the muscle of understanding constraints first and designing within them, not despite them.",
    s8ClosingRest: "That period shaped how I approached everything that came after: product, operations, systems, and ",
    s8ClosingAccent: "real-world delivery.",
    s8PlaceholderHint: "Closing visual — representative composition of the ALAZ period",
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
          <Typography variant="h1">ALAZ</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.heroAccent}</Accent>{c.heroAccentRest}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.heroBody}
          </Typography>
        </div>

        {/* asset-slot: ALAZ-HERO-01 — Replace with three-project composition / ALAZ period overview */}
        <CaseMedia id="ALAZ-HERO-01" ratio="hero" hint={c.heroPlaceholderHint} />

        <div className="cs-meta">
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaRoleLabel}</p>
            <p className="cs-meta__value">{c.heroMetaRoleValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaClientsLabel}</p>
            <p className="cs-meta__value">{c.heroMetaClientsValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaScopeLabel}</p>
            <p className="cs-meta__value">{c.heroMetaScopeValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.heroMetaIndustryLabel}</p>
            <p className="cs-meta__value">{c.heroMetaIndustryValue}</p>
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
          {/* asset-slot: ALAZ-OVERVIEW-01 — Replace with three-project overview or period diagram */}
          <CaseMedia id="ALAZ-OVERVIEW-01" ratio="landscape" hint={c.s2PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — MY ROLE AT ALAZ
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="role">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s3Kicker}</Typography>
          <Typography variant="h2">{c.s3Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s3Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">{c.s3Block1Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s3Block1Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s3Block2Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s3Block2Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s3Block3Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s3Block3Body}</Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s3Block4Label}</Typography>
              <Typography variant="bodyMd" tone="secondary">{c.s3Block4Body}</Typography>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — WETRAX
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="wetrax">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.s4Subtitle}</Accent>
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: ALAZ-WETRAX-01 — Replace with Wetrax main dashboard or operations panel */}
          <CaseMedia id="ALAZ-WETRAX-01" ratio="landscape" hint={c.s4Placeholder1Hint} />
          <div className="cs-subhead">
            <Typography variant="bodyLg" tone="secondary">{c.s4Challenge}</Typography>
            <Typography variant="bodyLg" tone="secondary">{c.s4Value}</Typography>
          </div>
          {/* asset-slot: ALAZ-WETRAX-02 — Replace with Wetrax detail flow or key module */}
          <CaseMedia id="ALAZ-WETRAX-02" ratio="landscape" hint={c.s4Placeholder2Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — CLÍNICA SAN FELIPE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="san-felipe">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s5Kicker}</Typography>
          <Typography variant="h2">{c.s5Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.s5Subtitle}</Accent>
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s5Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            {/* asset-slot: ALAZ-SF-01 — Replace with scheduling view or patient portal */}
            <CaseMedia id="ALAZ-SF-01" ratio="portrait" hint={c.s5Placeholder1Hint} />
            {/* asset-slot: ALAZ-SF-02 — Replace with auxiliary services flow or coordination detail */}
            <CaseMedia id="ALAZ-SF-02" ratio="portrait" hint={c.s5Placeholder2Hint} />
          </div>
          <div className="cs-subhead">
            <Typography variant="bodyLg" tone="secondary">{c.s5Challenge}</Typography>
            <Typography variant="bodyLg" tone="secondary">{c.s5Value}</Typography>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — EGCAPP
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="egcapp">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.s6Subtitle}</Accent>
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="bodyLg" tone="secondary">{c.s6Challenge}</Typography>
            <Typography variant="bodyLg" tone="secondary">{c.s6Value}</Typography>
          </div>
          <div className="cs-split">
            {/* asset-slot: ALAZ-EGCAPP-01 — Replace with main app view or field operations screen */}
            <CaseMedia id="ALAZ-EGCAPP-01" ratio="portrait" hint={c.s6Placeholder1Hint} />
            {/* asset-slot: ALAZ-EGCAPP-02 — Replace with incident report flow or documentation module */}
            <CaseMedia id="ALAZ-EGCAPP-02" ratio="portrait" hint={c.s6Placeholder2Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — WHAT THESE PROJECTS TOGETHER REPRESENT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="synthesis">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>{c.s7Callout}</Accent>
            </Typography>
          </div>
          {/* asset-slot: ALAZ-SYNTHESIS-01 — Replace with three-project comparison or scope overview */}
          <CaseMedia id="ALAZ-SYNTHESIS-01" ratio="landscape" hint={c.s7PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — WHAT THIS PERIOD REPRESENTS IN MY PRACTICE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="reflection">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s8Kicker}</Typography>
          <Typography variant="h2">{c.s8Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s8Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <Typography variant="bodyLg" tone="secondary" as="p">
            {c.s8ClosingRest}
            <Accent>{c.s8ClosingAccent}</Accent>
          </Typography>
          {/* asset-slot: ALAZ-CLOSING-01 — Replace with closing visual / representative ALAZ period composition */}
          <CaseMedia id="ALAZ-CLOSING-01" ratio="landscape" hint={c.s8PlaceholderHint} />
        </div>
      </section>

    </div>
  );
}
