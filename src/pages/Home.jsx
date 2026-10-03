import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyTISSection } from '@/components/sections/WhyTISSection';
import { AcademicsSection } from '@/components/sections/AcademicsSection';
import { CampusSection } from '@/components/sections/CampusSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AdmissionsSection } from '@/components/sections/AdmissionsSection';
import { CTASection } from '@/components/sections/CTASection';

export function Home({ onOpenEnquiry }) {
  return (
    <main className="w-full">
      <HeroSection onOpenEnquiry={onOpenEnquiry} />
      <AboutSection onOpenEnquiry={onOpenEnquiry} />
      <WhyTISSection onOpenEnquiry={onOpenEnquiry} />
      <AcademicsSection onOpenEnquiry={onOpenEnquiry} />
      <CampusSection onOpenEnquiry={onOpenEnquiry} />
      <ActivitiesSection onOpenEnquiry={onOpenEnquiry} />
      <TestimonialsSection />
      <AdmissionsSection onOpenEnquiry={onOpenEnquiry} />
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </main>
  );
}
