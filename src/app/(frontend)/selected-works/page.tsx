import config from '@payload-config'
import { getPayload } from 'payload'
import { WorkCard } from '../components/WorkCard'
import { getLocale } from '../locale'

export default async function SelectedWorks() {
  const locale = await getLocale()
  const payload = await getPayload({ config })

  const [page, works] = await Promise.all([
    payload.findGlobal({ slug: 'selected-works-page', locale }),
    payload.find({
      collection: 'case-studies',
      where: { category: { equals: 'selected' } },
      sort: 'order',
      locale,
      limit: 6,
    }),
  ])

  return (
    <main className="view">
      <div className="container works-view">
        <div className="page-head">
          <h1>
            {page.splashTitleLine1} {page.splashTitleLine2}
          </h1>
        </div>
        <div className="works-grid">
          {works.docs.map((w) => (
            <WorkCard
              key={w.id}
              name={w.name}
              description={
                [w.descriptionAccent, w.descriptionRest].filter(Boolean).join(' ') || w.kicker || ''
              }
              cover={w.cover}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
