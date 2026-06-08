import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { getPageBySlug, getMediaUrl } from '@/lib/payload';
import type { Page, PageBlock } from '@/lib/types';
import RichText from '@/components/RichText';
import CTASection from '@/components/CTASection';
import NotFound from '@/pages/NotFound';
import { useSEO } from '@/lib/useSEO';

function HeroBlock({ block }: { block: PageBlock }) {
  const imageUrl = !block.image
    ? null
    : typeof block.image === 'string'
      ? block.image
      : getMediaUrl(block.image);

  return (
    <div className="relative pt-20 min-h-[40vh] flex items-center overflow-hidden">
      {imageUrl && (
        <>
          <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </>
      )}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 ${imageUrl ? 'text-white' : ''}`}>
        {block.heading && (
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4 max-w-3xl">
            {block.heading}
          </h1>
        )}
        {block.subheading && (
          <p className={`text-lg md:text-xl max-w-xl leading-relaxed ${imageUrl ? 'text-white/70' : 'text-black/60'}`}>
            {block.subheading}
          </p>
        )}
      </div>
    </div>
  );
}

function StatsBlock({ block }: { block: PageBlock }) {
  const items = block.items || [];
  return (
    <section className="py-12 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={item.id || i} className="text-center">
              <div className="text-4xl font-bold font-display text-brand-accent mb-1">{item.value}</div>
              <div className="text-sm text-black/60">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextImageBlock({ block }: { block: PageBlock }) {
  const imageUrl = !block.image
    ? null
    : typeof block.image === 'string'
      ? block.image
      : getMediaUrl(block.image);
  const imageLeft = block.imagePosition === 'left';

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imageLeft ? '' : 'lg:[&>*:first-child]:order-2'}`}>
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, x: imageLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={imageUrl}
                alt={block.heading || ''}
                className="w-full h-64 md:h-[420px] object-cover rounded-3xl"
                loading="lazy"
              />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: imageLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {block.heading && (
              <h2 className="text-3xl font-bold font-display mb-6">{block.heading}</h2>
            )}
            {block.text && block.text.length > 0 && (
              <div className="prose prose-lg max-w-none text-black/70">
                <RichText content={block.text} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function renderBlock(block: PageBlock, i: number) {
  switch (block.blockType) {
    case 'hero': return <HeroBlock key={block.id || i} block={block} />;
    case 'stats': return <StatsBlock key={block.id || i} block={block} />;
    case 'textImage': return <TextImageBlock key={block.id || i} block={block} />;
    default: return null;
  }
}

export default function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<Page | null | undefined>(undefined);

  useSEO(page ? page.title : undefined);

  useEffect(() => {
    if (!slug) { setPage(null); return; }
    getPageBySlug(slug)
      .then(setPage)
      .catch(() => setPage(null));
  }, [slug]);

  // Still loading
  if (page === undefined) return <div className="pt-20 min-h-screen" />;

  // Not found in CMS
  if (page === null) return <NotFound />;

  const hasSections = page.sections && page.sections.length > 0;
  const hasContent = page.content && page.content.length > 0;
  const firstBlockIsHero = hasSections && page.sections![0].blockType === 'hero';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Page title header — only shown when no hero block is present */}
      {!firstBlockIsHero && (
        <div className="pt-32 pb-16 bg-gradient-to-b from-brand-surface to-white">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold font-display">{page.title}</h1>
          </div>
        </div>
      )}

      {/* Sections / blocks */}
      {hasSections && page.sections!.map((block, i) => renderBlock(block, i))}

      {/* Standalone rich-text content */}
      {hasContent && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg max-w-none">
            <RichText content={page.content!} />
          </div>
        </section>
      )}

      <CTASection
        title="Meer weten of een vraag?"
        subtitle="Neem contact op met ons team voor een vrijblijvend gesprek."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Bekijk onze projecten"
        secondaryHref="/projecten"
      />
    </motion.div>
  );
}
