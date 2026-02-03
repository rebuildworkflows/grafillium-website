import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="w-full bg-stone-950 text-white font-sans selection:bg-emerald-500 selection:text-black">

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* Left: Info & Context (Dark Mode) */}
                <div className="p-8 md:p-20 lg:p-32 border-r border-stone-900 flex flex-col justify-between bg-stone-950 relative overflow-hidden">
                    {/* Abstract Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

                    <div className="relative z-10">
                        <span className="block text-xs font-bold uppercase tracking-widest mb-8 text-emerald-500">
                            Contact & Support
                        </span>
                        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-12">
                            Deploy <br /> <span className="text-stone-500">Innovation.</span>
                        </h1>
                        <p className="text-xl font-medium text-stone-400 max-w-md mb-12 leading-relaxed">
                            Ready to initiate a pilot? Our engineering team is ready to analyze your infrastructure and deploy solutions within weeks.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 rounded-sm group-hover:border-emerald-500/50 transition-colors">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Direct Line</h3>
                                    <a href="mailto:info@grafillium.com" className="text-2xl font-bold hover:text-emerald-500 transition-colors flex items-center gap-2">
                                        info@grafillium.com <ArrowUpRight size={18} className="opacity-50" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 rounded-sm group-hover:border-emerald-500/50 transition-colors">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Headquarters</h3>
                                    <p className="text-lg font-medium text-stone-300 leading-snug">
                                        Grafillium,<br />
                                        C/o- Magppie Living,<br />
                                        352, MG Road, Sultanpur,<br />
                                        New Delhi-110030
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 relative z-10 bg-stone-900/50 p-6 border border-stone-800 rounded-lg backdrop-blur-sm">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3">System Status</div>
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-bold text-white tracking-wide">Engineering Team Online</span>
                        </div>
                    </div>
                </div>

                {/* Right: Form (Light Mode for Contrast) */}
                <div className="p-8 md:p-20 lg:p-32 bg-white text-black flex flex-col justify-center">
                    <form className="max-w-xl w-full mx-auto space-y-8">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-stone-500">Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b-2 border-stone-200 py-4 text-xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-stone-500">Work Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b-2 border-stone-200 py-4 text-xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-stone-500">Interest</label>
                            <select className="w-full bg-transparent border-b-2 border-stone-200 py-4 text-xl font-medium focus:outline-none focus:border-black transition-colors cursor-pointer">
                                <option>Request Pilot Trial</option>
                                <option>Technical Assessment</option>
                                <option>Partnership Inquiry</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-stone-500">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-transparent border-b-2 border-stone-200 py-4 text-xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-stone-300 resize-none"
                                placeholder="Tell us about your infrastructure requirements..."
                            />
                        </div>

                        <button type="submit" className="w-full py-6 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Submit Request <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-xs text-stone-400 text-center">
                            By submitting, you agree to our <a href="/legal" className="underline hover:text-black">Privacy Policy</a>.
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
