import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sun, Moon, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { schoolInfo } from '@/data/schoolData';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export function Navbar({ isDark, toggleTheme, onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-tis-red text-white py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${schoolInfo.phoneHelpline}`}
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>ADMISSIONS HELPLINE: {schoolInfo.phoneHelpline}</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/90">Dehradun, Uttarakhand • CBSE Co-Ed Boarding School</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1 hover:underline text-amber-200 font-semibold"
            >
              <Sparkles className="w-3 h-3" />
              <span>Quick Enquiry</span>
            </button>
            <a
              href={schoolInfo.admissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white text-[11px] px-2.5 py-0.5 rounded-full font-semibold transition-colors"
            >
              Portal Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg border-b border-slate-200/50 dark:border-slate-800/80 py-3'
            : 'bg-white/90 dark:bg-tis-dark/95 backdrop-blur-md py-4 border-b border-slate-100 dark:border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-tis-red rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                <span>TIS</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-tis-red via-tis-gold to-tis-teal rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                  TULAS
                </span>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-tis-gold uppercase leading-tight">
                  International School
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-tis-red dark:hover:text-tis-gold rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dark/Light Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-tis-gold"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>

              {/* Apply Now Primary CTA */}
              <Button
                variant="primary"
                size="sm"
                icon={ArrowRight}
                onClick={onOpenEnquiry}
                className="hidden sm:inline-flex bg-tis-red hover:bg-tis-red-dark text-white font-bold tracking-wide"
              >
                Apply Now
              </Button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenEnquiry={() => {
          setMobileMenuOpen(false);
          onOpenEnquiry();
        }}
      />
    </>
  );
}
