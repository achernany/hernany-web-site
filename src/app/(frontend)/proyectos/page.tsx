import config from '@payload-config'
import { getPayload } from 'payload'
import { getLocale } from '../locale'
import { copy } from '../content'
import { RichBody, Spans } from '../components/Rich'

const FEATURED = ['playzonbet', 'lotobola', 'eva']

export default async function Proyectos() {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const c = copy[locale].proyectos

  const works = await payload.find({
    collection: 'case-studies',
    where: { slug: { in: FEATURED } },
    locale,
    limit: 10,
  })
  const bySlug = new Map(works.docs.map((w) => [w.slug, w]))
  const cards = FEATURED.map((slug) => bySlug.get(slug)).filter(Boolean)

  return (
    <main className="view view--top frame">
      <div className="text-stack">
        <h1 className="title-page narrow">
          {c.title.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              <Spans spans={line} />
            </span>
          ))}
        </h1>
        <RichBody paragraphs={c.body} />
      </div>

      <hr className="separator" />

      <div className="cards-row">
        {cards.map((w, i) => (
          <a key={w!.id} className={`pcard${i === 1 ? ' pcard--tall' : ''}`} href="/proyectos">
            <span className="pcard-label">{w!.name}</span>
          </a>
        ))}
      </div>
    </main>
  )
}
