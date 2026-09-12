import React from 'react';
import { motion } from "motion/react";

const LampEffect = () => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 -top-28 w-[50rem] h-36 flex items-center justify-center overflow-visible pointer-events-none hidden sm:flex">
            {/* Left lamp beam - premium slow animation */}
            <motion.div
                initial={{ opacity: 0.4, width: "16rem" }}
                animate={{ opacity: 1, width: "32rem" }}
                transition={{
                    delay: 0.4,
                    duration: 1.4,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    maskImage: `linear-gradient(to bottom, transparent 0%, white 35%, white 75%, transparent 100%), linear-gradient(to right, transparent 0%, white 25%, white 100%)`,
                    maskComposite: 'intersect'
                }}
                className="absolute inset-auto right-1/2 h-36 w-[32rem] bg-gradient-conic from-purple-700 via-purple-500/80 to-transparent dark:from-purple-400 dark:via-purple-200/60 [--conic-position:from_70deg_at_center_top] hidden sm:block"
            />

            {/* Right lamp beam - premium slow animation */}
            <motion.div
                initial={{ opacity: 0.4, width: "16rem" }}
                animate={{ opacity: 1, width: "32rem" }}
                transition={{
                    delay: 0.4,
                    duration: 1.4,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    maskImage: `linear-gradient(to bottom, transparent 0%, white 35%, white 75%, transparent 100%), linear-gradient(to left, transparent 0%, white 25%, white 100%)`,
                    maskComposite: 'intersect'
                }}
                className="absolute inset-auto left-1/2 h-36 w-[32rem] bg-gradient-conic from-transparent via-purple-500/80 to-purple-700 dark:via-purple-200/60 dark:to-purple-400 [--conic-position:from_290deg_at_center_top] hidden sm:block"
            />

            {/* Additional light spread - delayed for premium feel */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.3, scale: 1.2 }}
                transition={{
                    delay: 0.8,
                    duration: 1.0,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute z-20 h-16 w-[24rem] top-10 rounded-full bg-purple-600/40 dark:bg-purple-300/30 blur-2xl left-1/2 -translate-x-1/2 hidden sm:block"
            />

            {/* Central glow - luxurious slow reveal */}
            <motion.div
                initial={{ width: "8rem", opacity: 0.3 }}
                animate={{ width: "20rem", opacity: 0.8 }}
                transition={{
                    delay: 0.6,
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute z-30 h-12 rounded-full bg-purple-600 dark:bg-purple-300 blur-xl top-10 left-1/2 -translate-x-1/2 hidden sm:block"
            />

            {/* Lamp line - elegant slow expansion */}
            <motion.div
                initial={{ width: "10rem" }}
                animate={{ width: "24rem" }}
                transition={{
                    delay: 0.2,
                    duration: 1.6,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute z-50 h-0.5 bg-purple-700 dark:bg-purple-400 top-0 left-1/2 -translate-x-1/2 hidden sm:block"
            />
        </div>
    );
};

export default LampEffect;