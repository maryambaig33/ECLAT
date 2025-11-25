import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <a href="#" className="font-serif text-3xl text-stone-900 tracking-wider font-semibold">
              ÉCLAT
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#engagement" className="text-stone-600 hover:text-gold-600 uppercase text-xs tracking-widest font-medium transition-colors">Engagement</a>
            <a href="#wedding" className="text-stone-600 hover:text-gold-600 uppercase text-xs tracking-widest font-medium transition-colors">Wedding</a>
            <a href="#diamonds" className="text-stone-600 hover:text-gold-600 uppercase text-xs tracking-widest font-medium transition-colors">Diamonds</a>
            <a href="#jewelry" className="text-stone-600 hover:text-gold-600 uppercase text-xs tracking-widest font-medium transition-colors">Jewelry</a>
            <a href="#gifts" className="text-stone-600 hover:text-gold-600 uppercase text-xs tracking-widest font-medium transition-colors">Gifts</a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-stone-500 hover:text-stone-900 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-stone-500 hover:text-stone-900 transition-colors">
              <Heart size={20} />
            </button>
            <button className="text-stone-500 hover:text-stone-900 transition-colors">
              <User size={20} />
            </button>
            <button className="text-stone-500 hover:text-stone-900 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>

          {/* Mobile Cart Icon (Visible on mobile) */}
          <div className="flex items-center md:hidden">
            <button className="text-stone-600 hover:text-stone-900">
               <ShoppingBag size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-stone-600 hover:text-gold-600 hover:bg-gold-50 uppercase text-xs tracking-widest font-medium">Engagement</a>
            <a href="#" className="block px-3 py-2 text-stone-600 hover:text-gold-600 hover:bg-gold-50 uppercase text-xs tracking-widest font-medium">Wedding</a>
            <a href="#" className="block px-3 py-2 text-stone-600 hover:text-gold-600 hover:bg-gold-50 uppercase text-xs tracking-widest font-medium">Diamonds</a>
            <a href="#" className="block px-3 py-2 text-stone-600 hover:text-gold-600 hover:bg-gold-50 uppercase text-xs tracking-widest font-medium">Jewelry</a>
          </div>
        </div>
      )}
    </header>
  );
};