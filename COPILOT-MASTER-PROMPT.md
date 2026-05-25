# DM Kantoorinrichtingen — GitHub Copilot Master Prompt

> **Doel**: Dit document is de single source of truth voor GitHub Copilot (of elke AI code-assistent) bij het bouwen van de DM Kantoorinrichtingen website. Lees dit ALTIJD volledig voordat je code genereert.

---

## 1. PROJECT OVERZICHT

**Bedrijf**: DM Kantoorinrichtingen — strategisch adviseur voor gezonde, duurzame en toekomstbestendige kantoorinrichtingen, gevestigd in Buurmalsen.

**Website type**: Corporate website met CMS-gestuurde content (projecten, diensten, pagina's).

**Pagina's** (exact deze 6, geen andere):
1. **Home** (`/`)
2. **Projecten** (`/projecten`) → met detail pagina (`/projecten/[slug]`)
3. **Diensten** (`/diensten`) → met detail pagina (`/diensten/[slug]`)
4. **Over ons** (`/over-ons`)
5. **Showroom** (`/showroom`)
6. **Contact** (`/contact`)

---

## 2. TECH STACK

| Onderdeel | Technologie | Versie |
|---|---|---|
| **Frontend framework** | React | 19.x |
| **Language** | TypeScript | 5.8+ |
| **Build tool** | Vite | 6.x |
| **Styling** | Tailwind CSS | 4.x (met `@tailwindcss/vite` plugin) |
| **Animaties** | Motion (framer-motion) | 12.x (`motion/react` import) |
| **Iconen** | Lucide React | latest |
| **Routing** | React Router DOM | 7.x |
| **Utility** | clsx + tailwind-merge | latest |
| **CMS** | Payload CMS | 3.x (self-hosted) |
| **Database** | MongoDB (via MongoDB Atlas free tier) | — |
| **Hosting frontend** | Railway | — |
| **Hosting CMS** | Railway (aparte service) | — |
| **Formulier backend** | Make.com (webhook) | — |

### Wat NIET gebruiken:
- ❌ `@google/genai` of enige Google/Gemini SDK
- ❌ Geen Google, LinkedIn, IBM, Amazon logo's als social proof
- ❌ Geen `process.env.GEMINI_API_KEY`
- ❌ Geen Next.js, Remix, of ander meta-framework
- ❌ Geen styled-components, CSS modules, of Sass
- ❌ Geen localStorage/sessionStorage in components

---

## 3. DESIGN SYSTEEM

### 3.1 Kleuren

```css
@theme {
  --color-brand-primary: #1a1a1a;       /* Primaire tekst, donkere achtergronden */
  --color-brand-accent: #A0A35C;        /* CTA buttons, actieve states, links */
  --color-brand-accent-dark: #66683B;   /* Hover state van accent */
  --color-brand-secondary: #C28F5B;     /* Warme accenten, hover effecten, iconen */
  --color-brand-surface: #f8f9fa;       /* Lichte achtergrond secties */
}
```

**Kleurgebruik regels:**
- **Accent (#A0A35C)**: Primaire CTA buttons, actieve navigatie items, checkmarks
- **Accent-dark (#66683B)**: Hover state van accent buttons
- **Secondary (#C28F5B)**: Hover effecten op tekst/links, icon highlights, decoratieve elementen
- **Surface (#f8f9fa)**: Afwisselende sectie-achtergronden voor visueel ritme
- **Zwart (#1a1a1a)**: Primaire tekst, donkere sectie-achtergronden (bijv. duurzaamheid sectie, sidebar cards)
- **Wit**: Standaard pagina-achtergrond, tekst op donkere achtergronden

**Extra tip voor verfijning:** Gebruik subtiele gradiënten (`bg-gradient-to-br from-brand-surface to-white`), zachte glasmorphism effecten (`backdrop-blur-md bg-white/80`), en fijne borders (`border-black/5`) om het design net wat verfijnder te maken dan het voorbeeld.

### 3.2 Typografie

```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-display: "Space Grotesk", sans-serif;
```

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

**Gebruik:**
- `font-sans` (Inter): Body tekst, paragrafen, labels, navigatie
- `font-display` (Space Grotesk): Alle headings (h1-h6), stapnummers, logo

**Typografie schaal:**
- Hero h1: `text-5xl md:text-7xl font-bold leading-[1.1]`
- Sectie h2: `text-4xl font-bold`
- Card h3: `text-2xl font-bold` of `text-xl font-bold`
- Body: `text-lg text-black/60 leading-relaxed`
- Labels: `text-xs font-bold uppercase tracking-widest text-black/40`
- Stats: `text-4xl font-bold` met `text-sm text-black/60 uppercase tracking-widest` als label

### 3.3 Spacing & Layout

- Max container breedte: `max-w-7xl mx-auto px-6`
- Sectie padding: `py-24` (standaard), `py-12` (compact)
- Grid gaps: `gap-8` (cards), `gap-12` (grote items), `gap-20` (2-kolom layouts)
- Border radius: `rounded-2xl` (cards), `rounded-3xl` (grote afbeeldingen), `rounded-full` (buttons/pills), `rounded-[2rem]` (feature cards)

### 3.4 Component Patronen

**Buttons:**
```tsx
// Primaire CTA
<button className="bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-accent-dark transition-all flex items-center gap-2">
  Label <ArrowRight className="w-5 h-5" />
</button>

// Secundaire / Ghost
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
  Label
</button>

// Donkere CTA
<button className="bg-black text-white py-4 rounded-xl font-bold hover:bg-brand-accent transition-all">
  Label
</button>
```

**Cards:**
```tsx
// Service card met achtergrond afbeelding
<div className="relative p-8 border border-black/5 rounded-2xl overflow-hidden group min-h-[320px] flex flex-col justify-end">
  <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
  <div className="relative z-10">
    {/* content */}
  </div>
</div>

// Feature card
<div className="p-8 bg-brand-surface rounded-2xl border border-black/5">
  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-brand-accent shadow-sm">
    <Icon />
  </div>
  <h4 className="text-xl font-bold mb-3">Titel</h4>
  <p className="text-black/60 text-sm leading-relaxed">Beschrijving</p>
</div>
```

**Hover effecten:**
- Afbeeldingen: `group-hover:scale-105 transition-transform duration-700`
- Tekst/links: `hover:text-brand-secondary transition-colors`
- Cards: `hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all`
- Icoon containers: `group-hover:bg-brand-secondary group-hover:text-white transition-colors`
- Links met pijl: `hover:gap-3 transition-all` (gap vergroot)

**Animaties (Motion):**
```tsx
// Fade in van onder
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

// Scroll-triggered
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

// Page transitions (wrap Routes in AnimatePresence)
<AnimatePresence mode="wait">
  <Routes>...</Routes>
</AnimatePresence>
```

---

## 4. PROJECTSTRUCTUUR

```
dm-kantoorinrichtingen/
├── frontend/                    # React SPA
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── lib/
│   │   │   ├── utils.ts         # cn() helper (clsx + tailwind-merge)
│   │   │   ├── payload.ts       # Payload CMS API client
│   │   │   └── types.ts         # TypeScript types voor CMS collections
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ImageGallery.tsx  # Lightbox voor project detail
│   │   │   ├── StatsBar.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── Projects.tsx
│   │       ├── ProjectDetail.tsx
│   │       ├── Services.tsx
│   │       ├── ServiceDetail.tsx
│   │       ├── About.tsx
│   │       ├── Showroom.tsx
│   │       └── Contact.tsx
│   ├── public/
│   │   ├── images/              # Statische afbeeldingen (logo, team foto's)
│   │   └── favicon.svg
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── .env.example
│
├── cms/                         # Payload CMS
│   ├── src/
│   │   ├── server.ts
│   │   ├── payload.config.ts
│   │   └── collections/
│   │       ├── Projects.ts
│   │       ├── Services.ts
│   │       ├── Pages.ts
│   │       ├── TeamMembers.ts
│   │       └── Media.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── .env.example
│
├── railway.toml                 # Railway deployment config
└── README.md
```

---

## 5. PAYLOAD CMS COLLECTIONS

### 5.1 Projects Collection

```typescript
// cms/src/collections/Projects.ts
import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sector', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true, // Public API
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'sector',
      type: 'select',
      options: [
        'Technologie',
        'Zakelijke Dienstverlening',
        'Zorg',
        'Onderwijs',
        'Overheid',
        'Creatief',
      ],
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'Korte beschrijving voor overzichtspagina (max 200 tekens)' },
    },
    {
      name: 'challenge',
      type: 'richText',
      admin: { description: 'De uitdaging / vraag van de klant' },
    },
    {
      name: 'solution',
      type: 'richText',
      admin: { description: 'Onze aanpak en oplossing' },
    },
    {
      name: 'result',
      type: 'richText',
      admin: { description: 'Het behaalde resultaat' },
    },
    {
      name: 'specs',
      type: 'group',
      fields: [
        { name: 'size', type: 'text', admin: { description: 'Bijv. 2.400 m²' } },
        { name: 'duration', type: 'text', admin: { description: 'Bijv. 12 weken' } },
        { name: 'workplaces', type: 'text', admin: { description: 'Bijv. 180 werkplekken' } },
        { name: 'year', type: 'number' },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'author', type: 'text' },
        { name: 'role', type: 'text' },
      ],
    },
    {
      name: 'resultMetric',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', admin: { description: 'Bijv. "Hogere medewerkerstevredenheid"' } },
        { name: 'value', type: 'text', admin: { description: 'Bijv. "40%"' } },
      ],
    },
  ],
};
```

### 5.2 Services Collection

```typescript
// cms/src/collections/Services.ts
import { CollectionConfig } from 'payload';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: { description: 'Korte beschrijving voor overzichtspagina' },
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        'Users', 'MessageSquare', 'Heart', 'Leaf',
        'ShieldCheck', 'Monitor', 'Layout', 'Pencil',
        'Hammer', 'Lightbulb', 'Target', 'Zap',
      ],
      required: true,
      admin: { description: 'Lucide icon naam' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: { description: 'Volledige inhoud van de dienst detail pagina' },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'icon', type: 'select', options: ['Layout', 'Pencil', 'Hammer', 'ShieldCheck', 'Lightbulb', 'Target', 'Zap', 'Heart'] },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        { name: 'text', type: 'text', required: true },
      ],
      admin: { description: 'Lijst met voordelen voor sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar', description: 'Sorteervolgorde op overzichtspagina' },
    },
  ],
};
```

### 5.3 Media Collection

```typescript
// cms/src/collections/Media.ts
import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
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
```

### 5.4 TeamMembers Collection

```typescript
// cms/src/collections/TeamMembers.ts
import { CollectionConfig } from 'payload';

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'photo', type: 'upload', relationTo: 'media', required: true },
    { name: 'order', type: 'number', admin: { position: 'sidebar' } },
  ],
};
```

### 5.5 Pages Collection (voor Over ons, Showroom content)

```typescript
// cms/src/collections/Pages.ts
import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'content', type: 'richText' },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        {
          slug: 'hero',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'subheading', type: 'textarea' },
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          slug: 'stats',
          fields: [
            {
              name: 'items',
              type: 'array',
              fields: [
                { name: 'value', type: 'text' },
                { name: 'label', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'textImage',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'text', type: 'richText' },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'imagePosition', type: 'select', options: ['left', 'right'] },
          ],
        },
      ],
    },
  ],
};
```

---

## 6. FRONTEND — PAYLOAD API CLIENT

```typescript
// frontend/src/lib/payload.ts
const CMS_URL = import.meta.env.VITE_PAYLOAD_URL || 'http://localhost:3001';

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
}

async function fetchAPI<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${CMS_URL}/api/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getProjects(sector?: string) {
  const params: Record<string, string> = { 
    limit: '100', 
    sort: '-createdAt',
    depth: '1', // Populate media relations
  };
  if (sector && sector !== 'Alle') {
    params['where[sector][equals]'] = sector;
  }
  return fetchAPI<PayloadResponse<Project>>('projects', params);
}

export async function getProjectBySlug(slug: string) {
  return fetchAPI<PayloadResponse<Project>>('projects', {
    'where[slug][equals]': slug,
    depth: '2',
  }).then(res => res.docs[0] || null);
}

export async function getFeaturedProjects() {
  return fetchAPI<PayloadResponse<Project>>('projects', {
    'where[featured][equals]': 'true',
    limit: '4',
    depth: '1',
  });
}

export async function getServices() {
  return fetchAPI<PayloadResponse<Service>>('services', {
    sort: 'order',
    depth: '1',
  });
}

export async function getServiceBySlug(slug: string) {
  return fetchAPI<PayloadResponse<Service>>('services', {
    'where[slug][equals]': slug,
    depth: '2',
  }).then(res => res.docs[0] || null);
}

export async function getTeamMembers() {
  return fetchAPI<PayloadResponse<TeamMember>>('team-members', {
    sort: 'order',
    depth: '1',
  });
}

export function getMediaUrl(media: Media | string): string {
  if (typeof media === 'string') return `${CMS_URL}/media/${media}`;
  return `${CMS_URL}${media.url}`;
}
```

---

## 7. PAGINA SPECIFICATIES

### 7.1 Home (`/`)

**Secties (in volgorde):**
1. **Hero** — Fullscreen afbeelding met overlay, h1 headline, subtekst, 2 CTA buttons (primair + ghost)
2. **Social Proof / Stats** — 4 statistieken (500+ Projecten, 25+ Jaar, 9.2 Klantwaardering, 100% Circulair). Geen externe bedrijfslogo's — gebruik eigen stats of klantlogo's als die er zijn
3. **Uitgelichte Projecten** — 2 featured projecten uit CMS (grid 2 kolommen), met resultaat metric
4. **Onze Aanpak** — 5 stappen visueel (01-05), horizontaal op desktop
5. **Diensten Grid** — 6 diensten uit CMS als cards met achtergrondafbeelding, icoon, titel, link
6. **Duurzaamheid & Welzijn** — Donkere sectie (bg-black) met afbeelding + content + checklist
7. **FAQ** — Accordion (details/summary), 4-6 vragen
8. **Contact CTA** — Groot contactformulier met teamfoto's, gekoppeld aan Make.com webhook

### 7.2 Projecten (`/projecten`)

**Overzichtspagina:**
- H1 + intro tekst
- Filter buttons per sector (uit CMS data, dynamisch)
- Grid van project cards (3 kolommen desktop, 1 mobiel)
- Elke card: afbeelding (aspect-[4/3]), titel, sector + grootte
- Click → naar `/projecten/[slug]`
- Animeer cards met `motion.div layout` voor smooth filtering

**Detail pagina (`/projecten/[slug]`):**
- Hero afbeelding (breed, `aspect-[21/9]`)
- Titel + samenvatting
- 2-kolom layout:
  - Links (⅔): Uitdaging → Oplossing → Resultaat (rich text uit CMS)
  - Rechts (⅓): Specificaties card (donker bg), testimonial quote
- Foto galerij met lightbox functionaliteit
- CTA onderaan: "Zullen we ook voor u zo'n project realiseren?"
- Breadcrumb navigatie bovenaan

### 7.3 Diensten (`/diensten`)

**Overzichtspagina:**
- H1 + intro tekst
- Grid van 6 dienst-cards (2 kolommen), grote padding, icoon, titel, beschrijving, "Lees meer" link
- Cards uit CMS, gesorteerd op `order` veld

**Detail pagina (`/diensten/[slug]`):**
- Hero afbeelding (breed)
- Titel + introductie tekst
- 2-kolom layout:
  - Links (⅔): Rich text content + features grid (2x2 met iconen)
  - Rechts (⅓): "Waarom kiezen voor ons?" card (donker) + CTA card
- Benefits lijst met checkmarks

### 7.4 Over ons (`/over-ons`)

- H1 + intro tekst
- 2-kolom: Team foto + Visie tekst
- Team sectie: Grid van teamleden uit CMS (foto grayscale → kleur on hover)
- Optioneel: Tijdlijn / geschiedenis

### 7.5 Showroom (`/showroom`)

- H1 + beschrijving
- 2-kolom: Links tekst met USPs (iconen), rechts sfeerbeeld met openingstijden overlay
- CTA: "Plan uw bezoek" button
- Eventueel: Google Maps embed (Haagse uitweg 1A, Buurmalsen)

### 7.6 Contact (`/contact`)

- H1 + intro tekst
- 2-kolom layout:
  - Links: Contactgegevens (adres, telefoon, email) met iconen + team foto's
  - Rechts: Contactformulier
- Formulier velden: Naam, Bedrijf, Email, Telefoon, Bericht (textarea)
- **Formulier submit**: POST naar Make.com webhook URL (opgeslagen als `VITE_MAKE_WEBHOOK_URL` env var)

```typescript
// ContactForm submit handler
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    await fetch(import.meta.env.VITE_MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setSuccess(true);
  } catch (err) {
    setError('Er ging iets mis. Probeer het opnieuw.');
  } finally {
    setLoading(false);
  }
};
```

---

## 8. NAVBAR

```tsx
const navItems = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Showroom', href: '/showroom' },
  { name: 'Contact', href: '/contact' },
];
```

**Kenmerken:**
- Fixed top, glasmorphism: `bg-white/80 backdrop-blur-md border-b border-black/5`
- Hoogte: `h-20`
- Logo: `DM` in zwart blok + "Kantoorinrichtingen" tekst
- Actief item: `text-brand-accent`
- CTA button rechts: "Adviesgesprek" met pijl
- Mobiel: Hamburger menu met `AnimatePresence`
- `z-50` voor boven alle content

## 9. FOOTER

- 4-kolom layout op desktop
- Kolom 1-2: Logo + bedrijfsbeschrijving + social icons (LinkedIn, Instagram, Facebook)
- Kolom 3: Navigatie links
- Kolom 4: Contactgegevens met iconen (MapPin, Phone, Mail)
- Onderkant: Copyright + Privacy/Voorwaarden/Cookies links
- Achtergrond: `bg-brand-surface`

---

## 10. ROUTING (App.tsx)

```tsx
<Router>
  <ScrollToTop />
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projecten" element={<Projects />} />
          <Route path="/projecten/:slug" element={<ProjectDetail />} />
          <Route path="/diensten" element={<Services />} />
          <Route path="/diensten/:slug" element={<ServiceDetail />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </main>
    <Footer />
  </div>
</Router>
```

---

## 11. ENVIRONMENT VARIABLES

### Frontend (`.env`)
```
VITE_PAYLOAD_URL=https://dm-cms.up.railway.app
VITE_MAKE_WEBHOOK_URL=https://hook.eu2.make.com/xxxxxxxxxxxxx
```

### CMS (`.env`)
```
DATABASE_URI=mongodb+srv://user:pass@cluster.mongodb.net/dm-kantoor
PAYLOAD_SECRET=your-secret-key-here
PAYLOAD_PUBLIC_SERVER_URL=https://dm-cms.up.railway.app
PORT=3001
```

---

## 12. RAILWAY DEPLOYMENT

### Frontend (`railway.toml` of Railway dashboard)
```toml
[build]
builder = "nixpacks"
buildCommand = "cd frontend && npm install && npm run build"

[deploy]
startCommand = "cd frontend && npx serve dist -s -l $PORT"
```

### CMS (aparte Railway service)
```dockerfile
# cms/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["node", "dist/server.js"]
```

### Railway services:
1. **dm-frontend** — Statische Vite build, served met `serve`
2. **dm-cms** — Payload CMS Node.js server
3. **MongoDB** — Via MongoDB Atlas (extern, gratis M0 cluster)

---

## 13. STIJL VERFIJNINGEN (t.o.v. voorbeeld)

Voeg deze subtiele verbeteringen toe t.o.v. het voorbeeld:

1. **Micro-interacties**: Voeg subtiele `whileHover={{ y: -4 }}` toe aan project cards
2. **Scroll-reveal**: Gebruik `whileInView` op meer secties voor een dynamischer gevoel
3. **Gradient accenten**: Gebruik af en toe een subtiele gradient op CTA secties: `bg-gradient-to-br from-brand-accent to-brand-accent-dark`
4. **Verfijnde schaduwen**: Gebruik `shadow-xl shadow-black/5` voor elevated cards i.p.v. harde schaduwen
5. **Loading states**: Voeg skeleton loaders toe voor CMS content (pulserende grijze blokken)
6. **Smooth page transitions**: Gebruik `motion.div` met `initial/animate/exit` op elke pagina wrapper
7. **Image loading**: Gebruik `loading="lazy"` op alle afbeeldingen buiten de viewport
8. **Betere hover op headings**: Verwijder de globale `h1:hover, h2:hover` color change — dit is verwarrend UX. Hover effecten alleen op interactieve elementen (links, buttons, cards)
9. **Betere mobiele spacing**: Gebruik `py-16` i.p.v. `py-24` op mobiel voor secties
10. **Focus states**: Voeg `focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2` toe aan interactieve elementen voor accessibility

---

## 14. BELANGRIJKE REGELS VOOR COPILOT

1. **Altijd TypeScript** — Geen `.js` of `.jsx` bestanden, altijd `.ts` en `.tsx`
2. **Altijd functionele componenten** — Geen class components
3. **Imports uit motion/react** — Niet uit `framer-motion` direct
4. **Tailwind v4 syntax** — Gebruik `@theme` in CSS, geen `tailwind.config.js`
5. **CMS data ophalen** — Gebruik de `payload.ts` client, nooit hardcoded content voor items die uit het CMS komen
6. **Statische content mag hardcoded** — FAQ items, stappen, footer info mag in de component zelf
7. **Responsive design** — Altijd mobile-first, gebruik `md:` en `lg:` breakpoints
8. **Geen externe dependencies** toevoegen zonder expliciete instructie
9. **Nederlandse tekst** — Alle UI teksten, labels, buttons, meta tags in het Nederlands
10. **SEO basics** — `<title>` en `<meta description>` per pagina, semantische HTML (section, article, nav, main, footer)
11. **Afbeeldingen uit CMS** — Gebruik altijd `getMediaUrl()` helper voor Payload media URLs
12. **Error handling** — Toon een nette foutmelding als CMS niet bereikbaar is, geen crashed pagina's
13. **`cn()` helper** — Gebruik `cn()` (clsx + tailwind-merge) voor conditionele classes
14. **Geen `referrerPolicy="no-referrer"`** nodig — we hosten eigen afbeeldingen via Payload

---

## 15. VOORBEELD: VOLLEDIGE VITE CONFIG

```typescript
// frontend/vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

---

## 16. VOORBEELD: cn() UTILITY

```typescript
// frontend/src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 17. QUICK START COMMANDO'S

```bash
# Frontend opzetten
cd frontend
npm create vite@latest . -- --template react-ts
npm install react-router-dom motion lucide-react clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/vite

# Payload CMS opzetten
cd ../cms
npx create-payload-app@latest . --template blank
# Kies: TypeScript, MongoDB

# Development draaien
cd frontend && npm run dev     # localhost:3000
cd cms && npm run dev          # localhost:3001

# Build voor productie
cd frontend && npm run build
cd cms && npm run build
```
