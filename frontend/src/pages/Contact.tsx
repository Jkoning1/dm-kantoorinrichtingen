import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { useSiteSettings } from '@/lib/SiteSettingsContext';

export default function Contact() {
  const settings = useSiteSettings();

  const openingHoursText = settings.openingHours
    .map(h => `${h.day}: ${h.hours}`)
    .join('\n');

  const contactInfo = [
    { icon: MapPin, label: 'Adres', value: `${settings.address}\n${settings.addressCity}` },
    { icon: Phone, label: 'Telefoon', value: settings.phone, href: settings.phoneHref },
    { icon: Mail, label: 'E-mail', value: settings.email, href: `mailto:${settings.email}` },
    { icon: Clock, label: 'Openingstijden', value: openingHoursText },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-16 bg-gradient-to-b from-brand-surface to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Neem contact op"
            title="Laten we kennismaken"
            subtitle="Vertel ons over uw project. Wij plannen graag een vrijblijvend gesprek en denken direct mee."
          />
        </div>
      </div>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Links: contactgegevens */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold font-display mb-8">Contactgegevens</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 bg-brand-surface rounded-xl flex items-center justify-center shrink-0 text-brand-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-black/40 mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-brand-primary hover:text-brand-accent transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-primary whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-brand-surface rounded-2xl border border-black/5">
                <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Ons team staat voor u klaar</p>
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[
                      { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80', alt: 'Dirk' },
                      { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80', alt: 'Lisa' },
                      { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80', alt: 'Mark' },
                      { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80', alt: 'Sophie' },
                    ].map((img, i) => (
                      <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        style={{ marginLeft: i > 0 ? '-8px' : 0 }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Wij reageren binnen 1 werkdag</p>
                    <p className="text-xs text-black/50">Gemiddelde responstijd: 2 uur</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rechts: formulier */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-brand-surface p-8 rounded-2xl border border-black/5">
                <h2 className="text-2xl font-bold font-display mb-6">Stuur een bericht</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
