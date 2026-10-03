import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles, Building, Utensils, HeartPulse, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animation/Reveal';
import { campusFacilities } from '@/data/schoolData';

export function CampusSection({ onOpenEnquiry }) {
  return (
    <section id="campus" className="py-20 lg:py-28 bg-slate-50 dark:bg-tis-dark/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            badge="Life at Tulas Campus"
            title="22 Acres of Pollution-Free Living in Dehradun"
            subtitle="Explore a sanctuary of learning nestled in the serene foothills of Uttarakhand, equipped with international-grade residential dorms, organic dining, and modern athletic arenas."
            centered={true}
          />
        </Reveal>

        {/* Asymmetrical Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Hero Facility Box - Spans 7 Cols */}
          <div className="md:col-span-7">
            <Reveal direction="up">
              <div className="relative rounded-3xl overflow-hidden shadow-xl group border-2 border-white dark:border-slate-800 aspect-[16/10]">
                <img
                  src={campusFacilities[0].image}
                  alt={campusFacilities[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tis-red text-white">
                    {campusFacilities[0].category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {campusFacilities[0].title}
                  </h3>
                  <p className="text-sm text-slate-200 line-clamp-2">
                    {campusFacilities[0].description}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Secondary Facility Box - Spans 5 Cols */}
          <div className="md:col-span-5">
            <Reveal direction="up" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl group border-2 border-white dark:border-slate-800 aspect-[16/10]">
                <img
                  src={campusFacilities[1].image}
                  alt={campusFacilities[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-tis-teal text-white">
                    {campusFacilities[1].category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {campusFacilities[1].title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {campusFacilities[1].description}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3 Grid items below */}
          {campusFacilities.slice(2, 5).map((facility, idx) => (
            <div key={facility.title} className="md:col-span-4">
              <Reveal direction="up" delay={0.1 * (idx + 1)}>
                <div className="relative rounded-2xl overflow-hidden shadow-md group border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-white dark:bg-tis-dark-card">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-tis-gold">
                      {facility.category}
                    </span>
                    <h4 className="text-base font-bold font-heading text-white mt-0.5">
                      {facility.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <Reveal direction="up" delay={0.3}>
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-tis-red to-tis-red-dark text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold font-heading">
                Experience the 22-Acre Green Campus in Person
              </h3>
              <p className="text-sm text-slate-100 max-w-xl">
                We invite parents and prospective students for guided campus tours in Dehradun. Inspect our dormitories, sports facilities, and meet our academic leaders.
              </p>
            </div>
            <Button
              variant="white"
              size="lg"
              onClick={onOpenEnquiry}
              icon={ArrowRight}
              className="bg-white text-tis-red hover:bg-amber-100 font-extrabold shrink-0"
            >
              Book Campus Tour
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
