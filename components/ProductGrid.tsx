import React from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Links - Clean Grid */}
        <div className="mb-24">
          <h3 className="text-center text-3xl font-serif text-brand-black mb-12">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {CATEGORIES.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="group relative overflow-hidden block">
                <div className="aspect-[4/5] w-full bg-brand-light relative">
                   <img src={cat.image} alt={cat.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/90 px-6 py-3 uppercase text-[10px] tracking-[0.2em] font-bold text-brand-black group-hover:bg-brand-black group-hover:text-white transition-all">
                        {cat.label}
                      </span>
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-serif text-brand-black">Trending Engagement Rings</h2>
          <a href="#" className="hidden md:block text-xs font-bold uppercase tracking-widest text-brand-black hover:text-gold-600 transition-colors">Shop All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square w-full overflow-hidden bg-brand-light mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-2 left-2">
                   {product.price > 4000 && (
                      <span className="bg-brand-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">Best Seller</span>
                   )}
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-[12px] text-brand-black font-bold uppercase tracking-widest leading-relaxed">
                  <a href="#">
                    {product.name}
                  </a>
                </h3>
                <div className="text-[11px] text-brand-gray space-y-1">
                   <p>{product.metal}</p>
                   <p>{product.stone}</p>
                </div>
                <p className="text-sm font-medium text-brand-black pt-1">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <button className="border border-brand-black text-brand-black px-12 py-3 uppercase text-xs tracking-widest font-bold">
              View All
            </button>
        </div>
      </div>
    </div>
  );
};