import React from 'react'
import { Poppins } from 'next/font/google'
import config from '@payload-config'
import { getPayload } from 'payload'
import { Chrome, type NavItem } from './components/Chrome'
import { getLocale } from './locale'
import { LINKS } from './links'
import './styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Hernany Acosta | Service & Product Designer',
  description:
    'Service & Product Designer specialized in regulated, transactional UX systems—bridging business rules, design systems, and frontend-ready delivery.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale })

  const items: NavItem[] = [
    { label: settings.menu?.systems || 'Systems', href: '/' },
    { label: settings.menu?.approach || 'Approach', href: '/approach' },
    { label: settings.menu?.selectedWork || 'Selected Work', href: '/selected-works' },
    { label: settings.menu?.contact || 'Contact', href: '/contact' },
  ]

  return (
    <html lang={locale} className={poppins.variable}>
      <body>
        <div className="shell">
          <Chrome
            items={items}
            locale={locale}
            openLabel={settings.menuOpen || 'Open menu'}
            closeLabel={settings.menuClose || 'Close menu'}
          />
          {children}
          <footer className="footer">
            <div className="footer-inner">
              <nav className="footer-nav">
                {items.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
              <span className="footer-copy">{settings.copyright}</span>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
