import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MechanismBackground = () => {
    // Generate random nodes once
    const nodes = React.useMemo(() => {
        const nodeCount = 15;
        return Array.from({ length: nodeCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2, // 2-6px
            duration: Math.random() * 20 + 10, // 10-30s float duration
        }));
    }, []);

    if (!nodes || nodes.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {/* SVG Layer for Connections */}
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(20, 184, 166, 0.1)" /> {/* Teal with low opacity */}
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" /> {/* Blue with low opacity */}
                    </linearGradient>
                </defs>
                {/* Connecting lines between close nodes could be complex to animate performantly in pure React without canvas.
                    For a watermark, we'll use a simpler approach: fixed connections or just floating nodes with "bond" hints.
                    Let's simulate bonds by connecting specific nodes pairs. */}
                {nodes.map((node, i) => {
                    // unexpected simple connections to simulate structure
                    const nextNode = nodes[(i + 1) % nodes.length];
                    return (
                        <motion.line
                            key={`line-${i}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${nextNode.x}%`}
                            y2={`${nextNode.y}%`}
                            stroke="url(#line-gradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: 1,
                                opacity: [0, 0.3, 0.1],
                                x1: [`${node.x}%`, `${node.x + (Math.random() * 10 - 5)}%`],
                                y1: [`${node.y}%`, `${node.y + (Math.random() * 10 - 5)}%`],
                                x2: [`${nextNode.x}%`, `${nextNode.x + (Math.random() * 10 - 5)}%`],
                                y2: [`${nextNode.y}%`, `${nextNode.y + (Math.random() * 10 - 5)}%`],
                            }}
                            transition={{
                                duration: node.duration,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                        />
                    );
                })}
            </svg>

            {/* Nodes/Particles */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-500/30"
                    style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Hexagonal Hints (Benzene rings / Molecular structures) */}
            <div className="absolute top-1/4 left-1/4 opacity-10 animate-pulse duration-[5000ms]">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z" stroke="currentColor" className="text-teal-600" strokeWidth="1" />
                    <circle cx="50" cy="55" r="20" stroke="currentColor" className="text-blue-600" strokeWidth="1" strokeDasharray="5 5" />
                </svg>
            </div>
            <div className="absolute bottom-1/3 right-1/4 opacity-10 animate-pulse duration-[7000ms]">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z" stroke="currentColor" className="text-slate-600" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default MechanismBackground;
