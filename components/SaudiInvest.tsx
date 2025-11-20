import React, { useState } from 'react';
import { SectionId, RealEstateProject } from '../types';
import { Building2, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

const SaudiInvest: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'vision'>('residential');

  const projects: RealEstateProject[] = [
    {
      id: '1',
      title: 'Riyadh Gilded Heights',
      location: 'King Abdullah District, Riyadh',
      roi: '12-15%',
      price: 'Start from $450k',
      image: 'https://picsum.photos/seed/riyadh1/600/400',
      tags: ['Luxury', 'Ready 2026']
    },
    {
      id: '2',
      title: 'Jeddah Seafront Villa',
      location: 'North Corniche, Jeddah',
      roi: '8-10%',
      price: 'Start from $800k',
      image: 'https://picsum.photos/seed/jeddah1/600/400',
      tags: ['Tourism', 'Sea View']
    },
    {
      id: '3',
      title: 'Neom The Line Unit',
      location: 'Neom, Tabuk',
      roi: '18% Projected',
      price: 'Inquire',
      image: 'https://picsum.photos/seed/neom1/600/400',
      tags: ['Future City', 'High Growth']
    }
  ];

  return (
    <section id={SectionId.SAUDI_INVEST} className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Map Pattern (Abstract) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-brand-gold mb-4">
              <MapPin size={18} />
              <span className="uppercase tracking-widest text-sm font-bold">New Frontier</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl leading-tight">
              Unlock the Kingdom.<br />
              <span className="text-brand-gold">Invest in Saudi Arabia.</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg">
              Heyo World is your exclusive gateway to high-yield real estate opportunities in the fastest growing G20 economy. 
              Direct access to top-tier developers in Riyadh and Neom.
            </p>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-green-400" />
                  <span className="font-bold">Market Insight</span>
                </div>
                <p className="text-sm text-gray-300">Riyadh real estate prices have surged 30% in the last 24 months due to HQ relocation mandates.</p>
             </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <Building2 className="text-brand-gold mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Vision 2030 Aligned</h3>
                <p className="text-gray-400 text-sm">Properties selected for maximum appreciation based on government infrastructure spending.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <ShieldCheck className="text-brand-gold mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Secure Ownership</h3>
                <p className="text-gray-400 text-sm">Full legal support for international investors to obtain Premium Residency through investment.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <TrendingUp className="text-brand-gold mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">High Rental Yields</h3>
                <p className="text-gray-400 text-sm">Targeting 8-12% annual yields in key districts with high expatriate demand.</p>
            </div>
        </div>

        {/* Interactive Project Gallery */}
        <div>
            <div className="flex space-x-6 mb-8 border-b border-gray-700 pb-2 overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('residential')}
                  className={`pb-2 font-medium transition-colors whitespace-nowrap ${activeTab === 'residential' ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-gray-400 hover:text-white'}`}
                >
                    Residential Luxury
                </button>
                <button 
                  onClick={() => setActiveTab('commercial')}
                  className={`pb-2 font-medium transition-colors whitespace-nowrap ${activeTab === 'commercial' ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-gray-400 hover:text-white'}`}
                >
                    Commercial Offices
                </button>
                <button 
                  onClick={() => setActiveTab('vision')}
                  className={`pb-2 font-medium transition-colors whitespace-nowrap ${activeTab === 'vision' ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-gray-400 hover:text-white'}`}
                >
                    Mega Projects (Giga)
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                            <div className="flex gap-2 mb-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-brand-gold text-black px-2 py-1 rounded font-bold uppercase">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                            <p className="text-gray-300 text-sm mb-3">{project.location}</p>
                            <div className="flex justify-between items-center border-t border-white/20 pt-3">
                                <div>
                                    <p className="text-xs text-gray-400">Est. ROI</p>
                                    <p className="text-brand-gold font-bold">{project.roi}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">Investment</p>
                                    <p className="font-bold">{project.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SaudiInvest;