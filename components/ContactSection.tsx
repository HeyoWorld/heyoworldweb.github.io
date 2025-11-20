
import React, { useState } from 'react';
import { SectionId, ContactTopic, CONTACT_EMAILS } from '../types';
import { Mail, Send, CheckCircle2, Copy, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [topic, setTopic] = useState<ContactTopic>('study');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const activeEmail = CONTACT_EMAILS[topic];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', { ...formData, topic, recipient: activeEmail });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Optional: Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-50"></div>

       <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="text-center mb-16">
           <span className="text-brand-purple font-bold tracking-widest uppercase text-sm bg-purple-50 px-3 py-1 rounded-full mb-4 inline-block">
             Get In Touch
           </span>
           <h2 className="font-display font-bold text-5xl md:text-6xl mb-6">
             Start Your Journey.
           </h2>
           <p className="text-gray-500 text-xl max-w-2xl mx-auto">
             Whether you're applying for a visa, planning studies abroad, or investing in Saudi real estate, we have a specialized team for you.
           </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl">
           
           {/* Left: Contact Info & Topic Selection */}
           <div className="lg:col-span-2 space-y-8">
             <div>
               <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">I am interested in...</label>
               <div className="flex flex-col gap-2">
                 {[
                   { id: 'study', label: '🎓 Study Abroad', desc: 'Universities & Schools' },
                   { id: 'visa', label: '✈️ Visa Services', desc: 'Tourist, Work, Business' },
                   { id: 'immigration', label: '🌍 Immigration', desc: 'CBI & Golden Visa' },
                   { id: 'invest', label: '🇸🇦 Saudi Investment', desc: 'Real Estate & ROI' },
                   { id: 'other', label: '👋 General Inquiry', desc: 'Partnerships & Info' },
                 ].map((item) => (
                   <button
                     key={item.id}
                     onClick={() => setTopic(item.id as ContactTopic)}
                     className={`text-left p-4 rounded-xl transition-all border ${
                       topic === item.id 
                         ? 'bg-brand-black text-white border-black shadow-lg scale-[1.02]' 
                         : 'bg-white text-gray-600 border-gray-200 hover:border-brand-purple/50 hover:bg-purple-50'
                     }`}
                   >
                     <div className="font-bold text-base">{item.label}</div>
                     <div className={`text-xs ${topic === item.id ? 'text-gray-400' : 'text-gray-400'}`}>{item.desc}</div>
                   </button>
                 ))}
               </div>
             </div>

             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Direct Email</p>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 group">
                  <code className="text-brand-purple font-bold">{activeEmail}</code>
                  <button 
                    onClick={() => navigator.clipboard.writeText(activeEmail)}
                    className="text-gray-400 hover:text-brand-black p-1"
                    title="Copy Email"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Address: 91 Cherry Hinton Rd, Cambridge CB1 7BS, UK
                </p>
             </div>
           </div>

           {/* Right: Interactive Form */}
           <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              {status === 'success' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-center max-w-xs mb-6">
                    Our specialized team for <span className="font-bold text-gray-900">{topic}</span> will respond to <span className="font-bold text-gray-900">{formData.email}</span> shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 h-full flex flex-col justify-center">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700">Your Name</label>
                       <input 
                         required
                         type="text" 
                         className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                         placeholder="John Doe"
                         value={formData.name}
                         onChange={e => setFormData({...formData, name: e.target.value})}
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700">Email Address</label>
                       <input 
                         required
                         type="email" 
                         className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                         placeholder="john@example.com"
                         value={formData.email}
                         onChange={e => setFormData({...formData, email: e.target.value})}
                       />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Message</label>
                     <textarea 
                       required
                       rows={4}
                       className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all resize-none"
                       placeholder={`Hi, I'm interested in ${topic === 'invest' ? 'investment opportunities' : topic + ' services'}...`}
                       value={formData.message}
                       onChange={e => setFormData({...formData, message: e.target.value})}
                     ></textarea>
                   </div>

                   <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-gray-400">
                        By clicking send, you agree to our privacy policy.
                      </p>
                      <div className="flex gap-3">
                        {/* Mailto fallback */}
                        <a 
                           href={`mailto:${activeEmail}?subject=Inquiry about ${topic}&body=${encodeURIComponent(formData.message)}`}
                           className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full font-bold transition-all flex items-center justify-center"
                           title="Open in your email app"
                        >
                          <Mail size={18} />
                        </a>

                        <button 
                          type="submit"
                          disabled={status === 'sending'}
                          className="px-8 py-3 bg-brand-black text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 disabled:opacity-70 shadow-lg"
                        >
                          {status === 'sending' ? 'Sending...' : 'Send Message'}
                          {status !== 'sending' && <Send size={18} />}
                        </button>
                      </div>
                   </div>
                </form>
              )}
           </div>
         </div>
       </div>
    </section>
  );
};

export default ContactSection;
