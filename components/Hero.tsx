import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-50 h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/jewelryhero2/1920/1080"
          alt="Luxury Engagement Ring"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-lg text-white">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-gold-200">
            Handcrafted Brilliance
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            The Shape of <br/> Your Love
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-8 font-light">
            Discover ethically sourced diamonds and custom-designed rings that tell your unique story.
          </p>
          <div className="flex space-x-4">
             <button className="bg-white text-stone-900 px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-stone-100 transition-all duration-300">
              Shop Engagement
            </button>
            <button className="border border-white text-white px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-white/10 transition-all duration-300">
              Design Your Own
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};