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
    /* ── S1 Hero ── */
    heroKicker: "Trabajo seleccionado — Caso de estudio",
    heroAccent: "Humanizando la experiencia del campus virtual",
    heroAccentRest: " a través de una UX guiada y orientada a la comunidad.",
    heroBody: "EVA fue parte de un esfuerzo más amplio para evolucionar un campus virtual de una plataforma académica funcional hacia un entorno digital más humano, más guiado y más conectado. Mi contribución se centró en el login, la recuperación de contraseña y especialmente las notificaciones — tratándolas no como pantallas aisladas, sino como momentos esenciales en cómo los estudiantes se orientan dentro de la vida académica.",
    s1MetaRoleLabel: "Rol",
    s1MetaRoleValue: "Líder UX/UI para los flujos asignados",
    s1MetaScopeLabel: "Alcance",
    s1MetaScopeValue: "Síntesis de investigación, definición de hipótesis, validación con usuarios, rediseño de login, rediseño de recuperación de contraseña, diseño del sistema de notificaciones, prototipado, testing y handoff",
    s1MetaFocusLabel: "Enfoque",
    s1MetaFocusValue: "Humanizar la experiencia del campus virtual a través de un acceso más guiado y una comunicación más clara",
    s1MetaInstitutionLabel: "Institución",
    s1MetaInstitutionValue: "InLearning Institutes",
    s1MetaBrandsLabel: "Marcas involucradas",
    s1MetaBrandsValue: "IDAT, ZEGEL, IPAE, Corriente Alterna",
    s1MetaOutputLabel: "Entregables",
    s1MetaOutputValue: "Rediseño de login, flujos de recuperación de contraseña, sistema de notificaciones, prototipos, resultados de testing y handoff listo para implementación",

    /* ── S2 Overview ── */
    s2Kicker: "02 — Resumen",
    s2Title: "El caso en un minuto",
    s2Body: "EVA era una plataforma de campus virtual utilizada en los institutos de InLearning en Perú. Originalmente moldeada por la urgencia de la educación virtual durante la pandemia, luego se convirtió en el foco de un esfuerzo de rediseño más amplio orientado a hacer que la plataforma se sintiera más coherente, más humana y más alineada con la realidad social y académica de la vida en el campus.",
    s2WhatItWasLabel: "Qué era",
    s2WhatItWasBody: "Una plataforma de campus virtual para estudiantes, docentes y personal académico en múltiples instituciones.",
    s2WhatChangedLabel: "Qué cambió",
    s2WhatChangedBody: "El rediseño movió partes clave de la experiencia desde un modelo puramente funcional hacia un entorno digital más guiado y orientado a la comunidad.",
    s2WhyItMatteredLabel: "Por qué importaba",
    s2WhyItMatteredBody: "Porque las plataformas académicas no son solo herramientas para tareas. También moldean la orientación, el sentido de pertenencia, la comunicación y el tono emocional del aprendizaje.",
    s2PlaceholderHint: "Vista general de la plataforma o diagrama del sistema",

    /* ── S3 Context ── */
    s3Kicker: "03 — Contexto",
    s3Title: "El contexto",
    s3Body1: "EVA surgió después de la pandemia como parte de un esfuerzo más amplio para ir más allá de las herramientas de educación virtual de emergencia y construir una plataforma institucional más estable. Lo que inicialmente se manejó a través de Zoom y otras soluciones urgentes se convirtió en un problema de educación digital a largo plazo: cómo crear un campus virtual que pudiera apoyar la vida académica de manera más significativa.",
    s3Body2: "El esfuerzo de rediseño reunió a múltiples equipos trabajando en diferentes partes de la plataforma — incluyendo home, onboarding, design system, flujos académicos y otras áreas clave. Mi equipo se enfocó en login, recuperación de contraseña y notificaciones, manteniéndose alineado con la visión de producto más amplia y los equipos internos responsables del negocio y la continuidad de la plataforma.",
    s3Hint1: "Contexto institucional — antecedentes de la plataforma",
    s3Hint2: "Esfuerzo de rediseño — contexto multi-equipo",

    /* ── S4 Thesis ── */
    s4Kicker: "04 — Tesis",
    s4Title: "La tesis",
    s4Body1: "La idea central detrás del rediseño no era simplemente mejorar la usabilidad en flujos aislados. Era hacer que el campus virtual se sintiera más como un campus real: un lugar donde los estudiantes son guiados, informados, conectados y continuamente orientados en vez de dejados solos dentro de una interfaz administrativa fría.",
    s4Body2: "Eso significaba diseñar para más que eficiencia. Significaba pensar en el tono, la visibilidad, la comunicación y cómo los momentos digitales — como el login o las notificaciones — podían apoyar un sentido más fuerte de claridad, presencia y continuidad académica.",
    s4Callout: "El objetivo no era solo hacer EVA más fácil de usar. Era hacer que se sintiera más humano.",
    s4PlaceholderHint: "Concepto o visión — sensación de campus vs. portal frío",

    /* ── S5 Role ── */
    s5Kicker: "05 — Rol",
    s5Title: "Mi rol",
    s5Body1: "Lideré el trabajo en mis flujos asignados a lo largo de la interpretación de investigación, construcción de hipótesis, validación, definición UX/UI, prototipado, testing y handoff final. Mis áreas de enfoque principales fueron login, recuperación de contraseña y notificaciones — siendo las notificaciones la intervención más estratégica y compleja dentro de mi alcance.",
    s5Body2: "También colaboré estrechamente con los otros equipos trabajando en partes adyacentes de la plataforma, así como con la contraparte interna de InLearning y los stakeholders orientados al negocio que guiaban el esfuerzo de rediseño más amplio. Esto fue importante porque la consistencia a través de la plataforma dependía de coordinación continua, no de diseño de pantallas aislado.",
    s5Block1Label: "Investigación y encuadre de hipótesis",
    s5Block1Body: "Revisar la investigación de usuarios disponible, puntos de dolor, entrevistas y hallazgos internos para definir la dirección correcta.",
    s5Block2Label: "Diseño UX y UI",
    s5Block2Body: "Diseñar los flujos asignados y traducir una visión de plataforma más amplia en decisiones de interfaz usables y consistentes.",
    s5Block3Label: "Validación e iteración",
    s5Block3Body: "Testear ideas con usuarios, refinar propuestas y alinear decisiones con stakeholders internos.",
    s5Block4Label: "Coherencia entre equipos",
    s5Block4Body: "Trabajar con equipos paralelos y la contraparte interna para mantener la experiencia alineada a través de la plataforma.",
    s5PlaceholderHint: "Opcional — mapa de contribución o vista general del rol",

    /* ── S6 Process ── */
    s6Kicker: "06 — Proceso",
    s6Title: "El proceso",
    s6Body1: "El trabajo siguió un proceso estructurado de diseño de producto. El equipo interno ya había realizado un trabajo de descubrimiento sustancial — incluyendo entrevistas, encuestas y mapeo de puntos de dolor a lo largo de la plataforma. Basándonos en los flujos que nos fueron asignados, el siguiente paso fue revisar esos hallazgos, formular hipótesis y validar si la dirección propuesta realmente abordaba los problemas que los usuarios estaban experimentando.",
    s6Body2: "A partir de ahí, el trabajo avanzó a través de definición en baja fidelidad, alineación con stakeholders, diseño en media y alta fidelidad, creación de prototipos, testing con usuarios, refinamiento y documentación final de handoff. El proceso fue colaborativo, iterativo y fundamentado tanto en investigación como en la urgencia de implementación.",
    s6SubheadLabel: "Del descubrimiento interno a propuestas de rediseño testeadas",
    s6Step1Hint: "Insumos de investigación",
    s6Step1Label: "Insumos de investigación",
    s6Step2Hint: "Hipótesis y dirección",
    s6Step2Label: "Hipótesis y dirección",
    s6Step3Hint: "Prototipo y testing",
    s6Step3Label: "Prototipo y testing",
    s6Step4Hint: "Refinamiento y handoff",
    s6Step4Label: "Refinamiento y handoff",

    /* ── S7 Mapping ── */
    s7Kicker: "07 — Alcance de la plataforma",
    s7Title: "Mapeando la plataforma",
    s7Body: "EVA era más que una sola interfaz. Incluía dashboards académicos, acceso a cursos, notificaciones, onboarding, perfiles de usuario, secciones de lectura y repositorios, newsletters y otros puntos de contacto digitales relacionados con la vida académica. Mi contribución estaba dentro de ese ecosistema más grande, pero tuvo un efecto directo en cómo los usuarios entraban, recuperaban acceso y se mantenían informados dentro de la plataforma.",
    s7Mod1Hint: "Módulo de login",
    s7Mod1Label: "Login",
    s7Mod2Hint: "Recuperación de contraseña",
    s7Mod2Label: "Recuperación de contraseña",
    s7Mod3Hint: "Notificaciones",
    s7Mod3Label: "Notificaciones",
    s7Mod4Hint: "Home y capa de comunidad",
    s7Mod4Label: "Home y capa de comunidad",
    s7Mod5Hint: "Dashboard académico",
    s7Mod5Label: "Dashboard académico",
    s7Mod6Hint: "Espacios de aprendizaje y repositorios",
    s7Mod6Label: "Espacios de aprendizaje y repositorios",

    /* ── S8 Login ── */
    s8Kicker: "08 — Acceso",
    s8Title: "Diseñando el acceso: login",
    s8Body1: "El rediseño del login no se trataba de reinventar un patrón familiar. Se trataba de hacer que el acceso se sintiera más coherente, más maduro y más alineado institucionalmente. La versión anterior se sentía visualmente débil e inconsistente con el tono que la plataforma buscaba establecer. El rediseño por lo tanto se enfocó en claridad visual, un carácter institucional más fuerte y una presentación más sobria y creíble.",
    s8Body2: "Esto fue especialmente importante porque EVA servía a diferentes instituciones con diferentes identidades. La experiencia de login necesitaba sentirse lo suficientemente estandarizada para ser coherente, pero lo suficientemente flexible para preservar el sentido de identidad de cada institución.",
    s8SubheadLabel: "Un patrón familiar, rediseñado para coherencia y tono",
    s8Hint1: "Rediseño de login — vista principal",
    s8Hint2: "Detalle de login o variante institucional",
    s8Hint3: "Estado complementario de login o comparación",

    /* ── S9 Recovery ── */
    s9Kicker: "09 — Acceso",
    s9Title: "Diseñando el acceso: recuperación de contraseña",
    s9Body1: "La recuperación de contraseña fue tratada como un flujo utilitario de alta frecuencia que necesitaba claridad más que novedad. El diseño evitó complejidad innecesaria y en su lugar se enfocó en hacer que el proceso se sintiera intuitivo, estándar y fácil de resolver a través de patrones de interacción familiares.",
    s9Body2: "En lugar de sobrediseñar una tarea conocida, el rediseño alineó el flujo con las expectativas del usuario, redujo la fricción y lo llevó visualmente al mismo lenguaje del resto de la plataforma.",
    s9SubheadLabel: "Patrones estándar, fricción reducida",
    s9Hint1: "Flujo de recuperación de contraseña — secuencia completa",
    s9Hint2: "Detalle del paso de recuperación",
    s9Hint3: "Confirmación de recuperación o estado de error",

    /* ── S10 Notifications ── */
    s10Kicker: "10 — Intervención central",
    s10Title: "La intervención central: notificaciones",
    s10Body1: "Las notificaciones se convirtieron en la parte más estratégica de mi contribución porque abordaban una brecha real en cómo la plataforma se comunicaba con los estudiantes. Antes de esta intervención, no existía un espacio asincrónico claro donde la información académica, financiera e institucional pudiera llegar a los usuarios de una manera que se sintiera estructurada, visible y manejable.",
    s10Body2: "El desafío no era simplemente agregar notificaciones. Era crear un sistema que pudiera soportar muchos tipos de información sin abrumar al usuario. Alertas académicas, calificaciones, recordatorios de pago, fechas límite, actualizaciones y mensajes promocionales o institucionales competían por la atención. El diseño por lo tanto debía establecer jerarquía, claridad y un sentido más fuerte de control del usuario.",
    s10Callout: "Las notificaciones no eran un complemento funcional. Eran una nueva capa de comunicación entre la institución y el estudiante.",
    s10Hint: "Notificaciones — vista compuesta principal",

    /* ── S11 Notification system ── */
    s11Kicker: "11 — Diseño del sistema",
    s11Title: "Diseñando el sistema de notificaciones",
    s11Body1: "Una de las decisiones más importantes fue no convertir las notificaciones en una página independiente completa. En su lugar, el sistema fue diseñado como una capa desplegable que podía accederse rápidamente y permanecer integrada con el uso cotidiano de la plataforma. Esto hizo que las notificaciones se sintieran presentes y útiles sin convertirlas en un flujo de destino pesado.",
    s11Body2: "El diseño de interacción también tuvo que definir prioridades, estados de leído y no leído, categorías, estados vacíos y lógica de preferencias. El sistema necesitaba soportar un amplio rango de casos de uso mientras seguía ayudando a los usuarios a sentirse en control de lo que les importaba.",
    s11SubheadLabel: "Balanceando necesidades institucionales y control del usuario",
    s11SubheadBody: "El lado del negocio quería un alcance de comunicación fuerte, pero la experiencia de usuario no podía convertirse en una máquina de sobrecarga. El diseño final creó una estructura donde algunas notificaciones estaban activas por defecto mientras seguía permitiendo a los usuarios gestionar aspectos de su experiencia de notificaciones de manera más selectiva.",
    s11Hint1: "Flujo del sistema de notificaciones — vista de arquitectura",
    s11State1Hint: "Estados de leído / no leído",
    s11State1Label: "Estados de leído y no leído",
    s11State2Hint: "Categorías y jerarquía",
    s11State2Label: "Categorías y jerarquía",
    s11State3Hint: "Estado vacío",
    s11State3Label: "Estado vacío",
    s11State4Hint: "Preferencias y gestión",
    s11State4Label: "Lógica de preferencias",

    /* ── S12 Tone ── */
    s12Kicker: "12 — Tono y guía",
    s12Title: "Humanizando el tono de la plataforma",
    s12Body1: "Una parte clave del rediseño fue hacer que EVA se sintiera menos mecánica y más de apoyo. Esto se reflejó no solo en la estructura de la interfaz, sino también en el tono de voz, la lógica de onboarding y la idea de EVA como una presencia más orientadora dentro de la plataforma. El producto necesitaba hacer más que mostrar tareas. Necesitaba orientar y acompañar a los estudiantes de una manera que se sintiera más clara y más humana.",
    s12Body2: "Esto fue especialmente relevante en educación, donde la confusión y la distancia pueden convertir rápidamente una plataforma en una fuente de frustración en vez de apoyo. Pequeños momentos — como la forma en que un estudiante inicia sesión, recibe información o entiende qué hacer a continuación — contribuyen directamente a esa experiencia emocional más amplia.",
    s12Hint1: "Tono y guía — concepto de voz de la plataforma",
    s12Hint2: "Detalle de tono o momento de onboarding",
    s12Hint3: "EVA como presencia orientadora",

    /* ── S13 Research ── */
    s13Kicker: "13 — Investigación y validación",
    s13Title: "Investigación, validación y testing",
    s13Body1: "El rediseño estuvo fundamentado tanto en investigación interna previa como en trabajo de validación directo durante el proyecto. Entrevistas existentes, encuestas y hallazgos internos le dieron al equipo un punto de partida, pero cada flujo aún requería definición de hipótesis y testing focalizado para confirmar si las soluciones propuestas realmente estaban funcionando.",
    s13Body2: "Esto significó validar supuestos con usuarios, recopilar insights de sesiones de testing y refinar los diseños antes de la entrega final. El trabajo por lo tanto balanceó los objetivos institucionales con el comportamiento observable de los usuarios y su feedback.",
    s13Hint1: "Vista general de investigación — testing y síntesis",
    s13Hint2: "Referencia de entrevista o encuesta",
    s13Hint3: "Sesión de testing o hallazgos",
    s13Hint4: "Resultado de iteración desde la validación",

    /* ── S14 Consistency ── */
    s14Kicker: "14 — Consistencia de la plataforma",
    s14Title: "Diseñando para la consistencia a través de una plataforma compartida",
    s14Body1: "Debido a que el rediseño fue distribuido entre múltiples equipos y flujos, la consistencia fue una preocupación esencial. Cada intervención tenía que tener sentido por sí sola, pero también sentirse alineada con la experiencia más amplia de EVA. Esto requirió coordinación continua con equipos adyacentes, contrapartes internas de la plataforma y el esfuerzo más amplio de diseño y producto que daba forma al campus virtual.",
    s14Body2: "El valor del trabajo por lo tanto también vino de mantener las decisiones locales conectadas a un lenguaje de plataforma más amplio en lugar de resolver cada pantalla de forma aislada.",
    s14Hint: "Consistencia — alineación entre equipos o referencia de design system",

    /* ── S15 Before/After ── */
    s15Kicker: "15 — Transformación",
    s15Title: "Antes y después",
    s15Body1: "El rediseño mejoró la claridad, el tono institucional, la consistencia visual y la capacidad del usuario para entender qué requería atención. En particular, las notificaciones crearon una capa de comunicación más clara que ayudó a los estudiantes a mantenerse informados sin depender enteramente de canales desconectados o del descubrimiento pasivo dentro de la plataforma.",
    s15Body2: "El resultado fue una experiencia de plataforma que se sentía más madura, más coordinada y más de apoyo en las rutinas cotidianas de la vida académica.",
    s15BeforeHint1: "Antes — login o acceso",
    s15BeforeLabel1: "Antes",
    s15AfterHint1: "Después — rediseño de login",
    s15AfterLabel1: "Después",
    s15BeforeHint2: "Antes — sin capa de notificaciones",
    s15BeforeLabel2: "Antes",
    s15AfterHint2: "Después — sistema de notificaciones",
    s15AfterLabel2: "Después",

    /* ── S16 Outcomes ── */
    s16Kicker: "16 — Resultados",
    s16Title: "Resultados e implementación",
    s16Body1: "El alcance completo de mis flujos asignados fue implementado. Esto importó porque el trabajo no fue solo exploratorio o especulativo; se convirtió en parte de la experiencia real de la plataforma. El rediseño mejoró la claridad de acceso, fortaleció el tono institucional de la plataforma e introdujo una nueva capa de notificaciones que ayudó a los estudiantes a entender qué requería atención más rápidamente.",
    s16Body2: "De manera más amplia, el proyecto contribuyó a una plataforma que se sentía menos fragmentada y más humana en la forma en que se dirigía a los estudiantes. Demostró cómo el UX educativo puede apoyar no solo tareas, sino también guía, continuidad y un sentido más fuerte de presencia académica digital.",
    s16Value1Label: "Acceso más claro",
    s16Value1Body: "Los flujos de login y recuperación se volvieron más coherentes y visualmente alineados con la plataforma.",
    s16Value2Label: "Comunicación más fuerte",
    s16Value2Body: "Las notificaciones introdujeron un diálogo asincrónico más estructurado entre la institución y el estudiante.",
    s16Value3Label: "Experiencia más humana",
    s16Value3Body: "El rediseño contribuyó a una plataforma que se sentía más de apoyo, más comprensible y más coherente institucionalmente.",
    s16Hint1: "Referencia de implementación o producto en vivo",
    s16Hint2: "Resultado o detalle de valor",
    s16Hint3: "Evidencia de respaldo o referencia de entrega",

    /* ── S17 Practice ── */
    s17Kicker: "17 — Práctica",
    s17Title: "Qué representa este proyecto en mi práctica",
    s17Body1: "EVA refleja una parte importante de mi práctica de diseño: trabajar en la intersección de educación, comportamiento humano, sistemas de interfaz y pensamiento de producto. Es un caso donde el UX no fue solo sobre completar tareas, sino sobre hacer que un entorno digital se sienta más orientado, más relacional y más alineado con la realidad vivida de sus usuarios.",
    s17Body2: "Sigue siendo uno de los ejemplos más claros de cómo abordo el diseño como estructura funcional y mediación humana.",
    s17Hint: "Hero de cierre — vista compuesta de la plataforma",

    /* ── S18 Credits ── */
    s18Kicker: "18 — Créditos",
    s18Title: "Rol y colaboración",
    s18Body: "Este caso refleja mi liderazgo y ejecución a lo largo de los flujos asignados de login, recuperación de contraseña y notificaciones — incluyendo interpretación de investigación, encuadre de hipótesis, diseño UX/UI, validación, iteración y handoff final. El proyecto fue desarrollado en coordinación con equipos externos adyacentes, la contraparte interna de InLearning y los stakeholders orientados al negocio que guiaban el esfuerzo de rediseño.",
    s18RoleLabel: "Mi rol",
    s18RoleValue: "Liderazgo de diseño en mis flujos asignados, incluyendo dirección basada en investigación, definición UX/UI, testing y entrega.",
    s18ScopeLabel: "Alcance asignado",
    s18ScopeValue: "Login, recuperación de contraseña y notificaciones.",
    s18CollabLabel: "Colaboración",
    s18CollabValue: "Coordinación entre equipos con otros flujos de rediseño, representantes internos de la plataforma y stakeholders del negocio.",
    s18ImplLabel: "Implementación",
    s18ImplValue: "El alcance completo de mis flujos fue implementado en el producto en vivo.",
    s18Hint: "Opcional — referencia del equipo o la colaboración",

    /* ── Annexes ── */
    annexKicker: "Materiales de apoyo",
    annexTitle: "Materiales de investigación y proceso de apoyo",
    annexBody: "Materiales de referencia, wireframes, resultados de investigación y exploraciones tempranas que apoyaron el proceso de rediseño.",
    annex1Hint: "Wireframes",
    annex1Caption: "Wireframes",
    annex2Hint: "Resúmenes de investigación",
    annex2Caption: "Resúmenes de investigación",
    annex3Hint: "Clips o capturas de entrevistas",
    annex3Caption: "Clips o capturas de entrevistas",
    annex4Hint: "Referencias de benchmark",
    annex4Caption: "Referencias de benchmark",
    annex5Hint: "Exploraciones tempranas",
    annex5Caption: "Exploraciones tempranas",
    annex6Hint: "Documentación de handoff",
    annex6Caption: "Documentación de handoff",
  } : {
    /* ── S1 Hero ── */
    heroKicker: "Selected Work — Case Study",
    heroAccent: "Humanizing the virtual campus experience",
    heroAccentRest: " through guided, community-aware UX.",
    heroBody: "EVA was part of a broader effort to evolve a virtual campus from a functional academic platform into a more human, more guided, and more connected digital environment. My contribution focused on login, password recovery, and especially notifications — treating them not as isolated screens, but as essential moments in how students orient themselves inside academic life.",
    s1MetaRoleLabel: "Role",
    s1MetaRoleValue: "UX/UI Lead for assigned streams",
    s1MetaScopeLabel: "Scope",
    s1MetaScopeValue: "Research synthesis, hypothesis definition, user validation, login redesign, password recovery redesign, notification system design, prototyping, testing, and handoff",
    s1MetaFocusLabel: "Focus",
    s1MetaFocusValue: "Humanizing the virtual campus experience through guided access and clearer communication",
    s1MetaInstitutionLabel: "Institution",
    s1MetaInstitutionValue: "InLearning Institutes",
    s1MetaBrandsLabel: "Brands involved",
    s1MetaBrandsValue: "IDAT, ZEGEL, IPAE, Corriente Alterna",
    s1MetaOutputLabel: "Output",
    s1MetaOutputValue: "Login redesign, password recovery flows, notification system, prototypes, testing outputs, and implementation-ready handoff",

    /* ── S2 Overview ── */
    s2Kicker: "02 — Overview",
    s2Title: "The case in one minute",
    s2Body: "EVA was a virtual campus platform used across InLearning Institutes in Peru. Originally shaped by the urgency of pandemic-driven virtual education, it later became the focus of a broader redesign effort aimed at making the platform feel more coherent, more human, and more aligned with the social and academic reality of campus life.",
    s2WhatItWasLabel: "What it was",
    s2WhatItWasBody: "A virtual campus platform for students, teachers, and academic staff across multiple institutions.",
    s2WhatChangedLabel: "What changed",
    s2WhatChangedBody: "The redesign moved key parts of the experience away from a purely functional model toward a more guided and community-aware digital environment.",
    s2WhyItMatteredLabel: "Why it mattered",
    s2WhyItMatteredBody: "Because academic platforms are not only tools for tasks. They also shape orientation, belonging, communication, and the emotional tone of learning.",
    s2PlaceholderHint: "Platform overview or system diagram",

    /* ── S3 Context ── */
    s3Kicker: "03 — Context",
    s3Title: "The context",
    s3Body1: "EVA emerged after the pandemic as part of a broader effort to move beyond emergency virtual learning tools and build a more stable institutional platform. What had initially been handled through Zoom and other urgent solutions became a longer-term digital education problem: how to create a virtual campus that could support academic life more meaningfully.",
    s3Body2: "The redesign effort brought together multiple teams working on different parts of the platform — including home, onboarding, design system, academic flows, and other key areas. My team focused on login, password recovery, and notifications, while staying aligned with the broader product vision and the internal teams responsible for business and platform continuity.",
    s3Hint1: "Institutional context — platform background",
    s3Hint2: "Redesign effort — multi-team context",

    /* ── S4 Thesis ── */
    s4Kicker: "04 — Thesis",
    s4Title: "The thesis",
    s4Body1: "The central idea behind the redesign was not simply to improve usability in isolated flows. It was to make the virtual campus feel more like a real campus: a place where students are guided, informed, connected, and continuously oriented rather than left alone inside a cold administrative interface.",
    s4Body2: "That meant designing for more than efficiency. It meant thinking about tone, visibility, communication, and how digital moments — such as login or notifications — could support a stronger sense of clarity, presence, and academic continuity.",
    s4Callout: "The goal was not just to make EVA easier to use. It was to make it feel more human.",
    s4PlaceholderHint: "Concept or vision — campus feeling vs. cold portal",

    /* ── S5 Role ── */
    s5Kicker: "05 — Role",
    s5Title: "My role",
    s5Body1: "I led the work on my assigned streams across research interpretation, hypothesis building, validation, UX/UI definition, prototyping, testing, and final handoff. My core focus areas were login, password recovery, and notifications — with notifications becoming the most strategic and complex intervention within my scope.",
    s5Body2: "I also collaborated closely with the other teams working on adjacent parts of the platform, as well as the internal InLearning counterpart and the business-oriented stakeholders guiding the broader redesign effort. This was important because consistency across the platform depended on continuous coordination, not isolated screen design.",
    s5Block1Label: "Research and hypothesis framing",
    s5Block1Body: "Reviewing available user research, pain points, interviews, and internal findings to define the right direction.",
    s5Block2Label: "UX and UI design",
    s5Block2Body: "Designing the assigned flows and translating a broader platform vision into usable, consistent interface decisions.",
    s5Block3Label: "Validation and iteration",
    s5Block3Body: "Testing ideas with users, refining proposals, and aligning decisions with internal stakeholders.",
    s5Block4Label: "Cross-team coherence",
    s5Block4Body: "Working with parallel teams and the internal counterpart to keep the experience aligned across the platform.",
    s5PlaceholderHint: "Optional — contribution map or role overview",

    /* ── S6 Process ── */
    s6Kicker: "06 — Process",
    s6Title: "The process",
    s6Body1: "The work followed a structured product-design process. The internal team had already conducted substantial discovery work — including interviews, surveys, and pain-point mapping across the platform. Based on the streams assigned to us, the next step was to review those findings, formulate hypotheses, and validate whether the proposed direction actually addressed the problems users were experiencing.",
    s6Body2: "From there, the work moved through low-fidelity definition, stakeholder alignment, medium- and high-fidelity design, prototype creation, user testing, refinement, and final handoff documentation. The process was collaborative, iterative, and grounded in both research and implementation urgency.",
    s6SubheadLabel: "From internal discovery to tested redesign proposals",
    s6Step1Hint: "Research inputs",
    s6Step1Label: "Research inputs",
    s6Step2Hint: "Hypothesis and direction",
    s6Step2Label: "Hypothesis and direction",
    s6Step3Hint: "Prototype and testing",
    s6Step3Label: "Prototype and testing",
    s6Step4Hint: "Refinement and handoff",
    s6Step4Label: "Refinement and handoff",

    /* ── S7 Mapping ── */
    s7Kicker: "07 — Platform scope",
    s7Title: "Mapping the platform",
    s7Body: "EVA was more than a single interface. It included academic dashboards, course access, notifications, onboarding, user profiles, reading and repository sections, newsletters, and other digital touchpoints related to academic life. My contribution sat inside that larger ecosystem, but had a direct effect on how users entered, recovered access to, and stayed informed within the platform.",
    s7Mod1Hint: "Login module",
    s7Mod1Label: "Login",
    s7Mod2Hint: "Password recovery",
    s7Mod2Label: "Password recovery",
    s7Mod3Hint: "Notifications",
    s7Mod3Label: "Notifications",
    s7Mod4Hint: "Home and community layer",
    s7Mod4Label: "Home and community layer",
    s7Mod5Hint: "Academic dashboard",
    s7Mod5Label: "Academic dashboard",
    s7Mod6Hint: "Learning and repository spaces",
    s7Mod6Label: "Learning and repository spaces",

    /* ── S8 Login ── */
    s8Kicker: "08 — Access",
    s8Title: "Designing access: login",
    s8Body1: "The login redesign was not about reinventing a familiar pattern. It was about making access feel more coherent, more mature, and more institutionally aligned. The previous version felt visually weak and inconsistent with the tone the platform was trying to establish. The redesign therefore focused on visual clarity, stronger institutional character, and a more sober, credible presentation.",
    s8Body2: "This was especially important because EVA served different institutions with different identities. The login experience needed to feel standardized enough to be coherent, yet flexible enough to preserve each institution's sense of identity.",
    s8SubheadLabel: "A familiar pattern, redesigned for coherence and tone",
    s8Hint1: "Login redesign — featured view",
    s8Hint2: "Login detail or institution variant",
    s8Hint3: "Login supporting state or comparison",

    /* ── S9 Recovery ── */
    s9Kicker: "09 — Access",
    s9Title: "Designing access: password recovery",
    s9Body1: "Password recovery was treated as a high-frequency utility flow that needed clarity more than novelty. The design avoided unnecessary complexity and instead focused on making the process feel intuitive, standard, and easy to resolve through familiar interaction patterns.",
    s9Body2: "Rather than overdesigning a known task, the redesign aligned the flow with user expectations, reduced friction, and brought it visually into the same language as the rest of the platform.",
    s9SubheadLabel: "Standard patterns, reduced friction",
    s9Hint1: "Password recovery flow — full sequence",
    s9Hint2: "Recovery step detail",
    s9Hint3: "Recovery confirmation or error state",

    /* ── S10 Notifications ── */
    s10Kicker: "10 — Core intervention",
    s10Title: "The core intervention: notifications",
    s10Body1: "Notifications became the most strategic part of my contribution because they addressed a real gap in how the platform communicated with students. Before this intervention, there was no clear asynchronous space where academic, financial, and institutional information could reach users in a way that felt structured, visible, and manageable.",
    s10Body2: "The challenge was not simply adding notifications. It was creating a system that could support many kinds of information without overwhelming the user. Academic alerts, grades, payment reminders, deadlines, updates, and promotional or institutional messages all competed for attention. The design therefore had to establish hierarchy, clarity, and a stronger sense of user control.",
    s10Callout: "Notifications were not a feature add-on. They were a new communication layer between the institution and the student.",
    s10Hint: "Notifications — featured composed view",

    /* ── S11 Notification system ── */
    s11Kicker: "11 — System design",
    s11Title: "Designing the notification system",
    s11Body1: "One of the most important decisions was not to turn notifications into a full standalone page. Instead, the system was designed as a dropdown layer that could be accessed quickly and remain integrated with the everyday use of the platform. This made notifications feel present and useful without turning them into a heavy destination flow.",
    s11Body2: "The interaction design also had to define priorities, unread and read states, categories, empty states, and preference logic. The system needed to support a large range of use cases while still helping users feel in control of what mattered to them.",
    s11SubheadLabel: "Balancing institutional needs and user control",
    s11SubheadBody: "The business side wanted strong communication reach, but the user experience could not become an overload machine. The final design created a structure where some notifications were active by default while still allowing users to manage aspects of their notification experience more selectively.",
    s11Hint1: "Notification system flow — architecture overview",
    s11State1Hint: "Unread / read states",
    s11State1Label: "Unread and read states",
    s11State2Hint: "Categories and hierarchy",
    s11State2Label: "Categories and hierarchy",
    s11State3Hint: "Empty state",
    s11State3Label: "Empty state",
    s11State4Hint: "Preference and management",
    s11State4Label: "Preference logic",

    /* ── S12 Tone ── */
    s12Kicker: "12 — Tone and guidance",
    s12Title: "Humanizing the tone of the platform",
    s12Body1: "A key part of the redesign was making EVA feel less mechanical and more supportive. This was reflected not only in interface structure, but also in tone of voice, onboarding logic, and the idea of EVA as a more guiding presence inside the platform. The product needed to do more than display tasks. It needed to orient and accompany students in a way that felt clearer and more human.",
    s12Body2: "This was especially relevant in education, where confusion and distance can quickly turn a platform into a source of frustration rather than support. Small moments — such as how a student logs in, receives information, or understands what to do next — contribute directly to that broader emotional experience.",
    s12Hint1: "Tone and guidance — platform voice concept",
    s12Hint2: "Tone detail or onboarding moment",
    s12Hint3: "EVA as guiding presence",

    /* ── S13 Research ── */
    s13Kicker: "13 — Research and validation",
    s13Title: "Research, validation, and testing",
    s13Body1: "The redesign was grounded in both prior internal research and direct validation work during the project. Existing interviews, surveys, and internal findings gave the team a starting point, but each stream still required hypothesis definition and targeted testing to confirm whether the proposed solutions were actually working.",
    s13Body2: "This meant validating assumptions with users, gathering insights from testing sessions, and refining the designs before final delivery. The work therefore balanced institutional goals with observable user behavior and feedback.",
    s13Hint1: "Research overview — testing and synthesis",
    s13Hint2: "Interview or survey reference",
    s13Hint3: "Testing session or findings",
    s13Hint4: "Iteration output from validation",

    /* ── S14 Consistency ── */
    s14Kicker: "14 — Platform consistency",
    s14Title: "Designing for consistency across a shared platform",
    s14Body1: "Because the redesign was distributed across multiple teams and streams, consistency was an essential concern. Each intervention had to make sense on its own, but also feel aligned with the wider EVA experience. This required ongoing coordination with adjacent teams, internal platform counterparts, and the broader design and product effort shaping the virtual campus.",
    s14Body2: "The value of the work therefore also came from keeping local decisions connected to a larger platform language rather than solving each screen in isolation.",
    s14Hint: "Consistency — cross-team alignment or design system reference",

    /* ── S15 Before/After ── */
    s15Kicker: "15 — Transformation",
    s15Title: "Before and after",
    s15Body1: "The redesign improved clarity, institutional tone, visual consistency, and the user's ability to understand what required attention. In particular, notifications created a clearer layer of communication that helped students stay informed without depending entirely on disconnected channels or passive discovery inside the platform.",
    s15Body2: "The result was a platform experience that felt more mature, more coordinated, and more supportive in the everyday routines of academic life.",
    s15BeforeHint1: "Before — login or access",
    s15BeforeLabel1: "Before",
    s15AfterHint1: "After — login redesign",
    s15AfterLabel1: "After",
    s15BeforeHint2: "Before — no notification layer",
    s15BeforeLabel2: "Before",
    s15AfterHint2: "After — notification system",
    s15AfterLabel2: "After",

    /* ── S16 Outcomes ── */
    s16Kicker: "16 — Outcomes",
    s16Title: "Outcomes and implementation",
    s16Body1: "The full scope of my assigned streams was implemented. This mattered because the work was not only exploratory or speculative; it became part of the actual platform experience. The redesign improved access clarity, strengthened the institutional tone of the platform, and introduced a new notification layer that helped students understand what required attention more quickly.",
    s16Body2: "More broadly, the project contributed to a platform that felt less fragmented and more human in the way it addressed students. It showed how educational UX can support not only tasks, but also guidance, continuity, and a stronger sense of digital academic presence.",
    s16Value1Label: "Clearer access",
    s16Value1Body: "Login and recovery flows became more coherent and visually aligned with the platform.",
    s16Value2Label: "Stronger communication",
    s16Value2Body: "Notifications introduced a more structured asynchronous dialogue between the institution and the student.",
    s16Value3Label: "More human experience",
    s16Value3Body: "The redesign contributed to a platform that felt more supportive, more understandable, and more institutionally coherent.",
    s16Hint1: "Implementation or live product reference",
    s16Hint2: "Outcome or value detail",
    s16Hint3: "Supporting evidence or delivery reference",

    /* ── S17 Practice ── */
    s17Kicker: "17 — Practice",
    s17Title: "What this project represents in my practice",
    s17Body1: "EVA reflects an important part of my design practice: working at the intersection of education, human behavior, interface systems, and product thinking. It is a case where UX was not only about task completion, but about making a digital environment feel more oriented, more relational, and more aligned with the lived reality of its users.",
    s17Body2: "It remains one of the clearest examples of how I approach design as both functional structure and human mediation.",
    s17Hint: "Closing hero — composed platform view",

    /* ── S18 Credits ── */
    s18Kicker: "18 — Credits",
    s18Title: "Role and collaboration",
    s18Body: "This case reflects my leadership and execution across the assigned streams of login, password recovery, and notifications — including research interpretation, hypothesis framing, UX/UI design, validation, iteration, and final handoff. The project was developed in coordination with adjacent external teams, the internal InLearning counterpart, and the business-oriented stakeholders guiding the redesign effort.",
    s18RoleLabel: "My role",
    s18RoleValue: "Lead design across my assigned streams, including research-driven direction, UX/UI definition, testing, and delivery.",
    s18ScopeLabel: "Assigned scope",
    s18ScopeValue: "Login, password recovery, and notifications.",
    s18CollabLabel: "Collaboration",
    s18CollabValue: "Cross-team coordination with other redesign streams, internal platform representatives, and business stakeholders.",
    s18ImplLabel: "Implementation",
    s18ImplValue: "The full scope of my streams was implemented in the live product.",
    s18Hint: "Optional — team or collaboration reference",

    /* ── Annexes ── */
    annexKicker: "Supporting materials",
    annexTitle: "Supporting research and process materials",
    annexBody: "Reference materials, wireframes, research outputs, and early explorations that supported the redesign process.",
    annex1Hint: "Wireframes",
    annex1Caption: "Wireframes",
    annex2Hint: "Research summaries",
    annex2Caption: "Research summaries",
    annex3Hint: "Interview clips or stills",
    annex3Caption: "Interview clips or stills",
    annex4Hint: "Benchmark references",
    annex4Caption: "Benchmark references",
    annex5Hint: "Early explorations",
    annex5Caption: "Early explorations",
    annex6Hint: "Handoff documentation",
    annex6Caption: "Handoff documentation",
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

        {/* asset-slot: EVA-HERO-01 — Replace with composed platform mosaic / hero overview */}
        <CasePlaceholder id="EVA-HERO-01" ratio="hero" hint="Composed platform mosaic — hero overview" />

        {/* Metadata strip — 6 fields, 3-col on desktop for readability */}
        <div className="cs-meta cs-meta--3col">
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaRoleLabel}</p>
            <p className="cs-meta__value">{c.s1MetaRoleValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaScopeLabel}</p>
            <p className="cs-meta__value">{c.s1MetaScopeValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaFocusLabel}</p>
            <p className="cs-meta__value">{c.s1MetaFocusValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaInstitutionLabel}</p>
            <p className="cs-meta__value">{c.s1MetaInstitutionValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaBrandsLabel}</p>
            <p className="cs-meta__value">{c.s1MetaBrandsValue}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaOutputLabel}</p>
            <p className="cs-meta__value">{c.s1MetaOutputValue}</p>
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
          <Typography variant="bodyMd" tone="secondary">
            {c.s2Body}
          </Typography>
        </div>

        <div className="cs-blocks">
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s2WhatItWasLabel}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s2WhatItWasBody}
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s2WhatChangedLabel}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s2WhatChangedBody}
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s2WhyItMatteredLabel}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s2WhyItMatteredBody}
            </Typography>
          </div>
        </div>

        {/* asset-slot: EVA-OVERVIEW-01 — Replace with system/platform overview diagram */}
        <CasePlaceholder
          id="EVA-OVERVIEW-01"
          ratio="wide"
          hint={c.s2PlaceholderHint}
        />
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE CONTEXT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="context">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s3Kicker}</Typography>
          <Typography variant="h2">{c.s3Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s3Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s3Body2}
          </Typography>
        </div>

        <div className="cs-split">
          {/* asset-slot: EVA-CONTEXT-01 — Replace with institutional or platform context visual */}
          <CasePlaceholder id="EVA-CONTEXT-01" ratio="landscape" hint={c.s3Hint1} />
          {/* asset-slot: EVA-CONTEXT-02 — Replace with team / redesign effort reference */}
          <CasePlaceholder id="EVA-CONTEXT-02" ratio="landscape" hint={c.s3Hint2} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — THE THESIS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="thesis">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s4Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s4Body2}
          </Typography>
        </div>

        <div className="cs-callout">
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Callout}
          </Typography>
        </div>

        {/* asset-slot: EVA-THESIS-01 — Replace with concept/vision diagram or mood reference */}
        <CasePlaceholder
          id="EVA-THESIS-01"
          ratio="wide"
          hint={c.s4PlaceholderHint}
        />
      </section>

      {/* ════════════════════════════════════════════
          S5 — MY ROLE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="role">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s5Kicker}</Typography>
          <Typography variant="h2">{c.s5Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s5Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s5Body2}
          </Typography>
        </div>

        <div className="cs-blocks">
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s5Block1Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s5Block1Body}
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s5Block2Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s5Block2Body}
            </Typography>
          </div>
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s5Block3Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s5Block3Body}
            </Typography>
          </div>
        </div>

        <div className="cs-blocks">
          <div className="cs-block">
            <Typography variant="micro" tone="muted">{c.s5Block4Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s5Block4Body}
            </Typography>
          </div>
        </div>

        {/* asset-slot: EVA-ROLE-01 — Optional: replace with contribution map or role diagram */}
        <CasePlaceholder
          id="EVA-ROLE-01"
          ratio="landscape"
          hint={c.s5PlaceholderHint}
        />
      </section>

      {/* ════════════════════════════════════════════
          S6 — THE PROCESS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="process">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s6Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s6Body2}
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">
            {c.s6SubheadLabel}
          </Typography>
        </div>

        {/* Process sequence — 4 steps */}
        <div className="cs-four-up">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-01 — Research inputs phase */}
            <CasePlaceholder id="EVA-PROCESS-01" ratio="card" hint={c.s6Step1Hint} />
            <p className="cs-iter-label">{c.s6Step1Label}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-02 — Hypothesis and direction phase */}
            <CasePlaceholder id="EVA-PROCESS-02" ratio="card" hint={c.s6Step2Hint} />
            <p className="cs-iter-label">{c.s6Step2Label}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-03 — Prototype and testing phase */}
            <CasePlaceholder id="EVA-PROCESS-03" ratio="card" hint={c.s6Step3Hint} />
            <p className="cs-iter-label">{c.s6Step3Label}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-PROCESS-04 — Refinement and handoff phase */}
            <CasePlaceholder id="EVA-PROCESS-04" ratio="card" hint={c.s6Step4Hint} />
            <p className="cs-iter-label">{c.s6Step4Label}</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — MAPPING THE PLATFORM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="mapping">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>

        {/* Module map — 6 labeled visual slots */}
        <div className="cs-module-grid">
          <div className="cs-module-item">
            <p className="cs-module-item__index">01</p>
            {/* asset-slot: EVA-SCOPE-01 — Login module */}
            <CasePlaceholder id="EVA-SCOPE-01" ratio="landscape" hint={c.s7Mod1Hint} className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">{c.s7Mod1Label}</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">02</p>
            {/* asset-slot: EVA-SCOPE-02 — Password recovery module */}
            <CasePlaceholder id="EVA-SCOPE-02" ratio="landscape" hint={c.s7Mod2Hint} className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">{c.s7Mod2Label}</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">03</p>
            {/* asset-slot: EVA-SCOPE-03 — Notifications module */}
            <CasePlaceholder id="EVA-SCOPE-03" ratio="landscape" hint={c.s7Mod3Hint} className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">{c.s7Mod3Label}</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">04</p>
            {/* asset-slot: EVA-SCOPE-04 — Home and community layer */}
            <CasePlaceholder id="EVA-SCOPE-04" ratio="landscape" hint={c.s7Mod4Hint} className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">{c.s7Mod4Label}</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">05</p>
            {/* asset-slot: EVA-SCOPE-05 — Academic dashboard */}
            <CasePlaceholder id="EVA-SCOPE-05" ratio="landscape" hint={c.s7Mod5Hint} className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">{c.s7Mod5Label}</Typography>
          </div>
          <div className="cs-module-item">
            <p className="cs-module-item__index">06</p>
            {/* asset-slot: EVA-SCOPE-06 — Learning and repository spaces */}
            <CasePlaceholder id="EVA-SCOPE-06" ratio="landscape" hint={c.s7Mod6Hint} className="cs-module-item__placeholder" />
            <Typography variant="micro" tone="secondary">{c.s7Mod6Label}</Typography>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — DESIGNING ACCESS: LOGIN
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="login">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s8Kicker}</Typography>
          <Typography variant="h2">{c.s8Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s8Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s8Body2}
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">
            {c.s8SubheadLabel}
          </Typography>
        </div>

        {/* asset-slot: EVA-LOGIN-01 — Main login redesign / featured view */}
        <CasePlaceholder
          id="EVA-LOGIN-01"
          ratio="landscape"
          hint={c.s8Hint1}
        />

        <div className="cs-split">
          {/* asset-slot: EVA-LOGIN-02 — Login detail / institution variant */}
          <CasePlaceholder id="EVA-LOGIN-02" ratio="portrait" hint={c.s8Hint2} />
          {/* asset-slot: EVA-LOGIN-03 — Login supporting state or comparison */}
          <CasePlaceholder id="EVA-LOGIN-03" ratio="portrait" hint={c.s8Hint3} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — DESIGNING ACCESS: PASSWORD RECOVERY
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="recovery">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s9Kicker}</Typography>
          <Typography variant="h2">{c.s9Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s9Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s9Body2}
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">{c.s9SubheadLabel}</Typography>
        </div>

        {/* asset-slot: EVA-RECOVERY-01 — Password recovery flow overview */}
        <CasePlaceholder
          id="EVA-RECOVERY-01"
          ratio="wide"
          hint={c.s9Hint1}
        />

        <div className="cs-split">
          {/* asset-slot: EVA-RECOVERY-02 — Recovery step detail */}
          <CasePlaceholder id="EVA-RECOVERY-02" ratio="portrait" hint={c.s9Hint2} />
          {/* asset-slot: EVA-RECOVERY-03 — Recovery confirmation or error state */}
          <CasePlaceholder id="EVA-RECOVERY-03" ratio="portrait" hint={c.s9Hint3} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S10 — THE CORE INTERVENTION: NOTIFICATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="notifications">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s10Kicker}</Typography>
          <Typography variant="h2">{c.s10Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s10Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s10Body2}
          </Typography>
        </div>

        <div className="cs-callout">
          <Typography variant="bodyLg" tone="secondary">
            {c.s10Callout}
          </Typography>
        </div>

        {/* asset-slot: EVA-NOTIF-01 — Featured notifications overview / composed view */}
        <CasePlaceholder
          id="EVA-NOTIF-01"
          ratio="landscape"
          hint={c.s10Hint}
        />
      </section>

      {/* ════════════════════════════════════════════
          S11 — DESIGNING THE NOTIFICATION SYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="notif-system">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s11Kicker}</Typography>
          <Typography variant="h2">{c.s11Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s11Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s11Body2}
          </Typography>
        </div>

        <div className="cs-subhead">
          <Typography variant="micro" tone="muted">
            {c.s11SubheadLabel}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s11SubheadBody}
          </Typography>
        </div>

        {/* asset-slot: EVA-NOTIF-02 — Full system flow / notification architecture */}
        <CasePlaceholder
          id="EVA-NOTIF-02"
          ratio="wide"
          hint={c.s11Hint1}
        />

        {/* Notification states and interaction detail — 4 cards */}
        <div className="cs-four-up">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-03 — Unread / read states */}
            <CasePlaceholder id="EVA-NOTIF-03" ratio="portrait" hint={c.s11State1Hint} />
            <p className="cs-iter-label">{c.s11State1Label}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-04 — Categories and hierarchy */}
            <CasePlaceholder id="EVA-NOTIF-04" ratio="portrait" hint={c.s11State2Hint} />
            <p className="cs-iter-label">{c.s11State2Label}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-05 — Empty state */}
            <CasePlaceholder id="EVA-NOTIF-05" ratio="portrait" hint={c.s11State3Hint} />
            <p className="cs-iter-label">{c.s11State3Label}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-NOTIF-06 — Preference / management logic */}
            <CasePlaceholder id="EVA-NOTIF-06" ratio="portrait" hint={c.s11State4Hint} />
            <p className="cs-iter-label">{c.s11State4Label}</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S12 — HUMANIZING THE TONE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="tone">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s12Kicker}</Typography>
          <Typography variant="h2">{c.s12Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s12Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s12Body2}
          </Typography>
        </div>

        {/* asset-slot: EVA-TONE-01 — Tone and guidance concept / featured view */}
        <CasePlaceholder
          id="EVA-TONE-01"
          ratio="landscape"
          hint={c.s12Hint1}
        />

        <div className="cs-split">
          {/* asset-slot: EVA-TONE-02 — Tone detail or onboarding moment */}
          <CasePlaceholder id="EVA-TONE-02" ratio="landscape" hint={c.s12Hint2} />
          {/* asset-slot: EVA-TONE-03 — EVA as guiding presence reference */}
          <CasePlaceholder id="EVA-TONE-03" ratio="landscape" hint={c.s12Hint3} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S13 — RESEARCH, VALIDATION, AND TESTING
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="research">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s13Kicker}</Typography>
          <Typography variant="h2">{c.s13Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s13Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s13Body2}
          </Typography>
        </div>

        {/* asset-slot: EVA-RESEARCH-01 — Research overview / testing session reference */}
        <CasePlaceholder
          id="EVA-RESEARCH-01"
          ratio="hero"
          hint={c.s13Hint1}
        />

        <div className="cs-three-up">
          {/* asset-slot: EVA-RESEARCH-02 — Interview or survey reference */}
          <CasePlaceholder id="EVA-RESEARCH-02" ratio="card" hint={c.s13Hint2} />
          {/* asset-slot: EVA-RESEARCH-03 — Testing session or findings */}
          <CasePlaceholder id="EVA-RESEARCH-03" ratio="card" hint={c.s13Hint3} />
          {/* asset-slot: EVA-RESEARCH-04 — Iteration output from validation */}
          <CasePlaceholder id="EVA-RESEARCH-04" ratio="card" hint={c.s13Hint4} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S14 — DESIGNING FOR CONSISTENCY
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="consistency">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s14Kicker}</Typography>
          <Typography variant="h2">{c.s14Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s14Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s14Body2}
          </Typography>
        </div>

        {/* asset-slot: EVA-CONSISTENCY-01 — Consistency or design system reference */}
        <CasePlaceholder
          id="EVA-CONSISTENCY-01"
          ratio="wide"
          hint={c.s14Hint}
        />
      </section>

      {/* ════════════════════════════════════════════
          S15 — BEFORE AND AFTER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="before-after">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s15Kicker}</Typography>
          <Typography variant="h2">{c.s15Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s15Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s15Body2}
          </Typography>
        </div>

        {/* Before / After pairs */}
        <div className="cs-split">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-01 — Before state (login / access) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-01" ratio="landscape" hint={c.s15BeforeHint1} />
            <p className="cs-iter-label">{c.s15BeforeLabel1}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-02 — After state (login / access redesign) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-02" ratio="landscape" hint={c.s15AfterHint1} />
            <p className="cs-iter-label">{c.s15AfterLabel1}</p>
          </div>
        </div>

        <div className="cs-split">
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-03 — Before state (notifications) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-03" ratio="landscape" hint={c.s15BeforeHint2} />
            <p className="cs-iter-label">{c.s15BeforeLabel2}</p>
          </div>
          <div className="cs-iter-item">
            {/* asset-slot: EVA-BEFOREAFTER-04 — After state (notification system) */}
            <CasePlaceholder id="EVA-BEFOREAFTER-04" ratio="landscape" hint={c.s15AfterHint2} />
            <p className="cs-iter-label">{c.s15AfterLabel2}</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S16 — OUTCOMES AND IMPLEMENTATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="outcomes">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s16Kicker}</Typography>
          <Typography variant="h2">{c.s16Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s16Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s16Body2}
          </Typography>
        </div>

        <div className="cs-value-grid">
          <div className="cs-value-block">
            <Typography variant="micro" tone="muted">{c.s16Value1Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s16Value1Body}
            </Typography>
          </div>
          <div className="cs-value-block">
            <Typography variant="micro" tone="muted">{c.s16Value2Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s16Value2Body}
            </Typography>
          </div>
          <div className="cs-value-block">
            <Typography variant="micro" tone="muted">{c.s16Value3Label}</Typography>
            <Typography variant="bodyMd" tone="secondary">
              {c.s16Value3Body}
            </Typography>
          </div>
        </div>

        <div className="cs-three-up">
          {/* asset-slot: EVA-IMPACT-01 — Implementation or live product reference */}
          <CasePlaceholder id="EVA-IMPACT-01" ratio="landscape" hint={c.s16Hint1} />
          {/* asset-slot: EVA-IMPACT-02 — Outcome or value detail */}
          <CasePlaceholder id="EVA-IMPACT-02" ratio="landscape" hint={c.s16Hint2} />
          {/* asset-slot: EVA-IMPACT-03 — Supporting evidence or delivery reference */}
          <CasePlaceholder id="EVA-IMPACT-03" ratio="landscape" hint={c.s16Hint3} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S17 — WHAT THIS REPRESENTS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="practice">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s17Kicker}</Typography>
          <Typography variant="h2">{c.s17Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s17Body1}
          </Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s17Body2}
          </Typography>
        </div>

        {/* asset-slot: EVA-CLOSING-01 — Closing hero / platform composed view */}
        <CasePlaceholder
          id="EVA-CLOSING-01"
          ratio="hero"
          hint={c.s17Hint}
        />
      </section>

      {/* ════════════════════════════════════════════
          S18 — ROLE AND COLLABORATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="collaboration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s18Kicker}</Typography>
          <Typography variant="h2">{c.s18Title}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.s18Body}
          </Typography>
        </div>

        <div className="cs-role-grid">
          <div className="cs-role-item">
            <p className="cs-role-item__label">{c.s18RoleLabel}</p>
            <p className="cs-role-item__value">
              {c.s18RoleValue}
            </p>
          </div>
          <div className="cs-role-item">
            <p className="cs-role-item__label">{c.s18ScopeLabel}</p>
            <p className="cs-role-item__value">{c.s18ScopeValue}</p>
          </div>
          <div className="cs-role-item">
            <p className="cs-role-item__label">{c.s18CollabLabel}</p>
            <p className="cs-role-item__value">
              {c.s18CollabValue}
            </p>
          </div>
          <div className="cs-role-item">
            <p className="cs-role-item__label">{c.s18ImplLabel}</p>
            <p className="cs-role-item__value">
              {c.s18ImplValue}
            </p>
          </div>
        </div>

        {/* asset-slot: EVA-CREDITS-01 — Optional: team or collaboration reference */}
        <CasePlaceholder
          id="EVA-CREDITS-01"
          ratio="landscape"
          hint={c.s18Hint}
        />
      </section>

      {/* ════════════════════════════════════════════
          ANNEXES — Supporting research and process materials
          ════════════════════════════════════════════ */}
      <section className="cs-section cs-annex" id="annexes">
        <div className="cs-annex-head">
          <Typography variant="micro" tone="muted">{c.annexKicker}</Typography>
          <Typography variant="h3">{c.annexTitle}</Typography>
          <Typography variant="bodyMd" tone="secondary">
            {c.annexBody}
          </Typography>
        </div>

        <div className="cs-annex-grid">
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-01 — Wireframes */}
            <CasePlaceholder id="EVA-ANNEX-01" ratio="card" hint={c.annex1Hint} />
            <p className="cs-caption">{c.annex1Caption}</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-02 — Research summaries */}
            <CasePlaceholder id="EVA-ANNEX-02" ratio="card" hint={c.annex2Hint} />
            <p className="cs-caption">{c.annex2Caption}</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-03 — Interview clips or stills */}
            <CasePlaceholder id="EVA-ANNEX-03" ratio="card" hint={c.annex3Hint} />
            <p className="cs-caption">{c.annex3Caption}</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-04 — Benchmark references */}
            <CasePlaceholder id="EVA-ANNEX-04" ratio="card" hint={c.annex4Hint} />
            <p className="cs-caption">{c.annex4Caption}</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-05 — Early explorations */}
            <CasePlaceholder id="EVA-ANNEX-05" ratio="card" hint={c.annex5Hint} />
            <p className="cs-caption">{c.annex5Caption}</p>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: EVA-ANNEX-06 — Handoff documentation */}
            <CasePlaceholder id="EVA-ANNEX-06" ratio="card" hint={c.annex6Hint} />
            <p className="cs-caption">{c.annex6Caption}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
