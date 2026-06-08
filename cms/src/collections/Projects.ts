import { CollectionConfig } from 'payload/types';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sector', 'featured', 'updatedAt'],
    preview: (doc) => {
      const base = process.env.PAYLOAD_PUBLIC_FRONTEND_URL || 'http://localhost:5173';
      return doc.slug ? `${base}/projecten/${doc.slug}` : null;
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
      admin: { position: 'sidebar' },
    },
    {
      name: 'sector',
      type: 'relationship',
      relationTo: 'sectors',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Hoofdafbeelding van het project (verplicht voor weergave)' },
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'Korte beschrijving voor overzichtspagina (max 200 tekens)' },
    },
    {
      name: 'challenge',
      type: 'richText',
      admin: { description: 'De uitdaging / vraag van de klant' },
    },
    {
      name: 'solution',
      type: 'richText',
      admin: { description: 'Onze aanpak en oplossing' },
    },
    {
      name: 'result',
      type: 'richText',
      admin: { description: 'Het behaalde resultaat' },
    },
    {
      name: 'specs',
      type: 'group',
      fields: [
        { name: 'size', type: 'text', admin: { description: 'Bijv. 2.400 m²' } },
        { name: 'duration', type: 'text', admin: { description: 'Bijv. 12 weken' } },
        { name: 'workplaces', type: 'text', admin: { description: 'Bijv. 180 werkplekken' } },
        { name: 'year', type: 'number' },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'author', type: 'text' },
        { name: 'role', type: 'text' },
      ],
    },
    {
      name: 'resultMetric',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', admin: { description: 'Bijv. "Hogere medewerkerstevredenheid"' } },
        { name: 'value', type: 'text', admin: { description: 'Bijv. "40%"' } },
      ],
    },
    {
      name: 'productGallery',
      type: 'array',
      label: 'Productgalerij',
      admin: {
        description: 'Producten gebruikt in dit project — worden getoond op lichtgrijze achtergrond. Gebruik renders vanuit hetzelfde perspectief voor een consistente uitstraling.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Productafbeelding',
          admin: { description: 'Vrijstaand product op transparante of witte achtergrond aanbevolen' },
        },
        { name: 'name', type: 'text', required: true, label: 'Productnaam' },
        { name: 'brand', type: 'text', label: 'Merk / fabrikant' },
        { name: 'description', type: 'text', label: 'Korte omschrijving (optioneel)' },
      ],
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
