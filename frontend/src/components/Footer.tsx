import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useSiteSettings } from '@/lib/SiteSettingsContext';

const navLinks = [
  { name: 'Projecten', href: '/projecten' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Showroom', href: '/showroom' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const settings = useSiteSettings();

  return (
    <footer className="bg-brand-surface border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg">
                <span className="text-white font-display font-bold text-lg">DM</span>
              </div>
              <span className="font-display font-semibold text-brand-primary">Kantoorinrichtingen</span>
            </Link>
            <p className="text-black/60 leading-relaxed max-w-sm mb-6">
              {settings.footerDescription}
            </p>
            <div className="flex items-center gap-3">
              {settings.socialLinkedin && (
                <a
                  href={settings.socialLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-black/5 hover:bg-brand-accent hover:text-white text-black/60 rounded-lg flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-label="LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {settings.socialInstagram && (
                <a
                  href={settings.socialInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-black/5 hover:bg-brand-accent hover:text-white text-black/60 rounded-lg flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-label="Instagram"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {settings.socialFacebook && (
                <a
                  href={settings.socialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-black/5 hover:bg-brand-accent hover:text-white text-black/60 rounded-lg flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-brand-accent"
                  aria-label="Facebook"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-5">Navigatie</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-black/70 hover:text-brand-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-black/70">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>{settings.address}<br />{settings.addressCity}</span>
              </li>
              <li>
                <a href={settings.phoneHref} className="flex items-center gap-3 text-sm text-black/70 hover:text-brand-accent transition-colors">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  {settings.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${settings.email}`} className="flex items-center gap-3 text-sm text-black/70 hover:text-brand-accent transition-colors">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  {settings.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} DM Kantoorinrichtingen. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-black/40 hover:text-brand-accent transition-colors">Privacybeleid</a>
            <a href="#" className="text-xs text-black/40 hover:text-brand-accent transition-colors">Algemene voorwaarden</a>
            <a href="#" className="text-xs text-black/40 hover:text-brand-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
