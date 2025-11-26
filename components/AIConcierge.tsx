import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { getCoffeeRecommendation } from '../services/geminiService';

export const AIConcierge: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRecommendation('');
    
    const result = await getCoffeeRecommendation(input);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-24 px-4 bg-zinc-900 flex justify-center items-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        className="max-w-3xl w-full z-10 glass-panel p-8 md:p-12 rounded-3xl text-center shadow-2xl border border-white/5"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-indigo-300 mb-6 border border-white/5">
          <Sparkles size={12} />
          <span>Lumina Intelligence</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Digital Sommelier</h2>
        <p className="text-stone-400 mb-10 max-w-xl mx-auto">
          Tell us how you're feeling or what flavors you desire. Our AI will curate the perfect brew for this exact moment.
        </p>

        <div className="relative max-w-lg mx-auto mb-8">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleConsult()}
            placeholder="e.g., I need energy but I have a sweet tooth..."
            className="w-full bg-black/50 border border-stone-700 rounded-2xl py-4 pl-6 pr-14 text-white placeholder-stone-600 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all"
          />
          <button 
            onClick={handleConsult}
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 aspect-square bg-white text-black rounded-xl flex items-center justify-center hover:scale-95 active:scale-90 transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : <ArrowRight size={20} />}
          </button>
        </div>

        {recommendation && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10"
          >
            <p className="text-lg md:text-xl font-light italic text-stone-200">"{recommendation}"</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};