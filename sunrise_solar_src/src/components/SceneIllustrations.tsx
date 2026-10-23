import React from 'react';

export const BrandLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Sun rays */}
    <g stroke="#F59E0B" strokeWidth="3" strokeLinecap="round">
      <line x1="32" y1="6" x2="32" y2="12" />
      <line x1="17" y1="10" x2="20" y2="15" />
      <line x1="47" y1="10" x2="44" y2="15" />
      <line x1="8" y1="21" x2="13" y2="24" />
      <line x1="56" y1="21" x2="51" y2="24" />
    </g>
    {/* Rising Sun */}
    <path
      d="M16 34C16 25.1634 23.1634 18 32 18C40.8366 18 48 25.1634 48 34H16Z"
      fill="url(#sunGrad)"
    />
    {/* Left Leaf */}
    <path
      d="M8 34C8 47 20 56 32 56C28 45 20 35 8 34Z"
      fill="#16A34A"
    />
    <path
      d="M12 37C19 41 25 47 31 55"
      stroke="#BBF7D0"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Right Leaf */}
    <path
      d="M56 34C56 47 44 56 32 56C36 45 44 35 56 34Z"
      fill="#15803D"
    />
    {/* Center Sprout Leaf */}
    <path
      d="M32 56C25 46 27 33 38 27C39 39 36 49 32 56Z"
      fill="#22C55E"
    />
    <defs>
      <linearGradient id="sunGrad" x1="32" y1="18" x2="32" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FACC15" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

export const CustomerAvatars: React.FC = () => (
  <div className="flex items-center -space-x-2.5 shrink-0">
    {/* Avatar 1: Smiling Man */}
    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#dbeafe] shadow-sm">
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" fill="#BFDBFE" />
        <path d="M8 48C8 38 15 33 24 33C33 33 40 38 40 48H8Z" fill="#1E3A8A" />
        <path d="M18 33L24 41L30 33" fill="#FFFFFF" />
        <circle cx="24" cy="20" r="9" fill="#FDBA74" />
        <path d="M15 18C15 12 19 9 24 9C29 9 33 12 33 18C31 15 28 14 24 14C20 14 17 15 15 18Z" fill="#451A03" />
        <circle cx="21" cy="20" r="1.2" fill="#1E293B" />
        <circle cx="27" cy="20" r="1.2" fill="#1E293B" />
        <path d="M21 24C22.5 25.5 25.5 25.5 27 24" stroke="#7C2D12" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
    {/* Avatar 2: Smiling Woman */}
    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#dcfce7] shadow-sm">
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" fill="#D1FAE5" />
        <path d="M13 21C13 13 18 9 24 9C30 9 35 13 35 21V34H13V21Z" fill="#27272A" />
        <path d="M9 48C9 39 15 34 24 34C33 34 39 39 39 48H9Z" fill="#047857" />
        <circle cx="24" cy="21" r="8.5" fill="#FDE047" fillOpacity="0.2" />
        <circle cx="24" cy="21" r="8.5" fill="#FED7AA" />
        <path d="M15 20C16 14 20 11 25 11C29 11 32 14 33 19C30 16 26 15 22 16C18 17 16 19 15 20Z" fill="#18181B" />
        <circle cx="21" cy="21" r="1.2" fill="#1E293B" />
        <circle cx="27" cy="21" r="1.2" fill="#1E293B" />
        <path d="M21.5 25C23 26.3 25 26.3 26.5 25" stroke="#9A3412" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
    {/* Avatar 3: Smiling Professional Man */}
    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#fef3c7] shadow-sm">
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect width="48" height="48" fill="#E0F2FE" />
        <path d="M8 48C8 38 15 33 24 33C33 33 40 38 40 48H8Z" fill="#334155" />
        <circle cx="24" cy="20" r="9" fill="#F5CBA7" />
        <path d="M15 17C15 11.5 19 8.5 24 8.5C29 8.5 33 11.5 33 17C30 14 27 13 24 13C21 13 18 14 15 17Z" fill="#292524" />
        <circle cx="21" cy="20" r="1.2" fill="#1E293B" />
        <circle cx="27" cy="20" r="1.2" fill="#1E293B" />
        <path d="M21 24.2C22.5 25.8 25.5 25.8 27 24.2" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

/**
 * Card 1 Illustration: Modern Home with Solar Roof ("Clean Energy For Your Home")
 */
export const HomeSolarScene: React.FC = () => (
  <svg viewBox="0 0 400 280" fill="none" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky1" x1="200" y1="0" x2="200" y2="160" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#BAE6FD" />
      </linearGradient>
      <linearGradient id="lawn1" x1="200" y1="150" x2="200" y2="280" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ADE80" />
        <stop offset="1" stopColor="#15803D" />
      </linearGradient>
      <linearGradient id="panel1" x1="150" y1="85" x2="290" y2="175" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1D4ED8" />
        <stop offset="0.5" stopColor="#2563EB" />
        <stop offset="1" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect width="400" height="280" fill="url(#sky1)" />
    {/* Soft clouds */}
    <ellipse cx="90" cy="45" rx="45" ry="14" fill="white" fillOpacity="0.65" />
    <ellipse cx="120" cy="40" rx="35" ry="16" fill="white" fillOpacity="0.75" />
    <ellipse cx="320" cy="36" rx="50" ry="13" fill="white" fillOpacity="0.6" />

    {/* Distant rolling hills & trees */}
    <path d="M0 155Q110 120 230 148T400 140V280H0V155Z" fill="#22C55E" />
    <path d="M0 175Q160 155 400 170V280H0V175Z" fill="url(#lawn1)" />

    {/* Background trees */}
    <circle cx="55" cy="128" r="32" fill="#15803D" />
    <circle cx="85" cy="122" r="38" fill="#16A34A" />
    <circle cx="345" cy="115" r="42" fill="#15803D" />
    <circle cx="315" cy="125" r="32" fill="#16A34A" />
    <circle cx="240" cy="105" r="28" fill="#15803D" />

    {/* Neighboring background house on top-left */}
    <polygon points="35,120 75,98 115,120" fill="#334155" />
    <rect x="45" y="120" width="60" height="32" fill="#E2E8F0" />

    {/* Main Modern House with Solar Panels */}
    {/* House shadow */}
    <polygon points="95,215 245,255 360,205 215,175" fill="#052E16" fillOpacity="0.35" />

    {/* Left wall */}
    <polygon points="105,155 105,210 215,245 215,185" fill="#F8FAFC" />
    {/* Right gable wall */}
    <polygon points="215,185 215,245 335,195 335,135 280,105" fill="#E2E8F0" />

    {/* Windows with warm interior glow */}
    <polygon points="125,172 125,202 155,212 155,182" fill="#FEF08A" stroke="#475569" strokeWidth="2" />
    <polygon points="170,186 170,218 200,228 200,196" fill="#FDE047" stroke="#475569" strokeWidth="2" />
    <polygon points="245,175 245,212 285,195 285,158" fill="#FEF08A" stroke="#475569" strokeWidth="2.5" />
    <polygon points="298,155 298,182 322,172 322,145" fill="#38BDF8" stroke="#475569" strokeWidth="2" />

    {/* Roof structure */}
    <polygon points="92,158 175,92 285,105 215,190" fill="#1E293B" />
    <polygon points="280,105 345,140 335,144 280,112" fill="#334155" />

    {/* Large Blue Solar Panel Array on Roof */}
    <polygon points="106,152 176,97 274,109 212,182" fill="url(#panel1)" stroke="#93C5FD" strokeWidth="2" />

    {/* Solar Grid Lines */}
    <g stroke="#93C5FD" strokeWidth="1.2" strokeOpacity="0.85">
      <line x1="125" y1="137" x2="228" y2="163" />
      <line x1="143" y1="123" x2="244" y2="144" />
      <line x1="160" y1="110" x2="260" y2="126" />

      <line x1="196" y1="99" x2="128" y2="158" />
      <line x1="218" y1="102" x2="152" y2="165" />
      <line x1="240" y1="105" x2="178" y2="172" />
      <line x1="258" y1="107" x2="196" y2="177" />
    </g>

    {/* Foreground shrubs */}
    <circle cx="88" cy="215" r="18" fill="#15803D" />
    <circle cx="110" cy="222" r="14" fill="#22C55E" />
    <circle cx="348" cy="205" r="24" fill="#15803D" />
    <circle cx="325" cy="215" r="16" fill="#22C55E" />
  </svg>
);

/**
 * Card 2 Illustration: Solar Farm Field at Sunrise ("Sustainable For A Greener Planet")
 */
export const SolarFarmScene: React.FC = () => (
  <svg viewBox="0 0 400 280" fill="none" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky2" x1="200" y1="0" x2="200" y2="145" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.65" stopColor="#BAE6FD" />
        <stop offset="1" stopColor="#FEF08A" />
      </linearGradient>
      <linearGradient id="meadow2" x1="200" y1="135" x2="200" y2="280" gradientUnits="userSpaceOnUse">
        <stop stopColor="#84CC16" />
        <stop offset="0.5" stopColor="#22C55E" />
        <stop offset="1" stopColor="#14532D" />
      </linearGradient>
      <radialGradient id="sunGlow2" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#FEF9C3" stopOpacity="1" />
        <stop offset="50%" stopColor="#FDE047" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Sky */}
    <rect width="400" height="150" fill="url(#sky2)" />

    {/* Distant Mountains */}
    <path d="M0 140L75 112L145 135L230 108L320 132L400 115V150H0V140Z" fill="#64748B" fillOpacity="0.45" />

    {/* Green Meadow */}
    <rect y="138" width="400" height="142" fill="url(#meadow2)" />

    {/* Golden Sunrise Glow on Horizon */}
    <circle cx="245" cy="135" r="65" fill="url(#sunGlow2)" />
    <circle cx="245" cy="135" r="16" fill="#FEFCE8" />

    {/* Perspective Rows of Solar Panels */}
    {/* Row 1 (Left) */}
    <polygon points="15,265 185,152 205,152 65,275" fill="#1E3A8A" stroke="#93C5FD" strokeWidth="1.5" />
    {/* Row 2 (Center-Left) */}
    <polygon points="110,275 225,152 245,152 168,278" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1.5" />
    {/* Row 3 (Center-Right) */}
    <polygon points="215,278 265,152 285,152 278,278" fill="#1E40AF" stroke="#93C5FD" strokeWidth="1.5" />
    {/* Row 4 (Right) */}
    <polygon points="315,278 302,152 325,152 385,275" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1.5" />

    {/* Grid lines on panels */}
    <g stroke="#BAE6FD" strokeWidth="1" strokeOpacity="0.7">
      <line x1="65" y1="235" x2="105" y2="240" />
      <line x1="108" y1="205" x2="138" y2="208" />
      <line x1="145" y1="178" x2="168" y2="180" />

      <line x1="145" y1="240" x2="188" y2="242" />
      <line x1="175" y1="205" x2="208" y2="206" />
      <line x1="202" y1="175" x2="225" y2="176" />

      <line x1="235" y1="240" x2="278" y2="240" />
      <line x1="248" y1="205" x2="280" y2="205" />
      <line x1="258" y1="175" x2="282" y2="175" />

      <line x1="312" y1="240" x2="365" y2="238" />
      <line x1="308" y1="205" x2="348" y2="204" />
      <line x1="305" y1="175" x2="334" y2="174" />
    </g>

    {/* Sunbeams */}
    <g stroke="#FEF08A" strokeWidth="2" strokeOpacity="0.35">
      <line x1="245" y1="135" x2="90" y2="260" />
      <line x1="245" y1="135" x2="190" y2="270" />
      <line x1="245" y1="135" x2="295" y2="270" />
      <line x1="245" y1="135" x2="380" y2="240" />
    </g>
  </svg>
);

/**
 * Card 3 Illustration: Technician Installing Solar Panels ("Reliable Long-Term Support")
 */
export const TechnicianSolarScene: React.FC = () => (
  <svg viewBox="0 0 400 280" fill="none" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky3" x1="200" y1="0" x2="200" y2="175" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#BAE6FD" />
      </linearGradient>
      <linearGradient id="panelDeck" x1="0" y1="155" x2="400" y2="280" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E3A8A" />
        <stop offset="0.5" stopColor="#1D4ED8" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    {/* Sky & Clouds */}
    <rect width="400" height="190" fill="url(#sky3)" />
    <ellipse cx="85" cy="52" rx="55" ry="18" fill="white" fillOpacity="0.75" />
    <ellipse cx="135" cy="45" rx="45" ry="20" fill="white" fillOpacity="0.85" />
    <ellipse cx="320" cy="65" rx="60" ry="16" fill="white" fillOpacity="0.65" />

    {/* Distant Horizon Greenery */}
    <path d="M0 165Q120 152 240 162T400 155V195H0V165Z" fill="#15803D" />

    {/* Foreground Angled Solar Panel Array */}
    <polygon points="0,185 400,155 400,280 0,280" fill="url(#panelDeck)" stroke="#93C5FD" strokeWidth="2" />

    {/* Solar Panel Grid Reflection Lines */}
    <g stroke="#93C5FD" strokeWidth="1.5" strokeOpacity="0.75">
      <line x1="0" y1="212" x2="400" y2="180" />
      <line x1="0" y1="242" x2="400" y2="210" />
      <line x1="0" y1="272" x2="400" y2="242" />

      <line x1="75" y1="179" x2="30" y2="280" />
      <line x1="165" y1="172" x2="135" y2="280" />
      <line x1="255" y1="165" x2="245" y2="280" />
      <line x1="345" y1="159" x2="355" y2="280" />
    </g>

    {/* Solar Technician in Hard Hat & High-Vis Vest */}
    {/* Kneeling Legs / Work Pants */}
    <path d="M235 135L275 145L265 172L218 166Z" fill="#1E293B" />
    <rect x="258" y="158" width="22" height="12" rx="4" fill="#0F172A" />
    {/* Blue Work Shirt & Arms */}
    <path d="M195 102L242 92L262 136L215 145Z" fill="#1E3A8A" />
    {/* High-Vis Lime/Yellow Safety Vest */}
    <path d="M202 96L245 88L264 134L225 142Z" fill="#A3E635" />
    <path d="M212 100L250 93" stroke="#FEF08A" strokeWidth="4" />
    <path d="M220 122L258 114" stroke="#FEF08A" strokeWidth="4" />

    {/* Arm reaching down to inspect panel */}
    <path d="M202 104L174 146L185 152L214 114Z" fill="#FDBA74" />
    {/* Work Glove */}
    <rect x="164" y="144" width="18" height="11" rx="4" fill="#334155" />

    {/* Head & Face */}
    <circle cx="192" cy="88" r="14" fill="#FDBA74" />
    <path d="M184 92C186 96 192 98 197 95" stroke="#7C2D12" strokeWidth="1.5" strokeLinecap="round" />

    {/* White Safety Hard Hat */}
    <path d="M174 84C174 71 184 64 196 66C207 68 212 77 210 88L170 86Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
    <path d="M166 86L212 88" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/**
 * Tilted Floating Solar Panel Card on Row 4 ("Energy Independence")
 */
export const TiltedSolarCardScene: React.FC = () => (
  <svg viewBox="0 0 160 180" fill="none" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyTilt" x1="80" y1="0" x2="80" y2="105" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#E0F2FE" />
      </linearGradient>
    </defs>
    {/* Sky */}
    <rect width="160" height="180" fill="url(#skyTilt)" />
    {/* Bright Sunburst */}
    <circle cx="122" cy="48" r="22" fill="#FEF08A" fillOpacity="0.6" />
    <circle cx="122" cy="48" r="9" fill="#FFFFFF" />
    {/* Clouds */}
    <ellipse cx="45" cy="36" rx="28" ry="9" fill="white" fillOpacity="0.8" />
    <ellipse cx="70" cy="32" rx="22" ry="10" fill="white" fillOpacity="0.85" />

    {/* Green Grass Base */}
    <path d="M0 105Q80 95 160 108V180H0V105Z" fill="#16A34A" />
    <path d="M0 132Q80 122 160 135V180H0V132Z" fill="#15803D" />

    {/* Angled Solar Panel */}
    <polygon points="10,148 52,92 152,85 136,145" fill="#1D4ED8" stroke="#BAE6FD" strokeWidth="2" />
    <g stroke="#93C5FD" strokeWidth="1.2" strokeOpacity="0.85">
      <line x1="25" y1="128" x2="142" y2="120" />
      <line x1="38" y1="110" x2="147" y2="102" />
      <line x1="76" y1="90" x2="45" y2="147" />
      <line x1="102" y1="88" x2="76" y2="146" />
      <line x1="128" y1="86" x2="108" y2="145" />
    </g>
  </svg>
);

/**
 * Conceptual Eco Lightbulb with Tree, Solar Panels, Sunburst & Floating Leaves
 */
export const EcoLightbulbIllustration: React.FC = () => (
  <svg viewBox="0 0 340 370" fill="none" className="w-full max-w-[290px] h-auto drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bulbSky" cx="0.5" cy="0.42" r="0.48">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="70%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#7DD3FC" />
      </radialGradient>
      <linearGradient id="bulbPanel" x1="95" y1="175" x2="245" y2="245" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E40AF" />
        <stop offset="0.5" stopColor="#2563EB" />
        <stop offset="1" stopColor="#1E3A8A" />
      </linearGradient>
      <linearGradient id="metalBase" x1="130" y1="290" x2="210" y2="290" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#64748B" />
        <stop offset="30%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#94A3B8" />
        <stop offset="75%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <clipPath id="bulbClip">
        <path d="M170 42C109 42 62 90 62 150C62 188 84 218 106 244C118 258 126 274 128 290H212C214 274 222 258 234 244C256 218 278 188 278 150C278 90 231 42 170 42Z" />
      </clipPath>
    </defs>

    {/* Floating Decorative Green Leaves & Rays around the Bulb */}
    {/* Top-Right Large Leaf */}
    <path d="M276 38C295 15 322 14 330 14C326 32 308 52 276 48Z" fill="#65A30D" />
    <path d="M276 48C298 35 314 25 328 15" stroke="#ECFCCB" strokeWidth="1.5" strokeLinecap="round" />

    {/* Mid-Right Small Leaf */}
    <path d="M306 94C316 86 326 88 330 90C324 98 314 102 306 94Z" fill="#84CC16" />

    {/* Bottom-Left Soft Blurred Leaf */}
    <path d="M74 248C52 246 38 258 34 266C48 272 66 266 74 248Z" fill="#84CC16" fillOpacity="0.75" />

    {/* Top-Left Tiny Sprout Drops */}
    <path d="M62 88C52 82 44 84 40 86C46 94 56 94 62 88Z" fill="#65A30D" />
    <circle cx="88" cy="52" r="3" fill="#84CC16" />
    <circle cx="242" cy="36" r="2.5" fill="#65A30D" />
    <circle cx="52" cy="152" r="3" fill="#84CC16" />
    <circle cx="296" cy="168" r="3.5" fill="#65A30D" />

    {/* Base Shadow */}
    <ellipse cx="170" cy="354" rx="52" ry="8" fill="#0F172A" fillOpacity="0.18" />

    {/* Inside of the Glass Lightbulb (Clipped) */}
    <g clipPath="url(#bulbClip)">
      {/* Sky background inside bulb */}
      <rect x="50" y="40" width="240" height="260" fill="url(#bulbSky)" />

      {/* Soft clouds inside bulb */}
      <ellipse cx="115" cy="105" rx="38" ry="12" fill="white" fillOpacity="0.7" />
      <ellipse cx="220" cy="95" rx="42" ry="14" fill="white" fillOpacity="0.65" />

      {/*Lush Green Tree inside Left-Center of Bulb */}
      {/* Trunk */}
      <rect x="135" y="142" width="10" height="45" rx="3" fill="#78350F" />
      <path d="M140 158L126 144" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      <path d="M140 154L154 140" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
      {/* Tree Canopy */}
      <circle cx="140" cy="112" r="32" fill="#15803D" />
      <circle cx="118" cy="126" r="24" fill="#16A34A" />
      <circle cx="162" cy="124" r="25" fill="#15803D" />
      <circle cx="132" cy="102" r="24" fill="#22C55E" />
      <circle cx="152" cy="106" r="20" fill="#4ADE80" fillOpacity="0.65" />
      <circle cx="122" cy="118" r="16" fill="#86EFAC" fillOpacity="0.4" />

      {/* Green Grass & Lower Bulb Foliage */}
      <path d="M55 225Q170 205 285 225V295H55V225Z" fill="#4ADE80" />
      <path d="M55 245Q170 232 285 245V295H55V245Z" fill="#15803D" />

      {/* Solar Panel Array spanning the center-lower bulb */}
      <polygon points="68,232 102,175 238,175 272,232" fill="url(#bulbPanel)" stroke="#BAE6FD" strokeWidth="2" />

      {/* Solar Panel Grid Lines */}
      <g stroke="#93C5FD" strokeWidth="1.3" strokeOpacity="0.85">
        <line x1="88" y1="192" x2="252" y2="192" />
        <line x1="78" y1="212" x2="262" y2="212" />

        <line x1="130" y1="175" x2="112" y2="232" />
        <line x1="158" y1="175" x2="150" y2="232" />
        <line x1="184" y1="175" x2="190" y2="232" />
        <line x1="210" y1="175" x2="228" y2="232" />
      </g>

      {/* Golden Sunburst at Right Edge of Solar Panel */}
      <circle cx="235" cy="176" r="32" fill="#FEF08A" fillOpacity="0.65" />
      <circle cx="235" cy="176" r="12" fill="#FFFFFF" />
    </g>

    {/* Glass Bulb Rim & Specular Highlights */}
    <path
      d="M170 42C109 42 62 90 62 150C62 188 84 218 106 244C118 258 126 274 128 290H212C214 274 222 258 234 244C256 218 278 188 278 150C278 90 231 42 170 42Z"
      stroke="white"
      strokeWidth="3.5"
      strokeOpacity="0.85"
    />
    <path
      d="M170 42C109 42 62 90 62 150C62 188 84 218 106 244C118 258 126 274 128 290H212C214 274 222 258 234 244C256 218 278 188 278 150C278 90 231 42 170 42Z"
      stroke="#94A3B8"
      strokeWidth="1.2"
      strokeOpacity="0.45"
    />
    {/* Curved Glass Highlight on Upper Left */}
    <path
      d="M82 135C82 96 112 64 152 56"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeOpacity="0.65"
    />

    {/* Metallic Screw Base */}
    <rect x="128" y="288" width="84" height="14" rx="6" fill="url(#metalBase)" stroke="#475569" strokeWidth="1" />
    <rect x="132" y="302" width="76" height="13" rx="6" fill="url(#metalBase)" stroke="#475569" strokeWidth="1" />
    <rect x="136" y="315" width="68" height="13" rx="6" fill="url(#metalBase)" stroke="#475569" strokeWidth="1" />
    <rect x="142" y="328" width="56" height="11" rx="5" fill="url(#metalBase)" stroke="#475569" strokeWidth="1" />
    {/* Bottom Dark Electrical Contact */}
    <path d="M150 339H190L180 352H160L150 339Z" fill="#1E293B" />
  </svg>
);
