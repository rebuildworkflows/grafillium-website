import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Zap, Factory, Truck, Droplets, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const JointSolutions = () => {
    const [activeId, setActiveId] = useState('transport-combo');
    const contentRef = useRef(null);

    // Auto-scroll to content on mobile when tab changes
    useEffect(() => {
        if (window.innerWidth < 1024 && contentRef.current) {
            // Small delay to let animation start
            setTimeout(() => {
                contentRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        }
    }, [activeId]);

    const solutions = [
        {
            id: 'transport-combo',
            title: 'Transport Efficiency Stack',
            subtitle: 'Ignitron D + Lubritron',
            description: 'Complete fleet optimization combining fuel combustion enhancement with friction reduction for maximum operational efficiency.',
            icon: Truck,
            color: 'blue',
            theme: {
                primary: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                accent: 'bg-blue-500',
                hover: 'hover:bg-blue-50'
            },
            products: [
                { name: 'Ignitron D', role: 'Combustion Optimizer', contribution: '12-15% fuel savings' },
                { name: 'Lubritron', role: 'Friction Modifier', contribution: '8-10% efficiency gain' }
            ],
            combinedBenefits: [
                'Combined Fuel Savings: 15-25%',
                'Extended Engine Life: 40% wear reduction',
                'Emission Reduction: 40-50% PM reduction',
                'Maintenance Costs: 30% reduction',
                'ROI: Payback in <1 month'
            ],
            metrics: {
                savings: '₹7.5-9 Cr',
                savingsLabel: 'Annual Savings (100-truck fleet)',
                roi: '<30 Days',
                roiLabel: 'Payback Period',
                impact: '15-25%',
                impactLabel: 'Total Fuel Savings'
            },
            cta: {
                primary: { text: 'View Full Case Study', link: '/case-studies/transport' },
                secondary: { text: 'Calculate ROI', link: '/roi-calculator' }
            }
        },
        {
            id: 'industrial-power',
            title: 'Industrial Power Stack',
            subtitle: 'Coalorix + Ignitron P',
            description: 'Dual-fuel optimization for industries using coal-fired boilers and diesel gensets for backup power.',
            icon: Factory,
            color: 'orange',
            theme: {
                primary: 'text-orange-600',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                accent: 'bg-orange-500',
                hover: 'hover:bg-orange-50'
            },
            products: [
                { name: 'Coalorix', role: 'Coal Combustion Enhancer', contribution: '3-8% coal savings' },
                { name: 'Ignitron P', role: 'Diesel Genset Optimizer', contribution: '10-15% diesel savings' }
            ],
            combinedBenefits: [
                'Primary Power: 3-8% coal cost reduction',
                'Backup Power: 10-15% diesel savings',
                'Emission Compliance: 20-35% PM reduction',
                'Total Energy Costs: 5-15% reduction',
                'Zero Infrastructure Changes'
            ],
            metrics: {
                savings: '₹2-5 Cr',
                savingsLabel: 'Annual Savings (Medium Industry)',
                roi: '6-8 Weeks',
                roiLabel: 'Payback Period',
                impact: '5-15%',
                impactLabel: 'Energy Cost Reduction'
            },
            cta: {
                primary: { text: 'Industry Solutions', link: '/industries/industrial' },
                secondary: { text: 'Technical Brief', link: '/contact' }
            }
        },
        {
            id: 'complete-combustion',
            title: 'Complete Combustion Suite',
            subtitle: 'All Ignitron Products',
            description: 'Comprehensive fuel optimization across all fuel types - diesel, petrol, CNG, and industrial fuels.',
            icon: Flame,
            color: 'red',
            theme: {
                primary: 'text-red-600',
                bg: 'bg-red-50',
                border: 'border-red-200',
                accent: 'bg-red-500',
                hover: 'hover:bg-red-50'
            },
            products: [
                { name: 'Ignitron D', role: 'Diesel Optimization', contribution: '12-15% savings' },
                { name: 'Ignitron P', role: 'Petrol/CNG Enhancement', contribution: '10-15% savings' },
                { name: 'Coalorix', role: 'Coal/Heavy Fuel', contribution: '3-8% savings' }
            ],
            combinedBenefits: [
                'Universal Deployment: All fuel types covered',
                'Fleet Flexibility: Mixed fuel fleets optimized',
                'Centralized Management: Single vendor solution',
                'Consistent Performance: Proven technology',
                'Scalable Implementation: Start small, expand fast'
            ],
            metrics: {
                savings: '₹10-15 Cr',
                savingsLabel: 'Annual Savings (Large Fleet)',
                roi: '<45 Days',
                roiLabel: 'Average Payback',
                impact: '10-20%',
                impactLabel: 'Avg Fuel Savings'
            },
            cta: {
                primary: { text: 'Enterprise Solutions', link: '/contact' },
                secondary: { text: 'Product Comparison', link: '/products' }
            }
        }
    ];

    const activeSolution = solutions.find(s => s.id === activeId) || solutions[0];
    const Icon = activeSolution.icon;

    return (
        <div className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-6 shadow-sm">
                        Optimized Combinations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Joint <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Solution Packages</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Maximize impact with scientifically optimized product combinations. Each package is designed to address multiple efficiency vectors simultaneously.
                    </p>
                </div>

                {/* Mobile-Optimized Tab Navigation */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                        {solutions.map((solution) => {
                            const isActive = activeId === solution.id;
                            const SolutionIcon = solution.icon;

                            return (
                                <button
                                    key={solution.id}
                                    onClick={() => setActiveId(solution.id)}
                                    className={`
                                        relative px-6 py-4 rounded-xl transition-all duration-300
                                        flex items-center gap-3 text-left sm:text-center sm:flex-col sm:gap-2
                                        border-2 shadow-sm
                                        ${isActive
                                            ? `${solution.theme.bg} ${solution.theme.border} shadow-lg scale-[1.02]`
                                            : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                                        }
                                    `}
                                >
                                    <div className={`
                                        p-2 rounded-lg transition-colors
                                        ${isActive ? solution.theme.accent : 'bg-slate-100'}
                                    `}>
                                        <SolutionIcon
                                            size={20}
                                            className={isActive ? 'text-white' : 'text-slate-400'}
                                        />
                                    </div>
                                    <div className="flex-1 sm:flex-none">
                                        <div className={`
                                            text-sm font-bold transition-colors
                                            ${isActive ? solution.theme.primary : 'text-slate-700'}
                                        `}>
                                            {solution.subtitle}
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                                            {solution.products.length} Products
                                        </div>
                                    </div>

                                    {/* Mobile indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="mobileIndicator"
                                            className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full ${solution.theme.accent} sm:hidden`}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Scroll hint for mobile */}
                    <div className="lg:hidden text-center mt-4">
                        <span className="text-xs text-slate-400 flex items-center justify-center gap-2">
                            <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                ↓
                            </motion.div>
                            Scroll to see details
                        </span>
                    </div>
                </div>

                {/* Content Area with ref for auto-scroll */}
                <div ref={contentRef} className="scroll-mt-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden"
                        >
                            {/* Accent Bar */}
                            <div className={`h-2 w-full ${activeSolution.theme.accent}`} />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                                {/* Left: Product Info */}
                                <div className="p-8 md:p-12 lg:border-r border-slate-100 relative">
                                    {/* Background Icon */}
                                    <Icon
                                        size={200}
                                        className={`absolute top-8 right-8 opacity-[0.03] pointer-events-none ${activeSolution.theme.primary}`}
                                    />

                                    <div className="relative z-10">
                                        {/* Badge */}
                                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${activeSolution.theme.border} ${activeSolution.theme.bg} mb-6`}>
                                            <div className={`w-2 h-2 rounded-full ${activeSolution.theme.accent} animate-pulse`} />
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activeSolution.theme.primary}`}>
                                                {activeSolution.products.length}-Product Stack
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                                            {activeSolution.title}
                                        </h3>
                                        <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                            {activeSolution.description}
                                        </p>

                                        {/* Product Components */}
                                        <div className="mb-8">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                                                Included Products
                                            </h4>
                                            <div className="space-y-3">
                                                {activeSolution.products.map((product, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`p-4 rounded-xl border ${activeSolution.theme.border} ${activeSolution.theme.bg} bg-opacity-50`}
                                                    >
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex-1">
                                                                <div className="font-bold text-slate-900 mb-1">
                                                                    {product.name}
                                                                </div>
                                                                <div className="text-xs text-slate-500">
                                                                    {product.role}
                                                                </div>
                                                            </div>
                                                            <div className={`text-sm font-bold ${activeSolution.theme.primary} whitespace-nowrap`}>
                                                                {product.contribution}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Combined Benefits */}
                                        <div className="mb-8">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                                                Combined Benefits
                                            </h4>
                                            <ul className="space-y-3">
                                                {activeSolution.combinedBenefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className={`mt-0.5 p-1 rounded-full ${activeSolution.theme.bg}`}>
                                                            <Check size={12} className={activeSolution.theme.primary} strokeWidth={4} />
                                                        </div>
                                                        <span className="text-slate-700 font-medium text-sm leading-relaxed">
                                                            {benefit}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                to={activeSolution.cta.primary.link}
                                                className={`
                                                    flex-1 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider
                                                    bg-slate-900 text-white hover:bg-slate-800
                                                    flex items-center justify-center gap-2
                                                    transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5
                                                `}
                                            >
                                                {activeSolution.cta.primary.text}
                                                <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                to={activeSolution.cta.secondary.link}
                                                className={`
                                                    flex-1 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider
                                                    border-2 ${activeSolution.theme.border} ${activeSolution.theme.primary} ${activeSolution.theme.hover}
                                                    flex items-center justify-center gap-2
                                                    transition-all
                                                `}
                                            >
                                                {activeSolution.cta.secondary.text}
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Metrics */}
                                <div className={`${activeSolution.theme.bg} p-8 md:p-12 flex flex-col justify-center relative overflow-hidden`}>
                                    {/* Pattern Background */}
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{
                                            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
                                            backgroundSize: '24px 24px'
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div className="text-center mb-8">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                                                Expected Impact
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {[
                                                { value: activeSolution.metrics.savings, label: activeSolution.metrics.savingsLabel },
                                                { value: activeSolution.metrics.roi, label: activeSolution.metrics.roiLabel },
                                                { value: activeSolution.metrics.impact, label: activeSolution.metrics.impactLabel }
                                            ].map((metric, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 * idx }}
                                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-sm"
                                                >
                                                    <div className="text-center">
                                                        <div className={`text-4xl font-bold tracking-tight mb-2 ${activeSolution.theme.primary}`}>
                                                            {metric.value}
                                                        </div>
                                                        <div className="text-xs font-medium text-slate-600">
                                                            {metric.label}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Trust Badge */}
                                        <div className="mt-8 pt-6 border-t border-white/30 text-center">
                                            <div className="text-xs text-slate-500 font-medium">
                                                ✓ Proven Technology • ✓ Immediate Deployment • ✓ Zero Infrastructure Changes
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default JointSolutions;
