import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { getServices } from '@/lib/payload';
import type { Service } from '@/lib/types';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then(r => {
      setServices(r.docs);
      setLoading(false);
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-16 bg-gradient-to-b from-brand-surface to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Onze expertise"
            title="Diensten"
            subtitle="Van strategisch advies tot complete realisatie — wij begeleiden u door het gehele traject van een nieuwe kantooromgeving."
          />
        </div>
      </div>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="rounded-2xl bg-brand-surface animate-pulse min-h-[320px]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <ServiceCard service={service} className="h-full" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
}
