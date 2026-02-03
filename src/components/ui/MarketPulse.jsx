import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Globe, Zap } from 'lucide-react';

const MarketPulse = () => {
    const items = [
        { icon: Globe, label: "Global Clean Energy Investment", value: "$1.7 Trillion" },
        { icon: Zap, label: "India Thermal Capacity", value: "210 GW" },
        { icon: Activity, label: "Coal Consumption", value: "1.3BMT", },
        { icon: TrendingUp, label: "Carbon Tech CAGR", value: "15-20%" },
        { icon: Globe, label: "Industrial Efficiency Market", value: "$200 Billion" },
        { icon: Zap, label: "India Diesel Usage", value: "91MMT", },
    ];

    // Duplicate list for seamless loop
    const displayItems = [...items, ...items];

    return (
        <div className="w-full bg-stone-900 border-b border-stone-800 overflow-hidden flex items-center relative z-20">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-stone-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-stone-900 to-transparent z-10" />

            <div className="flex items-center gap-2 px-4 py-3 border-r border-stone-700 bg-stone-900 z-10 shadow-xl">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 whitespace-nowrap">Energy Landscape</span>
            </div>

            <motion.div
                className="flex items-center gap-12 px-4 py-3"
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {displayItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
                        <item.icon size={12} className="text-stone-400" />
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">{item.label}:</span>
                        <span className="text-xs font-bold text-white">{item.value}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default MarketPulse;
