import React from 'react';
import { SectionId } from '../types';
import { Globe, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer id={SectionId.CONTACT} className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
               <div className="bg-brand-black text-white p-1.5 rounded mr-2">
                <Globe size={16} />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">HEYO WORLD</span>
            </div>
            <h3 className="font-display font-bold text-3xl mb-6">Let's build something<br/>extraordinary together.</h3>
            <a href="mailto:hello@heyoworld.com" className="inline-block border-b-2 border-brand-black text-xl font-medium hover:text-brand-purple hover:border-brand-purple transition-colors">
              hello@heyoworld.com
            </a>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Explore</h4>
            <ul className="space-y-2 text-gray-600">
              <li><button onClick={() => scrollToSection(SectionId.SERVICES)} className="hover:text-brand-purple">Services</button></li>
              <li><button onClick={() => scrollToSection(SectionId.SAUDI_INVEST)} className="hover:text-brand-purple">Saudi Real Estate</button></li>
              <li><button onClick={() => scrollToSection(SectionId.ABOUT)} className="hover:text-brand-purple">About Studio</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Heyo World Studio. All rights reserved.</p>
          <p>Made with ❤️ and 🤖 AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;