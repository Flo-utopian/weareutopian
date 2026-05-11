import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/navigation'
import ProjectCard from './ProjectCard'
import type { Project } from '@/sanity/queries'
import styles from './ProjectGrid.module.css'

// Index positions that get the wide (full-width) treatment
const WIDE_POSITIONS = new Set([0, 5])

interface Props {
  projects: Project[]
  locale: string
  showAll?: boolean
}

export default async function ProjectGrid({ projects, locale, showAll }: Props) {
  const t = await getTranslations('work')

  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{t('selected')}</h2>
        {!showAll && (
          <Link href="/work" className={styles.allLink}>
            {t('all')}
          </Link>
        )}
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            locale={locale}
            wide={WIDE_POSITIONS.has(i)}
            voir={t('voir')}
          />
        ))}
      </div>
    </section>
  )
}
