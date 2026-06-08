import { GlobalConfig } from 'payload/types';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigatie',
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hoofdnavigatie',
          fields: [
            {
              name: 'navItems',
              type: 'array',
              label: 'Menu-items (topbalk)',
              admin: { description: 'Sleep om de volgorde aan te passen. Interne links beginnen met /, externe links met https://' },
              fields: [
                { name: 'label', type: 'text', required: true, label: 'Tekst' },
                { name: 'href', type: 'text', required: true, label: 'URL', admin: { description: 'Bijv. /projecten of https://external.com' } },
                { name: 'openInNewTab', type: 'checkbox', defaultValue: false, label: 'Open in nieuw tabblad' },
              ],
              defaultValue: [
                { label: 'Projecten', href: '/projecten' },
                { label: 'Diensten', href: '/diensten' },
                { label: 'Over ons', href: '/over-ons' },
                { label: 'Showroom', href: '/showroom' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              name: 'ctaLabel',
              type: 'text',
              label: 'CTA knop tekst',
              defaultValue: 'Adviesgesprek',
              admin: { description: 'Tekst op de oranje knop rechts in de topbalk' },
            },
            {
              name: 'ctaHref',
              type: 'text',
              label: 'CTA knop URL',
              defaultValue: '/contact',
              admin: { description: 'Bijv. /contact' },
            },
          ],
        },
        {
          label: 'Footer navigatie',
          fields: [
            {
              name: 'footerNavItems',
              type: 'array',
              label: 'Footer menu-items',
              admin: { description: 'Navigatielinks in de footer. Sleep om de volgorde aan te passen.' },
              fields: [
                { name: 'label', type: 'text', required: true, label: 'Tekst' },
                { name: 'href', type: 'text', required: true, label: 'URL' },
                { name: 'openInNewTab', type: 'checkbox', defaultValue: false, label: 'Open in nieuw tabblad' },
              ],
              defaultValue: [
                { label: 'Projecten', href: '/projecten' },
                { label: 'Diensten', href: '/diensten' },
                { label: 'Over ons', href: '/over-ons' },
                { label: 'Showroom', href: '/showroom' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
