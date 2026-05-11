'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter, Link } from '@/lib/navigation'
import Logo from './Logo'
import styles from './Nav.module.css'

export default function Nav() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = () => {
    const next = locale === 'fr' ? 'en' : 'fr'
    router.replace(pathname, { locale: next })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logoLink}>
        <Logo size={2} />
      </Link>
      <div className={styles.links}>
        <Link href="/work" className={styles.link}>
          {t('work')}
        </Link>
        <Link href="/contact" className={styles.link}>
          {t('contact')}
        </Link>
        <button className={styles.langBtn} onClick={switchLocale}>
          {locale === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </nav>
  )
}
