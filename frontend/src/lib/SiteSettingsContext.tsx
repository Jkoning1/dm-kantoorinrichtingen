import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { SiteSettings } from './types';
import { getSiteSettings } from './payload';
import { mockSiteSettings } from './mockData';

const SiteSettingsContext = createContext<SiteSettings>(mockSiteSettings);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(mockSiteSettings);

  useEffect(() => {
    getSiteSettings().then(setSettings).catch(() => {});
  }, []);

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
