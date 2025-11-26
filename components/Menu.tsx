import React from 'react';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { Plus } from 'lucide-react';

export const Menu: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Collection</h2>
          <p className="text-stone-400">Curated for the connoisseur.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-panel rounded-3xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-between p-6 transition-all duration-500 group-hover:border-stone-500/30">
                {/* Image Area */}
                <div className="relative w-full h-48 mb-4">
                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                    layoutId={`image-${item.id}`}
                  />
                </div>

                {/* Text Area */}
                <div className="w-full text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-xs text-stone-400 mb-4 line-clamp-2">{item.description}</p>
                  <span className="text-lg font-medium text-amber-500">${item.price.toFixed(2)}</span>
                </div>

                {/* Action Button - appears on hover */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Plus size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};