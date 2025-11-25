import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-border">
      {/* Top utility bar */}
      <div className="bg-brand-black text-white text-[10px] py-2 text-center tracking-[0.1em] font-medium uppercase">
        <span className="mx-2">Free Overnight Shipping</span>
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="mx-2 hidden sm:inline">30-Day Returns</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu & Search */}
          <div className="flex items-center lg:hidden gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-black">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Search size={20} className="text-brand-black" />
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a href="#" className="font-serif text-3xl tracking-wide font-medium text-brand-black">
              ÉCLAT
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
            {['Engagement Rings', 'Wedding Rings', 'Diamonds', 'Fine Jewelry', 'Education'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-brand-black hover:text-gold-600 text-[11px] tracking-[0.15em] uppercase font-bold transition-colors border-b-2 border-transparent hover:border-gold-600 pb-1"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
             <div className="flex items-center border-b border-brand-border pb-1">
                <Search size={16} className="text-brand-gray mr-2" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent text-xs focus:outline-none w-24 xl:w-32 placeholder-brand-gray"
                />
             </div>
             <div className="flex items-center space-x-6">
                <a href="#" className="text-brand-black hover:text-gold-600 transition-colors">
                  <User size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-brand-black hover:text-gold-600 transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-brand-black hover:text-gold-600 transition-colors relative">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                </a>
             </div>
          </div>

          {/* Mobile Cart */}
          <div className="flex items-center lg:hidden">
            <button className="text-brand-black">
               <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto z-50 p-6">
          <nav className="flex flex-col space-y-6">
            {['Engagement Rings', 'Wedding Rings', 'Diamonds', 'Fine Jewelry', 'Education'].map((item) => (
              <a key={item} href="#" className="text-brand-black uppercase text-sm tracking-widest font-bold border-b border-gray-100 pb-2">
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <span className="text-sm font-medium">Log In</span>
              <span className="text-sm font-medium">Create Account</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};