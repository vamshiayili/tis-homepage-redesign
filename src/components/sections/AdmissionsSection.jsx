import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, FileText, Calendar, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animation/Reveal';
import { admissionSteps, schoolInfo } from '@/data/schoolData';

export function AdmissionsSection({ onOpenEnquiry }) {
  return (
    <section id="admissions" className="py-20 lg:py-28 bg-slate-50 dark:bg-tis-dark/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            badge="Admissions 2026-27 Open"
            title="Begin Your Child's Journey at TIS"
            subtitle="Admissions open for Class IV to IX and Class XI (Science, Commerce & Humanities streams). Follow our simple 4-step enrolment process."
            centered={true}
          />
        </Reveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {admissionSteps.map((item, index) => (
            <Reveal key={item.step} direction="up" delay={index * 0.1}>
              <div className="p-6 rounded-3xl bg-white dark:bg-tis-dark-card border border-slate-200 dark:border-slate-800 shadow-md relative h-full flex flex-col justify-between group hover:border-tis-gold transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-tis-red/10 text-tis-red dark:bg-tis-gold/10 dark:text-tis-gold flex items-center justify-center font-extrabold text-lg mb-4 font-heading group-hover:bg-tis-red group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-tis-gold transition-colors flex items-center gap-1">
                  <span>Step {index + 1} of 4</span>
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* High Conversion Banner Card */}
        <Reveal direction="up" delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-tis-dark via-slate-900 to-tis-dark text-white border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-tis-gold/20 text-tis-gold border border-tis-gold/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Limited Seats for Boarding 2026-27</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  Ready to Empower Your Child’s Future?
                </h3>
                <p className="text-slate-300 text-base max-w-2xl">
                  Contact our admissions helpline to schedule an interaction or submit your online enquiry. Our team is available 6 days a week to guide parents.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-semibold">
                  <a
                    href={`tel:${schoolInfo.phoneHelpline}`}
                    className="inline-flex items-center gap-2 text-amber-300 hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Helpline: {schoolInfo.phoneHelpline}</span>
                  </a>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <span className="text-slate-300">Office Hours: 9:00 AM – 5:30 PM (Mon-Sat)</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenEnquiry}
                  icon={ArrowRight}
                  className="w-full bg-tis-red hover:bg-tis-red-dark text-white font-extrabold py-4 text-base shadow-lg shadow-tis-red/30"
                >
                  Start Online Application
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${schoolInfo.phoneHelpline}`}
                  className="w-full border-slate-700 text-slate-200 hover:bg-slate-800 font-semibold py-3.5 text-sm"
                >
                  Call Admissions Helpline
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
