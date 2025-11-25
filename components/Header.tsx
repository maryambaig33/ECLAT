import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Top utility bar */}
      <div className="bg-brand-black text-white text-[10px] py-1.5 text-center tracking-widest font-medium uppercase">
        Talk to an expert: 1-888-555-0123
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-black focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-start w-full lg:w-auto lg:mr-12">
            <a href="#" className="font-serif text-2xl md:text-3xl text-brand-black tracking-wide font-medium">
              ÉCLAT
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-10">
            <a href="#engagement" className="text-brand-black hover:text-gold-600 text-[11px] tracking-[0.2em] uppercase font-bold transition-colors">Engagement Rings</a>
            <a href="#wedding" className="text-brand-black hover:text-gold-600 text-[11px] tracking-[0.2em] uppercase font-bold transition-colors">Wedding Rings</a>
            <a href="#diamonds" className="text-brand-black hover:text-gold-600 text-[11px] tracking-[0.2em] uppercase font-bold transition-colors">Diamonds</a>
            <a href="#jewelry" className="text-brand-black hover:text-gold-600 text-[11px] tracking-[0.2em] uppercase font-bold transition-colors">Fine Jewelry</a>
            <a href="#education" className="text-brand-black hover:text-gold-600 text-[11px] tracking-[0.2em] uppercase font-bold transition-colors">Education</a>
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6">
             <div className="relative hidden xl:block mr-4">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-brand-light text-xs py-2 pl-4 pr-10 w-48 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-all"
                />
                <Search size={16} className="absolute right-3 top-2 text-brand-gray" />
             </div>
            <button className="text-brand-black hover:text-gold-600 transition-colors flex flex-col items-center gap-1 group">
              <User size={20} strokeWidth={1.5} />
              <span className="text-[9px] uppercase tracking-wider hidden xl:block group-hover:text-gold-600">Account</span>
            </button>
            <button className="text-brand-black hover:text-gold-600 transition-colors flex flex-col items-center gap-1 group">
              <Heart size={20} strokeWidth={1.5} />
              <span className="text-[9px] uppercase tracking-wider hidden xl:block group-hover:text-gold-600">Favorites</span>
            </button>
            <button className="text-brand-black hover:text-gold-600 transition-colors flex flex-col items-center gap-1 group relative">
              <div className="relative">
                 <ShoppingBag size={20} strokeWidth={1.5} />
                 <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">0</span>
              </div>
              <span className="text-[9px] uppercase tracking-wider hidden xl:block group-hover:text-gold-600">Bag</span>
            </button>
          </div>

          {/* Mobile Cart Icon */}
          <div className="flex items-center lg:hidden">
            <button className="text-brand-black p-2">
               <ShoppingBag size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl h-screen z-50">
          <div className="p-6 space-y-6">
            <a href="#" className="block text-brand-black uppercase text-sm tracking-widest font-bold">Engagement Rings</a>
            <a href="#" className="block text-brand-black uppercase text-sm tracking-widest font-bold">Wedding Rings</a>
            <a href="#" className="block text-brand-black uppercase text-sm tracking-widest font-bold">Diamonds</a>
            <a href="#" className="block text-brand-black uppercase text-sm tracking-widest font-bold">Fine Jewelry</a>
            <hr className="border-gray-100" />
             <div className="flex gap-4 text-brand-gray">
               <span className="text-sm">Log In / Sign Up</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};