import path from 'path';
import sharp from 'sharp';
import { CollectionConfig } from 'payload/types';

const MAX_PX = 1920;
const JPEG_QUALITY = 82;

async function compressImage(buffer: Buffer, mimetype: string): Promise<Buffer> {
  const base = sharp(buffer).resize({
    width: MAX_PX,
    height: MAX_PX,
    fit: 'inside',
    withoutEnlargement: true,
  });
  if (mimetype === 'image/png') return base.png({ compressionLevel: 8, quality: 80 }).toBuffer();
  if (mimetype === 'image/webp') return base.webp({ quality: JPEG_QUALITY }).toBuffer();
  return base.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  hooks: {
    beforeOperation: [
      async ({ operation, args }) => {
        if ((operation === 'create' || operation === 'update') && args.req?.files?.file) {
          const file = args.req.files.file as any;
          const mime: string = file.mimetype || '';
          const skip = !mime.startsWith('image/') || mime === 'image/svg+xml' || mime === 'image/gif';
          if (!skip && Buffer.isBuffer(file.data)) {
            try {
              const compressed = await compressImage(file.data, mime);
              file.data = compressed;
              file.size = compressed.length;
            } catch {
              // leave original unchanged on error
            }
          }
        }
        return args;
      },
    ],
  },
  upload: {
    staticURL: '/media',
    staticDir: path.resolve(process.cwd(), 'media'),
    adminThumbnail: 'thumbnail',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 800, height: 600, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
  ],
};
