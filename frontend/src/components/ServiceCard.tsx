import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Service } from '@/lib/types';
import { getMediaUrl } from '@/lib/payload';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

import type { LucideProps } from 'lucide-react';

function ServiceIcon({ name }: { name: string }) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className="w-6 h-6" />;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const imageUrl = !service.heroImage
    ? 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80'
    : typeof service.heroImage === 'string'
      ? service.heroImage
      : getMediaUrl(service.heroImage);
  const imageAlt = !service.heroImage || typeof service.heroImage === 'string'
    ? service.title
    : service.heroImage.alt;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn('group relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end', className)}
    >
      <Link to={`/diensten/${service.slug}`} className="absolute inset-0 z-10" aria-label={service.title} />
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="relative z-20 p-6">
        <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center mb-4 text-white group-hover:bg-brand-secondary transition-colors">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="text-xl font-bold font-display text-white mb-2">{service.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all">
          Lees meer <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}
