import React, { useState, useRef } from 'react';
import { Camera, RefreshCw, Upload, Heart, Dog, Mountain, Sparkles, Check } from 'lucide-react';
import { PRODUCT_COLORS } from '../data/productData';
import heroImg from '../assets/images/kosnora_hero_case_1791272211390.jpg';
import coupleImg from '../assets/images/kosnora_couple_look_1791272221398.jpg';
import petImg from '../assets/images/kosnora_pet_look_1791272230677.jpg';
import travelImg from '../assets/images/kosnora_travel_art_1791272238854.jpg';

interface InteractiveCaseViewerProps {
  onSelectPlan?: () => void;
  selectedColorId?: string;
  onColorChange?: (colorId: string) => void;
}

const PRESET_LOOKS = [
  {
    id: 'couple',
    label: 'Couple Photo',
    icon: Heart,
    imageSrc: coupleImg,
    description: 'Special date or anniversary snapshot',
  },
  {
    id: 'pet',
    label: 'Pet Memory',
    icon: Dog,
    imageSrc: petImg,
    description: 'Keep your furry best friend in sight',
  },
  {
    id: 'travel',
    label: 'Travel Memory',
    icon: Mountain,
    imageSrc: travelImg,
    description: 'Unforgettable adventure & scenic horizon',
  },
  {
    id: 'art',
    label: 'Minimalist Art',
    icon: Sparkles,
    imageSrc: heroImg,
    description: 'Monochrome architectural aesthetic',
  },
];

export const InteractiveCaseViewer: React.FC<InteractiveCaseViewerProps> = ({
  onSelectPlan,
  selectedColorId: externalColorId,
  onColorChange,
}) => {
  const [internalColorId, setInternalColorId] = useState('obsidian-black');
  const activeColorId = externalColorId || internalColorId;
  const activeColor = PRODUCT_COLORS.find(c => c.id === activeColorId) || PRODUCT_COLORS[0];

  const [activeLookId, setActiveLookId] = useState('couple');
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleColorSelect = (id: string) => {
    setInternalColorId(id);
    if (onColorChange) onColorChange(id);
  };

  const handlePresetSelect = (lookId: string) => {
    if (lookId === activeLookId && !customImage) return;
    setIsUpdating(true);
    setTimeout(() => {
      setActiveLookId(lookId);
      setCustomImage(null);
      setIsUpdating(false);
    }, 280);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIsUpdating(true);
        setTimeout(() => {
          setCustomImage(reader.result as string);
          setActiveLookId('custom');
          setIsUpdating(false);
        }, 280);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentDisplayImage = customImage 
    ? customImage 
    : PRESET_LOOKS.find(l => l.id === activeLookId)?.imageSrc || coupleImg;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-neutral-950 border border-neutral-800/80 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Subtle ambient glow matching case color */}
      <div 
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeColor.hex === '#161618' ? '#ffffff' : activeColor.hex }}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left column: Realistic Smart Case Rendering */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="relative w-[280px] sm:w-[310px] aspect-[9/18.5] rounded-[48px] p-3.5 transition-all duration-500 shadow-2xl"
               style={{ 
                 backgroundColor: activeColor.hex,
                 boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.15)'
               }}>
            
            {/* Case Outer Bezel */}
            <div className="relative w-full h-full rounded-[40px] bg-neutral-900 border border-neutral-800/80 overflow-hidden flex flex-col justify-between p-3">
              
              {/* iPhone Camera Island */}
              <div className="w-24 h-24 rounded-3xl bg-neutral-950/90 border border-neutral-700/60 p-2 shadow-inner relative z-20 self-start ml-1 mt-1">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-neutral-800 shadow-sm flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-900/60"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-neutral-800 shadow-sm flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-900/60"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-neutral-800 shadow-sm flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-neutral-950 border border-neutral-700 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-900/60"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-amber-100/80 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700"></div>
                  </div>
                </div>
              </div>

              {/* The Smart Display Screen on the Back */}
              <div className="absolute inset-x-5 top-32 bottom-12 rounded-2xl overflow-hidden bg-neutral-950 border-2 border-neutral-800/90 shadow-inner flex items-center justify-center group">
                {/* E-ink textured screen container */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-900">
                  <img
                    src={currentDisplayImage}
                    alt="KOSNORA Smart Screen Display"
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isUpdating ? 'opacity-30 scale-95 blur-xs' : 'opacity-95 scale-100'
                    }`}
                  />
                  
                  {/* Subtle E-ink Screen Glare & Border Mask */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                  
                  {/* Updating Animation Overlay */}
                  {isUpdating && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs">
                      <RefreshCw className="w-8 h-8 text-white animate-spin mb-2" />
                      <span className="text-xs font-semibold tracking-wider text-neutral-200 uppercase">Updating Screen</span>
                    </div>
                  )}

                  {/* Smart Screen Badge Watermark */}
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9px] font-semibold text-neutral-300 tracking-wider">
                    NFC DISPLAY
                  </div>
                </div>
              </div>

              {/* Brand Logo subtly debossed on the bottom */}
              <div className="w-full text-center py-1 z-10">
                <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
                  KOSNORA
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Simulator · Instant Screen Refresh</span>
          </div>
        </div>

        {/* Right column: Interactive Controls & Value Driver */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="space-y-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Live Customization Preview
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              One Case. Any Picture. Any Time.
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Test how different moments look on the back of your phone. Switch between styles in seconds, or upload your own favorite photo right now.
            </p>
          </div>

          {/* Color Selector */}
          <div className="mb-6 pb-6 border-b border-neutral-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              1. Choose Case Finish: <span className="text-white normal-case font-semibold">{activeColor.name}</span>
            </label>
            <div className="flex items-center gap-3">
              {PRODUCT_COLORS.map((color) => {
                const isSelected = activeColorId === color.id;
                return (
                  <button
                    key={color.id}
                    onClick={() => handleColorSelect(color.id)}
                    className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-transform focus:outline-none ${
                      isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-950 scale-110' : 'hover:scale-105'
                    }`}
                    title={color.name}
                  >
                    <span 
                      className={`w-8 h-8 rounded-full border ${color.borderClass} shadow-sm`}
                      style={{ backgroundColor: color.hex }}
                    />
                    {isSelected && (
                      <Check className={`w-3.5 h-3.5 absolute ${color.hex === '#EAEAEA' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Look Switcher */}
          <div className="space-y-3 mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
              2. Switch The Display Look:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {PRESET_LOOKS.map((look) => {
                const Icon = look.icon;
                const isSelected = activeLookId === look.id && !customImage;
                return (
                  <button
                    key={look.id}
                    onClick={() => handlePresetSelect(look.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-neutral-800 border-white text-white shadow-md'
                        : 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold truncate">{look.label}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{look.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Photo Upload Simulator */}
            <div className="pt-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className={`w-full py-3 px-4 rounded-xl border border-dashed flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                  customImage 
                    ? 'border-emerald-500/80 bg-emerald-950/20 text-emerald-300' 
                    : 'border-neutral-700 hover:border-neutral-500 bg-neutral-900/60 text-neutral-300 hover:text-white'
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>{customImage ? 'Photo Applied! Click to try another' : 'Upload your own photo to test it on the case'}</span>
              </button>
            </div>
          </div>

          {/* Quick CTA */}
          {onSelectPlan && (
            <button
              onClick={onSelectPlan}
              className="w-full py-4 px-6 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>GET YOUR KOSNORA CASE</span>
              <span className="text-xs font-semibold text-neutral-600">— From $59.90</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
