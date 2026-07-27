import config from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { ArrowRight, Download, Github, Instagram, Linkedin } from 'lucide-react'
import { getLocale } from './locale'
import { copy } from './content'
import { CV, LINKS } from './links'
import { TextLoop } from './components/TextLoop'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'home-page', locale })
  const labels = copy[locale].labels
  const email = home.email || 'hey@hernanyacosta.com'

  // Mensaje al azar en cada visita
  const messages =
    home.messages && home.messages.length > 0
      ? home.messages
      : [
          {
            titleAccent: home.titleLine1,
            titleRest: home.titleLine2,
            descriptionAccent: home.descriptionAccent,
            descriptionRest: home.descriptionRest,
          },
        ]
  const msg = messages[Math.floor(Math.random() * messages.length)]

  const metaItems = (home.metaItems || [])
    .map((m) => m.text)
    .filter((t): t is string => Boolean(t))

  return (
    <main className="view view--bottom frame">
      <div className="text-stack">
        <h1 className="title-xl">
          <span className="accent">{msg.titleAccent}</span>
          <br />
          {msg.titleRest}
        </h1>
        <p className="subtitle-xl">
          <span className="accent">{msg.descriptionAccent}</span> {msg.descriptionRest}
        </p>
        <p className="meta-line">
          {metaItems.length > 0 ? <TextLoop items={metaItems} /> : home.meta}
        </p>
      </div>

      <div className="btn-row">
        <Link className="btn btn--primary btn--w234" href="/proyectos" prefetch>
          {labels.verProyectos}
          <ArrowRight size={16} />
        </Link>
        <a className="btn btn--ghost btn--w208" href={`mailto:${email}`}>
          {labels.conversemos}
        </a>
      </div>

      <div className="contact-options">
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
        <a className="btn btn--ghost btn--w208" href={CV[locale]} download>
          {labels.descargarCV}
          <Download size={16} />
        </a>
      </div>
    </main>
  )
}
