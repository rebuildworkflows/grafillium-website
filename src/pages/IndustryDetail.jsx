import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { solutionsContent } from '../data/solutions';
import { ArrowLeft, Check, ArrowRight, Zap, Target, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const IndustryDetail = () => {
    const { id } = useParams();

    // Map URL param to data key (e.g. 'thermal-power' -> 'thermal')
    const industryKey = Object.keys(solutionsContent.industries).find(
        key => solutionsContent.industries[key].id === id
    );

    const industry = industryKey ? solutionsContent.industries[industryKey] : null;

    if (!industry) {
        return <Navigate to="/solutions" replace />;
    }

    // Dynamic Theme Logic (Matches Solutions.jsx)
    const getTheme = (key) => {
        if (key === 'thermal') return {
            bg: 'bg-orange-950',
            text: 'text-orange-500',
            border: 'border-orange-500/30',
            gradient: 'from-orange-900/50 to-orange-950',
            statsText: 'text-orange-400'
        };
        if (key === 'transport') return {
            bg: 'bg-blue-950',
            text: 'text-blue-500',
            border: 'border-blue-500/30',
            gradient: 'from-blue-900/50 to-blue-950',
            statsText: 'text-blue-400'
        };
        // Default / Industrial
        return {
            bg: 'bg-emerald-950',
            text: 'text-emerald-500',
            border: 'border-emerald-500/30',
            gradient: 'from-emerald-900/50 to-emerald-950',
            statsText: 'text-emerald-400'
        };
    };

    const theme = getTheme(industryKey);

    return (
        <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* THEMED HEADER */}
            <section className={`pt-32 pb-24 px-6 ${theme.bg} border-b border-stone-800 relative overflow-hidden text-white`}>
                {/* Abstract Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-50 z-0`} />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <Link to="/solutions" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={14} /> Back to Hub
                    </Link>

                    <div className="max-w-4xl">
                        <span className={`inline-block px-3 py-1 mb-6 border ${theme.border} rounded-full text-[10px] font-bold uppercase tracking-widest ${theme.text} bg-black/20 backdrop-blur-md`}>
                            Sector Analysis
                        </span>
                        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none mb-8 text-white">
                            {industry.title}
                        </h1>
                        <p className="text-2xl md:text-3xl font-medium leading-tight text-stone-300">
                            {industry.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Challenges Grid */}
            <section className="py-24 px-6 border-b border-stone-200">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className={`text-xs font-bold uppercase tracking-widest mb-6 ${theme.text} w-fit pb-2`}>Key Challenges</h2>
                        <h3 className="text-3xl font-medium tracking-tight leading-tight mb-8">
                            Addressing critical inefficiencies in current infrastructure.
                        </h3>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industry.challenges?.map((challenge, idx) => (
                            <div key={idx} className="p-8 border border-stone-200 hover:border-black transition-colors bg-white group">
                                <span className={`block text-2xl font-bold text-stone-200 mb-4 group-hover:${theme.text} transition-colors`}>0{idx + 1}</span>
                                <h4 className="text-lg font-bold mb-2">{challenge.split(':')[0]}</h4>
                                <p className="text-stone-500 font-medium">{challenge.split(':')[1]}</p>
                            </div>
                        ))}
                        {/* Fallback for sectors (Industrial page) */}
                        {industry.sectors?.map((sector, idx) => (
                            <div key={idx} className="p-8 border border-stone-200 hover:border-black transition-colors bg-white">
                                <h4 className="text-lg font-bold mb-2">{sector.name}</h4>
                                <p className="text-black font-bold mb-1">Challenge: <span className="text-stone-500 font-medium">{sector.challenge}</span></p>
                                <p className={`${theme.text} font-bold`}>Benefit: {sector.benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
                {/* Subtle Theme Tint */}
                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${theme.gradient} opacity-20 pointer-events-none`} />

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <span className={`flex items-center gap-2 ${theme.text} font-bold uppercase tracking-widest text-xs mb-8`}>
                            <Zap size={14} /> Grafillium Approach
                        </span>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-none">
                            {industry.solution?.product ? `Deploying ${industry.solution.product}` : industry.solution?.approach || "Integrated Optimization"}
                        </h2>
                        {industry.solution?.mechanism && (
                            <p className="text-xl text-stone-400 leading-relaxed mb-8">
                                {industry.solution.mechanism}
                            </p>
                        )}
                        <Link to="/contact" className={`inline-flex px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors items-center gap-2`}>
                            Deploy Solution <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-medium mb-6 text-stone-300">Strategic Advantages</h3>
                        <ul className="space-y-4">
                            {industry.solution?.benefits?.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 border border-stone-800 bg-stone-900/50">
                                    <Check className={`${theme.text} shrink-0 mt-1`} size={20} />
                                    <span className="text-lg font-medium">{benefit}</span>
                                </li>
                            ))}
                            {industry.packages?.map((pkg, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 border border-stone-800 bg-stone-900/50">
                                    <Target className={`${theme.text} shrink-0 mt-1`} size={20} />
                                    <span className="text-lg font-medium">{pkg}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Impact / Stats */}
            <section className="py-24 px-6 border-b border-stone-200">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-xs font-bold uppercase tracking-widest mb-12 border-b border-black w-fit pb-2">Business Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {industry.impact?.economic && (
                            <div className="p-10 bg-stone-100 border-l-4 border-black">
                                <BarChart2 className="w-10 h-10 mb-6 text-black" />
                                <h3 className="text-2xl font-bold mb-4">Economic ROI</h3>
                                <div className="text-xl md:text-2xl font-bold text-black mb-2 leading-tight">
                                    {industry.impact.economic || industry.impact.fleet}
                                </div>
                                <p className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                    Verified Savings
                                </p>
                            </div>
                        )}
                        {industry.impact?.national && (
                            <div className="p-10 border border-stone-200">
                                <Target className={`w-10 h-10 mb-6 ${theme.text.replace('text-', 'text-')}`} />
                                <h3 className="text-2xl font-bold mb-4">Strategic Impact</h3>
                                <p className="text-xl leading-relaxed font-medium text-stone-600">
                                    {industry.impact.national}
                                </p>
                            </div>
                        )}
                        {industry.impact?.roi && (
                            <div className="p-10 border border-stone-200">
                                <Zap className={`w-10 h-10 mb-6 ${theme.text.replace('text-', 'text-')}`} />
                                <h3 className="text-2xl font-bold mb-4">Payback Period</h3>
                                <p className="text-xl leading-relaxed font-medium text-stone-600">
                                    {industry.impact.roi}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 text-center">
                <Link to="/contact" className="text-lg font-bold border-b-2 border-black hover:bg-black hover:text-white px-2 transition-all">
                    Request Assessment for {industry.title} →
                </Link>
            </section>

        </div>
    );
};

export default IndustryDetail;
