import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BrandLogo from '../ui/BrandLogo';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-stone-900 selection:text-white flex flex-col">
            <Navbar />

            {/* Main Content - Full Width */}
            <main className="flex-1 w-full relative">
                {children}
            </main>

            {/* Standard Footer */}
            <footer className="bg-stone-950 border-t border-stone-800 py-16 px-6 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <BrandLogo variant="footer" />
                        </div>
                        <p className="text-stone-400 max-w-sm mb-8 leading-relaxed">
                            Engineering existing energy infrastructure for a cleaner transitional reality.
                            Nano-tech additives for coal, diesel, and lubricants.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/graffilium" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 text-stone-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors">X</a>
                            <a href="https://linkedin.com/company/graffilium" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 text-stone-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors">In</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs text-stone-500 mb-6">Products</h4>
                        <ul className="space-y-4 text-sm font-bold text-stone-400">
                            <li><Link to="/products/coalorix" className="hover:text-emerald-500 transition-colors">Coalorix</Link></li>
                            <li><Link to="/products/ignitron-d" className="hover:text-emerald-500 transition-colors">Ignitron D</Link></li>
                            <li><Link to="/products/lubritron" className="hover:text-emerald-500 transition-colors">Lubritron</Link></li>
                            <li><Link to="/products/pipeline" className="hover:text-emerald-500 transition-colors">Innovation Pipeline</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs text-stone-500 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-stone-400">
                            <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                            <li><Link to="/products/pipeline" className="hover:text-emerald-500 transition-colors">Innovation Pipeline</Link></li>
                            <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-medium">
                    <p>© 2026 Grafillium Deeptech Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
