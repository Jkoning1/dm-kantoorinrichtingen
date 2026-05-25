import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = 'Klaar voor een toekomstbestendig kantoor?',
  subtitle = 'Laat ons uw ruimte transformeren tot een omgeving waar uw team floreert. Vraag een vrijblijvend adviesgesprek aan.',
  primaryLabel = 'Plan een adviesgesprek',
  primaryHref = '/contact',
  secondaryLabel = 'Bekijk onze projecten',
  secondaryHref = '/projecten',
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-accent to-brand-accent-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">{title}</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryHref}
              className="bg-white text-brand-accent-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-surface transition-all inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              {primaryLabel} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={secondaryHref}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
