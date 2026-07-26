import config from '@payload-config'
import { getPayload } from 'payload'
import { Download, Linkedin, Mail } from 'lucide-react'
import { getLocale } from '../locale'
import { copy } from '../content'
import { CV, LINKS } from '../links'
import { Spans } from '../components/Rich'

export default async function Contacto() {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'home-page', locale })
  const c = copy[locale].contacto
  const labels = copy[locale].labels
  const email = home.email || 'hey@hernanyacosta.com'

  return (
    <main className="view view--top frame">
      <div className="text-stack">
        <h1 className="title-page narrow">
          <Spans spans={c.title[0]} />
          <br />
          <Spans spans={c.title[1]} />
        </h1>
        <p className="subtitle-page narrow">
          <Spans spans={c.subtitle} />
        </p>
      </div>

      <div className="action-stack">
        <a className="btn btn--primary btn--w284" href={`mailto:${email}`}>
          {labels.conversemos}
          <Mail size={14} />
        </a>
        <a className="btn btn--ghost btn--w284" href={LINKS.linkedin} target="_blank" rel="noreferrer">
          {labels.ubicameLinkedIn}
          <Linkedin size={16} />
        </a>
        <hr className="separator" />
        <a className="btn btn--ghost btn--w284" href={CV.portfolio} download>
          {labels.descargarPortafolio}
          <Download size={16} />
        </a>
        <a className="btn btn--ghost btn--w284" href={CV[locale]} download>
          {labels.descargarResumen}
          <Download size={16} />
        </a>
      </div>
    </main>
  )
}
