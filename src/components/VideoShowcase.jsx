'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, Code2, BrainCircuit, ShieldCheck, Gauge, Sparkles } from 'lucide-react';
import AnimatedGradientButton from './ui/animated-gradient-button';

// Inline SVG icons
const CheckBadge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3.75 13.5L9 18.75L21 6.75" stroke="#39D47A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const WarningBadge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13.35 3.77L21.55 18.01C22.12 19.01 21.38 20.25 20.2 20.25H3.8C2.62 20.25 1.88 19.01 2.45 18.01L10.65 3.77C11.24 2.74 12.76 2.74 13.35 3.77Z" stroke="#DD910B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13.5V9.75" stroke="#DD910B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18C12.62 18 13.13 17.49 13.13 16.87C13.13 16.25 12.62 15.75 12 15.75C11.38 15.75 10.88 16.25 10.88 16.87C10.88 17.49 11.38 18 12 18Z" fill="#DD910B" />
    </svg>
);

const ErrorBadge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18.75 5.25L5.25 18.75" stroke="#E66B6B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.75 18.75L5.25 5.25" stroke="#E66B6B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ResultRow = ({ tone = 'green', title, subtitle }) => {
    const tones = {
        green: {
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/25',
            ring: 'ring-emerald-500/10',
            Icon: CheckBadge,
            title: 'text-emerald-600 dark:text-emerald-300',
            subtitle: 'text-emerald-500/70 dark:text-emerald-200/70',
        },
        yellow: {
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/25',
            ring: 'ring-purple-500/10',
            Icon: WarningBadge,
            title: 'text-purple-600 dark:text-purple-300',
            subtitle: 'text-purple-500/70 dark:text-purple-200/70',
        },
        red: {
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/25',
            ring: 'ring-rose-500/10',
            Icon: ErrorBadge,
            title: 'text-rose-600 dark:text-rose-300',
            subtitle: 'text-rose-500/70 dark:text-rose-200/70',
        },
    };

    const { bg, border, ring, Icon, title: titleCls, subtitle: subtitleCls } = tones[tone];

    return (
        <div className={`relative flex items-center gap-3 sm:gap-3 rounded-2xl ${bg} border ${border} ring-1 ${ring} px-3 py-3 lg:px-4 lg:py-4 backdrop-blur-sm`}>
            <div className={`grid place-items-center rounded-xl ${bg} border ${border} p-1.5 shrink-0`}>
                <Icon />
            </div>
            <div className="flex-1 min-w-0">
                <div className={`text-sm sm:text-base font-semibold ${titleCls} truncate`}>{title}</div>
                <div className={`text-[11px] sm:text-xs ${subtitleCls}`}>{subtitle}</div>
            </div>
        </div>
    );
};

export default function VideoShowcase() {
    return (
        <section className="video-section py-10 relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="mx-auto max-w-7xl h-36 blur-3xl bg-purple-400/10 rounded-[4rem]" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="workflow-heading text-center mb-4 sm:mb-6">
                    <h2 className="cards-head text-[24px] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight">
                        See How Our Websites <span className="text-purple-600 dark:text-purple-400">Drive Real Business Growth</span>
                    </h2>
                    <div className="card-subhead text-base sm:text-lg text-foreground/70 mt-1">
                        From generic, underperforming templates to bespoke frontend engineering and smart AI strategy.
                    </div>
                </div>

                <div className="video-wrapper flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch lg:[grid-template-columns:1.15fr_0.85fr] xl:[grid-template-columns:1.2fr_0.8fr]">
                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="hero-div-left w-full"
                    >
                        <div className="relative hero-video-wrapper h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center w-full max-w-[620px] mx-auto">
                            {/* Outer glowing ambient background */}
                            <div className="absolute -inset-4 rounded-3xl blur-2xl bg-gradient-to-r from-purple-500/30 via-cyan-400/20 to-pink-500/25" />

                            {/* Ultra Premium Glassmorphism UI Preview Card */}
                            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] rounded-2xl border border-purple-500/30 bg-slate-950/95 backdrop-blur-xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden text-left font-sans">
                                {/* Top Browser/App Bar */}
                                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                        <span className="text-slate-400 ml-2 text-xs font-mono hidden sm:inline">lumenoor.com/growth-suite</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-[11px] text-purple-300 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>AI Engine Live</span>
                                    </div>
                                </div>

                                {/* Content Grid inside Mockup */}
                                <div className="py-3 sm:py-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-auto">
                                    {/* Column 1: Custom Code & Speed */}
                                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-2.5 flex flex-col justify-between">
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                                                <Code2 className="w-3.5 h-3.5" />
                                                <span>Bespoke React</span>
                                            </div>
                                            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">99 Speed</span>
                                        </div>
                                        <div className="font-mono text-[11px] text-slate-300 space-y-1 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/60">
                                            <p className="text-purple-400">&lt;<span className="text-pink-400">CustomSite</span></p>
                                            <p className="pl-3 text-slate-400">zeroTemplates=&#123;<span className="text-amber-300">true</span>&#125;</p>
                                            <p className="pl-3 text-slate-400">croOptimized=&#123;<span className="text-emerald-300">true</span>&#125;</p>
                                            <p className="text-purple-400">/&gt;</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                                            <Gauge className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                            <span>100% Mobile Responsive</span>
                                        </div>
                                    </div>

                                    {/* Column 2: Live AI Analytics */}
                                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-2.5 flex flex-col justify-between">
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-1.5 text-teal-400 font-semibold">
                                                <BrainCircuit className="w-3.5 h-3.5" />
                                                <span>AI Analytics</span>
                                            </div>
                                            <span className="text-[10px] text-teal-300 font-mono">+142% Revenue</span>
                                        </div>
                                        {/* Sparkline bars */}
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between text-[10px] text-slate-400">
                                                <span>Monthly Leads</span>
                                                <span className="text-white font-mono font-bold">428</span>
                                            </div>
                                            <div className="h-8 flex items-end gap-1 pt-1">
                                                {[40, 55, 45, 70, 85, 100].map((val, idx) => (
                                                    <div key={idx} className="flex-1 bg-slate-800 rounded-t h-full flex items-end">
                                                        <div
                                                            className="w-full bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t"
                                                            style={{ height: `${val}%` }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[11px] text-teal-300/90 pt-1">
                                            <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                            <span>Automated Strategy Reports</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Highlights Pill */}
                                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                                        <span className="text-[11px] sm:text-xs">Full Retainer &amp; Support</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                                        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> Zero Templates</span>
                                        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-400" /> US SMB Focused</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Cards & CTA: Always below image on <1024px screens */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="div-block-29 w-full max-w-md lg:max-w-lg xl:max-w-xl justify-self-end mt-4 lg:mt-0 mx-auto"
                    >
                        <h3 className="heading-4 text-foreground text-xl sm:text-2xl font-extrabold mb-3 text-center lg:text-left">
                            Why US Businesses Partner With Us
                        </h3>

                        <div className="video-result-wrapper space-y-3">
                            <ResultRow
                                tone="green"
                                title="Custom Frontend Engineering"
                                subtitle="Tailor-made for your brand — zero cookie-cutter templates"
                            />
                            <ResultRow
                                tone="green"
                                title="Integrated AI Analytics & Insights"
                                subtitle="Direct behavioral tracking with clear, actionable growth reports"
                            />
                            <ResultRow
                                tone="green"
                                title="Conversion Rate Optimization"
                                subtitle="Designed from page one to maximize local lead capture & bookings"
                            />
                            <ResultRow
                                tone="yellow"
                                title="Hands-Off Monthly Management"
                                subtitle="Hosting, 24/7 security, continuous updates & monthly strategy"
                            />
                        </div>

                        {/* CTA */}
                        <div className="video-btn mt-3">
                            <AnimatedGradientButton
                                size="mobile"
                                variant="primary"
                                className="sm:w-auto whitespace-nowrap text-xs sm:text-sm px-3 sm:px-5"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#pricing') || document.querySelector('#features');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                            >
                                Get Started With Us Today
                            </AnimatedGradientButton>
                            <div className="text-block text-foreground/60 text-[11px] sm:text-xs mt-2">
                                Empower your small business with high-performing frontend design and smart AI intelligence.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}