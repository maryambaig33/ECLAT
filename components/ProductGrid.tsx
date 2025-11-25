import React from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Links - Text based, cleaner */}
        <div className="mb-20 text-center">
          <h3 className="text-2xl font-serif text-stone-900 mb-8">Shop by Category</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {CATEGORIES.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="group flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-stone-200 group-hover:border-gold-400 transition-colors">
                   <img src={cat.image} alt={cat.label} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                </div>
                <span className="uppercase text-[11px] tracking-[0.2em] font-bold text-stone-800 group-hover:text-gold-600 transition-colors border-b border-transparent group-hover:border-gold-600 pb-1">
                  {cat.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="flex justify-between items-end mb-10 px-2">
          <div>
             <h2 className="text-3xl font-serif text-stone-900">Trending Now</h2>
             <p className="text-stone-500 text-sm mt-2 font-light">Most loved engagement styles</p>
          </div>
          <a href="#" className="hidden md:block text-xs font-bold uppercase tracking-widest text-stone-900 hover:text-gold-600 transition-colors">View All Collection</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[1/1] w-full overflow-hidden bg-stone-50 mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Hover Quick View */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center pb-6">
                    <button className="bg-white/95 backdrop-blur-sm text-stone-900 px-6 py-2.5 uppercase text-[10px] tracking-widest font-bold shadow-md hover:bg-stone-900 hover:text-white transition-colors w-full">
                        Quick View
                    </button>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-sm text-stone-400 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                </div>
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-[13px] text-stone-900 font-bold uppercase tracking-wide leading-relaxed">
                  <a href="#">
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-stone-500 font-serif italic">{product.metal} & {product.stone}</p>
                <p className="text-sm font-medium text-stone-900 pt-1">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
             <button className="border border-stone-900 text-stone-900 px-10 py-3 uppercase text-xs tracking-widest font-bold">
              View All
            </button>
        </div>
      </div>
    </div>
  );
};