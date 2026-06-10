import type { PayloadResponse, Project, Service, TeamMember, FAQItem, SiteSettings, HomeContent, Sector, Blog, Navigation } from './types';
import { mockProjects, mockServices, mockTeamMembers, mockFAQItems, mockSiteSettings, mockHomeContent, mockBlogs, mockNavigation } from './mockData';

const CMS_URL = import.meta.env.VITE_PAYLOAD_URL || '';

function normalizeSlug(value: string): string {
  const trimmed = value.trim();
  let decoded = trimmed;
  try {
    decoded = decodeURIComponent(trimmed);
  } catch {
    decoded = trimmed;
  }

  return decoded
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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

export async function getSectors(): Promise<Sector[]> {
  try {
    const res = await fetchAPI<PayloadResponse<Sector>>('sectors', { limit: '100', sort: 'name' });
    return res.docs;
  } catch {
    const names = [...new Set(mockProjects.map(p => typeof p.sector === 'string' ? p.sector : (p.sector as Sector).name))].sort();
    return names.map(name => ({ id: name, name }));
  }
}

export async function getProjects(sectorId?: string): Promise<PayloadResponse<Project>> {
  try {
    const params: Record<string, string> = { limit: '100', sort: '-createdAt', depth: '1' };
    if (sectorId) params['where[sector][equals]'] = sectorId;
    return await fetchAPI<PayloadResponse<Project>>('projects', params);
  } catch {
    const docs = sectorId
      ? mockProjects.filter(p => {
          const name = typeof p.sector === 'string' ? p.sector : (p.sector as Sector).name;
          return name === sectorId;
        })
      : mockProjects;
    return { docs, totalDocs: docs.length, totalPages: 1, page: 1 };
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const requestedSlug = slug.trim();

    const res = await fetchAPI<PayloadResponse<Project>>('projects', {
      limit: '1',
      'where[slug][equals]': slug,
      depth: '2',
    });

    if (res.docs[0]) {
      return res.docs[0];
    }

    // Fallback for legacy or manually entered slugs with case/encoding differences.
    const allProjects = await fetchAPI<PayloadResponse<Project>>('projects', {
      limit: '200',
      depth: '2',
    });

    const requestedNormalized = normalizeSlug(requestedSlug);
    return (
      allProjects.docs.find(project => {
        const projectSlug = project.slug || '';
        return projectSlug === requestedSlug || normalizeSlug(projectSlug) === requestedNormalized;
      }) || null
    );
  } catch {
    const requestedSlug = slug.trim();
    const requestedNormalized = normalizeSlug(requestedSlug);

    return (
      mockProjects.find(project => {
        const projectSlug = project.slug || '';
        return projectSlug === requestedSlug || normalizeSlug(projectSlug) === requestedNormalized;
      }) || null
    );
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

export async function getBlogs(): Promise<PayloadResponse<Blog>> {
  try {
    return await fetchAPI<PayloadResponse<Blog>>('blogs', { sort: '-publishedAt', depth: '1', limit: '100' });
  } catch {
    return { docs: mockBlogs, totalDocs: mockBlogs.length, totalPages: 1, page: 1 };
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetchAPI<PayloadResponse<Blog>>('blogs', {
      'where[slug][equals]': slug,
      depth: '2',
    });
    return res.docs[0] || null;
  } catch {
    return mockBlogs.find(b => b.slug === slug) || null;
  }
}

export async function getNavigation(): Promise<Navigation> {
  try {
    const data = await fetchGlobal<Partial<Navigation>>('navigation');
    return { ...mockNavigation, ...data };
  } catch {
    return mockNavigation;
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

/** Returns the resolved media URL, or null when no real image is set (so callers can show a neutral placeholder instead of a stock fallback). */
export function getMediaUrlOrNull(media: { url: string } | string | undefined | null): string | null {
  if (!media) return null;
  return getMediaUrl(media);
}
