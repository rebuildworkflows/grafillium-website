import React, { useState, lazy, Suspense } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { productsContent } from '../data/products';
import { ArrowLeft, Check, Download, Zap, Activity, Layers, ArrowRight, Gauge, Database, BarChart2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import ImpactCounter from '../components/ui/ImpactCounter';
import NexergGraph from '../components/charts/NexergGraph';
import PipelineItemCard from '../components/sections/PipelineItemCard';
import CoalorixStatsCard from '../components/ui/CoalorixStatsCard';
import ROISnapshotWidget from '../components/ui/ROISnapshotWidget';
import IgnitronDStatsCard from '../components/ui/IgnitronDStatsCard';
import IgnitronDROISnapshotWidget from '../components/ui/IgnitronDROISnapshotWidget';
import LubritronStatsCard from '../components/ui/LubritronStatsCard';
import LubritronROISnapshotWidget from '../components/ui/LubritronROISnapshotWidget';
import IgnitronPStatsCard from '../components/ui/IgnitronPStatsCard';
import IgnitronPROISnapshotWidget from '../components/ui/IgnitronPROISnapshotWidget';

// Lazy load infographics for performance
const CoalorixROICalculator = lazy(() => import('../components/infographics/CoalorixROICalculator'));
const CoalorixHowItWorks = lazy(() => import('../components/infographics/CoalorixHowItWorks'));
const CoalorixTechnicalSpecs = lazy(() => import('../components/infographics/CoalorixTechnicalSpecs'));
const CoalorixDeepDive = lazy(() => import('../components/infographics/CoalorixDeepDive'));
const IgnitronDHowItWorks = lazy(() => import('../components/infographics/IgnitronDHowItWorks'));
const IgnitronDTechnicalSpecs = lazy(() => import('../components/infographics/IgnitronDTechnicalSpecs'));
const IgnitronDDeepDive = lazy(() => import('../components/infographics/IgnitronDDeepDive'));
const IgnitronDBenefitsROI = lazy(() => import('../components/infographics/IgnitronDBenefitsROI'));
const LubritronHowItWorks = lazy(() => import('../components/infographics/LubritronHowItWorks'));
const LubritronTechnicalSpecs = lazy(() => import('../components/infographics/LubritronTechnicalSpecs'));
const LubritronDeepDive = lazy(() => import('../components/infographics/LubritronDeepDive'));
const LubritronBenefitsROI = lazy(() => import('../components/infographics/LubritronBenefitsROI'));
const IgnitronPHowItWorks = lazy(() => import('../components/infographics/IgnitronPHowItWorks'));
const IgnitronPTechnicalSpecs = lazy(() => import('../components/infographics/IgnitronPTechnicalSpecs'));
const IgnitronPDeepDive = lazy(() => import('../components/infographics/IgnitronPDeepDive'));
const IgnitronPBenefitsROI = lazy(() => import('../components/infographics/IgnitronPBenefitsROI'));

const ProductDetail = () => {
    const { id } = useParams();
    const product = productsContent.find(p => p.id === id);
    const [activeTab, setActiveTab] = useState('overview');

    if (!product) {
        return <Navigate to="/" replace />;
    }

    // Dynamic Theme Configuration - Individual Product Colors
    const getTheme = (productId) => {
        switch (productId) {
            case 'coalorix':
                return {
                    bg: 'bg-orange-950',
                    text: 'text-orange-500',
                    border: 'border-orange-500/30',
                    gradient: 'from-orange-900/50 to-orange-950',
                    statsText: 'text-orange-400'
                };
            case 'ignitron-d':
                return {
                    bg: 'bg-blue-950',
                    text: 'text-blue-500',
                    border: 'border-blue-500/30',
                    gradient: 'from-blue-900/50 to-blue-950',
                    statsText: 'text-blue-400'
                };
            case 'ignitron-p':
                return {
                    bg: 'bg-purple-950',
                    text: 'text-purple-500',
                    border: 'border-purple-500/30',
                    gradient: 'from-purple-900/50 to-purple-950',
                    statsText: 'text-purple-400'
                };
            case 'lubritron':
                return {
                    bg: 'bg-emerald-950',
                    text: 'text-emerald-500',
                    border: 'border-emerald-500/30',
                    gradient: 'from-emerald-900/50 to-emerald-950',
                    statsText: 'text-emerald-400'
                };
            case 'pipeline':
                return {
                    bg: 'bg-indigo-950',
                    text: 'text-indigo-500',
                    border: 'border-indigo-500/30',
                    gradient: 'from-indigo-900/50 to-indigo-950',
                    statsText: 'text-indigo-400'
                };
            default:
                return {
                    bg: 'bg-slate-950',
                    text: 'text-slate-500',
                    border: 'border-slate-500/30',
                    gradient: 'from-slate-900/50 to-slate-950',
                    statsText: 'text-slate-400'
                };
        }
    };

    const theme = getTheme(product.id);

    // Tab configuration - only for standard products (not pipeline)
    const tabs = product.id !== 'pipeline' ? [
        { id: 'overview', label: 'Overview' },
        { id: 'benefits', label: 'Benefits & ROI' },
        { id: 'mechanism', label: 'How It Works' },
        { id: 'technical', label: 'Technical Specs' },
        { id: 'deepdive', label: 'Deep Dive' }
    ] : [];

    return (
        <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* CINEMATIC HERO HEADER */}
            <div className={`relative pt-32 pb-24 px-6 ${theme.bg} text-white border-b border-white/10 overflow-hidden`}>

                {/* Abstract Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-50 z-0`} />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl mix-blend-overlay animate-pulse"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <Link to="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Hub
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`inline-block px-3 py-1 border ${theme.border} rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.text} bg-black/20 backdrop-blur-md`}>
                                    {product.status}
                                </span>
                                {product.brand && (
                                    <span className={`inline-block px-3 py-1 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md ${product.brand.includes('Nexerg') ? 'text-blue-300' : 'text-white'
                                        }`}>
                                        {product.brand}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6 text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                                {product.name}
                            </h1>
                            <p className="text-xl md:text-3xl font-medium leading-tight text-white/80 max-w-2xl">
                                {product.tagline}
                            </p>
                        </div>

                        {/* Animated Quick Stats */}
                        {product.hero?.metrics && (
                            <div className="flex flex-wrap gap-8 border-l border-white/10 pl-8 bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
                                {product.hero.metrics.map((metric, idx) => (
                                    <div key={idx}>
                                        <div className={`text-4xl font-bold tracking-tighter whitespace-nowrap ${theme.statsText}`}>
                                            {(() => {
                                                // Check if value starts with "Up to" or "up to"
                                                const hasUpToPrefix = /^up to /i.test(metric.value);
                                                const cleanValue = hasUpToPrefix ? metric.value.replace(/^up to /i, '') : metric.value;

                                                const numericValue = parseFloat(cleanValue.replace(/[^0-9.]/g, ''));
                                                const isValidNumber = !isNaN(numericValue) && /[0-9]/.test(cleanValue);

                                                if (isValidNumber && hasUpToPrefix) {
                                                    return (
                                                        <>
                                                            <span className="text-xl align-middle">Up to </span>
                                                            <span className="inline-block align-middle">
                                                                <ImpactCounter
                                                                    value={numericValue}
                                                                    suffix={cleanValue.replace(/[0-9.]/g, '')}
                                                                    delay={idx * 0.1 + 0.5}
                                                                />
                                                            </span>
                                                        </>
                                                    );
                                                } else if (isValidNumber) {
                                                    return (
                                                        <ImpactCounter
                                                            value={numericValue}
                                                            suffix={metric.value.replace(/[0-9.]/g, '')}
                                                            delay={idx * 0.1 + 0.5}
                                                        />
                                                    );
                                                }
                                                return metric.value;
                                            })()}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-white/60 mt-1 font-bold">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* STICKY TAB NAVIGATION - Only for Standard Products */}
            {product.id !== 'pipeline' && tabs.length > 0 && (
                <div className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative py-5 text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap border-b-2 ${isActive
                                            ? `${theme.text} border-current`
                                            : 'text-stone-500 border-transparent hover:text-stone-900 hover:border-stone-300'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className="max-w-[1400px] mx-auto px-6 py-12">

                {/* Quick Specs Banner (Marketing Display) - Only for Standard Products */}
                {product.id !== 'pipeline' && (product.specs.savingsMarketing || product.specs.emissionsMarketing) && (
                    <div className="mb-16 p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl border border-slate-700 shadow-2xl">
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-400">At A Glance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {product.specs.savingsMarketing && (
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <div className={`text-2xl font-bold mb-2 ${theme.statsText}`}>
                                        {product.specs.savingsMarketing}
                                    </div>
                                    <div className="text-sm text-slate-300">
                                        {product.id === 'coalorix' ? 'Coal Savings' : 'Fuel Savings'}
                                    </div>
                                </div>
                            )}
                            {product.specs.emissionsMarketing && (
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <div className={`text-2xl font-bold mb-2 ${theme.statsText}`}>
                                        {product.specs.emissionsMarketing}
                                    </div>
                                    <div className="text-sm text-slate-300">Emission Reduction</div>
                                </div>
                            )}
                            {product.specs.dose && (
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <div className={`text-2xl font-bold mb-2 ${theme.statsText}`}>
                                        {product.specs.dose}
                                    </div>
                                    <div className="text-sm text-slate-300">Dosage</div>
                                </div>
                            )}
                            {product.specs.wearMarketing && (
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <div className={`text-4xl font-bold mb-2 ${theme.statsText}`}>
                                        {product.specs.wearMarketing.match(/\d+%?/)?.[0] || product.specs.wearMarketing}
                                    </div>
                                    <div className="text-sm text-slate-300">{product.specs.wearMarketing.replace(/\d+%?\s*/, '')}</div>
                                </div>
                            )}
                            {product.specs.oilLifeMarketing && (
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                                    <div className={`text-3xl font-bold mb-2 ${theme.statsText}`}>
                                        {product.specs.oilLifeMarketing.match(/[\d--]+%?/)?.[0] || product.specs.oilLifeMarketing}
                                    </div>
                                    <div className="text-sm text-slate-300">{product.specs.oilLifeMarketing.replace(/[\d--]+%?\s*/, '')}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Use different layout for Pipeline vs Standard Products */}
                {product.id === 'pipeline' ? (
                    <div className="grid grid-cols-1 gap-16">
                        {/* Pipeline Introduction */}
                        <div className="max-w-4xl">
                            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-indigo-500 border-b border-indigo-100 pb-2 inline-block">
                                R&D Overview
                            </h2>
                            <p className="text-2xl leading-relaxed font-medium text-slate-800 mb-8">
                                {product.tabs.overview.what}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.tabs.overview.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pipeline Items Grid */}
                        <div>
                            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                                <Activity className="text-indigo-500" /> Active Development Pipeline
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {product.pipelineItems.map((item, idx) => (
                                    <PipelineItemCard key={idx} item={item} idx={idx} />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Standard Product Layout */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 min-h-[500px]">

                        {/* Left: Content Text */}
                        <div className="lg:col-span-7">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >

                                    {/* TAB 1: OVERVIEW */}
                                    {activeTab === 'overview' && (
                                        <div className="mb-24">
                                            <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                Product Overview
                                            </h2>
                                            <div className="space-y-8">
                                                <p className="text-xl leading-relaxed font-medium text-stone-800">
                                                    {product.tabs.overview.what}
                                                </p>

                                                {/* Quick Stats Card - Only for Coalorix */}
                                                {product.id === 'coalorix' && <CoalorixStatsCard />}

                                                {/* Quick Stats Card - Only for Ignitron D */}
                                                {product.id === 'ignitron-d' && <IgnitronDStatsCard />}

                                                {/* Quick Stats Card - Only for Lubritron */}
                                                {product.id === 'lubritron' && <LubritronStatsCard />}

                                                {/* Quick Stats Card - Only for Ignitron P */}
                                                {product.id === 'ignitron-p' && <IgnitronPStatsCard />}

                                                {/* Impact Section */}
                                                {product.impact && (
                                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                                        <div className="bg-stone-50 p-6 border border-stone-200 rounded-xl">
                                                            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">National Savings</div>
                                                            <div className={`text-2xl font-bold ${theme.statsText}`}>
                                                                <ImpactCounter
                                                                    value={parseFloat(product.impact.savings.replace(/[^0-9.]/g, ''))}
                                                                    suffix={product.impact.savings.replace(/[^a-zA-Z\s]/g, '').trim()}
                                                                    delay={0.2}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="bg-stone-50 p-6 border border-stone-200 rounded-xl">
                                                            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">CO₂ Avoided</div>
                                                            <div className={`text-2xl font-bold ${theme.statsText}`}>
                                                                <ImpactCounter
                                                                    value={parseFloat(product.impact.co2.replace(/[^0-9.]/g, ''))}
                                                                    suffix={product.impact.co2.replace(/[0-9.]/g, '')}
                                                                    delay={0.4}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="bg-white p-8 border border-stone-200 shadow-sm rounded-xl">
                                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Key Engineering Benefits</h3>
                                                    <ul className="space-y-4">
                                                        {product.tabs.overview.benefits.map((bg, i) => (
                                                            <li key={i} className="flex items-start gap-4">
                                                                <div className={`mt-1 w-5 h-5 rounded-full ${theme.bg} bg-opacity-10 flex items-center justify-center shrink-0`}>
                                                                    <Check size={12} className={`${theme.text}`} strokeWidth={3} />
                                                                </div>
                                                                <span className="text-lg font-medium text-stone-700">{bg}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* TAB 2: BENEFITS & ROI */}
                                    {activeTab === 'benefits' && (
                                        <>
                                            {/* SECTION 2: PRIMARY BENEFITS (DETAILED) */}
                                            {product.tabs.primaryBenefits && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Primary Benefits (Quantified)
                                                    </h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {Object.entries(product.tabs.primaryBenefits).map(([key, value], idx) => (
                                                            <div key={idx} className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
                                                                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                                </div>
                                                                <div className="text-xl font-bold text-slate-900">{value}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* ROI Calculator - Only for Coalorix */}
                                            {product.id === 'coalorix' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Interactive ROI Calculator
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                                                        </div>
                                                    }>
                                                        <CoalorixROICalculator />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Benefits & ROI Analysis - Only for Ignitron D */}
                                            {product.id === 'ignitron-d' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Benefits & ROI Analysis
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronDBenefitsROI />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Benefits & ROI Analysis - Only for Lubritron */}
                                            {product.id === 'lubritron' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Benefits & ROI Analysis
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                                                        </div>
                                                    }>
                                                        <LubritronBenefitsROI />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Benefits & ROI Analysis - Only for Ignitron P */}
                                            {product.id === 'ignitron-p' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Benefits & ROI Analysis
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronPBenefitsROI />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* SECTION 3: SECONDARY BENEFITS - MOVED UP */}
                                            {product.tabs.secondaryBenefits && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Beyond Primary Savings
                                                    </h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {product.tabs.secondaryBenefits.map((benefit, idx) => (
                                                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
                                                                <Check className="text-green-600 shrink-0 mt-1" size={20} />
                                                                <span className="text-slate-700 font-medium">{benefit}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* TAB 3: HOW IT WORKS */}
                                    {activeTab === 'mechanism' && (
                                        <>
                                            {/* Visual Process Flow - Only for Coalorix */}
                                            {product.id === 'coalorix' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Visual Process Flow
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                                                        </div>
                                                    }>
                                                        <CoalorixHowItWorks />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Visual Process Flow - Only for Ignitron D */}
                                            {product.id === 'ignitron-d' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Visual Process Flow
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronDHowItWorks />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Visual Process Flow - Only for Lubritron */}
                                            {product.id === 'lubritron' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Visual Process Flow
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                                                        </div>
                                                    }>
                                                        <LubritronHowItWorks />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Visual Process Flow - Only for Ignitron P */}
                                            {product.id === 'ignitron-p' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Visual Process Flow
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronPHowItWorks />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* SECTION 5: MECHANISM (Text-based fallback for other products) */}
                                            {product.id !== 'coalorix' && product.id !== 'ignitron-d' && product.id !== 'lubritron' && product.id !== 'ignitron-p' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Mechanism of Action
                                                    </h2>
                                                    <div className="space-y-12">
                                                        <div className="prose prose-lg">
                                                            <p className="text-xl text-stone-600 font-medium">
                                                                Our proprietary nano-catalytic process optimizes combustion at the molecular level.
                                                            </p>
                                                        </div>
                                                        <div className="space-y-6">
                                                            {product.tabs.mechanism.steps.map((step, i) => (
                                                                <div key={i} className="flex gap-6 group p-6 hover:bg-stone-50 rounded-xl transition-colors border border-transparent hover:border-stone-100">
                                                                    <div className={`w-12 h-12 flex items-center justify-center ${theme.bg} text-white font-bold text-lg shrink-0 rounded-lg shadow-md group-hover:scale-110 transition-transform`}>
                                                                        {i + 1}
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="text-lg font-bold mb-1 text-slate-900">{step.title}</h4>
                                                                        <p className="text-stone-600 leading-relaxed font-medium">{step.desc}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* TAB 4: TECHNICAL SPECS */}
                                    {activeTab === 'technical' && (
                                        <>
                                            {/* Technical Specs Infographic - Only for Coalorix */}
                                            {product.id === 'coalorix' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Complete Technical Specifications
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                                                        </div>
                                                    }>
                                                        <CoalorixTechnicalSpecs />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Technical Specs Infographic - Only for Ignitron D */}
                                            {product.id === 'ignitron-d' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Complete Technical Specifications
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronDTechnicalSpecs />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Technical Specs Infographic - Only for Lubritron */}
                                            {product.id === 'lubritron' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Complete Technical Specifications
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                                                        </div>
                                                    }>
                                                        <LubritronTechnicalSpecs />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Technical Specs Infographic - Only for Ignitron P */}
                                            {product.id === 'ignitron-p' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Complete Technical Specifications
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronPTechnicalSpecs />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* SECTION 4: DOSE & USE / DEPLOYMENT (Text-based fallback for other products) */}
                                            {product.id !== 'coalorix' && product.id !== 'ignitron-d' && product.id !== 'lubritron' && product.id !== 'ignitron-p' && (product.tabs.doseAndUse || product.tabs.doseAndDeployment) && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        Dose & Deployment
                                                    </h2>
                                                    <div className="space-y-4">
                                                        {(product.tabs.doseAndUse || product.tabs.doseAndDeployment) && Object.entries(product.tabs.doseAndUse || product.tabs.doseAndDeployment).map(([key, value], idx) => (
                                                            <div key={idx} className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                                                                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                                </div>
                                                                <p className="text-lg font-bold text-slate-900">{value}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* SECTION 6: LAB TO INDUSTRY */}
                                            {product.tabs.labToIndustry && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        From Lab to Industry
                                                    </h2>
                                                    <div className="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-xl">
                                                        <p className="text-lg text-slate-800 font-medium leading-relaxed">
                                                            {product.tabs.labToIndustry}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* TAB 5: DEEP DIVE */}
                                    {activeTab === 'deepdive' && (
                                        <>
                                            {/* Deep Dive Infographic - Only for Coalorix */}
                                            {product.id === 'coalorix' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        In-Depth Analysis & Market Reality
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                                                        </div>
                                                    }>
                                                        <CoalorixDeepDive />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Deep Dive Infographic - Only for Ignitron D */}
                                            {product.id === 'ignitron-d' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        In-Depth Analysis & Market Reality
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronDDeepDive />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Deep Dive Infographic - Only for Lubritron */}
                                            {product.id === 'lubritron' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        In-Depth Analysis & Market Reality
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                                                        </div>
                                                    }>
                                                        <LubritronDeepDive />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* Deep Dive Infographic - Only for Ignitron P */}
                                            {product.id === 'ignitron-p' && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        In-Depth Analysis & Market Reality
                                                    </h2>
                                                    <Suspense fallback={
                                                        <div className="flex items-center justify-center py-20">
                                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                                                        </div>
                                                    }>
                                                        <IgnitronPDeepDive />
                                                    </Suspense>
                                                </div>
                                            )}

                                            {/* RESEARCH CONTENT: COAL REALITY (Text-based fallback for other products) */}
                                            {product.id !== 'coalorix' && product.id !== 'ignitron-d' && product.id !== 'lubritron' && product.id !== 'ignitron-p' && product.tabs.deepDive?.coalReality && (
                                                <div className="mb-24">
                                                    <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                                                        <Database className="text-emerald-600" size={24} />
                                                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                                            {product.tabs.deepDive.coalReality.title}
                                                        </h2>
                                                    </div>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                        <div>
                                                            <h3 className="text-3xl font-medium tracking-tight mb-8 text-black">Coal Powers the World</h3>
                                                            <div className="space-y-1 mb-8">
                                                                {product.tabs.deepDive.coalReality.stats.map((stat, idx) => (
                                                                    <div key={idx} className="group relative flex items-baseline justify-between py-5 border-b border-stone-200 hover:bg-stone-50 transition-colors px-4 -mx-4 rounded">
                                                                        <span className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-emerald-600 transition-colors">{stat.label}</span>
                                                                        <span className="text-xl font-mono font-bold text-black tracking-tight">{stat.value}</span>
                                                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <p className="text-lg text-stone-600 font-medium leading-relaxed">
                                                                Global energy demands are rising. Despite the push for renewables, coal remains the baseload provider for the majority of the developing world.
                                                            </p>
                                                        </div>
                                                        <div className="bg-stone-50 p-8 border border-stone-200 rounded-lg">
                                                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-emerald-600">Key Intelligence</h3>
                                                            <ul className="space-y-6">
                                                                {product.tabs.deepDive.coalReality.keyPoints.map((point, idx) => (
                                                                    <li key={idx} className="flex items-start gap-4 text-base font-medium text-stone-700">
                                                                        <div className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                                                        {point}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* RESEARCH CONTENT: DIESEL REALITY (for Ignitron D) */}
                                            {product.tabs.deepDive?.dieselReality && (
                                                <div className="mb-24">
                                                    <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                                                        <Activity className="text-blue-600" size={24} />
                                                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                                            {product.tabs.deepDive.dieselReality.title}
                                                        </h2>
                                                    </div>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                                        <div>
                                                            <h3 className="text-3xl font-medium tracking-tight mb-8 text-black">Diesel Powers Transport</h3>
                                                            <div className="space-y-1 mb-8">
                                                                {product.tabs.deepDive.dieselReality.stats.map((stat, idx) => (
                                                                    <div key={idx} className="group relative flex items-baseline justify-between py-5 border-b border-stone-200 hover:bg-stone-50 transition-colors px-4 -mx-4 rounded">
                                                                        <span className="text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-blue-600 transition-colors">{stat.label}</span>
                                                                        <span className="text-xl font-mono font-bold text-black tracking-tight">{stat.value}</span>
                                                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="bg-stone-50 p-8 border border-stone-200 rounded-lg">
                                                            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-blue-600">Market Intelligence</h3>
                                                            <ul className="space-y-6">
                                                                {product.tabs.deepDive.dieselReality.keyPoints.map((point, idx) => (
                                                                    <li key={idx} className="flex items-start gap-4 text-base font-medium text-stone-700">
                                                                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                                                        {point}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* RESEARCH CONTENT: NEXERG ANALYSIS (for Coalorix) */}
                                            {product.tabs.deepDive?.nexergAnalysis && (
                                                <div className="mb-24">
                                                    <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                                                        <BarChart2 className={product.id === 'coalorix' ? 'text-orange-500' : 'text-emerald-600'} size={24} />
                                                        <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                                            Analysis
                                                        </h2>
                                                    </div>
                                                    <div className="bg-white border border-stone-200 p-8 rounded-lg shadow-sm">
                                                        <div className="mb-8">
                                                            <h3 className="text-3xl font-medium tracking-tight mb-4 text-black">
                                                                {product.tabs.deepDive.nexergAnalysis.title}
                                                            </h3>
                                                            <p className="text-xl text-stone-500 leading-relaxed">
                                                                {product.tabs.deepDive.nexergAnalysis.description}
                                                            </p>
                                                        </div>

                                                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                                                            {/* Graph Container */}
                                                            <div className="xl:col-span-8 bg-stone-50 p-3 md:p-6 rounded border border-stone-200">
                                                                <NexergGraph data={product.tabs.deepDive.nexergAnalysis.data} />
                                                                <div className={`mt-6 p-4 text-sm font-mono ${product.id === 'coalorix'
                                                                    ? 'bg-orange-50 border border-orange-200 text-orange-700'
                                                                    : 'bg-emerald-50 border border-emerald-100 text-emerald-700'
                                                                    }`}>
                                                                    &gt; SYSTEM DIAGNOSTIC: {product.tabs.deepDive.nexergAnalysis.keyTakeaway}
                                                                </div>
                                                            </div>

                                                            {/* Insights Sidebar */}
                                                            <div className="xl:col-span-4 space-y-8">
                                                                <div>
                                                                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-2 mb-4">
                                                                        Key Findings
                                                                    </h3>
                                                                    {product.tabs.deepDive.nexergAnalysis.insights.map((insight, idx) => (
                                                                        <div key={idx} className="group mb-6 last:mb-0">
                                                                            <h4 className={`font-bold transition-colors mb-2 text-sm ${product.id === 'coalorix'
                                                                                ? 'text-orange-600 group-hover:text-orange-800'
                                                                                : 'text-emerald-600 group-hover:text-emerald-800'
                                                                                }`}>
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
                                                                        {product.tabs.deepDive.nexergAnalysis.systemBenefits.map((benefit, idx) => (
                                                                            <li key={idx} className="flex items-center gap-3 text-sm font-bold text-stone-700">
                                                                                <Check size={14} className={product.id === 'coalorix' ? 'text-orange-500' : 'text-emerald-600'} />
                                                                                {benefit}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* SECTION 7: TRANSITION TECHNOLOGY (Text-based fallback for other products) */}
                                            {product.id !== 'coalorix' && product.tabs.transitionTechnology && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        A Transition Technology
                                                    </h2>
                                                    <div className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl">
                                                        <p className="text-xl text-slate-800 font-bold leading-relaxed">
                                                            {product.tabs.transitionTechnology}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* SECTION 8: ENERGY REALITY (DETAILED) - MOVED TO BOTTOM (Text-based fallback for other products) */}
                                            {product.id !== 'coalorix' && product.id !== 'ignitron-d' && product.id !== 'lubritron' && product.tabs.energyReality && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        The Energy Reality
                                                    </h2>
                                                    <div className="space-y-6">
                                                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                                                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Global Scale</div>
                                                            <p className="text-lg text-slate-800 font-medium leading-relaxed">
                                                                {product.tabs.energyReality.global}
                                                            </p>
                                                        </div>
                                                        <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl">
                                                            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">India Context</div>
                                                            <p className="text-lg text-slate-800 font-medium leading-relaxed">
                                                                {product.tabs.energyReality.india}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* SECTION 9: NATIONAL-SCALE IMPACT - MOVED TO BOTTOM */}
                                            {product.tabs.nationalScaleImpact && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        National-Scale Impact
                                                    </h2>
                                                    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                            {Object.entries(product.tabs.nationalScaleImpact).map(([key, value], idx) => (
                                                                <div key={idx} className="p-6 bg-white border border-blue-100 rounded-xl shadow-sm">
                                                                    <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                                    </div>
                                                                    <div className="text-2xl font-bold text-slate-900">{value}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <p className="text-sm text-slate-600 font-medium">
                                                            Based on national deployment scenarios with conservative efficiency estimates
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* SECTION 10: ECONOMIC IMPACT & ENERGY REALITY - MOVED TO BOTTOM (Text-based fallback for other products) */}
                                            {product.id !== 'coalorix' && product.id !== 'ignitron-d' && product.id !== 'lubritron' && (
                                                <div className="mb-12">
                                                    <div className={`p-8 border-l-4 ${theme.border.replace('border-', 'border-')} bg-stone-50 mb-12 rounded-r-xl`}>
                                                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                            <Activity className={theme.text} /> Economic Impact
                                                        </h3>
                                                        <p className="text-lg text-stone-700 font-medium leading-relaxed mb-6">
                                                            {product.tabs.deepDive.math}
                                                        </p>
                                                        <p className="text-sm uppercase tracking-widest text-stone-500 font-bold">
                                                            Validated by Third-Party Audit
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                            <Layers className={theme.text} /> Energy Reality
                                                        </h3>
                                                        <p className="text-lg text-stone-600 font-medium leading-relaxed">
                                                            {product.tabs.deepDive.context}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* SECTION 11: TRUE COST - MOVED TO BOTTOM (included in infographic for Coalorix, Ignitron D & Lubritron) */}
                                            {product.id !== 'coalorix' && product.id !== 'ignitron-d' && product.id !== 'lubritron' && product.tabs.trueCost && (
                                                <div className="mb-24">
                                                    <h2 className={`text-xs font-bold uppercase tracking-widest mb-8 ${theme.text} border-b border-stone-200 pb-2 inline-block`}>
                                                        {product.tabs.trueCost.title}
                                                    </h2>
                                                    <div className="space-y-6">
                                                        <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                                            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Global Impact</div>
                                                            <p className="text-lg text-slate-800 font-medium leading-relaxed">
                                                                {product.tabs.trueCost.global}
                                                            </p>
                                                        </div>
                                                        <div className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
                                                            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">India Context</div>
                                                            <p className="text-lg text-slate-800 font-medium leading-relaxed">
                                                                {product.tabs.trueCost.india}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Actions & Image */}
                        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 self-start">
                            {product.image && (
                                <div className="aspect-square bg-stone-100 overflow-hidden relative group border border-stone-200 shadow-2xl rounded-2xl">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                                    <div className="absolute bottom-6 left-6 text-white z-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-white/20">
                                            <Zap size={12} fill="currentColor" /> R&D Proven
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ROI Snapshot Widget - Only for Coalorix */}
                            {/* {product.id === 'coalorix' && <ROISnapshotWidget />} */}

                            {/* ROI Snapshot Widget - Only for Ignitron D */}
                            {product.id === 'ignitron-d' && <IgnitronDROISnapshotWidget />}

                            {/* ROI Snapshot Widget - Only for Lubritron */}
                            {product.id === 'lubritron' && <LubritronROISnapshotWidget />}

                            {/* ROI Snapshot Widget - Only for Ignitron P */}
                            {product.id === 'ignitron-p' && <IgnitronPROISnapshotWidget />}

                            <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800">
                                <h3 className="text-xl font-bold mb-2">Pilot Ready Product</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                                    Ready to integrate these specs into your industrial infrastructure?
                                </p>
                                <Link to="/contact" className={`w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-all flex items-center justify-center gap-2 mb-4 rounded-lg`}>
                                    Start Pilot Trial <ArrowRight size={16} />
                                </Link>
                                <button className="w-full py-4 border border-slate-700 text-white font-bold uppercase tracking-widest hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center justify-center gap-2 rounded-lg">
                                    Download Technical Data <Download size={16} />
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </div>

        </div>
    );
};

export default ProductDetail;
