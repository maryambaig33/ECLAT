import React from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../constants';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Circles */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif text-center mb-10 text-stone-800">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="group cursor-pointer text-center">
                <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-lg border-2 border-transparent group-hover:border-gold-300 transition-all">
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <span className="uppercase text-xs tracking-widest font-bold text-stone-600 group-hover:text-gold-700 transition-colors">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Trending Collections</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[1/1] w-full overflow-hidden bg-stone-100 mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
                <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md text-stone-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm text-stone-700 font-medium">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-stone-500 italic">{product.metal}, {product.stone}</p>
                </div>
                <p className="text-sm font-bold text-stone-900">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="border border-stone-800 text-stone-800 px-10 py-3 uppercase text-xs tracking-widest font-bold hover:bg-stone-800 hover:text-white transition-all duration-300">
              View All Jewelry
            </button>
        </div>
      </div>
    </div>
  );
};