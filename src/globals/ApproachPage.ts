import type { GlobalConfig } from 'payload'

export const ApproachPage: GlobalConfig = {
  slug: 'approach-page',
  access: { read: () => true },
  fields: [
    { name: 'titlePrefix', type: 'text', localized: true },
    { name: 'titleAccent', type: 'text', localized: true },
    { name: 'systemThinkingTitle', type: 'text', localized: true },
    { name: 'systemThinkingBody', type: 'textarea', localized: true },
    { name: 'integrationTitle', type: 'text', localized: true },
    { name: 'integrationBody', type: 'textarea', localized: true },
    { name: 'executionTitle', type: 'text', localized: true },
    { name: 'executionBody', type: 'textarea', localized: true },
    { name: 'dontTitle', type: 'text', localized: true },
    { name: 'dontOne', type: 'text', localized: true },
    { name: 'dontTwo', type: 'text', localized: true },
    { name: 'dontThree', type: 'text', localized: true },
  ],
}
