import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    FlaskConical,
    TrendingUp,
    Layers,
    ArrowRight,
    Rocket,
    Lightbulb,
    Target,
    CheckCircle2,
    Sparkles,
    BarChart3,
    DollarSign,
    Globe2,
    Leaf,
    Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { pipelineData } from '../data/pipeline';

const InnovationPipeline = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Group technologies by status
    const groupedByStatus = {
        'Advanced R&D Phase': pipelineData.filter(p => p.status === 'Advanced R&D Phase'),
        'Concept Validation': pipelineData.filter(p => p.status === 'Concept Validation'),
        'Laboratory Development': pipelineData.filter(p => p.status === 'Laboratory Development')
    };

    // Featured technology (Bitumax)
    const featured = pipelineData.find(p => p.id === 'bitumax');

    // Status color mapping
    const statusStyles = {
        'Advanced R&D Phase': {
            bg: 'from-emerald-50 to-teal-50',
            border: 'border-emerald-300',
            text: 'text-emerald-700',
            badge: 'bg-emerald-100 text-emerald-700',
            icon: Rocket
        },
        'Concept Validation': {
            bg: 'from-blue-50 to-indigo-50',
            border: 'border-blue-300',
            text: 'text-blue-700',
            badge: 'bg-blue-100 text-blue-700',
            icon: Lightbulb
        },
        'Laboratory Development': {
            bg: 'from-purple-50 to-violet-50',
            border: 'border-purple-300',
            text: 'text-purple-700',
            badge: 'bg-purple-100 text-purple-700',
            icon: FlaskConical
        }
    };

    return (
        <>
            <Helmet>
                <title>Innovation Pipeline - Grafillium</title>
                <meta name="description" content="Explore our innovation pipeline featuring breakthrough technologies in infrastructure, water management, and energy efficiency." />
            </Helmet>

            <div className="w-full bg-white selection:bg-teal-900 selection:text-white">

                {/* Hero Section - Redesigned */}
                <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent"></div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left: Hero Content */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    <div className="p-2 bg-teal-500/20 border border-teal-500/30 rounded-lg">
                                        <Sparkles size={24} className="text-teal-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                                        Innovation Pipeline
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
                                >
                                    Building Tomorrow's
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                                        Infrastructure
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xl text-slate-300 leading-relaxed mb-8"
                                >
                                    Breakthrough technologies addressing India's most critical infrastructure, energy, and industrial challenges. From lab to large-scale deployment.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link
                                        to="#technologies"
                                        className="px-8 py-4 bg-teal-500 text-white text-sm font-bold uppercase tracking-widest hover:bg-teal-600 transition-all rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                                    >
                                        Explore Technologies <ArrowRight size={18} />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="px-8 py-4 bg-white/10 border-2 border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all rounded-lg flex items-center gap-2"
                                    >
                                        Partner With Us
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Right: Impact Metrics Dashboard */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-4xl font-black text-white mb-2">5</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-teal-400">
                                        Active Projects
                                    </div>
                                </div>
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-4xl font-black text-white mb-2">₹3-5L Cr</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                                        Market Potential
                                    </div>
                                </div>
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-4xl font-black text-white mb-2">35-63 MMT</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
                                        CO₂ Reduction
                                    </div>
                                </div>
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-4xl font-black text-white mb-2">$800B+</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-blue-400">
                                        Global Impact
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Featured Technology - Bitumax Spotlight */}
                {featured && (
                    <section className="py-24 px-6 bg-white">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="flex items-center gap-3 mb-12">
                                <Target size={28} className="text-orange-600" />
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">Featured Technology</h2>
                                    <p className="text-slate-600 mt-1">Flagship innovation with transformative potential</p>
                                </div>
                            </div>

                            <Link
                                to={`/innovation/${featured.id}`}
                                className="block group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-300 rounded-2xl hover:border-orange-400 hover:shadow-2xl transition-all">

                                    {/* Left: Technology Info */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="px-4 py-2 bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest rounded-full">
                                                {featured.status}
                                            </span>
                                            <span className="px-4 py-2 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full">
                                                {featured.brand}
                                            </span>
                                        </div>

                                        <h3 className="text-4xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                                            {featured.name}
                                        </h3>

                                        <p className="text-xl text-slate-700 italic mb-6">
                                            {featured.tagline}
                                        </p>

                                        <p className="text-base text-slate-600 leading-relaxed mb-8">
                                            {featured.text}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                                                Key Benefits
                                            </div>
                                            {featured.keyBenefits.slice(0, 4).map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                                                    <span className="text-sm font-semibold text-slate-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white text-sm font-bold uppercase tracking-widest rounded-lg group-hover:bg-orange-700 transition-all">
                                            View Full Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Right: Impact Metrics */}
                                    <div className="space-y-6">
                                        <div className="p-6 bg-white border-2 border-blue-200 rounded-xl">
                                            <div className="flex items-center gap-2 mb-4">
                                                <DollarSign size={20} className="text-blue-700" />
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                                    Economic Impact
                                                </h4>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <div className="text-2xl font-bold text-blue-900 mb-1">
                                                        {featured.economicImpact.india.annual}
                                                    </div>
                                                    <div className="text-xs text-slate-600">India Annual Savings</div>
                                                </div>
                                                <div className="pt-3 border-t border-blue-200">
                                                    <div className="text-xl font-bold text-blue-900 mb-1">
                                                        {featured.economicImpact.global.annual}
                                                    </div>
                                                    <div className="text-xs text-slate-600">Global Annual Impact</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-white border-2 border-emerald-200 rounded-xl">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Leaf size={20} className="text-emerald-700" />
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                                                    Carbon Reduction
                                                </h4>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-emerald-900 mb-1">
                                                    {featured.carbonFootprint.india.annual}
                                                </div>
                                                <div className="text-xs text-slate-600">CO₂ Avoided (India)</div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-white border-2 border-purple-200 rounded-xl">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Globe2 size={20} className="text-purple-700" />
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-purple-700">
                                                    Market Reach
                                                </h4>
                                            </div>
                                            <div>
                                                <div className="text-base font-semibold text-purple-900 mb-1">
                                                    Infrastructure & Roads
                                                </div>
                                                <div className="text-xs text-slate-600">
                                                    NHAI, State Highways, Urban Development
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                )}

                {/* Quick Comparison Table */}
                <section className="py-24 px-6 bg-slate-50">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex items-center gap-3 mb-12">
                            <BarChart3 size={28} className="text-indigo-600" />
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Technology Comparison</h2>
                                <p className="text-slate-600 mt-1">Quick overview of our innovation portfolio</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                                <thead className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                                    <tr>
                                        <th className="text-left p-4 text-xs font-bold uppercase tracking-widest">Technology</th>
                                        <th className="text-left p-4 text-xs font-bold uppercase tracking-widest">Sector</th>
                                        <th className="text-left p-4 text-xs font-bold uppercase tracking-widest">Status</th>
                                        <th className="text-left p-4 text-xs font-bold uppercase tracking-widest">India Impact</th>
                                        <th className="text-left p-4 text-xs font-bold uppercase tracking-widest">Global Impact</th>
                                        <th className="text-center p-4 text-xs font-bold uppercase tracking-widest">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pipelineData.map((tech, idx) => {
                                        const style = statusStyles[tech.status];
                                        return (
                                            <tr
                                                key={tech.id}
                                                className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                                            >
                                                <td className="p-4">
                                                    <div className="font-bold text-slate-900 text-base">{tech.name}</div>
                                                    <div className="text-xs text-slate-500 mt-1">{tech.tagline}</div>
                                                </td>
                                                <td className="p-4">
                                                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                                                        {tech.sector}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span className={`px-3 py-1 ${style.badge} text-xs font-semibold rounded-full`}>
                                                        {tech.status}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="text-sm font-bold text-blue-900">
                                                        {tech.economicImpact.india.annual || tech.economicImpact.india.total}
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <div className="text-sm font-bold text-purple-900">
                                                        {tech.economicImpact.global.annual || tech.economicImpact.global.total}
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <Link
                                                        to={`/innovation/${tech.id}`}
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all rounded-lg"
                                                    >
                                                        Details <ArrowRight size={14} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Why Invest Section */}
                <section className="py-24 px-6 bg-slate-900 text-white">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6">
                                    Why Invest in Our Pipeline?
                                </h2>
                                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                    Our innovations address trillion-dollar markets with proven technology foundations, clear paths to commercialization, and massive societal impact.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: Target,
                                            title: 'Market-Validated',
                                            desc: 'Each technology targets verified pain points with massive TAM'
                                        },
                                        {
                                            icon: Clock,
                                            title: 'Fast to Market',
                                            desc: 'Clear commercialization pathways with pilot programs ready'
                                        },
                                        {
                                            icon: TrendingUp,
                                            title: 'Scalable Impact',
                                            desc: 'Solutions designed for national and global deployment'
                                        }
                                    ].map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="p-3 bg-teal-500/20 border border-teal-500/30 rounded-lg shrink-0">
                                                    <Icon size={24} className="text-teal-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                                    <p className="text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-3xl font-bold mb-2">₹3-5L Cr</div>
                                    <div className="text-xs uppercase tracking-wider text-slate-400">
                                        India TAM
                                    </div>
                                </div>
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-3xl font-bold mb-2">$800B+</div>
                                    <div className="text-xs uppercase tracking-wider text-slate-400">
                                        Global TAM
                                    </div>
                                </div>
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-3xl font-bold mb-2">35-63 MMT</div>
                                    <div className="text-xs uppercase tracking-wider text-slate-400">
                                        CO₂ Reduction
                                    </div>
                                </div>
                                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
                                    <div className="text-3xl font-bold mb-2">100M+</div>
                                    <div className="text-xs uppercase tracking-wider text-slate-400">
                                        Lives Impacted
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-teal-500 text-white text-sm font-bold uppercase tracking-widest hover:bg-teal-600 transition-all rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Discuss Partnership Opportunities <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default InnovationPipeline;
