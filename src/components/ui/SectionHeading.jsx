import React from 'react';

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="mb-4 inline-block">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-tis-gold/10 text-tis-gold border border-tis-gold/30">
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      <div className={`mt-3 h-1 w-20 bg-tis-gold rounded-full ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
