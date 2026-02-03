import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, TrendingUp, BarChart3, FlaskConical, Globe2, Layers, Leaf, Flame, DollarSign, Droplets, AlertTriangle, CloudFog, Check } from "lucide-react";
import { Link } from 'react-router-dom';
import { homeContent } from '../data/home';
import { productsContent } from '../data/products';
import ProductShowcase from '../components/sections/ProductShowcase';
import MarketPulse from '../components/ui/MarketPulse';
import ImpactCounter from '../components/ui/ImpactCounter';
import MechanismBackground from '../components/ui/MechanismBackground';

const CircularGauge = ({ product, index }) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const progress = product.percentage;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const colorMap = {
        orange: { stroke: '#f97316', glow: 'rgba(249, 115, 22, 0.3)', bg: 'bg-orange-500' },
        blue: { stroke: '#3b82f6', glow: 'rgba(59, 130, 246, 0.3)', bg: 'bg-blue-500' },
        emerald: { stroke: '#10b981', glow: 'rgba(16, 185, 129, 0.3)', bg: 'bg-emerald-500' },
        purple: { stroke: '#a855f7', glow: 'rgba(168, 85, 247, 0.3)', bg: 'bg-purple-500' },
    };

    const colors = colorMap[product.color];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="flex flex-col items-center"
        >
            <div className="relative w-24 h-24 mb-2">
                <div className="absolute inset-0 rounded-full blur-lg" style={{ backgroundColor: colors.glow }} />
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r={radius} stroke="#e2e8f0" strokeWidth="6" fill="none" />
                    <motion.circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke={colors.stroke}
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
                        style={{ filter: `drop-shadow(0 0 6px ${colors.glow})` }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-slate-900">{product.percentage}%</div>
                    <Activity size={12} className="text-slate-400 mt-0.5" />
                </div>
            </div>
            <div className="text-center">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{product.name}</div>
                <div className="text-[10px] text-slate-600">{product.label}</div>
            </div>
        </motion.div>
    );
};

const SectionHeader = ({ title, subtitle, dark = false }) => (
    <div className="mb-12">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            className={`h-1 mb-4 ${dark ? "bg-emerald-500" : "bg-black"}`}
        />
        <h2 className={`text-4xl md:text-5xl font-medium tracking-tighter leading-none mb-4 ${dark ? "text-white" : "text-black"}`}>
            {title}
        </h2>
        {subtitle && (
            <p className={`text-xl max-w-2xl leading-relaxed ${dark ? "text-stone-400" : "text-stone-500"}`}>
                {subtitle}
            </p>
        )}
    </div>
);

const Home = () => {
    const [activeCards, setActiveCards] = useState({ tech: false, impact: true });

    const products = [
        { name: 'Coalorix', percentage: 15, label: 'Coal Savings', color: 'orange' },
        { name: 'Ignitron D', percentage: 20, label: 'Fuel Economy', color: 'blue' },
        { name: 'Lubritron', percentage: 6, label: 'Fuel Savings', color: 'emerald' },
        { name: 'Ignitron P', percentage: 10, label: 'Fuel Economy', color: 'purple' },
    ];

    return (
        <>
            <Helmet>
                <title>Grafillium - Engineering the Future of Innovations</title>
                <meta name="description" content="Converging breakthrough technologies with homegrown Indian innovations for clean energy and industrial transformation." />
            </Helmet>

            <div className="w-full bg-slate-50 selection:bg-teal-900 selection:text-white overflow-hidden">

                {/* HERO SECTION: ENGINEERING COMMAND CENTER */}
                <section className="relative w-full bg-slate-50 min-h-[75vh] flex flex-col pt-10 overflow-hidden">

                    {/* Professional Engineering Background */}
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        {/* Subtle Glows */}
                        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* Left: Strategic Messaging */}
                        <div className="lg:col-span-7 space-y-10">

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] text-slate-900"
                            >
                                <span className="block mb-2">Engineering</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">The Future.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl font-medium text-slate-500 max-w-2xl leading-relaxed border-l-4 border-teal-500 pl-6"
                            >
                                {homeContent.hero.subheadline}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <Link
                                    to="/contact"
                                    className="px-10 py-5 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-teal-600 transition-all rounded-lg shadow-xl shadow-slate-200 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
                                >
                                    Start Pilot Trial <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/products"
                                    className="px-10 py-5 bg-white border border-slate-200 text-slate-900 text-sm font-bold uppercase tracking-widest hover:border-teal-500 hover:text-teal-700 transition-all rounded-lg flex items-center gap-3 hover:shadow-lg"
                                >
                                    Explore Solutions
                                </Link>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="pt-12 flex items-center gap-8 border-t border-slate-200/60 w-full"
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Deployed In</div>
                                <div className="flex gap-6 opacity-60 grayscale mix-blend-multiply">
                                    {['Power', 'Logistics', 'Heavy Industry'].map(ind => (
                                        <span key={ind} className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                            <Check size={14} className="text-teal-500" /> {ind}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: 3D Layered Floating Cards */}
                        <div className="lg:col-span-5 relative" style={{ perspective: '1000px' }}>
                            <div className="relative min-h-[400px] lg:min-h-0" style={{ transformStyle: 'preserve-3d' }}>

                                {/* Desktop: Circular Gauges Card */}
                                <motion.div
                                    onClick={() => setActiveCards({ tech: false, impact: false })}
                                    initial={{ opacity: 0, rotateX: -15, z: -50 }}
                                    animate={{
                                        opacity: 1,
                                        rotateX: 0,
                                        z: (!activeCards.tech && !activeCards.impact) ? 100 : 40,
                                        y: [0, -8, 0]
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.4,
                                        z: { duration: 0.3, ease: "easeOut" },
                                        y: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    whileHover={{ y: -2, rotateX: 2 }}
                                    className="hidden lg:block relative bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 overflow-hidden group cursor-pointer w-full"
                                    style={{
                                        boxShadow: (!activeCards.tech && !activeCards.impact)
                                            ? '0 40px 80px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.4)'
                                            : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3)',
                                        transition: 'box-shadow 0.3s ease-out',
                                        zIndex: (!activeCards.tech && !activeCards.impact) ? 100 : 10
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-teal-400/80"></div>
                                        </div>
                                        <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">Control Panel</div>
                                    </div>

                                    {/* Title */}
                                    <div className="text-center mb-5">
                                        <h2 className="text-lg font-bold text-slate-900 mb-0.5">Performance Metrics</h2>
                                        <p className="text-[10px] text-slate-500">Real-time efficiency monitoring</p>
                                    </div>

                                    {/* Circular Gauges Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {products.map((product, index) => (
                                            <CircularGauge key={product.name} product={product} index={index} />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Mobile: Minimal Performance List */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="lg:hidden bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm"
                                >
                                    {/* Header */}
                                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2 text-center">Performance Metrics</div>

                                    {/* Compact List */}
                                    <div className="space-y-1.5">
                                        {products.map((product, index) => {
                                            const colorMap = {
                                                orange: { bar: 'bg-orange-500', text: 'text-orange-600' },
                                                blue: { bar: 'bg-blue-500', text: 'text-blue-600' },
                                                emerald: { bar: 'bg-emerald-500', text: 'text-emerald-600' },
                                                purple: { bar: 'bg-purple-500', text: 'text-purple-600' },
                                            };
                                            const colors = colorMap[product.color];

                                            return (
                                                <motion.div
                                                    key={product.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.08 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-0.5">
                                                            <span className="text-[8px] font-bold text-slate-700">{product.name}</span>
                                                            <span className={`text-xs font-bold ${colors.text}`}>{product.percentage}%</span>
                                                        </div>
                                                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${product.percentage * 5}%` }}
                                                                transition={{ duration: 1, delay: 0.6 + index * 0.08 }}
                                                                className={`h-full ${colors.bar} rounded-full`}
                                                            />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                {/* Card 2: National Impact - Floating Card (Top Right) */}
                                <motion.button
                                    onClick={() => setActiveCards(prev => ({ ...prev, impact: true }))}
                                    initial={{ opacity: 0, x: 50, y: -50 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: [-6, -14, -6],
                                        z: activeCards.impact ? 100 : 0
                                    }}
                                    transition={{
                                        opacity: { duration: 0.8, delay: 0.6 },
                                        x: { duration: 0.8, delay: 0.6 },
                                        y: {
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        },
                                        z: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileHover={{
                                        y: -8
                                    }}
                                    className="hidden lg:block absolute -top-6 -right-16 w-[340px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-4 text-white overflow-hidden cursor-pointer group"
                                    style={{
                                        zIndex: activeCards.impact ? 100 : 10,
                                        boxShadow: activeCards.impact
                                            ? '0 40px 80px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.15)'
                                            : '0 30px 70px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                        transition: 'box-shadow 0.3s ease-out, z-index 0s'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">National Impact</div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-2 text-left mb-2">
                                            <div className="flex justify-between items-center border-b border-slate-700 pb-1.5">
                                                <span className="text-xs text-slate-400">CO₂ Avoidance</span>
                                                <span className="text-base font-bold">49 MMT</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-slate-700 pb-1.5">
                                                <span className="text-xs text-slate-400">Economic Impact</span>
                                                <span className="text-base font-bold">₹1.6L Cr</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-slate-400">Forex Savings</span>
                                                <span className="text-base font-bold">$8-9B</span>
                                            </div>
                                        </div>
                                        <div className="text-[9px] text-slate-500 text-left mt-2 pt-2 border-t border-slate-700">
                                            Conservative deployment scenarios
                                        </div>
                                    </div>
                                </motion.button>

                                {/* Card 3: Technology Highlights - Floating Card (Bottom Left) */}
                                <motion.button
                                    onClick={() => setActiveCards(prev => ({ ...prev, tech: true }))}
                                    initial={{ opacity: 0, x: -50, y: 50 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: [0, -10, 0],
                                        z: activeCards.tech ? 100 : 0
                                    }}
                                    transition={{
                                        opacity: { duration: 0.8, delay: 0.8 },
                                        x: { duration: 0.8, delay: 0.8 },
                                        y: {
                                            duration: 4.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1.5
                                        },
                                        z: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileHover={{
                                        y: -4
                                    }}
                                    className="hidden lg:block absolute bottom-0 -left-16 w-72 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 rounded-2xl p-4 text-white overflow-hidden cursor-pointer group"
                                    style={{
                                        zIndex: activeCards.tech ? 100 : 10,
                                        boxShadow: activeCards.tech
                                            ? '0 40px 80px -15px rgba(20, 184, 166, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.15)'
                                            : '0 25px 60px -12px rgba(20, 184, 166, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                        transition: 'box-shadow 0.3s ease-out, z-index 0s'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500" />

                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-[9px] font-bold uppercase tracking-widest text-teal-200">Technology Edge</div>
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-xs text-teal-100">Nano-particle technology</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-xs text-teal-100">Emission reduction process</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-xs text-teal-100">Proprietary formulations</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-xs text-teal-100">ESG Benefits</span>
                                            </div>
                                        </div>

                                        <div className="text-[9px] text-teal-300 text-left mt-3 pt-3 border-t border-teal-600">
                                            Proprietary patent-pending formulations
                                        </div>
                                    </div>
                                </motion.button>

                                {/* Mobile-Only Cards - Ultra-Compact */}
                                <div className="lg:hidden mt-2 space-y-1.5">
                                    {/* National Impact - Mobile */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-md p-2 text-white shadow-sm"
                                    >
                                        <div className="text-[8px] font-bold uppercase tracking-wide text-slate-400 mb-1">National Impact</div>
                                        <div className="grid grid-cols-3 gap-1.5 text-center">
                                            <div>
                                                <div className="text-sm font-bold">49 MMT</div>
                                                <div className="text-[7px] text-slate-400">CO₂</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">₹1.6L Cr</div>
                                                <div className="text-[7px] text-slate-400">Economic</div>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold">$8-9B</div>
                                                <div className="text-[7px] text-slate-400">Forex</div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Technology Edge - Mobile */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.85 }}
                                        className="w-full bg-gradient-to-br from-teal-600 to-teal-700 rounded-md p-2 text-white shadow-sm"
                                    >
                                        <div className="text-[8px] font-bold uppercase tracking-wide text-teal-200 mb-1">Technology Edge</div>
                                        <div className="grid grid-cols-2 gap-1 text-[8px]">
                                            <div className="flex items-center gap-1">
                                                <div className="w-0.5 h-0.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-teal-100">Nano-particle</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-0.5 h-0.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-teal-100">Emission reduction</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-0.5 h-0.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-teal-100">Proprietary</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-0.5 h-0.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-teal-100">ESG Benefits</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl animate-blob"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
                        </div>
                    </div>

                    {/* Bottom Ticker Integration */}
                    <div className="border-t border-slate-200 bg-white/50 backdrop-blur-sm">
                        <MarketPulse />
                    </div>
                </section>

                {/* STRATEGIC IMPERATIVE (Dark Mode) */}
                {homeContent.strategicImperative && (
                    <section className="py-24 bg-slate-950 text-white px-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-900 to-transparent opacity-50"></div>
                        <div className="max-w-[1400px] mx-auto relative z-10">
                            <SectionHeader
                                title={homeContent.strategicImperative.title}
                                subtitle={homeContent.strategicImperative.subtitle}
                                dark={true}
                            />

                            {homeContent.strategicImperative.intro && (
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mb-12">
                                    {homeContent.strategicImperative.intro}
                                </p>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                                {homeContent.strategicImperative.points.map((point, idx) => (
                                    <div key={idx} className="group p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-teal-500/30 transition-all rounded-xl hover:-translate-y-1 duration-300">
                                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors border border-white/10">
                                            <span className="font-mono font-bold text-xl">0{idx + 1}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-slate-100">{point.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-medium">
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* PRODUCT SHOWCASE */}
                <section id="products" className="relative">
                    <ProductShowcase />
                </section>

                {/* ADDRESSING INDIA'S ENERGY CHALLENGES */}
                <section className="py-24 px-6 bg-white relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

                    <div className="max-w-[1400px] mx-auto relative z-10">
                        <SectionHeader
                            title="Addressing India's Energy Challenges"
                            subtitle="Drop-in solutions that deliver measurable impact from day one."
                        />

                        {/* The Challenge */}
                        {/* The Challenge - Dynamic Marquee */}
                        <div className="mb-20 overflow-hidden relative">
                            {/* Gradient Masks */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                            <motion.div
                                className="flex gap-6 w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 40
                                }}
                            >
                                {[...homeContent.challenges, ...homeContent.challenges].map((item, idx) => {
                                    const icons = { Flame, DollarSign, Activity, Droplets, AlertTriangle, CloudFog };
                                    const Icon = icons[item.icon] || AlertTriangle;

                                    return (
                                        <div
                                            key={idx}
                                            className="w-[300px] md:w-[350px] p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-between group hover:border-teal-500/50 transition-colors"
                                        >
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                                    <Icon size={20} />
                                                </div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Challenge</div>
                                            </div>

                                            <div>
                                                <div className="text-4xl font-bold text-white mb-2">{item.stat}</div>
                                                <div className="text-lg font-bold text-teal-400 mb-1">{item.title}</div>
                                                <div className="text-sm text-slate-400 font-medium">{item.desc}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Our Solution */}
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1 h-8 bg-teal-500"></div>
                                <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="group p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-slate-50 group-hover:bg-teal-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-600 mb-6 transition-all">
                                        <Check size={28} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-slate-900">No Costly Overhauls</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Drop-in nano-technology solutions that work within existing infrastructure
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="group p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-slate-50 group-hover:bg-teal-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-600 mb-6 transition-all">
                                        <Zap size={28} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-slate-900">No Extended Downtime</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Deploy immediately with zero modifications to equipment
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="group p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-slate-50 group-hover:bg-teal-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-teal-600 mb-6 transition-all">
                                        <TrendingUp size={28} strokeWidth={2} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-slate-900">Measurable Impact</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Real results from day one with continuous monitoring
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Results That Matter */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1 h-8 bg-teal-500"></div>
                                <h3 className="text-2xl font-bold text-slate-900">Results That Matter</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="group relative p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 transition-all overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl font-black text-slate-900 mb-3">15%</div>
                                        <div className="text-sm font-bold text-slate-700 mb-2">Efficiency Improvements</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Across thermal power and transport</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="group relative p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 transition-all overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl font-black text-slate-900 mb-3">↓CO₂</div>
                                        <div className="text-sm font-bold text-slate-700 mb-2">Proportional Reduction</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Direct correlation to fuel saved</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="group relative p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 transition-all overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl font-black text-slate-900 mb-3">₹ Cr</div>
                                        <div className="text-sm font-bold text-slate-700 mb-2">Cost Savings</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Significant operational reductions</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="group relative p-8 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 transition-all overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl font-black text-slate-900 mb-3">✓</div>
                                        <div className="text-sm font-bold text-slate-700 mb-2">Regulatory Compliance</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Meet and exceed standards</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* CTA */}
                            <div className="mt-16 text-center">
                                <Link
                                    to="/products"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-teal-600 transition-all rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
                                >
                                    View Our Products <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VISION / CTA Section */}
                <section className="py-32 bg-slate-900 text-white px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-slate-900 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/5 to-transparent"></div>

                    <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-8">
                                <span className="text-gradient-dark">The Industrial</span> <br /> Backbone.
                            </h2>
                            <p className="text-2xl text-slate-300 leading-relaxed max-w-xl font-light">
                                {homeContent.vision}
                            </p>
                        </div>
                        <div className="space-y-8 pl-0 lg:pl-12 border-l border-white/5">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-500 pb-4">Latest Developments</h3>
                            {homeContent.updates.map((update, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <span className="text-xs font-mono text-teal-400 pt-1 shrink-0 bg-teal-400/10 px-2 py-1 rounded">{update.date}</span>
                                    <p className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{update.text}</p>
                                </div>
                            ))}
                            <div className="pt-8">
                                <Link to="/contact" className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-white transition-colors hover:translate-x-2 duration-300">
                                    Start Transformation <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;


