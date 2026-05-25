import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bericht: string;
}

export default function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState<FormData>({ naam: '', bedrijf: '', email: '', telefoon: '', bericht: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      setSuccess(true);
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw of bel ons direct.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={cn('flex flex-col items-center justify-center text-center py-16 px-8 bg-brand-surface rounded-2xl', className)}>
        <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-brand-accent" />
        </div>
        <h3 className="text-2xl font-bold font-display mb-3">Bericht ontvangen!</h3>
        <p className="text-black/60">Wij nemen binnen 1 werkdag contact met u op.</p>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-brand-primary placeholder:text-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-shadow text-sm';

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Naam *</label>
          <input
            type="text"
            required
            value={formData.naam}
            onChange={e => setFormData(f => ({ ...f, naam: e.target.value }))}
            placeholder="Jan de Vries"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Bedrijf</label>
          <input
            type="text"
            value={formData.bedrijf}
            onChange={e => setFormData(f => ({ ...f, bedrijf: e.target.value }))}
            placeholder="Uw bedrijfsnaam"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2">E-mailadres *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
            placeholder="jan@bedrijf.nl"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Telefoonnummer</label>
          <input
            type="tel"
            value={formData.telefoon}
            onChange={e => setFormData(f => ({ ...f, telefoon: e.target.value }))}
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Bericht *</label>
        <textarea
          required
          rows={5}
          value={formData.bericht}
          onChange={e => setFormData(f => ({ ...f, bericht: e.target.value }))}
          placeholder="Vertel ons over uw wensen en de ruimte die u wilt inrichten..."
          className={cn(inputClass, 'resize-none')}
        />
      </div>
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-accent transition-all flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
      >
        {loading ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Verzenden...</>
        ) : (
          <>Verstuur bericht <ArrowRight className="w-5 h-5" /></>
        )}
      </button>
    </form>
  );
}
