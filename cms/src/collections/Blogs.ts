import { CollectionConfig } from 'payload/types';

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt', 'featured', 'category'],
    preview: (doc) => {
      const base = process.env.PAYLOAD_PUBLIC_FRONTEND_URL || 'http://localhost:5173';
      return doc.slug ? `${base}/blog/${doc.slug}` : null;
    },
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL-vriendelijke naam, bijv. ergonomie-tips-thuiswerken (geen spaties of hoofdletters)' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: { description: 'Korte samenvatting — zichtbaar op de overzichtspagina en gebruikt voor SEO' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Hoofdafbeelding van het artikel (aanbevolen: 1200×630px)' },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: { description: 'Volledige inhoud van het artikel' },
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'DM Kantoorinrichtingen',
      admin: { description: 'Naam van de auteur' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        description: 'Publicatiedatum',
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'category',
      type: 'text',
      admin: { description: 'Bijv. Ergonomie, Duurzaamheid, Trends, Hybride Werken' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Markeer als uitgelicht artikel' },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta titel',
          admin: { description: 'Max. 60 tekens — laat leeg om de artikeltitel te gebruiken' },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta beschrijving',
          admin: { description: 'Max. 160 tekens — laat leeg om de excerpt te gebruiken' },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG afbeelding',
          admin: { description: 'Social media preview afbeelding (1200×630px aanbevolen) — laat leeg om heroImage te gebruiken' },
        },
      ],
    },
  ],
};
