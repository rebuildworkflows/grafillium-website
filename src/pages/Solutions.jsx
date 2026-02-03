import React, { useState } from 'react';
import { solutionsContent } from '../data/solutions';
import { ArrowRight, Factory, Truck, Zap, Check, ChevronRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImpactCounter from '../components/ui/ImpactCounter';

const Solutions = () => {
    const [activeTabId, setActiveTabId] = useState('thermal');
    const pillars = solutionsContent.overview.pillars;
    const activePillar = pillars.find(p => p.id === activeTabId) || pillars[0];

    // Theme configuration based on active tab
    const themeConfig = {
        thermal: {
            color: "text-orange-600",
            bg: "bg-orange-50",
            border: "border-orange-200",
            shadow: "shadow-orange-500/10",
            button: "hover:bg-orange-50 data-[active=true]:bg-white data-[active=true]:text-orange-600 data-[active=true]:shadow-lg",
            icon: Zap
        },
        transport: {
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-200",
            shadow: "shadow-blue-500/10",
            button: "hover:bg-blue-50 data-[active=true]:bg-white data-[active=true]:text-blue-600 data-[active=true]:shadow-lg",
            icon: Truck
        },
        industrial: {
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-200",
            shadow: "shadow-emerald-500/10",
            button: "hover:bg-emerald-50 data-[active=true]:bg-white data-[active=true]:text-emerald-600 data-[active=true]:shadow-lg",
            icon: Factory
        }
    };

    const activeTheme = themeConfig[activeTabId];

    return (
        <div className="w-full bg-slate-50 min-h-screen font-sans selection:bg-teal-900 selection:text-white">

            {/* Header Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-6 shadow-sm">
                        Deployment Ready Solutions
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Immediate Impact.</span>
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        {solutionsContent.overview.description}
                    </p>
                </div>
            </section>

            {/* Interactive Control Center */}
            <section className="px-6 pb-24 relative z-10">
                <div className="max-w-[1200px] mx-auto">

                    {/* Centered Navigation Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-white/50 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl shadow-slate-200/50 w-fit mx-auto">
                        {pillars.map((pillar) => {
                            const theme = themeConfig[pillar.id];
                            const Icon = theme.icon;
                            const isActive = activeTabId === pillar.id;

                            return (
                                <button
                                    key={pillar.id}
                                    onClick={() => setActiveTabId(pillar.id)}
                                    data-active={isActive}
                                    className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 text-sm font-bold tracking-tight ${theme.button} ${!isActive && 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <Icon size={18} className={isActive ? theme.color : 'text-slate-400'} />
                                    {pillar.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTabId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden relative"
                        >
                            {/* Accent Top Bar */}
                            <div className={`h-2 w-full ${activeTheme.bg.replace('50', '500')}`}></div>

                            <div className="grid grid-cols-1 lg:grid-cols-12">

                                {/* Left: Info & Context */}
                                <div className="lg:col-span-7 p-8 md:p-12 lg:border-r border-slate-100 relative">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border ${activeTheme.border} shadow-sm`}>
                                            <span className={`w-2 h-2 rounded-full ${activeTheme.color.replace('text', 'bg')} animate-pulse`} />
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activeTheme.color}`}>Active System</span>
                                        </div>
                                        <activeTheme.icon size={120} className={`absolute top-12 right-12 opacity-[0.03] pointer-events-none ${activeTheme.color}`} />
                                    </div>

                                    <h2 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">{activePillar.title}</h2>
                                    <p className="text-lg text-slate-500 leading-relaxed mb-10 relative z-10">
                                        {activePillar.description}
                                    </p>

                                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Key Outcomes</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        {activePillar.outcomes.map((outcome, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                                <div className={`mt-0.5 p-0.5 rounded-full ${activeTheme.bg}`}>
                                                    <Check size={12} className={activeTheme.color} strokeWidth={4} />
                                                </div>
                                                <span className="leading-snug">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/contact" className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${activeTheme.color} hover:underline decoration-2 underline-offset-4 transition-all`}>
                                        Request Technical Brief <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* Right: Live Metrics Panel */}
                                <div className={`lg:col-span-5 ${activeTheme.bg} p-8 md:p-12 flex flex-col justify-center relative overflow-hidden`}>

                                    {/* Decorative Pattern */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(${activeTabId === 'thermal' ? '#f97316' : activeTabId === 'transport' ? '#2563eb' : '#10b981'} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>

                                    <div className="relative z-10 text-center mb-0 md:mb-8">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 bg-white/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Proven Impact</div>
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        {activePillar.nationalImpact && [
                                            {
                                                value: activePillar.nationalImpact.savings,
                                                label: "Annual Savings",
                                                desc: "Direct operational cost reduction"
                                            },
                                            {
                                                value: activePillar.nationalImpact.co2,
                                                label: "CO₂ Avoided",
                                                desc: "Scope 1 emission reduction"
                                            },
                                            {
                                                value: activePillar.nationalImpact.forex,
                                                label: "Forex Impact",
                                                desc: "National economic contribution"
                                            }
                                        ].map((metric, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 * i }}
                                                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-sm flex items-center justify-between group hover:scale-[1.02] transition-transform duration-300"
                                            >
                                                <div className="text-left">
                                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{metric.label}</div>
                                                    <div className={`text-2xl font-bold tracking-tight text-slate-900 group-hover:${activeTheme.color} transition-colors`}>
                                                        {metric.value}
                                                    </div>
                                                </div>
                                                <Activity className="text-slate-300 group-hover:text-slate-400 transition-colors" size={20} strokeWidth={1.5} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
