import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import { useI18n } from "../i18n";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "ALAZ-HERO-01").
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
   AlazSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "alaz".
   ============================================================ */

export function AlazSections() {
  const { lang } = useI18n();

  const c = lang === "es" ? {
    /* ── HERO ── */
    heroKicker: "ALAZ — Tres Productos. Una Consultoría.",

    /* ── S1: Context ── */
    s1Label: "01 — Contexto",
    s1Title: "Una Consultoría Que Entrega",
    s1BodyAccent: "ALAZ es una consultoría boutique de producto y tecnología",
    s1BodyRest: " especializada en industrias reguladas, sistemas operacionales y transformaciones orientadas a producto. Los proyectos abarcan desde discovery hasta delivery — integrados con los clientes desde la estrategia hasta la implementación.",
    s1Body2: "Durante este período trabajé como lead de diseño de producto en tres programas de clientes simultáneos: Wetrax (sports tech), Clínica San Felipe (servicios digitales de salud) y EGCAPP (SaaS de sector público). Cada proyecto tenía restricciones operativas únicas, contexto regulatorio y presiones de entrega — exigiendo enfoques radicalmente distintos desde el mismo toolkit base.",
    s1Body3: "Lo que unificó el trabajo fue una disciplina consistente: mapear la restricción antes de diseñar la superficie. Entender el modelo de stakeholders antes de proponer un flujo. Entregar algo que funcione dentro del sistema real, no del ideal.",
    s1MetaRole: "Lead de Diseño de Producto (Consultor Integrado)",
    s1MetaClients: "Wetrax · Clínica San Felipe · EGCAPP",
    s1MetaScope: "Service Design · Discovery · Arquitectura UX · Delivery Ops",
    s1MetaTimeline: "Multi-engagement continuo",
    s1MetaIndustries: "Sports Tech · Salud · SaaS de Sector Público",
    s1MetaFormat: "Consultoría integrada · Delivery paralelo",
    s1PlaceholderCaption: "Postura de delivery de ALAZ — modelo de trabajo a través de programas de clientes simultáneos",
    s1PlaceholderHint: "Diagrama o foto: consultor integrado en equipo de cliente, trabajando en 3 engagements paralelos",

    /* ── S2: Projects ── */
    s2Label: "02 — Proyectos",
    s2Title: "Tres Contextos, Un Toolkit",
    s2Body: "Cada proyecto reveló un tipo diferente de desafío de diseño. Wetrax demandaba iteración rápida en experiencias de consumo deportivo. Clínica San Felipe requería navegación cuidadosa de restricciones institucionales y flujos de datos de salud regulados. EGCAPP requería traducir lógica de sector público a interfaces SaaS usables.",
    s2Card1Caption: "Wetrax — Plataforma de consumo de sports tech",
    s2Card1Hint: "Tarjeta resumen del proyecto: logo de Wetrax + miniatura de superficie de producto clave",
    s2Card2Caption: "Clínica San Felipe — Servicios digitales de salud",
    s2Card2Hint: "Tarjeta resumen del proyecto: marca de Clínica San Felipe + interfaz orientada al paciente",
    s2Card3Caption: "EGCAPP — SaaS de sector público",
    s2Card3Hint: "Tarjeta resumen del proyecto: interfaz o vista general del flujo de EGCAPP",

    /* ── S3: Wetrax ── */
    s3Label: "03 — Proyecto Uno",
    s3Title: "Wetrax: Engagement Deportivo a Alta Velocidad",
    s3BodyAccent: "Wetrax es una plataforma de sports tech",
    s3BodyRest: " que conecta atletas, entrenadores y fanáticos a través de tracking de rendimiento, integración con eventos en vivo y funcionalidades de comunidad. El desafío: iterar lo suficientemente rápido para mantenerse por delante de una ventana competitiva de sports tech — sin sacrificar las señales de calidad que retenían usuarios.",
    s3Body2: "El trabajo se centró en racionalizar un backlog de features creciente en una experiencia de producto coherente. El discovery reveló un onboarding fragmentado, una jerarquía de propuesta de valor poco clara, y un sistema de notificaciones que creaba más ruido que señal. Cada problema fue abordado mediante design sprints rápidos con alineamiento cercano con ingeniería.",
    s3PlaceholderCaption: "Wetrax — superficie principal de producto y sistema de marca",
    s3PlaceholderHint: "Vista amplia: resumen de la app Wetrax, pantallas clave desplegadas en marcos de dispositivo",
    s3OnboardingTitle: "Racionalización del Onboarding",
    s3OnboardingBody: "El flujo de onboarding original requería 11 pasos antes de que el usuario viera valor real del producto. A través de análisis de sesiones y entrevistas con usuarios, el camino crítico se redujo a 4 pasos — difiriendo la completación opcional del perfil a post-activación. La tasa de completación mejoró materialmente en los primeros dos ciclos de sprint post-lanzamiento.",
    s3OnboardingBeforeCaption: "Antes: onboarding de 11 pasos — análisis de abandono de usuarios",
    s3OnboardingBeforeHint: "Antes/después o flujo anotado mostrando la complejidad original del onboarding",
    s3OnboardingAfterCaption: "Después: camino racionalizado de 4 pasos al primer valor",
    s3OnboardingAfterHint: "Flujo de onboarding rediseñado — estructura mínima, valor primero",
    s3NotifTitle: "Arquitectura de Notificaciones",
    s3NotifBody: "Wetrax había acumulado una mezcla de pushes de marketing, eventos del sistema y señales sociales en una sola capa de notificaciones. Se diseñó un framework de triaje para categorizar señales por urgencia y relevancia — informando un nuevo UX de centro de notificaciones que los usuarios podían efectivamente interpretar y actuar.",
    s3NotifCaption: "Centro de notificaciones de Wetrax — jerarquía de señales y diseño de interacción",
    s3NotifHint: "UI del centro de notificaciones con alertas categorizadas: eventos en vivo, social, sistema",

    /* ── S4: Clínica San Felipe ── */
    s4Label: "04 — Proyecto Dos",
    s4Title: "Clínica San Felipe: Flujos de Salud Bajo Restricción Institucional",
    s4BodyAccent: "Clínica San Felipe es una institución privada de salud",
    s4BodyRest: " que opera múltiples servicios ambulatorios y de especialidad en Lima. El mandato de transformación digital era claro — pero el entorno institucional era complejo: integraciones con EMR legacy, regulación de privacidad (Ley de Protección de Datos), y flujos administrativos profundamente arraigados que habían resistido el cambio por años.",
    s4Body2: "El engagement se enfocó en servicios digitales orientados al paciente: agendamiento de citas, acceso a resultados de laboratorio y comunicación post-consulta. Cada superficie requería un mapeo cuidadoso de los flujos de datos disponibles desde los sistemas existentes, y diseñar experiencias que se sintieran modernas para los pacientes sin requerir infraestructura que la clínica no estaba lista para construir.",
    s4PlaceholderCaption: "Clínica San Felipe — portal del paciente y superficies de servicio digital",
    s4PlaceholderHint: "Vista amplia: interfaz orientada al paciente — agenda de citas, resultados, comunicaciones",
    s4BlueprintTitle: "Service Blueprinting Primero",
    s4BlueprintBody: "Antes de diseñar cualquier pantalla, se construyó un service blueprint completo mapeando el journey del paciente a través de touchpoints digitales y sistemas backstage. Esto reveló tres puntos críticos de falla — momentos donde la expectativa del paciente y la capacidad del sistema divergían más agudamente. Estos se convirtieron en la secuencia de prioridad de diseño.",
    s4BlueprintCaption: "Service blueprint — journey del paciente mapeado a sistemas backstage y puntos de falla",
    s4BlueprintHint: "Artefacto de service blueprint: diagrama de swimlanes, capas de paciente vs sistema vs staff",
    s4SchedulingTitle: "UX de Agendamiento de Citas",
    s4SchedulingBody: "El flujo de agendamiento debía conectar datos de disponibilidad desde un sistema HIS legacy a través de una capa de middleware — introduciendo latencia e inconsistencia ocasional. La solución de diseño implementó patrones de UI optimista y comunicación clara del estado del sistema, para que los pacientes siempre entendieran qué estaba confirmado vs. pendiente — sin que la clínica necesitara reemplazar el backend.",
    s4SchedulingCaption: "Flujo de agendamiento — selección de especialidad hasta confirmación",
    s4SchedulingHint: "Pantallas móviles: selección de doctor, selector de horarios, estado de confirmación",
    s4LabCaption: "Acceso a resultados de laboratorio — patrón de revelación progresiva seguro",
    s4LabHint: "Pantalla de resultados con interacción de revelación consciente de privacidad y acción de descarga",

    /* ── S5: EGCAPP ── */
    s5Label: "05 — Proyecto Tres",
    s5Title: "EGCAPP: Lógica de Sector Público en Formato SaaS",
    s5BodyAccent: "EGCAPP es una plataforma SaaS que sirve a organizaciones del sector público",
    s5BodyRest: " — municipalidades, agencias públicas y entidades reguladas — con herramientas de gestión operativa: flujos de adquisiciones, seguimiento de cumplimiento y reportería interna. El desafío central era traducir lógica compleja de sector público en interfaces que el personal de primera línea pudiera operar sin sobrecarga de capacitación.",
    s5Body2: "Los procesos de adquisiciones en particular involucraban cadenas de aprobación multi-actor, etapas de documentación obligatoria y checkpoints de cumplimiento — cada uno con su propia lógica de validación. La interfaz existente trataba estos como formularios planos. El rediseño reestructuró la experiencia alrededor de etapas de proceso, mostrando los controles correctos en el momento correcto y haciendo visible el estado de cumplimiento en todo momento.",
    s5PlaceholderCaption: "EGCAPP — plataforma de gestión de adquisiciones y cumplimiento",
    s5PlaceholderHint: "Vista amplia: dashboard de EGCAPP, vista general de flujos, tracker de adquisiciones",
    s5IATitle: "IA Orientada a Flujos",
    s5IABody: "La IA tradicional se organiza alrededor de categorías de features. EGCAPP requería una IA organizada por roles y etapas de proceso — lo que un oficial de adquisiciones necesita durante la iniciación es completamente diferente de lo que necesita durante revisión o cierre. La navegación consciente de roles fue la solución estructural, reduciendo la carga cognitiva para cada persona.",
    s5IACaption: "IA consciente de roles — navegación organizada por etapa de proceso, no por categoría de feature",
    s5IAHint: "Diagrama de IA: matriz de rol × etapa impulsando la estructura de navegación",
    s5ComplianceTitle: "Sistema de Visibilidad de Cumplimiento",
    s5ComplianceBody: "Una de las necesidades más críticas sin resolver era la conciencia del estado de cumplimiento en tiempo real. El personal verificaba manualmente los requisitos contra documentos externos. El diseño introdujo un tracker de cumplimiento inline — persistente, contextual y accionable — que mostraba exactamente qué faltaba antes del envío, no después del rechazo.",
    s5ProcurementCaption: "Flujo de adquisiciones — interfaz por etapas con checkpoint de cumplimiento",
    s5ProcurementHint: "UI de escritorio: vista por etapa de adquisición, checklist de documentos, acciones de aprobación",
    s5ComplianceCaption: "Tracker de cumplimiento inline — requisitos faltantes mostrados antes del envío",
    s5ComplianceHint: "Panel de cumplimiento con indicadores de estado, documentos requeridos y CTAs de resolución",

    /* ── S6: Cross-Project Patterns ── */
    s6Label: "06 — Patrones",
    s6Title: "Lo Que Se Repitió en los Tres",
    s6BodyAccent: "sistemas diseñados alrededor de lógica interna, no del comportamiento humano.",
    s6BodyPre: "Tres industrias, tres contextos de producto, tres culturas de cliente. Sin embargo, los mismos problemas de diseño surgieron en todos — porque compartían la misma causa raíz: ",
    s6Body2: "En cada engagement, el entregable temprano más valioso fue un mapa de restricciones — no un wireframe. Entender qué podía y qué no podía hacer el sistema, dónde los datos eran confiables y dónde no, qué stakeholders tenían autoridad real versus autoridad percibida. Este trabajo de base comprimió el ciclo de diseño downstream y redujo significativamente el retrabajo.",
    s6Body3: "El segundo patrón recurrente fue la visibilidad de proceso. Ya fuera un paciente rastreando una cita, un oficial de adquisiciones verificando cumplimiento, o un usuario de Wetrax viendo un evento en vivo — cada uno necesitaba entender dónde estaba en un proceso y qué venía después. Diseñar esa visibilidad en la interfaz — en lugar de asumir que los usuarios la inferirían — fue la intervención de mayor apalancamiento en los tres productos.",
    s6PatternCaption: "Matriz de patrones — problemas y soluciones de diseño compartidos entre tres proyectos",
    s6PatternHint: "Diagrama cross-project: mapeo de restricciones → visibilidad de proceso → alineamiento de delivery",
    s6ConstraintCaption: "Artefacto de mapeo de restricciones — usado en el kickoff de los tres engagements",
    s6ConstraintHint: "Template de mapa de restricciones o artefacto completado de uno de los tres proyectos",

    /* ── S7: Delivery System ── */
    s7Label: "07 — Delivery",
    s7Title: "Operando a Través de Engagements Paralelos",
    s7BodyAccent: "ritmo, documentación, calidad de handoff y contención de scope.",
    s7BodyPre: "Ejecutar tres engagements simultáneos desde una consultoría requiere un sistema de delivery, no solo buenas intenciones. El modelo operativo se construyó sobre cuatro disciplinas: ",
    s7Body2: "Cada cliente operaba en un ciclo semanal — discovery y alineamiento los lunes, ejecución a mitad de semana, revisión y handoff los viernes. La documentación era innegociable: cada decisión se registraba con su justificación, para que los clientes retuvieran conocimiento institucional incluso cuando el scope del engagement cambiaba. Los artefactos de handoff estaban diseñados para ingenieros, no para otros diseñadores — anotados, conscientes de edge cases y directamente implementables.",
    s7Body3: "La contención de scope fue la disciplina más difícil. Cada cliente naturalmente quería más de lo que el engagement podía entregar. El mecanismo fue artefactos de priorización explícitos — un snapshot de scope de una página actualizado semanalmente, compartido con stakeholders — que mantenía el foco en lo que movería la métrica más importante antes del siguiente checkpoint.",
    s7RhythmCaption: "Ritmo de delivery — cadencia semanal a través de tres engagements paralelos de clientes",
    s7RhythmHint: "Timeline o diagrama de calendario mostrando cadencias paralelas de engagement",
    s7HandoffCaption: "Ejemplo de artefacto de handoff — anotado, listo para ingeniería, edge cases documentados",
    s7HandoffHint: "Pantalla de handoff de Figma con redlines, specs de componentes, notas de interacción",

    /* ── S8: Outcomes ── */
    s8Label: "08 — Resultados",
    s8Title: "Lo Que Se Entregó y Lo Que Cambió",
    s8BodyAccent: "el sistema se volvió más fácil de operar para las personas que tenían que usarlo todos los días.",
    s8BodyPre: "Los tres proyectos llegaron a producción dentro de sus ventanas de engagement. La medida de éxito varió por cliente — pero en cada caso, el objetivo principal de diseño se cumplió: ",
    s8MetaWetrax: "Completación de onboarding +↑ · Tasa de apertura de notificaciones estabilizada · Camino crítico de 4 pasos entregado",
    s8MetaClinica: "Autoservicio de agendamiento de pacientes en producción · Entrega digital de resultados de laboratorio · Sin reemplazo de backend requerido",
    s8MetaEgcapp: "Rediseño de flujo de adquisiciones entregado · IA consciente de roles implementada · Tasa de rechazo por cumplimiento reducida",
    s8ShippedCaption: "Superficies de producto entregadas — Wetrax, Clínica San Felipe y EGCAPP en producción",
    s8ShippedHint: "Lado a lado: pantallas de producción de las tres plataformas post-delivery",
    s8ImpactCaption: "Resumen de impacto — métricas clave y resultados cualitativos por engagement",
    s8ImpactHint: "Infografía o tabla: proyecto × métrica × resultado, formato visual limpio",

    /* ── S9: Reflections ── */
    s9Label: "09 — Reflexiones",
    s9Title: "Lo Que Enseña el Delivery a Escala de Consultoría",
    s9Body1: "Trabajar integrado dentro de una consultoría — a través de industrias, simultáneamente — comprime la madurez de diseño más rápido que casi cualquier otro entorno. No hay espacio para teatro de procesos. Cada entregable tiene que ganarse su lugar frente a presión real de deadlines y resistencia real de stakeholders.",
    s9Body2Pre: "La lección más importante de estos tres engagements fue que ",
    s9Body2Accent: "el apalancamiento de diseño viene de entender la restricción, no de escapar de ella.",
    s9Body2Rest: " Wetrax no podía reconstruir su backend. La clínica no podía cambiar su HIS. EGCAPP no podía simplificar el cumplimiento del sector público. El mejor diseño trabajó con esas realidades, no a pesar de ellas — y encontró la intervención de mayor impacto dentro del espacio que realmente existía.",
    s9Body3: "La segunda lección fue sobre la acumulación de confianza. En cada proyecto, el primer entregable que coincidió con las necesidades reales del cliente — no lo que inicialmente dijeron que necesitaban — fue el que desbloqueó autoridad real de diseño. Ese cambio, de proveedor a partner, es donde ocurre el trabajo de producto más significativo.",
    s9PlaceholderCaption: "Sesión de trabajo — mapeo de restricciones con stakeholders del cliente",
    s9PlaceholderHint: "Foto o ilustración: momento de workshop, artefactos de pizarra, sesión de trabajo colaborativa",

    /* ── ANNEXES ── */
    annexLabel: "Anexos",
    annexTitle: "Artefactos de Proceso",
    annexDesc: "Documentación de soporte, outputs de investigación y artefactos de delivery de los tres engagements.",
    annexACaption: "Anexo A — Template de mapa de restricciones: usado en el kickoff de los tres proyectos",
    annexAHint: "Artefacto de mapeo de restricciones anotado: ejes de sistemas, datos, regulación, stakeholders",
    annexBCaption: "Anexo B — Wetrax: síntesis de entrevistas con usuarios y clustering de insights",
    annexBHint: "Diagrama de afinidad o tarjetas de insights de las sesiones de discovery de Wetrax",
    annexCCaption: "Anexo C — Clínica San Felipe: artefacto completo de service blueprint",
    annexCHint: "Service blueprint completo: journey del paciente + sistemas backstage + puntos de falla",
    annexDCaption: "Anexo D — EGCAPP: árbol de IA y matriz de navegación rol-etapa",
    annexDHint: "Artefacto de IA: estructura de navegación rol × etapa, codificada por color según nivel de permiso",
    annexECaption: "Anexo E — Formato de scope snapshot: artefacto semanal de alineamiento usado en todos los engagements",
    annexEHint: "Template de scope snapshot de una página: cola de prioridades, trabajo activo, ítems diferidos",
    annexFCaption: "Anexo F — Estándares de calidad de handoff y sistema de anotación cross-project",
    annexFHint: "Guía de handoff: convenciones de anotación, formato de documentación de edge cases, specs de componentes",
  } : {
    /* ── HERO ── */
    heroKicker: "ALAZ — Three Products. One Consultancy.",

    /* ── S1: Context ── */
    s1Label: "01 — Context",
    s1Title: "A Consultancy That Ships",
    s1BodyAccent: "ALAZ is a boutique product and technology consultancy",
    s1BodyRest: " specializing in regulated industries, operational systems, and product-led transformations. Engagements span discovery to delivery — embedded with clients from strategy through implementation.",
    s1Body2: "During this engagement period I worked as a product design lead across three simultaneous client programs: Wetrax (sports tech), Clínica San Felipe (healthcare digital services), and EGCAPP (government-adjacent SaaS). Each project carried unique operational constraints, regulatory context, and delivery pressures — demanding radically different approaches from the same foundational toolkit.",
    s1Body3: "What unified the work was a consistent discipline: map the constraint before designing the surface. Understand the stakeholder model before proposing a flow. Deliver something that works inside the real system, not the ideal one.",
    s1MetaRole: "Product Design Lead (Embedded Consultant)",
    s1MetaClients: "Wetrax · Clínica San Felipe · EGCAPP",
    s1MetaScope: "Service Design · Discovery · UX Architecture · Delivery Ops",
    s1MetaTimeline: "Ongoing multi-engagement",
    s1MetaIndustries: "Sports Tech · Healthcare · Public Sector SaaS",
    s1MetaFormat: "Embedded consultancy · Parallel delivery",
    s1PlaceholderCaption: "ALAZ delivery posture — working model across simultaneous client programs",
    s1PlaceholderHint: "Diagram or photo: consultant embedded in client team, working across 3 parallel engagements",

    /* ── S2: Projects ── */
    s2Label: "02 — Projects",
    s2Title: "Three Contexts, One Toolkit",
    s2Body: "Each project surfaced a different type of design challenge. Wetrax demanded fast iteration on consumer-facing sports experiences. Clínica San Felipe required careful navigation of institutional constraints and regulated health data flows. EGCAPP required translating public-sector logic into usable SaaS interfaces.",
    s2Card1Caption: "Wetrax — Sports tech consumer platform",
    s2Card1Hint: "Project overview card: Wetrax logo + key product surface thumbnail",
    s2Card2Caption: "Clínica San Felipe — Healthcare digital services",
    s2Card2Hint: "Project overview card: Clínica San Felipe brand + patient-facing interface",
    s2Card3Caption: "EGCAPP — Government-adjacent SaaS",
    s2Card3Hint: "Project overview card: EGCAPP interface or workflow overview",

    /* ── S3: Wetrax ── */
    s3Label: "03 — Project One",
    s3Title: "Wetrax: Sports Engagement Under Speed",
    s3BodyAccent: "Wetrax is a sports technology platform",
    s3BodyRest: " connecting athletes, coaches, and fans through performance tracking, live event integration, and community features. The challenge: build and iterate fast enough to stay ahead of a competitive sports-tech window — without sacrificing the quality signals that retained users.",
    s3Body2: "The work centered on rationalizing a growing feature backlog into a coherent product experience. Discovery revealed fragmented onboarding, unclear value proposition hierarchy, and a notification system that created more noise than signal. Each issue was addressed through rapid design sprints with close engineering alignment.",
    s3PlaceholderCaption: "Wetrax — main product surface and brand system",
    s3PlaceholderHint: "Wide shot: Wetrax app overview, key screens laid out across device frames",
    s3OnboardingTitle: "Onboarding Rationalization",
    s3OnboardingBody: "The original onboarding flow required 11 steps before a user saw any real product value. Through session analysis and user interviews, the critical path was collapsed to 4 steps — deferring optional profile completion to post-activation. Completion rate improved materially within the first two sprint cycles post-launch.",
    s3OnboardingBeforeCaption: "Before: 11-step onboarding — user drop-off analysis",
    s3OnboardingBeforeHint: "Before/after or annotated flow showing original onboarding complexity",
    s3OnboardingAfterCaption: "After: Rationalized 4-step path to first value",
    s3OnboardingAfterHint: "Redesigned onboarding flow — minimal, value-first structure",
    s3NotifTitle: "Notification Architecture",
    s3NotifBody: "Wetrax had accumulated a mix of marketing pushes, system events, and social signals into a single notification layer. A triage framework was designed to categorize signals by urgency and relevance — informing a new notification center UX that users could actually parse and act on.",
    s3NotifCaption: "Wetrax notification center — signal hierarchy and interaction design",
    s3NotifHint: "Notification center UI with categorized alerts: live events, social, system",

    /* ── S4: Clínica San Felipe ── */
    s4Label: "04 — Project Two",
    s4Title: "Clínica San Felipe: Healthcare Flows Under Institutional Constraint",
    s4BodyAccent: "Clínica San Felipe is a private healthcare institution",
    s4BodyRest: " operating multiple outpatient and specialty services across Lima. The digital transformation mandate was clear — but the institutional environment was complex: legacy EMR integrations, privacy regulation (Ley de Protección de Datos), and deeply embedded administrative workflows that had resisted change for years.",
    s4Body2: "The engagement focused on patient-facing digital services: appointment scheduling, lab result access, and post-consultation communication. Each surface required careful mapping of the data flows available from existing systems, and designing experiences that felt modern to patients without requiring infrastructure the clinic wasn't ready to build.",
    s4PlaceholderCaption: "Clínica San Felipe — patient portal and digital service surfaces",
    s4PlaceholderHint: "Wide: Patient-facing interface — appointment booking, results, communications",
    s4BlueprintTitle: "Service Blueprinting First",
    s4BlueprintBody: "Before any screen was designed, a full service blueprint was built mapping the patient journey across digital touchpoints and backstage systems. This revealed three critical failure points — moments where patient expectation and system capability diverged most sharply. These became the design priority sequence.",
    s4BlueprintCaption: "Service blueprint — patient journey mapped to backstage systems and failure points",
    s4BlueprintHint: "Service blueprint artifact: swimlane diagram, patient vs system vs staff layers",
    s4SchedulingTitle: "Appointment Scheduling UX",
    s4SchedulingBody: "The scheduling flow had to bridge availability data from a legacy HIS system through a middleware layer — introducing latency and occasional inconsistency. The design solution implemented optimistic UI patterns and clear system-state communication, so patients always understood what was confirmed vs. pending — without the clinic needing to replace the backend.",
    s4SchedulingCaption: "Scheduling flow — specialty selection through confirmation",
    s4SchedulingHint: "Mobile screens: doctor selection, time slot picker, confirmation state",
    s4LabCaption: "Lab results access — secure, progressive disclosure pattern",
    s4LabHint: "Results screen with privacy-aware reveal interaction and download action",

    /* ── S5: EGCAPP ── */
    s5Label: "05 — Project Three",
    s5Title: "EGCAPP: Public-Sector Logic in SaaS Form",
    s5BodyAccent: "EGCAPP is a SaaS platform serving government-adjacent organizations",
    s5BodyRest: " — municipalities, public agencies, and regulated entities — with operational management tooling: procurement workflows, compliance tracking, and internal reporting. The core challenge was translating complex public-sector logic into interfaces that frontline staff could actually operate without training overhead.",
    s5Body2: "Procurement processes in particular involved multi-actor approval chains, mandatory documentation stages, and compliance checkpoints — each with its own validation logic. The existing interface treated these as flat forms. The redesign restructured the experience around process stages, surfacing the right controls at the right moment and making compliance status visible at all times.",
    s5PlaceholderCaption: "EGCAPP — procurement and compliance management platform",
    s5PlaceholderHint: "Wide: EGCAPP dashboard, workflow overview, procurement tracker",
    s5IATitle: "Workflow-First IA",
    s5IABody: "Traditional IA organizes around feature categories. EGCAPP required an IA organized around roles and process stages — what a procurement officer needs during initiation is completely different from what they need during review or closure. Role-aware navigation was the structural solution, reducing cognitive overhead for each persona.",
    s5IACaption: "Role-aware IA — navigation organized by process stage, not feature category",
    s5IAHint: "IA diagram: role × stage matrix driving navigation structure",
    s5ComplianceTitle: "Compliance Visibility System",
    s5ComplianceBody: "One of the most critical unmet needs was real-time compliance status awareness. Staff were manually checking requirements against external documents. The design introduced an inline compliance tracker — persistent, contextual, and actionable — that surfaced exactly what was missing before submission, not after rejection.",
    s5ProcurementCaption: "Procurement workflow — stage-gated interface with compliance checkpoint",
    s5ProcurementHint: "Desktop UI: procurement stage view, document checklist, approval actions",
    s5ComplianceCaption: "Inline compliance tracker — missing requirements surfaced before submission",
    s5ComplianceHint: "Compliance panel with status indicators, required docs, and resolution CTAs",

    /* ── S6: Cross-Project Patterns ── */
    s6Label: "06 — Patterns",
    s6Title: "What Ran Across All Three",
    s6BodyAccent: "systems designed around internal logic, not human behavior.",
    s6BodyPre: "Three industries, three product contexts, three client cultures. Yet the same design problems surfaced in all of them — because they shared the same root cause: ",
    s6Body2: "In every engagement, the most valuable early deliverable was a constraint map — not a wireframe. Understanding what the system could and could not do, where data was reliable and where it wasn't, which stakeholders had actual authority versus perceived authority. This groundwork compressed the downstream design cycle and reduced rework significantly.",
    s6Body3: "The second recurring pattern was process visibility. Whether it was a patient tracking an appointment, a procurement officer checking compliance, or a Wetrax user watching a live event — each needed to understand where they were in a process and what came next. Designing that visibility into the interface — rather than assuming users would infer it — was the single highest-leverage intervention across all three products.",
    s6PatternCaption: "Pattern matrix — shared design problems and solutions across three projects",
    s6PatternHint: "Cross-project diagram: constraint mapping → process visibility → delivery alignment",
    s6ConstraintCaption: "Constraint mapping artifact — used at project kickoff across all three engagements",
    s6ConstraintHint: "Constraint map template or filled artifact from one of the three projects",

    /* ── S7: Delivery System ── */
    s7Label: "07 — Delivery",
    s7Title: "Operating Across Parallel Engagements",
    s7BodyAccent: "rhythm, documentation, handoff quality, and scope containment.",
    s7BodyPre: "Running three simultaneous engagements from within a consultancy requires a delivery system, not just good intentions. The operational model was built around four disciplines: ",
    s7Body2: "Each client ran on a weekly cycle — discovery and alignment on Mondays, execution mid-week, review and handoff Fridays. Documentation was non-negotiable: every decision was recorded with its rationale, so clients retained institutional knowledge even as the engagement scope shifted. Handoff artifacts were designed for engineers, not other designers — annotated, edge-case-aware, and directly implementable.",
    s7Body3: "Scope containment was the hardest discipline. Each client naturally wanted more than the engagement could deliver. The mechanism was explicit prioritization artifacts — a single-page scope snapshot updated weekly, shared with stakeholders — that kept the focus on what would move the most important metric before the next checkpoint.",
    s7RhythmCaption: "Delivery rhythm — weekly cadence across three parallel client engagements",
    s7RhythmHint: "Timeline or calendar diagram showing parallel engagement cadences",
    s7HandoffCaption: "Handoff artifact example — annotated, engineering-ready, edge-case documented",
    s7HandoffHint: "Figma handoff screen with redlines, component specs, interaction notes",

    /* ── S8: Outcomes ── */
    s8Label: "08 — Outcomes",
    s8Title: "What Shipped and What Changed",
    s8BodyAccent: "the system became easier to operate for the people who had to use it every day.",
    s8BodyPre: "All three projects delivered to production within their engagement windows. The measure of success varied by client — but in each case, the primary design objective was met: ",
    s8MetaWetrax: "Onboarding completion +↑ · Notification open rate stabilized · 4-step critical path shipped",
    s8MetaClinica: "Patient scheduling self-service live · Lab results digital delivery · Zero backend replacement required",
    s8MetaEgcapp: "Procurement flow redesign shipped · Role-aware IA implemented · Compliance rejection rate reduced",
    s8ShippedCaption: "Shipped product surfaces — Wetrax, Clínica San Felipe and EGCAPP in production",
    s8ShippedHint: "Side-by-side: production screens from all three platforms post-delivery",
    s8ImpactCaption: "Impact summary — key metrics and qualitative outcomes per engagement",
    s8ImpactHint: "Infographic or table: project × metric × outcome, clean visual format",

    /* ── S9: Reflections ── */
    s9Label: "09 — Reflections",
    s9Title: "What Consultancy-Scale Delivery Teaches",
    s9Body1: "Working embedded inside a consultancy — across industries, simultaneously — compresses design maturity faster than almost any other environment. There's no room for process theater. Every deliverable has to earn its place against real deadline pressure and real stakeholder resistance.",
    s9Body2Pre: "The most important lesson across these three engagements was that ",
    s9Body2Accent: "design leverage comes from understanding the constraint, not from escaping it.",
    s9Body2Rest: " Wetrax couldn't rebuild its backend. The clinic couldn't change its HIS. EGCAPP couldn't simplify public-sector compliance. The best design worked with those realities, not despite them — and found the highest-impact intervention within the space that actually existed.",
    s9Body3: "The second lesson was about trust accumulation. In each project, the first deliverable that matched the client's actual needs — not what they initially said they needed — was the one that unlocked real design authority. That shift, from vendor to partner, is where the most meaningful product work happens.",
    s9PlaceholderCaption: "Working session — constraint mapping with client stakeholders",
    s9PlaceholderHint: "Photo or illustration: workshop moment, whiteboard artifacts, collaborative working session",

    /* ── ANNEXES ── */
    annexLabel: "Annexes",
    annexTitle: "Process Artifacts",
    annexDesc: "Supporting documentation, research outputs, and delivery artifacts from all three engagements.",
    annexACaption: "Annex A — Constraint map template: used at kickoff across all three projects",
    annexAHint: "Annotated constraint mapping artifact: systems, data, regulatory, stakeholder axes",
    annexBCaption: "Annex B — Wetrax: user interview synthesis and insight clustering",
    annexBHint: "Affinity diagram or insight cards from Wetrax discovery sessions",
    annexCCaption: "Annex C — Clínica San Felipe: full service blueprint artifact",
    annexCHint: "Complete service blueprint: patient journey + backstage systems + failure points",
    annexDCaption: "Annex D — EGCAPP: IA tree and role-stage navigation matrix",
    annexDHint: "IA artifact: role × stage navigation structure, color-coded by permission level",
    annexECaption: "Annex E — Scope snapshot format: weekly alignment artifact used across engagements",
    annexEHint: "One-page scope snapshot template: priority queue, active work, deferred items",
    annexFCaption: "Annex F — Cross-project handoff quality standards and annotation system",
    annexFHint: "Handoff guide: annotation conventions, edge case documentation format, component specs",
  };

  return (
    <div className="cs-body">

      {/* ── 0. HERO ──────────────────────────────────────────── */}
      <section className="cs-section cs-section--hero">
        <CasePlaceholder
          id="ALAZ-HERO-01"
          ratio="hero"
          hint="Full-bleed brand shot — ALAZ office environment or multi-project overview composition"
        />
        <div className="cs-hero-caption">
          <Typography variant="micro">
            <Accent>{c.heroKicker}</Accent>
          </Typography>
        </div>
      </section>

      {/* ── 1. CONTEXT & ROLE ────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s1Label}
          </Typography>
          <Typography variant="h2">
            {c.s1Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>{c.s1BodyAccent}</Accent>{c.s1BodyRest}
          </Typography>
          <Typography variant="bodyMd">
            {c.s1Body2}
          </Typography>
          <Typography variant="bodyMd">
            {c.s1Body3}
          </Typography>
        </div>

        {/* Metadata */}
        <div className="cs-meta cs-meta--3col">
          <div className="cs-meta__item">
            <span className="cs-meta__label">ROLE</span>
            <span className="cs-meta__value">{c.s1MetaRole}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">CLIENTS</span>
            <span className="cs-meta__value">{c.s1MetaClients}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">SCOPE</span>
            <span className="cs-meta__value">{c.s1MetaScope}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">TIMELINE</span>
            <span className="cs-meta__value">{c.s1MetaTimeline}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">INDUSTRIES</span>
            <span className="cs-meta__value">{c.s1MetaIndustries}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">FORMAT</span>
            <span className="cs-meta__value">{c.s1MetaFormat}</span>
          </div>
        </div>

        <CasePlaceholder
          id="ALAZ-01-01"
          ratio="landscape"
          caption={c.s1PlaceholderCaption}
          hint={c.s1PlaceholderHint}
        />
      </section>

      {/* ── 2. THREE PROJECTS AT A GLANCE ────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s2Label}
          </Typography>
          <Typography variant="h2">
            {c.s2Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            {c.s2Body}
          </Typography>
        </div>

        {/* Three project overview cards */}
        <div className="cs-grid cs-grid--3col">
          <CasePlaceholder
            id="ALAZ-02-01"
            ratio="card"
            caption={c.s2Card1Caption}
            hint={c.s2Card1Hint}
          />
          <CasePlaceholder
            id="ALAZ-02-02"
            ratio="card"
            caption={c.s2Card2Caption}
            hint={c.s2Card2Hint}
          />
          <CasePlaceholder
            id="ALAZ-02-03"
            ratio="card"
            caption={c.s2Card3Caption}
            hint={c.s2Card3Hint}
          />
        </div>
      </section>

      {/* ── 3. WETRAX ────────────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s3Label}
          </Typography>
          <Typography variant="h2">
            {c.s3Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>{c.s3BodyAccent}</Accent>{c.s3BodyRest}
          </Typography>
          <Typography variant="bodyMd">
            {c.s3Body2}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-03-01"
          ratio="wide"
          caption={c.s3PlaceholderCaption}
          hint={c.s3PlaceholderHint}
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">{c.s3OnboardingTitle}</Typography>
          <Typography variant="bodyMd">
            {c.s3OnboardingBody}
          </Typography>
        </div>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-03-02"
            ratio="portrait"
            caption={c.s3OnboardingBeforeCaption}
            hint={c.s3OnboardingBeforeHint}
          />
          <CasePlaceholder
            id="ALAZ-03-03"
            ratio="portrait"
            caption={c.s3OnboardingAfterCaption}
            hint={c.s3OnboardingAfterHint}
          />
        </div>

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">{c.s3NotifTitle}</Typography>
          <Typography variant="bodyMd">
            {c.s3NotifBody}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-03-04"
          ratio="landscape"
          caption={c.s3NotifCaption}
          hint={c.s3NotifHint}
        />
      </section>

      {/* ── 4. CLÍNICA SAN FELIPE ────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s4Label}
          </Typography>
          <Typography variant="h2">
            {c.s4Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>{c.s4BodyAccent}</Accent>{c.s4BodyRest}
          </Typography>
          <Typography variant="bodyMd">
            {c.s4Body2}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-04-01"
          ratio="wide"
          caption={c.s4PlaceholderCaption}
          hint={c.s4PlaceholderHint}
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">{c.s4BlueprintTitle}</Typography>
          <Typography variant="bodyMd">
            {c.s4BlueprintBody}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-04-02"
          ratio="landscape"
          caption={c.s4BlueprintCaption}
          hint={c.s4BlueprintHint}
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">{c.s4SchedulingTitle}</Typography>
          <Typography variant="bodyMd">
            {c.s4SchedulingBody}
          </Typography>
        </div>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-04-03"
            ratio="portrait"
            caption={c.s4SchedulingCaption}
            hint={c.s4SchedulingHint}
          />
          <CasePlaceholder
            id="ALAZ-04-04"
            ratio="portrait"
            caption={c.s4LabCaption}
            hint={c.s4LabHint}
          />
        </div>
      </section>

      {/* ── 5. EGCAPP ────────────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s5Label}
          </Typography>
          <Typography variant="h2">
            {c.s5Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            <Accent>{c.s5BodyAccent}</Accent>{c.s5BodyRest}
          </Typography>
          <Typography variant="bodyMd">
            {c.s5Body2}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-05-01"
          ratio="wide"
          caption={c.s5PlaceholderCaption}
          hint={c.s5PlaceholderHint}
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">{c.s5IATitle}</Typography>
          <Typography variant="bodyMd">
            {c.s5IABody}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-05-02"
          ratio="landscape"
          caption={c.s5IACaption}
          hint={c.s5IAHint}
        />

        <div className="cs-prose cs-prose--later">
          <Typography variant="h3">{c.s5ComplianceTitle}</Typography>
          <Typography variant="bodyMd">
            {c.s5ComplianceBody}
          </Typography>
        </div>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-05-03"
            ratio="portrait"
            caption={c.s5ProcurementCaption}
            hint={c.s5ProcurementHint}
          />
          <CasePlaceholder
            id="ALAZ-05-04"
            ratio="portrait"
            caption={c.s5ComplianceCaption}
            hint={c.s5ComplianceHint}
          />
        </div>
      </section>

      {/* ── 6. CROSS-PROJECT PATTERNS ────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s6Label}
          </Typography>
          <Typography variant="h2">
            {c.s6Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            {c.s6BodyPre}<Accent>{c.s6BodyAccent}</Accent>
          </Typography>
          <Typography variant="bodyMd">
            {c.s6Body2}
          </Typography>
          <Typography variant="bodyMd">
            {c.s6Body3}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-06-01"
          ratio="wide"
          caption={c.s6PatternCaption}
          hint={c.s6PatternHint}
        />

        <CasePlaceholder
          id="ALAZ-06-02"
          ratio="landscape"
          caption={c.s6ConstraintCaption}
          hint={c.s6ConstraintHint}
        />
      </section>

      {/* ── 7. DELIVERY SYSTEM ───────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s7Label}
          </Typography>
          <Typography variant="h2">
            {c.s7Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            {c.s7BodyPre}<Accent>{c.s7BodyAccent}</Accent>
          </Typography>
          <Typography variant="bodyMd">
            {c.s7Body2}
          </Typography>
          <Typography variant="bodyMd">
            {c.s7Body3}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-07-01"
          ratio="landscape"
          caption={c.s7RhythmCaption}
          hint={c.s7RhythmHint}
        />

        <CasePlaceholder
          id="ALAZ-07-02"
          ratio="landscape"
          caption={c.s7HandoffCaption}
          hint={c.s7HandoffHint}
        />
      </section>

      {/* ── 8. OUTCOMES ──────────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s8Label}
          </Typography>
          <Typography variant="h2">
            {c.s8Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            {c.s8BodyPre}<Accent>{c.s8BodyAccent}</Accent>
          </Typography>
        </div>

        {/* Outcome metrics grid */}
        <div className="cs-meta cs-meta--3col">
          <div className="cs-meta__item">
            <span className="cs-meta__label">WETRAX</span>
            <span className="cs-meta__value">{c.s8MetaWetrax}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">CLÍNICA SAN FELIPE</span>
            <span className="cs-meta__value">{c.s8MetaClinica}</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__label">EGCAPP</span>
            <span className="cs-meta__value">{c.s8MetaEgcapp}</span>
          </div>
        </div>

        <CasePlaceholder
          id="ALAZ-08-01"
          ratio="wide"
          caption={c.s8ShippedCaption}
          hint={c.s8ShippedHint}
        />

        <CasePlaceholder
          id="ALAZ-08-02"
          ratio="landscape"
          caption={c.s8ImpactCaption}
          hint={c.s8ImpactHint}
        />
      </section>

      {/* ── 9. REFLECTIONS ───────────────────────────────────── */}
      <section className="cs-section">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.s9Label}
          </Typography>
          <Typography variant="h2">
            {c.s9Title}
          </Typography>
        </header>

        <div className="cs-prose">
          <Typography variant="bodyLg">
            {c.s9Body1}
          </Typography>
          <Typography variant="bodyMd">
            {c.s9Body2Pre}<Accent>{c.s9Body2Accent}</Accent>{c.s9Body2Rest}
          </Typography>
          <Typography variant="bodyMd">
            {c.s9Body3}
          </Typography>
        </div>

        <CasePlaceholder
          id="ALAZ-09-01"
          ratio="landscape"
          caption={c.s9PlaceholderCaption}
          hint={c.s9PlaceholderHint}
        />
      </section>

      {/* ── ANNEXES ──────────────────────────────────────────── */}
      <section className="cs-section cs-section--annexes">
        <header className="cs-section__header">
          <Typography variant="micro" className="cs-section__label">
            {c.annexLabel}
          </Typography>
          <Typography variant="h2">{c.annexTitle}</Typography>
          <Typography variant="bodyMd">
            {c.annexDesc}
          </Typography>
        </header>

        <div className="cs-grid cs-grid--2col">
          <CasePlaceholder
            id="ALAZ-ANNEX-01"
            ratio="landscape"
            caption={c.annexACaption}
            hint={c.annexAHint}
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-02"
            ratio="landscape"
            caption={c.annexBCaption}
            hint={c.annexBHint}
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-03"
            ratio="landscape"
            caption={c.annexCCaption}
            hint={c.annexCHint}
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-04"
            ratio="landscape"
            caption={c.annexDCaption}
            hint={c.annexDHint}
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-05"
            ratio="landscape"
            caption={c.annexECaption}
            hint={c.annexEHint}
          />
          <CasePlaceholder
            id="ALAZ-ANNEX-06"
            ratio="landscape"
            caption={c.annexFCaption}
            hint={c.annexFHint}
          />
        </div>
      </section>

    </div>
  );
}
