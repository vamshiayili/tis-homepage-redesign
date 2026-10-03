import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Award, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animation/Reveal';
import { academicPrograms } from '@/data/schoolData';

export function AcademicsSection({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('junior');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-tis-gold" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-tis-teal-light" />;
      case 'Award':
        return <Award className="w-6 h-6 text-tis-red-light" />;
      default:
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
    }
  };

  const selectedProgram = academicPrograms.find((p) => p.id === activeTab) || academicPrograms[0];

  return (
    <section id="academics" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-tis-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <SectionHeading
            badge="Academic Rigor & CBSE Curricula"
            title="A Structured Pathway from Class IV to XII"
            subtitle="Our CBSE curriculum is meticulously engineered to develop conceptual depth, critical inquiry, digital fluency, and competitive examination readiness."
            centered={true}
            light={true}
          />
        </Reveal>

        {/* Tab Navigation for Desktop / Mobile */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {academicPrograms.map((program) => {
              const isActive = program.id === activeTab;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveTab(program.id)}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-tis-red text-white shadow-lg shadow-tis-red/30 scale-105'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                  }`}
                >
                  {getIcon(program.icon)}
                  <span>{program.wing}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-slate-700'}`}>
                    {program.grades}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detailed Program Showcase Box */}
        <Reveal direction="up" delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProgram.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-700/80 bg-slate-800/40 backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                      {getIcon(selectedProgram.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-tis-gold uppercase tracking-widest">
                        {selectedProgram.grades}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProgram.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {selectedProgram.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                      Key Pedagogical Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProgram.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-tis-gold shrink-0 mt-1" />
                          <span className="text-sm text-slate-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="gold"
                      size="md"
                      onClick={onOpenEnquiry}
                      icon={ArrowRight}
                      className="bg-tis-gold hover:bg-tis-gold-dark text-slate-950 font-bold"
                    >
                      Enquire for {selectedProgram.wing} Admissions
                    </Button>
                  </div>
                </div>

                {/* Right Side Visual Highlight Box */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-slate-700/80 relative shadow-2xl group">
                    <img
                      src={
                        selectedProgram.id === 'junior'
                          ? 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'
                          : selectedProgram.id === 'middle'
                          ? 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop'
                          : 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop'
                      }
                      alt={selectedProgram.title}
                      className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                        <span>Curriculum Framework:</span>
                        <span className="text-tis-gold font-bold">CBSE New Delhi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
