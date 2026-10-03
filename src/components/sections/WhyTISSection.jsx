import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Globe, ShieldCheck, Users, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/animation/Reveal';
import { coreValues } from '@/data/schoolData';

export function WhyTISSection({ onOpenEnquiry }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-tis-red dark:text-tis-gold" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-tis-red dark:text-tis-gold" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-tis-red dark:text-tis-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-tis-red dark:text-tis-gold" />;
      default:
        return <Users className="w-6 h-6 text-tis-red dark:text-tis-gold" />;
    }
  };

  return (
    <section id="why-tis" className="py-20 lg:py-28 bg-white dark:bg-tis-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            badge="The TIS Advantage"
            title="5 Differentiators of a Tulas Education"
            subtitle="Explore how our holistic boarding methodology empowers young minds to achieve academic brilliance, emotional resilience, and lifelong character."
            centered={true}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={index * 0.1}>
              <Card
                className="h-full flex flex-col justify-between group border-slate-200/80 dark:border-slate-800 hover:border-tis-gold dark:hover:border-tis-gold transition-all duration-300"
              >
                <div>
                  {/* Top Header Row with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-4xl text-slate-300 dark:text-slate-700 group-hover:text-tis-gold transition-colors">
                      {item.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  {/* Card Image */}
                  <div className="relative h-44 rounded-xl overflow-hidden mb-5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-amber-300 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-tis-red dark:group-hover:text-tis-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-tis-red dark:group-hover:text-tis-gold transition-colors">
                    Explore Pillar
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-tis-red dark:group-hover:text-tis-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
