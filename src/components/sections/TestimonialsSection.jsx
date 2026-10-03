import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/animation/Reveal';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <SectionHeading
            badge="Voices of TIS Community"
            title="What Parents & Alumni Say About Us"
            subtitle="Real experiences from families who entrusted their children's education and boarding journey to Tulas International School."
            centered={true}
            light={true}
          />
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-slate-800/50 backdrop-blur-xl shadow-2xl">
              {/* Decorative Quote Icon */}
              <Quote className="w-16 h-16 text-tis-gold/20 absolute top-6 right-8 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-tis-gold text-tis-gold" />
                    ))}
                  </div>

                  {/* Main Quote Text */}
                  <p className="text-xl sm:text-2xl font-serif-title italic leading-relaxed text-slate-100">
                    "{currentTestimonial.quote}"
                  </p>

                  {/* Author Profile Footer */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-700/60">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-tis-gold"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-bold text-lg text-white">
                          {currentTestimonial.author}
                        </h4>
                        {currentTestimonial.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            <ShieldCheck className="w-3 h-3" />
                            Verified Parent
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-tis-gold font-medium">
                        {currentTestimonial.role} • {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'w-8 bg-tis-gold' : 'w-2 bg-slate-700 hover:bg-slate-600'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-3 rounded-full bg-slate-800 hover:bg-tis-red text-white transition-colors border border-slate-700"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-3 rounded-full bg-slate-800 hover:bg-tis-red text-white transition-colors border border-slate-700"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
