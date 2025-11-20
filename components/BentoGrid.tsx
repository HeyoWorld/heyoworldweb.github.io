
import React from 'react';
import { SectionId } from '../types';
import { GraduationCap, Plane, Globe, BookOpen, FileCheck, Landmark, ArrowUpRight, Map } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const services = [
    {
      title: "Study Abroad",
      subtitle: "Global Education",
      desc: "Application guidance for elite universities in UK, US, Canada, Australia, New Zealand & Asia.",
      icon: <GraduationCap className="text-white" size={28} />,
      bg: "bg-brand-purple",
      col: "md:col-span-2",
      textColor: "text-white",
      borderColor: "border-indigo-500",
      hoverEffect: "hover:shadow-[0_0_30px_rgba(123,97,255,0.4)]",
      tags: ["🇬🇧 UK", "🇺🇸 US", "🇨🇦 CA", "🇦🇺 AU"]
    },
    {
      title: "Visa Services",
      subtitle: "Smooth Travel",
      desc: "Professional handling of Tourist, Business, and Student visas.",
      icon: <FileCheck className="text-black" size={28} />,
      bg: "bg-brand-yellow",
      col: "md:col-span-1",
      textColor: "text-black",
      borderColor: "border-yellow-500",
      hoverEffect: "hover:shadow-[0_0_30px_rgba(255,214,10,0.4)]",
      tags: ["Schengen", "US", "Canada"]
    },
    {
      title: "Immigration Planning",
      subtitle: "New Beginnings",
      desc: "Tailored immigration solutions including Citizenship by Investment (CBI) & Golden Visas.",
      icon: <Globe className="text-brand-purple" size={28} />,
      bg: "bg-white",
      col: "md:col-span-1",
      textColor: "text-black",
      borderColor: "border-gray-200",
      hoverEffect: "hover:shadow-xl",
      tags: ["CBI", "Golden Visa"]
    },
    {
      title: "Global Asset Allocation",
      subtitle: "Wealth Management",
      desc: "Diversify your portfolio with international real estate and citizenship programs to secure your future.",
      icon: <Landmark className="text-white" size={28} />,
      bg: "bg-black",
      col: "md:col-span-2",
      textColor: "text-white",
      borderColor: "border-gray-800",
      hoverEffect: "hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]",
      tags: ["Tax Optimization", "Security"]
    },
  ];

  return (
    <section id={SectionId.SERVICES} className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h2 className="font-display font-bold text-5xl md:text-6xl mb-4 text-gray-900">
               Core Services.
             </h2>
             <p className="text-xl text-gray-500 max-w-2xl">
               From getting your first student visa to securing a second citizenship. We are your global mobility partners.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div 
              key={index}
              className={`${item.col} ${item.bg} ${item.textColor} ${item.hoverEffect} rounded-[2rem] p-8 md:p-10 relative group overflow-hidden transition-all duration-500 border ${item.borderColor} cursor-pointer hover:-translate-y-2`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm ${item.bg === 'bg-white' ? 'bg-gray-100' : 'bg-white/20'}`}>
                    {item.icon}
                  </div>
                  <ArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.bg === 'bg-brand-yellow' || item.bg === 'bg-white' ? 'text-black' : 'text-white'}`} />
                </div>
                
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 block opacity-70`}>{item.subtitle}</span>
                  <h3 className="font-display font-bold text-3xl mb-4 leading-tight">{item.title}</h3>
                  <p className={`text-lg font-light opacity-80 leading-relaxed mb-6`}>{item.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                        item.bg === 'bg-white' || item.bg === 'bg-brand-yellow'
                          ? 'border-black/10 bg-black/5' 
                          : 'border-white/20 bg-white/10'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Interactive Info Box */}
          <div className="md:col-span-3 bg-white rounded-[2rem] p-12 border border-gray-200 shadow-sm relative overflow-hidden mt-6">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple via-blue-500 to-brand-yellow"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
                <div className="space-y-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600">
                    <FileCheck size={24} />
                  </div>
                  <h4 className="font-bold text-xl">Expert Guidance</h4>
                  <p className="text-gray-500">Our team navigates complex visa regulations so you don't have to.</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="font-bold text-xl">Top-Tier Education</h4>
                  <p className="text-gray-500">Partnerships with leading institutions across UK, US, and Australia.</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-purple">
                    <Map size={24} />
                  </div>
                  <h4 className="font-bold text-xl">Global Reach</h4>
                  <p className="text-gray-500">From Cambridge to California, we have on-the-ground expertise.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
