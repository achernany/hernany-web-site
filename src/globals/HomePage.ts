import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: { read: () => true },
  fields: [
    {
      name: 'messages',
      type: 'array',
      localized: true,
      admin: { description: 'Mensajes del hero. Se muestra uno al azar en cada visita.' },
      fields: [
        { name: 'titleAccent', type: 'text' },
        { name: 'titleRest', type: 'text' },
        { name: 'descriptionAccent', type: 'text' },
        { name: 'descriptionRest', type: 'text' },
      ],
    },
    {
      name: 'metaItems',
      type: 'array',
      localized: true,
      admin: { description: 'Palabras del loop animado (Estrategia / Sistemas / Ejecución)' },
      fields: [{ name: 'text', type: 'text' }],
    },
    { name: 'titleLine1', type: 'text', localized: true },
    { name: 'titleLine2', type: 'text', localized: true },
    { name: 'descriptionAccent', type: 'text', localized: true },
    { name: 'descriptionRest', type: 'text', localized: true },
    { name: 'meta', type: 'text', localized: true },
    { name: 'typewriterPrefix', type: 'text', localized: true },
    { name: 'typewriterAccent', type: 'text', localized: true },
    { name: 'email', type: 'text' },
  ],
}
