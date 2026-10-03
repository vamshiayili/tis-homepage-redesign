import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Sparkles, Award, ChevronDown } from 'lucide-react';
import { schoolInfo, schoolStats } from '@/data/schoolData';
import { Button } from '@/components/ui/Button';

export function HeroSection({ onOpenEnquiry }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-tis-dark text-white">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1920&auto=format&fit=crop"
          alt="Tulas International School Dehradun Campus"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-transform duration-10000 ease-out"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-tis-dark via-tis-dark/60 to-tis-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-tis-dark/80 via-transparent to-tis-dark/70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col justify-center min-h-[85vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-tis-gold" />
              <span>Modern Gurukul Ethos • Dehradun, India</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              A Place Where <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tis-gold via-amber-200 to-amber-400">
                Curiosity Becomes
              </span>{' '}
              Confidence.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl"
            >
              Discover India's top CBSE co-educational boarding school in Dehradun. Where modern academic excellence meets ancient Gurukul values and 16+ curated sports.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto bg-tis-red hover:bg-tis-red-dark text-white font-bold py-4 px-8 text-base shadow-xl shadow-tis-red/30"
              >
                Apply for Admissions
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#about"
                className="w-full sm:w-auto border-white/50 text-white hover:bg-white hover:text-tis-dark font-semibold py-4 px-8 text-base"
              >
                Explore TIS Ethos
              </Button>
            </motion.div>

            {/* Quick Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-slate-300 border-t border-white/10 max-w-xl"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-tis-gold" />
                <span>CBSE Class 4 to 12 Boarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-tis-gold" />
                <span>22+ Acres Eco Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-tis-gold" />
                <span>16+ Sports Program</span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Stats Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-tis-gold">
                  TIS Excellence at a Glance
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Why Parents Choose TIS</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {schoolStats.map((stat) => (
                  <div key={stat.label} className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-3xl font-extrabold text-amber-300 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-white mt-1">{stat.label}</div>
                    <div className="text-[10px] text-slate-300 mt-0.5">{stat.description}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-tis-gold to-amber-500 text-slate-950 font-extrabold text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Campus Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-5 h-5 text-tis-gold" />
      </motion.a>
    </section>
  );
}
