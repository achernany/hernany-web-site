import config from '@payload-config'
import { getPayload } from 'payload'
import { getLocale } from '../locale'

export default async function Approach() {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const page = await payload.findGlobal({ slug: 'approach-page', locale })

  const blocks = [
    { title: page.systemThinkingTitle, body: page.systemThinkingBody },
    { title: page.integrationTitle, body: page.integrationBody },
    { title: page.executionTitle, body: page.executionBody },
  ].filter((b) => b.title || b.body)

  const donts = [page.dontOne, page.dontTwo, page.dontThree].filter(Boolean)

  return (
    <main className="view">
      <div className="container approach-view">
        <div className="page-head">
          <h1>
            {page.titlePrefix} {page.titleAccent}
          </h1>
        </div>

        <div className="approach-grid">
          {blocks.map((b, i) => (
            <section key={i}>
              <h2>{b.title}</h2>
              <p>{b.body}</p>
            </section>
          ))}

          {donts.length > 0 && (
            <section>
              <h2>{page.dontTitle}</h2>
              <ul className="dont-list">
                {donts.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}
