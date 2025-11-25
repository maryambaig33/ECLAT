import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
             <h4 className="font-serif text-2xl tracking-wide">ÉCLAT</h4>
             <p className="text-stone-400 text-sm leading-relaxed">
               Crafting timeless symbols of love with ethically sourced diamonds and unparalleled craftsmanship since 1985.
             </p>
             <div className="flex space-x-4 pt-2">
               <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-stone-400 hover:text-white transition-colors"><Twitter size={20} /></a>
             </div>
          </div>

          <div>
            <h5 className="uppercase text-xs font-bold tracking-widest mb-6 text-gold-400">Customer Care</h5>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase text-xs font-bold tracking-widest mb-6 text-gold-400">Education</h5>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">The 4Cs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metal Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ring Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diamond Shapes</a></li>
            </ul>
          </div>

          <div>
             <h5 className="uppercase text-xs font-bold tracking-widest mb-6 text-gold-400">Newsletter</h5>
             <p className="text-stone-400 text-sm mb-4">Subscribe for exclusive offers and new arrivals.</p>
             <div className="flex">
               <input type="email" placeholder="Your email address" className="bg-stone-800 border-none text-white text-sm p-3 w-full focus:ring-1 focus:ring-gold-500 placeholder-stone-500" />
               <button className="bg-gold-600 px-4 hover:bg-gold-500 transition-colors">
                 <Mail size={16} />
               </button>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; 2024 Éclat Joaillerie. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};