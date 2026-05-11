import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/navigation'
import Logo from './Logo'
import styles from './Footer.module.css'

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations('footer')

  return (
    <footer className={styles.footer}>
      <Link href="/" aria-label="Retour à l'accueil">
        <Logo size={1.6} />
      </Link>
      <span className={styles.copy}>{t('copy')}</span>
      <nav className={styles.socials} aria-label="Réseaux sociaux">
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          Instagram
        </a>
      </nav>
    </footer>
  )
}
