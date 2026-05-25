/**
 * Seed script — vult de database met voorbeeld content.
 * Gebruik: npm run seed
 */

import dotenv from 'dotenv';
dotenv.config();

import payload from 'payload';

const seedProjects = [
  {
    title: 'Hoofdkantoor TechForward Amsterdam',
    slug: 'techforward-amsterdam',
    sector: 'Technologie',
    featured: true,
    summary: 'Volledige herinrichting van 3.200 m² voor een snelgroeiend technologiebedrijf, met focus op collaboratief werken en welzijn van medewerkers.',
    specs: { size: '3.200 m²', duration: '14 weken', workplaces: '240 werkplekken', year: 2024 },
    testimonial: {
      quote: 'DM Kantoorinrichtingen heeft onze visie op de toekomst van werk perfect vertaald naar een ruimte die onze teams inspireert en motiveert.',
      author: 'Jeroen van der Berg',
      role: 'CEO TechForward',
    },
    resultMetric: { label: 'Hogere medewerkerstevredenheid', value: '43%' },
  },
  {
    title: 'Zorgcentrum De Linde Utrecht',
    slug: 'zorgcentrum-de-linde',
    sector: 'Zorg',
    featured: true,
    summary: 'Ergonomische herinrichting van kantoor- en spreekkamers voor een modern zorgcentrum, met aandacht voor patiëntcomfort en werkpleggezondheid.',
    specs: { size: '1.800 m²', duration: '8 weken', workplaces: '95 werkplekken', year: 2024 },
    testimonial: {
      quote: 'Onze medewerkers zijn veel gezonder en gelukkiger op het werk. De ergonomische werkplekken hebben het ziekteverzuim al in het eerste kwartaal merkbaar teruggebracht.',
      author: 'Dr. Sandra Visser',
      role: 'Directeur De Linde',
    },
    resultMetric: { label: 'Reductie ziekteverzuim', value: '31%' },
  },
  {
    title: 'Advocatenkantoor Vermeer & Partners Den Haag',
    slug: 'vermeer-partners-den-haag',
    sector: 'Zakelijke Dienstverlening',
    featured: false,
    summary: 'Premium kantoorinrichting voor een gerenommeerd advocatenkantoor, waarbij traditie en moderniteit hand in hand gaan.',
    specs: { size: '950 m²', duration: '6 weken', workplaces: '55 werkplekken', year: 2023 },
    testimonial: {
      quote: 'De sfeer van ons nieuwe kantoor straalt precies de professionaliteit en betrouwbaarheid uit die wij onze cliënten willen bieden.',
      author: 'Mr. Eline Vermeer',
      role: 'Managing Partner',
    },
    resultMetric: { label: 'Hogere klanttevredenheid', value: '28%' },
  },
  {
    title: 'Hogeschool Horizon Rotterdam',
    slug: 'hogeschool-horizon-rotterdam',
    sector: 'Onderwijs',
    featured: false,
    summary: 'Flexibele en inspirerende inrichting van docenten- en administratieve werkruimtes voor een toonaangevende hogeschool.',
    specs: { size: '2.100 m²', duration: '10 weken', workplaces: '180 werkplekken', year: 2023 },
    testimonial: {
      quote: 'De nieuwe werkruimtes stimuleren samenwerking tussen docenten en hebben onze administratieve processen enorm verbeterd.',
      author: 'Petra Konings',
      role: 'Rector Hogeschool Horizon',
    },
    resultMetric: { label: 'Productiviteitsverbetering', value: '37%' },
  },
];

const seedServices = [
  {
    title: 'Strategisch Advies',
    slug: 'strategisch-advies',
    shortDescription: 'We analyseren uw werkcultuur, doelstellingen en ruimte om een integraal inrichtingsplan te maken dat uw organisatie écht vooruit helpt.',
    icon: 'Target',
    order: 1,
  },
  {
    title: 'Ergonomisch Ontwerp',
    slug: 'ergonomisch-ontwerp',
    shortDescription: 'Gezonde werkplekken die ziekteverzuim verminderen en productiviteit verhogen. Wij zijn gecertificeerde ergonomie-adviseurs.',
    icon: 'Heart',
    order: 2,
  },
  {
    title: 'Interieurdesign',
    slug: 'interieurdesign',
    shortDescription: 'Van concept tot realisatie: wij ontwerpen kantooromgevingen die uw merkidentiteit versterken en medewerkers inspireren.',
    icon: 'Pencil',
    order: 3,
  },
  {
    title: 'Projectinrichting',
    slug: 'projectinrichting',
    shortDescription: 'Volledige levering en plaatsing van kantoormeubilair van top-A-merken, met garantie en nazorg voor de lange termijn.',
    icon: 'Hammer',
    order: 4,
  },
  {
    title: 'Duurzaamheid & Circulariteit',
    slug: 'duurzaamheid-circulariteit',
    shortDescription: 'Wij helpen u een kantooromgeving te creëren die bijdraagt aan uw ESG-doelstellingen en CO₂-reductie.',
    icon: 'Leaf',
    order: 5,
  },
  {
    title: 'Hybride Werkplek',
    slug: 'hybride-werkplek',
    shortDescription: 'Flexibele kantooromgevingen die optimaal werken voor thuiswerkers, deeltijdmedewerkers en internationale teams.',
    icon: 'Monitor',
    order: 6,
  },
];

const seedTeamMembers = [
  { name: 'Dirk Martens', role: 'Oprichter & Directeur', order: 1 },
  { name: 'Lisa van den Berg', role: 'Senior Interieurdesigner', order: 2 },
  { name: 'Mark Jansen', role: 'Ergonomie Specialist', order: 3 },
  { name: 'Sophie de Groot', role: 'Projectmanager', order: 4 },
];

const seedFAQ = [
  {
    question: 'Hoe lang duurt een kantoorinrichtingsproject gemiddeld?',
    answer: 'De doorlooptijd hangt sterk af van de schaal van het project. Een kleinere inrichting van 200–500 m² realiseren wij doorgaans in 4 tot 6 weken. Grotere projecten van 2.000 m² of meer nemen 10 tot 16 weken in beslag, inclusief adviestraject, ontwerp en oplevering.',
    order: 1,
  },
  {
    question: 'Werken jullie ook samen met onze architect of aannemer?',
    answer: 'Absoluut. Wij zijn gewend om als onderdeel van een groter bouwteam te opereren. We stemmen onze werkzaamheden nauw af met architecten, aannemers, installateurs en facilitair managers om een naadloos eindresultaat te garanderen.',
    order: 2,
  },
  {
    question: 'Kunnen jullie bestaand meubilair hergebruiken of opknappen?',
    answer: 'Ja, duurzaamheid staat bij ons centraal. We beoordelen uw huidige inventaris op kwaliteit en bruikbaarheid. Goed meubilair knappen we op, passen we aan of integreren we in het nieuwe ontwerp. Wat niet meer bruikbaar is, verwerken we via onze circulaire partners.',
    order: 3,
  },
  {
    question: "In welke regio's zijn jullie actief?",
    answer: "Vanuit ons hoofdkantoor in Buurmalsen werken wij door heel Nederland. Grote projecten realiseerden wij onder meer in Amsterdam, Utrecht, Rotterdam, Den Haag en Eindhoven. Ook voor projecten buiten Nederland — met name België en Duitsland — beschikken wij over de nodige ervaring.",
    order: 4,
  },
  {
    question: 'Bieden jullie garantie en nazorg na oplevering?',
    answer: 'Alle meubilair die wij leveren heeft minimaal 5 jaar fabrieksgarantie. Daarnaast bieden wij 12 maanden nazorg: bij storingen of vragen komt ons serviceteam binnen 48 uur ter plaatse. Voor grotere klanten hebben wij ook meerjarige onderhoudscontracten beschikbaar.',
    order: 5,
  },
];

async function seedCollection(collectionSlug: string, items: object[], uniqueField: string) {
  console.log(`\n${collectionSlug} aanmaken...`);
  for (const item of items) {
    const uniqueValue = (item as Record<string, string>)[uniqueField];
    try {
      const existing = await payload.find({
        collection: collectionSlug,
        where: { [uniqueField]: { equals: uniqueValue } },
      });
      if (existing.docs.length > 0) {
        console.log(`  ⏭  Overgeslagen: ${uniqueValue} (bestaat al)`);
        continue;
      }
      await payload.create({ collection: collectionSlug, data: item as any });
      console.log(`  ✓  Aangemaakt: ${uniqueValue}`);
    } catch (err) {
      console.error(`  ✗  Fout bij ${uniqueValue}:`, err);
    }
  }
}

async function seed() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'dev-secret',
    mongoURL: process.env.DATABASE_URI || 'mongodb://localhost:27017/dm-kantoorinrichtingen',
    local: true,
  });

  console.log('🌱 Seed gestart...');

  await seedCollection('projects', seedProjects, 'slug');
  await seedCollection('services', seedServices, 'slug');
  await seedCollection('team-members', seedTeamMembers, 'name');
  await seedCollection('faq', seedFAQ, 'question');

  console.log('\n✅ Seed voltooid!');
  console.log('\nVolgende stappen:');
  console.log('  1. Log in op /admin en upload afbeeldingen voor projecten, diensten en teamleden.');
  console.log('  2. Koppel de afbeeldingen aan de juiste items.');
  console.log('  3. Vul de globals (Site-instellingen, Homepage inhoud) aan via /admin/globals.\n');

  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed mislukt:', err);
  process.exit(1);
});
