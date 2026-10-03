import React from 'react';

export function Badge({ children, variant = 'gold', className = '' }) {
  const variants = {
    gold: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/50',
    red: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800/50',
    teal: 'bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/50',
    slate: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
