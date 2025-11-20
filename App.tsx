
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import SaudiInvest from './components/SaudiInvest';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-brand-yellow selection:text-black">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <BentoGrid />
        <SaudiInvest />
        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
      <GeminiChat />
    </div>
  );
};

export default App;
