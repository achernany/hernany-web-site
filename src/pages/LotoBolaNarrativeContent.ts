export type Lang = "es" | "en";

export interface MetricItem {
  label: string;
  value: string;
}

export interface SectionCopy {
  kicker: string;
  title: string;
  body: string;
  subtitle?: string;
}

export interface ArchitectureGroup {
  title: string;
  items: string[];
}

export interface ArchitectureCard {
  index: string;
  label: string;
  title: string;
  body: string;
  groups: ArchitectureGroup[];
}

export interface FrictionRow {
  index: string;
  problem: string;
  solution: string;
}

export interface NarrativeCopy {
  hero: {
    title: string;
    subtitleAccent: string;
    subtitleRest: string;
    summary: string;
    cta: string;
    metrics: MetricItem[];
  };
  overview: SectionCopy;
  challenge: SectionCopy & {
    quote: string;
  };
  architecture: SectionCopy & {
    serviceTitle: string;
    serviceBody: string;
    serviceNote: string;
    frictionTitle: string;
    frictionBody: string;
    quote: string;
    cards: ArchitectureCard[];
    frictions: FrictionRow[];
  };
  publicExperience: SectionCopy;
  retailChannels: SectionCopy;
  multipleActors: SectionCopy;
  operations: SectionCopy & {
    communicationTitle: string;
    communicationBody: string;
  };
  system: SectionCopy;
  process: SectionCopy;
  reflection: SectionCopy & {
    quote: string;
  };
}

const spanishCopy: NarrativeCopy = {
  hero: {
    title: "Lotobola",
    subtitleAccent: "Diseñando un ecosistema de lotería",
    subtitleRest:
      " a través de experiencia pública, canales retail asistidos, operaciones y sistema en entorno regulado",
    summary:
      "Lotobola es un ecosistema de producto que conecta experiencia digital, operación comercial y lógica transaccional en un contexto de alta sensibilidad operativa. Mi trabajo consistió en estructurar flujos críticos, dar claridad a reglas complejas y construir una base escalable para la evolución del producto.",
    cta: "Otra mirada",
    metrics: [
      { label: "ROL", value: "Service Design / Product Designer / UX UI / System Thinking." },
      {
        label: "alcance",
        value: "Experiencia pública, flujos retail, capa operativa / admin, design system, comunicación.",
      },
      { label: "Foco", value: "Diseño de ecosistema multi-superficie digital, asistido y operativo." },
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
      "Lotobola fue el diseño de un ecosistema de lotería multicanal, transaccional y regulado, donde convivían experiencia pública de compra, venta asistida en retail, operación interna, comunicación en displays e integraciones con proveedores externos. El reto no era resolver una interfaz aislada, sino estructurar un sistema fragmentado por canales, actores, reglas de negocio, ritmos de uso y estados sensibles, para que pudiera operar con claridad, continuidad y confianza en cada punto de contacto. Mi trabajo consistió en traducir esa complejidad en una arquitectura de experiencia coherente: ordenar flujos, adaptar interfaces según contexto de uso, alinear interacción y operación, y construir una base visual y estructural capaz de sostener escalabilidad, control y consistencia a lo largo del producto.",
  },
  challenge: {
    kicker: "02 — Desafío",
    title: "El desafío real",
    body:
      "Diseñar Lotobola no consistía en optimizar un único journey digital, sino en dar forma a un sistema de lotería distribuido entre canales, superficies y actores muy distintos entre sí. La experiencia del jugador dependía tanto de la claridad de la capa visible como de la consistencia entre venta asistida, validaciones, operación interna, comunicación promocional e integraciones con terceros. El desafío era lograr que un ecosistema fragmentado, entre web, POS, backoffice, displays y canales retail con ritmos de uso diferentes, pudiera funcionar como una experiencia conectada, comprensible y operable, sin perder coherencia entre capas públicas, comerciales y operativas. La hipótesis de trabajo fue que, si conseguíamos alinear arquitectura de experiencia, lógica operativa y fundamentos de interfaz en un sistema común, el producto no solo sería más claro para el usuario final, sino también más fácil de vender, operar, gobernar y escalar con consistencia a lo largo del tiempo.",
    quote:
      "Un producto de lotería no es solo un problema de pantallas. Es un problema de servicio, de operaciones, de comunicación y de sistemas integrados multiplataforma y con roles y usuarios múltiples.",
  },
  architecture: {
    kicker: "03 — arquitectura",
    title: "Arquitectura del sistema",
    body:
      "La experiencia visible era solo una parte del producto. Detrás de cada momento público convivían venta asistida, reglas de negocio, validaciones, operación interna, comunicación en pantallas e integraciones críticas con terceros. Mi trabajo consistió en estructurar ese ecosistema como un sistema legible y coherente, capaz de conectar interfaces, canales y procesos sin romper continuidad entre capas visibles y lógicas operativas. Más que organizar pantallas, se trató de definir relaciones entre actores, superficies, dependencias y estados críticos para sostener claridad, control y consistencia a escala.",
    serviceTitle: "Lógica del servicio",
    serviceBody:
      "El servicio se organizó en seis fases principales. Mapearlas permitió entender cómo se conectaban expectativas del usuario, puntos de contacto visibles y procesos internos del sistema, y usar esa relación como base para tomar decisiones de experiencia.",
    serviceNote:
      "Esta estructura permitió diseñar la capa visible sin perder coherencia con la lógica operativa del producto.",
    frictionTitle: "Fricciones y oportunidades",
    frictionBody:
      "El journey map permitió identificar siete momentos donde la experiencia podía romperse o perder claridad. Cada uno se tradujo en una decisión concreta de producto e interfaz orientada a reducir fricción, reforzar comprensión y sostener confianza.",
    quote:
      "Esta arquitectura sirvió como base para definir prioridades, flujos críticos y decisiones de interfaz a lo largo del producto.",
    cards: [
      {
        index: "01",
        label: "Fundamentos del sistema",
        title: "La experiencia se ramifica",
        body: "Juegos, validaciones y reglas de premio que sostienen el ecosistema entero.",
        groups: [
          { title: "Juegos", items: ["PozoPower", "PozoPowerGO", "Revancha", "Lakidey", "Elige3", "Instantáneos"] },
          {
            title: "Ticket y cumplimiento",
            items: ["Creación de tickets", "Validación de tickets", "Control regulatorio", "Verificación de edad"],
          },
          { title: "Resultados y campaña", items: ["Resultados de sorteo", "Revancha", "Hero y promociones"] },
        ],
      },
      {
        index: "02",
        label: "Journeys",
        title: "La experiencia se ramifica",
        body: "El journey cambia según canal, velocidad de compra y nivel de asistencia.",
        groups: [
          { title: "Web player", items: ["Descubrimiento", "Registro + OTP", "Exploración", "Orden", "Pago", "Resultados"] },
          {
            title: "Retail asistido",
            items: ["Login vendedor", "Asistencia", "Orden", "Pago", "Impresión", "Entrega"],
          },
          { title: "Rutas alternas", items: ["Express purchase", "Falabella", "TinBet/AT/LiveSport", "Rapiraspas físicos"] },
        ],
      },
      {
        index: "03",
        label: "Superficies",
        title: "La experiencia se ramifica",
        body: "Cada journey cae en superficies distintas con ritmos y restricciones diferentes.",
        groups: [
          {
            title: "Frentes visibles",
            items: [
              "Website LotoBola",
              "Compra Expres Web",
              "Consulta de ticket",
              "Instantáneas web",
              "Promociones web",
              "Integración Partners",
            ],
          },
          {
            title: "Canales físicos",
            items: [
              "APP POS SUNMI V2S",
              "Integración TAMBO",
              "Integración BetHouse",
              "Integración Partners",
              "Control de inventario",
              "Dashboard de ventas",
            ],
          },
          {
            title: "Broadcast y soporte",
            items: [
              "Pantallas de TAMBO",
              "Animaciones promos",
              "Animaciones sorteos",
              "Panel de control BO",
              "Comunicaciones",
            ],
          },
        ],
      },
      {
        index: "04",
        label: "Lógica interna",
        title: "La experiencia se ramifica",
        body: "Aquí interacción se convierte en orden, ticket, pago, resultado y contenido.",
        groups: [
          {
            title: "Gestión central",
            items: ["Data de jugador", "Ventas / Operador", "Authentication", "KYC y verificación", "Flujo de conversión", "Compliance"],
          },
          {
            title: "Orden y ticketing",
            items: [
              "Catálogo de juegos",
              "Creador de orden",
              "Lógica de carrito",
              "Generación de tickets",
              "Estado de tickets",
              "Gifting y otros",
            ],
          },
          {
            title: "Pagos y resultados",
            items: ["Ruta de pago", "Callbacks", "Validación manual", "Lógica de ganadores", "Control de contenido", "Consulta de resultado"],
          },
        ],
      },
      {
        index: "05",
        label: "Integraciones",
        title: "La experiencia se ramifica",
        body: "Integraciones externas que alimentan, procesan o publican partes sensibles.",
        groups: [
          {
            title: "Core provider",
            items: ["SkillRock RNG", "Game catalog API", "Player data API", "Ticketing Engine", "Draw / Results"],
          },
          { title: "Pagos", items: ["PAYU", "Yape", "PagoEfectivo", "POS", "Banca y Pasarelas"] },
          { title: "Socios y contenido", items: ["Hero banner CMS", "Falabella Integration", "Mailing", "CRM integration"] },
        ],
      },
      {
        index: "06",
        label: "Operación",
        title: "La experiencia se ramifica",
        body: "La capa donde el sistema se vigila, se corrige, se reconcilia y se mantiene sano.",
        groups: [
          {
            title: "Sorteo y revancha",
            items: [
              "BackOffice sorteo",
              "DB sync monitores",
              "Validación manual",
              "Generador ganadores",
              "Promociones BO",
            ],
          },
          {
            title: "Monitoreo",
            items: ["Dashboard inventario", "Analítica de ventas", "DataDog web", "Monitoreo de transacciones"],
          },
          {
            title: "Soporte",
            items: ["Promo panel control", "Compliance dash", "Support BO", "Pago de premios", "Reclamos", "Derechos ARCO"],
          },
        ],
      },
    ],
    frictions: [
      {
        index: "01",
        problem: "Fricción en el registro y verificación OTP",
        solution: "Flujo de acceso simplificado con verificación contextualizada",
      },
      {
        index: "02",
        problem: "Dificultad para elegir los números correctos",
        solution: "Selector numérico interactivo con modo aleatorio como ruta alternativa",
      },
      {
        index: "03",
        problem: "Desconfianza en la seguridad del proceso de pago",
        solution: "Checkout transparente con estados de carga explícitos y confirmación inmediata",
      },
      {
        index: "04",
        problem: "Proceso de reclamo de premios complejo e incierto",
        solution: "Pantalla de resultados estructurada con flujo de reclamo de paso único",
      },
    ],
  },
  publicExperience: {
    kicker: "04 — experiencia publica",
    title: "Estructurando la experiencia pública",
    body:
      "La capa pública concentraba los momentos más visibles y sensibles del producto: descubrimiento, registro, exploración, compra, validación y resultados. El reto no era solo hacerla clara o atractiva, sino convertir reglas complejas y estados transaccionales en una experiencia comprensible, confiable y fácil de recorrer. Las decisiones de esta capa se orientaron a reducir ambigüedad, reforzar legitimidad desde el primer contacto y sostener continuidad en los momentos más críticos del journey, sin perder alineación con la lógica operativa que la hacía posible.",
  },
  retailChannels: {
    kicker: "05 — retail y canales",
    title: "Diseñando la capa retail asistida",
    subtitle: "Diseñar para contextos de mediación, operación y ejecución",
    body:
      "Una parte central del producto no ocurría en autoservicio digital, sino en contextos de venta asistida. El sistema debía funcionar en canales con ritmos, restricciones y lógicas comerciales distintas: bodegas, Tambo, casas de apuesta, partners y otros puntos de venta donde velocidad, claridad y facilidad de ejecución eran determinantes. Diseñar esta capa implicó adaptar flujos, jerarquías y decisiones de interfaz a contextos reales de operación. No era lo mismo vender en un entorno de atención rápida que en uno de mediación más pausada; tampoco era igual diseñar para operadores experimentados que para usuarios con menor familiaridad digital o menor tolerancia a la fricción. El objetivo fue construir una estructura de venta comprensible, directa y operable, capaz de facilitar la comercialización del producto sin perder coherencia con el resto del ecosistema.",
  },
  multipleActors: {
    kicker: "06 — retail y canales",
    title: "Diseñando para múltiples actores",
    subtitle: "Diseñar para contextos de mediación, operación y ejecución",
    body:
      "El producto no se dirigía a un único usuario promedio, sino a actores con capacidades, tiempos, objetivos y umbrales de fricción muy distintos entre sí: jugadores digitales, compradores exprés, vendedores en retail, operadores de punto de venta, usuarios internos y audiencias expuestas a comunicación en displays. Esa diversidad obligó a diseñar no solo para tareas, sino para contextos reales de uso. Cada superficie debía responder a niveles distintos de expertise, presión operativa, velocidad de atención y necesidad de información visible.",
  },
  operations: {
    kicker: "07 — operaciones",
    title: "Diseñando la capa operacional",
    subtitle: "Estructurar control, visibilidad y continuidad interna",
    body:
      "El producto no podía sostenerse solo desde la experiencia orientada al jugador. La operación interna era clave para asegurar continuidad, visibilidad y control sobre procesos sensibles: validación manual, sincronización de resultados, monitoreo y soporte a la gestión diaria del sistema. Diseñar esta capa implicó traducir complejidad administrativa y lógica operativa en herramientas claras, útiles y consistentes. Más que un backoffice aislado, debía funcionar como una extensión estructural del producto: una interfaz capaz de recoger información, acompañar validaciones críticas, mostrar estados relevantes y sostener decisiones internas con mayor claridad. Esta capa permitió conectar la experiencia visible con los procesos que realmente la hacían viable detrás de escena.",
    communicationTitle: "Comunicación en espacio restringido",
    communicationBody:
      "Parte del sistema también se expresaba en superficies de comunicación rápida, donde la interacción no era profunda pero la claridad seguía siendo crítica. En las pantallas de Tambo, el reto consistía en jerarquizar contenido dinámico, resultados, promociones y mensajes sensibles dentro de un espacio muy acotado y bajo condiciones de lectura inmediata. Diseñar esta capa implicó tomar decisiones de distribución, visibilidad y prioridad informativa para asegurar comprensión sin saturación, manteniendo coherencia con el resto del ecosistema.",
  },
  system: {
    kicker: "08 — Sistema y Coherencia",
    title: "Construyendo coherencia entre superficies",
    subtitle: "Alinear patrones, lenguaje visual y continuidad entre superficies",
    body:
      "Dado que el producto se extendía a través de múltiples superficies, la consistencia no podía depender de decisiones aisladas ni de ajustes manuales por canal. Fue necesario construir una base común capaz de alinear patrones, componentes, lenguaje visual y comportamiento de interfaz entre web, POS, operación interna y comunicación pública. Este trabajo permitió reducir fragmentación, sostener continuidad entre capas distintas del sistema y facilitar una evolución más ordenada del producto a medida que crecían sus flujos, canales y necesidades operativas.",
  },
  process: {
    kicker: "09 — proceso",
    title: "iteración y evolución",
    subtitle: "De exploraciones tempranas a un sistema más estructurado",
    body:
      "El proyecto no surgió como una solución cerrada desde el inicio. Fue tomando forma a través de exploraciones, ajustes de flujo, decisiones operativas, pruebas de estructura y refinamientos visuales que respondían a la complejidad real del sistema. Mostrar esa evolución permite entender cómo la solución pasó de exploraciones iniciales y necesidades fragmentadas a una arquitectura más madura, capaz de sostener múltiples superficies, distintos tipos de usuario y una operación más consistente en el tiempo.",
  },
  reflection: {
    kicker: "10 — reflexión",
    title: "El punto de inflexión",
    body:
      "El proyecto en cuestión condensó, con una claridad poco común, una forma de abordar el diseño. Lo que este caso me permitió fue, profundizar desde la claridad de que la experiencia nunca ocurre solo en la interfaz, sino en la relación entre reglas, operaciones, tiempos, canales, actores, validaciones y expectativas. Diseñar aquí implicó leer un sistema completo, entender sus fricciones como síntomas de una estructura mayor y traducir esa complejidad en una experiencia legible, consistente y confiable para los diferentes tipos de usuarios, en los diferentes niveles.",
    quote:
      "La expresión más clara de cómo mi práctica se ha ido constituyendo en formas cada vez más complejas de abordar el diseño: desde el producto y el servicio hasta los sistemas en los que ambos se insertan y operan.",
  },
};

const englishCopy: NarrativeCopy = {
  ...spanishCopy,
  hero: {
    ...spanishCopy.hero,
    subtitleAccent: "Designing a lottery ecosystem",
    subtitleRest:
      " across public experience, assisted retail channels, operations, and system design in a regulated setting",
    summary:
      "LotoBola is a product ecosystem that connects digital experience, commercial operation, and transaction logic in a highly sensitive operating context. My role was to structure critical flows, clarify complex rules, and build a scalable foundation for the product to evolve.",
    cta: "Another view",
    metrics: [
      { label: "ROLE", value: "Service Design / Product Designer / UX UI / System Thinking." },
      {
        label: "scope",
        value: "Public experience, retail flows, operational / admin layer, design system, communication.",
      },
      { label: "Focus", value: "Multi-surface ecosystem design across digital, assisted, and operational contexts." },
      {
        label: "Deliverables",
        value: "Website, retail flows, admin tooling, design system foundations.",
      },
    ],
  },
  overview: {
    kicker: "01 — Overview",
    title: "The case in one minute",
    body:
      "LotoBola was the design of a multichannel, transactional, and regulated lottery ecosystem where public purchasing experience, assisted retail sales, internal operations, display communication, and third-party integrations all had to coexist. The challenge was not to solve an isolated interface, but to structure a system fragmented by channels, actors, business rules, usage rhythms, and sensitive states so it could operate with clarity, continuity, and trust at every touchpoint. My work translated that complexity into a coherent experience architecture: ordering flows, adapting interfaces to context, aligning interaction and operation, and building a visual and structural base able to support scale, control, and consistency over time.",
  },
  challenge: {
    kicker: "02 — Challenge",
    title: "The real challenge",
    body:
      "Designing LotoBola was not about optimizing a single digital journey, but about giving form to a lottery system distributed across channels, surfaces, and very different actors. The player experience depended both on the clarity of the visible layer and on consistency across assisted sales, validations, internal operations, promotional communication, and third-party integrations. The challenge was to make a fragmented ecosystem across web, POS, back office, displays, and retail channels function as one connected, understandable, and operable experience without losing coherence between public, commercial, and operational layers.",
    quote:
      "A lottery product is not only a screen problem. It is a service, operations, communication, and integrated system problem across platforms and multiple roles.",
  },
  architecture: {
    ...spanishCopy.architecture,
    kicker: "03 — Architecture",
    title: "System architecture",
    serviceTitle: "Service logic",
    serviceBody:
      "The service was organized into six main phases. Mapping them made it possible to understand how user expectations, visible touchpoints, and internal processes connected, and to use that relationship as the basis for experience decisions.",
    serviceNote:
      "This structure made it possible to design the visible layer without losing coherence with the product's operational logic.",
    frictionTitle: "Friction points and opportunities",
    frictionBody:
      "The journey map made it possible to identify moments where the experience could break or lose clarity. Each one became a concrete product and interface decision.",
    quote:
      "This architecture became the basis for defining priorities, critical flows, and interface decisions throughout the product.",
    cards: [
      {
        index: "01",
        label: "System foundations",
        title: "The experience branches out",
        body: "Games, validations, and prize rules that support the full ecosystem.",
        groups: [
          { title: "Games", items: ["PozoPower", "PozoPowerGO", "Revancha", "Lakidey", "Elige3", "Instant games"] },
          {
            title: "Ticketing and compliance",
            items: ["Ticket creation", "Ticket validation", "Regulatory control", "Age verification"],
          },
          { title: "Results and campaigns", items: ["Draw results", "Revancha", "Hero content and promotions"] },
        ],
      },
      {
        index: "02",
        label: "Journeys",
        title: "The experience branches out",
        body: "The journey changes by channel, purchase speed, and level of assistance.",
        groups: [
          { title: "Web player", items: ["Discovery", "Registration + OTP", "Exploration", "Order", "Payment", "Results"] },
          {
            title: "Assisted retail",
            items: ["Seller login", "Assistance", "Order", "Payment", "Printing", "Delivery"],
          },
          { title: "Alternate paths", items: ["Express purchase", "Falabella", "TinBet / AT / LiveSport", "Physical scratch cards"] },
        ],
      },
      {
        index: "03",
        label: "Surfaces",
        title: "The experience branches out",
        body: "Each journey lands on different surfaces with distinct rhythms and constraints.",
        groups: [
          {
            title: "Visible fronts",
            items: [
              "LotoBola website",
              "Express web purchase",
              "Ticket lookup",
              "Web instant games",
              "Web promotions",
              "Partner integration",
            ],
          },
          {
            title: "Physical channels",
            items: [
              "SUNMI V2S POS app",
              "Tambo integration",
              "BetHouse integration",
              "Partner integration",
              "Inventory control",
              "Sales dashboard",
            ],
          },
          {
            title: "Broadcast and support",
            items: [
              "Tambo screens",
              "Promo animations",
              "Draw animations",
              "Backoffice control panel",
              "Communications",
            ],
          },
        ],
      },
      {
        index: "04",
        label: "Internal logic",
        title: "The experience branches out",
        body: "Where interaction becomes order, ticket, payment, result, and content.",
        groups: [
          {
            title: "Central management",
            items: ["Player data", "Sales / Operator", "Authentication", "KYC and verification", "Conversion flow", "Compliance"],
          },
          {
            title: "Order and ticketing",
            items: [
              "Game catalog",
              "Order builder",
              "Cart logic",
              "Ticket generation",
              "Ticket status",
              "Gifting and others",
            ],
          },
          {
            title: "Payments and results",
            items: ["Payment route", "Callbacks", "Manual validation", "Winner logic", "Content control", "Result lookup"],
          },
        ],
      },
      {
        index: "05",
        label: "Integrations",
        title: "The experience branches out",
        body: "External integrations that feed, process, or publish sensitive parts of the system.",
        groups: [
          {
            title: "Core provider",
            items: ["SkillRock RNG", "Game catalog API", "Player data API", "Ticketing Engine", "Draw / Results"],
          },
          { title: "Payments", items: ["PAYU", "Yape", "PagoEfectivo", "POS", "Banks and gateways"] },
          { title: "Partners and content", items: ["Hero banner CMS", "Falabella integration", "Mailing", "CRM integration"] },
        ],
      },
      {
        index: "06",
        label: "Operation",
        title: "The experience branches out",
        body: "The layer where the system is monitored, corrected, reconciled, and kept healthy.",
        groups: [
          {
            title: "Draw and revancha",
            items: [
              "Draw backoffice",
              "Monitor DB sync",
              "Manual validation",
              "Winner generator",
              "Backoffice promotions",
            ],
          },
          {
            title: "Monitoring",
            items: ["Inventory dashboard", "Sales analytics", "DataDog web", "Transaction monitoring"],
          },
          {
            title: "Support",
            items: ["Promo control panel", "Compliance dashboard", "Support backoffice", "Prize payment", "Claims", "ARCO rights"],
          },
        ],
      },
    ],
  },
  publicExperience: {
    kicker: "04 — Public Experience",
    title: "Structuring the public experience",
    body:
      "The public layer concentrated the most visible and sensitive moments of the product: discovery, registration, exploration, purchase, validation, and results. The goal was not only to make it clear or attractive, but to turn complex rules and transactional states into an understandable, trustworthy, and easy-to-navigate experience.",
  },
  retailChannels: {
    kicker: "05 — Retail & Channels",
    title: "Designing the assisted retail layer",
    subtitle: "Designing for mediation, operation, and execution",
    body:
      "A central part of the product did not happen in digital self-service, but in assisted sales contexts. The system had to work across channels with different rhythms, constraints, and commercial logics. Designing this layer meant adapting flows, hierarchy, and interface decisions to real operating conditions while preserving coherence with the rest of the ecosystem.",
  },
  multipleActors: {
    kicker: "06 — Retail & Channels",
    title: "Designing for multiple actors",
    subtitle: "Designing for mediation, operation, and execution",
    body:
      "The product did not target a single average user, but actors with very different capabilities, goals, timing, and friction thresholds: digital players, express buyers, retail sellers, point-of-sale operators, internal users, and audiences exposed to display communication. That forced the design to respond not only to tasks, but to real usage contexts.",
  },
  operations: {
    kicker: "07 — Operations",
    title: "Designing the operational layer",
    subtitle: "Structuring control, visibility, and internal continuity",
    body:
      "The product could not stand only on player-facing experience. Internal operation was essential for continuity, visibility, and control over sensitive processes. Designing this layer meant translating administrative complexity and operational logic into clear, useful, and consistent tools connected to the visible product layer.",
    communicationTitle: "Communication in constrained space",
    communicationBody:
      "Part of the system also lived in fast communication surfaces where interaction was shallow but clarity still mattered. On Tambo screens, the challenge was to prioritize dynamic content, results, promotions, and sensitive messaging in a very limited space and under immediate-reading conditions.",
  },
  system: {
    kicker: "08 — System & Coherence",
    title: "Building coherence across surfaces",
    subtitle: "Aligning patterns, visual language, and continuity across surfaces",
    body:
      "Because the product extended across multiple surfaces, consistency could not depend on isolated decisions or manual per-channel adjustments. A shared foundation was needed to align patterns, components, visual language, and behavior across web, POS, internal operations, and public communication.",
  },
  process: {
    kicker: "09 — Process",
    title: "Iteration and evolution",
    subtitle: "From early explorations to a more structured system",
    body:
      "The project did not emerge as a closed solution from the beginning. It took shape through explorations, flow adjustments, operational decisions, structure tests, and visual refinements that responded to the real complexity of the system.",
  },
  reflection: {
    kicker: "10 — Reflection",
    title: "The turning point",
    body:
      "This project condensed, with unusual clarity, a way of approaching design. More than any other case, it shows how I now work through the relationship between rules, operations, timing, channels, actors, validations, and expectations rather than through interface alone.",
    quote:
      "The clearest expression of how my practice has evolved toward increasingly complex ways of approaching design: from product and service into the systems where both are inserted and operate.",
  },
};

export const copyByLang: Record<Lang, NarrativeCopy> = {
  es: spanishCopy,
  en: englishCopy,
};
