import { Typography, Accent } from "../components/ui/Typography";
import { cn } from "../lib/cn";
import { useI18n } from "../i18n";
import "./LotoBolaCaseStudy.css";

/* ============================================================
   CasePlaceholder — local helper
   Replace each .cs-placeholder with <img> or <video>.
   The `id` matches the asset ID (e.g., "PZ-HERO-01").
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
   PlayzonBetSections
   Pure content component — no header, no footer, no Container.
   Used by SelectedWorkDetail when slug === "playzonbet".
   ============================================================ */

export function PlayzonBetSections() {
  const { lang } = useI18n();

  const c = lang === "es" ? {
    /* ── S1 HERO ── */
    heroKicker: "Trabajo Seleccionado — Caso de Estudio",
    heroTitle: "PlayzonBet",
    heroBodyAccent: "Transformando una plataforma de apuestas",
    heroBodyRest: "bajo restricciones regulatorias, técnicas y operativas.",
    heroBody2: "PlayzonBet se convirtió en un rediseño de producto moldeado por presiones reales: urgencia legal, limitaciones del proveedor, complejidad operativa, uso mobile-first y la necesidad de evolucionar un frontend débil hacia una experiencia digital más controlada y creíble.",
    heroHint: "Mosaico de producto — hero compuesto",
    s1MetaRole: "Rol",
    s1MetaRoleVal: "Product Designer / UX·UI",
    s1MetaScope: "Alcance",
    s1MetaScopeVal: "Rediseño de producto, flujos de compliance, UX de registro, adaptación del sportsbook, navegación mobile-first, estructura de contenido, lógica de CMS, capa de control frontend",
    s1MetaFocus: "Enfoque",
    s1MetaFocusVal: "Transformar una plataforma de apuestas dependiente de un proveedor en una experiencia de producto más controlada, cumpliente y mantenible",
    s1MetaProviders: "Proveedores",
    s1MetaProvidersVal: "Madmen · EveryMatrix · Optimove · Strapi",
    s1MetaOutput: "Entregable",
    s1MetaOutputVal: "Rediseño del sitio web, wizard de registro, mejoras en cuenta/billetera, lógica de promociones y contenido, adaptación del shell del sportsbook, estructura de CMS, mejoras mobile-first",

    /* ── S2 OVERVIEW ── */
    s2Kicker: "01 — Panorama",
    s2Title: "El caso en un minuto",
    s2Body: "PlayzonBet fue un rediseño y relanzamiento de una plataforma de sportsbook y casino para el mercado peruano. El proyecto reemplazó un frontend débil y difícil de mantener con una capa de producto más controlada, moldeada por necesidades de compliance, realidades operativas, comportamiento mobile-first y mayor credibilidad de marca.",
    s2WhatTitle: "Qué era",
    s2WhatBody: "Un rediseño de una plataforma de apuestas y casino en vivo que operaba bajo infraestructura de terceros y demandas legales crecientes.",
    s2ChangedTitle: "Qué cambió",
    s2ChangedBody: "El producto pasó de un frontend básico y difícil de gestionar hacia una experiencia más estructurada, con marca y mantenible.",
    s2WhyTitle: "Por qué importaba",
    s2WhyBody: "Porque la configuración anterior limitaba la calidad del producto, las operaciones diarias, el cumplimiento legal y la confianza de los usuarios.",
    s2Hint: "Visión general del sistema / diagrama de panorama",

    /* ── S3 CONTEXT ── */
    s3Kicker: "02 — Contexto",
    s3Title: "El contexto",
    s3Body1: "PlayzonBet era un producto digital de apuestas y casino para el mercado peruano. Al momento del rediseño, el negocio quería relanzar la plataforma con una posición visual más fuerte, mejor experiencia de usuario y más control sobre el frontend. La configuración existente dependía fuertemente de EveryMatrix, que proveía el sportsbook, los feeds de casino, la infraestructura de backoffice y un modelo de frontend embebido demasiado limitado para las necesidades del negocio.",
    s3Body2: "El momento era especialmente crítico porque Perú estaba actualizando sus requisitos regulatorios para plataformas de apuestas. Registro, validación de identidad, juego responsable, auto-suspensión y funciones de control de cuenta necesitaban cumplir estándares más altos. El rediseño se convirtió tanto en una oportunidad de negocio como en una necesidad operativa.",
    s3Hint1: "Contexto de mercado y negocio",
    s3Hint2: "Panorama regulatorio",

    /* ── S4 PROBLEM ── */
    s4Kicker: "03 — Problema",
    s4Title: "El problema real",
    s4Body1: "El problema visible era que la plataforma se veía desactualizada, genérica y por debajo del estándar que el negocio quería proyectar. Pero el problema más profundo era estructural. El frontend era difícil de mantener, las operaciones de contenido eran engorrosas, las promociones eran difíciles de gestionar y muchos procesos de cara al usuario carecían de flexibilidad.",
    s4Body2: "Al mismo tiempo, los próximos requisitos legales dejaron claro que la configuración anterior no sería suficiente. El negocio necesitaba una capa de producto que pudiera controlar más directamente — una que soportara un proceso de registro más robusto, gestión de cuenta más clara, mecanismos de juego responsable más fuertes y operaciones diarias más ágiles.",
    s4CalloutAccent: "El problema no era solo una UI pobre.",
    s4CalloutRest: "Era dependencia, riesgo de compliance, fricción operativa y fragilidad del producto.",
    s4Hint1: "Antes — problemas de la plataforma existente",
    s4Hint2: "Después — experiencia rediseñada",

    /* ── S5 CONSTRAINTS ── */
    s5Kicker: "04 — Restricciones",
    s5Title: "Restricciones que moldearon el producto",
    s5Body: "Este rediseño se realizó bajo restricciones superpuestas. El core del sportsbook y sportsbook en vivo venía del proveedor y no podía rediseñarse libremente. Los requisitos legales para registro y protección de cuenta eran innegociables. La presión de tiempo era alta, los stakeholders internos tenían prioridades diferentes, y más del noventa por ciento del uso ocurría en mobile. El trabajo requería diseñar bajo dependencia, no desde un lienzo en blanco.",
    s5SubTitle: "Lo que podíamos controlar, influenciar y adaptar",
    s5SubBody: "El desafío no era imaginar un sistema ideal sin límites, sino mejorar lo que los usuarios realmente experimentaban mientras se alineaban la ambición del negocio, las capacidades del proveedor, la viabilidad técnica y las obligaciones legales.",
    s5Hint: "Diagrama de capas: control / influencia / fijas",

    /* ── S6 CONTRIBUTION ── */
    s6Kicker: "05 — Contribución",
    s6Title: "Mi rol",
    s6Body1: "Fui contratado como diseñador UX/UI, pero el alcance se amplió rápidamente. Trabajé en discovery, síntesis de requerimientos, diseño de flujos, estructura de interfaz, priorización de implementación y alineación cross-team. El rol implicaba traducir necesidades de operaciones, legal, compliance, CRM, atención al cliente, finanzas, marketing y propiedad en una dirección de producto coherente.",
    s6Body2: "También trabajé directamente con desarrollo y proveedores externos para entender límites de implementación, posibilidades de integración y necesidades de gestión de contenido. Esto incluyó coordinación continua con Madmen, EveryMatrix, Optimove y los equipos involucrados en la entrega del frontend e integración de la plataforma.",
    s6Block1Title: "Discovery y alineación",
    s6Block1Body: "Recolección de requerimientos de distintas áreas internas e identificación de oportunidades de mejora.",
    s6Block2Title: "Definición de producto y flujos",
    s6Block2Body: "Transformar requerimientos operativos, legales y de usuario en journeys estructurados y lógica de interfaz.",
    s6Block3Title: "Diseño UX/UI",
    s6Block3Body: "Diseñar la nueva experiencia frontend, comportamientos mobile, lógica de cuenta y superficies de producto con marca.",
    s6Block4Title: "Priorización de implementación",
    s6Block4Body: "Definir qué construir primero y cómo alinear el trabajo con la viabilidad técnica y las restricciones de lanzamiento.",
    s6Hint: "Equipo y contexto de colaboración",

    /* ── S7 SCOPE ── */
    s7Kicker: "06 — Alcance del Producto",
    s7Title: "Mapeando el ecosistema del producto",
    s7Body: "El proyecto tocó múltiples capas de la experiencia: páginas públicas, acceso al sportsbook, información de cuenta y billetera, promociones, registro y verificación, controles de juego responsable, superficies de soporte al cliente, gestión de contenido y patrones de navegación mobile. Lo importante no era solo rediseñar páginas aisladas, sino mejorar la coherencia del producto como un todo.",
    s7Mod1Title: "Sitio web público",
    s7Mod1Body: "Landing, promociones, acceso a juegos y superficies de marca que establecen la primera impresión.",
    s7Mod1Hint: "Sitio web público",
    s7Mod2Title: "Registro y verificación",
    s7Mod2Body: "Flujo de onboarding crítico para compliance con estructura por pasos, validación de identidad y entrada de juego responsable.",
    s7Mod2Hint: "Registro y verificación",
    s7Mod3Title: "Shell del sportsbook",
    s7Mod3Body: "Shell de navegación y adaptación visual alrededor del motor de sportsbook embebido del proveedor.",
    s7Mod3Hint: "Shell del sportsbook",
    s7Mod4Title: "Cuenta y billetera",
    s7Mod4Body: "Visibilidad de cuenta de usuario, flujos de depósito y retiro, información de saldo y controles de auto-gestión.",
    s7Mod4Hint: "Cuenta y billetera",
    s7Mod5Title: "Promociones y comunicación",
    s7Mod5Body: "Superficies de bonos, comunicación de free-spins, touchpoints de CRM y gestión editorial de promociones.",
    s7Mod5Hint: "Promociones y comunicación",
    s7Mod6Title: "CMS y lógica de contenido",
    s7Mod6Body: "Estructura de contenido respaldada por Strapi que habilita flexibilidad editorial, actualización de textos legales y gestión de páginas recurrentes.",
    s7Mod6Hint: "CMS y lógica de contenido",

    /* ── S8 COMPLIANCE ── */
    s8Kicker: "07 — Compliance",
    s8Title: "Compliance como motor de diseño",
    s8Body1: "Uno de los aspectos más definitorios del rediseño fue la actualización legal en Perú. El modelo anterior permitía a los usuarios ingresar a la plataforma con información mínima y completar el resto después. Ese enfoque ya no era viable. Los nuevos requisitos demandaban validación de identidad más fuerte, verificación de edad, soporte de juego responsable, opciones de auto-suspensión, mecanismos de bloqueo de cuenta y comunicación visible relacionada con compliance.",
    s8Body2: "Esto cambió el problema de diseño significativamente. El registro ya no podía tratarse como un punto de entrada rápido. Tenía que convertirse en un proceso controlado, transparente y que generara confianza, que aún se sintiera manejable para el usuario.",
    s8CalloutAccent: "Compliance no era un requisito secundario.",
    s8CalloutRest: "Fue uno de los principales impulsores del rediseño del producto.",
    s8Hint: "Flujo de compliance / mapa de requisitos regulatorios",

    /* ── S9 REGISTRATION ── */
    s9Kicker: "08 — Registro",
    s9Title: "Rediseñando registro y verificación",
    s9Body1: "El flujo de registro tenía que volverse más riguroso sin ser innecesariamente abrumador. Para abordarlo, la experiencia se estructuró como un wizard por pasos que clarificaba el progreso, agrupaba la información de forma más inteligente y hacía que un proceso legal más exigente se sintiera más claro y guiado.",
    s9Body2: "El flujo también soportaba lógica de validación progresiva. Verificaciones de identidad, validación de edad y verificación de seguridad podían escalonarse más claramente, ayudando a reducir la ambigüedad mientras se alineaba con las realidades legales y técnicas de la plataforma.",
    s9SubTitle: "Convirtiendo un proceso más pesado en uno más comprensible",
    s9Hint: "Wizard de registro — vista general del flujo completo",
    s9Step1Hint: "Paso 01 — Datos básicos de cuenta",
    s9Step1Caption: "Información personal y creación de cuenta",
    s9Step2Hint: "Paso 02 — Identidad",
    s9Step2Caption: "Validación de identidad y verificación de edad",
    s9Step3Hint: "Paso 03 — Seguridad",
    s9Step3Caption: "Contraseña, seguridad y confirmación",
    s9Step4Hint: "Paso 04 — Compliance",
    s9Step4Caption: "Juego responsable y acuerdos legales",

    /* ── S10 FRONTEND CONTROL ── */
    s10Kicker: "09 — Control del Frontend",
    s10Title: "Tomando control del frontend",
    s10Body1: "Una parte importante del rediseño fue el movimiento hacia una capa de frontend más controlada. La configuración anterior hacía que las operaciones de contenido y los ajustes de producto fueran innecesariamente difíciles. Al rediseñar el producto alrededor de un frontend que el negocio pudiera moldear más directamente, el equipo ganó más agilidad sobre estructura, comunicación y gestión diaria.",
    s10Body2: "Esto era especialmente importante para promociones, contenido informativo, textos legales, botones, cambios editoriales y otras superficies recurrentes que no podían permanecer atrapadas dentro de una configuración rígida orientada al proveedor.",
    s10SubTitle: "De la dependencia del proveedor a una capa de producto más controlable",
    s10Hint1: "Arquitectura — antes vs después",
    s10Hint2: "Estructura de ownership del frontend",
    s10Hint3: "Zonas editables / gobernanza de contenido",

    /* ── S11 OPERATIONS ── */
    s11Kicker: "10 — Operaciones",
    s11Title: "Diseñando para las operaciones diarias",
    s11Body1: "El rediseño también tenía que soportar cómo la plataforma operaba cada día. Promociones, comunicación de free-spins, visibilidad de estado de usuario, información de cuenta e interacciones relacionadas con soporte dependían de que el frontend fuera más fácil de gestionar y más fácil de entender. En la configuración anterior, muchos de estos procesos eran demasiado manuales o difíciles de hacer visibles.",
    s11Body2: "Una mejor experiencia de producto significaba más que pulido visual. Significaba hacer que las interacciones recurrentes fueran más mantenibles, más visibles y más usables tanto para el negocio como para el usuario.",
    s11Hint1: "Operaciones — superficie destacada",
    s11Hint2: "Gestión de promociones",
    s11Hint3: "Visibilidad de cuenta y estado",
    s11Hint4: "Soporte y flujos recurrentes",

    /* ── S12 SPORTSBOOK ── */
    s12Kicker: "11 — Sportsbook",
    s12Title: "Trabajando con un sportsbook de terceros",
    s12Body1: "El core del sportsbook y sportsbook en vivo estaban embebidos del proveedor y no podían rediseñarse libremente a nivel funcional. Eso significaba que el trabajo tenía que enfocarse en adaptación, alineación del shell, navegación circundante y consistencia visual, en lugar del control total del motor de apuestas.",
    s12Body2: "Incluso dentro de esos límites, aún era posible mejorar la coherencia percibida de la experiencia. El rediseño buscó una mejor alineación entre el sportsbook embebido y el resto del producto, especialmente en navegación mobile, acceso por categorías e integración visual de alto nivel.",
    s12SubTitle: "Mejorando lo que los usuarios experimentaban sin ser dueños de todo el sistema",
    s12Hint1: "Sportsbook — adaptación antes/después",
    s12Hint2: "Alineación de navegación mobile",
    s12Hint3: "Acceso por categoría y deporte",
    s12Hint4: "Integración visual — límite shell/proveedor",

    /* ── S13 MOBILE ── */
    s13Kicker: "12 — Mobile",
    s13Title: "Experiencia mobile-first",
    s13Body1: "Dado que la abrumadora mayoría del uso ocurría en mobile, los patrones de navegación y acceso se volvieron centrales para el rediseño. El trabajo incluyó mejoras en la navegación por categorías, comportamiento de la navbar, acceso a cuenta, visibilidad de depósitos y retiros, y la claridad general de acciones clave en pantallas más pequeñas.",
    s13Body2: "Esta parte del trabajo importaba no solo por la escala, sino porque mobile era donde la usabilidad y la fricción tenían las mayores consecuencias operativas.",
    s13Hint1: "Mobile — showcase principal",
    s13Hint2: "Navegación mobile / barra inferior",
    s13Hint3: "Acceso a cuenta / billetera",
    s13Hint4: "Flujo de depósito / retiro",
    s13Hint5: "Promociones en mobile",

    /* ── S14 BRAND ── */
    s14Kicker: "13 — Marca",
    s14Title: "Marca, look and feel y posicionamiento de mercado",
    s14Body1: "El producto anterior se sentía visualmente débil para la audiencia que el negocio quería atraer. El rediseño necesitaba soportar una percepción más fuerte de confianza, calidad y madurez. Esto no era solo una preferencia visual — era parte de hacer que el producto se sintiera más alineado con un posicionamiento más premium y de mayor ticket.",
    s14Body2: "El resultado fue un lenguaje visual más intencional, uno que ayudó a que la plataforma se sintiera menos genérica y más comercialmente creíble en un mercado altamente competitivo.",
    s14Hint1: "Marca — actualización de identidad visual",
    s14Hint2: "Lenguaje visual — componentes y estilo",
    s14Hint3: "Posicionamiento de mercado — tono y sensación",

    /* ── S15 CMS ── */
    s15Kicker: "14 — Contenido & CMS",
    s15Title: "Diseñando el CMS y la lógica de contenido",
    s15Body1: "La flexibilidad de contenido se convirtió en una parte clave del rediseño. El nuevo frontend tenía que soportar una estructura donde promociones, textos, botones, secciones legales, logos, módulos informativos y otras superficies recurrentes pudieran gestionarse de manera más efectiva. Esto trajo a Strapi al problema de diseño — no solo como un detalle técnico, sino como parte de la lógica operativa del producto.",
    s15Body2: "Diseñar el frontend también significaba pensar qué debía ser editable, cómo el contenido debía mapearse a la estructura de interfaz, y cómo las necesidades de publicación recurrente podían soportarse de manera más sostenible.",
    s15Hint1: "CMS / lógica de contenido — vista general completa",
    s15Hint2: "Modelo de contenido de Strapi",
    s15Hint3: "Mapeo de zonas editables",

    /* ── S16 ITERATION ── */
    s16Kicker: "15 — Proceso",
    s16Title: "Iteración, trade-offs y qué cambió",
    s16Body1: "El producto evolucionó a través de ajustes repetidos, especialmente alrededor del registro, requisitos legales, comportamiento mobile y cuánto podía adaptarse de manera realista dentro de las restricciones del proveedor. Algunas ideas avanzaron, otras se redujeron para el lanzamiento y algunas permanecieron exploratorias.",
    s16Body2: "No todo se construyó de una vez. Conceptos de torneos y ideas más amplias de rewards o afiliados quedaron fuera del primer alcance implementado, mientras que el lanzamiento principal se enfocó en compliance, usabilidad, mantenibilidad y mayor coherencia del producto.",
    s16SubTitle: "Diseñar bajo presión significa decidir qué importa ahora y qué puede esperar",
    s16Iter1Hint: "Dirección temprana",
    s16Iter1Label: "Dirección temprana",
    s16Iter2Hint: "Estructura refinada",
    s16Iter2Label: "Estructura refinada",
    s16Iter3Hint: "Solución lista para lanzar",
    s16Iter3Label: "Solución lista para lanzar",
    s16Iter4Hint: "Evolución posterior",
    s16Iter4Label: "Evolución posterior",

    /* ── S17 OUTCOMES ── */
    s17Kicker: "16 — Resultados",
    s17Title: "Resultados y valor de negocio",
    s17Body1: "El rediseño ayudó a que la plataforma fuera más fácil de operar, más fuerte en su presentación visual, más alineada con los nuevos requisitos legales y mejor estructurada para iteración futura. También ayudó al negocio a alejarse de un modelo de frontend más frágil hacia una capa de producto más manejable.",
    s17Body2: "El proyecto también creó valor más allá del negocio en sí. La implementación se convirtió en una referencia útil para socios que trabajan en el contexto del mercado peruano, especialmente en torno a requisitos de validación y realidades de integración para plataformas de apuestas bajo nueva regulación.",
    s17Val1Title: "Mejora operativa",
    s17Val1Body: "La plataforma se volvió más fácil de mantener y más adecuada para flujos recurrentes de contenido y cuenta.",
    s17Val2Title: "Credibilidad del producto",
    s17Val2Body: "El rediseño ayudó a que la plataforma se sintiera más madura, más usable y más comercialmente competitiva.",
    s17Val3Title: "Soporte al crecimiento",
    s17Val3Body: "La nueva estructura soportó una experiencia de usuario mejorada y coincidió con una tracción de producto más fuerte — de aproximadamente 6–8k usuarios activos a alrededor de 16k.",
    s17Hint1: "Métricas / datos de crecimiento",
    s17Hint2: "Evidencia de calidad de la plataforma",
    s17Hint3: "Validación de compliance",

    /* ── S18 REFLECTION ── */
    s18Kicker: "17 — Reflexión",
    s18Title: "Lo que este proyecto representa en mi práctica",
    s18Body: "PlayzonBet representa mi capacidad para rediseñar un producto digital en vivo bajo presión real: requisitos legales, limitaciones del proveedor, restricciones técnicas, necesidades operativas y ambición de negocio, todo tuvo que resolverse dentro de una dirección de producto. Más que un rediseño visual, se convirtió en un ejercicio de transformación de producto a través de estructura UX, claridad de interfaz y toma de decisiones con conciencia sistémica.",
    s18ClosingPre: "Sigue siendo uno de los ejemplos más claros de mi trabajo en la intersección de UX, UI, product thinking, conciencia frontend y ",
    s18ClosingAccent: "realidad operativa.",
    s18Hint: "Visual de cierre — composición final",

    /* ── S19 CREDITS ── */
    s19Kicker: "18 — Rol & Créditos",
    s19Title: "Rol y colaboración",
    s19Body: "Este caso refleja una contribución de diseño de producto cross-functional que involucró discovery, síntesis de requerimientos, diseño de flujos, diseño de interfaz, priorización, alineación de implementación y colaboración con legal, compliance, operaciones, CRM, marketing, finanzas, propiedad, desarrollo y proveedores externos.",
    s19RoleLabel: "Mi rol",
    s19RoleVal: "Diseño UX/UI de punta a punta, definición de flujos, estructura de producto, priorización y alineación de implementación.",
    s19CollabLabel: "Dimensiones colaborativas",
    s19CollabVal: "Legal, compliance, CRM, marketing, operaciones, finanzas, coordinación de proveedores y entrega de desarrollo.",
    s19PartnersLabel: "Socios externos",
    s19PartnersVal: "Madmen · EveryMatrix · Optimove · Strapi",
    s19NotesLabel: "Notas sobre el alcance",
    s19NotesVal: "El core del sportsbook se mantuvo controlado por el proveedor. Las capas de experiencia circundantes, estructura de contenido, flujos de compliance y coherencia visual/producto se convirtieron en las áreas de diseño principales.",
    s19Hint: "Equipo / contexto de colaboración",

    /* ── ANNEXES ── */
    annexKicker: "Anexo — Materiales de proceso",
    annexTitle: "Materiales de investigación y proceso de soporte",
    annexBody: "Documentación adicional, referencias y artefactos de proceso. Estos materiales son secundarios a la narrativa principal y están destinados a una revisión más profunda.",
    annex1Hint: "Capturas del frontend anterior",
    annex1Label: "Capturas del frontend anterior",
    annex2Hint: "Diagramas de lógica de registro",
    annex2Label: "Diagramas de lógica de registro y validación",
    annex3Hint: "Comparativas de adaptación del sportsbook",
    annex3Label: "Comparativas de adaptación del sportsbook",
    annex4Hint: "Estructura de contenido del CMS",
    annex4Label: "CMS y estructura de contenido",
    annex5Hint: "Conceptos exploratorios",
    annex5Label: "Conceptos exploratorios no lanzados",
    annex6Hint: "Pantallas mobile y operativas",
    annex6Label: "Pantallas mobile y operativas adicionales",
  } : {
    /* ── S1 HERO ── */
    heroKicker: "Selected Work — Case Study",
    heroTitle: "PlayzonBet",
    heroBodyAccent: "Transforming a betting platform",
    heroBodyRest: "under regulatory, technical, and operational constraints.",
    heroBody2: "PlayzonBet became a product redesign shaped by real pressure: legal urgency, provider limitations, operational complexity, mobile-first usage, and the need to evolve a weak frontend into a more controlled and credible digital experience.",
    heroHint: "Product mosaic — composed hero",
    s1MetaRole: "Role",
    s1MetaRoleVal: "Product Designer / UX·UI",
    s1MetaScope: "Scope",
    s1MetaScopeVal: "Product redesign, compliance flows, registration UX, sportsbook adaptation, mobile-first navigation, content structure, CMS logic, frontend control layer",
    s1MetaFocus: "Focus",
    s1MetaFocusVal: "Transforming a provider-dependent betting platform into a more controlled, compliant, and maintainable product experience",
    s1MetaProviders: "Providers",
    s1MetaProvidersVal: "Madmen · EveryMatrix · Optimove · Strapi",
    s1MetaOutput: "Output",
    s1MetaOutputVal: "Website redesign, registration wizard, account/wallet improvements, promotions and content logic, sportsbook shell adaptation, CMS structure, mobile-first improvements",

    /* ── S2 OVERVIEW ── */
    s2Kicker: "01 — Overview",
    s2Title: "The case in one minute",
    s2Body: "PlayzonBet was a redesign and relaunch of a sportsbook and casino platform for the Peruvian market. The project replaced a weak and difficult-to-maintain frontend with a more controlled product layer shaped by compliance needs, operational realities, mobile-first behavior, and stronger brand credibility.",
    s2WhatTitle: "What it was",
    s2WhatBody: "A redesign of a live betting and casino platform operating under third-party infrastructure and growing legal demands.",
    s2ChangedTitle: "What changed",
    s2ChangedBody: "The product moved from a basic and hard-to-manage frontend toward a more structured, branded, and maintainable experience.",
    s2WhyTitle: "Why it mattered",
    s2WhyBody: "Because the previous setup was limiting product quality, day-to-day operations, legal compliance, and user trust.",
    s2Hint: "System overview / overview diagram",

    /* ── S3 CONTEXT ── */
    s3Kicker: "02 — Context",
    s3Title: "The context",
    s3Body1: "PlayzonBet was a digital betting and casino product for the Peruvian market. At the time of redesign, the business wanted to relaunch the platform with a stronger visual position, better user experience, and more control over the frontend. The existing setup depended heavily on EveryMatrix, which provided the sportsbook, casino feeds, backoffice infrastructure, and an embedded frontend model that was too limited for the business's needs.",
    s3Body2: "The moment was especially critical because Peru was updating its regulatory requirements for betting platforms. Registration, identity validation, responsible gaming, self-suspension, and account control features would all need to meet higher standards. The redesign therefore became both a business opportunity and an operational necessity.",
    s3Hint1: "Market and business context",
    s3Hint2: "Regulatory landscape",

    /* ── S4 PROBLEM ── */
    s4Kicker: "03 — Problem",
    s4Title: "The real problem",
    s4Body1: "The visible issue was that the platform looked outdated, generic, and below the standard the business wanted to project. But the deeper problem was structural. The frontend was difficult to maintain, content operations were cumbersome, promotions were hard to manage, and many customer-facing processes lacked flexibility.",
    s4Body2: "At the same time, the upcoming legal requirements made it clear that the old setup would not be enough. The business needed a product layer it could control more directly — one that could support a more robust registration process, clearer account management, stronger responsible gaming mechanisms, and more agile daily operations.",
    s4CalloutAccent: "The issue was not just poor UI.",
    s4CalloutRest: "It was dependency, compliance risk, operational friction, and product fragility.",
    s4Hint1: "Before — existing platform issues",
    s4Hint2: "After — redesigned experience",

    /* ── S5 CONSTRAINTS ── */
    s5Kicker: "04 — Constraints",
    s5Title: "Constraints that shaped the product",
    s5Body: "This redesign took place under layered constraints. The sportsbook and live sportsbook core came from the provider and could not be redesigned freely. Legal requirements for registration and account protection were non-negotiable. Time pressure was high, internal stakeholders had different priorities, and more than ninety percent of usage happened on mobile. The work therefore required designing under dependency, not from a blank canvas.",
    s5SubTitle: "What we could control, influence, and adapt",
    s5SubBody: "The challenge was not to imagine an ideal system without limits, but to improve what users actually experienced while aligning business ambition, provider capabilities, technical feasibility, and legal obligations.",
    s5Hint: "Control / influence / fixed layers diagram",

    /* ── S6 CONTRIBUTION ── */
    s6Kicker: "05 — Contribution",
    s6Title: "My role",
    s6Body1: "I was hired as a UX/UI designer, but the scope quickly became broader. I worked across discovery, requirements synthesis, flow design, interface structure, implementation prioritization, and cross-team alignment. The role involved translating needs from operations, legal, compliance, CRM, customer service, finance, marketing, and ownership into a coherent product direction.",
    s6Body2: "I also worked directly with development and external providers to understand implementation limits, integration possibilities, and content-management needs. This included continuous coordination with Madmen, EveryMatrix, Optimove, and the teams involved in frontend delivery and platform integration.",
    s6Block1Title: "Discovery and alignment",
    s6Block1Body: "Gathering requirements across internal areas and identifying opportunities for improvement.",
    s6Block2Title: "Product and flow definition",
    s6Block2Body: "Turning operational, legal, and user requirements into structured journeys and interface logic.",
    s6Block3Title: "UX/UI design",
    s6Block3Body: "Designing the new frontend experience, mobile behaviors, account logic, and branded product surfaces.",
    s6Block4Title: "Implementation prioritization",
    s6Block4Body: "Defining what to build first and how to align the work with technical feasibility and launch constraints.",
    s6Hint: "Team and collaboration context",

    /* ── S7 SCOPE ── */
    s7Kicker: "06 — Product Scope",
    s7Title: "Mapping the product ecosystem",
    s7Body: "The project touched multiple layers of the experience: public-facing pages, sportsbook access, account and wallet information, promotions, registration and verification, responsible gaming controls, customer support surfaces, content management, and mobile navigation patterns. What mattered was not only redesigning isolated pages, but improving the coherence of the product as a whole.",
    s7Mod1Title: "Public-facing website",
    s7Mod1Body: "Landing, promotions, game access, and brand-facing surfaces that set the first impression.",
    s7Mod1Hint: "Public-facing website",
    s7Mod2Title: "Registration and verification",
    s7Mod2Body: "Compliance-critical onboarding flow with stepped structure, identity validation, and responsible gaming entry.",
    s7Mod2Hint: "Registration and verification",
    s7Mod3Title: "Sportsbook shell",
    s7Mod3Body: "Navigation shell and visual adaptation around the provider-embedded sportsbook engine.",
    s7Mod3Hint: "Sportsbook shell",
    s7Mod4Title: "Account and wallet",
    s7Mod4Body: "User account visibility, deposit and withdrawal flows, balance information, and self-management controls.",
    s7Mod4Hint: "Account and wallet",
    s7Mod5Title: "Promotions and communication",
    s7Mod5Body: "Bonus surfaces, free-spin communication, CRM touchpoints, and editorial promotion management.",
    s7Mod5Hint: "Promotions and communication",
    s7Mod6Title: "CMS and content logic",
    s7Mod6Body: "Strapi-backed content structure enabling editorial flexibility, legal text updates, and recurring page management.",
    s7Mod6Hint: "CMS and content logic",

    /* ── S8 COMPLIANCE ── */
    s8Kicker: "07 — Compliance",
    s8Title: "Compliance as a design driver",
    s8Body1: "One of the most defining aspects of the redesign was the legal update in Peru. The previous model allowed users to enter the platform with minimal information and complete the rest later. That approach was no longer viable. New requirements demanded stronger identity validation, age checks, responsible gaming support, self-suspension options, account blocking mechanisms, and visible compliance-related communication.",
    s8Body2: "This changed the design problem significantly. Registration could no longer be treated as a quick entry point. It had to become a controlled, transparent, and confidence-building process that still felt manageable for the user.",
    s8CalloutAccent: "Compliance was not a side requirement.",
    s8CalloutRest: "It was one of the main drivers of the product redesign.",
    s8Hint: "Compliance flow / regulatory requirements map",

    /* ── S9 REGISTRATION ── */
    s9Kicker: "08 — Registration",
    s9Title: "Redesigning registration and verification",
    s9Body1: "The registration flow had to become more rigorous without becoming unnecessarily overwhelming. To address this, the experience was structured as a step-based wizard that clarified progress, grouped information more intelligently, and made a more demanding legal process feel clearer and more guided.",
    s9Body2: "The flow also supported progressive validation logic. Identity checks, age validation, and security-related verification could be staged more clearly, helping reduce ambiguity while aligning with the legal and technical realities of the platform.",
    s9SubTitle: "Turning a heavier process into a more understandable one",
    s9Hint: "Registration wizard — full flow overview",
    s9Step1Hint: "Step 01 — Account basics",
    s9Step1Caption: "Personal information and account creation",
    s9Step2Hint: "Step 02 — Identity",
    s9Step2Caption: "Identity validation and age check",
    s9Step3Hint: "Step 03 — Security",
    s9Step3Caption: "Password, security, and confirmation",
    s9Step4Hint: "Step 04 — Compliance",
    s9Step4Caption: "Responsible gaming and legal agreements",

    /* ── S10 FRONTEND CONTROL ── */
    s10Kicker: "09 — Frontend Control",
    s10Title: "Taking control of the frontend",
    s10Body1: "A major part of the redesign was the move toward a more controlled frontend layer. The previous setup made content operations and product adjustments unnecessarily difficult. By redesigning the product around a frontend the business could shape more directly, the team gained more agility over structure, communication, and daily management.",
    s10Body2: "This was especially important for promotions, informational content, legal text, buttons, editorial changes, and other recurring surfaces that could not remain trapped inside a rigid provider-facing setup.",
    s10SubTitle: "From provider dependency to a more controllable product layer",
    s10Hint1: "Architecture — before vs after",
    s10Hint2: "Frontend ownership structure",
    s10Hint3: "Editable zones / content governance",

    /* ── S11 OPERATIONS ── */
    s11Kicker: "10 — Operations",
    s11Title: "Designing for daily operations",
    s11Body1: "The redesign also had to support how the platform operated every day. Promotions, free-spin communication, user status visibility, account information, and support-related interactions all depended on the frontend being easier to manage and easier to understand. In the old setup, many of these processes were far too manual or hard to surface clearly.",
    s11Body2: "A better product experience therefore meant more than visual polish. It meant making recurring interactions more maintainable, more visible, and more usable for both the business and the user.",
    s11Hint1: "Operations — featured surface",
    s11Hint2: "Promotions management",
    s11Hint3: "Account and status visibility",
    s11Hint4: "Support and recurring flows",

    /* ── S12 SPORTSBOOK ── */
    s12Kicker: "11 — Sportsbook",
    s12Title: "Working with a third-party sportsbook",
    s12Body1: "The sportsbook and live sportsbook core were embedded from the provider and could not be redesigned freely at a functional level. That meant the work had to focus on adaptation, shell alignment, surrounding navigation, and visual consistency rather than full control of the core betting engine.",
    s12Body2: "Even within those limits, it was still possible to improve the perceived coherence of the experience. The redesign pushed for better alignment between the embedded sportsbook and the rest of the product, especially in mobile navigation, category access, and top-level visual integration.",
    s12SubTitle: "Improving what users experienced without owning the whole system",
    s12Hint1: "Sportsbook — before/after adaptation",
    s12Hint2: "Mobile navigation alignment",
    s12Hint3: "Category and sport access",
    s12Hint4: "Visual integration — shell/provider boundary",

    /* ── S13 MOBILE ── */
    s13Kicker: "12 — Mobile",
    s13Title: "Mobile-first experience",
    s13Body1: "Because the overwhelming majority of usage happened on mobile, navigation and access patterns became central to the redesign. The work included improvements to category browsing, navbar behavior, account access, deposit and withdrawal visibility, and the overall clarity of key actions on smaller screens.",
    s13Body2: "This part of the work mattered not only because of scale, but because mobile was where usability and friction had the greatest operational consequences.",
    s13Hint1: "Mobile — flagship showcase",
    s13Hint2: "Mobile nav / bottom bar",
    s13Hint3: "Account / wallet access",
    s13Hint4: "Deposit / withdrawal flow",
    s13Hint5: "Promotions on mobile",

    /* ── S14 BRAND ── */
    s14Kicker: "13 — Brand",
    s14Title: "Brand, look and feel, and market positioning",
    s14Body1: "The previous product felt visually weak for the audience the business wanted to attract. The redesign therefore needed to support a stronger perception of trust, quality, and maturity. This was not only a visual preference — it was part of making the product feel more aligned with a more premium and higher-ticket positioning.",
    s14Body2: "The result was a more intentional visual language, one that helped the platform feel less generic and more commercially credible in a highly competitive market.",
    s14Hint1: "Brand — visual identity upgrade",
    s14Hint2: "Visual language — components and style",
    s14Hint3: "Market positioning — tone and feel",

    /* ── S15 CMS ── */
    s15Kicker: "14 — Content & CMS",
    s15Title: "Designing the CMS and content logic",
    s15Body1: "Content flexibility became a key part of the redesign. The new frontend had to support a structure where promotions, texts, buttons, legal sections, logos, informational modules, and other recurring surfaces could be managed more effectively. This brought Strapi into the design problem — not just as a technical detail, but as part of the product's operational logic.",
    s15Body2: "Designing the frontend therefore also meant thinking through what should be editable, how content should map to interface structure, and how recurring publishing needs could be supported more sustainably.",
    s15Hint1: "CMS / content logic — full overview",
    s15Hint2: "Strapi content model",
    s15Hint3: "Editable zones mapping",

    /* ── S16 ITERATION ── */
    s16Kicker: "15 — Process",
    s16Title: "Iteration, trade-offs, and what changed",
    s16Body1: "The product evolved through repeated adjustments, especially around registration, legal requirements, mobile behavior, and how much could realistically be adapted within provider constraints. Some ideas moved forward, others were reduced for launch, and some remained exploratory.",
    s16Body2: "Not everything was built at once. Tournament concepts and broader rewards or affiliate ideas remained outside the first implemented scope, while the core launch focused on compliance, usability, maintainability, and stronger product coherence.",
    s16SubTitle: "Designing under pressure means deciding what matters now and what can wait",
    s16Iter1Hint: "Early direction",
    s16Iter1Label: "Early direction",
    s16Iter2Hint: "Refined structure",
    s16Iter2Label: "Refined structure",
    s16Iter3Hint: "Launch-ready solution",
    s16Iter3Label: "Launch-ready solution",
    s16Iter4Hint: "Later evolution",
    s16Iter4Label: "Later evolution",

    /* ── S17 OUTCOMES ── */
    s17Kicker: "16 — Outcomes",
    s17Title: "Outcomes and business value",
    s17Body1: "The redesign helped make the platform easier to operate, stronger in its visual presentation, more aligned with the new legal requirements, and better structured for future iteration. It also helped the business move away from a more fragile frontend model toward a more manageable product layer.",
    s17Body2: "The project also created value beyond the business itself. The implementation became a useful reference for partners working within the Peruvian market context, especially around validation requirements and integration realities for betting platforms under new regulation.",
    s17Val1Title: "Operational improvement",
    s17Val1Body: "The platform became easier to maintain and better suited for recurring content and account-related flows.",
    s17Val2Title: "Product credibility",
    s17Val2Body: "The redesign helped the platform feel more mature, more usable, and more commercially competitive.",
    s17Val3Title: "Growth support",
    s17Val3Body: "The new structure supported improved user experience and coincided with stronger product traction — from roughly 6–8k active users to around 16k.",
    s17Hint1: "Metrics / growth data",
    s17Hint2: "Platform quality evidence",
    s17Hint3: "Compliance validation",

    /* ── S18 REFLECTION ── */
    s18Kicker: "17 — Reflection",
    s18Title: "What this project represents in my practice",
    s18Body: "PlayzonBet represents my ability to redesign a live digital product under real-world pressure: legal requirements, provider limitations, technical constraints, operational needs, and business ambition all had to be resolved within one product direction. More than a visual redesign, it became an exercise in product transformation through UX structure, interface clarity, and systems-aware decision-making.",
    s18ClosingPre: "It remains one of the clearest examples of my work at the intersection of UX, UI, product thinking, frontend awareness, and ",
    s18ClosingAccent: "operational reality.",
    s18Hint: "Closing visual — composed final",

    /* ── S19 CREDITS ── */
    s19Kicker: "18 — Role & Credits",
    s19Title: "Role and collaboration",
    s19Body: "This case reflects a cross-functional product design contribution involving discovery, requirements synthesis, flow design, interface design, prioritization, implementation alignment, and collaboration across legal, compliance, operations, CRM, marketing, finance, ownership, development, and external providers.",
    s19RoleLabel: "My role",
    s19RoleVal: "End-to-end UX/UI design, flow definition, product structure, prioritization, and implementation alignment.",
    s19CollabLabel: "Collaborative dimensions",
    s19CollabVal: "Legal, compliance, CRM, marketing, operations, finance, provider coordination, and development delivery.",
    s19PartnersLabel: "External partners",
    s19PartnersVal: "Madmen · EveryMatrix · Optimove · Strapi",
    s19NotesLabel: "Notes on scope",
    s19NotesVal: "The sportsbook core remained provider-controlled. Surrounding experience layers, content structure, compliance flows, and visual/product coherence became the primary design areas.",
    s19Hint: "Team / collaboration context",

    /* ── ANNEXES ── */
    annexKicker: "Annex — Process materials",
    annexTitle: "Supporting research and process materials",
    annexBody: "Additional documentation, references, and process artifacts. These materials are secondary to the main narrative and intended for deeper review.",
    annex1Hint: "Old frontend captures",
    annex1Label: "Old frontend captures",
    annex2Hint: "Registration logic diagrams",
    annex2Label: "Registration logic and validation diagrams",
    annex3Hint: "Sportsbook adaptation comparisons",
    annex3Label: "Sportsbook adaptation comparisons",
    annex4Hint: "CMS content structure",
    annex4Label: "CMS and content structure",
    annex5Hint: "Exploratory concepts",
    annex5Label: "Exploratory concepts not shipped",
    annex6Hint: "Mobile and operational screens",
    annex6Label: "Additional mobile and operational screens",
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
          <Typography variant="h1">{c.heroTitle}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            <Accent>{c.heroBodyAccent}</Accent>{" "}
            {c.heroBodyRest}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.heroBody2}
          </Typography>
        </div>

        {/* asset-slot: PZ-HERO-01 — Replace with product mosaic / composed hero */}
        <CasePlaceholder id="PZ-HERO-01" ratio="hero" hint={c.heroHint} />

        <div className="cs-meta cs-meta--5col">
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaRole}</p>
            <p className="cs-meta__value">{c.s1MetaRoleVal}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaScope}</p>
            <p className="cs-meta__value">
              {c.s1MetaScopeVal}
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaFocus}</p>
            <p className="cs-meta__value">
              {c.s1MetaFocusVal}
            </p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaProviders}</p>
            <p className="cs-meta__value">{c.s1MetaProvidersVal}</p>
          </div>
          <div className="cs-meta__item">
            <p className="cs-meta__label">{c.s1MetaOutput}</p>
            <p className="cs-meta__value">
              {c.s1MetaOutputVal}
            </p>
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
              <Typography variant="h3">{c.s2WhatTitle}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s2WhatBody}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s2ChangedTitle}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s2ChangedBody}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s2WhyTitle}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s2WhyBody}
              </Typography>
            </div>
          </div>
          {/* asset-slot: PZ-OVERVIEW-01 — Replace with system overview / overview diagram */}
          <CasePlaceholder id="PZ-OVERVIEW-01" ratio="landscape" hint={c.s2Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S3 — THE CONTEXT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="context">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s3Kicker}</Typography>
          <Typography variant="h2">{c.s3Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s3Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s3Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            {/* asset-slot: PZ-CONTEXT-01 — Replace with market and business context */}
            <CasePlaceholder id="PZ-CONTEXT-01" ratio="landscape" hint={c.s3Hint1} />
            {/* asset-slot: PZ-CONTEXT-02 — Replace with regulatory landscape */}
            <CasePlaceholder id="PZ-CONTEXT-02" ratio="landscape" hint={c.s3Hint2} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — THE REAL PROBLEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="problem">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>{c.s4CalloutAccent}</Accent>{" "}
              {c.s4CalloutRest}
            </Typography>
          </div>
          <div className="cs-split">
            {/* asset-slot: PZ-PROBLEM-01 — Replace with before — existing platform issues */}
            <CasePlaceholder id="PZ-PROBLEM-01" ratio="landscape" hint={c.s4Hint1} />
            {/* asset-slot: PZ-PROBLEM-02 — Replace with after — redesigned experience */}
            <CasePlaceholder id="PZ-PROBLEM-02" ratio="landscape" hint={c.s4Hint2} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — CONSTRAINTS THAT SHAPED THE PRODUCT
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="constraints">
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
            <Typography variant="bodyLg" tone="secondary">
              {c.s5SubBody}
            </Typography>
          </div>
          {/* asset-slot: PZ-CONSTRAINTS-01 — Replace with control / influence / fixed layers diagram */}
          <CasePlaceholder id="PZ-CONSTRAINTS-01" ratio="landscape" hint={c.s5Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — MY ROLE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="contribution">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            <div className="cs-block">
              <Typography variant="h3">{c.s6Block1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s6Block1Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s6Block2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s6Block2Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s6Block3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s6Block3Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s6Block4Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s6Block4Body}
              </Typography>
            </div>
          </div>
          {/* asset-slot: PZ-ROLE-01 — Replace with team and collaboration context */}
          <CasePlaceholder id="PZ-ROLE-01" ratio="card" hint={c.s6Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — MAPPING THE PRODUCT ECOSYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="scope">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-module-grid">
            <div className="cs-module-item">
              <span className="cs-module-item__index">01</span>
              {/* asset-slot: PZ-SCOPE-01 — Replace with public-facing website thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-01" ratio="landscape" hint={c.s7Mod1Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s7Mod1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Mod1Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">02</span>
              {/* asset-slot: PZ-SCOPE-02 — Replace with registration and verification thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-02" ratio="landscape" hint={c.s7Mod2Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s7Mod2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Mod2Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">03</span>
              {/* asset-slot: PZ-SCOPE-03 — Replace with sportsbook shell thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-03" ratio="landscape" hint={c.s7Mod3Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s7Mod3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Mod3Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">04</span>
              {/* asset-slot: PZ-SCOPE-04 — Replace with account and wallet thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-04" ratio="landscape" hint={c.s7Mod4Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s7Mod4Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Mod4Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">05</span>
              {/* asset-slot: PZ-SCOPE-05 — Replace with promotions and communication thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-05" ratio="landscape" hint={c.s7Mod5Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s7Mod5Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Mod5Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">06</span>
              {/* asset-slot: PZ-SCOPE-06 — Replace with CMS and content logic thumbnail */}
              <CasePlaceholder id="PZ-SCOPE-06" ratio="landscape" hint={c.s7Mod6Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s7Mod6Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Mod6Body}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — COMPLIANCE AS A DESIGN DRIVER
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="compliance">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s8Kicker}</Typography>
          <Typography variant="h2">{c.s8Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s8Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s8Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-callout">
            <Typography variant="bodyLg" tone="secondary">
              <Accent>{c.s8CalloutAccent}</Accent>{" "}
              {c.s8CalloutRest}
            </Typography>
          </div>
          {/* asset-slot: PZ-COMPLIANCE-01 — Replace with compliance flow / regulatory requirements map */}
          <CasePlaceholder id="PZ-COMPLIANCE-01" ratio="wide" hint={c.s8Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — REDESIGNING REGISTRATION AND VERIFICATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="registration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s9Kicker}</Typography>
          <Typography variant="h2">{c.s9Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s9Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s9Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s9SubTitle}</Typography>
          </div>
          {/* asset-slot: PZ-REG-01 — Replace with registration wizard — full flow overview */}
          <CasePlaceholder id="PZ-REG-01" ratio="wide" hint={c.s9Hint} />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-02 — Replace with step 01 — account basics */}
              <CasePlaceholder id="PZ-REG-02" ratio="portrait" hint={c.s9Step1Hint} />
              <p className="cs-caption">{c.s9Step1Caption}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-03 — Replace with step 02 — identity */}
              <CasePlaceholder id="PZ-REG-03" ratio="portrait" hint={c.s9Step2Hint} />
              <p className="cs-caption">{c.s9Step2Caption}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-04 — Replace with step 03 — security */}
              <CasePlaceholder id="PZ-REG-04" ratio="portrait" hint={c.s9Step3Hint} />
              <p className="cs-caption">{c.s9Step3Caption}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-REG-05 — Replace with step 04 — compliance */}
              <CasePlaceholder id="PZ-REG-05" ratio="portrait" hint={c.s9Step4Hint} />
              <p className="cs-caption">{c.s9Step4Caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S10 — TAKING CONTROL OF THE FRONTEND
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="frontend-control">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s10Kicker}</Typography>
          <Typography variant="h2">{c.s10Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s10Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s10Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s10SubTitle}</Typography>
          </div>
          <div className="cs-three-up">
            {/* asset-slot: PZ-ARCH-01 — Replace with architecture — before vs after */}
            <CasePlaceholder id="PZ-ARCH-01" ratio="landscape" hint={c.s10Hint1} />
            {/* asset-slot: PZ-ARCH-02 — Replace with frontend ownership structure */}
            <CasePlaceholder id="PZ-ARCH-02" ratio="landscape" hint={c.s10Hint2} />
            {/* asset-slot: PZ-ARCH-03 — Replace with editable zones / content governance */}
            <CasePlaceholder id="PZ-ARCH-03" ratio="landscape" hint={c.s10Hint3} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S11 — DESIGNING FOR DAILY OPERATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="operations">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s11Kicker}</Typography>
          <Typography variant="h2">{c.s11Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s11Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s11Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-OPS-01 — Replace with operations — featured surface */}
          <CasePlaceholder id="PZ-OPS-01" ratio="landscape" hint={c.s11Hint1} />
          <div className="cs-three-up">
            {/* asset-slot: PZ-OPS-02 — Replace with promotions management */}
            <CasePlaceholder id="PZ-OPS-02" ratio="card" hint={c.s11Hint2} />
            {/* asset-slot: PZ-OPS-03 — Replace with account and status visibility */}
            <CasePlaceholder id="PZ-OPS-03" ratio="card" hint={c.s11Hint3} />
            {/* asset-slot: PZ-OPS-04 — Replace with support and recurring flows */}
            <CasePlaceholder id="PZ-OPS-04" ratio="card" hint={c.s11Hint4} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S12 — WORKING WITH A THIRD-PARTY SPORTSBOOK
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="sportsbook">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s12Kicker}</Typography>
          <Typography variant="h2">{c.s12Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s12Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s12Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s12SubTitle}</Typography>
          </div>
          {/* asset-slot: PZ-SB-01 — Replace with sportsbook — before/after adaptation */}
          <CasePlaceholder id="PZ-SB-01" ratio="landscape" hint={c.s12Hint1} />
          <div className="cs-three-up">
            {/* asset-slot: PZ-SB-02 — Replace with mobile navigation alignment */}
            <CasePlaceholder id="PZ-SB-02" ratio="card" hint={c.s12Hint2} />
            {/* asset-slot: PZ-SB-03 — Replace with category and sport access */}
            <CasePlaceholder id="PZ-SB-03" ratio="card" hint={c.s12Hint3} />
            {/* asset-slot: PZ-SB-04 — Replace with visual integration — shell/provider boundary */}
            <CasePlaceholder id="PZ-SB-04" ratio="card" hint={c.s12Hint4} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S13 — MOBILE-FIRST EXPERIENCE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="mobile">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s13Kicker}</Typography>
          <Typography variant="h2">{c.s13Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s13Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s13Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-MOBILE-01 — Replace with mobile — flagship showcase */}
          <CasePlaceholder id="PZ-MOBILE-01" ratio="portrait" hint={c.s13Hint1} />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-02 — Replace with mobile nav / bottom bar */}
              <CasePlaceholder id="PZ-MOBILE-02" ratio="portrait" hint={c.s13Hint2} />
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-03 — Replace with account / wallet access */}
              <CasePlaceholder id="PZ-MOBILE-03" ratio="portrait" hint={c.s13Hint3} />
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-04 — Replace with deposit / withdrawal flow */}
              <CasePlaceholder id="PZ-MOBILE-04" ratio="portrait" hint={c.s13Hint4} />
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: PZ-MOBILE-05 — Replace with promotions on mobile */}
              <CasePlaceholder id="PZ-MOBILE-05" ratio="portrait" hint={c.s13Hint5} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S14 — BRAND, LOOK & FEEL, AND MARKET POSITIONING
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="brand">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s14Kicker}</Typography>
          <Typography variant="h2">{c.s14Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s14Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s14Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-BRAND-01 — Replace with brand — visual identity upgrade */}
          <CasePlaceholder id="PZ-BRAND-01" ratio="landscape" hint={c.s14Hint1} />
          <div className="cs-split">
            {/* asset-slot: PZ-BRAND-02 — Replace with visual language — components and style */}
            <CasePlaceholder id="PZ-BRAND-02" ratio="landscape" hint={c.s14Hint2} />
            {/* asset-slot: PZ-BRAND-03 — Replace with market positioning — tone and feel */}
            <CasePlaceholder id="PZ-BRAND-03" ratio="landscape" hint={c.s14Hint3} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S15 — DESIGNING THE CMS AND CONTENT LOGIC
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="cms">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s15Kicker}</Typography>
          <Typography variant="h2">{c.s15Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s15Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s15Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: PZ-CMS-01 — Replace with CMS / content logic — full overview */}
          <CasePlaceholder id="PZ-CMS-01" ratio="wide" hint={c.s15Hint1} />
          <div className="cs-split">
            {/* asset-slot: PZ-CMS-02 — Replace with Strapi content model */}
            <CasePlaceholder id="PZ-CMS-02" ratio="landscape" hint={c.s15Hint2} />
            {/* asset-slot: PZ-CMS-03 — Replace with editable zones mapping */}
            <CasePlaceholder id="PZ-CMS-03" ratio="landscape" hint={c.s15Hint3} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S16 — ITERATION, TRADE-OFFS, AND WHAT CHANGED
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="iteration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s16Kicker}</Typography>
          <Typography variant="h2">{c.s16Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s16Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s16Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s16SubTitle}</Typography>
          </div>
          <div className="cs-iter-grid">
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-01 — Replace with early direction */}
              <CasePlaceholder id="PZ-ITER-01" ratio="landscape" hint={c.s16Iter1Hint} />
              <p className="cs-iter-label">{c.s16Iter1Label}</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-02 — Replace with refined structure */}
              <CasePlaceholder id="PZ-ITER-02" ratio="landscape" hint={c.s16Iter2Hint} />
              <p className="cs-iter-label">{c.s16Iter2Label}</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-03 — Replace with launch-ready solution */}
              <CasePlaceholder id="PZ-ITER-03" ratio="landscape" hint={c.s16Iter3Hint} />
              <p className="cs-iter-label">{c.s16Iter3Label}</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: PZ-ITER-04 — Replace with later evolution */}
              <CasePlaceholder id="PZ-ITER-04" ratio="landscape" hint={c.s16Iter4Hint} />
              <p className="cs-iter-label">{c.s16Iter4Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S17 — OUTCOMES AND BUSINESS VALUE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="outcomes">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s17Kicker}</Typography>
          <Typography variant="h2">{c.s17Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s17Body1}
          </Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s17Body2}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-value-grid">
            <div className="cs-value-block">
              <Typography variant="h3">{c.s17Val1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s17Val1Body}
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">{c.s17Val2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s17Val2Body}
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">{c.s17Val3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s17Val3Body}
              </Typography>
            </div>
          </div>
          <div className="cs-evidence">
            {/* asset-slot: PZ-IMPACT-01 — Replace with metrics / growth data */}
            <CasePlaceholder id="PZ-IMPACT-01" ratio="landscape" hint={c.s17Hint1} />
            {/* asset-slot: PZ-IMPACT-02 — Replace with platform quality evidence */}
            <CasePlaceholder id="PZ-IMPACT-02" ratio="square" hint={c.s17Hint2} />
            {/* asset-slot: PZ-IMPACT-03 — Replace with compliance validation */}
            <CasePlaceholder id="PZ-IMPACT-03" ratio="square" hint={c.s17Hint3} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S18 — WHAT THIS PROJECT REPRESENTS IN MY PRACTICE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="reflection">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s18Kicker}</Typography>
          <Typography variant="h2">{c.s18Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s18Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <Typography variant="bodyLg" tone="secondary" as="p">
            {c.s18ClosingPre}
            <Accent>{c.s18ClosingAccent}</Accent>
          </Typography>
          {/* asset-slot: PZ-CLOSING-01 — Replace with closing visual — composed final */}
          <CasePlaceholder id="PZ-CLOSING-01" ratio="landscape" hint={c.s18Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S19 — ROLE AND COLLABORATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="credits">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s19Kicker}</Typography>
          <Typography variant="h2">{c.s19Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s19Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-role-grid">
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s19RoleLabel}</p>
              <p className="cs-role-item__value">
                {c.s19RoleVal}
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s19CollabLabel}</p>
              <p className="cs-role-item__value">
                {c.s19CollabVal}
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s19PartnersLabel}</p>
              <p className="cs-role-item__value">{c.s19PartnersVal}</p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s19NotesLabel}</p>
              <p className="cs-role-item__value">
                {c.s19NotesVal}
              </p>
            </div>
          </div>
          {/* asset-slot: PZ-CREDITS-01 — Replace with team / collaboration context */}
          <CasePlaceholder id="PZ-CREDITS-01" ratio="card" hint={c.s19Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ANNEXES — Supporting research and process materials
          ════════════════════════════════════════════ */}
      <div className="cs-annex" id="annexes">
        <div className="cs-annex-head">
          <Typography variant="micro" tone="muted">{c.annexKicker}</Typography>
          <Typography variant="h2">{c.annexTitle}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.annexBody}
          </Typography>
        </div>
        <div className="cs-annex-grid">
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-01 — Replace with old frontend captures */}
            <CasePlaceholder id="PZ-ANNEX-01" ratio="card" hint={c.annex1Hint} />
            <Typography variant="micro" tone="muted">{c.annex1Label}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-02 — Replace with registration logic and validation diagrams */}
            <CasePlaceholder id="PZ-ANNEX-02" ratio="card" hint={c.annex2Hint} />
            <Typography variant="micro" tone="muted">{c.annex2Label}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-03 — Replace with sportsbook adaptation comparisons */}
            <CasePlaceholder id="PZ-ANNEX-03" ratio="card" hint={c.annex3Hint} />
            <Typography variant="micro" tone="muted">{c.annex3Label}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-04 — Replace with CMS content structure */}
            <CasePlaceholder id="PZ-ANNEX-04" ratio="card" hint={c.annex4Hint} />
            <Typography variant="micro" tone="muted">{c.annex4Label}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-05 — Replace with exploratory concepts not shipped */}
            <CasePlaceholder id="PZ-ANNEX-05" ratio="card" hint={c.annex5Hint} />
            <Typography variant="micro" tone="muted">{c.annex5Label}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: PZ-ANNEX-06 — Replace with mobile and operational screens */}
            <CasePlaceholder id="PZ-ANNEX-06" ratio="card" hint={c.annex6Hint} />
            <Typography variant="micro" tone="muted">{c.annex6Label}</Typography>
          </div>
        </div>
      </div>

    </div>
  );
}
