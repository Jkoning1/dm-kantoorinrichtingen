import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { getBlogBySlug, getMediaUrl } from '@/lib/payload';
import type { Blog } from '@/lib/types';
import RichText from '@/components/RichText';
import CTASection from '@/components/CTASection';
import { useSEO } from '@/lib/useSEO';

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useSEO(
    blog?.seo?.metaTitle ?? (blog ? `${blog.title} | DM Kantoorinrichtingen Blog` : undefined),
    blog?.seo?.metaDescription ?? blog?.excerpt
  );

  useEffect(() => {
    if (!slug) return;
    getBlogBySlug(slug).then(b => {
      setBlog(b);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <div className="pt-20 min-h-screen" />;
  }

  if (!blog) {
    return (
      <div className="pt-32 pb-24 text-center">
        <p className="text-black/60 mb-4">Artikel niet gevonden.</p>
        <Link to="/blog" className="text-brand-accent font-medium hover:underline">
          Terug naar blog
        </Link>
      </div>
    );
  }

  const imageUrl = !blog.heroImage
    ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80'
    : typeof blog.heroImage === 'string'
      ? blog.heroImage
      : getMediaUrl(blog.heroImage);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero image */}
      <div className="pt-20">
        <div className="relative h-64 md:h-[460px] overflow-hidden">
          <img src={imageUrl} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-brand-accent hover:gap-3 transition-all mb-8 focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
        >
          <ArrowLeft className="w-4 h-4" /> Terug naar blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-black/40 mb-6">
          {blog.publishedAt && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(blog.publishedAt)}
            </span>
          )}
          {blog.author && (
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {blog.author}
            </span>
          )}
          {blog.category && (
            <span className="flex items-center gap-1.5 bg-brand-surface px-3 py-1 rounded-full">
              <Tag className="w-3.5 h-3.5" />
              {blog.category}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight">
          {blog.title}
        </h1>

        <p className="text-lg text-black/60 leading-relaxed mb-10 border-l-4 border-brand-accent pl-5">
          {blog.excerpt}
        </p>

        {blog.content && blog.content.length > 0 && (
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline">
            <RichText content={blog.content} />
          </div>
        )}
      </div>

      <CTASection
        title="Wilt u meer weten?"
        subtitle="Neem contact op met onze adviseurs voor een vrijblijvend gesprek over uw kantoorinrichting."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Bekijk onze projecten"
        secondaryHref="/projecten"
      />
    </motion.div>
  );
}
