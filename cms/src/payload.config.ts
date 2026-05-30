import { buildConfig } from 'payload/config';
import path from 'path';
import { Projects } from './collections/Projects';
import { Services } from './collections/Services';
import { Sectors } from './collections/Sectors';
import { Media } from './collections/Media';
import { TeamMembers } from './collections/TeamMembers';
import { Pages } from './collections/Pages';
import { FAQ } from './collections/FAQ';
import { SiteSettings } from './globals/SiteSettings';
import { HomeContent } from './globals/HomeContent';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',

  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— DM Kantoorinrichtingen CMS',
    },
  },

  collections: [
    Sectors,
    Projects,
    Services,
    Media,
    TeamMembers,
    Pages,
    FAQ,
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [],
    },
  ],

  globals: [SiteSettings, HomeContent],

  cors: [
    'http://localhost:3000',
    'http://localhost:5173',
    process.env.FRONTEND_URL || '',
  ].filter(Boolean) as string[],

  csrf: [
    'http://localhost:3000',
    'http://localhost:5173',
    process.env.FRONTEND_URL || '',
  ].filter(Boolean) as string[],

  upload: {
    limits: {
      fileSize: 10_000_000,
    },
  },

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  graphQL: {
    disable: true,
  },
});
