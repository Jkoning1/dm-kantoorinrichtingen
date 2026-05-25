import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { getServiceBySlug, getMediaUrl } from '@/lib/payload';
import type { Service } from '@/lib/types';
import * as LucideIcons from 'lucide-react';
import CTASection from '@/components/CTASection';

import type { LucideProps } from 'lucide-react';

function DynamicIcon({ name }: { name: string }) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className="w-6 h-6" />;
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    getServiceBySlug(slug).then(s => {
      setService(s);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="aspect-[21/9] bg-brand-surface animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-4">
          <div className="h-10 bg-brand-surface rounded-xl animate-pulse w-2/3" />
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="pt-32 min-h-screen max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Dienst niet gevonden</h1>
        <Link to="/diensten" className="text-brand-accent hover:underline">Terug naar diensten</Link>
      </div>
    );
  }

  const heroUrl = !service.heroImage
    ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80'
    : typeof service.heroImage === 'string'
      ? service.heroImage
      : getMediaUrl(service.heroImage);
  const heroAlt = !service.heroImage || typeof service.heroImage === 'string'
    ? service.title
    : service.heroImage.alt;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-20">
        <img src={heroUrl} alt={heroAlt} className="w-full aspect-[21/9] object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-sm text-black/40 mb-8">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/diensten" className="hover:text-brand-accent transition-colors">Diensten</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-primary">{service.title}</span>
        </nav>

        <Link to="/diensten" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-brand-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Terug naar diensten
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{service.title}</h1>
            <p className="text-lg text-black/60 leading-relaxed mb-10">{service.shortDescription}</p>

            {service.features && service.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Wat omvat deze dienst?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="p-6 bg-brand-surface rounded-2xl border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      {feature.icon && (
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-brand-accent shadow-sm">
                          <DynamicIcon name={feature.icon} />
                        </div>
                      )}
                      <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                      <p className="text-black/60 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-brand-primary text-white p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6">Waarom kiezen voor ons?</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                      <span className="text-white/90">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="bg-brand-surface p-6 rounded-2xl border border-black/5">
              <h3 className="text-lg font-bold mb-3">Interesse in deze dienst?</h3>
              <p className="text-black/60 text-sm leading-relaxed mb-5">
                Neem contact op voor een vrijblijvend adviesgesprek. Wij denken graag met u mee over de mogelijkheden.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-brand-accent text-white py-3 rounded-xl font-bold text-center hover:bg-brand-accent-dark transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </motion.div>
  );
}
