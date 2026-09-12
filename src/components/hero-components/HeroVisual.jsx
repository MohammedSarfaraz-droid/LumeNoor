import React from "react";
import { motion } from "motion/react";

const HeroVisual = () => {
  return (
    <div className="relative w-full lg:w-4/10">
      <div className="group">
        {/* Outer Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Inner Glow Border */}
        <div className="absolute -inset-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl opacity-90"></div>

        {/* Main Content Box */}
        <div className="relative rounded-xl p-6 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-400/20 shadow-2xl">
          <div className="space-y-4 text-gray-900 dark:text-white">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-cyan-400/30">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  AI
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm block">
                    AI Growth & Analytics Engine
                  </span>
                  <span className="text-[11px] text-cyan-600 dark:text-cyan-300 font-medium">
                    Live Performance Tracking
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Active</span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-100/90 dark:bg-slate-800/70 rounded-xl p-3 border border-cyan-400/20">
                <div className="text-[11px] text-gray-500 dark:text-gray-400">Visitor Conversion</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mt-0.5 flex items-center gap-1.5">
                  +42.8%
                  <span className="text-xs font-semibold text-emerald-500">↑</span>
                </div>
                <div className="text-[10px] text-cyan-600 dark:text-cyan-400 mt-1">High-converting UX</div>
              </div>

              <div className="bg-gray-100/90 dark:bg-slate-800/70 rounded-xl p-3 border border-purple-400/20">
                <div className="text-[11px] text-gray-500 dark:text-gray-400">Lead & Booking Rate</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mt-0.5 flex items-center gap-1.5">
                  3.4x
                  <span className="text-xs font-semibold text-purple-500">↑</span>
                </div>
                <div className="text-[10px] text-purple-600 dark:text-purple-400 mt-1">Local traffic captured</div>
              </div>
            </div>

            {/* Live AI Strategic Insights Box */}
            <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent rounded-xl p-4 border border-cyan-400/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 uppercase tracking-wider">
                  Automated Growth Strategy
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-700 dark:text-cyan-300">
                  Real-time
                </span>
              </div>
              <p className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                "Mobile visitors from local searches peak between 4 PM - 8 PM. One-click booking CTA enabled; conversion velocity increased by 28%."
              </p>
            </div>

            {/* Feature Highlights List */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tailor-made, mobile-responsive custom frontend</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Direct AI tracking for traffic, leads & booking flow</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full monthly management, security & strategy retainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;