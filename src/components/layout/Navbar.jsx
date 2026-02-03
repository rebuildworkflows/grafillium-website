import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Gauge, FlaskConical, Beaker, Layers } from 'lucide-react';
import { clsx } from 'clsx';
import { productsContent } from '../../data/products';
import BrandLogo from '../ui/BrandLogo';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { label: 'Innovation Pipeline', path: '/innovation' },
        { label: 'About', path: '/about' },
    ];

    const getProductIcon = (id) => {
        switch (id) {
            case 'coalorix': return <Zap size={16} />;
            case 'ignitron-d': return <Gauge size={16} />;
            case 'lubritron': return <FlaskConical size={16} />;
            case 'ignitron-p': return <Beaker size={16} />;
            case 'pipeline': return <Layers size={16} />;
            default: return <Zap size={16} />;
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-black">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                {/* Brand */}
                <Link to="/">
                    <BrandLogo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {/* Products Dropdown Trigger */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 text-sm font-bold text-stone-600 hover:text-black transition-colors uppercase tracking-widest py-4 bg-transparent border-0"
                        >
                            Products <ChevronDown size={14} strokeWidth={3} />
                        </button>

                        {/* Mega Menu / Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-0 translate-y-2 group-hover:translate-y-0">
                            {/* View All Products Header */}
                            <Link
                                to="/products"
                                className="block p-4 bg-stone-900 hover:bg-black transition-colors border-b border-stone-700"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white">View All Products</span>
                                    <span className="text-white">→</span>
                                </div>
                            </Link>

                            {/* Individual Products Grid */}
                            <div className="grid grid-cols-2 gap-px bg-stone-100">
                                {productsContent.filter(product => product.id !== 'pipeline').map((product) => (
                                    <Link
                                        key={product.id}
                                        to={`/products/${product.id}`}
                                        className="flex items-start gap-4 p-6 bg-white hover:bg-stone-50 transition-colors group/item"
                                    >
                                        <div className="p-2 bg-stone-100 text-stone-900 group-hover/item:text-black group-hover/item:bg-white border border-stone-200 group-hover/item:border-black transition-colors">
                                            {getProductIcon(product.id)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-black mb-1 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                {product.name}
                                                {/* Arrow on hover */}
                                                <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-black">→</span>
                                            </div>
                                            <div className="text-[10px] text-stone-500 line-clamp-2 leading-relaxed font-medium uppercase tracking-wider">
                                                {product.tagline}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "text-sm font-bold uppercase tracking-widest transition-colors relative",
                                location.pathname === link.path
                                    ? "text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black"
                                    : "text-stone-500 hover:text-black"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="hidden lg:block px-6 py-3 text-[10px] font-bold uppercase tracking-widest bg-black text-white hover:bg-emerald-600 transition-colors"
                    >
                        Start Pilot
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-black"
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-black p-6 shadow-xl flex flex-col gap-4 z-40">
                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest bg-black text-white hover:bg-emerald-600 transition-colors text-center"
                    >
                        Start Pilot
                    </Link>

                    <div className="font-bold text-black text-[10px] uppercase tracking-widest mb-2 border-b border-stone-200 pb-2">Menu</div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-bold text-black py-2 hover:translate-x-2 transition-transform uppercase tracking-tighter"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="font-bold text-black text-[10px] uppercase tracking-widest mt-4 mb-2 border-b border-stone-200 pb-2">Products</div>

                    {/* View All Products Link */}
                    <Link
                        to="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-bold text-black py-2 hover:translate-x-2 transition-transform uppercase tracking-tighter bg-stone-100 px-4 -mx-4"
                    >
                        View All Products →
                    </Link>

                    {productsContent.filter(product => product.id !== 'pipeline').map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 py-3 group"
                        >
                            <div className="text-stone-400 group-hover:text-black transition-colors">{getProductIcon(product.id)}</div>
                            <span className="font-bold text-stone-600 group-hover:text-black transition-colors uppercase text-sm tracking-wide">{product.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
