import React, { useState } from 'react';
import { SectionId, RealEstateProject } from '../types';
import { Building2, TrendingUp, ShieldCheck, MapPin, ChevronRight, Crown } from 'lucide-react';

const SaudiInvest: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial' | 'vision'>('residential');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: RealEstateProject[] = [
    {
      id: '1',
      title: 'The Mukaab View',
      location: 'New Murabba, Riyadh',
      roi: '15% Projected',
      price: '$550k Start',
      image: 'https://images.unsplash.com/photo-1512958789358-4dac0f0408c8?q=80&w=2070&auto=format&fit=crop',
      tags: ['Vision 2030', 'Premium']
    },
    {
      id: '2',
      title: 'Jeddah Central Loft',
      location: 'Waterfront, Jeddah',
      roi: '9-11% Yield',
      price: '$420k Start',
      image: 'https://images.unsplash.com/photo-1580203638180-3a4391611796?q=80&w=2069&auto=format&fit=crop',
      tags: ['Coastal', 'Tourism']
    },
    {
      id: '3',
      title: 'Neom Oxagon Hub',
      location: 'Oxagon, Neom',
      roi: 'High Growth',
      price: 'Inquire Only',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      tags: ['Future City', 'Tech']
    }
  ];

  return (
    <section id={SectionId.SAUDI_INVEST} className="py-32 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Decorative Golden Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-saudi/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 text-brand-gold mb-6 bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              <Crown size={16} />
              <span className="uppercase tracking-widest text-xs font-bold">Heyo World Exclusive</span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] mb-6">
              Invest in the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">Kingdom's Future</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Saudi Arabia is the world's fastest-growing construction market. 
              We provide end-to-end investment management for international investors targeting Riyadh and Vision 2030 Giga-projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">12%</div>
                <div className="text-sm text-gray-400">Avg. Rental Yield in Riyadh Premium Districts</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">$1.1T</div>
                <div className="text-sm text-gray-400">Planned Real Estate & Infrastructure Spend</div>
             </div>
          </div>
        </div>

        {/* Content Tabs & Gallery */}
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Features */}
            <div className="lg:w-1/3 space-y-6">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-brand-saudi/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-saudi text-brand-saudi group-hover:text-white transition-colors">
                        <Building2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Direct Developer Access</h3>
                    <p className="text-gray-400 text-sm">Skip the middlemen. We partner directly with ROSHN, Red Sea Global, and private family offices.</p>
                </div>

                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-gold text-brand-gold group-hover:text-black transition-colors">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Golden Visa Support</h3>
                    <p className="text-gray-400 text-sm">Comprehensive legal assistance for obtaining Premium Residency through property investment.</p>
                </div>
            </div>

            {/* Right: Projects */}
            <div className="lg:w-2/3">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="font-bold text-2xl">Featured Opportunities</h3>
                   <button className="text-brand-gold text-sm font-bold flex items-center hover:underline">
                      View All Listings <ChevronRight size={16} />
                   </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="relative group rounded-2xl overflow-hidden h-[400px] cursor-pointer border border-white/10"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                            
                            <div className="absolute top-4 left-4 flex gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold bg-brand-gold text-black px-2 py-1 rounded-md uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className={`absolute bottom-0 left-0 w-full p-6 transition-all duration-300 ${hoveredProject === project.id ? 'translate-y-0' : 'translate-y-4'}`}>
                                <p className="text-brand-gold text-xs font-bold uppercase mb-1 flex items-center gap-1">
                                    <MapPin size={10} /> {project.location}
                                </p>
                                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                
                                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${hoveredProject === project.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex justify-between text-sm border-t border-white/20 pt-3">
                                        <span className="text-gray-400">Proj. ROI</span>
                                        <span className="text-green-400 font-bold">{project.roi}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Entry</span>
                                        <span className="font-bold">{project.price}</span>
                                    </div>
                                    <button className="w-full bg-white text-black font-bold py-2 rounded-lg text-sm hover:bg-brand-gold transition-colors">
                                        Request Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SaudiInvest;