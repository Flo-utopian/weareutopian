import { getTranslations } from 'next-intl/server'
import styles from './ContactStrip.module.css'

export default async function ContactStrip({ locale }: { locale: string }) {
  const t = await getTranslations('contact')

  return (
    <section className={styles.section}>
      <div className={styles.strip}>
        <div>
          <p className={styles.question}>{t('question')}</p>
          <a href="mailto:flo@weareutopian.com" className={styles.email}>
            flo@<br />weareutopian.com
          </a>
        </div>
        <a href="mailto:flo@weareutopian.com" className={styles.cta}>
          {t('cta')}
        </a>
      </div>
    </section>
  )
}
