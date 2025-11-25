import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Hero Banner */}
      <div className="relative bg-stone-100 h-[500px] md:h-[650px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/ritanihero/1920/1080"
            alt="Couple with Engagement Ring"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Design the Ring <br/> You'll Love Forever
            </h1>
            <p className="text-lg text-white/90 mb-8 font-light max-w-md">
              Handcrafted in New York. Ethically sourced diamonds. Transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-stone-900 px-8 py-3.5 uppercase text-xs tracking-[0.15em] font-bold hover:bg-stone-100 transition-all shadow-lg">
                Start With A Diamond
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3.5 uppercase text-xs tracking-[0.15em] font-bold hover:bg-white hover:text-stone-900 transition-all">
                Start With A Setting
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators Strip */}
      <div className="bg-white border-b border-stone-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center md:justify-between gap-6 text-center md:text-left">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-gold-500">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <div>
               <p className="font-bold text-xs uppercase tracking-wider text-stone-900">Certified Diamonds</p>
               <p className="text-xs text-stone-500">GIA & IGI Reports</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-gold-500">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
             </div>
             <div>
               <p className="font-bold text-xs uppercase tracking-wider text-stone-900">Transparent Pricing</p>
               <p className="text-xs text-stone-500">See cost breakdowns</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-gold-500">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
             <div>
               <p className="font-bold text-xs uppercase tracking-wider text-stone-900">Risk-Free Shopping</p>
               <p className="text-xs text-stone-500">30-Day Returns</p>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-gold-500">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <div>
               <p className="font-bold text-xs uppercase tracking-wider text-stone-900">Free Viewing</p>
               <p className="text-xs text-stone-500">At local jewelers</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};