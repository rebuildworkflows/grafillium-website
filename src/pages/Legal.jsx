import React from 'react';
import { legalContent } from '../data/legal';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

const Legal = () => {
    return (
        <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white">

            {/* Header */}
            <section className="pt-32 pb-20 px-6 border-b border-stone-200">
                <div className="max-w-[1000px] mx-auto">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 text-stone-500">
                        <Scale size={14} /> Legal & Compliance
                    </span>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-8">
                        {legalContent.title}
                    </h1>
                    <p className="text-xl font-medium text-stone-500 max-w-2xl">
                        Transparency is core to our engineering philosophy. Please review our compliance and liability frameworks.
                    </p>
                    <div className="text-xs font-mono text-stone-400 mt-8 uppercase">
                        Last Updated: {legalContent.lastUpdated}
                    </div>
                </div>
            </section>

            {/* Content Blocks */}
            <section className="max-w-[1000px] mx-auto px-6 py-20">
                <div className="space-y-16">
                    {legalContent.sections.map((section, idx) => (
                        <div key={idx} className="border-l-2 border-stone-100 pl-8 md:pl-12 hover:border-black transition-colors duration-300">
                            <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                                {section.title}
                            </h2>
                            <div className="prose prose-stone prose-lg max-w-none text-stone-600 font-medium leading-relaxed">
                                {section.content.split('\n').map((paragraph, pIdx) => (
                                    <p key={pIdx} className="mb-4">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Contact/Support */}
                    <div className="border-t border-stone-200 pt-16 mt-16">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Questions?</h3>
                        <p className="text-lg text-stone-500">
                            Legal Department: <a href={`mailto:${legalContent.contact.email}`} className="text-black font-bold border-b border-black hover:bg-black hover:text-white transition-colors">{legalContent.contact.email}</a>
                            <br />
                            {legalContent.contact.address}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Legal;
