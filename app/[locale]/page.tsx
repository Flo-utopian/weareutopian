import { client } from '@/sanity/client'
import { projectsQuery, type Project } from '@/sanity/queries'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import ContactStrip from '@/components/ContactStrip'
import Footer from '@/components/Footer'

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const projects: Project[] = await client.fetch(projectsQuery)

  return (
    <main>
      <Nav />
      <Hero locale={locale} />
      <ProjectGrid projects={projects} locale={locale} />
      <ContactStrip locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
