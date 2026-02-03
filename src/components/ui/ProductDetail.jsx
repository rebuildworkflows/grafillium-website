import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, CheckCircle, ChevronDown, Zap, Info, FileText } from 'lucide-react';
import { clsx } from 'clsx';
import NexergGraph from '../visualizations/NexergGraph';

const AccordionItem = ({ title, isOpen, onClick, children }) => (
    <div className="border border-stone-200 bg-white rounded-xl overflow-hidden mb-4 shadow-sm transition-all duration-300 hover:border-black/20">
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
        >
            <h3 className="text-xl font-black text-stone-900 tracking-tight">{title}</h3>
            <ChevronDown
                className={clsx(
                    "w-6 h-6 text-black transition-transform duration-300",
                    isOpen ? "transform rotate-180" : ""
                )}
            />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="p-6 pt-0 border-t border-stone-100">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const ProductDetail = ({ product }) => {
    // Default to Overview open
    const [openSections, setOpenSections] = useState({ overview: true });

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="flex-1 h-full overflow-y-auto bg-white custom-scrollbar pb-20">
            {/* Product Hero */}
            <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-3xl mb-10 group bg-stone-900 mx-auto max-w-[98%] mt-2">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                {product.image && (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                )}
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                    <span className="px-4 py-1.5 bg-white text-black text-xs font-black uppercase tracking-widest mb-6 inline-block rounded-md">
                        {product.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">{product.name}</h1>
                    <p className="text-white/90 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed">{product.tagline}</p>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-6">
                {product.hero.metrics.map((metric, i) => (
                    <div key={i} className="bg-stone-50 p-8 rounded-2xl border border-stone-200 flex flex-col items-start justify-between min-h-[140px] hover:border-black transition-colors">
                        <span className="text-stone-500 text-xs font-black uppercase tracking-widest">{metric.label}</span>
                        <div className="text-4xl md:text-5xl font-black text-black my-2 tracking-tight">{metric.value}</div>
                        <span className="text-stone-900 text-xs font-bold bg-white px-3 py-1 rounded-full border border-stone-200">{metric.sub}</span>
                    </div>
                ))}
            </div>

            {/* Accordion Content */}
            <div className="space-y-4 px-6 max-w-6xl mx-auto">
                {/* 1. Overview Section */}
                <AccordionItem
                    title={`What is ${product.name}?`}
                    isOpen={openSections.overview}
                    onClick={() => toggleSection('overview')}
                >
                    <div className="prose prose-stone prose-lg max-w-none pt-4">
                        <p className="text-stone-700 leading-loose text-lg mb-10 font-medium">
                            {product.tabs.overview.what}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.tabs.overview.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center p-6 bg-stone-50 rounded-xl border border-stone-200">
                                    <div className="w-2 h-2 bg-black rounded-full mr-4 shrink-0" />
                                    <span className="text-stone-900 font-bold">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AccordionItem>

                {/* 2. Mechanics Section */}
                <AccordionItem
                    title="How It Works"
                    isOpen={openSections.mechanism}
                    onClick={() => toggleSection('mechanism')}
                >
                    <div className="relative border-l-4 border-stone-200 ml-6 space-y-12 py-8">
                        {product.tabs.mechanism.steps.map((step, i) => (
                            <div key={i} className="relative pl-10 group">
                                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-stone-300 group-hover:border-black transition-colors" />
                                <h4 className="text-xl font-black text-black mb-3">{step.title}</h4>
                                <p className="text-stone-600 leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </AccordionItem>

                {/* 3. Deep Dive / Data Section */}
                <AccordionItem
                    title="Deep Dive Analysis"
                    isOpen={openSections.deepDive}
                    onClick={() => toggleSection('deepDive')}
                >
                    <div className="space-y-10 pt-6">
                        {/* Context Card */}
                        <div className="bg-black text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                            {/* Abstract Shape */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />

                            <div className="relative z-10">
                                <div className="flex items-center mb-8">
                                    <div className="p-3 bg-white/10 rounded-xl mr-5">
                                        <Zap className="text-white w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight">The Energy Reality</h3>
                                </div>
                                <p className="text-stone-300 leading-relaxed mb-10 text-xl font-medium max-w-3xl">
                                    {product.tabs.deepDive.context}
                                </p>
                                <div className="bg-white/10 p-8 rounded-xl border border-white/10 backdrop-blur-md">
                                    <div className="text-xs text-stone-400 uppercase tracking-widest mb-3 font-bold">Impact Calculation</div>
                                    <p className="font-mono text-white text-lg md:text-xl font-bold">{product.tabs.deepDive.math}</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Graph for Coalorix */}
                        {product.id === 'coalorix' && (
                            <div className="mt-10 border border-stone-200 rounded-2xl bg-stone-50 p-2">
                                <NexergGraph />
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <button className="flex-1 py-5 flex items-center justify-center space-x-3 border-2 border-stone-200 rounded-xl hover:border-black transition-colors font-bold text-black bg-white uppercase tracking-wide text-sm">
                                <Download size={20} />
                                <span>Technical Datasheet</span>
                            </button>
                            <button className="flex-1 py-5 flex items-center justify-center space-x-3 bg-black text-white rounded-xl hover:bg-stone-800 transition-colors font-bold shadow-lg uppercase tracking-wide text-sm">
                                <span>Request Full Analysis</span>
                                <ChevronDown size={20} className="-rotate-90" />
                            </button>
                        </div>
                    </div>
                </AccordionItem>
            </div>
        </div>
    );
};

export default ProductDetail;
