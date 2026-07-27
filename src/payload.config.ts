import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { CaseStudies } from './collections/CaseStudies'
import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'
import { ApproachPage } from './globals/ApproachPage'
import { ContactPage } from './globals/ContactPage'
import { SelectedWorksPage } from './globals/SelectedWorksPage'
import { ExtendedWorksPage } from './globals/ExtendedWorksPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      { label: 'Español', code: 'es' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'es',
    fallback: true,
  },
  collections: [Users, Media, CaseStudies],
  globals: [SiteSettings, HomePage, ApproachPage, ContactPage, SelectedWorksPage, ExtendedWorksPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: (() => {
    const uri =
      process.env.DATABASE_URI || process.env.DATABASE_URL || process.env.POSTGRES_URL || ''
    if (uri.startsWith('postgres')) {
      return vercelPostgresAdapter({ pool: { connectionString: uri } })
    }
    return sqliteAdapter({ client: { url: uri || 'file:./payload.db' } })
  })(),
  sharp,
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          collections: { media: true },
          token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
      ]
    : [],
})
