import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    {
      name: 'theme',
      type: 'group',
      admin: { description: 'Colores del sitio (hex, ej. #04816c)' },
      fields: [
        { name: 'accent', type: 'text', defaultValue: '#04816c' },
        { name: 'bg', type: 'text', defaultValue: '#eef0f2' },
        { name: 'ink', type: 'text', defaultValue: '#5f666f' },
        { name: 'muted', type: 'text', defaultValue: '#8a929c' },
        { name: 'hairline', type: 'text', defaultValue: '#d9dde1' },
      ],
    },
    { name: 'brand', type: 'text', localized: true },
    { name: 'copyright', type: 'text', localized: true },
    { name: 'menuOpen', type: 'text', localized: true },
    { name: 'menuClose', type: 'text', localized: true },
    {
      name: 'menu',
      type: 'group',
      fields: [
        { name: 'systems', type: 'text', localized: true },
        { name: 'approach', type: 'text', localized: true },
        { name: 'selectedWork', type: 'text', localized: true },
        { name: 'aboutMe', type: 'text', localized: true },
        { name: 'extendedWork', type: 'text', localized: true },
        { name: 'contact', type: 'text', localized: true },
      ],
    },
    {
      name: 'actions',
      type: 'group',
      fields: [
        { name: 'startConversation', type: 'text', localized: true },
        { name: 'connectLinkedIn', type: 'text', localized: true },
        { name: 'downloadExecutiveCV', type: 'text', localized: true },
        { name: 'downloadPortfolio', type: 'text', localized: true },
        { name: 'viewAppliedCases', type: 'text', localized: true },
        { name: 'enterSystems', type: 'text', localized: true },
        { name: 'startNow', type: 'text', localized: true },
        { name: 'back', type: 'text', localized: true },
      ],
    },
    {
      name: 'statLabels',
      type: 'group',
      fields: [
        { name: 'role', type: 'text', localized: true },
        { name: 'scope', type: 'text', localized: true },
        { name: 'timeline', type: 'text', localized: true },
        { name: 'scale', type: 'text', localized: true },
      ],
    },
    {
      name: 'gate',
      type: 'group',
      admin: { description: 'Textos del gate de casos privados (LotoBola)' },
      fields: [
        { name: 'eyebrow', type: 'text', localized: true },
        { name: 'copy', type: 'text', localized: true },
      ],
    },
    { name: 'cvEs', type: 'upload', relationTo: 'media', admin: { description: 'CV en español (PDF)' } },
    { name: 'cvEn', type: 'upload', relationTo: 'media', admin: { description: 'CV in English (PDF)' } },
  ],
}
