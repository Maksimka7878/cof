import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-5xl px-6 h-14 rounded-full flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border border-white/10 shadow-lg w-[90%] md:w-full' 
          : 'bg-transparent w-full'
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <span className="font-semibold tracking-tight text-white">Lumina</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#" className="hover:text-white transition-colors">Origins</a>
          <a href="#" className="hover:text-white transition-colors">Menu</a>
          <a href="#" className="hover:text-white transition-colors">Craft</a>
          <a href="#" className="hover:text-white transition-colors">Locations</a>
        </nav>

        {/* Action */}
        <button className="relative group p-2 text-white hover:bg-white/10 rounded-full transition-colors">
          <ShoppingBag size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full" />
        </button>
      </div>
    </motion.header>
  );
};