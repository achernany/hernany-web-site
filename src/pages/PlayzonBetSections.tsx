import { Typography, Accent } from "../components/ui/Typography";
import { CaseMedia } from "../components/case-study/CaseMedia";
import { useI18n } from "../i18n";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   PlayzonBetSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "playzonbet".
   ============================================================ */

export function PlayzonBetSections() {
  const { lang } = useI18n();

  const c = lang === "es" ? {
    /* ── S1 HERO ── */
    heroKicker: "Trabajo Seleccionado — Caso de Estudio",
    heroBodyAccent: "Transformando una plataforma de apuestas",
    heroBodyRest: " bajo restricciones regulatorias, técnicas y operativas.",
    heroBody2: "PlayzonBet fue un rediseño de producto moldeado por presiones reales: urgencia legal, limitaciones del proveedor, complejidad operativa y uso mobile-first. El trabajo fue convertir un frontend débil en una experiencia más controlada, cumpliente y creíble.",
    heroMetaRoleLabel: "Rol",
    heroMetaRoleValue: "Product Designer / UX·UI",
    heroMetaScopeLabel: "Alcance",
    heroMetaScopeValue: "Rediseño de producto, flujos de compliance, UX de registro, adaptación del sportsbook, mobile-first, estructura de contenido, CMS, capa de control frontend",
    heroMetaFocusLabel: "Enfoque",
    heroMetaFocusValue: "Transformar una plataforma dependiente de proveedor en una experiencia de producto más controlada y mantenible",
    heroMetaProvidersLabel: "Proveedores",
    heroMetaProvidersValue: "Madmen · EveryMatrix · Optimove · Strapi",
    heroHint: "Mosaico de producto — hero compuesto",

    /* ── S2 OVERVIEW ── */
    s2Kicker: "01 — Panorama",
    s2Title: "El caso en un minuto",
    s2Body: "PlayzonBet era un sportsbook y casino para el mercado peruano. El frontend existente era frágil, difícil de mantener y por debajo de lo que el negocio necesitaba proyectar. Cuando Perú actualizó sus requisitos regulatorios, el rediseño se volvió tanto una oportunidad de negocio como una necesidad operativa.",
    s2Block1Title: "Qué era",
    s2Block1Body: "Una plataforma de apuestas y casino en vivo que operaba sobre infraestructura de terceros y demandas legales crecientes.",
    s2Block2Title: "Qué cambió",
    s2Block2Body: "El producto pasó de un frontend básico e inmanejable hacia una experiencia más estructurada, con marca y mantenible.",
    s2Block3Title: "Por qué importaba",
    s2Block3Body: "Porque la configuración anterior limitaba la calidad del producto, las operaciones diarias, el cumplimiento legal y la confianza de los usuarios.",
    s2Hint: "Visión general del sistema — diagrama de panorama",

    /* ── S3 PROBLEM ── */
    s3Kicker: "02 — Problema",
    s3Title: "El problema real",
    s3Body: "El problema visible era que la plataforma se veía desactualizada y genérica. Pero el problema más profundo era estructural: el frontend era difícil de mantener, las operaciones de contenido eran engorrosas, las promociones eran difíciles de gestionar y muchos procesos de cara al usuario carecían de flexibilidad. Los próximos requisitos legales dejaron claro que la configuración anterior tampoco sobreviviría regulatoriamente.",
    s3CalloutAccent: "El problema no era solo una UI pobre.",
    s3CalloutRest: " Era dependencia del proveedor, riesgo de compliance, fricción operativa y fragilidad del producto.",
    s3Hint: "Antes — problemas de la plataforma existente",

    /* ── S4 COMPLIANCE ── */
    s4Kicker: "03 — Compliance",
    s4Title: "Compliance como motor de diseño",
    s4Body: "La actualización legal peruana transformó el registro en un problema de diseño de primer orden. El modelo anterior permitía entrar a la plataforma con información mínima. Los nuevos requisitos exigían validación de identidad más fuerte, verificación de edad, opciones de auto-suspensión y mecanismos de juego responsable visibles. El registro tuvo que convertirse en un proceso controlado que aún se sintiera manejable para el usuario.",
    s4SubTitle: "Convirtiendo un proceso más pesado en uno más comprensible",
    s4SubBody: "La experiencia se estructuró como un wizard por pasos que clarificaba el progreso, agrupaba la información de forma más inteligente y hacía que un proceso legal más exigente se sintiera guiado.",
    s4Hint1: "Wizard de registro — flujo completo",
    s4Caption1: "Paso 01 — Datos de cuenta e identidad",
    s4Hint2: "Paso 02 — Verificación y seguridad",
    s4Caption2: "Validación de edad, contraseña y confirmación",
    s4Hint3: "Paso 03 — Compliance",
    s4Caption3: "Juego responsable y acuerdos legales",

    /* ── S5 FRONTEND CONTROL ── */
    s5Kicker: "04 — Control del Frontend",
    s5Title: "Tomando control del frontend",
    s5Body: "Una parte central del rediseño fue el movimiento hacia una capa de frontend más controlada. La configuración anterior hacía que las operaciones de contenido y los ajustes de producto fueran innecesariamente difíciles. Con un frontend que el negocio pudiera moldear más directamente, el equipo ganó agilidad sobre estructura, comunicación y gestión diaria — especialmente crítico para promociones, textos legales y superficies recurrentes.",
    s5SubTitle: "De la dependencia del proveedor a una capa de producto más controlable",
    s5Hint: "Arquitectura — antes vs. después · ownership del frontend",

    /* ── S6 SPORTSBOOK ── */
    s6Kicker: "05 — Sportsbook",
    s6Title: "Trabajando con un sportsbook de terceros",
    s6Body: "El core del sportsbook venía embebido del proveedor y no podía rediseñarse libremente. Eso significaba que el trabajo tenía que enfocarse en adaptación del shell, navegación circundante y consistencia visual en lugar del control total del motor de apuestas. Dado que más del noventa por ciento del uso ocurría en mobile, la navegación por categorías, el comportamiento de la navbar y la claridad de acciones clave en pantallas pequeñas fueron áreas de alto impacto.",
    s6SubTitle: "Mejorando lo que los usuarios experimentaban sin ser dueños de todo el sistema",
    s6Hint1: "Shell del sportsbook — adaptación visual y navegación",
    s6Hint2: "Mobile-first — navegación, acceso a cuenta y operaciones clave",

    /* ── S7 OPERATIONS ── */
    s7Kicker: "06 — Operaciones",
    s7Title: "Diseñando para las operaciones diarias",
    s7Body: "El rediseño también tenía que soportar cómo la plataforma operaba cada día. Cuenta, billetera, promociones, free-spins, estado del usuario y soporte dependían de que el frontend fuera más fácil de gestionar y de entender. En la configuración anterior, muchos de estos procesos eran demasiado manuales o difíciles de hacer visibles. Una mejor experiencia de producto significaba hacer estas interacciones recurrentes más mantenibles y más usables tanto para el negocio como para el usuario.",
    s7Hint1: "Cuenta, billetera y estado de usuario",
    s7Hint2: "Promociones y comunicación recurrente",

    /* ── S8 ITERATION ── */
    s8Kicker: "07 — Proceso",
    s8Title: "Iteración y evolución",
    s8Body: "El producto evolucionó a través de ajustes repetidos, especialmente alrededor del registro, requisitos legales y comportamiento mobile. No todo se construyó de una vez: algunas ideas avanzaron, otras se redujeron para el lanzamiento. El lanzamiento principal se enfocó en compliance, usabilidad, mantenibilidad y mayor coherencia del producto.",
    s8SubTitle: "Diseñar bajo presión significa decidir qué importa ahora y qué puede esperar",
    s8Hint: "Evolución — dirección temprana vs. solución lista para lanzar",

    /* ── S9 REFLECTION ── */
    s9Kicker: "08 — Reflexión",
    s9Title: "Lo que este proyecto representa en mi práctica",
    s9Body: "PlayzonBet representa mi capacidad para rediseñar un producto digital en vivo bajo presión real: requisitos legales, limitaciones del proveedor, restricciones técnicas, necesidades operativas y ambición de negocio, todo tuvo que resolverse dentro de una dirección de producto. Más que un rediseño visual, se convirtió en un ejercicio de transformación de producto a través de estructura UX, claridad de interfaz y toma de decisiones con conciencia sistémica.",
    s9ClosingPre: "Sigue siendo uno de los ejemplos más claros de mi trabajo en la intersección de UX, UI, product thinking, conciencia frontend y ",
    s9ClosingAccent: "realidad operativa.",
    s9Hint: "Visual de cierre — composición final del producto",

  } : {
    /* ── S1 HERO ── */
    heroKicker: "Selected Work — Case Study",
    heroBodyAccent: "Transforming a betting platform",
    heroBodyRest: " under regulatory, technical, and operational constraints.",
    heroBody2: "PlayzonBet became a product redesign shaped by real pressure: legal urgency, provider limitations, operational complexity, and mobile-first usage. The work was turning a weak frontend into a more controlled, compliant, and credible experience.",
    heroMetaRoleLabel: "Role",
    heroMetaRoleValue: "Product Designer / UX·UI",
    heroMetaScopeLabel: "Scope",
    heroMetaScopeValue: "Product redesign, compliance flows, registration UX, sportsbook adaptation, mobile-first navigation, content structure, CMS logic, frontend control layer",
    heroMetaFocusLabel: "Focus",
    heroMetaFocusValue: "Transforming a provider-dependent betting platform into a more controlled, compliant, and maintainable product experience",
    heroMetaProvidersLabel: "Providers",
    heroMetaProvidersValue: "Madmen · EveryMatrix · Optimove · Strapi",
    heroHint: "Product mosaic — composed hero",

    /* ── S2 OVERVIEW ── */
    s2Kicker: "01 — Overview",
    s2Title: "The case in one minute",
    s2Body: "PlayzonBet was a sportsbook and casino product for the Peruvian market. The existing frontend was fragile, hard to maintain, and below what the business needed to project. When Peru updated its regulatory requirements, the redesign became both a business opportunity and an operational necessity.",
    s2Block1Title: "What it was",
    s2Block1Body: "A live betting and casino platform operating under third-party infrastructure and growing legal demands.",
    s2Block2Title: "What changed",
    s2Block2Body: "The product moved from a basic, hard-to-manage frontend toward a more structured, branded, and maintainable experience.",
    s2Block3Title: "Why it mattered",
    s2Block3Body: "Because the previous setup was limiting product quality, day-to-day operations, legal compliance, and user trust.",
    s2Hint: "System overview — overview diagram",

    /* ── S3 PROBLEM ── */
    s3Kicker: "02 — Problem",
    s3Title: "The real problem",
    s3Body: "The visible issue was that the platform looked outdated and generic. But the deeper problem was structural: the frontend was difficult to maintain, content operations were cumbersome, promotions were hard to manage, and many customer-facing processes lacked flexibility. The upcoming legal requirements made it clear that the old setup would not survive regulatorily either.",
    s3CalloutAccent: "The issue was not just poor UI.",
    s3CalloutRest: " It was provider dependency, compliance risk, operational friction, and product fragility.",
    s3Hint: "Before — existing platform issues",

    /* ── S4 COMPLIANCE ── */
    s4Kicker: "03 — Compliance",
    s4Title: "Compliance as a design driver",
    s4Body: "Peru's legal update turned registration into a first-order design problem. The previous model let users enter the platform with minimal information. The new requirements demanded stronger identity validation, age verification, self-suspension options, and visible responsible gaming mechanisms. Registration had to become a controlled process that still felt manageable for the user.",
    s4SubTitle: "Turning a heavier process into a more understandable one",
    s4SubBody: "The experience was structured as a stepped wizard that clarified progress, grouped information more intelligently, and made a more demanding legal process feel guided.",
    s4Hint1: "Registration wizard — full flow overview",
    s4Caption1: "Step 01 — Account data and identity",
    s4Hint2: "Step 02 — Verification and security",
    s4Caption2: "Age validation, password, and confirmation",
    s4Hint3: "Step 03 — Compliance",
    s4Caption3: "Responsible gaming and legal agreements",

    /* ── S5 FRONTEND CONTROL ── */
    s5Kicker: "04 — Frontend Control",
    s5Title: "Taking control of the frontend",
    s5Body: "A central part of the redesign was the move toward a more controllable frontend layer. The previous setup made content operations and product adjustments unnecessarily difficult. With a frontend the business could shape more directly, the team gained agility over structure, communication, and daily management — especially critical for promotions, legal copy, and recurring surfaces.",
    s5SubTitle: "From provider dependency to a more controllable product layer",
    s5Hint: "Architecture — before vs. after · frontend ownership",

    /* ── S6 SPORTSBOOK ── */
    s6Kicker: "05 — Sportsbook",
    s6Title: "Working with a third-party sportsbook",
    s6Body: "The sportsbook core came embedded from the provider and could not be redesigned freely. That meant the work had to focus on shell adaptation, surrounding navigation, and visual consistency rather than full engine control. Since more than ninety percent of usage happened on mobile, category navigation, navbar behavior, and key-action clarity on small screens were high-impact areas.",
    s6SubTitle: "Improving what users experienced without owning the whole system",
    s6Hint1: "Sportsbook shell — visual adaptation and navigation",
    s6Hint2: "Mobile-first — navigation, account access, and key operations",

    /* ── S7 OPERATIONS ── */
    s7Kicker: "06 — Operations",
    s7Title: "Designing for daily operations",
    s7Body: "The redesign also had to support how the platform operated every day. Account, wallet, promotions, free-spins, user status, and support surfaces all depended on the frontend being easier to manage and easier to understand. In the previous setup, many of these processes were too manual or too hard to make visible. A better product experience meant making these recurring interactions more maintainable and more usable for both the business and the user.",
    s7Hint1: "Account, wallet, and user status",
    s7Hint2: "Promotions and recurring communication",

    /* ── S8 ITERATION ── */
    s8Kicker: "07 — Process",
    s8Title: "Iteration and evolution",
    s8Body: "The product evolved through repeated adjustments, especially around registration, legal requirements, and mobile behavior. Not everything was built at once: some ideas advanced, others were reduced for launch. The main release focused on compliance, usability, maintainability, and stronger product coherence.",
    s8SubTitle: "Designing under pressure means deciding what matters now and what can wait",
    s8Hint: "Evolution — early direction vs. launch-ready solution",

    /* ── S9 REFLECTION ── */
    s9Kicker: "08 — Reflection",
    s9Title: "What this project represents in my practice",
    s9Body: "PlayzonBet represents my ability to redesign a live digital product under real pressure: legal requirements, provider limitations, technical constraints, operational needs, and business ambition — all resolved within a single product direction. More than a visual redesign, it became a product transformation exercise through UX structure, interface clarity, and systemically aware decision-making.",
    s9ClosingPre: "It remains one of the clearest examples of my work at the intersection of UX, UI, product thinking, frontend awareness, and ",
    s9ClosingAccent: "operational reality.",
    s9Hint: "Closing visual — final product composition",
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
          <Typography variant="h1">PlayzonBet</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.heroBodyAccent}</Accent>{c.heroBodyRest}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.heroBody2}
          </Typography>
        </div>

        {/* asset-slot: PZ-HERO-01 — Replace with composed product hero image */}
        <CaseMedia id="PZ-HERO-01" ratio="hero" hint={c.heroHint} />

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
            <p className="cs-meta__label">{c.heroMetaProvidersLabel}</p>
            <p className="cs-meta__value">{c.heroMetaProvidersValue}</p>
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
          {/* asset-slot: PZ-OVERVIEW-01 — Replace with system overview / overview diagram */}
          <CaseMedia id="PZ-OVERVIEW-01" ratio="landscape" hint={c.s2Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE REAL PROBLEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="problem">
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
          {/* asset-slot: PZ-PROBLEM-01 — Replace with before/after platform comparison */}
          <CaseMedia id="PZ-PROBLEM-01" ratio="landscape" hint={c.s3Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — COMPLIANCE AS A DESIGN DRIVER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="compliance">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s4SubTitle}</Typography>
            <Typography variant="bodyLg" tone="secondary">
              {c.s4SubBody}
            </Typography>
          </div>
          {/* asset-slot: PZ-REG-01 — Replace with registration wizard full flow overview */}
          <CaseMedia id="PZ-REG-01" ratio="wide" hint={c.s4Hint1} />
          <div className="cs-split">
            {/* asset-slot: PZ-REG-02 — Replace with registration step 01–02 */}
            <CaseMedia id="PZ-REG-02" ratio="portrait" caption={c.s4Caption1} hint={c.s4Hint2} />
            {/* asset-slot: PZ-REG-03 — Replace with registration step 03 compliance */}
            <CaseMedia id="PZ-REG-03" ratio="portrait" caption={c.s4Caption2} hint={c.s4Hint3} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — TAKING CONTROL OF THE FRONTEND
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="frontend">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s5Kicker}</Typography>
          <Typography variant="h2">{c.s5Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s5Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s5SubTitle}</Typography>
          </div>
          {/* asset-slot: PZ-ARCH-01 — Replace with architecture before/after and frontend ownership map */}
          <CaseMedia id="PZ-ARCH-01" ratio="landscape" hint={c.s5Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — WORKING WITH A THIRD-PARTY SPORTSBOOK
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="sportsbook">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s6SubTitle}</Typography>
          </div>
          {/* asset-slot: PZ-SB-01 — Replace with sportsbook shell adaptation / visual alignment */}
          <CaseMedia id="PZ-SB-01" ratio="landscape" hint={c.s6Hint1} />
          {/* asset-slot: PZ-MOBILE-01 — Replace with mobile-first navigation and key operations */}
          <CaseMedia id="PZ-MOBILE-01" ratio="wide" hint={c.s6Hint2} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — DESIGNING FOR DAILY OPERATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="operations">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-OPS-01 — Replace with account, wallet, and user status screens */}
          <CaseMedia id="PZ-OPS-01" ratio="landscape" hint={c.s7Hint1} />
          {/* asset-slot: PZ-OPS-02 — Replace with promotions and recurring communication surfaces */}
          <CaseMedia id="PZ-OPS-02" ratio="landscape" hint={c.s7Hint2} />
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
            <Typography variant="h3">{c.s8SubTitle}</Typography>
          </div>
          {/* asset-slot: PZ-ITER-01 — Replace with evolution spread: early vs. launch-ready direction */}
          <CaseMedia id="PZ-ITER-01" ratio="wide" hint={c.s8Hint} />
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
            {c.s9ClosingPre}
            <Accent>{c.s9ClosingAccent}</Accent>
          </Typography>
          {/* asset-slot: PZ-CLOSING-01 — Replace with strong closing visual / final product composition */}
          <CaseMedia id="PZ-CLOSING-01" ratio="landscape" hint={c.s9Hint} />
        </div>
      </section>

    </div>
  );
}
