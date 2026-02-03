import React, { useState } from 'react';
import { researchContent } from '../data/research';
import { FileText, Database, BarChart2, Activity, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import NexergGraph from '../components/charts/NexergGraph';

const Research = () => {

    const DataRow = ({ label, value }) => (
        <div className="group relative flex items-baseline justify-between py-5 border-b border-stone-200 hover:bg-stone-50 transition-colors px-4 -mx-4 rounded">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-emerald-600 transition-colors">{label}</span>
            <span className="text-xl font-mono font-bold text-black tracking-tight">{value}</span>
            {/* Scanning Line Effect */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </div>
    );

    return (
        <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen">

            {/* Header: Command Center Style */}
            <section className="pt-32 pb-16 px-6 border-b border-stone-200 bg-stone-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Live Intelligence Feed</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-none text-black">
                            Research & <br /> <span className="text-stone-400">Data Center</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-3">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-stone-500 max-w-2xl">
                            {researchContent.overview.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Grid Layout */}
            <section className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="flex flex-col gap-24">

                    {/* SECTION 1: COAL REALITY */}
                    <div>
                        <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                            <Database className="text-emerald-600" size={24} />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                Coal Reality
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-3xl font-medium tracking-tight mb-8 text-black">{researchContent.coal.title}</h3>
                                <div className="space-y-1 mb-8">
                                    {researchContent.coal.stats.map((stat, idx) => (
                                        <DataRow key={idx} label={stat.label} value={stat.value} />
                                    ))}
                                </div>
                                <p className="text-lg text-stone-600 font-medium leading-relaxed">
                                    Global energy demands are rising. Despite the push for renewables, coal remains the baseload provider for the majority of the developing world.
                                </p>
                            </div>
                            <div className="bg-stone-50 p-8 border border-stone-200 rounded-lg">
                                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-emerald-600">Key Intelligence</h3>
                                <ul className="space-y-6">
                                    {researchContent.coal.reality.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-base font-medium text-stone-700">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: DIESEL REALITY */}
                    <div>
                        <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                            <Activity className="text-blue-600" size={24} />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                Diesel Reality
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-3xl font-medium tracking-tight mb-8 text-black">{researchContent.diesel.title}</h3>
                                <div className="space-y-1 mb-8">
                                    {researchContent.diesel.stats.map((stat, idx) => (
                                        <DataRow key={idx} label={stat.label} value={stat.value} />
                                    ))}
                                </div>
                            </div>
                            <div className="bg-stone-50 p-8 border border-stone-200 rounded-lg">
                                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-blue-600">Market Intelligence</h3>
                                <ul className="space-y-6">
                                    {researchContent.diesel.reality.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-base font-medium text-stone-700">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: NEXERG ANALYSIS */}
                    <div>
                        <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                            <BarChart2 className="text-emerald-600" size={24} />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                Analysis
                            </h2>
                        </div>
                        <div className="bg-white border border-stone-200 p-8 rounded-lg relative overflow-hidden shadow-sm">
                            <div className="mb-12 relative z-10">
                                <h3 className="text-3xl font-medium tracking-tight mb-4 text-black">
                                    {researchContent.nexergGraph.title}
                                </h3>
                                <p className="text-xl text-stone-500 max-w-3xl leading-relaxed">
                                    {researchContent.nexergGraph.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 relative z-10">
                                {/* Graph Container */}
                                <div className="xl:col-span-8 bg-stone-50 p-3 md:p-6 rounded border border-stone-200">
                                    <NexergGraph data={researchContent.nexergGraph.data} />
                                    <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 text-sm text-emerald-700 font-mono">
                                        &gt; SYSTEM DIAGNOSTIC: {researchContent.nexergGraph.keyTakeaway}
                                    </div>
                                </div>

                                {/* Insights Sidebar */}
                                <div className="xl:col-span-4 space-y-8">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-2 mb-4">
                                            Key Findings
                                        </h3>
                                        {researchContent.nexergGraph.insights.map((insight, idx) => (
                                            <div key={idx} className="group mb-6 last:mb-0">
                                                <h4 className="font-bold text-emerald-600 group-hover:text-emerald-800 transition-colors mb-2 text-sm">
                                                    {insight.title}
                                                </h4>
                                                <p className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-800 transition-colors">
                                                    {insight.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-2 mb-4">
                                            System Benefits
                                        </h3>
                                        <ul className="space-y-3">
                                            {researchContent.nexergGraph.systemBenefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-stone-700">
                                                    <Check size={14} className="text-emerald-600" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 4: TECHNICAL APPENDIX */}
                    <div>
                        <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                            <FileText className="text-stone-600" size={24} />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                Technical Appendix
                            </h2>
                        </div>
                        <div>
                            <h3 className="text-3xl font-medium tracking-tight mb-8 text-black">{researchContent.appendix.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {researchContent.appendix.mechanisms.map((mech, idx) => (
                                    <div key={idx} className="p-8 border border-stone-200 hover:border-stone-400 transition-colors group bg-stone-50">
                                        <h3 className="text-xl font-bold mb-6 text-black group-hover:text-emerald-600 transition-colors">{mech.title}</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {mech.points.map((pt, pIdx) => (
                                                <span key={pIdx} className="px-3 py-1.5 bg-white border border-stone-200 rounded text-xs font-bold uppercase tracking-wide text-stone-500 group-hover:text-stone-800 group-hover:border-stone-400 transition-all">
                                                    {pt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Research;
