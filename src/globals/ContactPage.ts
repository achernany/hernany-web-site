import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  access: { read: () => true },
  fields: [
    { name: 'titleLine1', type: 'text', localized: true },
    { name: 'titleLine2', type: 'text', localized: true },
    { name: 'descriptionPrefix', type: 'text', localized: true },
    { name: 'descriptionAccent', type: 'text', localized: true },
    { name: 'descriptionSuffix', type: 'text', localized: true },
  ],
}
