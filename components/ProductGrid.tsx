import React from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-gold-500 mx-auto"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {CATEGORIES.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="group relative block overflow-hidden">
              <div className="aspect-[4/5] w-full bg-brand-light">
                 <img 
                  src={cat.image} 
                  alt={cat.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="bg-white px-6 py-3 uppercase text-[10px] tracking-[0.2em] font-bold text-brand-black shadow-lg">
                  {cat.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Products Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-brand-border">
          <h2 className="text-2xl font-serif text-brand-black">Trending Now</h2>
          <a href="#" className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-[0.2em] text-brand-black hover:text-gold-600 transition-colors">
            View All Best Sellers
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square w-full overflow-hidden bg-brand-light mb-5 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-white/90 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest">Quick View</span>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-sm font-medium text-brand-black mb-1 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-brand-gray mb-2">{product.metal} | {product.stone}</p>
                <p className="text-sm font-bold text-brand-black">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};