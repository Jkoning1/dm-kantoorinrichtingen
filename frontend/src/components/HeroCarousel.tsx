import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const go = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => go((current - 1 + images.length) % images.length, -1), [current, images.length, go]);
  const next = useCallback(() => go((current + 1) % images.length, 1), [current, images.length, go]);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, images.length]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className={`w-full aspect-[21/9] overflow-hidden ${className}`}>
        <img src={images[0].url} alt={images[0].alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className={`relative w-full aspect-[21/9] overflow-hidden ${className}`}>
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

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Vorige afbeelding"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Volgende afbeelding"
      >
        <ChevronRight className="w-5 h-5" />
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
    </div>
  );
}
