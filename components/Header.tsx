import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      {/* Top utility bar */}
      <div className="bg-stone-900 text-white text-[10px] md:text-xs py-2 text-center tracking-widest font-medium uppercase">
        Consult with a Gemologist: 1-888-555-0123 | Free Shipping & Returns
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-900 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <a href="#" className="font-serif text-3xl text-stone-900 tracking-wide font-medium">
              ÉCLAT
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 items-center absolute left-1/2 transform -translate-x-1/2">
            <a href="#engagement" className="text-stone-800 hover:text-gold-600 text-[13px] tracking-widest uppercase font-bold transition-colors">Engagement</a>
            <a href="#wedding" className="text-stone-800 hover:text-gold-600 text-[13px] tracking-widest uppercase font-bold transition-colors">Wedding</a>
            <a href="#diamonds" className="text-stone-800 hover:text-gold-600 text-[13px] tracking-widest uppercase font-bold transition-colors">Diamonds</a>
            <a href="#jewelry" className="text-stone-800 hover:text-gold-600 text-[13px] tracking-widest uppercase font-bold transition-colors">Jewelry</a>
            <a href="#education" className="text-stone-800 hover:text-gold-600 text-[13px] tracking-widest uppercase font-bold transition-colors">Education</a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-stone-800 hover:text-gold-600 transition-colors">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button className="text-stone-800 hover:text-gold-600 transition-colors">
              <Heart size={22} strokeWidth={1.5} />
            </button>
            <button className="text-stone-800 hover:text-gold-600 transition-colors">
              <User size={22} strokeWidth={1.5} />
            </button>
            <button className="text-stone-800 hover:text-gold-600 transition-colors relative">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-stone-900 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
            </button>
          </div>

          {/* Mobile Cart Icon (Visible on mobile) */}
          <div className="flex items-center md:hidden">
            <button className="text-stone-900 p-2">
               <ShoppingBag size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#" className="block py-2 text-stone-900 border-b border-stone-100 uppercase text-xs tracking-widest font-bold">Engagement Rings</a>
            <a href="#" className="block py-2 text-stone-900 border-b border-stone-100 uppercase text-xs tracking-widest font-bold">Wedding Rings</a>
            <a href="#" className="block py-2 text-stone-900 border-b border-stone-100 uppercase text-xs tracking-widest font-bold">Diamonds</a>
            <a href="#" className="block py-2 text-stone-900 border-b border-stone-100 uppercase text-xs tracking-widest font-bold">Fine Jewelry</a>
            <div className="pt-4 flex gap-4 text-stone-600">
               <User size={20} />
               <span className="text-sm">Account</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};