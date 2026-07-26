import type { GlobalConfig } from 'payload'

export const SelectedWorksPage: GlobalConfig = {
  slug: 'selected-works-page',
  access: { read: () => true },
  fields: [
    { name: 'splashTitleLine1', type: 'text', localized: true },
    { name: 'splashTitleLine2', type: 'text', localized: true },
    { name: 'splashDescriptionAccent', type: 'text', localized: true },
    { name: 'splashDescriptionSuffix', type: 'text', localized: true },
    { name: 'splashMeta', type: 'text', localized: true },
    { name: 'segmentLabel', type: 'text', localized: true },
  ],
}
