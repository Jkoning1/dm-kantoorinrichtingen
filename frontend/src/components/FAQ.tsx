import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { getFAQItems } from '@/lib/payload';
import { mockFAQItems } from '@/lib/mockData';
import type { FAQItem } from '@/lib/types';

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>(mockFAQItems);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    getFAQItems().then(setFaqs).catch(() => {});
  }, []);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={faq.id} className="border border-black/5 rounded-2xl overflow-hidden bg-white">
          <button
            className="w-full flex items-center justify-between p-6 text-left focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-base font-bold text-brand-primary pr-4">{faq.question}</span>
            <ChevronDown
              className={cn('w-5 h-5 text-brand-accent shrink-0 transition-transform duration-300', open === i && 'rotate-180')}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-black/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
