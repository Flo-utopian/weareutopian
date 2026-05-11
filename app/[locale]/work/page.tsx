import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/client'
import { projectsQuery, type Project } from '@/sanity/queries'
import Nav from '@/components/Nav'
import ProjectGrid from '@/components/ProjectGrid'
import Footer from '@/components/Footer'
import styles from './work.module.css'

export default async function WorkPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('work')
  const projects: Project[] = await client.fetch(projectsQuery)

  return (
    <main>
      <Nav />
      <header className={styles.header}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.tagline}>{t('tagline')}</p>
      </header>
      <ProjectGrid projects={projects} locale={locale} showAll />
      <Footer locale={locale} />
    </main>
  )
}
