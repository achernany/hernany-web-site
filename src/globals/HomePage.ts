import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: { read: () => true },
  fields: [
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
