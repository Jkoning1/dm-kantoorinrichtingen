import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { getTeamMembers, getHomeContent } from '@/lib/payload';
import type { TeamMember, HomeContent } from '@/lib/types';
import { getMediaUrl } from '@/lib/payload';
import { mockHomeContent } from '@/lib/mockData';

export default function About() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [content, setContent] = useState<HomeContent>(mockHomeContent);

  useEffect(() => {
    getTeamMembers().then(r => setTeam(r.docs));
    getHomeContent().then(setContent).catch(() => {});
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-brand-surface to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Ons verhaal"
            title="Over DM Kantoorinrichtingen"
            subtitle="Meer dan 25 jaar lang helpen wij organisaties een werkomgeving te creëren waar mensen écht in tot hun recht komen."
          />
        </div>
      </div>

      {/* Visie */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
                alt="DM Kantoorinrichtingen kantoor"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Onze visie</p>
              <h2 className="text-3xl font-bold font-display mb-6">
                {content.aboutVisieHeading || 'Een werkplek is meer dan vier muren en een bureau'}
              </h2>
              {content.companyDescription1 && (
                <p className="text-black/60 leading-relaxed mb-6">{content.companyDescription1}</p>
              )}
              {content.companyDescription2 && (
                <p className="text-black/60 leading-relaxed mb-8">{content.companyDescription2}</p>
              )}
              <div className="grid grid-cols-2 gap-4">
                {content.waarden.map((w, i) => (
                  <div key={w.id || i} className="p-4 bg-brand-surface rounded-xl">
                    <h4 className="font-bold text-sm mb-1">{w.title}</h4>
                    <p className="text-xs text-black/60 leading-relaxed">{w.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Ons team"
            title="De mensen achter DM"
            subtitle="Een gedreven team van specialisten met hart voor gezonde, duurzame werkomgevingen."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const photoUrl = !member.photo
                ? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
                : typeof member.photo === 'string'
                  ? member.photo
                  : getMediaUrl(member.photo);
              const photoAlt = !member.photo
                ? member.name
                : typeof member.photo === 'string'
                  ? member.name
                  : member.photo.alt;
              return (
                <motion.div
                  key={member.id}
                  className="group text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
                    <img
                      src={photoUrl}
                      alt={photoAlt}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold font-display text-lg">{member.name}</h3>
                  <p className="text-sm text-black/60">{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Maak kennis met ons team"
        subtitle="Plan een vrijblijvend gesprek en ontdek wat wij voor uw organisatie kunnen betekenen."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Bekijk onze projecten"
        secondaryHref="/projecten"
      />
    </motion.div>
  );
}
