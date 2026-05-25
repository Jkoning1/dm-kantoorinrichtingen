import type { PayloadResponse, Project, Service, TeamMember, FAQItem, SiteSettings, HomeContent } from './types';
import { mockProjects, mockServices, mockTeamMembers, mockFAQItems, mockSiteSettings, mockHomeContent } from './mockData';

const CMS_URL = import.meta.env.VITE_PAYLOAD_URL || '';

async function fetchAPI<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const base = CMS_URL ? `${CMS_URL}/api` : '/api';
  const url = new URL(base + '/' + endpoint, window.location.origin);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

async function fetchGlobal<T>(slug: string): Promise<T> {
  const base = CMS_URL || '';
  const res = await fetch(`${base}/api/globals/${slug}`);
  if (!res.ok) throw new Error(`Global API error: ${res.status}`);
  return res.json();
}

export async function getProjects(sector?: string): Promise<PayloadResponse<Project>> {
  try {
    const params: Record<string, string> = { limit: '100', sort: '-createdAt', depth: '1' };
    if (sector && sector !== 'Alle') params['where[sector][equals]'] = sector;
    return await fetchAPI<PayloadResponse<Project>>('projects', params);
  } catch {
    const docs = sector && sector !== 'Alle'
      ? mockProjects.filter(p => p.sector === sector)
      : mockProjects;
    return { docs, totalDocs: docs.length, totalPages: 1, page: 1 };
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const res = await fetchAPI<PayloadResponse<Project>>('projects', {
      'where[slug][equals]': slug,
      depth: '2',
    });
    return res.docs[0] || null;
  } catch {
    return mockProjects.find(p => p.slug === slug) || null;
  }
}

export async function getFeaturedProjects(): Promise<PayloadResponse<Project>> {
  try {
    return await fetchAPI<PayloadResponse<Project>>('projects', {
      'where[featured][equals]': 'true',
      limit: '4',
      depth: '1',
    });
  } catch {
    const docs = mockProjects.filter(p => p.featured);
    return { docs, totalDocs: docs.length, totalPages: 1, page: 1 };
  }
}

export async function getServices(): Promise<PayloadResponse<Service>> {
  try {
    return await fetchAPI<PayloadResponse<Service>>('services', { sort: 'order', depth: '1' });
  } catch {
    return { docs: mockServices, totalDocs: mockServices.length, totalPages: 1, page: 1 };
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const res = await fetchAPI<PayloadResponse<Service>>('services', {
      'where[slug][equals]': slug,
      depth: '2',
    });
    return res.docs[0] || null;
  } catch {
    return mockServices.find(s => s.slug === slug) || null;
  }
}

export async function getTeamMembers(): Promise<PayloadResponse<TeamMember>> {
  try {
    return await fetchAPI<PayloadResponse<TeamMember>>('team-members', { sort: 'order', depth: '1' });
  } catch {
    return { docs: mockTeamMembers, totalDocs: mockTeamMembers.length, totalPages: 1, page: 1 };
  }
}

export async function getFAQItems(): Promise<FAQItem[]> {
  try {
    const res = await fetchAPI<PayloadResponse<FAQItem>>('faq', { sort: 'order', limit: '20' });
    return res.docs;
  } catch {
    return mockFAQItems;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await fetchGlobal<Partial<SiteSettings>>('site-settings');
    return { ...mockSiteSettings, ...data };
  } catch {
    return mockSiteSettings;
  }
}

export async function getHomeContent(): Promise<HomeContent> {
  try {
    const data = await fetchGlobal<Partial<HomeContent>>('home-content');
    return { ...mockHomeContent, ...data };
  } catch {
    return mockHomeContent;
  }
}

export function getMediaUrl(media: { url: string } | string): string {
  if (typeof media === 'string') return `${CMS_URL}/media/${media}`;
  if (media.url.startsWith('http')) return media.url;
  return `${CMS_URL}${media.url}`;
}
