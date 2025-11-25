import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white">
      {/* Main Hero Banner */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/ritani_clean/1920/1080"
          alt="Diamond Engagement Ring"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
        
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wide shadow-sm">
              The Ring of Your Dreams
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 font-light tracking-wide shadow-sm">
              Handcrafted in New York. Transparently Priced.
            </p>
            
            <div className="bg-white p-6 md:p-8 max-w-3xl mx-auto shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-sm">
               <div className="flex-1 w-full">
                  <h3 className="font-serif text-2xl text-brand-black mb-2">Design Your Own</h3>
                  <p className="text-sm text-brand-gray mb-6 font-light">Create a custom ring in minutes.</p>
                  
                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-brand-black text-white px-6 py-4 uppercase text-xs tracking-[0.15em] font-bold hover:bg-gold-500 transition-all">
                      Start With A Setting
                    </button>
                    <div className="relative flex items-center py-1">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-xs text-gray-400 font-medium uppercase">Or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>
                    <button className="w-full border border-brand-black text-brand-black px-6 py-4 uppercase text-xs tracking-[0.15em] font-bold hover:bg-brand-black hover:text-white transition-all">
                      Start With A Diamond
                    </button>
                  </div>
               </div>
               
               <div className="hidden md:block w-px h-48 bg-gray-200"></div>

               <div className="flex-1 w-full text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start">
                     <div className="mb-4">
                        <span className="block text-3xl font-serif text-brand-black mb-1">Ready to Ship</span>
                        <p className="text-sm text-brand-gray font-light">Pre-set rings, ready for delivery.</p>
                     </div>
                     <button className="w-full md:w-auto text-brand-black border-b border-brand-black pb-1 uppercase text-xs tracking-[0.15em] font-bold hover:text-gold-500 hover:border-gold-500 transition-all">
                        Shop Best Sellers
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="bg-brand-light border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
             <div className="flex items-center gap-2">
               <span className="text-gold-500 text-lg">✓</span>
               <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Free Returns</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="text-gold-500 text-lg">✓</span>
               <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Lifetime Warranty</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="text-gold-500 text-lg">✓</span>
               <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Transparent Pricing</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="text-gold-500 text-lg">✓</span>
               <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Ethically Sourced</span>
             </div>
        </div>
      </div>
    </div>
  );
};