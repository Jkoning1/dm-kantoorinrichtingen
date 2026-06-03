import { GlobalConfig } from 'payload/types';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site-instellingen',
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contact',
          fields: [
            { name: 'address', type: 'text', label: 'Straat + huisnummer', required: true, defaultValue: 'Haagse uitweg 1A' },
            { name: 'addressCity', type: 'text', label: 'Postcode + stad', required: true, defaultValue: '4021 GB Buurmalsen' },
            { name: 'phone', type: 'text', label: 'Telefoonnummer (weergave)', required: true, defaultValue: '+31 (0)345 61 23 45', admin: { description: 'Bijv. +31 (0)345 61 23 45' } },
            { name: 'phoneHref', type: 'text', label: 'Telefoonnummer (voor bel-link)', required: true, defaultValue: 'tel:+31345612345', admin: { description: 'Bijv. tel:+31345612345 (geen spaties)' } },
            { name: 'email', type: 'email', required: true, defaultValue: 'info@dmkantoorinrichtingen.nl' },
            { name: 'mapsUrl', type: 'text', label: 'Google Maps URL', defaultValue: 'https://maps.google.com/?q=Haagse+uitweg+1A,+4021+GB+Buurmalsen' },
            {
              name: 'openingHours',
              type: 'array',
              label: 'Openingstijden',
              fields: [
                { name: 'day', type: 'text', required: true, admin: { description: 'Bijv. Maandag – vrijdag' } },
                { name: 'hours', type: 'text', required: true, admin: { description: 'Bijv. 09:00 – 17:30 of Gesloten' } },
              ],
              defaultValue: [
                { day: 'Maandag – vrijdag', hours: '09:00 – 17:30' },
                { day: 'Zaterdag', hours: '10:00 – 16:00' },
                { day: 'Zondag', hours: 'Gesloten' },
              ],
            },
            {
              name: 'seoContactTitle',
              type: 'text',
              label: 'Contact pagina — Meta titel',
              defaultValue: 'Contact | DM Kantoorinrichtingen',
              admin: { description: 'SEO titel voor de contactpagina' },
            },
            {
              name: 'seoContactDescription',
              type: 'textarea',
              label: 'Contact pagina — Meta beschrijving',
              defaultValue: 'Neem contact op met DM Kantoorinrichtingen. Bezoek onze showroom in Buurmalsen of stuur ons een bericht voor een vrijblijvend adviesgesprek.',
            },
          ],
        },
        {
          label: 'Social media',
          fields: [
            { name: 'socialLinkedin', type: 'text', label: 'LinkedIn URL', admin: { description: 'Volledige URL bijv. https://linkedin.com/company/...' } },
            { name: 'socialInstagram', type: 'text', label: 'Instagram URL' },
            { name: 'socialFacebook', type: 'text', label: 'Facebook URL' },
          ],
        },
        {
          label: 'Statistieken',
          fields: [
            {
              name: 'stats',
              type: 'array',
              label: 'Statistieken (zichtbaar op homepage)',
              fields: [
                { name: 'value', type: 'text', required: true, admin: { description: 'Bijv. 500+' } },
                { name: 'label', type: 'text', required: true, admin: { description: 'Bijv. Projecten gerealiseerd' } },
              ],
              defaultValue: [
                { value: '500+', label: 'Projecten gerealiseerd' },
                { value: '25+', label: 'Jaar ervaring' },
                { value: '9.2', label: 'Klantwaardering' },
                { value: '100%', label: 'Circulair inzicht' },
              ],
            },
          ],
        },
        {
          label: 'Showroom USPs',
          fields: [
            {
              name: 'showroomUSPs',
              type: 'array',
              label: 'Showroom voordelen',
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  options: ['Sofa', 'Eye', 'Award', 'Leaf', 'Star', 'Heart', 'ShieldCheck', 'Zap', 'Building', 'Users', 'Target', 'Lightbulb', 'Hammer', 'Monitor', 'MapPin', 'Package', 'CheckCircle', 'Clock'],
                  required: true,
                  admin: { description: 'Lucide icon naam' },
                },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
              defaultValue: [
                { icon: 'Sofa', title: '500+ merken uitgestald', description: 'De grootste collectie kantoormeubelen van Nederland onder één dak.' },
                { icon: 'Eye', title: 'Inspirerende sfeerhoeken', description: 'Ervaar zelf hoe verschillende inrichtingsstijlen aanvoelen in de praktijk.' },
                { icon: 'Award', title: 'Gecertificeerde ergonomen', description: 'Persoonlijk advies van onze gecertificeerde werkplekergonomen.' },
                { icon: 'Leaf', title: 'Duurzame collectie', description: 'Uitsluitend circulaire en verantwoord geproduceerde meubelcollecties.' },
              ],
            },
          ],
        },
        {
          label: 'Showroom pagina',
          fields: [
            { name: 'showroomPageHeading', type: 'text', label: 'Pagina titel', defaultValue: 'Onze showroom in Buurmalsen' },
            { name: 'showroomPageSubtitle', type: 'textarea', label: 'Pagina subtitel', defaultValue: 'Kom langs en laat u inspireren. Meer dan 2.000 m² aan kantoorinrichting op één locatie, midden in het Rivierenland.' },
            { name: 'showroomSectionHeading', type: 'text', label: 'Sectie heading', defaultValue: 'Waarom onze showroom bezoeken?' },
            { name: 'showroomCtaHeading', type: 'text', label: 'CTA heading', defaultValue: 'Plan uw bezoek aan de showroom' },
            { name: 'showroomCtaText', type: 'textarea', label: 'CTA tekst', defaultValue: 'Maak een afspraak voor een persoonlijk rondleiding met één van onze adviseurs.' },
            {
              name: 'showroomImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Showroom afbeelding',
              admin: { description: 'Grote foto van de showroom (rechts naast de USPs)' },
            },
            {
              name: 'seoShowroomTitle',
              type: 'text',
              label: 'Showroom — Meta titel',
              defaultValue: 'Showroom Buurmalsen | DM Kantoorinrichtingen',
            },
            {
              name: 'seoShowroomDescription',
              type: 'textarea',
              label: 'Showroom — Meta beschrijving',
              defaultValue: 'Bezoek onze showroom in Buurmalsen — meer dan 2.000 m² kantoorinrichting. Laat u inspireren en ontvang persoonlijk advies van onze ergonomen.',
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            { name: 'footerDescription', type: 'textarea', label: 'Beschrijving in footer', required: true, defaultValue: 'Strategisch adviseur voor gezonde, duurzame en toekomstbestendige kantoorinrichtingen. Al meer dan 25 jaar de partner voor inspirerende werkomgevingen.' },
          ],
        },
        {
          label: 'Logo & Huisstijl',
          fields: [
            {
              name: 'logoDesktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo (desktop navigatie)',
              admin: { description: 'Logo voor de navigatiebalk op desktop. Aanbevolen: SVG of transparante PNG, max. 200px breed × 60px hoog.' },
            },
            {
              name: 'logoMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo (mobiele navigatie)',
              admin: { description: 'Logo voor de navigatiebalk op mobiel — laat leeg om het desktop-logo ook mobiel te gebruiken. Tip: gebruik een vierkant icoon-logo voor betere leesbaarheid op klein scherm.' },
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
              label: 'Favicon',
              admin: { description: 'Browser-tabblad icoon (.ico, .png of .svg). Aanbevolen formaat: 32×32px of 64×64px.' },
            },
          ],
        },
        {
          label: 'Klanten',
          fields: [
            {
              name: 'clientLogos',
              type: 'array',
              label: "Klantlogo's (zichtbaar op homepage)",
              admin: { description: "Logo's worden in grijswaarden getoond en kleuren op hover. Sleep om de volgorde aan te passen." },
              fields: [
                { name: 'name', type: 'text', required: true, label: 'Bedrijfsnaam' },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Logo afbeelding',
                  admin: { description: 'Transparante PNG of SVG aanbevolen — wit of gekleurd logo op transparante achtergrond' },
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Website URL (optioneel)',
                  admin: { description: 'Bijv. https://example.com — maakt het logo klikbaar' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
