import { CollectionConfig } from 'payload/types';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
    preview: (doc) => {
      const base = process.env.PAYLOAD_PUBLIC_FRONTEND_URL || 'http://localhost:5173';
      return doc.slug ? `${base}/diensten/${doc.slug}` : null;
    },
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: { description: 'Korte beschrijving voor overzichtspagina' },
    },
    {
      name: 'icon',
      type: 'select',
      options: ['Users', 'MessageSquare', 'Heart', 'Leaf', 'ShieldCheck', 'Monitor', 'Layout', 'Pencil', 'Hammer', 'Lightbulb', 'Target', 'Zap'],
      required: true,
      admin: { description: 'Lucide icon naam' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Hoofdafbeelding van de dienst (verplicht voor weergave)' },
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Fotogalerij',
      admin: { description: 'Extra afbeeldingen voor de carousel en galerij' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      admin: { description: 'Volledige inhoud van de dienst detail pagina' },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: ['Layout', 'Pencil', 'Hammer', 'ShieldCheck', 'Lightbulb', 'Target', 'Zap', 'Heart', 'Users', 'Monitor', 'Leaf'],
        },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
      admin: { description: 'Lijst met voordelen voor sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar', description: 'Sorteervolgorde op overzichtspagina' },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: { position: 'sidebar', description: 'Laat leeg om de standaard paginatitel te gebruiken' },
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta titel', admin: { description: 'Max. 60 tekens' } },
        { name: 'metaDescription', type: 'textarea', label: 'Meta beschrijving', admin: { description: 'Max. 160 tekens' } },
      ],
    },
  ],
};
