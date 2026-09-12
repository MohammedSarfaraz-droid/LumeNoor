import React from 'react';
import { motion } from "motion/react";

const VSDivider = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center relative w-fit max-w-full lg:w-[120px] flex-shrink-0"
        >
            {/* Main VS circle with prominent glow */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-black text-sm sm:text-base lg:text-lg tracking-wider shadow-lg border border-gray-300 dark:border-gray-600">
                {/* Multiple glow layers for prominence */}
                <div className="absolute inset-0 rounded-full bg-purple-400/60 blur-lg scale-150 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-purple-400/40 blur-md scale-125 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-purple-400/50 blur-sm -z-10"></div>
                VS
            </div>
        </motion.div>
    );
};

export default VSDivider;