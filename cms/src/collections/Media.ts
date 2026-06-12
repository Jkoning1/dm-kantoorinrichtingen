import path from 'path';
import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    staticURL: '/media',
    staticDir: process.env.MEDIA_DIR || path.resolve(process.cwd(), 'media'),
    adminThumbnail: 'thumbnail',
    // Schaal het originele bestand terug naar max. 2000px breed (kleinere bestanden,
    // kleine afbeeldingen worden niet opgeblazen) en sla het op als gecomprimeerde WebP.
    resizeOptions: {
      width: 2000,
      withoutEnlargement: true,
    },
    formatOptions: {
      format: 'webp',
      options: { quality: 82 },
    },
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre', formatOptions: { format: 'webp', options: { quality: 72 } } },
      { name: 'card', width: 800, height: 600, position: 'centre', formatOptions: { format: 'webp', options: { quality: 78 } } },
      { name: 'hero', width: 1920, height: 1080, position: 'centre', formatOptions: { format: 'webp', options: { quality: 80 } } },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
  ],
};
