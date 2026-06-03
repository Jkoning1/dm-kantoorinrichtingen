import { useSiteSettings } from '@/lib/SiteSettingsContext';
import { getMediaUrl } from '@/lib/payload';

export default function ClientLogosBar() {
  const settings = useSiteSettings();
  const logos = settings.clientLogos || [];

  if (logos.length === 0) return null;

  return (
    <section className="py-10 border-y border-black/5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-black/30 mb-8">
          Vertrouwd door
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((item, i) => {
            const logoUrl = !item.logo
              ? null
              : typeof item.logo === 'string'
                ? item.logo
                : getMediaUrl(item.logo);

            const inner = logoUrl ? (
              <img
                src={logoUrl}
                alt={`${item.name} logo`}
                className="h-10 w-auto max-w-[160px] object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            ) : (
              <span className="text-sm font-semibold text-black/30 hover:text-black/60 transition-colors">
                {item.name}
              </span>
            );

            return item.url ? (
              <a
                key={item.id || i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
              >
                {inner}
              </a>
            ) : (
              <div key={item.id || i} className="flex items-center justify-center">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
