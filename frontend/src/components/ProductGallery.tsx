import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getMediaUrl } from '@/lib/payload';
import type { Media } from '@/lib/types';

interface ProductItem {
  id?: string;
  image: Media | string;
  name: string;
  brand?: string;
  description?: string;
}

interface ProductGalleryProps {
  items: ProductItem[];
}

function imgUrl(item: ProductItem) {
  return typeof item.image === 'string' ? item.image : getMediaUrl(item.image);
}
function imgAlt(item: ProductItem) {
  return typeof item.image === 'string' ? item.name : (item.image as Media).alt || item.name;
}

export default function ProductGallery({ items }: ProductGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (delta > 50) next();
    else if (delta < -50) prev();
    setTouchStartX(null);
  }

  const active = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-3 scrollbar-none">
        {items.map((item, i) => (
          <button
            key={item.id || i}
            onClick={() => setLightboxIndex(i)}
            className="snap-start shrink-0 w-[58vw] bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            <div className="aspect-square bg-gray-50 flex items-center justify-center p-5">
              <img src={imgUrl(item)} alt={imgAlt(item)} className="w-full h-full object-contain" loading="lazy" />
            </div>
            <div className="p-4">
              {item.brand && <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-0.5">{item.brand}</p>}
              <h3 className="font-semibold text-sm leading-snug text-brand-primary">{item.name}</h3>
              {item.description && <p className="text-xs text-black/40 mt-1 leading-relaxed">{item.description}</p>}
            </div>
          </button>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, i) => (
          <motion.button
            key={item.id || i}
            onClick={() => setLightboxIndex(i)}
            className="group bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden text-left hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-6">
              <img src={imgUrl(item)} alt={imgAlt(item)} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-brand-primary" />
                </div>
              </div>
            </div>
            <div className="p-4">
              {item.brand && <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-0.5">{item.brand}</p>}
              <h3 className="font-semibold text-sm leading-snug text-brand-primary">{item.name}</h3>
              {item.description && <p className="text-xs text-black/40 mt-1 leading-relaxed">{item.description}</p>}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox showcase */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={close}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
            {items.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Vorige"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={e => { e.stopPropagation(); next(); }}
                  className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Volgende"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-gray-50 flex items-center justify-center p-8 md:p-12 flex-1 min-h-0">
                <img
                  src={imgUrl(active)}
                  alt={imgAlt(active)}
                  className="max-w-full max-h-[55vh] object-contain"
                />
              </div>
              <div className="p-6 border-t border-black/5">
                {active.brand && <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-1">{active.brand}</p>}
                <h3 className="text-xl font-bold font-display text-brand-primary">{active.name}</h3>
                {active.description && <p className="text-sm text-black/50 mt-2 leading-relaxed">{active.description}</p>}
              </div>
            </motion.div>

            {/* Dot indicators */}
            {items.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                    aria-label={`Product ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
