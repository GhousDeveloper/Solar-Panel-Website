import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { BrandLogoIcon } from './SceneIllustrations';

interface NavbarProps {
  activeNav: string;
  onSelectNav: (nav: string) => void;
  onOpenGetStarted: () => void;
}

const SOLUTIONS_MENU = [
  { title: 'Residential Solar', desc: 'Custom rooftop solar systems for homeowners' },
  { title: 'Commercial Solar', desc: 'High-efficiency arrays for businesses & warehouses' },
  { title: 'Battery Storage', desc: '24/7 backup power & energy independence' },
  { title: 'Community Solar', desc: 'Shared clean energy programs for neighborhoods' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeNav,
  onSelectNav,
  onOpenGetStarted,
}) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'Home', label: 'Home', hasDropdown: false },
    { id: 'Solutions', label: 'Solutions', hasDropdown: true },
    { id: 'About Us', label: 'About Us', hasDropdown: false },
    { id: 'Projects', label: 'Projects', hasDropdown: false },
    { id: 'Blog', label: 'Blog', hasDropdown: false },
    { id: 'Contact', label: 'Contact', hasDropdown: false },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Left: Brand Lockup */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onSelectNav('Home');
          }}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <BrandLogoIcon className="w-10 h-10 shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-[21px] font-extrabold tracking-tight text-[#0c2238] leading-none whitespace-nowrap">
              SunRise Solar
            </span>
            <span className="text-[7px] font-bold tracking-[0.08em] text-[#4e677a] uppercase mt-1 whitespace-nowrap">
              CLEAN ENERGY FOR A BRIGHTER TOMORROW
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#2c4053]">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      onSelectNav(item.id);
                      setSolutionsOpen((prev) => !prev);
                    }}
                    className={`relative py-2 flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive ? 'text-[#0c2238] font-semibold' : 'hover:text-[#138e4b]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        solutionsOpen ? 'rotate-180 text-[#138e4b]' : 'text-[#526575]'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-6 h-[2.5px] bg-[#138e4b] rounded-full" />
                    )}
                  </button>

                  {solutionsOpen && (
                    <div className="absolute left-0 top-full pt-1 w-64 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-2 space-y-1">
                        {SOLUTIONS_MENU.map((sol) => (
                          <button
                            key={sol.title}
                            type="button"
                            onClick={() => {
                              onSelectNav('Solutions');
                              setSolutionsOpen(false);
                              const el = document.getElementById('why-choose-us');
                              el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50/70 transition-colors cursor-pointer"
                          >
                            <div className="text-xs font-bold text-[#0c2238]">{sol.title}</div>
                            <div className="text-[11px] text-[#526575]">{sol.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectNav(item.id);
                  const targetId =
                    item.id === 'Home'
                      ? 'hero-section'
                      : item.id === 'About Us'
                      ? 'why-choose-us'
                      : item.id === 'Projects' || item.id === 'Blog'
                      ? 'benefits-section'
                      : 'hero-section';
                  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative py-2 transition-colors whitespace-nowrap shrink-0 ${
                  isActive ? 'text-[#0c2238] font-semibold' : 'hover:text-[#138e4b]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#138e4b] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Get Started Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="bg-[#138e4b] hover:bg-[#0f763d] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-[#0c2238] hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onSelectNav(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-sm font-medium ${
                activeNav === item.id ? 'text-[#138e4b] font-bold' : 'text-[#2c4053]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
