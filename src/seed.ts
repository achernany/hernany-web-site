/**
 * Seed: vuelca el contenido de los JSON de i18n del sitio Vite a Payload.
 * Uso: npm run seed  (o: npx payload run src/seed.ts)
 * Es idempotente: actualiza si ya existe.
 */
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import config from './payload.config.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const load = (f: string) =>
  JSON.parse(readFileSync(path.resolve(dirname, '../seed', f), 'utf-8'))

type Locale = 'es' | 'en'
const locales: Locale[] = ['es', 'en']
const dicts: Record<Locale, any> = { es: load('es.json'), en: load('en.json') }

const SELECTED_ORDER = ['lotobola', 'playzonbet', 'eva', 'alaz', 'inlearning', 'pacasmayo']
const EXTENDED_ORDER = ['applied', 'consulting']

async function run() {
  const payload = await getPayload({ config })

  for (const locale of locales) {
    const d = dicts[locale]

    await payload.updateGlobal({
      slug: 'site-settings',
      locale,
      data: {
        brand: d.common.brand,
        copyright: d.common.copyright,
        menuOpen: d.common.menuOpen,
        menuClose: d.common.menuClose,
        menu: d.menu,
        actions: d.common.actions,
        statLabels: d.selectedWorks.statLabels,
        gate: d.lotoBolaGate,
      },
    })

    await payload.updateGlobal({ slug: 'home-page', locale, data: d.home })
    await payload.updateGlobal({ slug: 'approach-page', locale, data: d.approach })
    await payload.updateGlobal({ slug: 'contact-page', locale, data: d.contact })
    await payload.updateGlobal({
      slug: 'selected-works-page',
      locale,
      data: {
        splashTitleLine1: d.selectedWorks.splashTitleLine1,
        splashTitleLine2: d.selectedWorks.splashTitleLine2,
        splashDescriptionAccent: d.selectedWorks.splashDescriptionAccent,
        splashDescriptionSuffix: d.selectedWorks.splashDescriptionSuffix,
        splashMeta: d.selectedWorks.splashMeta,
        segmentLabel: d.selectedWorks.segmentLabel,
      },
    })
    await payload.updateGlobal({
      slug: 'extended-works-page',
      locale,
      data: {
        titleLine1: d.extendedWorks.titleLine1,
        titleLine2: d.extendedWorks.titleLine2,
        descriptionAccent: d.extendedWorks.descriptionAccent,
        descriptionRest: d.extendedWorks.descriptionRest,
      },
    })
    console.log(`Globals seeded [${locale}]`)
  }

  // ---- Case studies ----
  const upsert = async (slug: string, category: 'selected' | 'extended', order: number) => {
    const existing = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    const dataFor = (locale: Locale) => {
      const d = dicts[locale]
      if (category === 'selected') {
        const w = d.selectedWorks.works[slug]
        return {
          name: w.name,
          kicker: w.kicker,
          descriptionAccent: w.descriptionAccent,
          descriptionRest: w.descriptionRest,
          stats: w.stats,
          tags: [],
        }
      }
      const w = d.extendedWorkDetail[slug]
      return {
        name: w.title,
        kicker: w.backTitle,
        descriptionAccent: w.descriptionAccent,
        descriptionRest: w.descriptionRest,
        stats: {},
        tags: (w.tags ?? []).map((tag: string) => ({ tag })),
      }
    }

    let id: string | number
    if (existing.docs.length > 0) {
      id = existing.docs[0].id
      await payload.update({
        collection: 'case-studies',
        id,
        locale: 'es',
        data: { category, order, private: slug === 'lotobola', ...dataFor('es') },
      })
    } else {
      const created = await payload.create({
        collection: 'case-studies',
        locale: 'es',
        data: { slug, category, order, private: slug === 'lotobola', ...dataFor('es') },
      })
      id = created.id
    }
    await payload.update({ collection: 'case-studies', id, locale: 'en', data: dataFor('en') })
    console.log(`Case study seeded: ${slug}`)
  }

  for (const [i, slug] of SELECTED_ORDER.entries()) await upsert(slug, 'selected', i)
  for (const [i, slug] of EXTENDED_ORDER.entries()) await upsert(slug, 'extended', i)

  console.log('Seed completo ✔')
  process.exit(0)
}

try {
  await run()
} catch (err) {
  console.error(err)
  process.exit(1)
}
