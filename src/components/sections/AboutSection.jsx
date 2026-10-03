import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Compass, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animation/Reveal';

export function AboutSection({ onOpenEnquiry }) {
  const highlights = [
    'Est. 2012 under Rishabh Educational Trust in Dehradun',
    'CBSE-affiliated co-educational boarding & day boarding',
    'Modern Gurukul ethos blending tradition with STEM education',
    '22+ Acres pollution-free lush green campus in Uttarakhand',
    'Small class sizes with 1:8 teacher-to-student personal ratio',
    'Comprehensive 16+ sports infrastructure & professional coaching',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 dark:bg-tis-dark/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeading
            badge="About Tulas International School"
            title="Where Heritage Meets 21st Century Innovation"
            subtitle="Tulas International School was established under the aegis of Rishabh Educational Trust to impart transformative education through seamless opportunities."
            centered={false}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                <p className="font-medium text-slate-900 dark:text-white text-xl">
                  At Tulas, we believe in bringing out the best in every student—whether it’s academics, sports, music, robotics, or public leadership.
                </p>
                <p>
                  With the right support and inspiration, creativity finds its true expression. For us, school isn’t just about memorizing lessons for exams; it’s about unlocking endless opportunities waiting to be explored.
                </p>
                <p>
                  Rooted in our signature <span className="font-bold text-tis-red dark:text-tis-gold">"Modern Gurukul"</span> philosophy, we instill deep ethical values, self-discipline, and environmental stewardship alongside rigorous CBSE academic preparation.
                </p>
              </div>
            </Reveal>

            {/* Checklist items */}
            <Reveal direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-tis-teal shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenEnquiry}
                  icon={ArrowRight}
                  className="bg-tis-red hover:bg-tis-red-dark text-white font-bold"
                >
                  Schedule Campus Tour
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="#why-tis"
                  className="border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                  Discover 5 Pillars
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Asymmetrical Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Main Large Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                    alt="Tulas International School Campus Students"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Floating Quote overlay at bottom of main image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-tis-dark/95 backdrop-blur-md border border-white/20 shadow-xl">
                    <p className="text-xs italic font-serif-title text-slate-800 dark:text-slate-200">
                      "We feel supported in what we do and nudged further to do more."
                    </p>
                    <p className="text-[10px] font-bold text-tis-gold uppercase mt-1">
                      — TIS Student Ethos
                    </p>
                  </div>
                </div>

                {/* Smaller Overlapping Badge Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-8 -left-8 p-5 rounded-2xl bg-tis-teal text-white shadow-2xl max-w-[200px] border-2 border-white dark:border-slate-800 hidden sm:block"
                >
                  <div className="text-3xl font-black font-heading text-amber-300">100%</div>
                  <p className="text-xs font-semibold mt-0.5 leading-snug">
                    Board Exam Success & Holistic Mentorship
                  </p>
                </motion.div>

                {/* Secondary Accent Glow */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-tis-gold/20 rounded-full blur-2xl -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
