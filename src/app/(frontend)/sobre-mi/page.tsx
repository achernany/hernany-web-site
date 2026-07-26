import { getLocale } from '../locale'
import { copy } from '../content'
import { RichBody, Spans } from '../components/Rich'

export default async function SobreMi() {
  const locale = await getLocale()
  const c = copy[locale].sobreMi
  const labels = copy[locale].labels

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

      <div className="action-stack">
        <a className="btn btn--ghost btn--w208" href="/contacto">
          {labels.conversemos}
        </a>
      </div>
    </main>
  )
}
