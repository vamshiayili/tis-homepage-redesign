import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedClass: '',
    selectedState: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.selectedClass) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      selectedClass: '',
      selectedState: '',
      consent: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-tis-dark-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 z-10 my-auto overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Enquiry Modal"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Thank you for your interest in Tulas International School, Dehradun. Our admissions counselor will get in touch with you shortly.
                </p>
                <div className="pt-4">
                  <Button variant="primary" onClick={handleReset} className="w-full bg-tis-red text-white">
                    Close Window
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-tis-red/10 text-tis-red dark:bg-tis-gold/10 dark:text-tis-gold mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Admissions 2026-27</span>
                  </div>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Quick Admission Enquiry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the details below to receive our official brochure and call back.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter student / parent full name..."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red"
                    />
                  </div>

                  {/* Mobile & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile No..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red"
                      />
                    </div>
                  </div>

                  {/* Class & State Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Seeking Grade *
                      </label>
                      <select
                        required
                        value={formData.selectedClass}
                        onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red"
                      >
                        <option value="">Select Grade</option>
                        <option value="IV">Class IV</option>
                        <option value="V">Class V</option>
                        <option value="VI">Class VI</option>
                        <option value="VII">Class VII</option>
                        <option value="VIII">Class VIII</option>
                        <option value="IX">Class IX</option>
                        <option value="X">Class X</option>
                        <option value="XI">Class XI</option>
                        <option value="XII">Class XII</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        State / Location
                      </label>
                      <select
                        value={formData.selectedState}
                        onChange={(e) => setFormData({ ...formData, selectedState: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-red"
                      >
                        <option value="">Select State</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab / Haryana">Punjab / Haryana</option>
                        <option value="Other India State">Other State</option>
                        <option value="International">International Student</option>
                      </select>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      id="consent-check"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 rounded text-tis-red focus:ring-tis-red"
                    />
                    <label htmlFor="consent-check" className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      I agree to receive admission details and updates from Tulas International School, Dehradun.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      className="w-full bg-tis-red hover:bg-tis-red-dark text-white font-extrabold py-3.5"
                    >
                      Submit Enquiry
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
