import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Project, Sector } from '@/lib/types';
import { getMediaUrl } from '@/lib/payload';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const imageUrl = !project.heroImage
    ? 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
    : typeof project.heroImage === 'string'
      ? project.heroImage
      : getMediaUrl(project.heroImage);
  const imageAlt = !project.heroImage || typeof project.heroImage === 'string'
    ? project.title
    : project.heroImage.alt;
  const sectorName = typeof project.sector === 'string' ? project.sector : (project.sector as Sector)?.name ?? '';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn('group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-shadow flex flex-col', className)}
    >
      <Link to={`/projecten/${project.slug}`} className="block flex flex-col flex-1">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
              {sectorName}
            </span>
            {project.specs?.size && (
              <span className="text-xs text-black/40 font-medium">{project.specs.size}</span>
            )}
          </div>
          <h3 className="text-xl font-bold font-display text-brand-primary group-hover:text-brand-accent transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-black/60 text-sm leading-relaxed line-clamp-2 mb-4">{project.summary}</p>
          {project.resultMetric && (
            <div className="flex items-center gap-3 mb-4 p-3 bg-brand-surface rounded-xl">
              <span className="text-2xl font-bold font-display text-brand-accent">{project.resultMetric.value}</span>
              <span className="text-xs text-black/60 uppercase tracking-wide">{project.resultMetric.label}</span>
            </div>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all mt-auto">
            Bekijk project <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
