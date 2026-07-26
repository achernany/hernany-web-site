'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

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
      <header className="topbar">
        <div className="topbar-inner">
          <a href="/" className="brand" aria-label="Home">
            H.
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label={openLabel}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="overlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="overlay-close"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <nav className="overlay-nav">
            {items.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`overlay-item${isActive(item.href) ? ' active' : ''}`}
                style={{ ['--d' as string]: `${80 + i * 70}ms` }}
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
