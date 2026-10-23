import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  EcoLightbulbIllustration,
  TiltedSolarCardScene,
} from './SceneIllustrations';

interface BenefitItem {
  id: string;
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}

const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'massive-savings',
    title: 'Massive Savings',
    bullets: [
      'Save 70-90% on monthly electricity bills',
      'Lock in energy costs for 25+ years',
      'Increase home value by $15,000+',
    ],
    icon: (
      /* Money Bag with $ Icon */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 4h6l-1 3.5C17.2 9 19 12 19 15.5 19 18.8 16.2 21 12 21s-7-2.2-7-5.5C5 12 6.8 9 10 7.5L9 4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11v6m-2-4.5c0-.8.9-1.5 2-1.5s2 .7 2 1.5-.9 1.5-2 1.5-2 .7-2 1.5.9 1.5 2 1.5 2-.7 2-1.5"
        />
      </svg>
    ),
  },
  {
    id: 'environmental-impact',
    title: 'Environmental Impact',
    bullets: [
      'Reduce carbon footprint by 80%',
      'Equivalent to planting 150 trees annually',
      'Support clean, renewable energy',
    ],
    icon: (
      /* Leaf Icon */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 3C11 3 6 7.5 6 13.5c0 2.1.7 4 1.9 5.5L5 22l3-2.9c1.5.8 3.2 1.4 5 1.4 5.5 0 7.5-6 7.5-16.5 0-.6-.4-1-1-1H17z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 18.5C11 15 14 11.5 16.5 7.5" />
      </svg>
    ),
  },
  {
    id: 'increase-home-value',
    title: 'Increase Home Value',
    bullets: [
      'Boost property value by 4-6%',
      'Homes sell 20% faster',
      'Attractive to eco-conscious buyers',
    ],
    icon: (
      /* House Icon */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 11.5L12 4l9 7.5M5.5 10v9.5h13V10"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19.5v-5h4v5" />
      </svg>
    ),
  },
  {
    id: 'energy-independence',
    title: 'Energy Independence',
    bullets: [
      'Reduce reliance on utility companies',
      'Protection against rising energy costs',
      'Backup power with battery storage',
    ],
    icon: (
      /* Lightning Bolt Icon */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"
        />
      </svg>
    ),
  },
  {
    id: 'reliable-technology',
    title: 'Reliable Technology',
    bullets: [
      '25-year manufacturer warranty',
      '90% efficiency after 25 years',
      'Minimal maintenance required',
    ],
    icon: (
      /* Shield Icon */
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3L4.5 6.5v5.5c0 5 3.2 9.6 7.5 11 4.3-1.4 7.5-6 7.5-11V6.5L12 3z"
        />
      </svg>
    ),
  },
];

export const BenefitsSection: React.FC = () => {
  // Default highlighted row is "energy-independence" (Row 4) to match the screenshot
  const [activeId, setActiveId] = useState<string>('energy-independence');

  return (
    <section id="benefits-section" className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
          {/* Left Column: 5 Horizontal Benefit Rows */}
          <div className="w-full lg:w-[65%] space-y-3.5">
            {BENEFITS_DATA.map((item) => {
              const isHighlighted = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`relative rounded-2xl px-5 py-4 transition-all duration-150 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-[#c7f86b] via-[#bdf357] to-[#b1ee46] shadow-md border border-[#a3e635]'
                      : 'bg-[#f8fbf9] hover:bg-[#f1f8f3] border border-slate-100'
                  }`}
                >
                  {/* Left: Icon Circle + Arrow + Benefit Title */}
                  <div className="flex items-center gap-3.5 sm:w-[44%] shrink-0">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                        isHighlighted
                          ? 'bg-white text-[#0c2238] shadow-xs'
                          : 'bg-[#e3f3e8] text-[#0f3923]'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 ${
                        isHighlighted ? 'text-[#1c3d24]' : 'text-[#2e5a44]'
                      }`}
                    />
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0c2238] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Middle/Right: 3 Bullet Points */}
                  <ul
                    className={`text-[12px] sm:text-[12.5px] space-y-1 flex-1 ${
                      isHighlighted
                        ? 'text-[#16361d] font-medium sm:pr-24'
                        : 'text-[#475b6d] font-medium'
                    }`}
                  >
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span
                          className={`w-1 h-1 rounded-full shrink-0 ${
                            isHighlighted ? 'bg-[#16361d]' : 'bg-[#64748b]'
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Floating Tilted Solar Panel Thumbnail Card on the Active Row (Row 4 in screenshot) */}
                  {isHighlighted && (
                    <div className="hidden sm:block absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <div className="w-[100px] h-[112px] rounded-xl overflow-hidden shadow-lg border-2 border-white/90 -rotate-6">
                        <TiltedSolarCardScene />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Eco Lightbulb Illustration & Handwritten Script Tagline */}
          <div className="w-full lg:w-[35%] flex flex-col items-center justify-center pt-4 lg:pt-0">
            <EcoLightbulbIllustration />

            {/* Handwritten Script Text: "Clean Energy / Brighter Future" */}
            <div className="mt-2 text-center -rotate-6 select-none">
              <div className="font-script text-[36px] sm:text-[40px] font-bold leading-[0.95] text-[#177945]">
                Clean Energy
              </div>
              <div className="font-script text-[36px] sm:text-[40px] font-bold leading-[0.95] text-[#177945] mt-0.5">
                Brighter Future
              </div>
              {/* Curved Underline Brush Stroke */}
              <svg
                viewBox="0 0 180 18"
                fill="none"
                className="w-36 h-4 mx-auto mt-1 text-[#177945]"
              >
                <path
                  d="M12 13C55 4 115 3 168 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
