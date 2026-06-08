import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, MapPin, Clock, Users, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { getProjectBySlug, getMediaUrl } from '@/lib/payload';
import type { Sector } from '@/lib/types';
import type { Project } from '@/lib/types';
import ImageGallery from '@/components/ImageGallery';
import CTASection from '@/components/CTASection';
import RichText from '@/components/RichText';
import { useSEO } from '@/lib/useSEO';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useSEO(project?.seo?.metaTitle, project?.seo?.metaDescription);

  useEffect(() => {
    if (!slug) return;
    getProjectBySlug(slug).then(p => {
      setProject(p);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="aspect-[21/9] bg-brand-surface animate-pulse" />
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-4">
          <div className="h-10 bg-brand-surface rounded-xl animate-pulse w-2/3" />
          <div className="h-4 bg-brand-surface rounded animate-pulse w-full" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 min-h-screen max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project niet gevonden</h1>
        <Link to="/projecten" className="text-brand-accent hover:underline">Terug naar projecten</Link>
      </div>
    );
  }

  const heroUrl = !project.heroImage
    ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80'
    : typeof project.heroImage === 'string'
      ? project.heroImage
      : getMediaUrl(project.heroImage);

  const heroAlt = !project.heroImage
    ? project.title
    : typeof project.heroImage === 'string'
      ? project.title
      : project.heroImage.alt;

  const hasChallenge = project.challenge && Array.isArray(project.challenge) && project.challenge.length > 0;
  const hasSolution = project.solution && Array.isArray(project.solution) && project.solution.length > 0;
  const hasResult = project.result && Array.isArray(project.result) && project.result.length > 0;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <div className="pt-20">
        <img src={heroUrl} alt={heroAlt} className="w-full aspect-[3/2] sm:aspect-video md:aspect-[21/9] object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-black/40 mb-8">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/projecten" className="hover:text-brand-accent transition-colors">Projecten</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-primary">{project.title}</span>
        </nav>

        <Link to="/projecten" className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-brand-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Terug naar projecten
        </Link>

        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
            {typeof project.sector === 'string' ? project.sector : (project.sector as Sector)?.name}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-4">{project.title}</h1>
          <p className="text-lg text-black/60 leading-relaxed max-w-3xl">{project.summary}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content links */}
          <div className="lg:col-span-2 space-y-10">
            {hasChallenge && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-4">De uitdaging</h2>
                <RichText content={project.challenge} />
              </div>
            )}
            {hasSolution && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-4">Onze aanpak</h2>
                <RichText content={project.solution} />
              </div>
            )}
            {hasResult && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-4">Het resultaat</h2>
                <RichText content={project.result} />
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Fotogalerij</h2>
                <ImageGallery items={project.gallery} />
              </div>
            )}
          </div>

          {/* Sidebar rechts */}
          <div className="space-y-6">
            {project.specs && (
              <div className="bg-brand-primary text-white p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6">Projectspecificaties</h3>
                <ul className="space-y-5">
                  {project.specs.size && (
                    <li className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wide">Oppervlakte</div>
                        <div className="font-semibold">{project.specs.size}</div>
                      </div>
                    </li>
                  )}
                  {project.specs.duration && (
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-brand-accent shrink-0" />
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wide">Doorlooptijd</div>
                        <div className="font-semibold">{project.specs.duration}</div>
                      </div>
                    </li>
                  )}
                  {project.specs.workplaces && (
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-brand-accent shrink-0" />
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wide">Werkplekken</div>
                        <div className="font-semibold">{project.specs.workplaces}</div>
                      </div>
                    </li>
                  )}
                  {project.specs.year && (
                    <li className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-brand-accent shrink-0" />
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wide">Opgeleverd</div>
                        <div className="font-semibold">{project.specs.year}</div>
                      </div>
                    </li>
                  )}
                </ul>
                {project.resultMetric?.value && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-4xl font-bold font-display text-brand-accent">{project.resultMetric.value}</div>
                    <div className="text-xs text-white/60 uppercase tracking-wide mt-1">{project.resultMetric.label}</div>
                  </div>
                )}
              </div>
            )}

            {project.testimonial?.quote && (
              <div className="bg-brand-surface p-6 rounded-2xl border border-black/5">
                <p className="text-black/70 italic leading-relaxed mb-4">"{project.testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-sm">{project.testimonial.author}</div>
                  <div className="text-xs text-black/40">{project.testimonial.role}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Productgalerij */}
      {project.productGallery && project.productGallery.length > 0 && (
        <section className="py-16 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold font-display mb-2">Gebruikte producten</h2>
            <p className="text-sm text-black/40 mb-8">De meubelen en producten toegepast in dit project</p>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-3 scrollbar-none">
              {project.productGallery.map((item, i) => {
                const imgUrl = typeof item.image === 'string' ? item.image : getMediaUrl(item.image);
                const imgAlt = typeof item.image === 'string' ? item.name : (item.image as { alt: string }).alt || item.name;
                return (
                  <div key={item.id || i} className="snap-start shrink-0 w-[58vw] bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
                    <div className="aspect-square bg-gray-50 flex items-center justify-center p-5">
                      <img src={imgUrl} alt={imgAlt} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="p-4">
                      {item.brand && <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-0.5">{item.brand}</p>}
                      <h3 className="font-semibold text-sm leading-snug text-brand-primary">{item.name}</h3>
                      {item.description && <p className="text-xs text-black/40 mt-1 leading-relaxed">{item.description}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
              {project.productGallery.map((item, i) => {
                const imgUrl = typeof item.image === 'string' ? item.image : getMediaUrl(item.image);
                const imgAlt = typeof item.image === 'string' ? item.name : (item.image as { alt: string }).alt || item.name;
                return (
                  <motion.div
                    key={item.id || i}
                    className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                      <img src={imgUrl} alt={imgAlt} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="p-4">
                      {item.brand && <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-0.5">{item.brand}</p>}
                      <h3 className="font-semibold text-sm leading-snug text-brand-primary">{item.name}</h3>
                      {item.description && <p className="text-xs text-black/40 mt-1 leading-relaxed">{item.description}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Zullen we ook voor u zo'n project realiseren?"
        subtitle="Neem contact op voor een vrijblijvend kennismakingsgesprek."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Meer projecten bekijken"
        secondaryHref="/projecten"
      />
    </motion.div>
  );
}
