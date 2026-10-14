import { buildConfig } from 'payload/config';
import path from 'path';
import { Projects } from './collections/Projects';
import { Services } from './collections/Services';
import { Sectors } from './collections/Sectors';
import { Media } from './collections/Media';
import { TeamMembers } from './collections/TeamMembers';
import { FAQ } from './collections/FAQ';
import { Blogs } from './collections/Blogs';
import { SiteSettings } from './globals/SiteSettings';
import { HomeContent } from './globals/HomeContent';
import { Navigation } from './globals/Navigation';

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://www.dmkantoorinrichtingen.nl',
  'https://dmkantoorinrichtingen.nl',
  'https://dm-kantoorinrichtingen-production.up.railway.app',
  process.env.FRONTEND_URL || '',
  process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
].filter(Boolean) as string[];

export default buildConfig({
  // Leeg in de admin-build → admin gebruikt relatieve /api-paden en werkt op elk domein
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',

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
    Blogs,
    Media,
    TeamMembers,
    FAQ,
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [],
    },
  ],

  globals: [SiteSettings, HomeContent, Navigation],

  cors: allowedOrigins,

  csrf: allowedOrigins,

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
