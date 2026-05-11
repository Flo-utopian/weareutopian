import Image from 'next/image'
import { Link } from '@/lib/navigation'
import { urlFor } from '@/sanity/imageUrl'
import type { Project } from '@/sanity/queries'
import styles from './ProjectCard.module.css'

const catLabels: Record<string, Record<string, string>> = {
  campaign: { fr: 'Campagne 360°', en: '360° Campaign' },
  motion:   { fr: 'Motion Design',  en: 'Motion Design' },
  video:    { fr: 'Vidéo documentaire', en: 'Documentary' },
}

const lightBgs = ['#F5AC48', '#F5D742']
const textColor = (bg: string) =>
  lightBgs.includes(bg) ? '#1E1E1E' : '#FFFCEE'

interface Props {
  project: Project
  locale: string
  wide?: boolean
  voir: string
}

export default function ProjectCard({ project, locale, wide = false, voir }: Props) {
  const fg = textColor(project.accentColor)
  const cat = catLabels[project.category]?.[locale] ?? project.category
  const catAlpha = fg === '#FFFCEE' ? 'rgba(255,252,238,0.45)' : 'rgba(30,30,30,0.38)'
  const overlayAlpha = fg === '#FFFCEE' ? 'rgba(255,252,238,0.8)' : 'rgba(30,30,30,0.6)'

  return (
    <Link
      href={`/work/${project.slug.current}`}
      className={`${styles.card} ${wide ? styles.wide : ''}`}
    >
      {/* Background block — this element zooms on hover */}
      <div className={styles.bg} style={{ background: project.accentColor }}>
        {project.coverImage && (
          <Image
            src={urlFor(project.coverImage).width(1200).url()}
            alt={project.title}
            fill
            className={styles.img}
            sizes={wide ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
          />
        )}
      </div>

      {/* Text content — stays in place while bg zooms */}
      <div className={styles.content}>
        <span className={styles.cat} style={{ color: catAlpha }}>
          {cat}
        </span>
        <h3 className={styles.title} style={{ color: fg }}>
          {project.title}
        </h3>
      </div>

      {/* Hover CTA arrow */}
      <span className={styles.cta} style={{ color: overlayAlpha }}>
        {voir}
      </span>
    </Link>
  )
}
