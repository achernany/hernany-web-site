import React from 'react'
import { Poppins } from 'next/font/google'
import config from '@payload-config'
import { getPayload } from 'payload'
import { Chrome, type NavItem } from './components/Chrome'
import { getLocale } from './locale'
import '../globals.css'
import './styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
})

export const metadata = {
  metadataBase: new URL('https://www.hernanyacosta.com'),
  title: 'Hernany Acosta | Service & Product Designer',
  description:
    'De problemas complejos a productos reales. Conecto negocio, experiencia, diseño y tecnología para llevar productos digitales a producción.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Hernany Acosta | Service & Product Designer',
    description:
      'De problemas complejos a productos reales. Estrategia, sistemas y ejecución.',
    url: 'https://www.hernanyacosta.com',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
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

  const t = settings.theme
  const themeVars = {
    '--accent': t?.accent || '#6366F1',
    '--bg': t?.bg || '#eef0f2',
    '--ink': t?.ink || '#5f666f',
    '--muted': t?.muted || '#8a929c',
    '--hairline': t?.hairline || '#d9dde1',
  } as React.CSSProperties

  const year = new Date().getFullYear()
  const rights = locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'

  return (
    <html lang={locale} className={poppins.variable} style={themeVars}>
      <body>
        <svg className="goo-defs" aria-hidden="true" focusable="false">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
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
