import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/SectionHeading';
import StatsBar from '@/components/StatsBar';
import ClientLogosBar from '@/components/ClientLogosBar';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import { getFeaturedProjects, getServices, getHomeContent, getTeamMembers, getMediaUrl } from '@/lib/payload';
import { mockHomeContent } from '@/lib/mockData';
import { useSEO } from '@/lib/useSEO';
import type { Project, Service, HomeContent, TeamMember } from '@/lib/types';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [content, setContent] = useState<HomeContent>(mockHomeContent);
  const [team, setTeam] = useState<TeamMember[]>([]);

  useSEO(content.seoHomeTitle, content.seoHomeDescription);

  useEffect(() => {
    getFeaturedProjects().then(r => setProjects(r.docs.slice(0, 2)));
    getServices().then(r => setServices(r.docs.slice(0, 6)));
    getHomeContent().then(setContent).catch(() => {});
    getTeamMembers().then(r => setTeam(r.docs.slice(0, 3)));
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={
            content.homeHeroImage
              ? (typeof content.homeHeroImage === 'string' ? content.homeHeroImage : getMediaUrl(content.homeHeroImage))
              : 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80'
          }
          alt="Modern kantoor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.heroLabel && (
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">{content.heroLabel}</p>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-white leading-[1.1] max-w-3xl mb-6">
              {content.heroHeading}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-accent-dark transition-all inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                {content.heroPrimaryButtonLabel || 'Plan een adviesgesprek'} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projecten"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
              >
                {content.heroSecondaryButtonLabel || 'Bekijk onze projecten'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Client logos */}
      <ClientLogosBar />

      {/* Uitgelichte Projecten */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Onze realisaties"
            title="Uitgelichte projecten"
            subtitle="Bekijk hoe wij kantooromgevingen transformeren tot plekken waar teams optimaal presteren."
          />
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map(i => (
                <div key={i} className="rounded-2xl bg-brand-surface animate-pulse aspect-[4/3]" />
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link
              to="/projecten"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:gap-4 transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              Alle projecten bekijken <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Onze Aanpak */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Werkwijze"
            title="Onze aanpak"
            subtitle="Een bewezen proces dat leidt tot kantooromgevingen waar uw team écht blij mee is."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.aanpakSteps.map((step, i) => (
              <motion.div
                key={step.id || i}
                className="p-6 bg-white rounded-2xl border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold font-display text-brand-accent/60 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold font-display mb-2">{step.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Wat wij doen"
            title="Onze diensten"
            subtitle="Van strategisch advies tot complete inrichting — wij begeleiden u door het hele traject."
          />
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="rounded-2xl bg-brand-surface animate-pulse min-h-[320px]" />
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:gap-4 transition-all"
            >
              Alle diensten bekijken <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Duurzaamheid & Welzijn */}
      <section className="py-16 md:py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {content.duurzaamheidLabel && (
                <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">{content.duurzaamheidLabel}</p>
              )}
              <h2 className="text-4xl font-bold font-display text-white mb-6">
                {content.duurzaamheidHeading}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {content.duurzaamheidText}
              </p>
              <ul className="space-y-4">
                {content.duurzaamheidChecklist.map((item, i) => (
                  <li key={item.id || i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={
                  content.homeSustainabilityImage
                    ? (typeof content.homeSustainabilityImage === 'string' ? content.homeSustainabilityImage : getMediaUrl(content.homeSustainabilityImage))
                    : 'https://images.unsplash.com/photo-1542601906897-a9b4c1116f99?w=800&q=80'
                }
                alt="Duurzame kantoorinrichting"
                className="w-full h-64 md:h-[500px] object-cover rounded-3xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Veelgestelde vragen"
            title="Heeft u een vraag?"
            subtitle="De meest gestelde vragen over onze werkwijze en dienstverlening."
          />
          <FAQ />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Direct contact</p>
              <h2 className="text-4xl font-bold font-display mb-6">
                {content.contactCtaHeading || 'Laten we kennismaken'}
              </h2>
              <p className="text-black/60 text-lg leading-relaxed mb-8">
                {content.contactCtaText || 'Vertel ons over uw ruimte en wensen. We plannen graag een vrijblijvend gesprek en denken direct mee over de mogelijkheden.'}
              </p>
              {team.length > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {team.map((member, i) => {
                      const photoUrl = !member.photo
                        ? `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80`
                        : typeof member.photo === 'string'
                          ? member.photo
                          : getMediaUrl(member.photo);
                      return (
                        <img
                          key={member.id}
                          src={photoUrl}
                          alt={member.name}
                          className="w-14 h-14 rounded-full object-cover object-top border-2 border-white shadow-md"
                          style={{ marginLeft: i > 0 ? '-10px' : 0 }}
                          loading="lazy"
                        />
                      );
                    })}
                  </div>
                  <p className="text-sm text-black/60">Ons team staat voor u klaar</p>
                </div>
              )}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
