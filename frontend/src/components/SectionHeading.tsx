import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ label, title, subtitle, align = 'center', light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {label && (
        <p className={cn('text-xs font-bold uppercase tracking-widest mb-3', light ? 'text-white/50' : 'text-black/40')}>
          {label}
        </p>
      )}
      <h2 className={cn('text-4xl font-bold font-display', light ? 'text-white' : 'text-brand-primary')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed max-w-2xl', align === 'center' && 'mx-auto', light ? 'text-white/70' : 'text-black/60')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
