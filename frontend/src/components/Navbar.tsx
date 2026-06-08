import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useSiteSettings } from '@/lib/SiteSettingsContext';
import { useNavigation } from '@/lib/NavigationContext';
import { getMediaUrl } from '@/lib/payload';

function NavLinkItem({ item, onClick }: { item: { label: string; href: string; openInNewTab?: boolean }; onClick?: () => void }) {
  const isExternal = item.href.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={item.href}
        target={item.openInNewTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={onClick}
        className="text-sm font-medium transition-colors hover:text-brand-secondary text-brand-primary"
      >
        {item.label}
      </a>
    );
  }
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        cn('text-sm font-medium transition-colors hover:text-brand-secondary relative pb-0.5', isActive ? 'text-brand-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-accent after:rounded-full' : 'text-brand-primary')
      }
    >
      {item.label}
    </NavLink>
  );
}

function MobileNavItem({ item, onClick }: { item: { label: string; href: string; openInNewTab?: boolean }; onClick: () => void }) {
  const isExternal = item.href.startsWith('http');
  const cls = 'px-4 py-3 rounded-xl text-base font-medium transition-colors text-brand-primary hover:bg-brand-surface';
  if (isExternal) {
    return (
      <a href={item.href} target={item.openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer" onClick={onClick} className={cls}>
        {item.label}
      </a>
    );
  }
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        cn('px-4 py-3 rounded-xl text-base font-medium transition-colors', isActive ? 'bg-brand-accent/10 text-brand-accent' : 'text-brand-primary hover:bg-brand-surface')
      }
    >
      {item.label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const settings = useSiteSettings();
  const navigation = useNavigation();

  const desktopLogoUrl = settings.logoDesktop
    ? (typeof settings.logoDesktop === 'string' ? settings.logoDesktop : getMediaUrl(settings.logoDesktop))
    : null;
  const mobileLogoUrl = settings.logoMobile
    ? (typeof settings.logoMobile === 'string' ? settings.logoMobile : getMediaUrl(settings.logoMobile))
    : desktopLogoUrl;

  const ctaLabel = navigation.ctaLabel || 'Adviesgesprek';
  const ctaHref = navigation.ctaHref || '/contact';
  const ctaIsExternal = ctaHref.startsWith('http');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* Mobile logo */}
          {mobileLogoUrl ? (
            <img src={mobileLogoUrl} alt="DM Kantoorinrichtingen" className="h-10 w-auto sm:hidden" />
          ) : (
            <div className="w-10 h-10 bg-brand-primary flex sm:hidden items-center justify-center rounded-lg">
              <span className="text-white font-display font-bold text-lg">DM</span>
            </div>
          )}
          {/* Desktop logo */}
          {desktopLogoUrl ? (
            <img src={desktopLogoUrl} alt="DM Kantoorinrichtingen" className="h-10 w-auto hidden sm:block" />
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg">
                <span className="text-white font-display font-bold text-lg">DM</span>
              </div>
              <span className="font-display font-semibold text-brand-primary">Kantoorinrichtingen</span>
            </div>
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.navItems.map(item => (
            <NavLinkItem key={item.href} item={item} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          {ctaIsExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent-dark transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              to={ctaHref}
              className="hidden md:inline-flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent-dark transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-brand-surface transition-colors focus-visible:ring-2 focus-visible:ring-brand-accent"
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navigation.navItems.map(item => (
                <MobileNavItem key={item.href} item={item} onClick={() => setOpen(false)} />
              ))}
              {ctaIsExternal ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 bg-brand-accent text-white px-4 py-3 rounded-xl text-base font-medium text-center hover:bg-brand-accent-dark transition-all"
                >
                  {ctaLabel}
                </a>
              ) : (
                <Link
                  to={ctaHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 bg-brand-accent text-white px-4 py-3 rounded-xl text-base font-medium text-center hover:bg-brand-accent-dark transition-all"
                >
                  {ctaLabel}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
