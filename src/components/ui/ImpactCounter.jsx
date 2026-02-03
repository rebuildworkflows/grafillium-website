import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';

const ImpactCounter = ({ value, label, prefix = "", suffix = "", delay = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract numeric part from value if it's a string like "100M" -> 100
    // This is a simple implementation, assumes value passed is a number or scalable string
    // Ideally pass raw number `to` and formatted string `display`

    // For this component, we'll assume `value` is the target number 
    // and we want to animate from 0 to `value`

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) => {
        // Automatically determine precision: if value < 10 (and not 0), show 1 decimal, else 0
        // Or strictly follow input "value" precision. 
        // Simple heuristic: if value has decimal, show 1 decimal place.
        const isDecimal = value % 1 !== 0;
        return isDecimal ? current.toFixed(1) : Math.round(current);
    });

    useEffect(() => {
        if (isInView) {
            // slight delay
            const timeout = setTimeout(() => {
                spring.set(value);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, value, delay, spring]);

    return (
        <div ref={ref} className="group cursor-default">
            <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter group-hover:text-emerald-500 transition-colors">
                    {prefix}
                    <motion.span>{displayValue}</motion.span>
                    {suffix}
                </span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mt-2 border-t border-stone-200 pt-2 group-hover:border-emerald-500 transition-colors">
                {label}
            </div>
        </div>
    );
};

export default ImpactCounter;
