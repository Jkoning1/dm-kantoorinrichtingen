import { useEffect } from 'react';

const SITE_NAME = 'DM Kantoorinrichtingen';
const DEFAULT_DESC = 'Meer dan 25 jaar ervaring in professionele kantoorinrichting. Van strategisch advies tot complete inrichting. Gevestigd in Buurmalsen, actief door heel Nederland.';

export function useSEO(title?: string, description?: string) {
  useEffect(() => {
    document.title = title || SITE_NAME;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description || DEFAULT_DESC;
  }, [title, description]);
}
