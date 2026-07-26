'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export type NavItem = { label: string; href: string }

interface ChromeProps {
  items: NavItem[]
  locale: 'es' | 'en'
  openLabel: string
  closeLabel: string
}

function Brand() {
  return (
    <a href="/" className="brand" aria-label="Home">
      Hernany<em>Acosta</em>
    </a>
  )
}

export function Chrome({ items, locale, openLabel, closeLabel }: ChromeProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

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
        <Brand />
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
            <Brand />
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
              <a
                key={item.href}
                href={item.href}
                className={`overlay-item${isActive(item.href) ? ' active' : ''}`}
                style={{ ['--d' as string]: `${60 + i * 60}ms` }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
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
