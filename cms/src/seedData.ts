import payload from 'payload';

const p = (...texts: string[]) => texts.map(text => ({ children: [{ text }] }));

export const seedProjects = [
  {
    title: 'Hoofdkantoor TechForward Amsterdam',
    slug: 'techforward-amsterdam',
    sector: 'Technologie',
    featured: true,
    summary: 'Volledige herinrichting van 3.200 m² voor een snelgroeiend technologiebedrijf, met focus op collaboratief werken en welzijn van medewerkers.',
    challenge: p(
      'TechForward groeide in twee jaar van 80 naar 240 medewerkers. Het bestaande kantoor was ingericht voor een klein team en bood geen ruimte voor samenwerking, focuswerk of informele ontmoetingen. Medewerkers klaagden over lawaai, gebrek aan privacy en een inrichting die hun cultuur niet weerspiegelde.',
      'De grootste uitdaging: het kantoor moest tijdens de verbouwing operationeel blijven. Fasegewijze uitvoering was daardoor vereist.'
    ),
    solution: p(
      'Na een uitgebreide werkplekanalyse en interviews met 40 medewerkers ontwikkelden wij een activity-based working concept. We creëerden vijf verschillende zones: deep-work ruimtes, open collaboration areas, informele lounges, een groot café-restaurant en een serie vergaderboxen voor videocalls.',
      'Alle meubilair is afkomstig van Steelcase en Vitra. Akoestische panelen en plafondeilanden absorberen geluid in de open zones. De inrichting werd in drie fasen van elk drie weken uitgevoerd, zodat TechForward altijd minimaal twee derde van het kantoor kon gebruiken.'
    ),
    result: p(
      'Drie maanden na oplevering scoort TechForward een 8,7 op medewerkerstevredenheid — een stijging van 43% ten opzichte van de voormeting. Het ziekteverzuim daalde met 18%. Het kantoor is nu een wervingstool: kandidaten noemen de werkomgeving als een van de redenen om voor TechForward te kiezen.',
      'Het project ontving een eervolle vermelding bij de Dutch Office Awards 2024.'
    ),
    specs: { size: '3.200 m²', duration: '14 weken', workplaces: '240 werkplekken', year: 2024 },
    testimonial: { quote: 'DM Kantoorinrichtingen heeft onze visie op de toekomst van werk perfect vertaald naar een ruimte die onze teams inspireert en motiveert. Het resultaat overtreft al onze verwachtingen.', author: 'Jeroen van der Berg', role: 'CEO TechForward' },
    resultMetric: { label: 'Hogere medewerkerstevredenheid', value: '43%' },
    seo: { metaTitle: 'TechForward Amsterdam — Kantoorinrichting | DM Kantoorinrichtingen', metaDescription: 'Herinrichting van 3.200 m² voor TechForward in Amsterdam. Activity-based working concept voor 240 medewerkers.' },
  },
  {
    title: 'Zorgcentrum De Linde Utrecht',
    slug: 'zorgcentrum-de-linde',
    sector: 'Zorg',
    featured: true,
    summary: 'Ergonomische herinrichting van kantoor- en spreekkamers voor een modern zorgcentrum, met aandacht voor patiëntcomfort en werkpleggezondheid.',
    challenge: p(
      'De Linde signaleerde een oplopend ziekteverzuim van 8,2% — significant hoger dan het sectorgemiddelde. Een intern onderzoek wees op RSI-klachten, rugproblemen en hoge werkdruk als hoofdoorzaken. De werkplekken waren verouderd en niet afgesteld op de medewerkers.',
      'Bijkomende uitdaging: de herinrichting mocht de patiëntenzorg niet onderbreken en moest voldoen aan strenge hygiënenormen voor zorgomgevingen.'
    ),
    solution: p(
      'Wij voerden een individuele ergonomische screening uit bij alle 95 medewerkers. Op basis hiervan selecteerden wij elektrisch verstelbare bureaus, NEN-gecertificeerde ergonomische stoelen en geoptimaliseerde beeldschermopstellingen. Alle materialen voldoen aan de zorg-hygiënerichtlijnen.',
      'Daarnaast verzorgden wij een training voor alle medewerkers over gezond zitten, bewegen en pauzegedrag. De inrichting werd per afdeling uitgevoerd buiten zorguren.'
    ),
    result: p(
      'Binnen zes maanden na oplevering daalde het ziekteverzuim van 8,2% naar 5,7% — een reductie van 31%. Klachten over nek, schouder en rug namen met meer dan 40% af. De Linde bespaart jaarlijks circa €180.000 aan verzuimkosten.',
      'Het project werd aangehaald in een publicatie van Zorgvisie als succesvol voorbeeld van preventief ergonomiebeleid.'
    ),
    specs: { size: '1.800 m²', duration: '8 weken', workplaces: '95 werkplekken', year: 2024 },
    testimonial: { quote: 'Onze medewerkers zijn veel gezonder en gelukkiger op het werk. De ergonomische werkplekken hebben het ziekteverzuim al in het eerste kwartaal merkbaar teruggebracht.', author: 'Dr. Sandra Visser', role: 'Directeur De Linde' },
    resultMetric: { label: 'Reductie ziekteverzuim', value: '31%' },
    seo: { metaTitle: 'Zorgcentrum De Linde Utrecht | DM Kantoorinrichtingen', metaDescription: 'Ergonomische herinrichting voor Zorgcentrum De Linde in Utrecht. Ziekteverzuim gedaald met 31%.' },
  },
  {
    title: 'Advocatenkantoor Vermeer & Partners Den Haag',
    slug: 'vermeer-partners-den-haag',
    sector: 'Zakelijke Dienstverlening',
    featured: false,
    summary: 'Premium kantoorinrichting voor een gerenommeerd advocatenkantoor, waarbij traditie en moderniteit hand in hand gaan.',
    challenge: p(
      'Vermeer & Partners verhuisde naar een nieuw pand in het centrum van Den Haag en wilde de inrichting gebruiken om de kantooridentiteit te versterken: professioneel, betrouwbaar en vertrouwelijk, maar ook modern en aantrekkelijk voor jonge juristen.',
      'Het kantoor heeft zowel publieke ruimtes voor cliënten als vertrouwelijke vergaderkamers en individuele werkkamers. De inrichting moest die twee werelden subtiel scheiden.'
    ),
    solution: p(
      'Wij ontwikkelden een inrichtingsconcept gebaseerd op twee materiaalpaletten. De publieke ontvangstruimtes en vergaderkamers kregen een warm, klassiek karakter met donker hout, lederen accenten en ingetogen kleuren. De werkruimtes werden modern en ergonomisch ingericht met lichtgekleurde meubels en state-of-the-art werkplekken.',
      'Alle 8 vergaderkamers zijn voorzien van een geïntegreerde AV-installatie voor hybride vergaderen. De geluidsabsorptie is zo ontworpen dat vertrouwelijke gesprekken in elke ruimte onhoorbaar zijn in de gang.'
    ),
    result: p(
      'Cliënttevredenheid over de uitstraling van het kantoor steeg met 28% in de klantenenquête van het eerste kwartaal. Medewerkersbehoud verbeterde zichtbaar: het aantal starters dat meer dan twee jaar blijft, steeg van 52% naar 74% in de periode na de verhuizing.'
    ),
    specs: { size: '950 m²', duration: '6 weken', workplaces: '55 werkplekken', year: 2023 },
    testimonial: { quote: 'De sfeer van ons nieuwe kantoor straalt precies de professionaliteit en betrouwbaarheid uit die wij onze cliënten willen bieden.', author: 'Mr. Eline Vermeer', role: 'Managing Partner' },
    resultMetric: { label: 'Hogere klanttevredenheid', value: '28%' },
    seo: { metaTitle: 'Vermeer & Partners Den Haag | DM Kantoorinrichtingen', metaDescription: 'Premium kantoorinrichting voor advocatenkantoor Vermeer & Partners in Den Haag.' },
  },
  {
    title: 'Hogeschool Horizon Rotterdam',
    slug: 'hogeschool-horizon-rotterdam',
    sector: 'Onderwijs',
    featured: false,
    summary: 'Flexibele en inspirerende inrichting van docenten- en administratieve werkruimtes voor een toonaangevende hogeschool in Rotterdam.',
    challenge: p(
      'Hogeschool Horizon had verouderde docentenwerkplekken verspreid over drie verdiepingen. Docenten hadden geen vaste werkplek en misten een goede plek om rustig voor te bereiden, samen te werken of studenten te ontvangen. De administratie werkte in een donkere, slecht geventileerde ruimte.',
      'Het beschikbare budget was beperkt en de verbouwing moest plaatsvinden in de zomervakantie van zes weken.'
    ),
    solution: p(
      'Wij ontwierpen een compact maar multifunctioneel docentencentrum van 600 m² met drie zones: stille werkplekken voor lesvoorbereiding, een open samenwerktafel voor teamoverleg en een reeks spreekruimtes voor gesprekken met studenten. Modulair meubilair maakt herinrichting per dag mogelijk.',
      'De administratie-afdeling werd verplaatst naar een lichte, ruimere locatie en volledig opnieuw ingericht met ergonomische werkplekken. Het project werd volledig binnen de zes weken zomervakantie gerealiseerd.'
    ),
    result: p(
      'Productiviteit van docenten steeg aantoonbaar: de tijd besteed aan lesvoorbereiding op school nam toe van 2 naar 3,5 uur per dag. De medewerkerstevredenheid over de werkomgeving steeg van een 5,8 naar een 8,1. Ziekteverzuim op de administratie daalde van 9,1% naar 6,4%.'
    ),
    specs: { size: '2.100 m²', duration: '10 weken', workplaces: '180 werkplekken', year: 2023 },
    testimonial: { quote: 'De nieuwe werkruimtes stimuleren samenwerking tussen docenten en hebben onze administratieve processen enorm verbeterd.', author: 'Petra Konings', role: 'Rector Hogeschool Horizon' },
    resultMetric: { label: 'Productiviteitsverbetering', value: '37%' },
    seo: { metaTitle: 'Hogeschool Horizon Rotterdam | DM Kantoorinrichtingen', metaDescription: 'Herinrichting van docenten- en administratieve werkruimtes voor Hogeschool Horizon in Rotterdam.' },
  },
  {
    title: 'Provincie Noord-Holland Haarlem',
    slug: 'provincie-noord-holland-haarlem',
    sector: 'Overheid',
    featured: true,
    summary: 'Duurzame en circulaire herinrichting van het provinciehuis, met hergebruik van 70% van het bestaande meubilair en BREEAM-certificering als doelstelling.',
    challenge: p(
      'De Provincie Noord-Holland wilde haar kantoor verduurzamen in lijn met haar eigen milieudoelstellingen. Bestaand meubilair zomaar weggooien was geen optie. Tegelijkertijd moest het kantoor moderniseren om medewerkers meer te bieden dan individuele bureaus in een traditionele kantooromgeving.',
      'De overheidsaanbesteding stelde strikte eisen aan transparantie, prijsstelling en duurzaamheidscriteria. Alle leveranciers moesten gecertificeerd zijn en een CO₂-rapportage kunnen aanleveren.'
    ),
    solution: p(
      'Wij voerden een volledige inventarisatie uit van het bestaande meubilair. 70% bleek geschikt voor hergebruik na opknappen of herbekleden. De overige 30% werd vervangen door nieuw Cradle-to-Cradle gecertificeerd meubilair van onze vaste leveranciers.',
      'Het nieuwe concept combineert flexibele werkplekken, stiltehokken voor geconcentreerd werk en open overlegzones. Alle stoffen en materialen zijn duurzaam gecertificeerd. De CO₂-uitstoot van het project werd volledig gedocumenteerd voor het duurzaamheidsverslag van de provincie.'
    ),
    result: p(
      'De provincie behaalde een BREEAM-certificaat voor de kantoorinrichting op niveau "Very Good". De CO₂-uitstoot van het project lag 62% lager dan bij een volledig nieuw inrichtingsproject. Door hergebruik werd bovendien €340.000 bespaard op meubilairaankopen.',
      'Het project werd gepresenteerd als best practice bij een congres van de Vereniging van Nederlandse Gemeenten.'
    ),
    specs: { size: '4.800 m²', duration: '18 weken', workplaces: '380 werkplekken', year: 2024 },
    testimonial: { quote: 'DM Kantoorinrichtingen begreep als geen ander dat duurzaamheid bij ons niet alleen een wens is, maar een verplichting. Ze leverden precies wat ze beloofden.', author: 'Annemarie de Wit', role: 'Facilitair Manager Provincie NH' },
    resultMetric: { label: 'Lagere CO₂-uitstoot vs. nieuwbouw', value: '62%' },
    seo: { metaTitle: 'Provincie Noord-Holland Haarlem | DM Kantoorinrichtingen', metaDescription: 'Circulaire herinrichting van het provinciehuis Noord-Holland met 70% hergebruik van meubilair en BREEAM-certificering.' },
  },
  {
    title: 'Ontwerpstudio Studio Tangram Amsterdam',
    slug: 'studio-tangram-amsterdam',
    sector: 'Creatief',
    featured: false,
    summary: 'Creatieve en inspirerende werkomgeving voor een multidisciplinair ontwerpbureau, met ruimte voor presentaties, makerspace en teamoverleg.',
    challenge: p(
      'Studio Tangram groeide van 8 naar 30 medewerkers en betrok een leeg industrieel pand in Amsterdam-Noord. Het pand had geweldige lichte ruimtes maar geen enkele functionaliteit: geen wanden, geen akoestiek, geen inrichting.',
      'De inrichting moest passen bij de creatieve identiteit van het bureau: eigenwijze en inspirerende werkomgeving, geen standaard kantoor. Maar wel functioneel voor intense projectsamenwerking en klantpresentaties.'
    ),
    solution: p(
      'In co-creatie met de oprichters van Studio Tangram ontwierpen wij een industrieel-creatief concept. Wij lieten bewust ruwe elementen zichtbaar — staalconstructies, betonvloeren — en combineerden die met kleurrijke, zachte meubelaccenten en akoestische wandpanelen die tevens als pintboards fungeren.',
      'De ruimte is opgedeeld in een openbare presentatiezone, een besloten makerspace met atelierwerktafels, een stil creatief kwartier voor individuele conceptontwikkeling en een grote gemeenschappelijke tafel voor dagelijkse standups en teamlunches. Het modulaire concept kan meegroeien met het bureau.'
    ),
    result: p(
      'Studio Tangram won met het nieuwe kantoor de Open Dutch Design Award in de categorie Werkruimte. Medewerkers scoren de werkomgeving met een 9,2. Het kantoor wordt ingezet als showroom voor nieuwe klanten: tien nieuwe opdrachten in het eerste jaar kwamen mede door de indruk van de werkruimte.'
    ),
    specs: { size: '680 m²', duration: '7 weken', workplaces: '32 werkplekken', year: 2023 },
    testimonial: { quote: 'Ze dachten écht met ons mee. Het resultaat is geen kantoor dat op ons is geplakt, het is ons kantoor — voelt als een verlengstuk van ons werk.', author: 'Fleur Bosman', role: 'Creative Director Studio Tangram' },
    resultMetric: { label: 'Medewerkerstevredenheid werkplek', value: '9.2' },
    seo: { metaTitle: 'Studio Tangram Amsterdam | DM Kantoorinrichtingen', metaDescription: 'Industrieel-creatief kantoorontwerp voor Studio Tangram in Amsterdam-Noord. Award-winnend project.' },
  },
];

export const seedServices = [
  {
    title: 'Strategisch Advies',
    slug: 'strategisch-advies',
    shortDescription: 'We analyseren uw werkcultuur, doelstellingen en ruimte om een integraal inrichtingsplan te maken dat uw organisatie écht vooruit helpt.',
    icon: 'Target',
    order: 1,
    content: p(
      'Een nieuw kantoor begint niet met een kleurenkaart of een meubelcatalogus — het begint met een goed gesprek. Wij geloven dat de beste kantoorinrichting voortkomt uit een diep begrip van hoe uw organisatie werkt, waar ze naartoe gaat en wat uw medewerkers nodig hebben om optimaal te presteren.',
      'Ons strategisch adviestraject combineert kwantitatieve data (bezettingsmetingen, ruimteanalyse) met kwalitatieve inzichten (interviews, workshops). Het resultaat is een helder inrichtingsplan dat breed gedragen wordt in uw organisatie.'
    ),
    features: [
      { icon: 'Target', title: 'Werkplekanalyse', description: 'Grondige analyse van uw huidige werksituatie, bezettingsgraad en medewerkersbehoeften.' },
      { icon: 'Users', title: 'Stakeholdergesprekken', description: 'We interviewen medewerkers en management om draagvlak te creëren en wensen te inventariseren.' },
      { icon: 'Lightbulb', title: 'Conceptontwikkeling', description: 'Op basis van onze analyse ontwikkelen wij een toekomstbestendig inrichtingsconcept op maat.' },
      { icon: 'Layout', title: 'Ruimteplanning', description: 'Efficiënte verdeling van zones: focuswerkplekken, overlegruimtes en sociale plekken.' },
    ],
    benefits: [
      { text: 'Hogere medewerkerstevredenheid' },
      { text: 'Betere benutting van uw vierkante meters' },
      { text: 'Toekomstbestendig inrichtingsplan' },
      { text: 'Draagvlak door participatieve aanpak' },
    ],
    seo: { metaTitle: 'Strategisch Advies Kantoorinrichting | DM Kantoorinrichtingen', metaDescription: 'Strategisch advies voor uw kantoorinrichting. Werkplekanalyse, ruimteplanning en toekomstbestendig inrichtingsplan.' },
  },
  {
    title: 'Ergonomisch Ontwerp',
    slug: 'ergonomisch-ontwerp',
    shortDescription: 'Gezonde werkplekken die ziekteverzuim verminderen en productiviteit verhogen. Wij zijn gecertificeerde ergonomie-adviseurs.',
    icon: 'Heart',
    order: 2,
    content: p(
      'Rugklachten, RSI en vermoeidheid kosten Nederlandse werkgevers jaarlijks miljarden. Toch zijn de oorzaken in veel gevallen te voorkomen met een goede werkplekinrichting. Als gecertificeerde ergonomie-adviseurs weten wij precies wat werkt.',
      'Wij combineren NEN-normering, praktijkervaring en persoonlijk maatwerk. Elke werkplek is anders, elke medewerker is anders. Onze aanpak begint altijd bij de persoon — niet bij het meubilair.'
    ),
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
    seo: { metaTitle: 'Ergonomisch Ontwerp Werkplek | DM Kantoorinrichtingen', metaDescription: 'Gecertificeerde ergonomie-adviseurs voor gezonde werkplekken. Minder ziekteverzuim, betere productiviteit.' },
  },
  {
    title: 'Interieurdesign',
    slug: 'interieurdesign',
    shortDescription: 'Van concept tot realisatie: wij ontwerpen kantooromgevingen die uw merkidentiteit versterken en medewerkers inspireren.',
    icon: 'Pencil',
    order: 3,
    content: p(
      'Uw kantoor is uw visitekaartje — voor klanten, voor sollicitanten en voor uw eigen medewerkers. Een goed ontworpen kantooromgeving versterkt uw merk, trekt talent aan en zorgt dat mensen graag naar kantoor komen.',
      'Ons interieurdesignteam werkt altijd vanuit uw merkidentiteit en bedrijfscultuur. We vertalen abstracte waarden naar concrete materialen, kleuren, vormen en lichtconcepten. U krijgt een kantoor dat uniek is — niet een kantoor dat lijkt op dat van de buurman.'
    ),
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
    seo: { metaTitle: 'Interieurdesign Kantoor | DM Kantoorinrichtingen', metaDescription: 'Van concept tot realisatie: kantoorontwerp dat uw merkidentiteit versterkt. 3D-visualisaties en volledige projectbegeleiding.' },
  },
  {
    title: 'Projectinrichting',
    slug: 'projectinrichting',
    shortDescription: 'Volledige levering en plaatsing van kantoormeubilair van top-A-merken, met garantie en nazorg voor de lange termijn.',
    icon: 'Hammer',
    order: 4,
    content: p(
      'Wij zijn officieel dealer van de beste kantoormeubelfabrikanten ter wereld: Steelcase, Vitra, Kinnarps, Ahrend en Herman Miller. Dat betekent toegang tot de beste producten, maar ook directe lijnen met de fabrikant bij garantievragen of storingen.',
      'Elke levering begeleiden wij persoonlijk. Onze montageteams werken buiten kantoortijden als dat gewenst is, zodat uw medewerkers op maandag gewoon aan een compleet ingericht bureau zitten. Na oplevering staan wij klaar voor nazorg en service.'
    ),
    features: [
      { icon: 'Hammer', title: 'A-merk meubilair', description: 'Wij werken uitsluitend met gerenommeerde merken als Steelcase, Vitra en Kinnarps.' },
      { icon: 'Target', title: 'Levering & montage', description: 'Volledige verzorging van transport, montage en inrichting op afgesproken datum.' },
      { icon: 'ShieldCheck', title: 'Kwaliteitscontrole', description: 'Elke werkplek wordt gecontroleerd en afgesteld voor oplevering aan uw medewerkers.' },
      { icon: 'Zap', title: 'Nazorg & garantie', description: 'Minimaal 5 jaar garantie en een serviceteam dat binnen 48 uur ter plaatse is.' },
    ],
    benefits: [
      { text: 'Minimaal 5 jaar garantie op alle producten' },
      { text: 'Één aanspreekpunt voor het hele project' },
      { text: 'Flexibele levering buiten kantoortijden' },
      { text: 'Oud meubilair afvoer inbegrepen' },
    ],
    seo: { metaTitle: 'Projectinrichting Kantoor | DM Kantoorinrichtingen', metaDescription: 'Volledige levering en plaatsing van A-merk kantoormeubilair. 5 jaar garantie, nazorg inbegrepen.' },
  },
  {
    title: 'Duurzaamheid & Circulariteit',
    slug: 'duurzaamheid-circulariteit',
    shortDescription: 'Wij helpen u een kantooromgeving te creëren die bijdraagt aan uw ESG-doelstellingen en CO₂-reductie.',
    icon: 'Leaf',
    order: 5,
    content: p(
      'Duurzaamheid is bij ons geen marketingterm — het is de kern van onze bedrijfsfilosofie. Wij zijn ervan overtuigd dat een circulaire aanpak van kantoorinrichting beter is voor de planeet én voor uw portemonnee.',
      'Wij helpen u bij elke stap: van de initiële scan van uw bestaande inventaris tot de aanschaf van gecertificeerde nieuwe producten en de CO₂-rapportage voor uw duurzaamheidsverslag. BREEAM, WELL, Cradle to Cradle — wij kennen de normen en helpen u ze halen.'
    ),
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
    seo: { metaTitle: 'Duurzame Kantoorinrichting & Circulariteit | DM Kantoorinrichtingen', metaDescription: 'Circulaire kantoorinrichting die bijdraagt aan uw ESG-doelstellingen. BREEAM, CO₂-rapportage en gecertificeerde producten.' },
  },
  {
    title: 'Hybride Werkplek',
    slug: 'hybride-werkplek',
    shortDescription: 'Flexibele kantooromgevingen die optimaal werken voor thuiswerkers, deeltijdmedewerkers en internationale teams.',
    icon: 'Monitor',
    order: 6,
    content: p(
      'Hybride werken is geen tijdelijke trend maar de nieuwe standaard. Kantooromgevingen moeten medewerkers een reden geven om naar kantoor te komen — niet omdat het moet, maar omdat de werkplek iets biedt wat thuis niet mogelijk is: verbinding, samenwerking en energie.',
      'Wij ontwerpen hybride werkplekconcepten die aansluiten op de unieke werkpatronen van uw organisatie. Van desk-booking systemen tot videoconferentiezalen en stiltehokken — wij regelen het van A tot Z.'
    ),
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
    seo: { metaTitle: 'Hybride Werkplek Inrichting | DM Kantoorinrichtingen', metaDescription: 'Flexibele kantooromgevingen voor hybride werken. Activity-based working, desk-booking en AV-integratie.' },
  },
];

export const seedTeamMembers = [
  { name: 'Dirk Martens', role: 'Oprichter & Directeur', order: 1 },
  { name: 'Lisa van den Berg', role: 'Senior Interieurdesigner', order: 2 },
  { name: 'Mark Jansen', role: 'Ergonomie Specialist', order: 3 },
  { name: 'Sophie de Groot', role: 'Projectmanager', order: 4 },
  { name: 'Tom Willems', role: 'Adviseur Hybride Werken', order: 5 },
  { name: 'Noor Bakker', role: 'Duurzaamheidsadviseur', order: 6 },
];

export const seedFAQ = [
  { question: 'Hoe lang duurt een kantoorinrichtingsproject gemiddeld?', answer: 'De doorlooptijd hangt sterk af van de schaal van het project. Een kleinere inrichting van 200–500 m² realiseren wij doorgaans in 4 tot 6 weken. Grotere projecten van 2.000 m² of meer nemen 10 tot 16 weken in beslag, inclusief adviestraject, ontwerp en oplevering.', order: 1 },
  { question: 'Werken jullie ook samen met onze architect of aannemer?', answer: 'Absoluut. Wij zijn gewend om als onderdeel van een groter bouwteam te opereren. We stemmen onze werkzaamheden nauw af met architecten, aannemers, installateurs en facilitair managers om een naadloos eindresultaat te garanderen.', order: 2 },
  { question: 'Kunnen jullie bestaand meubilair hergebruiken of opknappen?', answer: 'Ja, duurzaamheid staat bij ons centraal. We beoordelen uw huidige inventaris op kwaliteit en bruikbaarheid. Goed meubilair knappen we op, passen we aan of integreren we in het nieuwe ontwerp. Wat niet meer bruikbaar is, verwerken we via onze circulaire partners.', order: 3 },
  { question: "In welke regio's zijn jullie actief?", answer: "Vanuit ons hoofdkantoor in Buurmalsen werken wij door heel Nederland. Grote projecten realiseerden wij onder meer in Amsterdam, Utrecht, Rotterdam, Den Haag en Eindhoven. Ook voor projecten buiten Nederland — met name België en Duitsland — beschikken wij over de nodige ervaring.", order: 4 },
  { question: 'Bieden jullie garantie en nazorg na oplevering?', answer: 'Alle meubilair die wij leveren heeft minimaal 5 jaar fabrieksgarantie. Daarnaast bieden wij 12 maanden nazorg: bij storingen of vragen komt ons serviceteam binnen 48 uur ter plaatse. Voor grotere klanten hebben wij ook meerjarige onderhoudscontracten beschikbaar.', order: 5 },
  { question: 'Wat kost een kantoorinrichtingsproject gemiddeld?', answer: 'De kosten hangen sterk af van de omvang, het gekozen meubilair en de mate van maatwerk. Als globale richtlijn: voor een volledige herinrichting rekenen wij gemiddeld €1.500 tot €3.500 per werkplek, afhankelijk van meubelkwaliteit en ontwerpintensiteit. Wij geven altijd een vrijblijvende offerte na een eerste kennismakingsgesprek.', order: 6 },
  { question: 'Kunnen jullie ook de thuiswerkplekken van onze medewerkers inrichten?', answer: 'Ja! Wij leveren en installeren ergonomische thuiswerkpakketten voor individuele medewerkers. Dit omvat een ergonomische stoel, verstelbaar bureau, beeldschermarm en alle bijbehorende accessoires. Alles word direct thuis geleverd en indien gewenst door ons gemonteerd.', order: 7 },
  { question: 'Werken jullie ook voor kleinere bedrijven of zzp\'ers?', answer: 'Wij specialiseren ons in projecten vanaf circa 10 werkplekken. Voor kleinere kantoren en zzp\'ers verwijzen wij graag naar onze showroom, waar u terecht kunt voor persoonlijk advies en losse aankopen.', order: 8 },
];

const seedHomeContent = {
  heroHeading: 'Kantoorinrichtingen die uw team laten floreren',
  heroSubtitle: 'Gezonde, duurzame en toekomstbestendige werkomgevingen. Van strategisch advies tot complete realisatie.',
  heroLabel: 'Strategisch Kantooradviseur',
  heroPrimaryButtonLabel: 'Plan een adviesgesprek',
  heroSecondaryButtonLabel: 'Bekijk onze projecten',
  aanpakSteps: [
    { number: '01', title: 'Kennismaking', description: 'We leren uw organisatie, werkwijze en ambities kennen in een vrijblijvend gesprek.' },
    { number: '02', title: 'Analyse', description: 'Grondig onderzoek naar ruimtegebruik, werkpatronen en behoeften van uw team.' },
    { number: '03', title: 'Concept', description: 'Een visueel en functioneel ontwerp dat uw identiteit en doelstellingen weerspiegelt.' },
    { number: '04', title: 'Realisatie', description: 'Strakke projectbegeleiding van levering en plaatsing tot nazorg.' },
    { number: '05', title: 'Oplevering', description: 'Uw nieuwe kantoor: op tijd, binnen budget, precies zoals besproken.' },
  ],
  duurzaamheidLabel: 'Onze belofte',
  duurzaamheidHeading: 'Duurzaam & gezond, dat is geen keuze maar een verplichting',
  duurzaamheidText: 'Wij geloven dat gezonde werkplekken en duurzame materialenkeuzen hand in hand gaan. Elk project dat wij realiseren draagt bij aan een betere wereld én een gezonder team.',
  duurzaamheidChecklist: [
    { text: 'Gecertificeerde ergonomische werkplekken' },
    { text: 'BREEAM & WELL certificering support' },
    { text: 'Circulair hergebruik van bestaand meubilair' },
    { text: 'CO₂-neutrale levering en installatie' },
    { text: 'Uitsluitend A-merk, duurzaam geproduceerd' },
  ],
  contactCtaHeading: 'Laten we kennismaken',
  contactCtaText: 'Vertel ons over uw ruimte en wensen. We plannen graag een vrijblijvend gesprek en denken direct mee over de mogelijkheden.',
  aboutVisieHeading: 'Een werkplek is meer dan vier muren en een bureau',
  companyDescription1: 'Opgericht in 1999 door Dirk Martens vanuit een passie voor gezonde werkomgevingen, groeide DM Kantoorinrichtingen uit tot een toonaangevend adviesbureau voor kantoorinrichting in Nederland.',
  companyDescription2: 'Wij combineren strategisch inzicht met oog voor detail. Van de eerste analyse tot de sleuteloverhandiging — wij zorgen dat elke ruimte bijdraagt aan de doelstellingen van uw organisatie en het welzijn van uw medewerkers.',
  waarden: [
    { title: 'Gezond werken', description: 'Wij geloven dat een gezonde werkplek de basis is voor een bloeiende organisatie.' },
    { title: 'Duurzaam denken', description: 'Elke keuze die wij maken weegt de impact op mens en milieu mee.' },
    { title: 'Eerlijk advies', description: 'Wij adviseren wat écht past bij uw organisatie, niet wat het meest lucratief is.' },
    { title: 'Lange termijn', description: 'We bouwen relaties voor de lange termijn, niet voor een eenmalig project.' },
  ],
  aboutPageHeading: 'Over DM Kantoorinrichtingen',
  aboutPageSubtitle: 'Al meer dan 25 jaar de vertrouwde partner voor professionele kantoorinrichtingen in Nederland.',
  aboutTeamHeading: 'De mensen achter DM',
  aboutTeamSubtitle: 'Een gedreven team van adviseurs, designers en projectmanagers met passie voor inspirerende werkomgevingen.',
  seoHomeTitle: 'DM Kantoorinrichtingen — Professionele Kantoorinrichting',
  seoHomeDescription: 'Meer dan 25 jaar ervaring in professionele kantoorinrichting. Van strategisch advies tot complete inrichting. Gevestigd in Buurmalsen, actief door heel Nederland.',
  seoAboutTitle: 'Over Ons | DM Kantoorinrichtingen',
  seoAboutDescription: 'Leer meer over DM Kantoorinrichtingen — meer dan 25 jaar ervaring, een gepassioneerd team en een duurzame visie op kantoorinrichting.',
};

const seedSiteSettings = {
  address: 'Haagse uitweg 1A',
  addressCity: '4021 GB Buurmalsen',
  phone: '+31 (0)345 61 23 45',
  phoneHref: 'tel:+31345612345',
  email: 'info@dmkantoorinrichtingen.nl',
  mapsUrl: 'https://maps.google.com/?q=Haagse+uitweg+1A,+4021+GB+Buurmalsen',
  openingHours: [
    { day: 'Maandag – vrijdag', hours: '09:00 – 17:30' },
    { day: 'Zaterdag', hours: '10:00 – 16:00' },
    { day: 'Zondag', hours: 'Gesloten' },
  ],
  footerDescription: 'Strategisch adviseur voor gezonde, duurzame en toekomstbestendige kantoorinrichtingen. Al meer dan 25 jaar de partner voor inspirerende werkomgevingen.',
  socialLinkedin: 'https://linkedin.com/company/dm-kantoorinrichtingen',
  socialInstagram: 'https://instagram.com/dmkantoorinrichtingen',
  socialFacebook: 'https://facebook.com/dmkantoorinrichtingen',
  stats: [
    { value: '500+', label: 'Projecten gerealiseerd' },
    { value: '25+', label: 'Jaar ervaring' },
    { value: '9.2', label: 'Klantwaardering' },
    { value: '100%', label: 'Circulair inzicht' },
  ],
  showroomUSPs: [
    { icon: 'Sofa', title: '500+ merken uitgestald', description: 'De grootste collectie kantoormeubelen van Nederland onder één dak.' },
    { icon: 'Eye', title: 'Inspirerende sfeerhoeken', description: 'Ervaar zelf hoe verschillende inrichtingsstijlen aanvoelen in de praktijk.' },
    { icon: 'Award', title: 'Gecertificeerde ergonomen', description: 'Persoonlijk advies van onze gecertificeerde werkplekergonomen.' },
    { icon: 'Leaf', title: 'Duurzame collectie', description: 'Uitsluitend circulaire en verantwoord geproduceerde meubelcollecties.' },
  ],
  showroomPageHeading: 'Onze showroom in Buurmalsen',
  showroomPageSubtitle: 'Kom langs en laat u inspireren. Meer dan 2.000 m² aan kantoorinrichting op één locatie, midden in het Rivierenland.',
  showroomSectionHeading: 'Waarom onze showroom bezoeken?',
  showroomCtaHeading: 'Plan uw bezoek aan de showroom',
  showroomCtaText: 'Maak een afspraak voor een persoonlijke rondleiding met één van onze adviseurs. Wij nemen ruim de tijd voor u.',
  seoShowroomTitle: 'Showroom Buurmalsen | DM Kantoorinrichtingen',
  seoShowroomDescription: 'Bezoek onze showroom in Buurmalsen — meer dan 2.000 m² kantoorinrichting. Laat u inspireren en ontvang persoonlijk advies van onze ergonomen.',
  seoContactTitle: 'Contact | DM Kantoorinrichtingen',
  seoContactDescription: 'Neem contact op met DM Kantoorinrichtingen. Bezoek onze showroom in Buurmalsen of stuur ons een bericht voor een vrijblijvend adviesgesprek.',
};

async function seedCollection(slug: string, items: object[], uniqueField: string): Promise<string[]> {
  const log: string[] = [];
  for (const item of items) {
    const val = (item as Record<string, string>)[uniqueField];
    try {
      const existing = await payload.find({ collection: slug, where: { [uniqueField]: { equals: val } } });
      if (existing.docs.length > 0) {
        log.push(`SKIP: ${slug}/${val}`);
      } else {
        await payload.create({ collection: slug, data: item as any });
        log.push(`OK: ${slug}/${val}`);
      }
    } catch (err: any) {
      log.push(`ERR: ${slug}/${val} — ${err.message}`);
    }
  }
  return log;
}

async function seedGlobalIfEmpty(slug: string, checkField: string, data: object): Promise<string> {
  try {
    const current = await payload.findGlobal({ slug }) as Record<string, unknown>;
    if (current[checkField]) {
      return `SKIP: global/${slug}`;
    }
    await payload.updateGlobal({ slug, data: data as any });
    return `OK: global/${slug}`;
  } catch (err: any) {
    return `ERR: global/${slug} — ${err.message}`;
  }
}

export const seedSectorNames = [
  'Technologie',
  'Zakelijke Dienstverlening',
  'Zorg',
  'Onderwijs',
  'Overheid',
  'Creatief',
];

export const runSeed = async (): Promise<string[]> => {
  const log: string[] = [];

  // Seed sectors first and build name→id map
  const sectorMap: Record<string, string> = {};
  for (const name of seedSectorNames) {
    try {
      const existing = await payload.find({ collection: 'sectors', where: { name: { equals: name } } });
      if (existing.docs.length > 0) {
        sectorMap[name] = existing.docs[0].id;
        log.push(`SKIP: sectors/${name}`);
      } else {
        const created = await payload.create({ collection: 'sectors', data: { name } });
        sectorMap[name] = created.id;
        log.push(`OK: sectors/${name}`);
      }
    } catch (err: any) {
      log.push(`ERR: sectors/${name} — ${err.message}`);
    }
  }

  // Resolve sector names to IDs for projects
  const projectsWithIds = seedProjects.map(p => ({
    ...p,
    sector: sectorMap[p.sector as string] ?? p.sector,
  }));

  log.push(...await seedCollection('projects', projectsWithIds, 'slug'));
  log.push(...await seedCollection('services', seedServices, 'slug'));
  log.push(...await seedCollection('team-members', seedTeamMembers, 'name'));
  log.push(...await seedCollection('faq', seedFAQ, 'question'));
  log.push(await seedGlobalIfEmpty('home-content', 'heroHeading', seedHomeContent));
  log.push(await seedGlobalIfEmpty('site-settings', 'address', seedSiteSettings));
  return log;
};
