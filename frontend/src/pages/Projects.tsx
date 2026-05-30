import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { getProjects, getSectors } from '@/lib/payload';
import type { Project, Sector } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSectors().then(setSectors);
  }, []);

  useEffect(() => {
    setLoading(true);
    getProjects(selectedSector?.id).then(r => {
      setProjects(r.docs);
      setLoading(false);
    });
  }, [selectedSector]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-brand-surface to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Onze realisaties"
            title="Projecten"
            subtitle="Van ambitieuze startups tot toonaangevende corporates. Ontdek hoe wij kantooromgevingen transformeren."
            align="left"
          />
          <div className="flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setSelectedSector(null)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2',
                !selectedSector
                  ? 'bg-brand-accent text-white'
                  : 'bg-white border border-black/10 text-black/70 hover:border-brand-accent hover:text-brand-accent'
              )}
            >
              Alle
            </button>
            {sectors.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2',
                  selectedSector?.id === s.id
                    ? 'bg-brand-accent text-white'
                    : 'bg-white border border-black/10 text-black/70 hover:border-brand-accent hover:text-brand-accent'
                )}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="rounded-2xl bg-brand-surface animate-pulse aspect-[4/3]" />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20 text-black/40">
              <p className="text-lg">Geen projecten gevonden in deze categorie.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {projects.map(project => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <ProjectCard project={project} className="h-full" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
