import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { useSiteSettings } from '@/lib/SiteSettingsContext';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={className || 'w-5 h-5'} />;
}

export default function Showroom() {
  const settings = useSiteSettings();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-16 bg-gradient-to-b from-brand-surface to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Bezoek ons"
            title="Onze showroom in Buurmalsen"
            subtitle="Kom langs en laat u inspireren. Meer dan 2.000 m² aan kantoorinrichting op één locatie, midden in het Rivierenland."
          />
        </div>
      </div>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-display mb-8">Waarom onze showroom bezoeken?</h2>
              <div className="space-y-5 mb-10">
                {settings.showroomUSPs.map(({ icon, title, description }, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-brand-surface rounded-2xl border border-black/5 hover:shadow-lg hover:shadow-black/5 transition-all">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 text-brand-accent shadow-sm">
                      <DynamicIcon name={icon} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{title}</h4>
                      <p className="text-sm text-black/60 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-5 bg-brand-primary text-white rounded-2xl mb-6">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <div>
                  <div className="font-semibold">{settings.address}</div>
                  <div className="text-sm text-white/60">{settings.addressCity}</div>
                </div>
              </div>
              {settings.mapsUrl && (
                <a
                  href={settings.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:gap-4 transition-all"
                >
                  Routebeschrijving openen <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>

            {/* Afbeelding + openingstijden rechts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80"
                  alt="DM Kantoorinrichtingen showroom"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <LucideIcons.Clock className="w-4 h-4 text-brand-accent" />
                    <h3 className="font-bold text-sm uppercase tracking-widest text-black/40">Openingstijden</h3>
                  </div>
                  <ul className="space-y-2">
                    {settings.openingHours.map(({ day, hours }, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-black/70">{day}</span>
                        <span className={`font-semibold ${hours === 'Gesloten' ? 'text-black/30' : 'text-brand-primary'}`}>{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bezoek plannen CTA */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Plan uw bezoek aan de showroom</h2>
          <p className="text-black/60 text-lg max-w-xl mx-auto mb-8">
            Maak een afspraak voor een persoonlijk rondleiding met één van onze adviseurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-accent-dark transition-all inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Afspraak maken <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={settings.phoneHref}
              className="border border-black/10 text-brand-primary px-8 py-4 rounded-full text-lg font-medium hover:border-brand-accent hover:text-brand-accent transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Direct bellen
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
