import React, { useState } from 'react';
import { aboutContent } from '../data/about';
import { ArrowRight, Check, Target, Lightbulb, TrendingUp, Layers, Package, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import ImpactCounter from '../components/ui/ImpactCounter';

const About = () => {
    const [activeTabId, setActiveTabId] = useState('mission');

    const tabs = [
        { id: 'mission', label: 'Mission & Focus', icon: Target },
        { id: 'brands', label: 'Our Brands', icon: Package },
        { id: 'competencies', label: 'Core Competencies', icon: Layers },
        { id: 'vision', label: 'Vision 2030', icon: TrendingUp },
        { id: 'founders', label: 'Founder Profiles', icon: Users },
    ];

    return (
        <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* Header */}
            <section className="pt-32 pb-24 px-6 border-b border-stone-200">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <span className="block text-black font-bold tracking-widest uppercase text-xs mb-4">
                            Since 2025
                        </span>
                        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-none">
                            Grafillium <br /> Deeptech
                        </h1>
                    </div>
                    <div className="lg:col-span-3">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-stone-500 max-w-2xl">
                            {aboutContent.hero.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Grid Layout */}
            <section className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 gap-y-16">

                    {/* Sidebar Navigation (Col 1) */}
                    <div className="lg:col-span-1 flex flex-col gap-2 lg:sticky lg:top-24 self-start">
                        {tabs.map((tab) => {
                            const isActive = activeTabId === tab.id;
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTabId(tab.id)}
                                    className={clsx(
                                        "group flex items-center justify-between p-4 transition-all duration-300 text-left relative rounded-lg",
                                        isActive ? "bg-stone-100 text-black" : "text-stone-500 hover:bg-stone-50 hover:text-black"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={18} className={isActive ? "text-emerald-600" : "text-stone-400"} />
                                        <span className="text-base font-bold">{tab.label}</span>
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            layoutId="aboutActiveIndicator"
                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-black rounded-r-full"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area (Cols 2-4) */}
                    <div className="lg:col-span-3 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTabId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >




                                {/* MISSION VIEW */}
                                {activeTabId === 'mission' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                        <div className="lg:col-span-12 mb-8">
                                            <h2 className="text-4xl font-medium tracking-tighter mb-8">Role & Mission</h2>
                                            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-stone-900 mb-8 max-w-4xl">
                                                {aboutContent.hero.mission}
                                            </p>
                                        </div>

                                        {/* Impact Dashboard */}
                                        <div className="lg:col-span-12 bg-stone-900 text-white p-8 md:p-12 mb-12">
                                            <div className="flex items-center gap-3 mb-10 border-b border-stone-800 pb-4">
                                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                                                    National Impact Potential
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                                {aboutContent.market && (
                                                    <>
                                                        <div className="group">
                                                            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-emerald-400 transition-colors">
                                                                <ImpactCounter prefix="₹" value={67} suffix="k" delay={0.2} />
                                                                <span className="text-xl ml-1 text-stone-500">Cr</span>
                                                            </div>
                                                            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Forex Savings</div>
                                                        </div>
                                                        <div className="group">
                                                            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-emerald-400 transition-colors">
                                                                <ImpactCounter value={100} delay={0.4} />
                                                                <span className="text-xl ml-1 text-stone-500">MMT</span>
                                                            </div>
                                                            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">CO₂ Avoided</div>
                                                        </div>
                                                        <div className="group">
                                                            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-emerald-400 transition-colors">
                                                                <ImpactCounter value={1.3} delay={0.6} />
                                                                <span className="text-xl ml-1 text-stone-500">BMT</span>
                                                            </div>
                                                            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Coal Usage</div>
                                                        </div>
                                                        <div className="group">
                                                            <div className="text-5xl font-bold tracking-tighter mb-2 text-white group-hover:text-emerald-400 transition-colors">
                                                                <ImpactCounter value={210} delay={0.8} />
                                                                <span className="text-xl ml-1 text-stone-500">GW</span>
                                                            </div>
                                                            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Thermal Capacity</div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6">
                                            <p className="text-lg text-stone-500 font-medium leading-relaxed">
                                                {aboutContent.overview.description}
                                            </p>
                                        </div>
                                        <div className="lg:col-span-6 bg-stone-50 p-8 border border-stone-200">
                                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Strategic Focus</h3>
                                            <ul className="space-y-4">
                                                {aboutContent.overview.focusItems.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-4 text-base font-bold text-black group">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                                                            <Check size={12} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={4} />
                                                        </div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {/* BRANDS VIEW */}
                                {activeTabId === 'brands' && aboutContent.brands && (
                                    <div>
                                        <h2 className="text-4xl font-medium tracking-tighter mb-6">{aboutContent.brands.title}</h2>
                                        <p className="text-xl text-stone-600 font-medium leading-relaxed mb-12 max-w-3xl">
                                            {aboutContent.brands.description}
                                        </p>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                            {/* Grafillium Brand */}
                                            <div className="group p-10 bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 hover:border-teal-500 transition-all duration-300 rounded-2xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                                                <div className="relative z-10">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                                        <Package size={14} /> {aboutContent.brands.grafillium.name}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                                        {aboutContent.brands.grafillium.tagline}
                                                    </h3>
                                                    <p className="text-base text-slate-600 font-medium leading-relaxed mb-8">
                                                        {aboutContent.brands.grafillium.description}
                                                    </p>
                                                    <div className="space-y-3">
                                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Key Applications</div>
                                                        {aboutContent.brands.grafillium.focus.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-3">
                                                                <div className="mt-0.5 w-1.5 h-1.5 bg-teal-600 rounded-full shrink-0" />
                                                                <span className="text-sm font-bold text-slate-700">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-8 pt-6 border-t border-teal-200">
                                                        <Link
                                                            to="/products?filter=grafillium"
                                                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal-700 hover:text-teal-900 transition-colors"
                                                        >
                                                            View Products <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Nexerg Brand */}
                                            <div className="group p-10 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 rounded-2xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                                                <div className="relative z-10">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                                        <Layers size={14} /> {aboutContent.brands.nexerg.name}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                                        {aboutContent.brands.nexerg.tagline}
                                                    </h3>
                                                    <p className="text-base text-slate-600 font-medium leading-relaxed mb-8">
                                                        {aboutContent.brands.nexerg.description}
                                                    </p>
                                                    <div className="space-y-3">
                                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Key Applications</div>
                                                        {aboutContent.brands.nexerg.focus.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-3">
                                                                <div className="mt-0.5 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                                                                <span className="text-sm font-bold text-slate-700">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-8 pt-6 border-t border-blue-200">
                                                        <Link
                                                            to="/products?filter=nexerg"
                                                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors"
                                                        >
                                                            View Products <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}

                                {/* COMPETENCIES VIEW */}
                                {activeTabId === 'competencies' && (
                                    <div>
                                        <h2 className="text-4xl font-medium tracking-tighter mb-12">Industrial Capabilities</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {aboutContent.pillars.map((pillar, idx) => (
                                                <div key={idx} className="p-8 border border-stone-200 hover:border-black transition-colors group">
                                                    <span className="block text-4xl font-medium text-stone-200 mb-6 group-hover:text-black transition-colors">0{idx + 1}</span>
                                                    <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                                                    <p className="text-stone-500 font-medium mb-6 leading-relaxed">
                                                        {pillar.description}
                                                    </p>
                                                    <ul className="space-y-2">
                                                        {pillar.points.map((pt, pIdx) => (
                                                            <li key={pIdx} className="text-xs font-bold uppercase tracking-wide text-stone-400">
                                                                • {pt}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* VISION VIEW */}
                                {activeTabId === 'vision' && (
                                    <div className="bg-black text-white p-12 lg:p-16 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <span className="inline-block px-3 py-1 border border-stone-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                                                Future Outlook
                                            </span>
                                            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-12">
                                                "{aboutContent.vision.statement}"
                                            </h2>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-stone-800">
                                                {aboutContent.vision.points.map((point, idx) => (
                                                    <div key={idx} className="flex items-start gap-4">
                                                        <div className="mt-1 w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
                                                        <span className="text-lg font-bold text-stone-300">{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* BG Effect */}
                                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-stone-900 to-transparent opacity-50 pointer-events-none" />
                                    </div>
                                )}

                                {/* FOUNDERS VIEW */}
                                {activeTabId === 'founders' && (
                                    <div>
                                        <div className="mb-12">
                                            <div className="inline-block px-3 py-1 border border-stone-300 text-stone-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                                                Leadership Team
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-black">
                                                {aboutContent.founders.title}
                                            </h2>
                                            <p className="text-xl text-stone-600 font-medium max-w-3xl leading-relaxed">
                                                {aboutContent.founders.description}
                                            </p>
                                        </div>

                                        {/* Founders List - Full Width Cards */}
                                        <div className="space-y-12">
                                            {aboutContent.founders.team.map((founder, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className={`border border-stone-200 hover:border-black transition-all duration-300 ${founder.placeholder ? 'bg-stone-50' : 'bg-white'
                                                        }`}
                                                >
                                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                                        {/* Left: Image & Quick Info */}
                                                        <div className={`lg:col-span-4 p-8 lg:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-200 ${founder.placeholder ? 'bg-stone-50' : 'bg-white'
                                                            }`}>
                                                            {/* Profile Image */}
                                                            <div className="w-40 h-40 bg-stone-100 rounded-full mb-6 flex items-center justify-center overflow-hidden border-2 border-stone-200">
                                                                {founder.image && !founder.placeholder ? (
                                                                    <img
                                                                        src={founder.image}
                                                                        alt={founder.name}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <Users size={80} className={`${founder.placeholder ? 'text-stone-400' : 'text-stone-500'
                                                                        }`} />
                                                                )}
                                                            </div>

                                                            {/* Name & Title */}
                                                            <h3 className="text-2xl font-bold text-black mb-2 text-center">
                                                                {founder.name}
                                                            </h3>
                                                            <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3 text-center">
                                                                {founder.title}
                                                            </p>
                                                            {founder.subtitle && !founder.placeholder && (
                                                                <p className="text-sm text-stone-600 font-medium text-center mb-6 px-4">
                                                                    {founder.subtitle}
                                                                </p>
                                                            )}

                                                            {/* Experience Badge */}
                                                            {founder.experience && !founder.placeholder && (
                                                                <div className="inline-block px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider">
                                                                    {founder.experience} Experience
                                                                </div>
                                                            )}

                                                            {/* Placeholder Badge */}
                                                            {founder.placeholder && (
                                                                <div className="inline-block px-4 py-2 bg-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider">
                                                                    Profile Pending
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Right: Detailed Info */}
                                                        <div className="lg:col-span-8 p-8 lg:p-12">
                                                            {!founder.placeholder ? (
                                                                <div className="space-y-6">
                                                                    {/* Bio */}
                                                                    {founder.bio && (
                                                                        <div>
                                                                            <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                                                {founder.bio}
                                                                            </p>
                                                                        </div>
                                                                    )}

                                                                    {/* Background */}
                                                                    {founder.background && (
                                                                        <div>
                                                                            <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                                                {founder.background}
                                                                            </p>
                                                                        </div>
                                                                    )}

                                                                    {/* Leadership */}
                                                                    {founder.leadership && (
                                                                        <div>
                                                                            <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                                                {founder.leadership}
                                                                            </p>
                                                                        </div>
                                                                    )}

                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
                                                                        {/* Education */}
                                                                        {founder.education && (
                                                                            <div className="p-6 bg-stone-50 border border-stone-200">
                                                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                                                    Education
                                                                                </div>
                                                                                <p className="text-sm text-black font-bold leading-relaxed">
                                                                                    {founder.education}
                                                                                </p>
                                                                            </div>
                                                                        )}

                                                                        {/* Expertise */}
                                                                        {founder.expertise && founder.expertise.length > 0 && (
                                                                            <div className="p-6 bg-stone-50 border border-stone-200">
                                                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                                                    Core Expertise
                                                                                </div>
                                                                                <div className="space-y-2">
                                                                                    {founder.expertise.map((skill, skillIdx) => (
                                                                                        <div key={skillIdx} className="flex items-start gap-2">
                                                                                            <div className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                                                            <span className="text-sm font-bold text-black">
                                                                                                {skill}
                                                                                            </span>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    {/* Companies */}
                                                                    {founder.companies && (
                                                                        <div className="p-4 bg-stone-50 border border-stone-200 inline-block">
                                                                            <div className="flex items-center gap-3">
                                                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500">
                                                                                    Companies:
                                                                                </div>
                                                                                <div className="text-sm font-bold text-black">
                                                                                    {founder.companies}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <div className="flex items-center justify-center h-full min-h-[300px]">
                                                                    <div className="text-center p-8">
                                                                        <div className="text-6xl mb-4">👤</div>
                                                                        <h4 className="text-xl font-bold text-black mb-2">
                                                                            Profile Coming Soon
                                                                        </h4>
                                                                        <p className="text-stone-600 font-medium">
                                                                            Detailed information for {founder.name} will be added shortly.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Footer Note */}
                                        <div className="mt-12 p-6 bg-stone-50 border border-stone-200 text-center">
                                            <p className="text-sm text-stone-600 font-medium">
                                                {aboutContent.founders.note}
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 text-center border-t border-stone-200 bg-stone-50">
                <Link
                    to="/contact"
                    className="text-lg font-bold border-b-2 border-black hover:bg-black hover:text-white px-1 transition-all"
                >
                    Get in Touch →
                </Link>
            </section>

        </div>
    );
};

export default About;
