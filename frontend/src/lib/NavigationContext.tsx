import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Navigation } from './types';
import { getNavigation } from './payload';
import { mockNavigation } from './mockData';

const NavigationContext = createContext<Navigation>(mockNavigation);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [navigation, setNavigation] = useState<Navigation>(mockNavigation);

  useEffect(() => {
    getNavigation().then(setNavigation).catch(() => {});
  }, []);

  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
