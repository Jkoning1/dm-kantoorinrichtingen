import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
    { name: 'content', type: 'richText' },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        {
          slug: 'hero',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'subheading', type: 'textarea' },
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          slug: 'stats',
          fields: [
            {
              name: 'items',
              type: 'array',
              fields: [
                { name: 'value', type: 'text' },
                { name: 'label', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'textImage',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'text', type: 'richText' },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'imagePosition', type: 'select', options: ['left', 'right'] },
          ],
        },
      ],
    },
  ],
};
