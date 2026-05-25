import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getMediaUrl } from '@/lib/payload';

interface GalleryItem {
  image: { url: string; alt: string } | string;
  caption?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = () => setLightboxIndex(null);
  const prev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + items.length) % items.length : null), [items.length]);
  const next = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % items.length : null), [items.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, prev, next]);

  function getUrl(item: GalleryItem) {
    if (typeof item.image === 'string') return item.image;
    return getMediaUrl(item.image);
  }
  function getAlt(item: GalleryItem) {
    if (typeof item.image === 'string') return '';
    return item.image.alt;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            <img
              src={getUrl(item)}
              alt={getAlt(item)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-brand-primary" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={getUrl(items[lightboxIndex])}
              alt={getAlt(items[lightboxIndex])}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />
            {items[lightboxIndex].caption && (
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full">
                {items[lightboxIndex].caption}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
