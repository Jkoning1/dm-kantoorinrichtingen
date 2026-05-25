export interface Media {
  id: string;
  url: string;
  alt: string;
  filename: string;
  sizes?: {
    thumbnail?: { url: string; width: number; height: number };
    card?: { url: string; width: number; height: number };
    hero?: { url: string; width: number; height: number };
  };
}

export type SlateNode = {
  type?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  url?: string;
  newTab?: boolean;
  children?: SlateNode[];
  value?: unknown;
};

export interface Project {
  id: string;
  title: string;
  slug: string;
  sector: 'Technologie' | 'Zakelijke Dienstverlening' | 'Zorg' | 'Onderwijs' | 'Overheid' | 'Creatief';
  featured: boolean;
  heroImage?: Media | string;
  gallery?: Array<{ image: Media | string; caption?: string }>;
  summary: string;
  challenge?: SlateNode[];
  solution?: SlateNode[];
  result?: SlateNode[];
  specs?: {
    size?: string;
    duration?: string;
    workplaces?: string;
    year?: number;
  };
  testimonial?: {
    quote?: string;
    author?: string;
    role?: string;
  };
  resultMetric?: {
    label?: string;
    value?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ServiceFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  heroImage?: Media | string;
  content?: SlateNode[];
  features?: ServiceFeature[];
  benefits?: Array<{ text: string }>;
  order?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo?: Media | string;
  order?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order?: number;
}

export interface SiteSettings {
  address: string;
  addressCity: string;
  phone: string;
  phoneHref: string;
  email: string;
  footerDescription: string;
  openingHours: Array<{ id?: string; day: string; hours: string }>;
  socialLinkedin?: string;
  socialInstagram?: string;
  socialFacebook?: string;
  stats: Array<{ id?: string; value: string; label: string }>;
  showroomUSPs: Array<{ id?: string; icon: string; title: string; description: string }>;
  mapsUrl?: string;
}

export interface HomeContent {
  heroHeading: string;
  heroSubtitle: string;
  heroLabel?: string;
  heroPrimaryButtonLabel?: string;
  heroSecondaryButtonLabel?: string;
  aanpakSteps: Array<{ id?: string; number: string; title: string; description: string }>;
  duurzaamheidLabel?: string;
  duurzaamheidHeading: string;
  duurzaamheidText: string;
  duurzaamheidChecklist: Array<{ id?: string; text: string }>;
  contactCtaHeading?: string;
  contactCtaText?: string;
  aboutVisieHeading?: string;
  companyDescription1?: string;
  companyDescription2?: string;
  waarden: Array<{ id?: string; title: string; description: string }>;
}

export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
}
