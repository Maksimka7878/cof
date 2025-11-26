import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOCATIONS } from '../constants';
import { MapPin, ArrowUpRight } from 'lucide-react';

export const Locations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);

  return (
    <section className="relative h-[800px] w-full bg-black overflow-hidden flex items-center">
      
      {/* Atmospheric Background Transition */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeLocation.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={activeLocation.image} 
            alt={activeLocation.city} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between h-full">
        
        {/* List */}
        <div className="w-full md:w-1/2 pt-20 md:pt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-amber-500 tracking-widest uppercase mb-8"
          >
            Sanctuaries
          </motion.h2>
          
          <div className="space-y-2">
            {LOCATIONS.map((loc) => (
              <motion.div
                key={loc.id}
                onMouseEnter={() => setActiveLocation(loc)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border-l-2 ${
                  activeLocation.id === loc.id 
                    ? 'bg-white/10 border-amber-500 pl-8' 
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:pl-8'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-3xl md:text-5xl font-bold transition-colors ${
                       activeLocation.id === loc.id ? 'text-white' : 'text-stone-500 group-hover:text-stone-300'
                    }`}>
                      {loc.city}
                    </h3>
                    <AnimatePresence>
                      {activeLocation.id === loc.id && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-stone-400 mt-2 overflow-hidden"
                        >
                          {loc.address}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {activeLocation.id === loc.id && (
                    <motion.div
                      layoutId="arrow"
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
                    >
                      <ArrowUpRight size={24} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Details Card */}
        <motion.div 
          className="hidden md:flex flex-col items-end text-right"
          key={`details-${activeLocation.id}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-panel p-8 rounded-3xl w-80">
            <div className="flex items-center justify-end gap-2 mb-4 text-amber-500">
               <MapPin size={16} />
               <span className="text-xs font-mono">{activeLocation.coordinates}</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed mb-6">
              Designed as a refuge from the city noise. Featuring minimal acoustics, Japanese oak furniture, and our full reserve menu.
            </p>
            <button className="text-white text-sm border-b border-white/30 pb-1 hover:border-white transition-colors">
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};