import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Explorer',
    price: 24,
    desc: 'For the curious palate.',
    features: ['1 bag / month', 'Curated origins', 'Brew guide included']
  },
  {
    name: 'Connoisseur',
    price: 42,
    desc: 'The standard for daily rituals.',
    features: ['2 bags / month', 'First access to microlots', 'Free shipping', 'Virtual tastings'],
    highlight: true
  },
  {
    name: 'Master',
    price: 85,
    desc: 'Unlimited discovery.',
    features: ['4 bags / month', 'Rare Geisha varieties', 'Concierge support', 'Exclusive merch', 'Workshop invites']
  }
];

export const Subscription: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Curator's Club</h2>
          <p className="text-stone-400 text-lg">Freshly roasted beans, delivered to your doorstep.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl flex flex-col ${
                tier.highlight 
                  ? 'bg-white/10 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]' 
                  : 'bg-zinc-900/50 border-white/5 hover:border-white/20'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-stone-400 text-sm mb-8">{tier.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-stone-500"> / mo</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-stone-300">
                    <Check size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-medium transition-all ${
                tier.highlight 
                  ? 'bg-white text-black hover:bg-stone-200' 
                  : 'bg-white/5 text-white hover:bg-white/20'
              }`}>
                Join Club
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};