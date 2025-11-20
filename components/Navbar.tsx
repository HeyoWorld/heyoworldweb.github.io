
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.SERVICES, label: 'Global Services' },
    { id: SectionId.SAUDI_INVEST, label: '🇸🇦 Saudi Invest' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-sm border border-white/40 rounded-full mx-4' 
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection(SectionId.HOME)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-purple blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-black text-white p-2 rounded-xl mr-3 group-hover:-rotate-6 transition-transform duration-300 shadow-lg">
                <Globe size={20} className="text-brand-yellow" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl tracking-tight text-gray-900">
                HEYO<span className="text-brand-purple">WORLD</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-brand-purple transition-colors">Global Studio</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-100/50 p-1 rounded-full backdrop-blur-sm border border-white/20">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                  activeSection === link.id
                    ? link.id === SectionId.SAUDI_INVEST 
                      ? 'bg-gradient-to-r from-brand-saudi to-green-800 text-white shadow-lg shadow-green-900/20' 
                      : 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black hover:bg-white/80'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
             <button 
               onClick={() => scrollToSection(SectionId.CONTACT)}
               className="group flex items-center gap-2 bg-brand-yellow hover:bg-yellow-400 text-black px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-yellow-400/20"
             >
               <span>Get Started</span>
               <Sparkles size={16} className="group-hover:rotate-45 transition-transform" />
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 p-2 bg-white/50 rounded-lg backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl animate-in slide-in-from-top-5 overflow-hidden z-50">
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                  activeSection === link.id
                    ? 'bg-gray-100 text-brand-black scale-[1.02]'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
