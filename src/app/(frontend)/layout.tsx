import React from 'react'
import { Poppins } from 'next/font/google'
import config from '@payload-config'
import { getPayload } from 'payload'
import { Chrome, type NavItem } from './components/Chrome'
import { getLocale } from './locale'
import './styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Hernany Acosta | Service & Product Designer',
  description:
    'De problemas complejos a productos reales. Conecto negocio, experiencia, diseño y tecnología para llevar productos digitales a producción.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings', locale })

  const items: NavItem[] = [
    { label: settings.menu?.systems || 'Inicio', href: '/' },
    { label: settings.menu?.selectedWork || 'Proyectos', href: '/proyectos' },
    { label: settings.menu?.approach || 'Enfoque', href: '/enfoque' },
    { label: settings.menu?.aboutMe || 'Sobre mí', href: '/sobre-mi' },
    { label: settings.menu?.contact || 'Contacto', href: '/contacto' },
  ]

  const year = new Date().getFullYear()
  const rights = locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'

  return (
    <html lang={locale} className={poppins.variable}>
      <body>
        <div className="shell">
          <Chrome
            items={items}
            locale={locale}
            openLabel={settings.menuOpen || 'Abrir menú'}
            closeLabel={settings.menuClose || 'Cerrar menú'}
          />
          {children}
          <footer className="footer frame">
            <p className="footer-copy">
              © {year} Hernany Acosta. <em>{rights}</em>
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
