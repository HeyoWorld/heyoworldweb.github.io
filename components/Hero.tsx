import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-brand-yellow/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-600">Now partnering with Saudi Vision 2030</span>
        </div>

        <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-6">
          SAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-600">HEYO</span> <br />
          TO THE <span className="relative inline-block">
            FUTURE
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light">
          We are a digital startup studio crafting interactive experiences and bridging global capital with next-gen opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection(SectionId.SAUDI_INVEST)}
            className="group px-8 py-4 bg-brand-black text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center"
          >
            Explore Investments
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button 
            onClick={() => scrollToSection(SectionId.SERVICES)}
            className="group px-8 py-4 bg-white text-brand-black border border-gray-200 rounded-full font-bold text-lg transition-all hover:bg-gray-50 hover:border-gray-300 flex items-center"
          >
            See Our Studio
            <Sparkles className="ml-2 text-brand-purple group-hover:rotate-12 transition-transform" size={20} />
          </button>
        </div>
      </div>
      
      {/* Floating Elements Decor */}
      <div className="absolute bottom-10 left-10 hidden md:block animate-float">
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 -rotate-6">
          <p className="font-bold text-2xl">🚀 200%</p>
          <p className="text-xs text-gray-500">Growth YoY</p>
        </div>
      </div>
      
       <div className="absolute top-1/3 right-10 hidden md:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-brand-saudi/10 backdrop-blur-md p-4 rounded-2xl border border-brand-saudi/20 rotate-6">
          <p className="font-bold text-xl text-brand-saudi">🇸🇦 Neom Ready</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;