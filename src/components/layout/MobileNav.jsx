import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';
import { Button } from '@/components/ui/Button';

export function MobileNav({ isOpen, onClose, navLinks, onOpenEnquiry }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-tis-dark z-[9999] shadow-2xl flex flex-col justify-between p-6 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-tis-red rounded-lg flex items-center justify-center text-white font-bold text-base">
                    TIS
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-900 dark:text-white leading-none">
                      Tulas
                    </h3>
                    <p className="text-[10px] text-tis-gold font-semibold uppercase">International School</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="px-4 py-3 text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-tis-red dark:hover:text-tis-gold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-tis-red dark:text-tis-gold" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEnquiry}
                icon={ArrowRight}
                className="w-full bg-tis-red hover:bg-tis-red-dark text-white font-bold py-3.5"
              >
                Apply for Admissions
              </Button>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <a
                  href={`tel:${schoolInfo.phoneHelpline}`}
                  className="flex items-center gap-2 font-medium hover:text-tis-red dark:hover:text-tis-gold"
                >
                  <Phone className="w-4 h-4 text-tis-teal" />
                  <span>Helpline: {schoolInfo.phoneHelpline}</span>
                </a>
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="flex items-center gap-2 font-medium hover:text-tis-red dark:hover:text-tis-gold"
                >
                  <Mail className="w-4 h-4 text-tis-teal" />
                  <span>{schoolInfo.email}</span>
                </a>
                <div className="flex items-center gap-2 text-slate-500 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-tis-gold" />
                  <span>CBSE Boarding & Day School, Dehradun</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
