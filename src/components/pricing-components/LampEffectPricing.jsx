import React from 'react';
import { motion } from "motion/react";

const LampEffectPricing = ({ lampHovered, setLampHovered }) => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 -top-24 z-20 pointer-events-none">
            {/* Lamp Head - VERY THICK and PROMINENT */}
            <motion.div
                initial={{ opacity: 0, scaleY: 0.3 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px 10px #a78bfa" }}
                onHoverStart={() => setLampHovered(true)}
                onHoverEnd={() => setLampHovered(false)}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="relative cursor-pointer"
            >
                {/* Main Lamp Housing - EXTREMELY THICK and PROMINENT */}
                <div className="w-56 h-20 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-t-3xl shadow-2xl relative mx-auto" style={{ borderWidth: '16px', border: '16px solid #4b5563' }}>
                    {/* Lamp Reflections */}
                    <div className="absolute top-3 left-6 w-8 h-4 bg-white/70 rounded-full blur-sm"></div>
                    <div className="absolute top-3 right-6 w-10 h-3 bg-white/50 rounded-full"></div>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full"></div>
                    {/* Additional metallic details */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-500 rounded-full"></div>
                </div>

                {/* Light Emission Surface - EXTREMELY THICK */}
                <div className="w-52 h-12 bg-gradient-to-r from-yellow-100 via-white to-yellow-100 rounded-b-2xl -mt-3 mx-auto shadow-2xl shadow-purple-300/70 relative" style={{ borderWidth: '8px', border: '8px solid #fef08a' }}>
                    {/* Bright center emission - Much Thicker */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-5 bg-white rounded-full shadow-xl shadow-white/90"></div>
                    {/* Additional light emission layers */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-36 h-3 bg-yellow-100 rounded-full"></div>
                </div>
            </motion.div>

            {/* Purple Light Beams - Narrower Width, Same Distance */}
            <motion.div
                initial={{ opacity: 0.2, width: "8rem" }}
                whileInView={{ opacity: 0.8, width: "40rem" }}
                transition={{
                    delay: 1.5,
                    duration: 4.0,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute top-12 right-1/2 h-72 bg-gradient-conic from-purple-600/80 via-purple-500/95 to-transparent dark:from-purple-400/95 dark:via-purple-300/80 [--conic-position:from_70deg_at_center_top]"
            />

            <motion.div
                initial={{ opacity: 0.2, width: "8rem" }}
                whileInView={{ opacity: 0.8, width: "40rem" }}
                transition={{
                    delay: 1.5,
                    duration: 4.0,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                }}
                className="absolute top-12 left-1/2 h-72 bg-gradient-conic from-transparent via-purple-500/95 to-purple-600/80 dark:via-purple-300/80 dark:to-purple-400/95 [--conic-position:from_290deg_at_center_top]"
            />

            {/* Central bright glow - Narrower Width */}
            <motion.div
                initial={{ width: "4rem", opacity: 0.5 }}
                whileInView={{ width: "24rem", opacity: 0.9 }}
                transition={{
                    delay: 2.0,
                    duration: 3.5,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute top-16 left-1/2 -translate-x-1/2 h-20 rounded-full bg-purple-500/85 dark:bg-purple-400/75 blur-2xl"
            />

            {/* Pulsing outer glow - Narrower but Far */}
            <motion.div
                animate={{
                    opacity: [0.15, 0.5, 0.15],
                    scale: [1, 2.2, 1]
                }}
                transition={{
                    delay: 2.5,
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-full sm:max-w-md lg:w-[400px] h-80 bg-gradient-to-b from-purple-400/25 via-purple-400/15 to-transparent rounded-full blur-3xl"
            />
        </div>
    );
};

export default LampEffectPricing;