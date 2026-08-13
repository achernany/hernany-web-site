import config from '@payload-config'
import { getPayload } from 'payload'
import { getLocale } from '../locale'
import { copy } from '../content'
import { RichBody, Spans } from '../components/Rich'

export default async function Proyectos() {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const c = copy[locale].proyectos

  // Todos los proyectos "selected" del CMS, ordenados: agregar uno en /admin lo suma aquí
  const works = await payload.find({
    collection: 'case-studies',
    where: { category: { equals: 'selected' } },
    sort: 'order',
    locale,
    limit: 12,
  })
  const cards = works.docs

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
        {cards.map((w, i) => {
          const cover = w.cover && typeof w.cover === 'object' ? w.cover : null
          const tall = cards.length === 3 && i === 1
          return (
            <a key={w.id} className={`pcard${tall ? ' pcard--tall' : ''}`} href="/proyectos">
              <span className="pcard-goo" aria-hidden="true" />
              {cover?.url && <img className="pcard-img" src={cover.url} alt={cover.alt || w.name} />}
              <span className="pcard-label">{w.name}</span>
            </a>
          )
        })}
      </div>
    </main>
  )
}
