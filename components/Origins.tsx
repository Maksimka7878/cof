import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

export const Origins: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-black">
      {PROCESS_STEPS.map((step, index) => {
        // Calculate dynamic opacity and scale for parallax effect
        // Using raw index to determine scroll ranges
        const start = index / PROCESS_STEPS.length;
        const end = (index + 1) / PROCESS_STEPS.length;
        
        return (
          <div key={step.id} className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
            {/* Background Image with Darkening Overlay */}
            <motion.div 
              className="absolute inset-0 z-0"
              style={{
                 opacity: useTransform(scrollYProgress, [start, end], [1, 0.2]),
                 scale: useTransform(scrollYProgress, [start, end], [1.1, 1])
              }}
            >
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
            </motion.div>

            {/* Content Card */}
            <div className="relative z-10 max-w-4xl px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="md:w-1/2"
               >
                 <span className="text-amber-500 font-mono text-sm tracking-widest mb-2 block">PHASE {step.id}</span>
                 <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">{step.title}</h2>
                 <p className="text-xl text-stone-300 font-light leading-relaxed">{step.description}</p>
               </motion.div>
               
               {/* Decorative Element */}
               <motion.div 
                 className="md:w-1/3 hidden md:block"
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
               >
                 <div className="w-full aspect-square border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md bg-white/5">
                    <div className="w-2/3 h-2/3 border border-white/10 rounded-full flex items-center justify-center">
                        <span className="text-4xl">{index === 0 ? '🌱' : index === 1 ? '🔥' : '💧'}</span>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
};