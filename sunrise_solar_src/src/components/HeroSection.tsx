import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CustomerAvatars } from './SceneIllustrations';

interface HeroSectionProps {
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreSolutions }) => {
  return (
    <section
      id="hero-section"
      className="w-full bg-white border-b border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-12 pb-14 lg:pt-16 lg:pb-16">
        {/* Upper Hero Content (Left-aligned exact typography & CTA) */}
        <div className="max-w-[540px]">
          {/* Kicker */}
          <div className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.16em] text-[#156f46] uppercase mb-3">
            <span>CLEAN</span>
            <span aria-hidden="true">•</span>
            <span>RENEWABLE</span>
            <span aria-hidden="true">•</span>
            <span>SUSTAINABLE</span>
          </div>

          {/* 3-Line Display Headline */}
          <h1 className="text-[42px] sm:text-[52px] lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-[#0c2238]">
            <span className="block">Next-Generation</span>
            <span className="block text-[#147942]">Solar Energy</span>
            <span className="block">Solutions</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#2c4053] font-medium max-w-[400px]">
            We deliver efficient, affordable and sustainable solar energy solutions for homes,
            businesses and communities.
          </p>

          {/* Primary CTA Button */}
          <div className="mt-7">
            <button
              type="button"
              onClick={onExploreSolutions}
              className="bg-[#138e4b] hover:bg-[#0f763d] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Hero Row: Left Customer Trust Badge + Right 3 KPI Stat Cards */}
        <div className="mt-14 lg:mt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          {/* Left: Trusted by 50,000+ Happy Customers Pill Card */}
          <div className="bg-[#1c3d24] border border-[#3d6b47]/60 rounded-2xl px-4 py-3 inline-flex items-center gap-3.5 shadow-md text-white">
            <CustomerAvatars />
            <div className="pr-2">
              <div className="text-[14.5px] font-bold leading-snug text-white whitespace-nowrap">
                Trusted by 50,000+
              </div>
              <div className="text-[12px] text-white/80 font-medium leading-tight">
                Happy Customers
              </div>
            </div>
          </div>

          {/* Right: 3 Dark-Green Frosted KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {/* Stat Card 1: 75% Lower Electricity Bills */}
            <div className="bg-[#1b3b22] border border-[#3d6b47]/60 rounded-2xl px-5 py-4 min-w-[175px] text-white shadow-md">
              <div className="mb-3">
                {/* Solid White Leaf Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path d="M17.5 3C11.5 3 6 7.2 6 13.5C6 15.6 6.7 17.5 7.9 19L5.3 21.6C4.9 22 4.9 22.6 5.3 23C5.7 23.4 6.3 23.4 6.7 23L9.4 20.3C10.9 21.1 12.6 21.5 14.5 21.5C20 21.5 22 15.5 22 4.5C22 3.7 21.3 3 20.5 3H17.5ZM9.8 17.1C9.2 16 8.9 14.8 8.9 13.5C8.9 9.5 12.3 6.5 17 6.1C15.2 9.4 12.7 13.4 9.8 17.1Z" />
                </svg>
              </div>
              <div className="text-[28px] font-extrabold leading-none tracking-tight tabular-nums">
                75%
              </div>
              <div className="text-[11.5px] text-white/85 font-medium mt-1.5 whitespace-nowrap">
                Lower Electricity Bills
              </div>
            </div>

            {/* Stat Card 2: 100% Clean Renewable Energy */}
            <div className="bg-[#1b3b22] border border-[#3d6b47]/60 rounded-2xl px-5 py-4 min-w-[175px] text-white shadow-md">
              <div className="mb-3">
                {/* Solid White Sun Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 text-white"
                >
                  <circle cx="12" cy="12" r="5" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="12" y1="2" x2="12" y2="4.2" />
                    <line x1="12" y1="19.8" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="4.2" y2="12" />
                    <line x1="19.8" y1="12" x2="22" y2="12" />
                    <line x1="4.9" y1="4.9" x2="6.5" y2="6.5" />
                    <line x1="17.5" y1="17.5" x2="19.1" y2="19.1" />
                    <line x1="19.1" y1="4.9" x2="17.5" y2="6.5" />
                    <line x1="6.5" y1="17.5" x2="4.9" y2="19.1" />
                  </g>
                </svg>
              </div>
              <div className="text-[28px] font-extrabold leading-none tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-[11.5px] text-white/85 font-medium mt-1.5 whitespace-nowrap">
                Clean Renewable Energy
              </div>
            </div>

            {/* Stat Card 3: 25+ Years Lifespan */}
            <div className="bg-[#1b3b22] border border-[#3d6b47]/60 rounded-2xl px-5 py-4 min-w-[175px] text-white shadow-md">
              <div className="mb-3">
                {/* Solid White Lightning Bolt Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" />
                </svg>
              </div>
              <div className="text-[28px] font-extrabold leading-none tracking-tight tabular-nums">
                25+
              </div>
              <div className="text-[11.5px] text-white/85 font-medium mt-1.5 whitespace-nowrap">
                Years Lifespan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
