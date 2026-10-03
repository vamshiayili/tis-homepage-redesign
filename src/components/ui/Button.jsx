import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  href,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer';

  const variants = {
    primary: 'bg-tis-red text-white hover:bg-tis-red-dark focus:ring-tis-red dark:bg-tis-red dark:hover:bg-tis-red-dark shadow-red-900/20',
    secondary: 'bg-tis-teal text-white hover:bg-opacity-90 focus:ring-tis-teal shadow-teal-900/20',
    gold: 'bg-tis-gold text-white hover:bg-tis-gold-dark focus:ring-tis-gold shadow-amber-900/20',
    outline: 'border-2 border-tis-red text-tis-red hover:bg-tis-red hover:text-white dark:border-tis-gold dark:text-tis-gold dark:hover:bg-tis-gold dark:hover:text-tis-dark',
    ghost: 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400',
    white: 'bg-white text-tis-red hover:bg-slate-100 focus:ring-white shadow-lg',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold',
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  );
}
