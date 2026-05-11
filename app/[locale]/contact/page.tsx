import { getTranslations } from 'next-intl/server'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('contact')

  return (
    <main>
      <Nav />
      <section className={styles.page}>
        <h1 className={styles.title}>{t('title')}</h1>

        {/* Bio */}
        <div className={styles.block}>
          <p className={styles.label}>{t('bio_label')}</p>
          <p className={styles.bio}>{t('bio')}</p>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <div className={styles.linkBlock}>
            <p className={styles.label}>{t('email_label')}</p>
            <a
              href="mailto:flo@weareutopian.com"
              className={styles.linkValue}
              style={{ color: 'var(--purple)' }}
            >
              flo@weareutopian.com
            </a>
          </div>

          <div className={styles.linkBlock}>
            <p className={styles.label}>{t('linkedin_label')}</p>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkValue}
            >
              linkedin.com/in/floriandumont
            </a>
          </div>

          <div className={styles.linkBlock}>
            <p className={styles.label}>{t('phone_label')}</p>
            <a href="tel:+32" className={styles.linkValue}>
              +32 — à compléter
            </a>
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  )
}
