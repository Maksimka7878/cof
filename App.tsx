import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Origins } from './components/Origins';
import { Subscription } from './components/Subscription';
import { Builder } from './components/Builder';
import { AIConcierge } from './components/AIConcierge';
import { Locations } from './components/Locations';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-amber-500/30">
      <Navigation />
      
      <Hero />
      <Origins />
      <Menu />
      <Builder />
      <Subscription />
      <AIConcierge />
      <Locations />
      <About />
      <Footer />
      
    </main>
  );
};

export default App;