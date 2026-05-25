import { GlobalConfig } from 'payload/types';

export const HomeContent: GlobalConfig = {
  slug: 'home-content',
  label: 'Homepage & Over ons inhoud',
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroLabel', type: 'text', label: 'Tag boven de heading', defaultValue: 'Strategisch Kantooradviseur' },
            { name: 'heroHeading', type: 'text', label: 'Heading', required: true, defaultValue: 'Kantoorinrichtingen die uw team laten floreren' },
            { name: 'heroSubtitle', type: 'textarea', label: 'Subtekst', required: true, defaultValue: 'Gezonde, duurzame en toekomstbestendige werkomgevingen. Van strategisch advies tot complete realisatie.' },
            { name: 'heroPrimaryButtonLabel', type: 'text', label: 'Primaire button tekst', defaultValue: 'Plan een adviesgesprek' },
            { name: 'heroSecondaryButtonLabel', type: 'text', label: 'Secundaire button tekst', defaultValue: 'Bekijk onze projecten' },
          ],
        },
        {
          label: 'Afbeeldingen',
          fields: [
            {
              name: 'homeHeroImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero afbeelding (homepage)',
              admin: { description: 'Grote achtergrondafbeelding in de hero sectie van de homepage' },
            },
            {
              name: 'homeSustainabilityImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Duurzaamheid sectie afbeelding',
              admin: { description: 'Afbeelding naast de duurzaamheid tekst op de homepage' },
            },
            {
              name: 'aboutVisieImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Over ons — visie afbeelding',
              admin: { description: 'Afbeelding naast de visie tekst op de Over ons pagina' },
            },
          ],
        },
        {
          label: 'Onze aanpak',
          fields: [
            {
              name: 'aanpakSteps',
              type: 'array',
              label: 'Processtappen',
              fields: [
                { name: 'number', type: 'text', required: true, admin: { description: 'Bijv. 01' } },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
              defaultValue: [
                { number: '01', title: 'Kennismaking', description: 'We leren uw organisatie, werkwijze en ambities kennen in een vrijblijvend gesprek.' },
                { number: '02', title: 'Analyse', description: 'Grondig onderzoek naar ruimtegebruik, werkpatronen en behoeften van uw team.' },
                { number: '03', title: 'Concept', description: 'Een visueel en functioneel ontwerp dat uw identiteit en doelstellingen weerspiegelt.' },
                { number: '04', title: 'Realisatie', description: 'Strakke projectbegeleiding van levering en plaatsing tot nazorg.' },
                { number: '05', title: 'Oplevering', description: 'Uw nieuwe kantoor: op tijd, binnen budget, precies zoals besproken.' },
              ],
            },
          ],
        },
        {
          label: 'Duurzaamheid & Welzijn',
          fields: [
            { name: 'duurzaamheidLabel', type: 'text', label: 'Tag boven de heading', defaultValue: 'Onze belofte' },
            { name: 'duurzaamheidHeading', type: 'text', label: 'Heading', required: true, defaultValue: 'Duurzaam & gezond, dat is geen keuze maar een verplichting' },
            { name: 'duurzaamheidText', type: 'textarea', label: 'Tekst', required: true, defaultValue: 'Wij geloven dat gezonde werkplekken en duurzame materialenkeuzen hand in hand gaan. Elk project dat wij realiseren draagt bij aan een betere wereld én een gezonder team.' },
            {
              name: 'duurzaamheidChecklist',
              type: 'array',
              label: 'Checklist items',
              fields: [{ name: 'text', type: 'text', required: true }],
              defaultValue: [
                { text: 'Gecertificeerde ergonomische werkplekken' },
                { text: 'BREEAM & WELL certificering support' },
                { text: 'Circulair hergebruik van bestaand meubilair' },
                { text: 'CO₂-neutrale levering en installatie' },
                { text: 'Uitsluitend A-merk, duurzaam geproduceerd' },
              ],
            },
          ],
        },
        {
          label: 'Contact CTA',
          fields: [
            { name: 'contactCtaHeading', type: 'text', label: 'Heading', defaultValue: 'Laten we kennismaken' },
            { name: 'contactCtaText', type: 'textarea', label: 'Tekst', defaultValue: 'Vertel ons over uw ruimte en wensen. We plannen graag een vrijblijvend gesprek en denken direct mee over de mogelijkheden.' },
          ],
        },
        {
          label: 'Over ons',
          fields: [
            { name: 'aboutPageHeading', type: 'text', label: 'Pagina titel', defaultValue: 'Over DM Kantoorinrichtingen' },
            { name: 'aboutPageSubtitle', type: 'textarea', label: 'Pagina subtitel', defaultValue: 'Meer dan 25 jaar lang helpen wij organisaties een werkomgeving te creëren waar mensen écht in tot hun recht komen.' },
            { name: 'aboutVisieHeading', type: 'text', label: 'Visie heading', defaultValue: 'Een werkplek is meer dan vier muren en een bureau' },
            { name: 'companyDescription1', type: 'textarea', label: 'Bedrijfsbeschrijving alinea 1', defaultValue: 'Opgericht in 1999 door Dirk Martens vanuit een passie voor gezonde werkomgevingen, groeide DM Kantoorinrichtingen uit tot een toonaangevend adviesbureau voor kantoorinrichting in Nederland.' },
            { name: 'companyDescription2', type: 'textarea', label: 'Bedrijfsbeschrijving alinea 2', defaultValue: 'Wij combineren strategisch inzicht met oog voor detail. Van de eerste analyse tot de sleuteloverhandiging — wij zorgen dat elke ruimte bijdraagt aan de doelstellingen van uw organisatie en het welzijn van uw medewerkers.' },
            {
              name: 'waarden',
              type: 'array',
              label: 'Bedrijfswaarden',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
              defaultValue: [
                { title: 'Gezond werken', description: 'Wij geloven dat een gezonde werkplek de basis is voor een bloeiende organisatie.' },
                { title: 'Duurzaam denken', description: 'Elke keuze die wij maken weegt de impact op mens en milieu mee.' },
                { title: 'Eerlijk advies', description: 'Wij adviseren wat écht past bij uw organisatie, niet wat het meest lucratief is.' },
                { title: 'Lange termijn', description: 'We bouwen relaties voor de lange termijn, niet voor een eenmalig project.' },
              ],
            },
            { name: 'aboutTeamHeading', type: 'text', label: 'Team sectie titel', defaultValue: 'De mensen achter DM' },
            { name: 'aboutTeamSubtitle', type: 'textarea', label: 'Team sectie subtitel', defaultValue: 'Een gedreven team van specialisten met hart voor gezonde, duurzame werkomgevingen.' },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoHomeTitle',
              type: 'text',
              label: 'Homepage — Meta titel',
              defaultValue: 'DM Kantoorinrichtingen — Professionele Kantoorinrichting',
              admin: { description: 'Zichtbaar in de browser tab en Google zoekresultaten (max. 60 tekens)' },
            },
            {
              name: 'seoHomeDescription',
              type: 'textarea',
              label: 'Homepage — Meta beschrijving',
              defaultValue: 'Meer dan 25 jaar ervaring in professionele kantoorinrichting. Van strategisch advies tot complete inrichting. Gevestigd in Buurmalsen, actief door heel Nederland.',
              admin: { description: 'Korte beschrijving in Google zoekresultaten (max. 160 tekens)' },
            },
            {
              name: 'seoAboutTitle',
              type: 'text',
              label: 'Over ons — Meta titel',
              defaultValue: 'Over Ons | DM Kantoorinrichtingen',
            },
            {
              name: 'seoAboutDescription',
              type: 'textarea',
              label: 'Over ons — Meta beschrijving',
              defaultValue: 'Leer meer over DM Kantoorinrichtingen — meer dan 25 jaar toonaangevend in gezonde, duurzame kantoorinrichting. Ontmoet ons team van specialisten.',
            },
          ],
        },
      ],
    },
  ],
};
