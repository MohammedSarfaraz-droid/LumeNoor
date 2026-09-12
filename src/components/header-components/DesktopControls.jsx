import React from 'react';
import { motion } from "motion/react";
import { ThemeToggle } from '../ui/ThemeToggle';

const DesktopControls = () => {
    return (
        <motion.div
            initial={{ opacity: 0.3, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="hidden lg:flex items-center space-x-3 md:space-x-4"
        >
            <ThemeToggle />
        </motion.div>
    );
};

export default DesktopControls;