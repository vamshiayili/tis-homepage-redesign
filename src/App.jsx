import React, { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { CustomCursor } from '@/components/animation/CustomCursor';
import { ScrollProgress } from '@/components/animation/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { EnquiryModal } from '@/components/sections/EnquiryModal';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-tis-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-tis-red selection:text-white">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Custom Cursor Ring */}
      <CustomCursor />

      {/* Header Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Single Page Homepage */}
      <Home onOpenEnquiry={handleOpenEnquiry} />

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Quick Admissions Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
      />
    </div>
  );
}
