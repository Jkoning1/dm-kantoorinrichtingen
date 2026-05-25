import { CollectionConfig } from 'payload/types';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
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
          options: ['Layout', 'Pencil', 'Hammer', 'ShieldCheck', 'Lightbulb', 'Target', 'Zap', 'Heart', 'Users', 'Monitor'],
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
  ],
};
