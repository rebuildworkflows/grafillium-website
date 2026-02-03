import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    TrendingUp,
    DollarSign,
    Globe2,
    Leaf,
    Target,
    Check,
    BarChart3,
    Award
} from 'lucide-react';
import { pipelineData } from '../data/pipeline';

const PipelineDetail = () => {
    const { id } = useParams();
    const item = pipelineData.find(p => p.id === id);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Technology Not Found</h1>
                    <Link to="/innovation" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        ← Back to Innovation Pipeline
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{item.name} - Innovation Pipeline - Grafillium</title>
                <meta name="description" content={item.text} />
            </Helmet>

            <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen">

                {/* Header */}
                <section className="pt-32 pb-16 px-6 border-b border-stone-200">
                    <div className="max-w-[1400px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link
                                to="/innovation"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-stone-600 mb-8 border-b border-black hover:border-stone-600 transition-colors"
                            >
                                <ArrowLeft size={16} /> Back to Pipeline
                            </Link>

                            <div className="flex items-center gap-3 mb-6 flex-wrap">
                                <span className="inline-block px-3 py-1 border border-stone-300 text-stone-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    {item.sector}
                                </span>
                                {item.brand && (
                                    <span className="inline-block px-3 py-1 border border-stone-300 text-stone-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        {item.brand}
                                    </span>
                                )}
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-xs font-mono font-medium text-stone-600">{item.status}</span>
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight text-black mb-6">
                                {item.name}
                            </h1>

                            {item.tagline && (
                                <p className="text-2xl md:text-3xl text-stone-500 font-medium leading-relaxed max-w-4xl mb-8">
                                    {item.tagline}
                                </p>
                            )}

                            <p className="text-xl text-stone-600 font-medium leading-relaxed max-w-4xl">
                                {item.text}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Executive Overview - For Bitumax */}
                {item.executiveOverview && (
                    <section className="py-16 px-6 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">Executive Overview</h2>

                            <div className="space-y-6">
                                <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                    <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                        Definition
                                    </div>
                                    <p className="text-lg text-stone-700 font-medium leading-relaxed">
                                        {item.executiveOverview.definition}
                                    </p>
                                </div>

                                <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                    <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                        Problem Statement
                                    </div>
                                    <p className="text-lg text-stone-700 font-medium leading-relaxed">
                                        {item.executiveOverview.problemStatement}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Key Benefits */}
                <section className="py-16 px-6 border-b border-stone-200 bg-stone-50">
                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-3xl font-medium tracking-tighter mb-8">Key Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.keyBenefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-6 bg-white border border-stone-200 hover:border-black transition-colors group"
                                >
                                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                                        <Check size={12} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={4} />
                                    </div>
                                    <span className="text-base font-bold text-black">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Economic Impact */}
                <section className="py-16 px-6 border-b border-stone-200">
                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-3xl font-medium tracking-tighter mb-8">Economic Impact</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* India Impact */}
                            <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                <div className="text-4xl mb-3">🇮🇳</div>
                                <h3 className="text-xl font-bold text-black mb-4">India</h3>
                                <div className="text-4xl font-bold tracking-tighter text-black mb-6">
                                    {item.economicImpact.india.annual || item.economicImpact.india.total}
                                </div>
                                {item.economicImpact.india.breakdown && (
                                    <div className="space-y-3">
                                        <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                            Breakdown
                                        </div>
                                        {Object.entries(item.economicImpact.india.breakdown).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center pb-2 border-b border-stone-200">
                                                <span className="text-sm font-medium text-stone-600 capitalize">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                </span>
                                                <span className="text-sm font-bold text-black">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Global Impact */}
                            <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                <div className="text-4xl mb-3">🌍</div>
                                <h3 className="text-xl font-bold text-black mb-4">Global</h3>
                                <div className="text-4xl font-bold tracking-tighter text-black mb-6">
                                    {item.economicImpact.global.annual || item.economicImpact.global.total}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Carbon Footprint */}
                <section className="py-16 px-6 bg-stone-50 border-b border-stone-200">
                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-3xl font-medium tracking-tighter mb-8">Carbon Footprint Reduction</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                <div className="text-2xl mb-3">🇮🇳</div>
                                <h3 className="text-xl font-bold text-black mb-4">India</h3>
                                <p className="text-lg font-bold text-stone-800 mb-2">
                                    {typeof item.carbonFootprint.india === 'string'
                                        ? item.carbonFootprint.india
                                        : item.carbonFootprint.india.annual}
                                </p>
                                {item.carbonFootprint.india.description && (
                                    <p className="text-sm text-stone-500 font-medium mt-2">
                                        {item.carbonFootprint.india.description}
                                    </p>
                                )}
                            </div>

                            <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                <div className="text-2xl mb-3">🌍</div>
                                <h3 className="text-xl font-bold text-black mb-4">Global</h3>
                                <p className="text-lg font-bold text-stone-800">
                                    {typeof item.carbonFootprint.global === 'string'
                                        ? item.carbonFootprint.global
                                        : item.carbonFootprint.global.reduction || item.carbonFootprint.global.contribution}
                                </p>
                                {item.carbonFootprint.global.contribution && (
                                    <p className="text-sm text-stone-500 font-medium mt-2">
                                        {item.carbonFootprint.global.contribution}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* India Impact Table - For Bitumax */}
                {item.indiaImpactTable && (
                    <section className="py-16 px-6 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">India - Consolidated Impact Table</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white border border-stone-200">
                                    <thead className="bg-stone-50">
                                        <tr>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-stone-500 border-b border-stone-200">
                                                Benefit Area
                                            </th>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-stone-500 border-b border-stone-200">
                                                Annual Savings (₹ Crore)
                                            </th>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-stone-500 border-b border-stone-200">
                                                Reduction vs Standard Bitumen
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.indiaImpactTable.map((row, idx) => (
                                            <tr
                                                key={idx}
                                                className={`${row.benefitArea === "TOTAL IMPACT"
                                                        ? "bg-stone-100 font-bold"
                                                        : "hover:bg-stone-50"
                                                    } transition-colors border-b border-stone-100`}
                                            >
                                                <td className="p-4 text-base font-bold text-black">
                                                    {row.benefitArea}
                                                </td>
                                                <td className="p-4 text-lg font-bold text-black">
                                                    {row.annualSavings}
                                                </td>
                                                <td className="p-4 text-base font-bold text-emerald-700">
                                                    {row.reduction}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                {/* Global Impact Table - For Bitumax */}
                {item.globalImpactTable && (
                    <section className="py-16 px-6 bg-stone-50 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">Global - Consolidated Impact Table</h2>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white border border-stone-200">
                                    <thead className="bg-stone-50">
                                        <tr>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-stone-500 border-b border-stone-200">
                                                Benefit Area
                                            </th>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-stone-500 border-b border-stone-200">
                                                Annual Savings (USD Billion)
                                            </th>
                                            <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-stone-500 border-b border-stone-200">
                                                Reduction vs Standard
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.globalImpactTable.map((row, idx) => (
                                            <tr
                                                key={idx}
                                                className={`${row.benefitArea === "TOTAL IMPACT"
                                                        ? "bg-stone-100 font-bold"
                                                        : "hover:bg-stone-50"
                                                    } transition-colors border-b border-stone-100`}
                                            >
                                                <td className="p-4 text-base font-bold text-black">
                                                    {row.benefitArea}
                                                </td>
                                                <td className="p-4 text-lg font-bold text-black">
                                                    {row.annualSavings}
                                                </td>
                                                <td className="p-4 text-base font-bold text-emerald-700">
                                                    {row.reduction}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                {/* India Context - Detailed Benefits for Bitumax */}
                {item.indiaContext && (
                    <section className="py-16 px-6 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-12">India Context - Detailed Benefits</h2>

                            <div className="space-y-8">
                                {/* Extended Lifespan */}
                                {item.indiaContext.extendedLifespan && (
                                    <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Extended Road Lifespan & Reduced Downtime
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    The Problem
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.indiaContext.extendedLifespan.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    The Bitumax Solution
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.extendedLifespan.solution.map((sol, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{sol}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.extendedLifespan.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-stone-700">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4 border-t border-stone-200">
                                                <div className="text-2xl font-bold tracking-tighter text-black">
                                                    {item.indiaContext.extendedLifespan.savings}
                                                </div>
                                                <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                                                    Annual Savings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Safer Roads */}
                                {item.indiaContext.saferRoads && (
                                    <div className="p-8 border border-stone-200 hover:border-black transition-colors bg-stone-50">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Safer Roads & Reduced Human/Economic Loss
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    The Problem
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.indiaContext.saferRoads.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    The Bitumax Solution
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.saferRoads.solution.map((sol, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{sol}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.saferRoads.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-stone-700">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Fuel Efficiency & Reduced Pollution */}
                                {item.indiaContext.fuelEfficiency && (
                                    <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Fuel Efficiency & Reduced Pollution
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    The Problem
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.indiaContext.fuelEfficiency.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    The Bitumax Solution
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.fuelEfficiency.solution.map((sol, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{sol}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.fuelEfficiency.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-stone-700">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Maintenance Savings */}
                                {item.indiaContext.maintenanceSavings && (
                                    <div className="p-8 border border-stone-200 hover:border-black transition-colors bg-stone-50">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Maintenance Budget Freed for Expansion
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    The Problem
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.indiaContext.maintenanceSavings.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    The Bitumax Solution
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.maintenanceSavings.solution.map((sol, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{sol}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.maintenanceSavings.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-stone-700">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Carbon Reduction */}
                                {item.indiaContext.carbonReduction && (
                                    <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Carbon Reduction & ESG Alignment
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    The Problem
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.indiaContext.carbonReduction.problem}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    The Bitumax Solution
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.carbonReduction.solution.map((sol, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{sol}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.indiaContext.carbonReduction.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-emerald-600 rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-stone-700">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Global Context - Detailed Benefits for Bitumax */}
                {item.globalContext && (
                    <section className="py-16 px-6 bg-stone-50 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-12">Global Context - Detailed Benefits</h2>

                            <div className="space-y-8">
                                {/* Extended Lifespan */}
                                {item.globalContext.extendedLifespan && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Extended Road Lifespan & Lifecycle Savings
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    Scope
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.globalContext.extendedLifespan.scope}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.globalContext.extendedLifespan.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4 border-t border-stone-200">
                                                <div className="text-2xl font-bold tracking-tighter text-black">
                                                    {item.globalContext.extendedLifespan.savings}
                                                </div>
                                                <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                                                    Annual Savings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Accident Reduction */}
                                {item.globalContext.accidentReduction && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Accident Reduction & Lives Saved
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    Scope
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.globalContext.accidentReduction.scope}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.globalContext.accidentReduction.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4 border-t border-stone-200">
                                                <div className="text-2xl font-bold tracking-tighter text-black">
                                                    {item.globalContext.accidentReduction.savings}
                                                </div>
                                                <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                                                    Annual Savings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Fuel Efficiency */}
                                {item.globalContext.fuelEfficiency && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Fuel Efficiency & Emission Cuts
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    Scope
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.globalContext.fuelEfficiency.scope}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.globalContext.fuelEfficiency.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4 border-t border-stone-200">
                                                <div className="text-2xl font-bold tracking-tighter text-black">
                                                    {item.globalContext.fuelEfficiency.savings}
                                                </div>
                                                <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                                                    Annual Savings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Maintenance Savings */}
                                {item.globalContext.maintenanceSavings && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Maintenance Budget Optimization
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    Scope
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.globalContext.maintenanceSavings.scope}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.globalContext.maintenanceSavings.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4 border-t border-stone-200">
                                                <div className="text-2xl font-bold tracking-tighter text-black">
                                                    {item.globalContext.maintenanceSavings.savings}
                                                </div>
                                                <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                                                    Annual Savings
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Carbon Reduction */}
                                {item.globalContext.carbonReduction && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <h3 className="text-xl font-bold text-black mb-6">
                                            Carbon Reduction & Compliance
                                        </h3>
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                                    Scope
                                                </div>
                                                <p className="text-base text-stone-700 font-medium leading-relaxed">
                                                    {item.globalContext.carbonReduction.scope}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
                                                    Impact
                                                </div>
                                                <ul className="space-y-2">
                                                    {item.globalContext.carbonReduction.impact.map((imp, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                                                            <span className="text-sm font-bold text-black">{imp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="pt-4 border-t border-stone-200">
                                                <div className="text-2xl font-bold tracking-tighter text-black">
                                                    {item.globalContext.carbonReduction.savings}
                                                </div>
                                                <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                                                    Annual Savings (Carbon pricing & compliance)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Strategic Value */}
                {item.strategicValue && (
                    <section className="py-16 px-6 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">Strategic Value</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {item.strategicValue.map((value, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 border border-stone-200 hover:border-black transition-colors group">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                                            <Check size={12} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={4} />
                                        </div>
                                        <span className="text-base font-bold text-black">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Market Size */}
                {item.marketSize && (
                    <section className="py-16 px-6 bg-stone-50 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">Market Size</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {item.marketSize.india && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <div className="text-3xl mb-3">🇮🇳</div>
                                        <h3 className="text-xl font-bold text-black mb-4">India</h3>
                                        <p className="text-base text-stone-700 font-medium leading-relaxed">
                                            {item.marketSize.india}
                                        </p>
                                    </div>
                                )}

                                {item.marketSize.global && (
                                    <div className="p-8 bg-white border border-stone-200 hover:border-black transition-colors">
                                        <div className="text-3xl mb-3">🌍</div>
                                        <h3 className="text-xl font-bold text-black mb-4">Global</h3>
                                        <p className="text-base text-stone-700 font-medium leading-relaxed">
                                            {item.marketSize.global}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Target Applications / Industries */}
                {(item.targetApplications || item.targetIndustries) && (
                    <section className="py-16 px-6 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">
                                {item.targetApplications ? 'Target Applications' : 'Target Industries'}
                            </h2>

                            {item.targetApplications && typeof item.targetApplications === 'string' && (
                                <div className="p-8 border border-stone-200 hover:border-black transition-colors">
                                    <p className="text-lg text-stone-700 font-medium leading-relaxed">
                                        {item.targetApplications}
                                    </p>
                                </div>
                            )}

                            {item.targetIndustries && Array.isArray(item.targetIndustries) && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.targetIndustries.map((industry, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-6 border border-stone-200 hover:border-black transition-colors group">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                                                <Check size={12} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={4} />
                                            </div>
                                            <span className="text-base font-bold text-black">{industry}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Competitive Advantages (for some products) */}
                {item.competitiveAdvantages && (
                    <section className="py-16 px-6 bg-stone-50 border-b border-stone-200">
                        <div className="max-w-[1400px] mx-auto">
                            <h2 className="text-3xl font-medium tracking-tighter mb-8">Competitive Advantages</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {item.competitiveAdvantages.map((advantage, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-stone-200 hover:border-black transition-colors group">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                                            <Check size={12} className="text-emerald-700 group-hover:text-white transition-colors" strokeWidth={4} />
                                        </div>
                                        <span className="text-base font-bold text-black">{advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-24 text-center border-t border-stone-200 bg-stone-50">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
                            Interested in {item.name}?
                        </h2>
                        <p className="text-lg text-stone-600 font-medium max-w-2xl mx-auto mb-10">
                            Contact us to discuss pilot programs, partnerships, or to learn more about this technology.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="text-lg font-bold border-b-2 border-black hover:bg-black hover:text-white px-1 transition-all"
                            >
                                Get in Touch →
                            </Link>
                            <Link
                                to="/innovation"
                                className="text-lg font-bold text-stone-500 hover:text-black border-b-2 border-transparent hover:border-black px-1 transition-all"
                            >
                                View All Technologies
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default PipelineDetail;
