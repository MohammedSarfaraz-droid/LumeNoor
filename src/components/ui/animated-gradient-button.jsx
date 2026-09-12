"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const AnimatedGradientButton = ({
    children,
    className,
    size = "default",
    variant = "primary",
    onClick,
    showArrow = false,
    arrowDirection = "right",
    ...props
}) => {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
        mobile: "w-full px-6 py-3 text-base"
    };

    const variantClasses = {
        primary: "bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 hover:from-purple-800 hover:via-purple-700 hover:to-purple-800",
        secondary: "bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900"
    };

    return (
        <button
            className={cn(
                "relative overflow-hidden rounded-full font-black text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
                sizeClasses[size],
                "group",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {/* Base dark background */}
            <div className="absolute inset-0 rounded-full bg-slate-900" />

            {/* Rotating gradient animation using pseudo-element - lamp effect colors */}
            <div className="absolute inset-0 rounded-full animate-gradient-spin before:absolute before:inset-[-2px] before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:via-purple-500 before:to-purple-600 before:animate-spin-fast after:absolute after:inset-[2px] after:rounded-full after:bg-slate-900"></div>

            {/* Inner content background */}
            <div className={cn(
                "absolute inset-[1px] rounded-full",
                variantClasses[variant]
            )} />

            {/* Multiple rotating light spots - lamp effect purple theme */}
            <div className="absolute inset-0 rounded-full animate-spin-fast opacity-90">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-300 rounded-full blur-sm -translate-x-1/2 -translate-y-1 shadow-lg shadow-purple-300/50"></div>
                <div className="absolute top-1/2 right-0 w-4 h-4 bg-purple-400 rounded-full blur-sm translate-x-1 -translate-y-1/2 shadow-lg shadow-purple-400/50"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full blur-sm -translate-x-1/2 translate-y-1 shadow-lg shadow-purple-500/50"></div>
                <div className="absolute top-1/2 left-0 w-4 h-4 bg-purple-600 rounded-full blur-sm -translate-x-1 -translate-y-1/2 shadow-lg shadow-purple-600/50"></div>
            </div>

            {/* Counter-rotating inner spots - purple variants */}
            <div className="absolute inset-0 rounded-full animate-spin-reverse opacity-75">
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-purple-200 rounded-full blur-sm shadow-lg shadow-purple-200/50"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full blur-sm shadow-lg shadow-purple-400/50"></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full blur-sm shadow-lg shadow-purple-500/50"></div>
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-300 rounded-full blur-sm shadow-lg shadow-purple-300/50"></div>
            </div>

            {/* Static dotted grid background */}
            <div className="absolute inset-[1px] rounded-full overflow-hidden">
                <div className="dotted-grid-static"></div>
            </div>

            {/* Rotating gradient mask for dots visibility - purple theme */}
            <div className="absolute inset-[1px] rounded-full overflow-hidden">
                <div className="absolute -inset-[500px] animate-spin-fast opacity-40">
                    <div className="gradient-mask bg-gradient-to-r from-transparent via-purple-400/40 to-transparent w-full h-full"></div>
                </div>
                <div className="absolute -inset-[500px] animate-spin-reverse opacity-30">
                    <div className="gradient-mask bg-gradient-to-l from-transparent via-purple-300/35 to-transparent w-full h-full"></div>
                </div>
            </div>

            {/* Content with higher z-index */}
            <span className="relative z-10 flex items-center justify-center space-x-2">
                {children}
                {showArrow && (
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        style={{
                            transform: arrowDirection === "left" ? "rotate(180deg)" :
                                arrowDirection === "up" ? "rotate(-90deg)" :
                                    arrowDirection === "down" ? "rotate(90deg)" : "none"
                        }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                )}
            </span>
        </button>
    );
};

export default AnimatedGradientButton;
