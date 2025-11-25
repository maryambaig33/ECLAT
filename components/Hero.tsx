import React from 'react';
import { Diamond, Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-white w-full">
      {/* Main Banner Area */}
      <div className="relative w-full h-[550px] md:h-[650px]">
        <img
          src="https://picsum.photos/seed/ritani_hero_clean/1920/1080"
          alt="Exquisite Diamond Ring"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:via-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-start max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-5xl md:text-6xl mb-4 leading-tight">
              Love, <br/> 
              <span className="italic">Custom Made.</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 opacity-90">
              Handcrafted in New York. Ethically sourced. Unbeatable value.
            </p>
            <button className="bg-white text-brand-black px-8 py-3 uppercase text-xs tracking-[0.2em] font-bold hover:bg-brand-black hover:text-white transition-colors duration-300">
              Shop Engagement Rings
            </button>
          </div>
        </div>
      </div>

      {/* The "Design Your Own" Split Section - Signature Feature */}
      <div className="relative -mt-16 z-10 max-w-5xl mx-auto px-4">
        <div className="bg-white shadow-xl flex flex-col md:flex-row">
          
          {/* Left: Start with Diamond */}
          <div className="flex-1 p-8 md:p-12 text-center border-b md:border-b-0 md:border-r border-brand-border hover:bg-brand-light transition-colors group cursor-pointer">
            <div className="mb-4 text-brand-black group-hover:scale-110 transition-transform duration-500">
               <Diamond size={40} strokeWidth={1} className="mx-auto" />
            </div>
            <h3 className="font-serif text-2xl mb-2 text-brand-black">Start with a Diamond</h3>
            <p className="text-sm text-brand-gray mb-6 font-light">Choose from over 100,000 loose diamonds.</p>
            <span className="inline-block border-b border-brand-black pb-1 uppercase text-[10px] tracking-[0.2em] font-bold group-hover:text-gold-500 group-hover:border-gold-500 transition-colors">
              Search Diamonds
            </span>
          </div>

          {/* Right: Start with Setting */}
          <div className="flex-1 p-8 md:p-12 text-center hover:bg-brand-light transition-colors group cursor-pointer">
             <div className="mb-4 text-brand-black group-hover:scale-110 transition-transform duration-500">
               <div className="w-10 h-10 border-2 border-brand-black rounded-full mx-auto relative"></div>
            </div>
            <h3 className="font-serif text-2xl mb-2 text-brand-black">Start with a Setting</h3>
            <p className="text-sm text-brand-gray mb-6 font-light">Find the perfect style for your stone.</p>
            <span className="inline-block border-b border-brand-black pb-1 uppercase text-[10px] tracking-[0.2em] font-bold group-hover:text-gold-500 group-hover:border-gold-500 transition-colors">
              Browse Settings
            </span>
          </div>

        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-12 bg-white border-b border-brand-border mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          {['Free Returns', 'Lifetime Warranty', 'Diamond Price Match', 'Transparent Pricing'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-gold-500 text-lg">✓</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-dark">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};