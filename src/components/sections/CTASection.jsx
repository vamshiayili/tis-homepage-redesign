import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animation/Reveal';
import { schoolInfo } from '@/data/schoolData';

export function CTASection({ onOpenEnquiry }) {
  return (
    <section className="py-20 bg-gradient-to-br from-tis-red via-tis-red-dark to-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-tis-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tis-teal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <Reveal direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-tis-gold" />
            <span>Admissions Open for Academic Session 2026-27</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Give Your Child the Gift of a <br className="hidden sm:inline" />
            Transformative International Education.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join the Tulas family in Dehradun. Discover how our 22-acre lush campus, Modern Gurukul ethos, and 16+ sports prepare future global leaders.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="gold"
              size="lg"
              onClick={onOpenEnquiry}
              icon={ArrowRight}
              className="w-full sm:w-auto bg-tis-gold hover:bg-tis-gold-dark text-slate-950 font-extrabold py-4 px-9 text-base shadow-2xl"
            >
              Enquire Now for Admissions
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`tel:${schoolInfo.phoneHelpline}`}
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-tis-dark font-semibold py-4 px-8 text-base"
            >
              Call Helpline: {schoolInfo.phoneHelpline}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
