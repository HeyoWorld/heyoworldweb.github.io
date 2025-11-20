
import React, { useEffect, useState } from 'react';
import { ArrowRight, MousePointer2, Plane, Globe2 } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-[#FDFDFD]">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-left space-y-8 relative">
           <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Global Mobility & Investment</span>
           </div>

           <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl tracking-tight leading-[0.9]">
             UNLOCK <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-brand-purple to-brand-saudi animate-gradient-x">
               YOUR GLOBAL
             </span> <br />
             <span className="text-brand-black flex items-center gap-4">
               DREAMS.
               <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Mascot" className="w-16 h-16 md:w-24 md:h-24 inline-block animate-bounce" />
             </span>
           </h1>

           <p className="text-xl md:text-2xl text-gray-500 max-w-lg font-light leading-relaxed">
             Your one-stop studio for <span className="font-bold text-gray-900 bg-blue-100 px-1">Visas</span>, <span className="font-bold text-gray-900 bg-purple-100 px-1">Study Abroad</span>, and <span className="font-bold text-gray-900 bg-green-100 px-1">Immigration</span>.
             We bridge the gap between your current location and your future destination.
           </p>

           <div className="flex flex-wrap gap-4 pt-4">
             <button 
               onClick={() => scrollToSection(SectionId.CONTACT)}
               className="group relative px-8 py-4 bg-black text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <span className="relative flex items-center">
                 Start Your Journey
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </span>
             </button>
             
             <button 
               onClick={() => scrollToSection(SectionId.SERVICES)}
               className="px-8 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2"
             >
               <Globe2 size={20} className="text-brand-purple" />
               Our Services
             </button>
           </div>
        </div>

        {/* Right Column: Interactive 3D Composition */}
        <div className="relative hidden lg:block h-[600px]">
           {/* Decorative Circle */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl animate-pulse"></div>

           {/* Floating Cards Container */}
           <div 
             className="relative w-full h-full transition-transform duration-100 ease-out"
             style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
           >
              {/* Card 1: Passport/Visa */}
              <div 
                className="absolute top-20 right-10 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 w-64 rotate-6 animate-float"
                style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) rotate(6deg)` }}
              >
                <div className="h-32 bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full" alt="Travel" />
                   <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded-md text-xs font-bold">Visa Approved ✅</div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">Destination</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Anywhere</span>
                </div>
              </div>

              {/* Card 2: University */}
              <div 
                className="absolute bottom-32 left-10 bg-brand-black text-white p-6 rounded-3xl shadow-2xl w-60 -rotate-6 z-20 animate-float"
                style={{ 
                  animationDelay: '1.5s',
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(-6deg)` 
                }}
              >
                 <div className="flex justify-between items-start mb-4">
                   <div className="p-2 bg-gray-800 rounded-lg">
                      <span className="text-2xl">🎓</span>
                   </div>
                   <span className="text-xs text-gray-400 uppercase font-bold">Acceptance</span>
                 </div>
                 <div className="text-3xl font-display font-bold mb-1">98%</div>
                 <div className="text-sm text-gray-400">Success Rate</div>
                 <div className="mt-4 flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-black"></div>
                    <div className="h-8 w-8 rounded-full bg-red-500 border-2 border-black -ml-4"></div>
                    <div className="h-8 w-8 rounded-full bg-yellow-500 border-2 border-black -ml-4"></div>
                 </div>
              </div>

              {/* Card 3: Cursor */}
              <div 
                className="absolute top-1/2 left-1/2 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 z-30"
                style={{ transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)` }}
              >
                <div className="bg-brand-purple text-white p-2 rounded-lg">
                  <MousePointer2 size={20} />
                </div>
                <div className="font-bold text-sm">
                  <p>Applying for</p>
                  <p className="text-xs text-gray-500">Global Citizenship</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
