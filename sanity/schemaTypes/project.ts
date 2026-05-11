import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'Campagne 360°', value: 'campaign' },
          { title: 'Motion Design', value: 'motion' },
          { title: 'Vidéo documentaire', value: 'video' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Année',
      type: 'number',
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage (1 = premier)',
      type: 'number',
    }),
    defineField({
      name: 'accentColor',
      title: 'Couleur de la carte',
      description: 'Couleur de fond utilisée si pas d\'image de couverture',
      type: 'string',
      options: {
        list: [
          { title: 'Violet', value: '#9B7BC8' },
          { title: 'Orange', value: '#F5AC48' },
          { title: 'Rose', value: '#E88AB9' },
          { title: 'Jaune', value: '#F5D742' },
          { title: 'Sombre', value: '#1E1E1E' },
        ],
        layout: 'radio',
      },
      initialValue: '#1E1E1E',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverVideo',
      title: 'Vidéo de couverture (URL Vimeo ou YouTube embed)',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Mettre en avant sur la home',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'descriptionFr',
      title: 'Description courte — FR',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Short description — EN',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contextFr',
      title: 'Contexte / Problématique — FR',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'contextEn',
      title: 'Context — EN',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'approachFr',
      title: 'Approche — FR',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'approachEn',
      title: 'Approach — EN',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie (images & vidéos)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryItem',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'videoUrl',
              title: 'URL vidéo (Vimeo/YouTube)',
              type: 'url',
            },
            {
              name: 'caption',
              title: 'Légende',
              type: 'string',
            },
          ],
          preview: {
            select: { title: 'caption', media: 'image' },
            prepare({ title, media }: any) {
              return { title: title || 'Élément galerie', media }
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'coverImage',
    },
  },
})
