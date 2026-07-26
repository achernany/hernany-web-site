import type { Locale } from './locale'

// Copy editorial de las vistas (del Figma FX Design System).
// span: a = acento verde, s = seminegrita
export type Span = { t: string; a?: boolean; s?: boolean }
export type Paragraph = Span[]

interface PageCopy {
  title: [Span[], Span[]] | [Span[]]
  body: Paragraph[]
}

export const copy: Record<
  Locale,
  {
    enfoque: PageCopy
    sobreMi: PageCopy
    proyectos: PageCopy
    contacto: { title: [Span[], Span[]]; subtitle: Span[] }
    labels: {
      conversemos: string
      verProyectos: string
      descargarCV: string
      ubicameLinkedIn: string
      descargarPortafolio: string
      descargarResumen: string
    }
  }
> = {
  es: {
    enfoque: {
      title: [[{ t: 'Del requerimiento ambiguo' }], [{ t: 'al producto en producción', a: true }]],
      body: [
        [
          {
            t: 'Mi trabajo comienza cuando el requerimiento todavía está incompleto, cambia según el equipo o viene condicionado por restricciones técnicas, operativas o legales. Para aterrizarlo, ',
          },
          {
            t: 'separo objetivos, supuestos, reglas y bloqueantes; confronto las distintas versiones con owners, negocio, arquitectura y desarrollo; ',
            a: true,
          },
          {
            t: 'y convierto esa discusión en escenarios concretos, decisiones pendientes y criterios claros de solución.',
          },
        ],
        [
          {
            t: 'Desde diseño, estructuro la lógica antes de entrar en la interfaz: actores, flujos, estados, excepciones, dependencias e integraciones. Cuando aparece un bloqueo identifico qué decisión falta, quién debe tomarla y qué impacto tiene sobre la experiencia, el negocio y la implementación. Así, ',
          },
          {
            t: 'diseño funciona también como una herramienta para alinear equipos y reducir incertidumbre.',
            a: true,
          },
        ],
        [
          {
            t: 'A partir de esa definición, prototipo, valido e itero con usuarios y stakeholders, acompaño a desarrollo y reviso lo implementado hasta producción. ',
          },
          {
            t: 'Uso investigación, datos e inteligencia artificial para explorar alternativas con mayor velocidad,',
            a: true,
          },
          { t: ' pero las decisiones se sostienen en criterio, contexto y viabilidad.' },
        ],
      ],
    },
    sobreMi: {
      title: [[{ t: 'Sobre ' }, { t: 'mí', a: true }]],
      body: [
        [
          {
            t: 'Comunicador de formación, diseñador por oficio y antropólogo en proceso. No creo en poner al usuario en un altar ni en diseñar por intuición: ',
          },
          {
            t: 'primero hay que entender el negocio, quién asume el riesgo, cómo funciona el sistema y qué problema vale la pena resolver.',
            a: true,
          },
        ],
        [
          { t: 'Leo, cuestiono y trabajo desde el pensamiento crítico. ', a: true },
          {
            t: 'Sé que la tecnología no es neutral ni se distribuye de forma justa, así que no compro discursos fáciles sobre innovación. Justamente esa tensión es la que me mantiene buscando proyectos complejos, reales y suficientemente interesantes como para seguir diseñando.',
          },
        ],
        [{ t: 'El resto se conversa.', s: true }],
      ],
    },
    proyectos: {
      title: [[{ t: 'Proyectos ', a: true }, { t: 'en evolución' }]],
      body: [
        [
          {
            t: 'Una selección de proyectos que muestra cómo mi práctica fue incorporando nuevas herramientas a medida que aumentaba la complejidad del producto: desde investigación cualitativa, encuestas y mapas de calor, hasta CRM, analítica, inteligencia artificial, Clarity y Datadog. ',
          },
          {
            t: 'El objetivo también evolucionó: pasar de entender mejor al usuario a conectar experiencia, operación, ventas y rentabilidad.',
            a: true,
          },
        ],
        [
          {
            t: 'EVA, PlayzonBet y Lotobola resumen ese recorrido. Los demás proyectos completan la muestra de capacidades, contextos y sistemas en los que he trabajado.',
          },
        ],
      ],
    },
    contacto: {
      title: [
        [{ t: 'Donde la complejidad' }],
        [{ t: 'se convierte en producto', a: true }],
      ],
      subtitle: [
        { t: 'Experiencia, negocio, tecnología y regulación ', a: true },
        { t: 'alineados para diseñar soluciones claras, viables y listas para evolucionar.' },
      ],
    },
    labels: {
      conversemos: 'Conversemos',
      verProyectos: 'Ver proyectos',
      descargarCV: 'Descargar CV',
      ubicameLinkedIn: 'Ubícame en LinkedIn',
      descargarPortafolio: 'Descargar portafolio',
      descargarResumen: 'Descargar resumen',
    },
  },
  en: {
    enfoque: {
      title: [[{ t: 'From ambiguous requirements' }], [{ t: 'to products in production', a: true }]],
      body: [
        [
          {
            t: 'My work starts when the requirement is still incomplete, changes across teams, or is shaped by technical, operational or legal constraints. To ground it, ',
          },
          {
            t: 'I separate goals, assumptions, rules and blockers; I confront the different versions with owners, business, architecture and engineering; ',
            a: true,
          },
          {
            t: 'and I turn that discussion into concrete scenarios, pending decisions and clear solution criteria.',
          },
        ],
        [
          {
            t: 'From design, I structure the logic before touching the interface: actors, flows, states, exceptions, dependencies and integrations. When a blocker appears, I identify which decision is missing, who must make it and its impact on experience, business and implementation. That way, ',
          },
          {
            t: 'design also works as a tool to align teams and reduce uncertainty.',
            a: true,
          },
        ],
        [
          {
            t: 'From that definition, I prototype, validate and iterate with users and stakeholders, support engineering and review what ships to production. ',
          },
          {
            t: 'I use research, data and artificial intelligence to explore alternatives faster,',
            a: true,
          },
          { t: ' but decisions rest on judgment, context and feasibility.' },
        ],
      ],
    },
    sobreMi: {
      title: [[{ t: 'About ' }, { t: 'me', a: true }]],
      body: [
        [
          {
            t: 'Communicator by training, designer by trade and anthropologist in progress. I don’t believe in putting users on a pedestal or designing by intuition: ',
          },
          {
            t: 'first you must understand the business, who carries the risk, how the system works and which problem is worth solving.',
            a: true,
          },
        ],
        [
          { t: 'I read, question and work from critical thinking. ', a: true },
          {
            t: 'I know technology is neither neutral nor fairly distributed, so I don’t buy easy innovation narratives. That very tension keeps me looking for complex, real projects interesting enough to keep designing.',
          },
        ],
        [{ t: 'The rest we can talk about.', s: true }],
      ],
    },
    proyectos: {
      title: [[{ t: 'Projects ', a: true }, { t: 'in evolution' }]],
      body: [
        [
          {
            t: 'A selection of projects showing how my practice added new tools as product complexity grew: from qualitative research, surveys and heatmaps to CRM, analytics, artificial intelligence, Clarity and Datadog. ',
          },
          {
            t: 'The goal evolved too: from understanding users better to connecting experience, operations, sales and profitability.',
            a: true,
          },
        ],
        [
          {
            t: 'EVA, PlayzonBet and Lotobola sum up that journey. The remaining projects complete the picture of capabilities, contexts and systems I have worked in.',
          },
        ],
      ],
    },
    contacto: {
      title: [[{ t: 'Where complexity' }], [{ t: 'becomes product', a: true }]],
      subtitle: [
        { t: 'Experience, business, technology and regulation ', a: true },
        { t: 'aligned to design clear, viable solutions ready to evolve.' },
      ],
    },
    labels: {
      conversemos: "Let's talk",
      verProyectos: 'View projects',
      descargarCV: 'Download CV',
      ubicameLinkedIn: 'Find me on LinkedIn',
      descargarPortafolio: 'Download portfolio',
      descargarResumen: 'Download summary',
    },
  },
}
