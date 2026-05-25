import { motion } from 'motion/react';
import { useSiteSettings } from '@/lib/SiteSettingsContext';

export default function StatsBar() {
  const settings = useSiteSettings();
  const stats = settings.stats.length > 0 ? settings.stats : [];

  return (
    <section className="bg-brand-surface border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id || i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-bold font-display text-brand-primary">{stat.value}</div>
              <div className="text-sm text-black/60 uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
