import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-lg">
        <div className="text-[120px] md:text-[160px] font-bold font-display leading-none text-brand-accent/10 mb-2 select-none">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold font-display mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-black/60 mb-10 leading-relaxed">
          De pagina die u zoekt bestaat niet of is verplaatst. Geen zorgen — u kunt altijd terugkeren naar de homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-medium hover:bg-brand-accent-dark transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            <Home className="w-5 h-5" />
            Naar de homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-brand-surface border border-black/10 text-brand-primary px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-all focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Ga terug
          </button>
        </div>
      </div>
    </motion.div>
  );
}
