import React from 'react';

export const BrandsStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Top Centered Label with Horizontal Lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-16 sm:w-28 bg-slate-200" />
          <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#7c8b99] uppercase whitespace-nowrap">
            TRUSTED BY TOP BRANDS
          </span>
          <div className="h-[1px] w-16 sm:w-28 bg-slate-200" />
        </div>

        {/* 6 Partner Brand Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center py-2">
          {/* 1. EcoHome */}
          <div className="flex items-center gap-2.5 text-[#334155] hover:text-[#0c2238] transition-colors">
            <svg viewBox="0 0 28 28" fill="currentColor" className="w-6 h-6 shrink-0">
              <path d="M14 3L3 12H6V24H12V17H16V24H22V12H25L14 3Z" />
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              EcoHome
            </span>
          </div>

          {/* 2. GreenPath */}
          <div className="flex items-center gap-2.5 text-[#334155] hover:text-[#0c2238] transition-colors">
            <svg viewBox="0 0 28 28" fill="currentColor" className="w-6 h-6 shrink-0">
              <path d="M21 4C13 4 7 9 7 16.5C7 18.8 7.8 20.8 9.1 22.3L6.2 25.2L7.8 26.8L10.8 23.8C12.4 24.6 14.3 25 16.5 25C22.5 25 24.5 18 24.5 5.5C24.5 4.7 23.8 4 23 4H21ZM11.2 20.1C10.5 19 10.2 17.8 10.2 16.5C10.2 12 14 8.5 19.5 8C17.4 11.8 14.5 16.2 11.2 20.1Z" />
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              GreenPath
            </span>
          </div>

          {/* 3. SolarTech */}
          <div className="flex items-center gap-2.5 text-[#334155] hover:text-[#0c2238] transition-colors">
            <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0">
              <circle cx="14" cy="14" r="5.5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="14" y1="3" x2="14" y2="5.5" />
                <line x1="14" y1="22.5" x2="14" y2="25" />
                <line x1="3" y1="14" x2="5.5" y2="14" />
                <line x1="22.5" y1="14" x2="25" y2="14" />
                <line x1="6.2" y1="6.2" x2="8" y2="8" />
                <line x1="20" y1="20" x2="21.8" y2="21.8" />
                <line x1="21.8" y1="6.2" x2="20" y2="8" />
                <line x1="8" y1="20" x2="6.2" y2="21.8" />
              </g>
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              SolarTech
            </span>
          </div>

          {/* 4. PureEnergy */}
          <div className="flex items-center gap-2.5 text-[#334155] hover:text-[#0c2238] transition-colors">
            <svg viewBox="0 0 28 28" fill="currentColor" className="w-6 h-6 shrink-0">
              <path d="M15.5 2.5L5.5 15.5H13L11.5 25.5L22.5 12.5H15L15.5 2.5Z" />
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              PureEnergy
            </span>
          </div>

          {/* 5. NatureFirst */}
          <div className="flex items-center gap-2.5 text-[#334155] hover:text-[#0c2238] transition-colors">
            <svg viewBox="0 0 28 28" fill="currentColor" className="w-6 h-6 shrink-0">
              <path d="M14 23C14 15 20 9 26 9C26 16 21 22 14 23Z" />
              <path d="M14 23C14 16 9 11 3 11C3 17 8 22 14 23Z" opacity="0.85" />
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              NatureFirst
            </span>
          </div>

          {/* 6. BrightFuture */}
          <div className="flex items-center gap-2.5 text-[#334155] hover:text-[#0c2238] transition-colors">
            <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0">
              <circle cx="14" cy="14" r="5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="14" y1="3.5" x2="14" y2="6" />
                <line x1="14" y1="22" x2="14" y2="24.5" />
                <line x1="3.5" y1="14" x2="6" y2="14" />
                <line x1="22" y1="14" x2="24.5" y2="14" />
                <line x1="6.5" y1="6.5" x2="8.3" y2="8.3" />
                <line x1="19.7" y1="19.7" x2="21.5" y2="21.5" />
                <line x1="21.5" y1="6.5" x2="19.7" y2="8.3" />
                <line x1="8.3" y1="19.7" x2="6.5" y2="21.5" />
              </g>
            </svg>
            <span className="text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              BrightFuture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
