import { CollectionConfig } from 'payload/types';

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Profielfoto van het teamlid (verplicht voor weergave)' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar', description: 'Sorteervolgorde in teamgrid' },
    },
  ],
};
