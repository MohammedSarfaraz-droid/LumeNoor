"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Characteristics section - showcasing agency web development & AI growth capabilities
const CafeCharacteristics = () => {
    const cafeFeatures = [
        {
            id: 1,
            name: "Tailor-Made Frontend",
            tag: "Zero Templates",
            description: "Built from scratch specifically for your US small or medium business. Modern, responsive, and uniquely crafted for your brand.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            position: "top-left"
        },
        {
            id: 2,
            name: "AI Analytics & Strategy",
            tag: "Actionable Insights",
            description: "Direct AI integration tracks visitor patterns, lead submissions, and booking data to generate revenue-boosting game plans.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            position: "middle-left"
        },
        {
            id: 3,
            name: "Conversion Optimization",
            tag: "CRO Focused",
            description: "Every layout, CTA, and form is tested and engineered to turn maximum local website traffic into paying clients.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            ),
            position: "bottom-left"
        },
        {
            id: 4,
            name: "Full Retainer Support",
            tag: "Hands-Off Management",
            description: "Fast hosting, security monitoring, routine maintenance, and prompt updates so you can focus 100% on running your company.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            position: "top-right"
        },
        {
            id: 5,
            name: "Monthly AI Growth Reports",
            tag: "Continuous Growth",
            description: "Receive ongoing personalized reports highlighting customer traffic trends and key adjustments to maximize ROI.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            ),
            position: "middle-right"
        },
        {
            id: 6,
            name: "Engineered for US SMBs",
            tag: "Local Market Focus",
            description: "Deeply aligned with local search behaviors and US market conversion expectations to outpace competitors.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                </svg>
            ),
            position: "bottom-right"
        }
    ];

    const centerLogo = (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="104" viewBox="0 0 120 104" fill="none" aria-label="Digital Business Growth Hub">
            <g>
                {/* Modern Laptop / Monitor outline */}
                <rect x="36" y="32" width="48" height="32" rx="4" fill="url(#screenGradient)" stroke="url(#borderPurple)" strokeWidth="2" />
                <path d="M30 68h60a3 3 0 0 0 3-3v-1H27v1a3 3 0 0 0 3 3z" fill="url(#borderPurple)" />

                {/* Trending Upward Chart Lines on screen */}
                <path d="M42 54l8-8 8 6 14-14" fill="none" stroke="url(#chartLineGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <linearGradient id="screenGradient" x1="36" y1="32" x2="84" y2="64">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#311042" />
                </linearGradient>
                <linearGradient id="borderPurple" x1="27" y1="32" x2="93" y2="68">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="chartLineGradient" x1="42" y1="54" x2="72" y2="38">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
            </defs>
        </svg>
    );

    // Refs and state for dynamic connector paths
    const containerRef = useRef(null);
    const hubRef = useRef(null);
    const cardRefs = useRef({});
    const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
    const [paths, setPaths] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    // Connection helpers: map card position -> line width to central hub (used for spacing only)
    const getConnectionConfig = (position) => {
        switch (position) {
            case "top-left":
                return { side: "left", lineW: "360px", offsetY: "-12px" };
            case "middle-left":
                return { side: "left", lineW: "330px", offsetY: "0px" };
            case "bottom-left":
                return { side: "left", lineW: "360px", offsetY: "12px" };
            case "top-right":
                return { side: "right", lineW: "360px", offsetY: "-12px" };
            case "middle-right":
                return { side: "right", lineW: "330px", offsetY: "0px" };
            case "bottom-right":
                return { side: "right", lineW: "360px", offsetY: "12px" };
            default:
                return { side: "left", lineW: "320px", offsetY: "0px" };
        }
    };

    // Build curved-then-straight connector path between a card and the hub boundary
    const buildPath = (side, sx, sy, ex, ey) => {
        const elbow = 80;
        const cp1x = side === 'left' ? sx + elbow : sx - elbow;
        const cp1y = sy;
        const cp2x = side === 'left' ? ex - elbow : ex + elbow;
        const cp2y = ey;
        return `M ${sx} ${sy} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${ex} ${ey}`;
    };
    const buildStraight = (sx, sy, ex, ey) => `M ${sx} ${sy} L ${ex} ${ey}`;

    // Intersection Observer for animations
    useEffect(() => {
        let observer;
        const target = containerRef.current || document.getElementById('characteristics');
        if ('IntersectionObserver' in window && target) {
            observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(target);
            return () => observer.disconnect();
        } else {
            // Fallback for browsers/environments where IntersectionObserver is not available
            setIsVisible(true);
            return () => { };
        }
    }, []);

    // Measure and compute paths on layout changes
    useEffect(() => {
        const measure = () => {
            const c = containerRef.current;
            const hub = hubRef.current;
            if (!c || !hub) return;
            const crect = c.getBoundingClientRect();
            const hrect = hub.getBoundingClientRect();
            const width = Math.max(1, Math.round(crect.width));
            const height = Math.max(1, Math.round(crect.height));
            setContainerSize({ width, height });

            const hx = hrect.left - crect.left + hrect.width / 2;
            const hy = hrect.top - crect.top + hrect.height / 2;
            const r = Math.min(hrect.width, hrect.height) / 2;
            const endLeftX = hx - r + 2;
            const endRightX = hx + r - 2;

            const joinOffset = 25;
            const joinLeftX = hx - r - joinOffset;
            const joinRightX = hx + r + joinOffset;

            const nextPaths = [];

            const leftFeatures = cafeFeatures.filter(m => m.position.includes('left'));
            for (const feature of leftFeatures) {
                const el = cardRefs.current[feature.id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const sx = rect.right - crect.left;
                const sy = rect.top - crect.top + rect.height / 2;
                if (feature.position === 'middle-left') {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'left', d: buildStraight(sx, sy, joinLeftX, hy) });
                } else {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'left', d: buildPath('left', sx, sy, joinLeftX, hy) });
                }
            }
            if (leftFeatures.length) {
                nextPaths.push({ id: `left-join-to-hub`, side: 'left', d: buildStraight(joinLeftX, hy, endLeftX, hy) });
            }

            const rightFeatures = cafeFeatures.filter(m => m.position.includes('right'));
            for (const feature of rightFeatures) {
                const el = cardRefs.current[feature.id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const sx = rect.left - crect.left;
                const sy = rect.top - crect.top + rect.height / 2;
                if (feature.position === 'middle-right') {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'right', d: buildStraight(sx, sy, joinRightX, hy) });
                } else {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'right', d: buildPath('right', sx, sy, joinRightX, hy) });
                }
            }
            if (rightFeatures.length) {
                nextPaths.push({ id: `right-join-to-hub`, side: 'right', d: buildStraight(joinRightX, hy, endRightX, hy) });
            }
            setPaths(nextPaths);
        };

        const ro = new ResizeObserver(() => measure());
        if (containerRef.current) ro.observe(containerRef.current);
        if (hubRef.current) ro.observe(hubRef.current);
        Object.values(cardRefs.current).forEach((el) => el && ro.observe(el));

        window.addEventListener('resize', measure);
        const id = requestAnimationFrame(measure);
        return () => {
            window.removeEventListener('resize', measure);
            cancelAnimationFrame(id);
            ro.disconnect();
        };
    }, []);

    return (
        <section id="characteristics" className="relative py-8 text-foreground overflow-hidden">
            <div className="container mx-auto px-2 sm:px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-[20px] sm:text-2xl md:text-3xl lg:text-[48px] font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                        The <span className="text-purple-600 dark:text-purple-400">digital growth partner</span>
                        <br />
                        engineered for <span className="text-purple-600 dark:text-purple-400">US small businesses</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
                        No generic templates. We build bespoke, high-converting websites backed by smart AI analytics and full monthly management.
                    </p>
                </motion.div>

                {/* Responsive layout */}
                <div className="relative mx-auto w-full">
                    {/* Desktop layout: show logo, connectors, left/right stacks only for xl and up */}
                    <div className="hidden xl:block">
                        <div ref={containerRef} className="relative mx-auto max-w-7xl h-[760px] xl:max-w-[1400px] xl:h-[820px]" style={{ maxWidth: '100vw' }}>
                            {/* Connector overlay (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${containerSize.width} ${containerSize.height}`} preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="connGradientL" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#D97706" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
                                    </linearGradient>
                                    <linearGradient id="connGradientR" x1="100%" y1="0%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#D97706" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
                                    </linearGradient>
                                </defs>
                                {paths.map((p, index) => (
                                    <path
                                        key={p.id}
                                        d={p.d}
                                        stroke={p.side === 'left' ? 'url(#connGradientL)' : 'url(#connGradientR)'}
                                        strokeWidth={2}
                                        fill="none"
                                        opacity="0.7"
                                        strokeDasharray="5,5"
                                        className={isVisible ? 'animate-pulse' : ''}
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                            animationDuration: '2s'
                                        }}
                                    />
                                ))}
                            </svg>

                            {/* Central Hub */}
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute -inset-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,139,250,0.10)_0%,rgba(124,58,237,0.06)_35%,transparent_70%)] blur-2xl" />
                                    <div className="relative w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,139,250,0.08)_0%,rgba(124,58,237,0.05)_45%,transparent_60%)]" />
                                    <div
                                        ref={hubRef}
                                        className={`absolute inset-0 m-[140px] rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-neutral-200/70 dark:border-white/10 flex items-center justify-center shadow-2xl transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                    >
                                        {centerLogo}
                                    </div>
                                </div>
                            </div>

                            {/* Left stack */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8">
                                {cafeFeatures.filter(m => m.position.includes('left')).map((feature, idx) => {
                                    return (
                                        <div
                                            key={feature.id}
                                            className={`relative group w-[420px] md:w-[460px] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                                            style={{ transitionDelay: `${idx * 100}ms` }}
                                            ref={(el) => {
                                                if (el) cardRefs.current[feature.id] = el;
                                            }}
                                        >
                                            <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-purple-500 border-b-purple-500 dark:border-r-purple-400 dark:border-b-purple-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                                                <div className="flex items-start gap-3">
                                                    <div className="relative p-3 bg-purple-700/80 bg-gradient-to-br from-purple-600/20 to-orange-600/20 dark:from-purple-500/25 dark:to-orange-500/25 rounded-xl border border-purple-600/20 dark:border-purple-400/25">{feature.icon}</div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg md:text-xl font-semibold">{feature.name}</h3>
                                                        <div className="mt-1 inline-block px-3 py-1 bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs md:text-sm rounded-full border border-purple-600/20 dark:border-purple-400/25">{feature.tag}</div>
                                                        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right stack */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8 items-end">
                                {cafeFeatures.filter(m => m.position.includes('right')).map((feature, idx) => {
                                    return (
                                        <div
                                            key={feature.id}
                                            className={`relative group w-[420px] md:w-[460px] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                                            style={{ transitionDelay: `${idx * 100}ms` }}
                                            ref={(el) => {
                                                if (el) cardRefs.current[feature.id] = el;
                                            }}
                                        >
                                            <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-purple-500 border-b-purple-500 dark:border-r-purple-400 dark:border-b-purple-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                                                <div className="flex items-start gap-3">
                                                    <div className="relative p-3 bg-purple-700/80 bg-gradient-to-br from-purple-600/20 to-orange-600/20 dark:from-purple-500/25 dark:to-orange-500/25 rounded-xl border border-purple-600/20 dark:border-purple-400/25">{feature.icon}</div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg md:text-xl font-semibold">{feature.name}</h3>
                                                        <div className="mt-1 inline-block px-3 py-1 bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs md:text-sm rounded-full border border-purple-600/20 dark:border-purple-400/25">{feature.tag}</div>
                                                        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-l from-purple-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(18)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`absolute w-1 h-1 rounded-full bg-purple-500/30 dark:bg-purple-400/40 ${isVisible ? 'animate-pulse' : ''}`}
                                        style={{
                                            left: `${(i * 53) % 100}%`,
                                            top: `${(i * 37) % 100}%`,
                                            animationDelay: `${(i % 6) * 300}ms`,
                                            animationDuration: '3s'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Medium and small screens: stacked cards */}
                    <div className="block xl:hidden">
                        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto mt-8">
                            {cafeFeatures.map((feature, idx) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className="w-full"
                                >
                                    <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-purple-500 border-b-purple-500 dark:border-r-purple-400 dark:border-b-purple-400 rounded-2xl p-3 sm:p-4 shadow-xl min-h-[110px] hover:shadow-2xl transition-shadow">
                                        <div className="flex items-start gap-2 sm:gap-3">
                                            <div className="relative p-2 sm:p-3 bg-purple-700/80 bg-gradient-to-br from-purple-600/20 to-orange-600/20 dark:from-purple-500/25 dark:to-orange-500/25 rounded-xl border border-purple-600/20 dark:border-purple-400/25">{feature.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{feature.name}</h3>
                                                <div className="mt-1 inline-block px-2 sm:px-3 py-1 bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs sm:text-sm rounded-full border border-purple-600/20 dark:border-purple-400/25">{feature.tag}</div>
                                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CafeCharacteristics;