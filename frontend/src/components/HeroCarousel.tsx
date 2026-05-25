import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CarouselImage {
  url: string;
  alt: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export default function HeroCarousel({ images, className = '' }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const go = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => go((current - 1 + images.length) % images.length, -1), [current, images.length, go]);
  const next = useCallback(() => go((current + 1) % images.length, 1), [current, images.length, go]);

  const lbPrev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null), [images.length]);
  const lbNext = useCallback(() => setLightbox(i => i !== null ? (i + 1) % images.length : null), [images.length]);

  useEffect(() => {
    if (images.length <= 1 || lightbox !== null) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, images.length, lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      else if (e.key === 'ArrowLeft') lbPrev();
      else if (e.key === 'ArrowRight') lbNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, lbPrev, lbNext]);

  if (images.length === 0) return null;

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <>
      <div className={`group relative w-full aspect-[3/2] sm:aspect-video md:aspect-[21/9] overflow-hidden ${className}`}>
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.img
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            src={images[current].url}
            alt={images[current].alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Expand button */}
        <button
          onClick={() => setLightbox(current)}
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/30 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Vergroot afbeelding"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Vorige afbeelding"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Volgende afbeelding"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  className={`rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white ${
                    i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ga naar afbeelding ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              src={images[lightbox].url}
              alt={images[lightbox].alt}
              className="max-w-full max-h-full object-contain p-4 md:p-10"
              onClick={e => e.stopPropagation()}
            />

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); lbPrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Vorige afbeelding"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={e => { e.stopPropagation(); lbNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Volgende afbeelding"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Lightbox dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); setLightbox(i); }}
                      className={`rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white ${
                        i === lightbox ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Ga naar afbeelding ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Counter */}
            <div className="absolute top-4 left-4 text-white/60 text-sm">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
