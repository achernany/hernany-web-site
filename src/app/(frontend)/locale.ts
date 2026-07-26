import { cookies } from 'next/headers'

export type Locale = 'es' | 'en'

export async function getLocale(): Promise<Locale> {
  const store = await cookies()
  return store.get('lang')?.value === 'en' ? 'en' : 'es'
}

export const ui = {
  es: {
    getInTouch: 'Escríbeme a',
    contactMe: 'Contáctame',
  },
  en: {
    getInTouch: 'Get in touch at',
    contactMe: 'Contact Me',
  },
} as const
