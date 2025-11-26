import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.8, 1], ["0%", "-10%"]);

  return (
    <section className="py-24 overflow-hidden bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We don't just brew coffee.<br/>
            <span className="text-stone-500">We engineer moments.</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-6">
            Founded in the pursuit of perfection, Lumina Brew combines artisanal tradition with modern precision. Every bean is ethically sourced, every roast is data-driven, and every pour is an act of art.
          </p>
          <a href="#" className="text-white border-b border-white pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors">
            Read our full manifesto
          </a>
        </motion.div>

        <div className="relative h-[600px] w-full">
           <motion.div 
             style={{ x }}
             className="absolute right-0 top-0 w-3/4 h-3/4 overflow-hidden rounded-3xl z-10"
           >
             <img 
               src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" 
               alt="Barista" 
               className="w-full h-full object-cover"
             />
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="absolute left-0 bottom-0 w-2/3 h-2/3 overflow-hidden rounded-3xl z-20 shadow-2xl border-4 border-black"
           >
             <img 
               src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
               alt="Coffee Shop Interior" 
               className="w-full h-full object-cover"
             />
           </motion.div>
        </div>

      </div>
    </section>
  );
};