import type { GlobalConfig } from 'payload'

export const ExtendedWorksPage: GlobalConfig = {
  slug: 'extended-works-page',
  access: { read: () => true },
  fields: [
    { name: 'titleLine1', type: 'text', localized: true },
    { name: 'titleLine2', type: 'text', localized: true },
    { name: 'descriptionAccent', type: 'text', localized: true },
    { name: 'descriptionRest', type: 'text', localized: true },
  ],
}
