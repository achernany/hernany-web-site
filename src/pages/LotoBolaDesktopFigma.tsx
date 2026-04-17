import "./LotoBolaDesktopFigma.css";

type Lang = "es" | "en";

interface MetricItem {
  label: string;
  value: string;
}

interface InfoCard {
  title: string;
  body: string;
}

interface SummaryCell {
  label: string;
  value: string;
}

interface InsightCell {
  label: string;
  value: string;
}

interface ArchitectureStage {
  phase: string;
  user: string;
  interface: string;
  system: string;
}

interface ArchitectureColumn {
  phase: string;
  screens: string[];
}

interface FrictionItem {
  pain: string;
  solution: string;
}

interface DesktopCopy {
  hero: {
    kicker: string;
    title: string;
    subtitleAccent: string;
    subtitleRest: string;
    summary: string;
    metrics: MetricItem[];
  };
  overview: {
    kicker: string;
    title: string;
    body: string;
    summaryRow: SummaryCell[];
    cards: InfoCard[];
  };
  challenge: {
    kicker: string;
    title: string;
    body: string;
    challengeRow: InsightCell[];
    quote: string;
  };
  architecture: {
    kicker: string;
    title: string;
    body: string;
    serviceTitle: string;
    serviceBody: string;
    serviceNote: string;
    navigationTitle: string;
    navigationBody: string;
    frictionsTitle: string;
    frictionsBody: string;
    stages: ArchitectureStage[];
    navigation: ArchitectureColumn[];
    frictions: FrictionItem[];
  };
  publicExperience: {
    kicker: string;
    title: string;
    body: string;
    indicator: string;
    insightRow: InsightCell[];
  };
  retail: {
    kicker: string;
    title: string;
    tag: string;
    subtitle: string;
    body: string;
    indicator: string;
    insightRow: InsightCell[];
  };
  operations: {
    kicker: string;
    title: string;
    tag: string;
    subtitle: string;
    body: string;
    indicator: string;
    insightRow: InsightCell[];
  };
  system: {
    kicker: string;
    title: string;
    tag: string;
    subtitle: string;
    body: string;
    communicationTitle: string;
    communicationBody: string;
    indicator: string;
    insightRow: InsightCell[];
  };
  process: {
    kicker: string;
    title: string;
    subtitle: string;
    body: string;
    indicator: string;
    insightRow: InsightCell[];
  };
  reflection: {
    kicker: string;
    title: string;
    body: string;
    quoteLead: string;
    quoteAccent: string;
    quoteEnd: string;
    quoteBlock: string;
  };
  architectureLabels: {
    user: string;
    interface: string;
    system: string;
    friction: string;
    designDecision: string;
  };
}

function Placeholder({ fullBleed = false }: { fullBleed?: boolean }) {
  return (
    <div
      className={`lotobola-desktop__placeholder${fullBleed ? " lotobola-desktop__placeholder--fullbleed" : ""}`}
      aria-hidden="true"
    />
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="lotobola-desktop__eyebrow">{children}</p>;
}

function SectionIntro({
  kicker,
  title,
  body,
  tag,
  subtitle,
}: {
  kicker: string;
  title: string;
  body: string;
  tag?: string;
  subtitle?: string;
}) {
  return (
    <div className="lotobola-desktop__section-intro">
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="lotobola-desktop__section-title">{title}</h2>
      {tag ? <span className="lotobola-desktop__tag">{tag}</span> : null}
      {subtitle ? <h3 className="lotobola-desktop__section-subtitle">{subtitle}</h3> : null}
      <p className="lotobola-desktop__body">{body}</p>
    </div>
  );
}

function InsightRow({ items, compact = false }: { items: InsightCell[]; compact?: boolean }) {
  return (
    <div className={`lotobola-desktop__insight-row${compact ? " lotobola-desktop__insight-row--compact" : ""}`}>
      {items.map((item) => (
        <article key={item.label} className="lotobola-desktop__insight-cell">
          <p className="lotobola-desktop__insight-label">{item.label}</p>
          <p className="lotobola-desktop__insight-value">{item.value}</p>
        </article>
      ))}
    </div>
  );
}

const desktopCopy: Record<Lang, DesktopCopy> = {
  es: {
    hero: {
      kicker: "Trabajo Seleccionado — Caso de Estudio",
      title: "Lotobola",
      subtitleAccent: "Diseñando un ecosistema de lotería",
      subtitleRest:
        " a través de experiencia pública, canales retail asistidos, operaciones y sistema en entorno regulado",
      summary:
        "Lotobola es un ecosistema de producto que conecta experiencia digital, operación comercial y lógica transaccional en un contexto de alta sensibilidad operativa. Mi trabajo consistió en estructurar flujos críticos, dar claridad a reglas complejas y construir una base escalable para la evolución del producto.",
      metrics: [
        { label: "ROL", value: "Service Design / Product Designer / UX UI /  System Thinking." },
        {
          label: "alcance",
          value: "Experiencia pública, flujos retail, capa operativa / admin, design system, comunicación.",
        },
        { label: "Foco", value: "Diseño de ecosistema multi-superficie — digital, asistido y operativo." },
        {
          label: "Entregables",
          value: "Sitio web, flujos retail, herramientas admin, fundamentos de design system.",
        },
      ],
    },
    overview: {
      kicker: "01 — Panorama",
      title: "El caso en un minuto",
      body:
        "Lotobola operaba dentro de un contexto donde la claridad de producto, la confianza del usuario y la lógica operativa debían convivir en la misma experiencia. El trabajo no se limitó a la interfaz final: implicó ordenar reglas, estados y flujos sensibles para construir una base de producto más clara y sostenible.\n\nTrabajé sobre momentos críticos como compra, validación, resultados y consistencia entre distintas superficies, buscando reducir ambigüedad y reforzar una experiencia confiable tanto para el usuario como para la operación del sistema.",
      summaryRow: [
        { label: "Tipo de proyecto", value: "Plataforma de lotería digital" },
        { label: "Contexto", value: "Entorno regulado, operación física y digital" },
        { label: "Enfoque", value: "Claridad transaccional, consistencia y escalabilidad" },
        { label: "Rol", value: "Product Design, UX/UI y pensamiento de sistema" },
      ],
      cards: [
        {
          title: "Qué era",
          body: "Un ecosistema de lotería que combinaba puntos de entrada públicos, flujos de servicio asistido, soporte retail y lógica operativa.",
        },
        {
          title: "Qué estaba resolviendo",
          body: "Una experiencia fragmentada y multicapa que necesitaba funcionar a través de usuarios, equipos internos y entornos asistidos.",
        },
        {
          title: "Por qué importaba",
          body: "Porque la confianza, la claridad, la viabilidad operativa y la escalabilidad dependían de que el sistema funcionara como una experiencia conectada.",
        },
      ],
    },
    challenge: {
      kicker: "02 — Desafío",
      title: "El desafío real",
      body:
        "El desafío no era únicamente construir una interfaz atractiva, sino estructurar una experiencia capaz de soportar reglas de juego, promociones, estados de pago, consulta de resultados y expectativas de confianza dentro de un producto con múltiples capas de complejidad. La experiencia debía responder con claridad en momentos sensibles, reducir ambigüedad y sostener coherencia entre diferentes superficies del producto, sin perder capacidad de crecimiento.",
      challengeRow: [
        {
          label: "Reglas complejas",
          value: "Cada juego, promoción o resultado implicaba condiciones que debían mostrarse con claridad y sin fricción innecesaria.",
        },
        {
          label: "Estados sensibles",
          value: "La compra y confirmación requerían manejar distintos escenarios como aprobación, error, expiración o espera.",
        },
        {
          label: "Múltiples puntos de contacto",
          value: "La plataforma debía convivir con lógica comercial, canales digitales, operación y control interno.",
        },
        {
          label: "Escalabilidad",
          value: "El sistema necesitaba una base reusable y consistente para sostener nuevas funcionalidades y campañas.",
        },
      ],
      quote:
        "Un producto de lotería no es solo un problema de pantallas. Es un problema de servicio, de operaciones, de comunicación y de sistemas.",
    },
    architecture: {
      kicker: "03 — arquitectura",
      title: "Arquitectura de la experiencia",
      body:
        "La experiencia pública concentraba los momentos más visibles y sensibles del producto: descubrimiento, registro, compra, validación y resultados. Pero detrás de esa capa convivían reglas de negocio, estados transaccionales y decisiones de claridad que debían resolverse con precisión. Mi trabajo aquí consistió en estructurar una experiencia comprensible y consistente, capaz de comunicar reglas, acompañar momentos críticos y sostener confianza sin sobrecargar la interfaz.",
      serviceTitle: "Lógica del servicio",
      serviceBody:
        "El servicio se organizó en siete fases principales. Mapearlas permitió entender cómo se conectaban expectativas del usuario, puntos de contacto visibles y procesos internos del sistema, y usar esa relación como base para tomar decisiones de experiencia.",
      serviceNote:
        "Esta estructura permitió diseñar la capa visible sin perder coherencia con la lógica operativa del producto.",
      navigationTitle: "Estructura de navegación",
      navigationBody:
        "La navegación siguió un eje principal desde el acceso hasta el resultado, con zonas secundarias visibles sin interrumpir el recorrido central. Ordenar estas pantallas permitió reducir complejidad y sostener continuidad entre momentos críticos.",
      frictionsTitle: "Fricciones y oportunidades",
      frictionsBody:
        "El journey map permitió identificar puntos donde la experiencia podía romperse. Cada fricción se transformó en una decisión concreta de diseño para sostener claridad, continuidad y confianza.",
      stages: [
        { phase: "Descubrimiento", user: "Descarga la app", interface: "Onboarding", system: "Disponibilidad de boletos" },
        { phase: "Registro", user: "Crea cuenta", interface: "Login / Registro", system: "Validación de registro" },
        { phase: "Exploración", user: "Explora sorteos", interface: "Catálogo de sorteos", system: "Disponibilidad de boletos" },
        { phase: "Creación de orden", user: "Elige números", interface: "Selector numérico", system: "Generación de ticket único" },
        { phase: "Pago", user: "Paga", interface: "Checkout", system: "Procesamiento de pago" },
        { phase: "Confirmación", user: "Recibe ticket", interface: "Pantalla de éxito · Ticket digital", system: "Generación de ticket único" },
        { phase: "Resultados", user: "Consulta resultados", interface: "Resultados", system: "Sorteo certificado" },
      ],
      navigation: [
        { phase: "Entrada", screens: ["Splash screen", "Onboarding", "Login / Registro", "Verificación OTP"] },
        { phase: "Home", screens: ["Dashboard", "Notificaciones", "Mi Perfil", "Mi Wallet"] },
        { phase: "Juego", screens: ["Catálogo de sorteos", "Detalle del sorteo", "Reglas del juego"] },
        { phase: "Orden", screens: ["Selector de números", "Carrito", "Resumen de orden"] },
        { phase: "Pago", screens: ["Métodos de pago", "Checkout", "Autenticación (3DS)"] },
        { phase: "Confirmación", screens: ["Pantalla de éxito", "Ticket digital", "Compartir ticket"] },
        { phase: "Post-compra", screens: ["Mis boletos", "Resultados", "Reclamo de premio"] },
      ],
      frictions: [
        {
          pain: "Confianza inicial en una plataforma desconocida",
          solution: "Diseño de legitimidad desde el primer contacto con marca, tono y onboarding estructurado.",
        },
        {
          pain: "Fricción en el registro y verificación OTP",
          solution: "Flujo de acceso simplificado con verificación contextualizada y señales claras de avance.",
        },
        {
          pain: "Reglas del juego poco claras antes de entrar",
          solution: "Jerarquía editorial en catálogo: premio, fecha y mecánica visibles desde el inicio.",
        },
        {
          pain: "Dificultad para elegir los números correctos",
          solution: "Selector numérico interactivo con modo aleatorio como ruta alternativa.",
        },
        {
          pain: "Desconfianza en la seguridad del proceso de pago",
          solution: "Checkout transparente con estados explícitos y confirmación inmediata.",
        },
        {
          pain: "Ticket difícil de localizar, guardar o compartir",
          solution: "Ticket digital prominente con QR y flujo de compartir integrado.",
        },
        {
          pain: "Proceso de reclamo de premios complejo e incierto",
          solution: "Pantalla de resultados estructurada con flujo de reclamo más directo.",
        },
      ],
    },
    publicExperience: {
      kicker: "04 — experiencia pública",
      title: "Diseñando la experiencia pública",
      body:
        "La capa pública debía explicar el producto, sostener confianza y acompañar momentos donde la claridad podía romper o reforzar la experiencia. El trabajo se enfocó en reducir ambigüedad, ordenar la información clave y construir continuidad entre descubrimiento, compra, confirmación y resultados.",
      indicator:
        "La capa pública debía hacer el producto comprensible para nuevos usuarios y sostener confianza en puntos donde la fricción podía romper la experiencia.",
      insightRow: [
        { label: "Claridad primero", value: "Explicar juegos, reglas y beneficios sin exigir demasiado esfuerzo inicial." },
        { label: "Legitimidad visible", value: "Diseñar señales de confianza desde el primer contacto y a lo largo del flujo." },
        { label: "Continuidad del journey", value: "Reducir rupturas entre descubrimiento, compra, confirmación y resultados." },
      ],
    },
    retail: {
      kicker: "05 — retail y canales",
      title: "Diseñando la capa retail asistida",
      tag: "Asistido",
      subtitle: "Diseñar para contextos de mediación, operación y ejecución",
      body:
        "Uno de los retos más importantes del proyecto fue diseñar para interacciones asistidas dentro de entornos retail. A diferencia del autoservicio digital, aquí la experiencia dependía de mediación humana, tiempos operativos y condiciones reales de ejecución en punto de venta. Esto exigía otro tipo de claridad: no solo una interfaz comprensible para el usuario final, sino una estructura útil para operadores, promotores y contextos donde velocidad, legibilidad y continuidad del flujo eran igual de importantes que la capa visual.\n\nLos canales retail introducían ritmos, restricciones y necesidades distintas. El trabajo en esta capa se enfocó en hacer los flujos más directos, comprensibles y operables, adaptando la experiencia a escenarios asistidos sin perder coherencia con el resto del producto.",
      indicator:
        "La capa retail debía funcionar en contextos donde la experiencia no era completamente autónoma: dependía de mediación, ritmo operativo y claridad inmediata en punto de venta.",
      insightRow: [
        { label: "Claridad operativa", value: "La información debía poder leerse y ejecutarse rápido, incluso en contextos de atención y soporte." },
        { label: "Flujos guiados", value: "La experiencia debía acompañar tareas paso a paso, reduciendo errores y ambigüedad durante la operación." },
        { label: "Coherencia entre canales", value: "Aunque el contexto cambiara, la lógica del producto debía mantenerse consistente entre experiencia pública, retail y operación." },
      ],
    },
    operations: {
      kicker: "06 — operaciones",
      title: "Diseñando la capa operacional",
      tag: "Operativo",
      subtitle: "Estructurar control, visibilidad y continuidad interna",
      body:
        "El ecosistema no podía depender solo de la experiencia orientada al cliente. La capa operacional era clave para sostener la gestión diaria, la visibilidad del sistema y el control interno de procesos sensibles. Diseñar esta capa implicó traducir complejidad administrativa en interfaces claras, útiles y coherentes con el resto del producto. Más que un backoffice aislado, debía funcionar como una extensión lógica del sistema, capaz de acompañar operación, monitoreo y toma de decisiones.",
      indicator:
        "La capa operacional permitió sostener el producto más allá de la interfaz pública, integrando control, seguimiento y continuidad interna en una misma lógica de experiencia.",
      insightRow: [
        { label: "Visibilidad operativa", value: "La información debía facilitar seguimiento, lectura rápida y control de procesos clave." },
        { label: "Coherencia de sistema", value: "La lógica interna debía mantenerse alineada con la experiencia pública y los demás canales del producto." },
        { label: "Utilidad administrativa", value: "Las interfaces debían responder a tareas reales de gestión, monitoreo y soporte cotidiano." },
      ],
    },
    system: {
      kicker: "07 — Sistema y Coherencia",
      title: "De la coherencia en el sistema",
      tag: "Sistema",
      subtitle: "Alinear patrones, lenguaje visual y continuidad entre superficies",
      body:
        "Dado que el producto se extendía a través de múltiples superficies, la consistencia no podía depender de decisiones aisladas o repetidas manualmente. Fue necesario construir una base sistémica capaz de alinear patrones, componentes, lenguaje visual y comportamiento de interfaz a lo largo del ecosistema. Este trabajo permitió sostener continuidad entre capas públicas, retail, operación y comunicación, reduciendo fragmentación y facilitando una evolución más ordenada del producto.",
      communicationTitle: "Un sistema de comunicación coherente",
      communicationBody:
        "Los mailings estructurados y las superficies de contenido extendieron el lenguaje del producto hacia la comunicación, reforzando confianza y coherencia de marca más allá de las interfaces centrales.",
      indicator:
        "La coherencia del sistema permitió conectar distintas superficies bajo una misma lógica visual y funcional, haciendo el producto más claro, escalable y mantenible.",
      insightRow: [
        { label: "Patrones reutilizables", value: "La base visual debía poder extenderse sin reconstruir decisiones desde cero en cada módulo." },
        { label: "Continuidad entre superficies", value: "Aunque el contexto cambiara, la experiencia debía sentirse parte del mismo sistema." },
        { label: "Escalabilidad", value: "La consistencia fue clave para sostener crecimiento, nuevas funcionalidades y futuras extensiones del producto." },
      ],
    },
    process: {
      kicker: "08 — proceso",
      title: "iteración y evolución",
      subtitle: "De exploraciones tempranas a un sistema más estructurado",
      body:
        "El proyecto no surgió como una solución cerrada desde el inicio. Evolucionó a través de múltiples fases, referencias, pruebas y ajustes que fueron dando forma a una experiencia más clara, coherente y escalable.\n\nMostrar esa evolución permite entender cómo las decisiones de producto y diseño se consolidaron con el tiempo: desde exploraciones iniciales y búsquedas visuales hasta una estructura más madura, alineada con la complejidad real del sistema.",
      indicator:
        "La evolución del proyecto refleja cómo la solución fue ganando claridad, consistencia y profundidad a medida que se entendían mejor las necesidades del producto.",
      insightRow: [
        { label: "Exploración temprana", value: "Las primeras propuestas ayudaron a abrir posibilidades, identificar dirección y poner a prueba el lenguaje del producto." },
        { label: "Continuidad entre superficies", value: "Cada iteración permitió ajustar jerarquías, flujos y patrones con mayor claridad y coherencia." },
        { label: "Escalabilidad", value: "La evolución no fue solo visual: consolidó una base más estructurada para sostener el crecimiento del producto." },
      ],
    },
    reflection: {
      kicker: "09 — reflexión",
      title: "Qué representa este proyecto en mi práctica",
      body:
        "LotoBola marcó un quiebre en mi trabajo. Empujó mi práctica más allá del diseño de interfaces hacia la orquestación de servicios, el encuadre de producto, el diseño operativo y el pensamiento sistémico. Más que cualquier otro proyecto, refleja cómo abordo problemas complejos de diseño hoy: a través de capas, equipos y puntos de contacto.",
      quoteLead: "Sigue siendo la expresión más clara de mi transición hacia una práctica de diseño más senior, sistémica, ",
      quoteAccent: "orientada a producto y servicio.",
      quoteEnd: "",
      quoteBlock:
        "Sigue siendo la expresión más clara de mi transición hacia una práctica de diseño más senior, sistémica, orientada a producto y servicio.",
    },
    architectureLabels: {
      user: "Usuario",
      interface: "Interfaz",
      system: "Sistema",
      friction: "Fricción",
      designDecision: "Decisión de diseño",
    },
  },
  en: {
    hero: {
      kicker: "Selected Work — Case Study",
      title: "Lotobola",
      subtitleAccent: "Designing a lottery ecosystem",
      subtitleRest:
        " across public experience, assisted retail channels, operations, and system in a regulated environment",
      summary:
        "Lotobola is a product ecosystem connecting digital experience, commercial operations, and transaction logic in a highly sensitive operational context. My role focused on structuring critical flows, clarifying complex rules, and building a scalable foundation for the product to evolve.",
      metrics: [
        { label: "Role", value: "Service Design / Product Designer / UX UI / System Thinking." },
        {
          label: "Scope",
          value: "Public experience, retail flows, operational / admin layer, design system, communication.",
        },
        { label: "Focus", value: "Multi-surface ecosystem design — digital, assisted, and operational." },
        {
          label: "Deliverables",
          value: "Website, retail flows, admin tooling, and design system foundations.",
        },
      ],
    },
    overview: {
      kicker: "01 — Overview",
      title: "The case in one minute",
      body:
        "Lotobola operated in a context where product clarity, user trust, and operational logic had to coexist within the same experience. The work was not limited to the final interface: it required organizing sensitive rules, states, and flows to create a clearer and more sustainable product foundation.\n\nI worked across critical moments such as purchase, validation, results, and consistency between surfaces, reducing ambiguity and reinforcing a trustworthy experience for both the user and the system operation.",
      summaryRow: [
        { label: "Project type", value: "Digital lottery platform" },
        { label: "Context", value: "Regulated environment with physical and digital operation" },
        { label: "Focus", value: "Transactional clarity, consistency, and scalability" },
        { label: "Role", value: "Product Design, UX/UI, and systems thinking" },
      ],
      cards: [
        {
          title: "What it was",
          body: "A lottery ecosystem combining public entry points, assisted service flows, retail support, and operational logic.",
        },
        {
          title: "What it was solving",
          body: "A fragmented, layered experience that needed to work across users, internal teams, and assisted environments.",
        },
        {
          title: "Why it mattered",
          body: "Because trust, clarity, operational viability, and scalability depended on the system working as one connected experience.",
        },
      ],
    },
    challenge: {
      kicker: "02 — Challenge",
      title: "The real challenge",
      body:
        "The challenge was not simply building an attractive interface, but structuring an experience capable of supporting game rules, promotions, payment states, result checks, and trust expectations inside a product with multiple layers of complexity. The experience had to respond clearly in sensitive moments, reduce ambiguity, and sustain coherence across different product surfaces without losing room to grow.",
      challengeRow: [
        {
          label: "Complex rules",
          value: "Each game, promotion, or result came with conditions that needed to be presented clearly and without unnecessary friction.",
        },
        {
          label: "Sensitive states",
          value: "Purchase and confirmation flows had to handle approval, error, expiration, and waiting states with clarity.",
        },
        {
          label: "Multiple touchpoints",
          value: "The platform had to coexist with commercial logic, digital channels, operations, and internal control.",
        },
        {
          label: "Scalability",
          value: "The system needed a reusable and consistent foundation to support new features and campaigns.",
        },
      ],
      quote:
        "A lottery product is not just a screen problem. It is a service problem, an operations problem, a communication problem, and a systems problem.",
    },
    architecture: {
      kicker: "03 — architecture",
      title: "Experience architecture",
      body:
        "The public experience concentrated the most visible and sensitive moments of the product: discovery, registration, purchase, validation, and results. Behind that layer lived business rules, transactional states, and clarity decisions that needed precise resolution. My work focused on structuring an experience that could communicate rules, support critical moments, and sustain trust without overloading the interface.",
      serviceTitle: "Service logic",
      serviceBody:
        "The service was organized into seven main phases. Mapping them made it possible to understand how user expectations, visible touchpoints, and internal system processes connected, and to use that relationship as the basis for experience decisions.",
      serviceNote:
        "This structure made it possible to design the visible layer without losing coherence with the product's operational logic.",
      navigationTitle: "Navigation structure",
      navigationBody:
        "Navigation followed a primary axis from access to result, with secondary zones remaining visible without interrupting the core journey. Organizing these screens reduced complexity and sustained continuity between critical moments.",
      frictionsTitle: "Friction points and opportunities",
      frictionsBody:
        "The journey map made it possible to identify where the experience could break down. Each friction point became a concrete design decision to preserve clarity, continuity, and trust.",
      stages: [
        { phase: "Discovery", user: "Downloads app", interface: "Onboarding", system: "Ticket availability" },
        { phase: "Registration", user: "Creates account", interface: "Login / Register", system: "Registration validation" },
        { phase: "Exploration", user: "Browses draws", interface: "Game catalog", system: "Ticket availability" },
        { phase: "Order creation", user: "Picks numbers", interface: "Number selector", system: "Unique ticket generation" },
        { phase: "Payment", user: "Pays", interface: "Checkout", system: "Payment processing" },
        { phase: "Confirmation", user: "Receives ticket", interface: "Success screen · Digital ticket", system: "Unique ticket generation" },
        { phase: "Results", user: "Checks results", interface: "Results", system: "Certified draw" },
      ],
      navigation: [
        { phase: "Entry", screens: ["Splash screen", "Onboarding", "Login / Register", "OTP verification"] },
        { phase: "Home", screens: ["Dashboard", "Notifications", "My Profile", "My Wallet"] },
        { phase: "Game", screens: ["Game catalog", "Draw detail", "Game rules"] },
        { phase: "Order", screens: ["Number selector", "Cart", "Order summary"] },
        { phase: "Payment", screens: ["Payment methods", "Checkout", "3DS authentication"] },
        { phase: "Confirmation", screens: ["Success screen", "Digital ticket", "Share ticket"] },
        { phase: "Post-purchase", screens: ["My tickets", "Results", "Prize claim"] },
      ],
      frictions: [
        {
          pain: "Initial trust deficit with an unknown platform",
          solution: "Legitimacy framing from the first contact through brand, tone, and structured onboarding.",
        },
        {
          pain: "Registration and OTP verification friction",
          solution: "Simplified access flow with contextual verification and clear progress cues.",
        },
        {
          pain: "Rules unclear before entering",
          solution: "Editorial hierarchy in the catalog with prize, date, and mechanic visible from the start.",
        },
        {
          pain: "Difficulty choosing the right numbers",
          solution: "Interactive number selector with random pick as an alternate route.",
        },
        {
          pain: "Distrust in the payment process",
          solution: "Transparent checkout with explicit states and immediate confirmation.",
        },
        {
          pain: "Ticket hard to find, save, or share",
          solution: "Prominent digital ticket with QR and integrated sharing flow.",
        },
        {
          pain: "Prize claim process feels complex and unclear",
          solution: "Structured results screen with a more direct claim route.",
        },
      ],
    },
    publicExperience: {
      kicker: "04 — Public Experience",
      title: "Designing the public experience",
      body:
        "The public layer had to explain the product, sustain trust, and support moments where clarity could either break or reinforce the experience. The work focused on reducing ambiguity, structuring key information, and building continuity between discovery, purchase, confirmation, and results.",
      indicator:
        "The public layer had to make the product understandable for new users and sustain trust in moments where friction could break the experience.",
      insightRow: [
        { label: "Clarity first", value: "Explain games, rules, and benefits without demanding too much effort up front." },
        { label: "Visible legitimacy", value: "Design trust signals from the first contact and throughout the flow." },
        { label: "Journey continuity", value: "Reduce breaks between discovery, purchase, confirmation, and results." },
      ],
    },
    retail: {
      kicker: "05 — Retail & Channels",
      title: "Designing the assisted retail layer",
      tag: "Assisted",
      subtitle: "Designing for mediation, operation, and execution contexts",
      body:
        "One of the most important challenges in the project was designing for assisted interactions in retail environments. Unlike digital self-service, the experience here depended on human mediation, operational timing, and real execution conditions at the point of sale. This required a different kind of clarity: not only an understandable interface for the end user, but a structure useful for operators, promoters, and contexts where speed, legibility, and journey continuity mattered as much as the visual layer.\n\nRetail channels introduced different rhythms, constraints, and needs. The work in this layer focused on making the flows more direct, understandable, and operable while staying coherent with the rest of the product.",
      indicator:
        "The retail layer had to work in contexts where the experience was not fully autonomous: it depended on mediation, operational rhythm, and immediate clarity at the point of sale.",
      insightRow: [
        { label: "Operational clarity", value: "Information had to be readable and actionable quickly, even in support contexts." },
        { label: "Guided flows", value: "The experience had to guide tasks step by step, reducing errors and ambiguity during operation." },
        { label: "Channel coherence", value: "Even when the context changed, the product logic had to stay consistent between public, retail, and operational layers." },
      ],
    },
    operations: {
      kicker: "06 — Operations",
      title: "Designing the operational layer",
      tag: "Operational",
      subtitle: "Structuring control, visibility, and internal continuity",
      body:
        "The ecosystem could not depend only on the customer-facing experience. The operational layer was essential for day-to-day management, system visibility, and internal control of sensitive processes. Designing this layer meant translating administrative complexity into interfaces that were clear, useful, and coherent with the rest of the product. More than an isolated back office, it had to function as a logical extension of the system, supporting operations, monitoring, and decision-making.",
      indicator:
        "The operational layer helped sustain the product beyond the public interface, integrating control, monitoring, and internal continuity into the same experience logic.",
      insightRow: [
        { label: "Operational visibility", value: "Information had to support monitoring, quick reading, and control of key processes." },
        { label: "System coherence", value: "Internal logic had to stay aligned with the public experience and the rest of the product channels." },
        { label: "Administrative utility", value: "Interfaces had to respond to real tasks in management, monitoring, and day-to-day support." },
      ],
    },
    system: {
      kicker: "07 — System & Coherence",
      title: "On system coherence",
      tag: "System",
      subtitle: "Aligning patterns, visual language, and continuity between surfaces",
      body:
        "Because the product extended across multiple surfaces, consistency could not depend on isolated or manually repeated decisions. It was necessary to build a systemic base capable of aligning patterns, components, visual language, and interface behavior throughout the ecosystem. This work helped sustain continuity between public, retail, operational, and communication layers while reducing fragmentation and enabling a more organized evolution of the product.",
      communicationTitle: "A coherent communication system",
      communicationBody:
        "Structured mailings and content surfaces extended the product language into communication, reinforcing trust and brand coherence beyond the core interfaces.",
      indicator:
        "System coherence made it possible to connect different surfaces through a shared visual and functional logic, making the product clearer, more scalable, and more maintainable.",
      insightRow: [
        { label: "Reusable patterns", value: "The visual base had to extend without rebuilding decisions from scratch in every module." },
        { label: "Continuity between surfaces", value: "Even when the context changed, the experience had to feel part of the same system." },
        { label: "Scalability", value: "Consistency was key to supporting growth, new functionality, and future product extensions." },
      ],
    },
    process: {
      kicker: "08 — Process",
      title: "Iteration and evolution",
      subtitle: "From early explorations to a more structured system",
      body:
        "The project did not begin as a fully formed solution. It evolved through multiple phases, references, tests, and adjustments that gradually shaped a clearer, more coherent, and more scalable experience.\n\nShowing that evolution helps explain how product and design decisions became more solid over time: from early explorations and visual search to a more mature structure aligned with the real complexity of the system.",
      indicator:
        "The project's evolution reflects how the solution gained clarity, consistency, and depth as the product needs became better understood.",
      insightRow: [
        { label: "Early exploration", value: "The first proposals opened possibilities, revealed direction, and tested the product language." },
        { label: "Continuity between surfaces", value: "Each iteration helped adjust hierarchy, flows, and patterns with greater clarity and coherence." },
        { label: "Scalability", value: "The evolution was not only visual: it consolidated a stronger foundation for product growth." },
      ],
    },
    reflection: {
      kicker: "09 — Reflection",
      title: "What this project represents in my practice",
      body:
        "LotoBola marked a shift in my work. It pushed my practice beyond interface design toward service orchestration, product framing, operational design, and systems thinking. More than any other project, it reflects how I approach complex design problems today: across layers, teams, and touchpoints.",
      quoteLead: "It remains the clearest expression of my transition into a more senior, systemic, ",
      quoteAccent: "product-and-service-oriented design practice.",
      quoteEnd: "",
      quoteBlock:
        "It remains the clearest expression of my transition into a more senior, systemic, product-and-service-oriented design practice.",
    },
    architectureLabels: {
      user: "User",
      interface: "Interface",
      system: "System",
      friction: "Friction",
      designDecision: "Design decision",
    },
  },
};

export function LotoBolaDesktopFigma({ lang }: { lang: Lang }) {
  const c = desktopCopy[lang];

  return (
    <div className="lotobola-desktop-figma">
      <section className="lotobola-desktop__section lotobola-desktop__section--hero">
        <div className="lotobola-desktop__hero-copy">
          <Eyebrow>{c.hero.kicker}</Eyebrow>
          <h1 className="lotobola-desktop__hero-title">{c.hero.title}</h1>
          <p className="lotobola-desktop__hero-subtitle">
            <span className="lotobola-desktop__accent">{c.hero.subtitleAccent}</span>
            {c.hero.subtitleRest}
          </p>
          <p className="lotobola-desktop__hero-summary">{c.hero.summary}</p>
        </div>

        <Placeholder fullBleed />

        <div className="lotobola-desktop__metrics">
          {c.hero.metrics.map((item) => (
            <article key={item.label} className="lotobola-desktop__metric">
              <p className="lotobola-desktop__metric-label">{item.label}</p>
              <p className="lotobola-desktop__metric-value">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro kicker={c.overview.kicker} title={c.overview.title} body={c.overview.body} />
          <div className="lotobola-desktop__summary-row">
            {c.overview.summaryRow.map((item) => (
              <article key={item.label} className="lotobola-desktop__summary-cell">
                <p className="lotobola-desktop__summary-label">{item.label}</p>
                <p className="lotobola-desktop__summary-value">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="lotobola-desktop__stack">
          {c.overview.cards.map((item) => (
            <article key={item.title} className="lotobola-desktop__article">
              <h3 className="lotobola-desktop__article-title">{item.title}</h3>
              <p className="lotobola-desktop__body">{item.body}</p>
            </article>
          ))}
        </div>

        <Placeholder fullBleed />
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro kicker={c.challenge.kicker} title={c.challenge.title} body={c.challenge.body} />
          <div className="lotobola-desktop__metrics lotobola-desktop__metrics--tall">
            {c.challenge.challengeRow.map((item) => (
              <article key={item.label} className="lotobola-desktop__metric">
                <p className="lotobola-desktop__metric-label">{item.label}</p>
                <p className="lotobola-desktop__metric-value">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <blockquote className="lotobola-desktop__quote">{c.challenge.quote}</blockquote>
        <Placeholder fullBleed />
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro kicker={c.architecture.kicker} title={c.architecture.title} body={c.architecture.body} />

          <div className="lotobola-desktop__architecture-block">
            <div className="lotobola-desktop__architecture-copy">
              <h3 className="lotobola-desktop__article-title">{c.architecture.serviceTitle}</h3>
              <p className="lotobola-desktop__body">{c.architecture.serviceBody}</p>
              <p className="lotobola-desktop__service-note">{c.architecture.serviceNote}</p>
            </div>

            <div className="lotobola-desktop__service-table">
              <div className="lotobola-desktop__service-row lotobola-desktop__service-row--head">
                <div className="lotobola-desktop__service-corner" />
                {c.architecture.stages.map((stage, index) => (
                  <div key={stage.phase} className="lotobola-desktop__service-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{stage.phase}</strong>
                  </div>
                ))}
              </div>
              <div className="lotobola-desktop__service-row">
                <div className="lotobola-desktop__service-label">{c.architectureLabels.user}</div>
                {c.architecture.stages.map((stage) => (
                  <div key={`${stage.phase}-user`} className="lotobola-desktop__service-cell">
                    {stage.user}
                  </div>
                ))}
              </div>
              <div className="lotobola-desktop__service-row">
                <div className="lotobola-desktop__service-label">{c.architectureLabels.interface}</div>
                {c.architecture.stages.map((stage) => (
                  <div key={`${stage.phase}-interface`} className="lotobola-desktop__service-cell">
                    {stage.interface}
                  </div>
                ))}
              </div>
              <div className="lotobola-desktop__service-row">
                <div className="lotobola-desktop__service-label">{c.architectureLabels.system}</div>
                {c.architecture.stages.map((stage) => (
                  <div key={`${stage.phase}-system`} className="lotobola-desktop__service-cell">
                    {stage.system}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lotobola-desktop__architecture-block">
            <div className="lotobola-desktop__architecture-copy">
              <h3 className="lotobola-desktop__article-title">{c.architecture.navigationTitle}</h3>
              <p className="lotobola-desktop__body">{c.architecture.navigationBody}</p>
            </div>

            <div className="lotobola-desktop__navigation-grid">
              {c.architecture.navigation.map((item) => (
                <article key={item.phase} className="lotobola-desktop__navigation-column">
                  <p className="lotobola-desktop__navigation-label">{item.phase}</p>
                  <ul className="lotobola-desktop__navigation-list">
                    {item.screens.map((screen) => (
                      <li key={screen}>{screen}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="lotobola-desktop__architecture-block">
            <div className="lotobola-desktop__architecture-copy">
              <h3 className="lotobola-desktop__article-title">{c.architecture.frictionsTitle}</h3>
              <p className="lotobola-desktop__body">{c.architecture.frictionsBody}</p>
            </div>

            <div className="lotobola-desktop__frictions">
              {c.architecture.frictions.map((item) => (
                <article key={item.pain} className="lotobola-desktop__friction">
                  <div>
                    <p className="lotobola-desktop__insight-label">{c.architectureLabels.friction}</p>
                    <p className="lotobola-desktop__friction-text">{item.pain}</p>
                  </div>
                  <div>
                    <p className="lotobola-desktop__insight-label">{c.architectureLabels.designDecision}</p>
                    <p className="lotobola-desktop__friction-text">{item.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro
            kicker={c.publicExperience.kicker}
            title={c.publicExperience.title}
            body={c.publicExperience.body}
          />
        </div>
        <div className="lotobola-desktop__double-media">
          <Placeholder fullBleed />
          <div className="lotobola-desktop__media-stack">
            <Placeholder />
            <Placeholder />
          </div>
        </div>
        <p className="lotobola-desktop__center-note">{c.publicExperience.indicator}</p>
        <InsightRow items={c.publicExperience.insightRow} compact />
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro
            kicker={c.retail.kicker}
            title={c.retail.title}
            body={c.retail.body}
            tag={c.retail.tag}
            subtitle={c.retail.subtitle}
          />
        </div>
        <div className="lotobola-desktop__double-media">
          <Placeholder fullBleed />
          <Placeholder />
        </div>
        <p className="lotobola-desktop__center-note">{c.retail.indicator}</p>
        <InsightRow items={c.retail.insightRow} />
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro
            kicker={c.operations.kicker}
            title={c.operations.title}
            body={c.operations.body}
            tag={c.operations.tag}
            subtitle={c.operations.subtitle}
          />
        </div>
        <div className="lotobola-desktop__double-media">
          <Placeholder fullBleed />
          <Placeholder />
        </div>
        <p className="lotobola-desktop__center-note">{c.operations.indicator}</p>
        <InsightRow items={c.operations.insightRow} />
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro
            kicker={c.system.kicker}
            title={c.system.title}
            body={c.system.body}
            tag={c.system.tag}
            subtitle={c.system.subtitle}
          />
        </div>
        <Placeholder fullBleed />
        <div className="lotobola-desktop__communication-block">
          <h3 className="lotobola-desktop__communication-title">{c.system.communicationTitle}</h3>
          <p className="lotobola-desktop__communication-body">{c.system.communicationBody}</p>
        </div>
        <p className="lotobola-desktop__center-note">{c.system.indicator}</p>
        <InsightRow items={c.system.insightRow} />
      </section>

      <section className="lotobola-desktop__section">
        <div className="lotobola-desktop__section-block">
          <SectionIntro
            kicker={c.process.kicker}
            title={c.process.title}
            body={c.process.body}
            subtitle={c.process.subtitle}
          />
        </div>
        <Placeholder fullBleed />
        <p className="lotobola-desktop__center-note">{c.process.indicator}</p>
        <InsightRow items={c.process.insightRow} />
      </section>

      <section className="lotobola-desktop__section lotobola-desktop__section--reflection">
        <div className="lotobola-desktop__reflection-copy">
          <Eyebrow>{c.reflection.kicker}</Eyebrow>
          <h2 className="lotobola-desktop__section-title lotobola-desktop__section-title--full">
            {c.reflection.title}
          </h2>
          <p className="lotobola-desktop__body lotobola-desktop__body--full">{c.reflection.body}</p>
        </div>

        <div className="lotobola-desktop__reflection-lead">
          {c.reflection.quoteLead}
          <span className="lotobola-desktop__accent">{c.reflection.quoteAccent}</span>
          {c.reflection.quoteEnd}
        </div>

        <blockquote className="lotobola-desktop__quote lotobola-desktop__quote--final">
          {c.reflection.quoteBlock}
        </blockquote>

        <Placeholder fullBleed />
      </section>
    </div>
  );
}
