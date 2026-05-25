import { CollectionConfig } from 'payload/types';

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order', 'updatedAt'],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      admin: { description: 'Antwoord op de vraag (platte tekst)' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar', description: 'Sorteervolgorde op de pagina (laag getal = bovenaan)' },
    },
  ],
};
