import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Zap, Download, Activity, MousePointer2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { productsContent } from '../../data/products';

const ProductShowcase = () => {
    const [activeTabId, setActiveTabId] = useState('coalorix');
    const [openSection, setOpenSection] = useState('joint'); // For mobile accordion

    // Filter out pipeline for the main tabs
    const products = productsContent.filter(p => p.id !== 'pipeline');
    const activeProduct = products.find(p => p.id === activeTabId) || products[0];

    // Group products by section (Solution 6: Joint Solutions approach)
    const grafilliumProducts = products.filter(p => p.brand?.includes('Grafillium') && !p.brand?.includes('&'));
    const jointProducts = products.filter(p => p.brand?.includes('&'));
    const nexergProducts = products.filter(p => p.brand?.includes('Nexerg') && !p.brand?.includes('&'));

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        { id: 'grafillium', title: 'Products', products: grafilliumProducts, color: 'teal' },
        { id: 'joint', title: 'Products', products: jointProducts, color: 'purple' },
        { id: 'nexerg', title: 'Products', products: nexergProducts, color: 'indigo' }
    ];

    return (
        <div className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 items-end">
                    <div className="lg:col-span-1">
                        <span className="block text-teal-600 font-bold tracking-widest uppercase text-xs mb-4">
                            Pilot Phase
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none">
                            Product<br />Innovations
                        </h2>
                    </div>
                    <div className="lg:col-span-3">
                        <p className="max-w-xl text-slate-500 text-lg leading-relaxed font-medium">
                            Nano-engineered additives designed for immediate integration using our proprietary deployment infrastructure.
                        </p>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-slate-200 pt-8">

                    {/* DESKTOP: Sidebar Navigation (lg and up) - Solution 6 */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col gap-2 lg:sticky lg:top-24 self-start">
                        {/* Grafillium Series */}
                        <div className="space-y-1">
                            {grafilliumProducts.map((product) => {
                                const isActive = activeTabId === product.id;
                                return (
                                    <button
                                        key={product.id}
                                        onClick={() => setActiveTabId(product.id)}
                                        className={clsx(
                                            "w-full group flex items-center justify-between p-4 transition-all duration-300 text-left relative rounded-xl",
                                            isActive ? "bg-slate-50 shadow-sm border border-slate-100" : "hover:bg-slate-50 border border-transparent"
                                        )}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className={clsx("text-base font-bold transition-colors", isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-900")}>
                                                {product.name}
                                            </span>
                                            <span className={clsx("text-[10px] font-bold uppercase tracking-widest", isActive ? "text-teal-600" : "text-stone-300 group-hover:text-teal-500")}>
                                                {product.category}
                                            </span>
                                        </div>
                                        {isActive && (
                                            <motion.div
                                                layoutId="sidebarActiveIndicator"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-500 rounded-r-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Joint Solutions */}
                        <div className="space-y-1 mt-6">
                            {jointProducts.map((product) => {
                                const isActive = activeTabId === product.id;
                                return (
                                    <button
                                        key={product.id}
                                        onClick={() => setActiveTabId(product.id)}
                                        className={clsx(
                                            "w-full group flex items-center justify-between p-4 transition-all duration-300 text-left relative rounded-xl",
                                            isActive ? "bg-purple-50 shadow-sm border border-purple-200" : "hover:bg-purple-50 border border-transparent"
                                        )}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className={clsx("text-base font-bold transition-colors", isActive ? "text-purple-900" : "text-slate-400 group-hover:text-slate-900")}>
                                                {product.name}
                                            </span>
                                            <span className={clsx("text-[10px] font-bold uppercase tracking-widest", isActive ? "text-purple-600" : "text-stone-300 group-hover:text-purple-500")}>
                                                {product.brand}
                                            </span>
                                        </div>
                                        {isActive && (
                                            <motion.div
                                                layoutId="sidebarActiveIndicator"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Nexerg Solutions */}
                        <div className="space-y-1 mt-6">
                            {nexergProducts.map((product) => {
                                const isActive = activeTabId === product.id;
                                return (
                                    <button
                                        key={product.id}
                                        onClick={() => setActiveTabId(product.id)}
                                        className={clsx(
                                            "w-full group flex items-center justify-between p-4 transition-all duration-300 text-left relative rounded-xl",
                                            isActive ? "bg-indigo-50 shadow-sm border border-indigo-100" : "hover:bg-slate-50 border border-transparent"
                                        )}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className={clsx("text-base font-bold transition-colors", isActive ? "text-indigo-900" : "text-slate-400 group-hover:text-slate-900")}>
                                                {product.name}
                                            </span>
                                            <span className={clsx("text-[10px] font-bold uppercase tracking-widest", isActive ? "text-indigo-600" : "text-stone-300 group-hover:text-indigo-500")}>
                                                {product.category}
                                            </span>
                                        </div>
                                        {isActive && (
                                            <motion.div
                                                layoutId="sidebarActiveIndicator"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100 pl-4">
                            <Link to="/products/pipeline" className="flex items-center gap-3 text-slate-400 hover:text-teal-600 transition-colors group">
                                <span className="text-xs font-bold uppercase tracking-widest">Innovation Pipeline</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* MOBILE: Simple List Navigation (below lg) */}
                    <div className="lg:hidden col-span-1 mb-8">
                        <div className="space-y-2">
                            {products.map((product) => {
                                const isActive = activeTabId === product.id;
                                return (
                                    <button
                                        key={product.id}
                                        onClick={() => setActiveTabId(product.id)}
                                        className={clsx(
                                            "w-full p-4 rounded-xl text-left transition-all duration-200 border-2",
                                            isActive ? "bg-teal-50 border-teal-200 shadow-sm" : "bg-white border-slate-200 hover:bg-slate-50"
                                        )}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className={clsx("text-base font-bold", isActive ? "text-slate-900" : "text-slate-600")}>
                                                {product.name}
                                            </span>
                                            <span className={clsx("text-[10px] font-bold uppercase tracking-widest", isActive ? "text-teal-600" : "text-slate-400")}>
                                                {product.category}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100">
                            <Link to="/products/pipeline" className="flex items-center justify-center gap-3 text-slate-400 hover:text-teal-600 transition-colors group p-3">
                                <span className="text-xs font-bold uppercase tracking-widest">Innovation Pipeline</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* 2. Content Area (Cols 2-4) */}
                    <div className="lg:col-span-3 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTabId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="grid grid-cols-1 xl:grid-cols-2 gap-12"
                            >
                                {/* Text Content */}
                                <div className="flex flex-col h-full">
                                    <div className="mb-8">
                                        <h3 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tighter leading-none">{activeProduct.name}</h3>
                                        <p className="text-xl text-slate-600 leading-normal font-medium border-l-4 border-teal-500 pl-6">
                                            {activeProduct.tagline}
                                        </p>
                                    </div>

                                    {/* Metrics Strip */}
                                    <div className="grid grid-cols-2 gap-8 mb-10 py-8 border-y border-slate-100">
                                        <div>
                                            <span className="block text-5xl font-bold tracking-tighter text-slate-900 mb-1">{activeProduct.specs.savings}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency Gain</span>
                                        </div>
                                        <div>
                                            <span className="block text-5xl font-bold tracking-tighter text-slate-900 mb-1">{activeProduct.specs.emissions}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Emission Cut</span>
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="mb-10">
                                        <ul className="space-y-4">
                                            {activeProduct.tabs.overview.benefits.slice(0, 4).map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-4 text-lg font-bold text-slate-800 leading-snug">
                                                    <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                                                        <Check size={14} className="text-teal-600" strokeWidth={4} />
                                                    </div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto flex flex-wrap gap-4">
                                        <Link
                                            to={`/products/${activeProduct.id}`}
                                            className="px-8 py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-teal-600 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg"
                                        >
                                            View Technical Specs <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Image / Media */}
                                <div className="relative h-[400px] xl:h-[600px] w-full bg-slate-100 overflow-hidden rounded-2xl border border-slate-200 group shadow-lg">
                                    {activeProduct.image && (
                                        <motion.img
                                            src={activeProduct.image}
                                            alt={activeProduct.name}
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.5 }}
                                            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                    <div className="absolute bottom-6 right-6 text-white">
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-80 border border-white/30 px-2 py-1 rounded">
                                            {activeProduct.id.toUpperCase()}
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;
