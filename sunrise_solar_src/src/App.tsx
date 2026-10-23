/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandsStrip } from './components/BrandsStrip';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BenefitsSection } from './components/BenefitsSection';

export default function App() {
  const [activeNav, setActiveNav] = useState<string>('Home');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContext, setModalContext] = useState<string>('Get Started with SunRise Solar');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    monthlyBill: '$200 - $350',
  });

  const handleOpenModal = (title: string) => {
    setModalContext(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0c2238] flex flex-col">
      {/* 1. Top Navigation Bar */}
      <Navbar
        activeNav={activeNav}
        onSelectNav={setActiveNav}
        onOpenGetStarted={() => handleOpenModal('Get Your Free Solar Assessment')}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section (Without background image as requested, containing all hero components) */}
        <HeroSection
          onExploreSolutions={() => {
            setActiveNav('Solutions');
            document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Trusted By Top Brands Strip */}
        <BrandsStrip />

        {/* 4. Why Choose Us Section + 3 Vertical Feature Cards */}
        <WhyChooseUs
          onAboutUsClick={() => handleOpenModal('About SunRise Solar')}
          onSelectFeatureCard={(cardTitle) => handleOpenModal(cardTitle)}
        />

        {/* 5. Interactive Benefits List + Eco Lightbulb Illustration Section */}
        <BenefitsSection />
      </main>

      {/* Interactive Consultation / Details Modal for CTA Buttons */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-extrabold text-[#0c2238]">{modalContext}</h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#138e4b] mx-auto" />
                <div className="text-base font-bold text-[#0c2238]">
                  Request Received!
                </div>
                <p className="text-xs text-[#526575] max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0c2238]">{formData.fullName}</span>. Our solar engineering team will send your custom savings report to{' '}
                  <span className="font-semibold text-[#0c2238]">{formData.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-2 bg-[#138e4b] hover:bg-[#0f763d] text-white text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-[#526575] leading-relaxed">
                  Join 50,000+ homeowners saving 70–90% on electricity bills with 100% clean
                  renewable energy.
                </p>
                <div>
                  <label className="block text-xs font-bold text-[#0c2238] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#138e4b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0c2238] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#138e4b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0c2238] mb-1">
                    Average Monthly Electric Bill
                  </label>
                  <select
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#138e4b] bg-white"
                  >
                    <option value="$100 - $200">$100 - $200</option>
                    <option value="$200 - $350">$200 - $350</option>
                    <option value="$350 - $500">$350 - $500</option>
                    <option value="$500+">$500+</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#138e4b] hover:bg-[#0f763d] text-white text-sm font-semibold py-3 rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  Calculate My Solar Savings
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
