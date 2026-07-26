import config from '@payload-config'
import { getPayload } from 'payload'
import { Github, Instagram, Linkedin, Download, ArrowRight } from 'lucide-react'
import { getLocale } from './locale'
import { CV, LINKS } from './links'

export default async function Home() {
  const locale = await getLocale()
  const payload = await getPayload({ config })

  const [home, settings] = await Promise.all([
    payload.findGlobal({ slug: 'home-page', locale }),
    payload.findGlobal({ slug: 'site-settings', locale }),
  ])

  const email = home.email || 'hey@hernanyacosta.com'

  return (
    <main className="view">
      <div className="container home-view">
        <h1>
          {home.titleLine1}
          {home.titleLine2 ? (
            <>
              <br />
              {home.titleLine2}
            </>
          ) : null}
        </h1>
        <p className="home-sub">
          <strong>{home.descriptionAccent}</strong> {home.descriptionRest}
        </p>
        <p className="home-meta">{home.meta}</p>
        <div className="btn-row">
          <a className="btn-pill" href="/selected-works">
            {settings.actions?.enterSystems || 'Enter Systems'}
            <ArrowRight size={16} />
          </a>
          <a className="btn-ghost" href={`mailto:${email}`}>
            {settings.actions?.startConversation || 'Start a conversation'}
          </a>
        </div>

        <div className="home-bottom">
          <a className="home-email" href={`mailto:${email}`}>
            {email}
          </a>
          <div className="socials">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
          <a className="btn-ghost" href={CV[locale]} download>
            <Download size={16} />
            {settings.actions?.downloadExecutiveCV || 'Download executive CV'}
          </a>
        </div>
      </div>
    </main>
  )
}
