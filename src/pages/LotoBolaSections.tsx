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
    heroBodyRest: " a través de puntos de contacto retail, operaciones, web, comunicación y servicio.",
    heroBody2: "LotoBola fue la expresión más clara de cómo trabajo a través de capas: enmarcando servicios, estructurando lógica de producto, diseñando interfaces y traduciendo necesidades operativas complejas en experiencias de usuario coherentes.",
    heroMetaRoleLabel: "Rol",
    heroMetaRoleValue: "Product Designer / UX·UI / Service Design",
    heroMetaScopeLabel: "Alcance",
    heroMetaScopeValue: "Arquitectura de servicio, flujos de producto, experiencia retail, sitio web, herramientas administrativas, plantillas de comunicación, fundamentos de design system",
    heroMetaFocusLabel: "Foco",
    heroMetaFocusValue: "Diseño de ecosistema de lotería a través de canales digitales y asistidos",
    heroMetaOutputLabel: "Entregables",
    heroMetaOutputValue: "Sitio web, flujos de app retail, conceptos administrativos, mailings, estructura de blog/contenido, fundamentos de sistema",
    heroPlaceholderHint: "Vista general del sistema — mosaico compuesto",

    /* ── S2 — OVERVIEW ── */
    s2Kicker: "01 — Panorama",
    s2Title: "El caso en un minuto",
    s2Body: "LotoBola fue concebido como más que un producto digital. Era un ecosistema con dimensiones públicas, asistidas, operativas y administrativas. El desafío no era solo hacer interfaces usables, sino construir coherencia entre puntos de contacto, clarificar la experiencia, apoyar las interacciones retail y crear fundamentos para escalar.",
    s2Block1Title: "Qué era",
    s2Block1Body: "Un ecosistema de lotería que combinaba puntos de entrada públicos, flujos de servicio, soporte retail, lógica operativa y superficies de comunicación.",
    s2Block2Title: "Qué estaba resolviendo",
    s2Block2Body: "Una experiencia fragmentada y multicapa que necesitaba funcionar a través de usuarios, equipos internos y entornos asistidos.",
    s2Block3Title: "Por qué importaba",
    s2Block3Body: "Porque la confianza, la claridad, la viabilidad operativa y la escalabilidad dependían de que el sistema funcionara como una experiencia conectada.",
    s2PlaceholderHint: "Diagrama del ecosistema",

    /* ── S3 — CHALLENGE ── */
    s3Kicker: "02 — Desafío",
    s3Title: "El verdadero desafío",
    s3Body: "Esto nunca fue solo un ejercicio de UI. Diseñar para un ecosistema de lotería significaba lidiar con confianza, comprensión, flujos de participación, restricciones operativas, realidades retail, consistencia en comunicación y escalabilidad a largo plazo. El problema era sistémico: diferentes superficies, diferentes actores, diferentes niveles de asistencia y diferentes necesidades de negocio debían alinearse en una sola lógica de experiencia.",
    s3CalloutAccent: "Un producto de lotería no es solo un problema de pantallas.",
    s3CalloutRest: " Es un problema de servicio, de operaciones, de comunicación y de sistemas.",
    s3Placeholder1Hint: "Encuadre del desafío",
    s3Placeholder2Hint: "Mapeo de actores / stakeholders",

    /* ── S4 — SCOPE ── */
    s4Kicker: "03 — Alcance",
    s4Title: "Alcance y arquitectura del sistema",
    s4Body: "El proyecto se expandió a través de múltiples frentes: el sitio web público, flujos retail, pensamiento administrativo y operativo, plantillas de comunicación, estructuras de contenido y fundamentos de design system. Lo que importaba no era solo diseñar cada parte, sino asegurar que cada parte perteneciera al mismo ecosistema.",
    s4Mod1Title: "Sitio web",
    s4Mod1Body: "Punto de entrada público. Explica el producto, genera confianza, impulsa la participación.",
    s4Mod1Hint: "Sitio web",
    s4Mod2Title: "Experiencia retail",
    s4Mod2Body: "Flujos asistidos e interacciones POS diseñadas para contextos retail reales.",
    s4Mod2Hint: "Experiencia retail",
    s4Mod3Title: "Admin / operaciones",
    s4Mod3Body: "Visibilidad interna, control y herramientas operativas para la gestión diaria.",
    s4Mod3Hint: "Admin / operaciones",
    s4Mod4Title: "Mailings",
    s4Mod4Body: "Plantillas de email estructuradas que soportan consistencia y repetibilidad en la comunicación.",
    s4Mod4Hint: "Mailings",
    s4Mod5Title: "Blog / contenido",
    s4Mod5Body: "Superficies de contenido para explicación, engagement y coherencia del ecosistema.",
    s4Mod5Hint: "Blog / contenido",
    s4Mod6Title: "Design system",
    s4Mod6Body: "Fundamentos compartidos que alinean patrones, componentes y lenguaje visual a través de todas las superficies.",
    s4Mod6Hint: "Design system",

    /* ── S5 — FOUNDATIONS ── */
    s5Kicker: "04 — Fundamentos",
    s5Title: "Insumos, investigación y fundamentos iniciales",
    s5Body: "El proyecto fue moldeado por una mezcla de ambición de negocio, insumos de marketing, realidades operativas, consideraciones técnicas tempranas, referencias de benchmark y trabajo exploratorio de diseño. En lugar de partir de pantallas aisladas, el trabajo comenzó con contexto: qué necesitaba existir, quién lo necesitaba, cómo operaría y qué debía comunicar el sistema.",
    s5List1: "Briefs iniciales de negocio y marketing",
    s5List2: "Referencias competitivas y visuales",
    s5List3: "Materiales de exploración temprana",
    s5List4: "Documentación de integración y flujos",
    s5List5: "Expectativas estratégicas y encuadre comercial",
    s5Placeholder1Hint: "Brief de negocio",
    s5Placeholder2Hint: "Referencias de benchmark",
    s5Placeholder3Hint: "Exploración temprana",
    s5Placeholder4Hint: "Documentación de flujos",
    s5Footnote: "Los insumos iniciales ayudaron a enmarcar el ecosistema antes de que la consistencia visual y los patrones de interacción fueran formalizados.",

    /* ── S6 — SERVICE ── */
    s6Kicker: "05 — Service Design",
    s6Title: "Arquitectura de servicio",
    s6Body: "En el núcleo del proyecto estaba la necesidad de entender el servicio como una secuencia conectada de interacciones y no como interfaces aisladas. Usuarios, equipos internos y dinámicas retail asistidas moldearon la arquitectura de la experiencia. Mapear recorridos y relaciones operativas ayudó a identificar dónde la experiencia necesitaba claridad, soporte, continuidad y control.",
    s6SubheadTitle: "De touchpoints a lógica de servicio",
    s6SubheadBody: "El valor del trabajo no estaba solo en el diseño de pantallas, sino en organizar cómo el sistema se sostenía a través de canales y momentos.",
    s6Placeholder1Hint: "Journey map / blueprint de servicio",
    s6Placeholder2Hint: "Mapa de touchpoints",
    s6Placeholder3Hint: "Detalle del journey del usuario",
    s6Placeholder4Hint: "Lógica operativa",
    s6Caption1: "Vista de canales y mapeo de touchpoints",
    s6Caption2: "Journey del cliente — momentos clave",
    s6Caption3: "Operaciones backstage y lógica de soporte",

    /* ── S7 — CUSTOMER ── */
    s7Kicker: "06 — Experiencia del Cliente",
    s7Title: "Diseñando la experiencia pública",
    s7Body: "La experiencia pública debía equilibrar claridad, legitimidad, simplicidad y engagement. Necesitaba explicar el producto, reducir ambigüedad y hacer que la participación se sintiera comprensible y confiable. Las decisiones visuales y estructurales aquí estuvieron estrechamente ligadas a la comprensión y la confianza.",
    s7Block1Title: "Puntos de entrada públicos",
    s7Block1Body: "El sitio web y las superficies públicas debían orientar, explicar y establecer confianza desde el primer contacto.",
    s7Block2Title: "Claridad y confianza",
    s7Block2Body: "La interfaz necesitaba reducir fricción haciendo la experiencia legible y creíble en cada paso.",
    s7Block3Title: "Conversión a través de la comprensión",
    s7Block3Body: "El objetivo no era solo pulido visual, sino mejor comprensión de qué era el producto y cómo los usuarios podían navegar por él.",
    s7Placeholder1Hint: "Showcase del sitio web — página completa",
    s7Placeholder2Hint: "Landing / homepage",
    s7Placeholder3Hint: "Flujo de producto / participación",
    s7Placeholder4Hint: "Confianza / resultados / confirmación",

    /* ── S8 — RETAIL ── */
    s8Kicker: "07 — Retail y Canales",
    s8Title: "Experiencia retail y flujos asistidos",
    s8Body: "Uno de los aspectos más importantes del proyecto fue diseñar para interacciones asistidas y basadas en retail. Esto requería un tipo diferente de claridad: no solo simplicidad para el usuario, sino utilidad operativa en contextos reales de soporte, mediación y ejecución. La experiencia debía traducirse entre canales manteniendo coherencia.",
    s8SubheadTitle: "Diseñando más allá del autoservicio",
    s8SubheadBody: "Los entornos retail introdujeron necesidades, ritmos y restricciones diferentes. El trabajo aquí se enfocó en hacer los flujos comprensibles, estructurados y viables en contextos asistidos.",
    s8Placeholder1Hint: "Interfaz retail / vista POS",
    s8Placeholder2Hint: "Flujo — paso 01",
    s8Placeholder3Hint: "Flujo — paso 02",
    s8Placeholder4Hint: "Flujo — paso 03",
    s8Placeholder5Hint: "Flujo — paso 04",
    s8Caption1: "Entrada y selección de producto",
    s8Caption2: "Confirmación y validación asistida",
    s8Caption3: "Transacción y recibo",
    s8Caption4: "Manejo de errores y soporte al operador",

    /* ── S9 — ADMIN ── */
    s9Kicker: "08 — Operaciones",
    s9Title: "Admin y pensamiento operativo",
    s9Body: "El proyecto también implicó pensar la visibilidad interna, el control y la usabilidad operativa. Incluso en una etapa temprana, la capa administrativa importaba porque el ecosistema no podía depender solo del diseño orientado al cliente. Los flujos internos, la lógica de gestión y la claridad operativa eran parte de la experiencia global.",
    s9SubheadTitle: "Diseñando para la operación diaria",
    s9SubheadBody: "Esta capa fue importante no porque fuera visualmente dominante, sino porque soportaba el sistema detrás de la experiencia visible.",
    s9Placeholder1Hint: "Dashboard admin / panel de control",
    s9Placeholder2Hint: "Admin — vista de lista / reportes",
    s9Placeholder3Hint: "Flujo operativo / gestión",

    /* ── S10 — COMMS ── */
    s10Kicker: "09 — Comunicación",
    s10Title: "Sistema de comunicación",
    s10Body: "El ecosistema también necesitaba consistencia en cómo comunicaba más allá de las interfaces centrales. Plantillas de email, estructuras de blog y módulos de contenido extendieron el lenguaje del producto y soportaron confianza, continuidad y coherencia de marca a través de los touchpoints.",
    s10MailingsTitle: "Mailings",
    s10MailingsBody: "Las plantillas estructuradas ayudaron a soportar consistencia y repetibilidad en la comunicación a lo largo de todo el ciclo de vida de interacciones con el usuario.",
    s10BlogTitle: "Blog y contenido",
    s10BlogBody: "Las superficies de contenido cumplieron un rol en la explicación, el engagement y la coherencia del ecosistema — extendiendo el producto hacia lo narrativo.",
    s10Placeholder1Hint: "Plantilla de email — mailing",
    s10Placeholder2Hint: "Blog / superficie de contenido",
    s10Placeholder3Hint: "Sistema de comunicación — vista completa",

    /* ── S11 — DESIGN SYSTEM ── */
    s11Kicker: "10 — Design System",
    s11Title: "Construyendo los fundamentos del design system",
    s11Body: "Dado que el proyecto se extendía a través de múltiples superficies, la consistencia no podía depender de decisiones de diseño repetidas manualmente. Una base sistémica era necesaria para alinear patrones, lenguaje visual, módulos reutilizables y comportamiento de interfaz a través del ecosistema.",
    s11SubheadTitle: "Diseñando para coherencia a escala",
    s11SubheadBody: "El trabajo de design system ayudó a conectar productos, superficies de comunicación y expansión futura bajo una lógica compartida.",
    s11Placeholder1Hint: "Design system — librería de componentes",
    s11Placeholder2Hint: "Tipografía y tokens de color",
    s11Placeholder3Hint: "Patrones de componentes",
    s11Placeholder4Hint: "Espaciado y grilla de layout",

    /* ── S12 — ITERATION ── */
    s12Kicker: "11 — Proceso",
    s12Title: "Iteración y evolución",
    s12Body: "El trabajo evolucionó a través de múltiples fases, referencias, exploraciones y direcciones de diseño. Mostrar esa evolución importa porque revela cómo el proyecto fue moldeado, desafiado y refinado a lo largo del tiempo en lugar de aparecer como un único resultado pulido.",
    s12SubheadTitle: "De la exploración temprana al ecosistema estructurado",
    s12Iter1Hint: "Dirección temprana",
    s12Iter1Label: "Dirección temprana",
    s12Iter2Hint: "Estructura intermedia",
    s12Iter2Label: "Estructura intermedia",
    s12Iter3Hint: "Flujo refinado",
    s12Iter3Label: "Flujo refinado",
    s12Iter4Hint: "Consistencia sistémica",
    s12Iter4Label: "Consistencia sistémica",

    /* ── S13 — IMPACT ── */
    s13Kicker: "12 — Resultados",
    s13Title: "Impacto, valor y lo que el trabajo habilitó",
    s13Body: "Incluso cuando no todas las capas se miden de la misma manera, el trabajo creó valor al alinear el ecosistema, clarificar la lógica de producto, apoyar las operaciones y crear una base más sólida para la implementación futura y la escala. La relevancia del proyecto no está solo en las pantallas finales, sino en la estructura que le dio al producto y al servicio.",
    s13Value1Title: "Coherencia del ecosistema",
    s13Value1Body: "Diferentes touchpoints fueron integrados en una lógica de experiencia más clara, reduciendo la fragmentación entre canales y equipos.",
    s13Value2Title: "Soporte operativo",
    s13Value2Body: "El trabajo ayudó a hacer las interacciones asistidas, internas y públicas más comprensibles y viables en contextos operativos reales.",
    s13Value3Title: "Fundamento escalable",
    s13Value3Body: "El sistema fue diseñado con consistencia futura y crecimiento en mente, reduciendo el costo de futuras decisiones de diseño y desarrollo.",
    s13Placeholder1Hint: "Métricas / datos de resultados",
    s13Placeholder2Hint: "Evidencia de soporte",
    s13Placeholder3Hint: "Antes / después o validación",

    /* ── S14 — REFLECTION ── */
    s14Kicker: "13 — Reflexión",
    s14Title: "Qué representa este proyecto en mi práctica",
    s14Body: "LotoBola marcó un quiebre en mi trabajo. Empujó mi práctica más allá del diseño de interfaces hacia la orquestación de servicios, el encuadre de producto, el diseño operativo y el pensamiento sistémico. Más que cualquier otro proyecto, refleja cómo abordo problemas complejos de diseño hoy: a través de capas, equipos y touchpoints.",
    s14ClosingRest: "Sigue siendo la expresión más clara de mi transición hacia una práctica de diseño más senior, sistémica, ",
    s14ClosingAccent: "orientada a producto y servicio.",
    s14PlaceholderHint: "Visual de cierre — composición final",

    /* ── S15 — CREDITS ── */
    s15Kicker: "14 — Rol y Créditos",
    s15Title: "Rol y colaboración",
    s15Body: "Este caso refleja una contribución de diseño multicapa a través de estrategia, flujos, interfaces, sistemas y estructura. La implementación final, definición de negocio, dependencias técnicas y decisiones operativas involucraron colaboración entre diferentes actores y etapas.",
    s15RoleLabel: "Mi rol",
    s15RoleValue: "Product Designer — liderando UX/UI, service design y pensamiento sistémico a través de todas las superficies.",
    s15AreasLabel: "Áreas de diseño cubiertas",
    s15AreasValue: "Arquitectura de servicio · Flujos UX · Diseño visual · Herramientas admin · Plantillas de comunicación · Fundamentos de design system",
    s15CollabLabel: "Dimensiones colaborativas",
    s15CollabValue: "Estrategia de negocio, marketing, factibilidad técnica, operaciones retail y contenido fueron gestionados en coordinación con stakeholders.",
    s15NotesLabel: "Notas sobre alcance / etapa",
    s15NotesValue: "Algunas áreas eran exploratorias o conceptuales al momento de este trabajo. Los detalles finales de implementación variaron según la superficie y la fase.",

    /* ── ANNEXES ── */
    annexKicker: "Anexo — Materiales de proceso",
    annexTitle: "Investigación de soporte y materiales de proceso",
    annexBody: "Documentación adicional, referencias y artefactos de proceso que informaron el trabajo. Estos materiales son secundarios a la narrativa principal y están destinados a una revisión más profunda.",
    annex1: "Journey maps",
    annex2: "Documentación en Notion",
    annex3: "Referencias de benchmark",
    annex4: "Capturas de flujos adicionales",
    annex5: "Snapshots de proceso",
    annex6: "Materiales adicionales",
    annex1Hint: "Journey maps",
    annex2Hint: "Documentación en Notion",
    annex3Hint: "Referencias de benchmark",
    annex4Hint: "Capturas de flujos adicionales",
    annex5Hint: "Snapshots de proceso",
    annex6Hint: "Materiales adicionales",
  } : {
    /* ── HERO ── */
    heroKicker: "Selected Work — Case Study",
    heroBodyAccent: "Designing a lottery ecosystem",
    heroBodyRest: " across retail, operations, web, communication, and service touchpoints.",
    heroBody2: "LotoBola became the clearest expression of how I work across layers: framing services, structuring product logic, designing interfaces, and translating complex operational needs into coherent user experiences.",
    heroMetaRoleLabel: "Role",
    heroMetaRoleValue: "Product Designer / UX·UI / Service Design",
    heroMetaScopeLabel: "Scope",
    heroMetaScopeValue: "Service architecture, product flows, retail experience, website, admin tooling, communication templates, design system foundations",
    heroMetaFocusLabel: "Focus",
    heroMetaFocusValue: "Lottery ecosystem design across digital and assisted channels",
    heroMetaOutputLabel: "Output",
    heroMetaOutputValue: "Website, retail app flows, admin concepts, mailings, blog/content structure, system foundations",
    heroPlaceholderHint: "System overview — composed mosaic",

    /* ── S2 — OVERVIEW ── */
    s2Kicker: "01 — Overview",
    s2Title: "The case in one minute",
    s2Body: "LotoBola was conceived as more than a digital product. It was an ecosystem with public-facing, assisted, operational, and administrative dimensions. The challenge was not only to make interfaces usable, but to build coherence across touchpoints, clarify the experience, support retail interactions, and create foundations for scale.",
    s2Block1Title: "What it was",
    s2Block1Body: "A lottery ecosystem combining public entry points, service flows, retail support, operational logic, and communication surfaces.",
    s2Block2Title: "What I was solving",
    s2Block2Body: "A fragmented, multi-layered experience that needed to work across users, internal teams, and assisted environments.",
    s2Block3Title: "Why it mattered",
    s2Block3Body: "Because trust, clarity, operational viability, and scalability all depended on the system working as one connected experience.",
    s2PlaceholderHint: "Ecosystem diagram",

    /* ── S3 — CHALLENGE ── */
    s3Kicker: "02 — Challenge",
    s3Title: "The real challenge",
    s3Body: "This was never just a UI exercise. Designing for a lottery ecosystem meant dealing with trust, comprehension, participation flows, operational constraints, retail realities, communication consistency, and long-term scalability. The problem was systemic: different surfaces, different actors, different levels of assistance, and different business needs had to align into one experience logic.",
    s3CalloutAccent: "A lottery product is not just a screen problem.",
    s3CalloutRest: " It is a service problem, an operations problem, a communication problem, and a systems problem.",
    s3Placeholder1Hint: "Challenge framing",
    s3Placeholder2Hint: "Actor / stakeholder mapping",

    /* ── S4 — SCOPE ── */
    s4Kicker: "03 — Scope",
    s4Title: "Scope and system architecture",
    s4Body: "The project expanded across multiple fronts: the public website, retail-facing flows, administrative and operational thinking, communication templates, content structures, and design system foundations. What mattered was not only designing each part, but making sure each part belonged to the same ecosystem.",
    s4Mod1Title: "Website",
    s4Mod1Body: "Public-facing entry point. Explains the product, builds trust, drives participation.",
    s4Mod1Hint: "Website",
    s4Mod2Title: "Retail experience",
    s4Mod2Body: "Assisted flows and POS interactions designed for real retail contexts.",
    s4Mod2Hint: "Retail experience",
    s4Mod3Title: "Admin / operations",
    s4Mod3Body: "Internal visibility, control, and operational tooling for daily management.",
    s4Mod3Hint: "Admin / operations",
    s4Mod4Title: "Mailings",
    s4Mod4Body: "Structured email templates supporting communication consistency and repeatability.",
    s4Mod4Hint: "Mailings",
    s4Mod5Title: "Blog / content",
    s4Mod5Body: "Content surfaces for explanation, engagement, and ecosystem coherence.",
    s4Mod5Hint: "Blog / content",
    s4Mod6Title: "Design system",
    s4Mod6Body: "Shared foundations aligning patterns, components, and visual language across all surfaces.",
    s4Mod6Hint: "Design system",

    /* ── S5 — FOUNDATIONS ── */
    s5Kicker: "04 — Foundations",
    s5Title: "Inputs, research, and early foundations",
    s5Body: "The project was shaped by a mix of business ambition, marketing inputs, operational realities, early technical considerations, benchmark references, and exploratory design work. Rather than starting from isolated screens, the work began with context: what needed to exist, who needed it, how it would operate, and what the system had to communicate.",
    s5List1: "Initial business and marketing briefs",
    s5List2: "Competitive and visual references",
    s5List3: "Early exploration materials",
    s5List4: "Integration and flow documentation",
    s5List5: "Strategic expectations and commercial framing",
    s5Placeholder1Hint: "Business brief",
    s5Placeholder2Hint: "Benchmark references",
    s5Placeholder3Hint: "Early exploration",
    s5Placeholder4Hint: "Flow documentation",
    s5Footnote: "Early inputs helped frame the ecosystem before visual consistency and interaction patterns were formalized.",

    /* ── S6 — SERVICE ── */
    s6Kicker: "05 — Service Design",
    s6Title: "Service architecture",
    s6Body: "At the core of the project was the need to understand the service as a connected sequence of interactions rather than as isolated interfaces. Users, internal teams, and assisted retail dynamics all shaped the architecture of the experience. Mapping journeys and operational relationships helped surface where the experience needed clarity, support, continuity, and control.",
    s6SubheadTitle: "From touchpoints to service logic",
    s6SubheadBody: "The value of the work was not only in screen design, but in organizing how the system held together across channels and moments.",
    s6Placeholder1Hint: "Journey map / service blueprint",
    s6Placeholder2Hint: "Touchpoint map",
    s6Placeholder3Hint: "User journey detail",
    s6Placeholder4Hint: "Operational logic",
    s6Caption1: "Channel overview and touchpoint mapping",
    s6Caption2: "Customer journey — key moments",
    s6Caption3: "Backstage operations and support logic",

    /* ── S7 — CUSTOMER ── */
    s7Kicker: "06 — Customer Experience",
    s7Title: "Designing the customer-facing experience",
    s7Body: "The public experience had to balance clarity, legitimacy, simplicity, and engagement. It needed to explain the product, reduce ambiguity, and make participation feel understandable and trustworthy. The visual and structural decisions here were closely tied to comprehension and confidence.",
    s7Block1Title: "Public entry points",
    s7Block1Body: "The website and public-facing surfaces had to orient, explain, and establish trust from the first contact.",
    s7Block2Title: "Clarity and trust",
    s7Block2Body: "The interface needed to reduce friction by making the experience legible and credible at every step.",
    s7Block3Title: "Conversion through understanding",
    s7Block3Body: "The goal was not only visual polish, but better comprehension of what the product was and how users could move through it.",
    s7Placeholder1Hint: "Website showcase — full page",
    s7Placeholder2Hint: "Landing / homepage",
    s7Placeholder3Hint: "Product flow / participation",
    s7Placeholder4Hint: "Trust / results / confirmation",

    /* ── S8 — RETAIL ── */
    s8Kicker: "07 — Retail & Channels",
    s8Title: "Retail experience and assisted flows",
    s8Body: "One of the most important aspects of the project was designing for assisted and retail-based interactions. This required a different kind of clarity: not only user-facing simplicity, but operational usefulness in real contexts of support, mediation, and execution. The experience had to translate across channels while remaining coherent.",
    s8SubheadTitle: "Designing beyond self-service",
    s8SubheadBody: "Retail environments introduced different needs, different rhythms, and different constraints. The work here focused on making flows understandable, structured, and viable in assisted contexts.",
    s8Placeholder1Hint: "Retail interface / POS overview",
    s8Placeholder2Hint: "Flow — step 01",
    s8Placeholder3Hint: "Flow — step 02",
    s8Placeholder4Hint: "Flow — step 03",
    s8Placeholder5Hint: "Flow — step 04",
    s8Caption1: "Entry and product selection",
    s8Caption2: "Confirmation and assisted validation",
    s8Caption3: "Transaction and receipt",
    s8Caption4: "Error handling and operator support",

    /* ── S9 — ADMIN ── */
    s9Kicker: "08 — Operations",
    s9Title: "Admin and operational thinking",
    s9Body: "The project also involved thinking through internal visibility, control, and operational usability. Even at an early stage, the administrative layer mattered because the ecosystem could not rely only on customer-facing design. Internal flows, management logic, and operational clarity were part of the overall experience.",
    s9SubheadTitle: "Designing for daily operation",
    s9SubheadBody: "This layer was important not because it was visually dominant, but because it supported the system behind the visible experience.",
    s9Placeholder1Hint: "Admin dashboard / control panel",
    s9Placeholder2Hint: "Admin — list view / reporting",
    s9Placeholder3Hint: "Operational flow / management",

    /* ── S10 — COMMS ── */
    s10Kicker: "09 — Communication",
    s10Title: "Communication system",
    s10Body: "The ecosystem also needed consistency in how it communicated beyond core interfaces. Email templates, blog structures, and content modules extended the product language and supported trust, continuity, and brand coherence across touchpoints.",
    s10MailingsTitle: "Mailings",
    s10MailingsBody: "Structured templates helped support communication consistency and repeatability across the full lifecycle of user interactions.",
    s10BlogTitle: "Blog and content",
    s10BlogBody: "Content surfaces played a role in explanation, engagement, and ecosystem coherence — extending the product into narrative.",
    s10Placeholder1Hint: "Email template — mailing",
    s10Placeholder2Hint: "Blog / content surface",
    s10Placeholder3Hint: "Communication system — full spread",

    /* ── S11 — DESIGN SYSTEM ── */
    s11Kicker: "10 — Design System",
    s11Title: "Building the design system foundation",
    s11Body: "Because the project extended across multiple surfaces, consistency could not depend on manually repeated design decisions. A system foundation was necessary to align patterns, visual language, reusable modules, and interface behavior across the ecosystem.",
    s11SubheadTitle: "Designing for coherence at scale",
    s11SubheadBody: "The design system work helped connect products, communication surfaces, and future expansion under one shared logic.",
    s11Placeholder1Hint: "Design system — component library",
    s11Placeholder2Hint: "Typography & color tokens",
    s11Placeholder3Hint: "Component patterns",
    s11Placeholder4Hint: "Spacing & layout grid",

    /* ── S12 — ITERATION ── */
    s12Kicker: "11 — Process",
    s12Title: "Iteration and evolution",
    s12Body: "The work evolved through multiple phases, references, explorations, and design directions. Showing that evolution matters because it reveals how the project was shaped, challenged, and refined over time rather than appearing as a single polished output.",
    s12SubheadTitle: "From early exploration to structured ecosystem",
    s12Iter1Hint: "Early direction",
    s12Iter1Label: "Early direction",
    s12Iter2Hint: "Intermediate structure",
    s12Iter2Label: "Intermediate structure",
    s12Iter3Hint: "Refined flow",
    s12Iter3Label: "Refined flow",
    s12Iter4Hint: "System-level consistency",
    s12Iter4Label: "System-level consistency",

    /* ── S13 — IMPACT ── */
    s13Kicker: "12 — Outcomes",
    s13Title: "Impact, value, and what the work enabled",
    s13Body: "Even when not every layer is measured in the same way, the work created value by aligning the ecosystem, clarifying product logic, supporting operations, and creating a stronger base for future implementation and scale. The significance of the project lies not only in final screens, but in the structure it gave to the product and service.",
    s13Value1Title: "Ecosystem coherence",
    s13Value1Body: "Different touchpoints were brought into one clearer experience logic, reducing fragmentation across channels and teams.",
    s13Value2Title: "Operational support",
    s13Value2Body: "The work helped make assisted, internal, and public-facing interactions more understandable and viable in real operational contexts.",
    s13Value3Title: "Scalable foundation",
    s13Value3Body: "The system was designed with future consistency and growth in mind, reducing the cost of future design and development decisions.",
    s13Placeholder1Hint: "Metrics / outcome data",
    s13Placeholder2Hint: "Supporting evidence",
    s13Placeholder3Hint: "Before / after or validation",

    /* ── S14 — REFLECTION ── */
    s14Kicker: "13 — Reflection",
    s14Title: "What this project represents in my practice",
    s14Body: "LotoBola marked a shift in my work. It pushed my practice beyond interface-making into service orchestration, product framing, operational design, and systems thinking. More than any other project, it reflects how I approach complex design problems today: across layers, across teams, and across touchpoints.",
    s14ClosingRest: "It remains the clearest expression of my transition into a more senior, systemic, ",
    s14ClosingAccent: "product-and-service-oriented design practice.",
    s14PlaceholderHint: "Closing visual — composed final",

    /* ── S15 — CREDITS ── */
    s15Kicker: "14 — Role & Credits",
    s15Title: "Role and collaboration",
    s15Body: "This case reflects a multi-layered design contribution across strategy, flows, interfaces, systems, and structure. Final implementation, business definition, technical dependencies, and operational decisions involved collaboration across different actors and stages.",
    s15RoleLabel: "My role",
    s15RoleValue: "Product Designer — leading UX/UI, service design, and systems thinking across all surfaces.",
    s15AreasLabel: "Design areas covered",
    s15AreasValue: "Service architecture · UX flows · Visual design · Admin tooling · Communication templates · Design system foundations",
    s15CollabLabel: "Collaborative dimensions",
    s15CollabValue: "Business strategy, marketing, technical feasibility, retail operations, and content were handled in coordination with stakeholders.",
    s15NotesLabel: "Notes on scope / stage",
    s15NotesValue: "Some areas were exploratory or conceptual at the time of this work. Final implementation details varied by surface and phase.",

    /* ── ANNEXES ── */
    annexKicker: "Annex — Process materials",
    annexTitle: "Supporting research and process materials",
    annexBody: "Additional documentation, references, and process artifacts that informed the work. These materials are secondary to the main narrative and intended for deeper review.",
    annex1: "Journey maps",
    annex2: "Notion documentation",
    annex3: "Benchmark references",
    annex4: "Additional flow captures",
    annex5: "Process snapshots",
    annex6: "Additional materials",
    annex1Hint: "Journey maps",
    annex2Hint: "Notion documentation",
    annex3Hint: "Benchmark references",
    annex4Hint: "Additional flow captures",
    annex5Hint: "Process snapshots",
    annex6Hint: "Additional materials",
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

        {/* asset-slot: LB-HERO-01 — Replace with system overview mosaic / composed hero image */}
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
          S3 — THE REAL CHALLENGE
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
          <div className="cs-split">
            {/* asset-slot: LB-CHALLENGE-01 — Replace with challenge framing / complexity map */}
            <CasePlaceholder id="LB-CHALLENGE-01" ratio="landscape" hint={c.s3Placeholder1Hint} />
            {/* asset-slot: LB-CHALLENGE-02 — Replace with stakeholder or actor mapping */}
            <CasePlaceholder id="LB-CHALLENGE-02" ratio="landscape" hint={c.s3Placeholder2Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S4 — SCOPE AND SYSTEM ARCHITECTURE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="scope">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s4Kicker}</Typography>
          <Typography variant="h2">{c.s4Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s4Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-module-grid">
            <div className="cs-module-item">
              <span className="cs-module-item__index">01</span>
              {/* asset-slot: LB-MODULE-01 — Replace with website surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-01" ratio="landscape" hint={c.s4Mod1Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s4Mod1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s4Mod1Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">02</span>
              {/* asset-slot: LB-MODULE-02 — Replace with retail/POS surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-02" ratio="landscape" hint={c.s4Mod2Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s4Mod2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s4Mod2Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">03</span>
              {/* asset-slot: LB-MODULE-03 — Replace with admin/operations surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-03" ratio="landscape" hint={c.s4Mod3Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s4Mod3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s4Mod3Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">04</span>
              {/* asset-slot: LB-MODULE-04 — Replace with email/mailing template thumbnail */}
              <CasePlaceholder id="LB-MODULE-04" ratio="landscape" hint={c.s4Mod4Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s4Mod4Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s4Mod4Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">05</span>
              {/* asset-slot: LB-MODULE-05 — Replace with blog/content surface thumbnail */}
              <CasePlaceholder id="LB-MODULE-05" ratio="landscape" hint={c.s4Mod5Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s4Mod5Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s4Mod5Body}
              </Typography>
            </div>
            <div className="cs-module-item">
              <span className="cs-module-item__index">06</span>
              {/* asset-slot: LB-MODULE-06 — Replace with design system documentation thumbnail */}
              <CasePlaceholder id="LB-MODULE-06" ratio="landscape" hint={c.s4Mod6Hint} className="cs-module-item__placeholder" />
              <Typography variant="h3">{c.s4Mod6Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s4Mod6Body}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S5 — INPUTS, RESEARCH, AND EARLY FOUNDATIONS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="foundations">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s5Kicker}</Typography>
          <Typography variant="h2">{c.s5Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s5Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <ul className="cs-list">
            <li className="cs-list__item">{c.s5List1}</li>
            <li className="cs-list__item">{c.s5List2}</li>
            <li className="cs-list__item">{c.s5List3}</li>
            <li className="cs-list__item">{c.s5List4}</li>
            <li className="cs-list__item">{c.s5List5}</li>
          </ul>
          <div className="cs-stagger">
            {/* asset-slot: LB-FOUNDATION-01 — Replace with brief / business input documentation */}
            <CasePlaceholder id="LB-FOUNDATION-01" ratio="landscape" hint={c.s5Placeholder1Hint} />
            {/* asset-slot: LB-FOUNDATION-02 — Replace with benchmark / reference board */}
            <CasePlaceholder id="LB-FOUNDATION-02" ratio="portrait" hint={c.s5Placeholder2Hint} />
            {/* asset-slot: LB-FOUNDATION-03 — Replace with early exploration / sketches */}
            <CasePlaceholder id="LB-FOUNDATION-03" ratio="portrait" hint={c.s5Placeholder3Hint} />
            {/* asset-slot: LB-FOUNDATION-04 — Replace with flow / integration documentation */}
            <CasePlaceholder id="LB-FOUNDATION-04" ratio="landscape" hint={c.s5Placeholder4Hint} />
          </div>
          <Typography variant="micro" tone="muted">
            {c.s5Footnote}
          </Typography>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S6 — SERVICE ARCHITECTURE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="service">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s6Kicker}</Typography>
          <Typography variant="h2">{c.s6Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s6Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          {/* asset-slot: LB-SERVICE-01 — Replace with full journey map / service blueprint (wide format) */}
          <CasePlaceholder id="LB-SERVICE-01" ratio="wide" hint={c.s6Placeholder1Hint} />
          <div className="cs-subhead">
            <Typography variant="h3">{c.s6SubheadTitle}</Typography>
            <Typography variant="bodyLg" tone="secondary">
              {c.s6SubheadBody}
            </Typography>
          </div>
          <div className="cs-supporting">
            <div className="cs-supporting-item">
              {/* asset-slot: LB-SERVICE-02 — Replace with touchpoint map or channel overview */}
              <CasePlaceholder id="LB-SERVICE-02" ratio="card" hint={c.s6Placeholder2Hint} />
              <p className="cs-caption">{c.s6Caption1}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-SERVICE-03 — Replace with user flow or journey detail */}
              <CasePlaceholder id="LB-SERVICE-03" ratio="card" hint={c.s6Placeholder3Hint} />
              <p className="cs-caption">{c.s6Caption2}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-SERVICE-04 — Replace with operational logic or backstage diagram */}
              <CasePlaceholder id="LB-SERVICE-04" ratio="card" hint={c.s6Placeholder4Hint} />
              <p className="cs-caption">{c.s6Caption3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S7 — DESIGNING THE CUSTOMER-FACING EXPERIENCE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="customer">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s7Kicker}</Typography>
          <Typography variant="h2">{c.s7Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s7Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-blocks">
            <div className="cs-block">
              <Typography variant="h3">{c.s7Block1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Block1Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s7Block2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Block2Body}
              </Typography>
            </div>
            <div className="cs-block">
              <Typography variant="h3">{c.s7Block3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s7Block3Body}
              </Typography>
            </div>
          </div>
          {/* asset-slot: LB-WEB-01 — Replace with full website showcase / hero screen */}
          <CasePlaceholder id="LB-WEB-01" ratio="landscape" hint={c.s7Placeholder1Hint} />
          <div className="cs-three-up">
            {/* asset-slot: LB-WEB-02 — Replace with homepage or landing section detail */}
            <CasePlaceholder id="LB-WEB-02" ratio="portrait" hint={c.s7Placeholder2Hint} />
            {/* asset-slot: LB-WEB-03 — Replace with product explanation or participation flow */}
            <CasePlaceholder id="LB-WEB-03" ratio="portrait" hint={c.s7Placeholder3Hint} />
            {/* asset-slot: LB-WEB-04 — Replace with trust element, results, or confirmation UI */}
            <CasePlaceholder id="LB-WEB-04" ratio="portrait" hint={c.s7Placeholder4Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S8 — RETAIL EXPERIENCE AND ASSISTED FLOWS
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="retail">
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
            <Typography variant="bodyLg" tone="secondary">
              {c.s8SubheadBody}
            </Typography>
          </div>
          {/* asset-slot: LB-RETAIL-01 — Replace with wide retail interface or POS overview */}
          <CasePlaceholder id="LB-RETAIL-01" ratio="wide" hint={c.s8Placeholder1Hint} />
          <div className="cs-four-up">
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-02 — Replace with retail flow step 1 */}
              <CasePlaceholder id="LB-RETAIL-02" ratio="portrait" hint={c.s8Placeholder2Hint} />
              <p className="cs-caption">{c.s8Caption1}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-03 — Replace with retail flow step 2 */}
              <CasePlaceholder id="LB-RETAIL-03" ratio="portrait" hint={c.s8Placeholder3Hint} />
              <p className="cs-caption">{c.s8Caption2}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-04 — Replace with retail flow step 3 */}
              <CasePlaceholder id="LB-RETAIL-04" ratio="portrait" hint={c.s8Placeholder4Hint} />
              <p className="cs-caption">{c.s8Caption3}</p>
            </div>
            <div className="cs-supporting-item">
              {/* asset-slot: LB-RETAIL-05 — Replace with retail flow step 4 / edge cases */}
              <CasePlaceholder id="LB-RETAIL-05" ratio="portrait" hint={c.s8Placeholder5Hint} />
              <p className="cs-caption">{c.s8Caption4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S9 — ADMIN AND OPERATIONAL THINKING
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="admin">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s9Kicker}</Typography>
          <Typography variant="h2">{c.s9Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s9Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s9SubheadTitle}</Typography>
            <Typography variant="bodyLg" tone="secondary">
              {c.s9SubheadBody}
            </Typography>
          </div>
          {/* asset-slot: LB-ADMIN-01 — Replace with featured admin dashboard or control panel */}
          <CasePlaceholder id="LB-ADMIN-01" ratio="landscape" hint={c.s9Placeholder1Hint} />
          <div className="cs-split">
            {/* asset-slot: LB-ADMIN-02 — Replace with admin list view, reporting, or data table */}
            <CasePlaceholder id="LB-ADMIN-02" ratio="landscape" hint={c.s9Placeholder2Hint} />
            {/* asset-slot: LB-ADMIN-03 — Replace with operational flow or management UI */}
            <CasePlaceholder id="LB-ADMIN-03" ratio="landscape" hint={c.s9Placeholder3Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S10 — COMMUNICATION SYSTEM
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="communications">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s10Kicker}</Typography>
          <Typography variant="h2">{c.s10Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s10Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-split">
            <div>
              <Typography variant="h3">{c.s10MailingsTitle}</Typography>
              <Typography variant="bodyLg" tone="secondary" as="p">
                {c.s10MailingsBody}
              </Typography>
            </div>
            <div>
              <Typography variant="h3">{c.s10BlogTitle}</Typography>
              <Typography variant="bodyLg" tone="secondary" as="p">
                {c.s10BlogBody}
              </Typography>
            </div>
          </div>
          <div className="cs-split">
            {/* asset-slot: LB-COMMS-01 — Replace with email template design */}
            <CasePlaceholder id="LB-COMMS-01" ratio="portrait" hint={c.s10Placeholder1Hint} />
            {/* asset-slot: LB-COMMS-02 — Replace with blog / content surface design */}
            <CasePlaceholder id="LB-COMMS-02" ratio="portrait" hint={c.s10Placeholder2Hint} />
          </div>
          {/* asset-slot: LB-COMMS-03 — Replace with full-width communication overview or brand consistency spread */}
          <CasePlaceholder id="LB-COMMS-03" ratio="wide" hint={c.s10Placeholder3Hint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S11 — BUILDING THE DESIGN SYSTEM FOUNDATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="design-system">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s11Kicker}</Typography>
          <Typography variant="h2">{c.s11Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s11Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s11SubheadTitle}</Typography>
            <Typography variant="bodyLg" tone="secondary">
              {c.s11SubheadBody}
            </Typography>
          </div>
          {/* asset-slot: LB-DS-01 — Replace with design system overview / component library spread */}
          <CasePlaceholder id="LB-DS-01" ratio="landscape" hint={c.s11Placeholder1Hint} />
          <div className="cs-three-up">
            {/* asset-slot: LB-DS-02 — Replace with typography / color tokens documentation */}
            <CasePlaceholder id="LB-DS-02" ratio="card" hint={c.s11Placeholder2Hint} />
            {/* asset-slot: LB-DS-03 — Replace with component documentation / pattern library */}
            <CasePlaceholder id="LB-DS-03" ratio="card" hint={c.s11Placeholder3Hint} />
            {/* asset-slot: LB-DS-04 — Replace with spacing / layout / grid documentation */}
            <CasePlaceholder id="LB-DS-04" ratio="card" hint={c.s11Placeholder4Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S12 — ITERATION AND EVOLUTION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="iteration">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s12Kicker}</Typography>
          <Typography variant="h2">{c.s12Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s12Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-subhead">
            <Typography variant="h3">{c.s12SubheadTitle}</Typography>
          </div>
          <div className="cs-iter-grid">
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-01 — Replace with early direction / first explorations */}
              <CasePlaceholder id="LB-ITER-01" ratio="landscape" hint={c.s12Iter1Hint} />
              <p className="cs-iter-label">{c.s12Iter1Label}</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-02 — Replace with intermediate structure / refined concepts */}
              <CasePlaceholder id="LB-ITER-02" ratio="landscape" hint={c.s12Iter2Hint} />
              <p className="cs-iter-label">{c.s12Iter2Label}</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-03 — Replace with refined flow / late-stage direction */}
              <CasePlaceholder id="LB-ITER-03" ratio="landscape" hint={c.s12Iter3Hint} />
              <p className="cs-iter-label">{c.s12Iter3Label}</p>
            </div>
            <div className="cs-iter-item">
              {/* asset-slot: LB-ITER-04 — Replace with system-level consistency / final direction */}
              <CasePlaceholder id="LB-ITER-04" ratio="landscape" hint={c.s12Iter4Hint} />
              <p className="cs-iter-label">{c.s12Iter4Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S13 — IMPACT, VALUE, AND WHAT THE WORK ENABLED
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="impact">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s13Kicker}</Typography>
          <Typography variant="h2">{c.s13Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s13Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-value-grid">
            <div className="cs-value-block">
              <Typography variant="h3">{c.s13Value1Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s13Value1Body}
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">{c.s13Value2Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s13Value2Body}
              </Typography>
            </div>
            <div className="cs-value-block">
              <Typography variant="h3">{c.s13Value3Title}</Typography>
              <Typography variant="bodyMd" tone="secondary">
                {c.s13Value3Body}
              </Typography>
            </div>
          </div>
          <div className="cs-evidence">
            {/* asset-slot: LB-IMPACT-01 — Replace with metrics, KPIs, or outcome summary */}
            <CasePlaceholder id="LB-IMPACT-01" ratio="landscape" hint={c.s13Placeholder1Hint} />
            {/* asset-slot: LB-IMPACT-02 — Replace with supporting evidence / comparative view */}
            <CasePlaceholder id="LB-IMPACT-02" ratio="square" hint={c.s13Placeholder2Hint} />
            {/* asset-slot: LB-IMPACT-03 — Replace with before/after, adoption, or validation data */}
            <CasePlaceholder id="LB-IMPACT-03" ratio="square" hint={c.s13Placeholder3Hint} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S14 — WHAT THIS PROJECT REPRESENTS IN MY PRACTICE
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="reflection">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s14Kicker}</Typography>
          <Typography variant="h2">{c.s14Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s14Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <Typography variant="bodyLg" tone="secondary" as="p">
            {c.s14ClosingRest}
            <Accent>{c.s14ClosingAccent}</Accent>
          </Typography>
          {/* asset-slot: LB-CLOSING-01 — Replace with strong closing visual / composed final image */}
          <CasePlaceholder id="LB-CLOSING-01" ratio="landscape" hint={c.s14PlaceholderHint} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          S15 — ROLE AND COLLABORATION
          ════════════════════════════════════════════ */}
      <section className="cs-section" id="credits">
        <div className="cs-section-head">
          <Typography variant="micro" tone="muted">{c.s15Kicker}</Typography>
          <Typography variant="h2">{c.s15Title}</Typography>
          <Typography variant="bodyLg" tone="secondary">
            {c.s15Body}
          </Typography>
        </div>
        <div className="cs-section-content">
          <div className="cs-role-grid">
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s15RoleLabel}</p>
              <p className="cs-role-item__value">
                {c.s15RoleValue}
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s15AreasLabel}</p>
              <p className="cs-role-item__value">
                {c.s15AreasValue}
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s15CollabLabel}</p>
              <p className="cs-role-item__value">
                {c.s15CollabValue}
              </p>
            </div>
            <div className="cs-role-item">
              <p className="cs-role-item__label">{c.s15NotesLabel}</p>
              <p className="cs-role-item__value">
                {c.s15NotesValue}
              </p>
            </div>
          </div>
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
            {/* asset-slot: LB-ANNEX-01 — Replace with journey map documentation */}
            <CasePlaceholder id="LB-ANNEX-01" ratio="card" hint={c.annex1Hint} />
            <Typography variant="micro" tone="muted">{c.annex1}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-02 — Replace with Notion documentation screenshots */}
            <CasePlaceholder id="LB-ANNEX-02" ratio="card" hint={c.annex2Hint} />
            <Typography variant="micro" tone="muted">{c.annex2}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-03 — Replace with benchmark reference board */}
            <CasePlaceholder id="LB-ANNEX-03" ratio="card" hint={c.annex3Hint} />
            <Typography variant="micro" tone="muted">{c.annex3}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-04 — Replace with additional flow captures */}
            <CasePlaceholder id="LB-ANNEX-04" ratio="card" hint={c.annex4Hint} />
            <Typography variant="micro" tone="muted">{c.annex4}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-05 — Replace with process snapshots / working files */}
            <CasePlaceholder id="LB-ANNEX-05" ratio="card" hint={c.annex5Hint} />
            <Typography variant="micro" tone="muted">{c.annex5}</Typography>
          </div>
          <div className="cs-annex-card">
            {/* asset-slot: LB-ANNEX-06 — Replace with additional materials / extras */}
            <CasePlaceholder id="LB-ANNEX-06" ratio="card" hint={c.annex6Hint} />
            <Typography variant="micro" tone="muted">{c.annex6}</Typography>
          </div>
        </div>
      </div>

    </div>
  );
}
