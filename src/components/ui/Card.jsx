import React from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = true,
  variant = 'default',
  onClick,
  ...props
}) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300 border relative overflow-hidden';
  
  const variants = {
    default: 'bg-white dark:bg-tis-dark-card border-slate-200/80 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-100',
    glass: 'glass-card border-white/40 dark:border-white/10 text-slate-800 dark:text-slate-100',
    flat: 'bg-slate-50 dark:bg-slate-900/50 border-slate-200/60 dark:border-slate-800/80 text-slate-800 dark:text-slate-100',
    gold: 'bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/30 text-amber-950 dark:text-amber-100',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`${baseStyles} ${variants[variant]} ${hover ? 'hover:shadow-xl hover:border-tis-gold/40' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}
