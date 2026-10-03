import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Filter, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/animation/Reveal';
import { sportsList } from '@/data/schoolData';

export function ActivitiesSection({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Precision', 'Water Sports', 'Equestrian', 'Combat', 'Team Sports', 'Racquet', 'Wellness'];

  const filteredSports = selectedCategory === 'All'
    ? sportsList
    : sportsList.filter((s) => s.category === selectedCategory);

  return (
    <section id="activities" className="py-20 lg:py-28 bg-white dark:bg-tis-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            badge="16+ Sports & Co-Curriculars"
            title="Sports is Not Just a Facility—It's Our Foundation"
            subtitle="From target archery and 10m rifle shooting to equestrian polo and half-Olympic swimming, every TIS student engages in structured athletic discipline."
            centered={true}
          />
        </Reveal>

        {/* Category Filter Pills */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-tis-gold text-slate-950 shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSports.map((sport, index) => (
              <motion.div
                key={sport.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  hover={true}
                  className="h-full flex flex-col justify-between group overflow-hidden border-slate-200/80 dark:border-slate-800 p-0"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-amber-300 backdrop-blur-sm">
                      {sport.category}
                    </span>
                    <h3 className="absolute bottom-3 left-3 right-3 text-lg font-bold font-heading text-white">
                      {sport.name}
                    </h3>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {sport.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-tis-red dark:text-tis-gold group-hover:translate-x-1 transition-transform">
                      <span>Professional Coaching</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
