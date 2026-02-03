import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Gauge, FlaskConical, Beaker, Layers, Filter, Building2, Ship, Construction, Droplet } from 'lucide-react';
import { productsContent } from '../data/products';

const Products = () => {
    const [searchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState('all');

    // Read filter from URL query parameter on mount
    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam && ['all', 'grafillium', 'nexerg'].includes(filterParam)) {
            setActiveFilter(filterParam);
        }
    }, [searchParams]);

    // Get all products except pipeline (we'll show pipeline separately)
    const mainProducts = productsContent.filter(p => p.id !== 'pipeline');
    const pipelineProduct = productsContent.find(p => p.id === 'pipeline');

    // Filter products by brand
    const filteredProducts = activeFilter === 'all'
        ? mainProducts
        : mainProducts.filter(p => p.brand?.toLowerCase().includes(activeFilter.toLowerCase()));

    const filters = [
        { id: 'all', label: 'All Products', count: mainProducts.length },
        { id: 'grafillium', label: 'Grafillium', count: mainProducts.filter(p => p.brand?.includes('Grafillium')).length },
        { id: 'nexerg', label: 'Nexerg', count: mainProducts.filter(p => p.brand?.includes('Nexerg')).length },
    ];

    const getProductIcon = (id) => {
        switch (id) {
            case 'coalorix': return <Zap size={24} />;
            case 'ignitron-d': return <Gauge size={24} />;
            case 'lubritron': return <FlaskConical size={24} />;
            case 'ignitron-p': return <Beaker size={24} />;
            default: return <Layers size={24} />;
        }
    };

    const getPipelineIcon = (sector) => {
        switch (sector) {
            case 'Infrastructure': return <Construction size={20} />;
            case 'Marine': return <Ship size={20} />;
            case 'Power & Data': return <Droplet size={20} />;
            case 'Coal Analysis':
            case 'Coal Optimization': return <Zap size={20} />;
            default: return <Building2 size={20} />;
        }
    };

    return (
        <>
            <Helmet>
                <title>Products - Grafillium</title>
                <meta name="description" content="Explore Grafillium's portfolio of nano-technology solutions for industrial efficiency and sustainability." />
            </Helmet>

            <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white">

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                    <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                                <Layers size={14} /> Innovation Portfolio
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                                Products & Solutions
                            </h1>

                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mb-12">
                                Nano-engineered additives delivering 3-20% efficiency gains across power, transport, and industrial sectors. Zero infrastructure changes. Immediate impact.
                            </p>

                            {/* Brand Distinction */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                                <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-teal-400 mb-2">Grafillium Brand</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Consumer & commercial products for transport, automotive, and general industry applications.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Nexerg Brand</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Enterprise-grade solutions for power generation, utilities, and large-scale industrial operations.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* MAIN PRODUCTS SECTION */}
                <section className="py-20 px-6 bg-slate-50">
                    <div className="max-w-[1400px] mx-auto">

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-slate-200">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`px-6 py-3 font-bold text-sm uppercase tracking-widest transition-all rounded-lg ${activeFilter === filter.id
                                            ? 'bg-black text-white'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-black'
                                        }`}
                                >
                                    {filter.label} <span className="ml-2 text-xs opacity-60">({filter.count})</span>
                                </button>
                            ))}
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {filteredProducts.map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="group block h-full"
                                    >
                                        <div className="h-full bg-white border border-slate-200 hover:border-black hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col">

                                            {/* Product Image */}
                                            {product.image && (
                                                <div className="aspect-square bg-slate-100 overflow-hidden relative">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            )}

                                            {/* Product Info */}
                                            <div className="p-6 flex-grow flex flex-col">

                                                {/* Brand Badge */}
                                                <div className="mb-4">
                                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[9px] font-bold uppercase tracking-widest rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                                        {product.brand}
                                                    </span>
                                                </div>

                                                {/* Product Name */}
                                                <div className="mb-3 flex items-start gap-3">
                                                    <div className="p-2 bg-slate-100 text-slate-600 group-hover:bg-black group-hover:text-white transition-colors rounded-lg">
                                                        {getProductIcon(product.id)}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-black">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mt-1">
                                                            {product.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Tagline */}
                                                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                                                    {product.tagline}
                                                </p>

                                                {/* Quick Specs */}
                                                {product.specs && (
                                                    <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-slate-100">
                                                        <div>
                                                            <div className="text-lg font-bold text-teal-600">{product.specs.savings}</div>
                                                            <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Savings</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-lg font-bold text-blue-600">{product.specs.emissions}</div>
                                                            <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Emissions</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-lg font-bold text-slate-800">{product.status === 'Commercial Pilot' ? '✓' : '○'}</div>
                                                            <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{product.status === 'Commercial Pilot' ? 'Ready' : 'Dev'}</div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* View Details Arrow */}
                                                <div className="flex items-center gap-2 text-slate-400 group-hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">
                                                    View Details
                                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* INNOVATION PIPELINE SECTION */}
                {pipelineProduct && (
                    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
                        <div className="max-w-[1400px] mx-auto">

                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                    <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                                    Under Development
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                                    Innovation Pipeline
                                </h2>
                                <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                                    {pipelineProduct.tabs.overview.what}
                                </p>
                            </div>

                            {/* Pipeline Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {pipelineProduct.pipelineItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all duration-300 rounded-xl"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-2 bg-white/10 text-white rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                                                {getPipelineIcon(item.sector)}
                                            </div>
                                            <span className={`px-2 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full ${item.brand?.includes('Nexerg')
                                                    ? 'bg-blue-500/20 text-blue-300'
                                                    : 'bg-teal-500/20 text-teal-300'
                                                }`}>
                                                {item.brand}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 text-white">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-xs font-mono text-indigo-300">{item.status}</span>
                                            <span className="text-white/30">•</span>
                                            <span className="text-xs text-white/50">{item.sector}</span>
                                        </div>

                                        {item.oneLine && (
                                            <p className="text-sm font-bold text-white mb-3">
                                                {item.oneLine}
                                            </p>
                                        )}

                                        <p className="text-sm text-white/70 leading-relaxed line-clamp-4">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* View Pipeline Details */}
                            <div className="mt-12 text-center">
                                <Link
                                    to="/products/pipeline"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all rounded-lg"
                                >
                                    View Full Pipeline Details <ArrowRight size={18} />
                                </Link>
                            </div>

                        </div>
                    </section>
                )}

                {/* CTA SECTION */}
                <section className="py-24 px-6 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">

                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl"
                        >

                            {/* Gradient Overlay & Pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-teal-500/20 to-transparent rounded-full blur-3xl" />

                            <div className="relative z-10 p-12 md:p-20 text-center">

                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-white"
                                >
                                    <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                                    Zero Infrastructure Changes Required
                                </motion.div>

                                {/* Headline */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white leading-none"
                                >
                                    Ready to Deploy?
                                </motion.h2>

                                {/* Subheadline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
                                >
                                    Start a pilot trial and experience <span className="text-teal-400 font-bold">immediate efficiency gains</span> with zero infrastructure changes.
                                </motion.p>

                                {/* Stats Bar */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="flex flex-wrap gap-8 justify-center mb-12 pb-12 border-b border-white/10"
                                >
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">3-20%</div>
                                        <div className="text-xs uppercase tracking-widest text-white/60 font-bold">Efficiency Gains</div>
                                    </div>
                                    <div className="w-px bg-white/10" />
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">0 Days</div>
                                        <div className="text-xs uppercase tracking-widest text-white/60 font-bold">Downtime</div>
                                    </div>
                                    <div className="w-px bg-white/10" />
                                    <div className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">Immediate</div>
                                        <div className="text-xs uppercase tracking-widest text-white/60 font-bold">Results</div>
                                    </div>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                >
                                    <Link
                                        to="/contact"
                                        className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold uppercase tracking-widest rounded-lg shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
                                    >
                                        <span className="relative z-10 flex items-center gap-3">
                                            Start Pilot Trial
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>

                                    <Link
                                        to="/solutions"
                                        className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 hover:border-white transition-all rounded-lg"
                                    >
                                        <span className="flex items-center gap-3">
                                            View Solutions
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Products;
