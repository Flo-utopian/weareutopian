import { groq } from 'next-sanity'

export type Project = {
  _id: string
  title: string
  slug: { current: string }
  client?: string
  category: 'campaign' | 'motion' | 'video'
  year?: number
  accentColor: string
  coverImage?: { asset: { _ref: string }; hotspot?: any }
  coverVideo?: string
  featured?: boolean
  order?: number
  descriptionFr?: string
  descriptionEn?: string
  contextFr?: any[]
  contextEn?: any[]
  approachFr?: any[]
  approachEn?: any[]
  gallery?: {
    _key: string
    image?: { asset: { _ref: string } }
    videoUrl?: string
    caption?: string
  }[]
}

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id, title, slug, client, category,
    year, accentColor, coverImage, featured, order,
    descriptionFr, descriptionEn
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id, title, slug, client, category,
    year, accentColor, coverImage, coverVideo,
    descriptionFr, descriptionEn,
    contextFr, contextEn,
    approachFr, approachEn,
    gallery
  }
`

export const allSlugsQuery = groq`
  *[_type == "project"] { "slug": slug.current }
`
