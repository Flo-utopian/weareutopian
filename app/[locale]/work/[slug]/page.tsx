import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/client'
import { projectBySlugQuery, allSlugsQuery, type Project } from '@/sanity/queries'
import { urlFor } from '@/sanity/imageUrl'
import { Link } from '@/lib/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './casestudy.module.css'

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allSlugsQuery)
  return slugs.map(({ slug }) => ({ slug }))
}

const textOnBg = (bg: string) =>
  ['#F5AC48', '#F5D742'].includes(bg) ? '#1E1E1E' : '#FFFCEE'

export default async function CaseStudyPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string }
}) {
  const t = await getTranslations('casestudy')
  const project: Project | null = await client.fetch(projectBySlugQuery, { slug })

  if (!project) notFound()

  const fg = textOnBg(project.accentColor)
  const description =
    locale === 'fr' ? project.descriptionFr : project.descriptionEn

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        className={styles.hero}
        style={{ background: project.accentColor }}
      >
        {project.coverImage && (
          <Image
            src={urlFor(project.coverImage).width(2000).url()}
            alt={project.title}
            fill
            className={styles.coverImg}
            priority
          />
        )}
        <div className={styles.heroContent}>
          <p className={styles.meta} style={{ color: `${fg}80` }}>
            {project.client}
            {project.year ? ` — ${project.year}` : ''}
          </p>
          <h1 className={styles.projectTitle} style={{ color: fg }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className={styles.body}>
        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {/* Sections: Context + Approach — populated in Sanity */}
        {/* Gallery — populated in Sanity */}

        <Link href="/work" className={styles.backLink}>
          {t('back')}
        </Link>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
