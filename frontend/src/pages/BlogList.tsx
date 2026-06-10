import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeading from '@/components/SectionHeading';
import { getBlogs, getMediaUrlOrNull } from '@/lib/payload';
import type { Blog } from '@/lib/types';
import { useSEO } from '@/lib/useSEO';

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useSEO(
    'Blog | DM Kantoorinrichtingen',
    'Lees onze laatste artikelen over kantoorinrichting, ergonomie, duurzaamheid en hybride werken.'
  );

  useEffect(() => {
    getBlogs().then(r => {
      setBlogs(r.docs);
      setLoading(false);
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="pt-32 pb-16 bg-gradient-to-b from-brand-surface to-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Kennis & Inspiratie"
            title="Ons blog"
            subtitle="Artikelen over kantoorinrichting, ergonomie, duurzaamheid en de toekomst van werk."
          />
        </div>
      </div>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="rounded-2xl bg-brand-surface animate-pulse aspect-[16/10]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, i) => {
                const imageUrl = getMediaUrlOrNull(blog.heroImage);

                return (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Link to={`/blog/${blog.slug}`} className="group block">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-brand-surface">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        )}
                        {blog.featured && (
                          <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                            Uitgelicht
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-black/40 mb-3">
                        {blog.publishedAt && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(blog.publishedAt)}
                          </span>
                        )}
                        {blog.category && (
                          <span className="flex items-center gap-1.5 bg-brand-surface px-2.5 py-0.5 rounded-full">
                            <Tag className="w-3.5 h-3.5" />
                            {blog.category}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold font-display mb-2 group-hover:text-brand-accent transition-colors leading-snug">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-black/60 leading-relaxed line-clamp-3 mb-4">
                        {blog.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all">
                        Lees meer <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
