import { CollectionConfig } from 'payload/types';

export const Sectors: CollectionConfig = {
  slug: 'sectors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    description: 'Sectoren voor projectcategorisering',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Sectornaam',
    },
  ],
};
