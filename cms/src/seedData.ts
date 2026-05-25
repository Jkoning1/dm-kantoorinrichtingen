import payload from 'payload';

export const seedProjects = [
  {
    title: 'Hoofdkantoor TechForward Amsterdam',
    slug: 'techforward-amsterdam',
    sector: 'Technologie',
    featured: true,
    summary: 'Volledige herinrichting van 3.200 m² voor een snelgroeiend technologiebedrijf, met focus op collaboratief werken en welzijn van medewerkers.',
    specs: { size: '3.200 m²', duration: '14 weken', workplaces: '240 werkplekken', year: 2024 },
    testimonial: { quote: 'DM Kantoorinrichtingen heeft onze visie op de toekomst van werk perfect vertaald naar een ruimte die onze teams inspireert en motiveert.', author: 'Jeroen van der Berg', role: 'CEO TechForward' },
    resultMetric: { label: 'Hogere medewerkerstevredenheid', value: '43%' },
  },
  {
    title: 'Zorgcentrum De Linde Utrecht',
    slug: 'zorgcentrum-de-linde',
    sector: 'Zorg',
    featured: true,
    summary: 'Ergonomische herinrichting van kantoor- en spreekkamers voor een modern zorgcentrum, met aandacht voor patiëntcomfort en werkpleggezondheid.',
    specs: { size: '1.800 m²', duration: '8 weken', workplaces: '95 werkplekken', year: 2024 },
    testimonial: { quote: 'Onze medewerkers zijn veel gezonder en gelukkiger op het werk. De ergonomische werkplekken hebben het ziekteverzuim al in het eerste kwartaal merkbaar teruggebracht.', author: 'Dr. Sandra Visser', role: 'Directeur De Linde' },
    resultMetric: { label: 'Reductie ziekteverzuim', value: '31%' },
  },
  {
    title: 'Advocatenkantoor Vermeer & Partners Den Haag',
    slug: 'vermeer-partners-den-haag',
    sector: 'Zakelijke Dienstverlening',
    featured: false,
    summary: 'Premium kantoorinrichting voor een gerenommeerd advocatenkantoor, waarbij traditie en moderniteit hand in hand gaan.',
    specs: { size: '950 m²', duration: '6 weken', workplaces: '55 werkplekken', year: 2023 },
    testimonial: { quote: 'De sfeer van ons nieuwe kantoor straalt precies de professionaliteit en betrouwbaarheid uit die wij onze cliënten willen bieden.', author: 'Mr. Eline Vermeer', role: 'Managing Partner' },
    resultMetric: { label: 'Hogere klanttevredenheid', value: '28%' },
  },
  {
    title: 'Hogeschool Horizon Rotterdam',
    slug: 'hogeschool-horizon-rotterdam',
    sector: 'Onderwijs',
    featured: false,
    summary: 'Flexibele en inspirerende inrichting van docenten- en administratieve werkruimtes voor een toonaangevende hogeschool.',
    specs: { size: '2.100 m²', duration: '10 weken', workplaces: '180 werkplekken', year: 2023 },
    testimonial: { quote: 'De nieuwe werkruimtes stimuleren samenwerking tussen docenten en hebben onze administratieve processen enorm verbeterd.', author: 'Petra Konings', role: 'Rector Hogeschool Horizon' },
    resultMetric: { label: 'Productiviteitsverbetering', value: '37%' },
  },
];

export const seedServices = [
  {
    title: 'Strategisch Advies',
    slug: 'strategisch-advies',
    shortDescription: 'We analyseren uw werkcultuur, doelstellingen en ruimte om een integraal inrichtingsplan te maken dat uw organisatie écht vooruit helpt.',
    icon: 'Target',
    order: 1,
    features: [
      { icon: 'Target', title: 'Werkplekanalyse', description: 'Grondige analyse van uw huidige werksituatie, bezettingsgraad en medewerkersbehoeften.' },
      { icon: 'Users', title: 'Stakeholdergesprekken', description: 'We interviewen medewerkers en management om draagvlak te creëren en wensen te inventariseren.' },
      { icon: 'Lightbulb', title: 'Conceptontwikkeling', description: 'Op basis van onze analyse ontwikkelen wij een toekomstbestendig inrichtingsconcept.' },
      { icon: 'Layout', title: 'Ruimteplanning', description: 'Efficiënte verdeling van zones: focuswerkplekken, overlegruimtes en sociale plekken.' },
    ],
    benefits: [
      { text: 'Hogere medewerkerstevredenheid' },
      { text: 'Betere benutting van uw vierkante meters' },
      { text: 'Toekomstbestendig inrichtingsplan' },
      { text: 'Draagvlak door participatieve aanpak' },
    ],
  },
  {
    title: 'Ergonomisch Ontwerp',
    slug: 'ergonomisch-ontwerp',
    shortDescription: 'Gezonde werkplekken die ziekteverzuim verminderen en productiviteit verhogen. Wij zijn gecertificeerde ergonomie-adviseurs.',
    icon: 'Heart',
    order: 2,
    features: [
      { icon: 'Heart', title: 'Ergonomische keuring', description: 'Meting en beoordeling van huidige werkplekken op ergonomische risicofactoren.' },
      { icon: 'Monitor', title: 'Schermwerkplek optimalisatie', description: 'Correcte positionering van beeldscherm, stoel en bureau voor optimale houding.' },
      { icon: 'Zap', title: 'Zit-sta werkplekken', description: 'Advies en levering van elektrisch verstelbare bureaus voor afwisselend werken.' },
      { icon: 'Users', title: 'Medewerkerstraining', description: 'Trainingen over gezond werken, pauzegedrag en instellingen van de werkplek.' },
    ],
    benefits: [
      { text: 'Gemiddeld 30% minder klachten aan nek en rug' },
      { text: 'Aantoonbare reductie van ziekteverzuim' },
      { text: 'Hogere concentratie en productiviteit' },
      { text: 'Voldoet aan Arbo-wetgeving' },
    ],
  },
  {
    title: 'Interieurdesign',
    slug: 'interieurdesign',
    shortDescription: 'Van concept tot realisatie: wij ontwerpen kantooromgevingen die uw merkidentiteit versterken en medewerkers inspireren.',
    icon: 'Pencil',
    order: 3,
    features: [
      { icon: 'Pencil', title: 'Moodboard & conceptpresentatie', description: 'Visuele presentatie van stijl, kleuren, materialen en sfeer van uw nieuwe kantoor.' },
      { icon: 'Layout', title: '3D-visualisaties', description: 'Fotorealistische renders zodat u het eindresultaat al ziet voordat er een schroef is gedraaid.' },
      { icon: 'Hammer', title: 'Materialenadvies', description: 'Selectie van duurzame, onderhoudsarme materialen die passen bij uw budget en uitstraling.' },
      { icon: 'ShieldCheck', title: 'Projectbegeleiding', description: 'Wij coördineren alle leveranciers en aannemers voor een zorgeloze realisatie.' },
    ],
    benefits: [
      { text: 'Uniek ontwerp dat past bij uw merkidentiteit' },
      { text: 'Hogere aantrekkingskracht op talent' },
      { text: 'Indrukwekkende eerste indruk voor klanten' },
      { text: 'Tijdige oplevering binnen budget' },
    ],
  },
  {
    title: 'Projectinrichting',
    slug: 'projectinrichting',
    shortDescription: 'Volledige levering en plaatsing van kantoormeubilair van top-A-merken, met garantie en nazorg voor de lange termijn.',
    icon: 'Hammer',
    order: 4,
    features: [
      { icon: 'Hammer', title: 'A-merk meubilair', description: 'Wij werken uitsluitend met gerenommeerde merken als Steelcase, Vitra en Kinnarps.' },
      { icon: 'Target', title: 'Levering & montage', description: 'Volledige verzorging van transport, montage en inrichting op afgesproken datum.' },
      { icon: 'ShieldCheck', title: 'Kwaliteitscontrole', description: 'Elke werkplek wordt gecontroleerd en afgesteld voor oplevering aan uw medewerkers.' },
      { icon: 'Zap', title: 'Nazorg & garantie', description: 'Minimaal 5 jaar garantie en een serviceteam dat binnen 48 uur ter plaatse is.' },
    ],
    benefits: [
      { text: 'Minimaal 5 jaar garantie op alle producten' },
      { text: 'Één aanspreekpunt voor hele project' },
      { text: 'Flexibele levering buiten kantoortijden' },
      { text: 'Oud meubilair afvoer inbegrepen' },
    ],
  },
  {
    title: 'Duurzaamheid & Circulariteit',
    slug: 'duurzaamheid-circulariteit',
    shortDescription: 'Wij helpen u een kantooromgeving te creëren die bijdraagt aan uw ESG-doelstellingen en CO₂-reductie.',
    icon: 'Leaf',
    order: 5,
    features: [
      { icon: 'Leaf', title: 'Duurzaamheidsscan', description: 'Analyse van uw huidige inventaris en inrichting op circulariteitspotentieel.' },
      { icon: 'Target', title: 'Refurbishment', description: 'Bestaand meubilair opknappen, herbekleden en hergebruiken in plaats van weggooien.' },
      { icon: 'ShieldCheck', title: 'Gecertificeerde producten', description: 'Wij leveren uitsluitend producten met Cradle to Cradle, FSC of vergelijkbare certificering.' },
      { icon: 'Users', title: 'CO₂-rapportage', description: 'Rapportage van de CO₂-footprint van uw inrichting voor uw duurzaamheidsverslag.' },
    ],
    benefits: [
      { text: 'Aantoonbare bijdrage aan ESG-doelstellingen' },
      { text: 'Kostenbesparing door hergebruik' },
      { text: 'Positief imago bij medewerkers en klanten' },
      { text: 'Voldoet aan groeiende duurzaamheidswetgeving' },
    ],
  },
  {
    title: 'Hybride Werkplek',
    slug: 'hybride-werkplek',
    shortDescription: 'Flexibele kantooromgevingen die optimaal werken voor thuiswerkers, deeltijdmedewerkers en internationale teams.',
    icon: 'Monitor',
    order: 6,
    features: [
      { icon: 'Monitor', title: 'Activity-based working', description: 'Verschillende werkzones voor focus, samenwerking, bellen en ontspanning.' },
      { icon: 'Zap', title: 'Technologie-integratie', description: 'Naadloze integratie van AV-systemen, booking tools en smart office oplossingen.' },
      { icon: 'Layout', title: 'Flexibele indelingen', description: 'Modulair meubilair dat eenvoudig omgesteld kan worden naar groepsgrootte en behoefte.' },
      { icon: 'Users', title: 'Thuiswerkadvies', description: 'Ook advies en levering van ergonomische thuiswerkplekken voor uw medewerkers.' },
    ],
    benefits: [
      { text: 'Hogere bezettingsgraad van uw kantoorruimte' },
      { text: 'Medewerkers komen graag naar kantoor' },
      { text: 'Naadloze samenwerking on- en offline' },
      { text: 'Schaalbaar bij groei of krimp' },
    ],
  },
];

export const seedTeamMembers = [
  { name: 'Dirk Martens', role: 'Oprichter & Directeur', order: 1 },
  { name: 'Lisa van den Berg', role: 'Senior Interieurdesigner', order: 2 },
  { name: 'Mark Jansen', role: 'Ergonomie Specialist', order: 3 },
  { name: 'Sophie de Groot', role: 'Projectmanager', order: 4 },
];

export const seedFAQ = [
  { question: 'Hoe lang duurt een kantoorinrichtingsproject gemiddeld?', answer: 'De doorlooptijd hangt sterk af van de schaal van het project. Een kleinere inrichting van 200–500 m² realiseren wij doorgaans in 4 tot 6 weken. Grotere projecten van 2.000 m² of meer nemen 10 tot 16 weken in beslag.', order: 1 },
  { question: 'Werken jullie ook samen met onze architect of aannemer?', answer: 'Absoluut. Wij zijn gewend om als onderdeel van een groter bouwteam te opereren. We stemmen onze werkzaamheden nauw af met architecten, aannemers, installateurs en facilitair managers.', order: 2 },
  { question: 'Kunnen jullie bestaand meubilair hergebruiken of opknappen?', answer: 'Ja, duurzaamheid staat bij ons centraal. We beoordelen uw huidige inventaris op kwaliteit en bruikbaarheid. Goed meubilair knappen we op, passen we aan of integreren we in het nieuwe ontwerp.', order: 3 },
  { question: "In welke regio's zijn jullie actief?", answer: "Vanuit ons hoofdkantoor in Buurmalsen werken wij door heel Nederland. Grote projecten realiseerden wij onder meer in Amsterdam, Utrecht, Rotterdam, Den Haag en Eindhoven.", order: 4 },
  { question: 'Bieden jullie garantie en nazorg na oplevering?', answer: 'Alle meubilair heeft minimaal 5 jaar fabrieksgarantie. Daarnaast bieden wij 12 maanden nazorg: bij storingen of vragen komt ons serviceteam binnen 48 uur ter plaatse.', order: 5 },
];

async function seedCollection(slug: string, items: object[], uniqueField: string): Promise<string[]> {
  const log: string[] = [];
  for (const item of items) {
    const val = (item as Record<string, string>)[uniqueField];
    try {
      const existing = await payload.find({ collection: slug, where: { [uniqueField]: { equals: val } } });
      if (existing.docs.length > 0) {
        log.push(`SKIP: ${slug}/${val}`);
        continue;
      }
      await payload.create({ collection: slug, data: item as any });
      log.push(`OK: ${slug}/${val}`);
    } catch (err: any) {
      log.push(`ERR: ${slug}/${val} — ${err.message}`);
    }
  }
  return log;
}

export async function runSeed(): Promise<string[]> {
  const log: string[] = [];
  log.push(...await seedCollection('projects', seedProjects, 'slug'));
  log.push(...await seedCollection('services', seedServices, 'slug'));
  log.push(...await seedCollection('team-members', seedTeamMembers, 'name'));
  log.push(...await seedCollection('faq', seedFAQ, 'question'));
  return log;
}
