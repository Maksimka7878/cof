import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INGREDIENTS } from '../constants';
import { Ingredient } from '../types';
import { RefreshCcw } from 'lucide-react';

export const Builder: React.FC = () => {
  const [layers, setLayers] = useState<Ingredient[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleAddLayer = (ingredient: Ingredient) => {
    if (layers.length >= 6) return;
    setLayers(prev => [...prev, ingredient]);
  };

  const resetBuilder = () => setLayers([]);

  return (
    <section className="min-h-screen py-24 bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/40 via-black to-black pointer-events-none" />

      <div className="z-10 w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Controls / Ingredients */}
        <div className="order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-2">Craft Your Ritual</h2>
            <p className="text-stone-400 mb-8">Drag ingredients to build your perfect cup.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {INGREDIENTS.map((ing) => (
                <motion.div
                  key={ing.id}
                  layoutId={ing.id}
                  drag
                  dragSnapToOrigin
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(event, info) => {
                    setIsDragging(false);
                    // Simple hit detection assumption for demo smoothness
                    if (info.point.x > window.innerWidth / 2 || window.innerWidth < 1024) {
                       handleAddLayer(ing);
                    }
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95, cursor: "grabbing" }}
                  className="glass-panel p-4 rounded-xl flex items-center gap-3 cursor-grab active:cursor-grabbing select-none"
                >
                  <span className="text-2xl">{ing.icon}</span>
                  <span className="font-medium text-sm">{ing.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
               <button 
                onClick={resetBuilder}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-stone-700 hover:bg-stone-800 transition-colors text-sm"
               >
                 <RefreshCcw size={16} /> Reset
               </button>
               <button className="flex-1 bg-white text-black rounded-full font-semibold hover:bg-stone-200 transition-colors">
                 Order Custom Brew
               </button>
            </div>
          </motion.div>
        </div>

        {/* The Cup Visualization */}
        <div className="order-1 lg:order-2 flex justify-center items-center h-[500px] relative">
          {/* Target Zone Indicator */}
          <AnimatePresence>
            {isDragging && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 border-2 border-dashed border-stone-600 rounded-3xl z-0"
              />
            )}
          </AnimatePresence>

          {/* Cup Container */}
          <div className="relative w-64 h-80 bg-stone-900/50 backdrop-blur-sm rounded-b-[4rem] rounded-t-lg border-l border-r border-b border-white/10 overflow-hidden shadow-2xl z-10">
            <div className="absolute inset-0 flex flex-col-reverse">
              <AnimatePresence>
                {layers.map((layer, index) => (
                  <motion.div
                    key={`${layer.id}-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${100 / 6}%`, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2 }}
                    style={{ backgroundColor: layer.color }}
                    className="w-full flex items-center justify-center relative overflow-hidden"
                  >
                     {/* Liquid effect */}
                     <div className="absolute inset-0 bg-white/5 animate-pulse" />
                     <span className="text-2xl drop-shadow-md z-10">{layer.icon}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* Glass Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
          
          {/* Steam Effect */}
          {layers.length > 0 && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.4 }}
               className="absolute -top-20 left-1/2 -translate-x-1/2 w-20 h-40 blur-xl bg-white/20 rounded-full"
             />
          )}
        </div>
      </div>
    </section>
  );
};