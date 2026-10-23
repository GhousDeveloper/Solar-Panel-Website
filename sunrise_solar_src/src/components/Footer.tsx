import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenProposal: () => void;
  onSelectService: (service: string) => void;
  onOpenLegal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenProposal,
  onSelectService,
  onOpenLegal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-20 w-full bg-[#081726] text-white pt-16 lg:pt-20 pb-12 border-t border-slate-800/80 overflow-hidden">
      {/* Ambient Solar Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#138e4b]/15 via-[#138e4b]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Pre-Footer Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0c281e] via-[#0d3528] to-[#0c2238] border border-emerald-500/25 p-8 lg:p-10 mb-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Zero-Down Solar Financing Available
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Power Your Tomorrow with Clean Energy?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Join over 50,000 satisfied property owners who switched to SunRise Solar and cut up to 90% off electricity bills with Tier-1 technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenProposal}
              className="w-full sm:w-auto bg-[#138e4b] hover:bg-[#0f763d] text-white font-semibold text-sm px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 transition-all duration-150 cursor-pointer group"
            >
              <span>Request Free Solar Proposal</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
            </button>
            <a
              href="tel:+18005557652"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-700 hover:border-emerald-500/50 bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>(800) 555-SOLAR</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Company Branding */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero-scroll-container" className="inline-flex items-center gap-2.5 group cursor-pointer">
              <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 shrink-0 transition-transform duration-200 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#F59E0B" strokeWidth="3" strokeLinecap="round">
                  <line x1="32" y1="6" x2="32" y2="12" />
                  <line x1="17" y1="10" x2="20" y2="15" />
                  <line x1="47" y1="10" x2="44" y2="15" />
                  <line x1="8" y1="21" x2="13" y2="24" />
                  <line x1="56" y1="21" x2="51" y2="24" />
                </g>
                <path d="M16 34C16 25.1634 23.1634 18 32 18C40.8366 18 48 25.1634 48 34H16Z" fill="url(#sunGradFooterReact)" />
                <path d="M8 34C8 47 20 56 32 56C28 45 20 35 8 34Z" fill="#16A34A" />
                <path d="M12 37C19 41 25 47 31 55" stroke="#BBF7D0" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M56 34C56 47 44 56 32 56C36 45 44 35 56 34Z" fill="#15803D" />
                <path d="M32 56C25 46 27 33 38 27C39 39 36 49 32 56Z" fill="#22C55E" />
                <defs>
                  <linearGradient id="sunGradFooterReact" x1="32" y1="18" x2="32" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FACC15" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col">
                <span className="text-[22px] font-extrabold tracking-tight text-white leading-none whitespace-nowrap">
                  SunRise Solar
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.1em] text-emerald-400 uppercase mt-1 whitespace-nowrap">
                  CLEAN ENERGY FOR A BRIGHTER TOMORROW
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              SunRise Solar is committed to powering a cleaner, sustainable world. We engineer high-efficiency solar panel installations and smart energy storage systems for residential homes and commercial enterprises nationwide.
            </p>

            <div className="inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white text-[12px] flex items-center gap-1.5">
                  <span>Tier-1 Solar Certified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-400">25-Year Performance Guarantee</div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative pb-1">
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">Quick Links</h4>
              <div className="w-8 h-0.5 bg-[#138e4b] rounded-full mt-2" />
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map((name) => {
                const href = name === 'Home' ? '#hero-scroll-container' : name === 'About Us' || name === 'Services' ? '#why-choose-us' : name === 'Projects' ? '#benefits-section' : '#contact';
                return (
                  <li key={name}>
                    <a href={href} className="text-slate-300 hover:text-emerald-400 inline-flex items-center gap-1.5 transition-all duration-150 hover:translate-x-1">
                      <span className="text-emerald-500/70">›</span>
                      <span>{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative pb-1">
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">Our Services</h4>
              <div className="w-8 h-0.5 bg-[#138e4b] rounded-full mt-2" />
            </div>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                'Residential Solar Systems',
                'Commercial Solar Solutions',
                'Solar Panel Installation',
                'Solar Maintenance',
                'Energy Consultation',
              ].map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-left text-slate-300 hover:text-emerald-400 inline-flex items-center gap-1.5 transition-all duration-150 hover:translate-x-1 cursor-pointer"
                  >
                    <span className="text-emerald-500/70">›</span>
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative pb-1">
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">Contact Information</h4>
              <div className="w-8 h-0.5 bg-[#138e4b] rounded-full mt-2" />
            </div>
            
            <div className="space-y-3.5 text-sm text-slate-300">
              <a href="mailto:info@sunrisesolar.com" className="flex items-start gap-3 text-slate-300 hover:text-emerald-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 group-hover:bg-emerald-600/30 flex items-center justify-center text-emerald-400 shrink-0 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Email Us</div>
                  <div className="font-medium text-white">info@sunrisesolar.com</div>
                </div>
              </a>

              <a href="tel:+18005557652" className="flex items-start gap-3 text-slate-300 hover:text-emerald-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 group-hover:bg-emerald-600/30 flex items-center justify-center text-emerald-400 shrink-0 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Call Toll-Free</div>
                  <div className="font-medium text-white">+1 (800) 555-SOLAR</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="pt-0.5">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Headquarters</div>
                  <div className="font-medium text-white">100 Sunrise Blvd, Suite 400<br />Austin, TX 78701</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mb-2.5">Follow Our Green Journey</div>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Twitter, label: 'X (Twitter)' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#hero-scroll-container"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#138e4b] border border-slate-700/80 hover:border-emerald-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150 hover:-translate-y-0.5 shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} SunRise Solar Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-emerald-400 font-medium">100% Clean Energy Powered</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Solar Warranty', 'Security & Compliance'].map((legal) => (
              <button
                key={legal}
                type="button"
                onClick={() => onOpenLegal(legal)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {legal}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
