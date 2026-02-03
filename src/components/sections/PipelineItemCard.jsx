import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, ExternalLink, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PipelineItemCard({ item, idx, linkMode = false }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`group p-8 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden ${linkMode ? 'cursor-pointer' : ''}`}>
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layers size={80} />
            </div>

            {/* Header */}
            <div className="mb-6 relative z-10">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        {item.sector}
                    </span>
                    {item.brand && (
                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${item.brand.includes('Nexerg')
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-teal-100 text-teal-700'
                            }`}>
                            {item.brand}
                        </span>
                    )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h3>
                {item.tagline && (
                    <p className="text-sm text-slate-600 italic mb-3">{item.tagline}</p>
                )}
                {item.oneLine && (
                    <p className="text-sm font-bold text-slate-800 mb-3">{item.oneLine}</p>
                )}
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                    <span className="text-xs font-mono font-medium text-indigo-500">{item.status}</span>
                </div>
            </div>

            {/* Main Description */}
            <p className="text-slate-600 leading-relaxed text-sm mb-6 relative z-10">
                {item.text}
            </p>

            {/* Key Benefits (Always Visible) */}
            {item.keyBenefits && (
                <div className="mb-6 relative z-10">
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">Key Benefits</div>
                        <div className="space-y-2">
                            {item.keyBenefits.map((benefit, bidx) => (
                                <div key={bidx} className="flex items-start gap-2 text-sm text-slate-700">
                                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Quick Stats (Always Visible) */}
            <div className="space-y-3 mb-6 relative z-10">
                {item.economicImpact && (
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">Economic Impact</div>
                        <div className="text-sm text-slate-700 space-y-1">
                            {(item.economicImpact.india?.annual || item.economicImpact.india?.total) && (
                                <div className="font-semibold text-blue-900">
                                    🇮🇳 India: {item.economicImpact.india.annual || item.economicImpact.india.total}
                                </div>
                            )}
                            {(item.economicImpact.global?.annual || item.economicImpact.global?.total) && (
                                <div className="font-semibold text-blue-900">
                                    🌍 Global: {item.economicImpact.global.annual || item.economicImpact.global.total}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {item.carbonFootprint && (
                    <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg">
                        <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Carbon Impact</div>
                        <div className="text-sm text-slate-700 space-y-2">
                            <div>
                                <span className="font-bold">🇮🇳 India:</span>{' '}
                                {typeof item.carbonFootprint.india === 'string'
                                    ? item.carbonFootprint.india
                                    : item.carbonFootprint.india.annual}
                            </div>
                            <div>
                                <span className="font-bold">🌍 Global:</span>{' '}
                                {typeof item.carbonFootprint.global === 'string'
                                    ? item.carbonFootprint.global
                                    : item.carbonFootprint.global.reduction || item.carbonFootprint.global.contribution}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Expandable "View More" Section */}
            {item.viewMore && !linkMode && (
                <div className="relative z-10">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mb-6"
                            >
                                <div className="space-y-3 pt-2">
                                    {/* Detailed Economic Breakdown */}
                                    {item.economicImpact?.india?.breakdown && (
                                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
                                                India - Economic Breakdown
                                            </div>
                                            <div className="space-y-2 text-sm text-slate-700">
                                                {Object.entries(item.economicImpact.india.breakdown).map(([key, value]) => (
                                                    <div key={key} className="flex justify-between">
                                                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                                        <span className="font-semibold">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Market Size */}
                                    {item.marketSize && (
                                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-2">Market Size</div>
                                            <div className="text-sm text-slate-700 space-y-1">
                                                {typeof item.marketSize.india === 'string' && (
                                                    <div>🇮🇳 India: {item.marketSize.india}</div>
                                                )}
                                                {typeof item.marketSize.global === 'string' && (
                                                    <div>🌍 Global: {item.marketSize.global}</div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Target Applications */}
                                    {item.targetApplications && (
                                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">Target Applications</div>
                                            <p className="text-sm text-slate-700">{item.targetApplications}</p>
                                        </div>
                                    )}

                                    {/* Target Industries */}
                                    {item.targetIndustries && (
                                        <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">Target Industries</div>
                                            <div className="grid grid-cols-1 gap-2">
                                                {item.targetIndustries.map((industry, iidx) => (
                                                    <div key={iidx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <Check size={14} className="text-cyan-600 shrink-0 mt-0.5" />
                                                        <span>{industry}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Key Technologies */}
                                    {item.keyTechnologies && (
                                        <div className="space-y-3">
                                            {item.keyTechnologies.hamr && (
                                                <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                                                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-2">
                                                        {item.keyTechnologies.hamr.name || 'HAMR Technology'}
                                                    </div>
                                                    <p className="text-sm text-slate-700 mb-2">
                                                        {item.keyTechnologies.hamr.desc || item.keyTechnologies.hamr}
                                                    </p>
                                                    {item.keyTechnologies.hamr.type && (
                                                        <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded">
                                                            {item.keyTechnologies.hamr.type}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            {item.keyTechnologies.hgmc && (
                                                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                                                    <div className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">
                                                        {item.keyTechnologies.hgmc.name || 'HGMC Technology'}
                                                    </div>
                                                    <p className="text-sm text-slate-700 mb-2">
                                                        {item.keyTechnologies.hgmc.desc || item.keyTechnologies.hgmc}
                                                    </p>
                                                    {item.keyTechnologies.hgmc.type && (
                                                        <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">
                                                            {item.keyTechnologies.hgmc.type}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Competitive Advantages */}
                                    {item.competitiveAdvantages && (
                                        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-3">Competitive Advantages</div>
                                            <div className="space-y-2">
                                                {item.competitiveAdvantages.map((adv, aidx) => (
                                                    <div key={aidx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <Check size={14} className="text-indigo-600 shrink-0 mt-0.5" />
                                                        <span>{adv}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Hidden Costs */}
                                    {item.hiddenCosts && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-red-700 mb-2">
                                                {item.hiddenCosts.title || 'Hidden Costs Avoided'}
                                            </div>
                                            <div className="text-sm text-slate-700 space-y-1">
                                                {item.hiddenCosts.india && (
                                                    <div className="font-semibold text-red-900">🇮🇳 India: {item.hiddenCosts.india}</div>
                                                )}
                                                {item.hiddenCosts.global && (
                                                    <div className="font-semibold text-red-900">🌍 Global: {item.hiddenCosts.global}</div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Safety Impact */}
                                    {item.safetyImpact && (
                                        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-2">Safety Impact</div>
                                            <div className="text-sm text-slate-700 space-y-1">
                                                {item.safetyImpact.india && <div>🇮🇳 {item.safetyImpact.india}</div>}
                                                {item.safetyImpact.global && <div>🌍 {item.safetyImpact.global}</div>}
                                                {item.safetyImpact.roi && (
                                                    <div className="mt-2 font-semibold text-orange-900">{item.safetyImpact.roi}</div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Contact Information */}
                                    {item.contact && (
                                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                                            <div className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-3">Contact Information</div>
                                            <div className="text-sm text-slate-700 space-y-2">
                                                {item.contact.address && <div>📍 {item.contact.address}</div>}
                                                {item.contact.email && <div>✉️ {item.contact.email}</div>}
                                                {item.contact.website && (
                                                    <a
                                                        href={item.contact.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
                                                    >
                                                        <ExternalLink size={14} />
                                                        Visit Website
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* View More Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-all flex items-center justify-center gap-2 text-indigo-700 font-semibold text-sm group/btn"
                    >
                        {isExpanded ? (
                            <>
                                <span>View Less</span>
                                <ChevronUp size={16} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                            </>
                        ) : (
                            <>
                                <span>View More Details</span>
                                <ChevronDown size={16} className="group-hover/btn:translate-y-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Footer */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10 mt-6">
                {linkMode ? (
                    <>
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Click to View Details</span>
                        <span className="text-sm font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">→</span>
                    </>
                ) : (
                    <>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Est. Impact</span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">High ROI</span>
                    </>
                )}
            </div>
        </div>
    );
}
