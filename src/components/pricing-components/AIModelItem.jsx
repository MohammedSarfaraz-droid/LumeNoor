import React from 'react';
import { motion } from "motion/react";

const AIModelItem = ({ model, index, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: delay + index * 0.09, ease: 'easeOut' }}
            className="flex items-center justify-between p-2.5 sm:p-3 bg-foreground/[0.02] dark:bg-white/[0.01] lg:bg-foreground/[0.03] lg:dark:bg-white/[0.02] rounded-lg shadow-sm"
        >
            <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">{model.icon}</div>
                <span className="text-xs sm:text-sm text-foreground/80 truncate">{model.name}</span>
            </div>
            <span className="text-xs sm:text-sm text-red-500 dark:text-red-400 font-medium flex-shrink-0">{model.price}</span>
        </motion.div>
    );
};

export default AIModelItem;