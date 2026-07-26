import config from '@payload-config'
import { getPayload } from 'payload'
import { Download, Linkedin, Mail } from 'lucide-react'
import { getLocale } from '../locale'
import { CV, LINKS } from '../links'

export default async function Contact() {
  const locale = await getLocale()
  const payload = await getPayload({ config })

  const [page, settings, home] = await Promise.all([
    payload.findGlobal({ slug: 'contact-page', locale }),
    payload.findGlobal({ slug: 'site-settings', locale }),
    payload.findGlobal({ slug: 'home-page', locale }),
  ])

  const email = home.email || 'hey@hernanyacosta.com'

  return (
    <main className="view">
      <div className="container contact-view">
        <div className="page-head">
          <h1>
            {page.titleLine1}
            {page.titleLine2 ? (
              <>
                <br />
                {page.titleLine2}
              </>
            ) : null}
          </h1>
          <p>
            {page.descriptionPrefix} <strong>{page.descriptionAccent}</strong>{' '}
            {page.descriptionSuffix}
          </p>
        </div>

        <div className="contact-actions">
          <a className="btn-pill" href={`mailto:${email}`}>
            <Mail size={16} />
            {settings.actions?.startConversation || 'Start a conversation'}
          </a>
          <a className="btn-ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            {settings.actions?.connectLinkedIn || 'Connect on LinkedIn'}
          </a>
          <hr className="contact-sep" />
          <a className="btn-ghost" href={CV[locale]} download>
            <Download size={16} />
            {settings.actions?.downloadExecutiveCV || 'Download executive CV'}
          </a>
          <a className="btn-ghost" href={CV.portfolio} download>
            <Download size={16} />
            {settings.actions?.downloadPortfolio || 'Download portfolio'}
          </a>
        </div>
      </div>
    </main>
  )
}
