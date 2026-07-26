# Hernany Acosta — Portfolio (Next.js + Payload CMS)

Migración del portfolio Vite a Next.js 15 con Payload 3 integrado. Contenido localizado ES/EN gestionado desde `/admin`.

## Estructura

- `src/payload.config.ts` — config de Payload (localización es/en, SQLite en dev)
- `src/collections/` — Users, Media, CaseStudies
- `src/globals/` — SiteSettings, HomePage, ApproachPage, ContactPage, SelectedWorksPage, ExtendedWorksPage
- `src/seed.ts` — migra el contenido de los JSON de i18n del sitio Vite (`seed/es.json`, `seed/en.json`)
- `src/app/(payload)/` — admin y API de Payload
- `src/app/(frontend)/` — el sitio: home estilo minimal claro (hero + grid de proyectos + contacto), /approach, /selected-works y /contact. Menú overlay en blanco y switcher ES/EN (cookie `lang`).

## Primeros pasos (en tu Mac)

```bash
cd ~/Dev/hernany-payload
cp .env.example .env        # y cambia PAYLOAD_SECRET por algo largo y aleatorio
pnpm install                # o npm install / yarn
pnpm generate:types         # genera src/payload-types.ts
pnpm dev
```

1. Abre http://localhost:3000/admin y crea tu primer usuario.
2. En otra terminal: `pnpm seed` — carga todo el contenido ES/EN.
3. Abre http://localhost:3000 — la página de prueba muestra el contenido desde el CMS (`?lang=en` para inglés).

## Deploy (Vercel)

SQLite no funciona en Vercel. Para producción:

1. Crea un Postgres (Neon / Vercel Postgres).
2. `pnpm add @payloadcms/db-postgres` y en `payload.config.ts` cambia `sqliteAdapter` por `postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI } })`.
3. Para media persistente: `@payloadcms/storage-vercel-blob`.
4. Variables en Vercel: `PAYLOAD_SECRET`, `DATABASE_URI`.

## Pendiente

- Portar componentes, theme (tokens/vars.css) y páginas del sitio Vite a `src/app/(frontend)/`.
- Subir imágenes y CVs a Media y vincularlos.
- Migrar el contenido narrativo de los case studies (LotoBola, etc.) a `sections`.
