import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: 'Start' },
    { id: SectionId.SERVICES, label: 'Playground' },
    { id: SectionId.SAUDI_INVEST, label: '🇸🇦 Saudi Invest' },
    { id: SectionId.CONTACT, label: 'Connect' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg rounded-full border border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection(SectionId.HOME)}
          >
            <div className="bg-brand-black text-white p-2 rounded-lg mr-2 group-hover:rotate-12 transition-transform duration-300">
              <Globe size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">
              HEYO<span className="text-brand-purple">WORLD</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? link.id === SectionId.SAUDI_INVEST 
                      ? 'bg-brand-saudi text-white shadow-md' 
                      : 'bg-brand-black text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  activeSection === link.id
                    ? 'bg-gray-100 text-brand-black'
                    : 'text-gray-600'
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