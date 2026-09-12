import React from 'react';
import { motion } from "motion/react";
import { ThemeToggle } from '../ui/ThemeToggle';
import HamburgerIcon from './HamburgerIcon';

const MobileControls = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    return (
        <motion.div
            initial={{ opacity: 0.3, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="lg:hidden flex items-center space-x-2"
        >
            <ThemeToggle />
            <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-foreground/10 backdrop-blur-md border border-foreground/20 dark:bg-white/10 dark:border-white/20 transition-colors duration-200 relative"
            >
                <HamburgerIcon isMobileMenuOpen={isMobileMenuOpen} />
            </button>
        </motion.div>
    );
};

export default MobileControls;