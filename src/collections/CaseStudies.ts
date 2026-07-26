import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order'],
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL: /selected-works/{slug} o /extended-works/{slug}' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'selected',
      options: [
        { label: 'Selected work', value: 'selected' },
        { label: 'Extended work', value: 'extended' },
      ],
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'private', type: 'checkbox', defaultValue: false, admin: { description: 'Requiere código de acceso (gate)' } },
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'kicker', type: 'text', localized: true },
    { name: 'descriptionAccent', type: 'text', localized: true },
    { name: 'descriptionRest', type: 'text', localized: true },
    {
      name: 'stats',
      type: 'group',
      fields: [
        { name: 'role', type: 'text', localized: true },
        { name: 'scope', type: 'text', localized: true },
        { name: 'timeline', type: 'text', localized: true },
        { name: 'scale', type: 'text', localized: true },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      localized: true,
      fields: [{ name: 'tag', type: 'text' }],
    },
    { name: 'cover', type: 'upload', relationTo: 'media' },
    {
      name: 'sections',
      type: 'array',
      localized: true,
      admin: { description: 'Secciones del case study (título + cuerpo + media)' },
      fields: [
        { name: 'eyebrow', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'body', type: 'richText' },
        { name: 'media', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
