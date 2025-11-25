import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Value Proposition Strip */}
        <div className="bg-stone-50 py-8 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center">
               <h3 className="font-serif text-lg text-stone-800 mb-2">Ethically Sourced</h3>
               <p className="text-sm text-stone-500">Conflict-free diamonds and recycled metals.</p>
             </div>
             <div className="flex flex-col items-center">
               <h3 className="font-serif text-lg text-stone-800 mb-2">Lifetime Warranty</h3>
               <p className="text-sm text-stone-500">Complimentary cleaning and prong tightening.</p>
             </div>
             <div className="flex flex-col items-center">
               <h3 className="font-serif text-lg text-stone-800 mb-2">Expert Guidance</h3>
               <p className="text-sm text-stone-500">Chat with non-commissioned gemologists.</p>
             </div>
          </div>
        </div>

        <ProductGrid products={PRODUCTS} />
        
        {/* Feature Section */}
        <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-20">
              <img src="https://picsum.photos/seed/diamondmacro/1920/600" alt="Diamond Macro" className="w-full h-full object-cover" />
           </div>
           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">Real-Time Diamond Inspection</h2>
              <p className="text-stone-300 max-w-2xl mx-auto mb-10 text-lg font-light">
                Experience high-definition 360° videos of every diamond. See the sparkle before you commit.
              </p>
              <button className="border border-gold-400 text-gold-400 px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-gold-400 hover:text-stone-900 transition-all duration-300">
                Start Your Search
              </button>
           </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;