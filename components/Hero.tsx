import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse movement effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40; // range -20 to 20
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-black pointer-events-none" />
      
      {/* Floating Beans (Background Layer) */}
      <motion.div 
        style={{ y: y2, x: springX }} 
        className="absolute top-1/4 left-1/4 w-24 h-24 opacity-20 blur-sm pointer-events-none"
      >
         <img src="https://images.unsplash.com/photo-1611162458324-a27eb7f95d66?auto=format&fit=crop&q=80&w=200" alt="bean" className="rounded-full rotate-45" />
      </motion.div>
      <motion.div 
        style={{ y: y1, x: springX }} 
        className="absolute bottom-1/3 right-1/4 w-32 h-32 opacity-10 blur-md pointer-events-none"
      >
         <img src="https://images.unsplash.com/photo-1550950158-d0d960d9f9dd?auto=format&fit=crop&q=80&w=200" alt="bean" className="rounded-full -rotate-12" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-stone-400 mb-6"
        >
          Lumina Brew
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-stone-300 font-light tracking-wide mb-12"
        >
          Coffee, reimagined.
        </motion.p>

        {/* Hero Image Container with Parallax Tilt */}
        <motion.div
          style={{ 
            rotateX: useTransform(springY, [-20, 20], [5, -5]),
            rotateY: useTransform(springX, [-20, 20], [-5, 5]),
            opacity 
          }}
          className="relative w-64 h-64 md:w-96 md:h-96 mx-auto perspective-1000"
        >
          <div className="absolute inset-0 bg-stone-800 rounded-full blur-[100px] opacity-30 animate-pulse" />
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" 
            alt="Hero Coffee"
            className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-3xl"
            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-500 text-sm tracking-widest uppercase"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};