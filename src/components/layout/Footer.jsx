import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowUpRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';
import { footerQuickLinks, footerPolicyLinks, socialLinks } from '@/data/navigation';

export function Footer({ onOpenEnquiry }) {
  const getSocialIcon = (name) => {
    switch (name) {
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'YouTube':
        return <Youtube className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-tis-dark text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-tis-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-tis-red rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
                TIS
              </div>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-white leading-tight">
                  TULAS
                </h3>
                <p className="text-xs font-bold tracking-widest text-tis-gold uppercase">
                  International School
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Established under the aegis of Rishabh Educational Trust in 2012, Tulas International School is a top-ranked CBSE co-educational boarding school in Dehradun, blending Modern Gurukul values with world-class residential education.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-tis-gold" />
              <span>CBSE Affiliated • Boys & Girls • Class 4 to 12</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-tis-red text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-base tracking-wide uppercase text-tis-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-tis-gold transition-colors inline-flex items-center gap-1 group text-slate-400"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-tis-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-heading font-bold text-white text-base tracking-wide uppercase text-tis-gold">
              Contact & Campus Location
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tis-teal shrink-0 mt-0.5" />
                <span>{schoolInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tis-teal shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${schoolInfo.phoneHelpline}`} className="hover:text-tis-gold font-medium text-white">
                    Admissions Helpline: {schoolInfo.phoneHelpline}
                  </a>
                  <span className="text-xs text-slate-500">
                    Landline: {schoolInfo.landlines.join(" / ")}
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tis-teal shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-tis-gold text-white">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>

            {/* Quick Action Box inside Footer */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Planning to enroll for 2026-27?</p>
                <p className="text-[11px] text-slate-400">Admissions open for Class IV to IX & XI.</p>
              </div>
              <button
                onClick={onOpenEnquiry}
                className="px-3.5 py-1.5 rounded-lg bg-tis-gold hover:bg-tis-gold-dark text-slate-950 font-bold text-xs transition-colors shrink-0"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tulas International School (TIS). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            {footerPolicyLinks.map((policy) => (
              <a key={policy.label} href={policy.href} className="hover:text-slate-300 transition-colors">
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
