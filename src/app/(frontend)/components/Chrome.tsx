'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export type NavItem = { label: string; href: string }

interface ChromeProps {
  items: NavItem[]
  locale: 'es' | 'en'
  openLabel: string
  closeLabel: string
}

export function Chrome({ items, locale, openLabel, closeLabel }: ChromeProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // El overlay se cierra solo cuando la ruta nueva ya montó (sin flash de la vista anterior)
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const setLang = (lang: 'es' | 'en') => {
    document.cookie = `lang=${lang};path=/;max-age=31536000`
    router.refresh()
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="topbar frame">
        <Link href="/" className="brand" aria-label="Home" prefetch>
          Hernany<em>Acosta</em>
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-label={openLabel}
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {open && (
        <div className="overlay" role="dialog" aria-modal="true">
          <div className="topbar">
            <Link href="/" className="brand" aria-label="Home" prefetch>
              H.
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-label={closeLabel}
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="overlay-nav">
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={`overlay-item${isActive(item.href) ? ' active' : ''}`}
                style={{ ['--d' as string]: `${60 + i * 60}ms` }}
                onClick={() => {
                  if (isActive(item.href)) setOpen(false)
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="overlay-lang">
            <button
              type="button"
              className={`lang-btn${locale === 'es' ? ' on' : ''}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={`lang-btn${locale === 'en' ? ' on' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </>
  )
}
