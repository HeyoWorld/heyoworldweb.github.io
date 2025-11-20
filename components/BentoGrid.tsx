import React from 'react';
import { SectionId } from '../types';
import { Rocket, Palette, Code, Globe2, TrendingUp, Zap } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const items = [
    {
      title: "Startup Incubation",
      desc: "Turning napkin sketches into scalable unicorns.",
      icon: <Rocket className="text-white" size={24} />,
      bg: "bg-brand-purple",
      col: "md:col-span-2",
      textColor: "text-white"
    },
    {
      title: "UI/UX Design",
      desc: "Pixel perfect.",
      icon: <Palette className="text-brand-black" size={24} />,
      bg: "bg-brand-yellow",
      col: "md:col-span-1",
      textColor: "text-brand-black"
    },
    {
      title: "Full-Stack Dev",
      desc: "React, Node, AI integrations.",
      icon: <Code className="text-brand-purple" size={24} />,
      bg: "bg-white border border-gray-200",
      col: "md:col-span-1",
      textColor: "text-brand-black"
    },
    {
      title: "Global Expansion",
      desc: "Taking local brands to international markets.",
      icon: <Globe2 className="text-white" size={24} />,
      bg: "bg-brand-black",
      col: "md:col-span-2",
      textColor: "text-white"
    },
  ];

  return (
    <section id={SectionId.SERVICES} className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">The Playground.</h2>
        <p className="text-xl text-gray-600">Where we build, break, and rebuild better things.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`${item.col} ${item.bg} rounded-3xl p-8 relative group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
                {item.icon}
              </div>
              <div>
                <h3 className={`font-display font-bold text-2xl mb-2 ${item.textColor}`}>{item.title}</h3>
                <p className={`font-light ${item.textColor} opacity-80`}>{item.desc}</p>
              </div>
            </div>
            
            {/* Hover decorative effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
          </div>
        ))}

        {/* Interactive Stats Box */}
        <div className="md:col-span-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="p-3 bg-white/20 rounded-xl">
              <Zap size={32} />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl">Powering the Next Wave</h3>
              <p className="text-blue-100">We don't just code; we create impact.</p>
            </div>
          </div>
          <div className="flex gap-8 text-center">
             <div>
               <div className="font-display font-bold text-4xl">50+</div>
               <div className="text-sm text-blue-100 uppercase tracking-wider">Projects</div>
             </div>
             <div>
               <div className="font-display font-bold text-4xl">12</div>
               <div className="text-sm text-blue-100 uppercase tracking-wider">Countries</div>
             </div>
             <div>
               <div className="font-display font-bold text-4xl">$10M+</div>
               <div className="text-sm text-blue-100 uppercase tracking-wider">Valuation</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;