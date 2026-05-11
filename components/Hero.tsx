import { getTranslations } from 'next-intl/server'
import styles from './Hero.module.css'

export default async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations('hero')

  return (
    <section className={styles.hero}>
      {/* Decorative elements */}
      <svg className={styles.star1} width="60" height="60" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 0L17.5 14.5L32 16L17.5 17.5L16 32L14.5 17.5L0 16L14.5 14.5Z"
          fill="var(--pink)"
        />
      </svg>
      <div className={styles.dot1} aria-hidden="true" />
      <div className={styles.dot2} aria-hidden="true" />
      <svg className={styles.star2} width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 0L17.5 14.5L32 16L17.5 17.5L16 32L14.5 17.5L0 16L14.5 14.5Z"
          fill="var(--orange)"
        />
      </svg>

      {/* Giant FLO */}
      <div className={styles.flo} aria-label="FLO">
        <span className={styles.f}>F</span>
        <span className={styles.l}>L</span>
        <span className={styles.o}>O</span>
      </div>

      {/* Sub name */}
      <p className={styles.subname}>RIAN DUMONT</p>

      {/* Baseline */}
      <p className={styles.baseline}>
        {t('b1')}
        <br />
        {t('b2')}
        <br />
        <em className={styles.em}>{t('b3')}</em>
      </p>

      {/* Scroll indicator */}
      <div className={styles.scrollWrap} aria-hidden="true">
        <span className={styles.scrollLabel}>{t('scroll')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
