import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const BrandLogo = ({ className, variant = 'dark' }) => {
    return (
        <div className={clsx("flex items-center gap-0 group relative z-50", className)}>
            <img
                src="/favicon.svg"
                alt="Grafillium Logo"
                className={clsx(
                    "object-contain transition-opacity hover:opacity-80 -translate-y-1",
                    "w-10 h-10"
                )}
            />
            <div className="flex flex-col justify-center">
                <span className={clsx(
                    "font-bold tracking-tighter leading-none",
                    variant === 'footer' ? "text-xl text-white" : "text-xl text-black"
                )}>
                    GRAFILLIUM
                </span>
                <span className={clsx(
                    "font-bold tracking-widest uppercase leading-none",
                    variant === 'footer' ? "text-[9px] text-stone-400" : "text-[9px] text-stone-500"
                )}>
                    Deep-Tech
                </span>
            </div>
        </div>
    );
};

export default BrandLogo;
