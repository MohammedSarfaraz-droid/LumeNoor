'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chevron = ({ open }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
        <path
            d="M20.031 10.003L12.531 17.503c-.07.07-.152.126-.243.164a.75.75 0 0 1-.574 0 1.01 1.01 0 0 1-.243-.164L3.97 10.003A.75.75 0 0 1 4.5 8.722c.199 0 .39.079.53.22l6.97 6.97 6.97-6.97c.07-.07.153-.125.244-.163.091-.038.188-.058.287-.058.098 0 .196.02.287.058.091.038.174.093.244.163a.75.75 0 0 1 0 1.06Z"
            fill="currentColor"
        />
    </svg>
);

const faqs = [
    {
        q: 'What kind of businesses do you build websites for?',
        a: "We specialize specifically in local US small and medium-sized businesses (SMBs). Whether you run a local service company, professional practice, boutique agency, or specialized retail brand, we build custom frontend websites engineered to turn local search traffic into paying customers.",
    },
    {
        q: 'Do you use generic website templates or WordPress themes?',
        a: 'No. Every website we design and build is tailor-made from the ground up to fit your unique business model, brand identity, and customer acquisition flow. We focus on modern, lightweight, mobile-responsive frontend architecture that delivers blazing speed and maximum conversions.',
    },
    {
        q: 'How does the AI Analytics & Strategy Integration work?',
        a: 'We seamlessly integrate intelligent AI tools directly into your website. The AI continuously tracks user behavior, page engagement, booking patterns, and lead form interactions. Instead of overwhelming you with complex data charts, it delivers actionable, plain-English monthly growth strategies telling you exactly where to focus to increase revenue.',
    },
    {
        q: 'What is Conversion Rate Optimization (CRO) and why do I need it?',
        a: 'CRO ensures that your traffic turns into actual revenue. We analyze every page layout, headline, call-to-action button, and booking flow to remove friction. By optimizing how local visitors interact with your site, you capture significantly more leads and appointments from your existing traffic.',
    },
    {
        q: 'What is included in the Monthly Website Management & Support retainer?',
        a: 'Our monthly retainer handles the technical side completely: premium high-speed hosting management, 24/7 security monitoring, routine maintenance, performance optimizations, and minor content updates. Plus, you receive ongoing monthly AI strategy reports to keep your business ahead of competitors.',
    },
    {
        q: 'How long does it take to design and launch a custom website?',
        a: 'A typical custom frontend web development project takes between 2 to 4 weeks from initial kickoff to final launch, depending on the scope of pages, booking flows, and integrations.',
    },
    {
        q: 'How do I get started or request a consultation?',
        a: 'Getting started is simple. Reach out to us through our contact form or email us directly. We’ll review your current online presence, discuss your growth targets, and propose a customized development and AI analytics strategy.',
    },
];

export default function FAQs() {
    const [open, setOpen] = useState(() => new Set());

    const toggle = (idx) => {
        setOpen((prev) => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
            },
        })),
    };

    return (
        <section id="faqs" className="relative py-16 sm:py-20 lg:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Subtle glow background */}
            <div className="absolute inset-0 -z-10">
                <div className="mx-auto max-w-6xl h-48 blur-3xl bg-purple-400/10 rounded-[4rem]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-[24px] sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-6 sm:mb-8">
                        Frequently Asked Questions (<span className="text-purple-600 dark:text-purple-400">FAQs</span>)
                    </h2>

                    <div className="mx-auto max-w-5xl rounded-2xl md:rounded-3xl border border-purple-500/40 bg-black/5 dark:bg-black/40 backdrop-blur-sm p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden">
                        <div className="divide-y divide-foreground/10">
                            {faqs.map((item, idx) => {
                                const isOpen = open.has(idx);
                                const panelId = `faq-panel-${idx}`;
                                return (
                                    <motion.div
                                        key={idx}
                                        className="py-5 sm:py-6 lg:py-8"
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.24) }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggle(idx)}
                                            className="w-full flex items-start justify-between gap-3 sm:gap-4 text-left"
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                        >
                                            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-foreground/95">
                                                {item.q}
                            </h3>
                                            <span className="text-foreground/70 shrink-0">
                                                <Chevron open={isOpen} />
                                            </span>
                                        </button>
                                        <div
                                            id={panelId}
                                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                                                `}
                                        >
                                            <div className="overflow-hidden">
                                                <motion.p
                                                    className="mt-3 text-xs sm:text-base lg:text-lg text-foreground/70 leading-relaxed"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: isOpen ? 1 : 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    {item.a}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}