import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onAboutUsClick: () => void;
  onSelectFeatureCard: (cardTitle: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onAboutUsClick,
  onSelectFeatureCard,
}) => {
  return (
    <section id="why-choose-us" className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Kicker */}
        <div className="text-[11.5px] font-bold tracking-[0.14em] text-[#147942] uppercase mb-2.5">
          WHY CHOOSE US
        </div>

        {/* Top Row: Left Main Heading + Right Intro Copy */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-[#0c2238] max-w-[520px]">
            <span className="block">Why 50,000+ Homeowners</span>
            <span className="block">
              <span className="text-[#147942]">And Businesses</span>{' '}
              <span className="text-[#0c2238]">Choose</span>
            </span>
            <span className="block text-[#147942]">Solar Energy</span>
          </h2>

          <div className="lg:w-[50%] lg:pt-1">
            <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#4a5d6e] max-w-[420px]">
              Discover the life-changing benefits of switching to solar power. From massive savings
              to environmental impact, here&apos;s why solar is the smartest investment for your
              home.
            </p>
          </div>
        </div>

        {/* Bottom Row: Left Mission Paragraph & CTA + Right 3 Vertical Feature Cards */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
          {/* Left Column: Mission Copy + About Us Button */}
          <div className="w-full lg:w-[32%] pt-1">
            <p className="text-[13.5px] sm:text-[14px] leading-[1.7] text-[#526575] mb-7">
              At SunRise Solar, we believe in a cleaner, brighter future. Our mission is to make
              solar energy simple, affordable, and accessible for everyone. With years of
              experience and a dedicated team, we deliver high-quality solar solutions that work
              for you and the environment.
            </p>

            <button
              type="button"
              onClick={onAboutUsClick}
              className="bg-[#138e4b] hover:bg-[#0f763d] text-white text-[14px] font-semibold px-7 py-3 rounded-full inline-flex items-center gap-2.5 shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: 3 Feature Cards Grid */}
          <div className="w-full lg:w-[68%] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Clean Energy For Your Home */}
            <div
              onClick={() => onSelectFeatureCard('Clean Energy For Your Home')}
              className="group rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col bg-[#0d3528] cursor-pointer transition-transform duration-200 hover:-translate-y-1.5"
            >
              <div className="h-[210px] w-full overflow-hidden bg-[#0c2238] relative">
                <img
                  src="/assets/images/solar-residential-rooftop.jpg"
                  alt="Realistic premium solar panels installed on a modern house rooftop under bright sunlight"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3528]/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="bg-[#0d3528] text-white px-4 py-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  {/* Solid White House Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white shrink-0"
                  >
                    <path d="M12 3L2 11.5H5V21H10V15H14V21H19V11.5H22L12 3Z" />
                  </svg>
                  <div>
                    <div className="w-2.5 h-[1.5px] bg-white/60 mb-1" />
                    <div className="text-[12.5px] font-bold leading-tight text-white">
                      Clean Energy
                    </div>
                    <div className="text-[11.5px] font-medium leading-tight text-white/90 mt-0.5">
                      For Your Home
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/80 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2: Sustainable For A Greener Planet */}
            <div
              onClick={() => onSelectFeatureCard('Sustainable For A Greener Planet')}
              className="group rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col bg-[#0d3528] cursor-pointer transition-transform duration-200 hover:-translate-y-1.5"
            >
              <div className="h-[210px] w-full overflow-hidden bg-[#0c2238] relative">
                <img
                  src="/assets/images/solar-commercial-array.jpg"
                  alt="Professional commercial solar panel installation with large solar arrays and clear blue sky"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3528]/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="bg-[#0d3528] text-white px-4 py-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  {/* Solid White Leaf Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white shrink-0"
                  >
                    <path d="M17.5 3C11.5 3 6 7.2 6 13.5C6 15.6 6.7 17.5 7.9 19L5.3 21.6C4.9 22 4.9 22.6 5.3 23C5.7 23.4 6.3 23.4 6.7 23L9.4 20.3C10.9 21.1 12.6 21.5 14.5 21.5C20 21.5 22 15.5 22 4.5C22 3.7 21.3 3 20.5 3H17.5ZM9.8 17.1C9.2 16 8.9 14.8 8.9 13.5C8.9 9.5 12.3 6.5 17 6.1C15.2 9.4 12.7 13.4 9.8 17.1Z" />
                  </svg>
                  <div>
                    <div className="w-2.5 h-[1.5px] bg-white/60 mb-1" />
                    <div className="text-[12.5px] font-bold leading-tight text-white">
                      Sustainable
                    </div>
                    <div className="text-[11.5px] font-medium leading-tight text-white/90 mt-0.5">
                      For A Greener Planet
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/80 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3: Reliable Long-Term Support */}
            <div
              onClick={() => onSelectFeatureCard('Reliable Long-Term Support')}
              className="group rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col bg-[#0d3528] cursor-pointer transition-transform duration-200 hover:-translate-y-1.5"
            >
              <div className="h-[210px] w-full overflow-hidden bg-[#0c2238] relative">
                <img
                  src="/assets/images/solar-golden-hour-closeup.jpg"
                  alt="Cinematic close-up of modern photovoltaic solar panels reflecting sunlight during golden hour"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3528]/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="bg-[#0d3528] text-white px-4 py-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  {/* Solid White Shield Check Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white shrink-0"
                  >
                    <path d="M12 2L4 5.5V11.5C4 16.8 7.4 21.6 12 23C16.6 21.6 20 16.8 20 11.5V5.5L12 2ZM10.5 16.2L7.2 12.9L8.6 11.5L10.5 13.4L15.4 8.5L16.8 9.9L10.5 16.2Z" />
                  </svg>
                  <div>
                    <div className="w-2.5 h-[1.5px] bg-white/60 mb-1" />
                    <div className="text-[12.5px] font-bold leading-tight text-white">
                      Reliable
                    </div>
                    <div className="text-[11.5px] font-medium leading-tight text-white/90 mt-0.5">
                      Long-Term Support
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/80 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
