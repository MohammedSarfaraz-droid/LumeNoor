import React from 'react';
import { motion } from "motion/react";

const HamburgerIcon = ({ isMobileMenuOpen }) => {
    return (
        <div className="w-6 h-6 flex flex-col justify-center items-center">
            {/* Top line */}
            <motion.span
                animate={isMobileMenuOpen ? {
                    rotate: 45,
                    y: 8,
                    backgroundColor: "currentColor"
                } : {
                    rotate: 0,
                    y: 0,
                    backgroundColor: "currentColor"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full origin-center"
            />

            {/* Middle line */}
            <motion.span
                animate={isMobileMenuOpen ? {
                    opacity: 0,
                    x: -20
                } : {
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full mt-1.5 origin-center"
            />

            {/* Bottom line */}
            <motion.span
                animate={isMobileMenuOpen ? {
                    rotate: -45,
                    y: -8,
                    backgroundColor: "currentColor"
                } : {
                    rotate: 0,
                    y: 0,
                    backgroundColor: "currentColor"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full mt-1.5 origin-center"
            />
        </div>
    );
};

export default HamburgerIcon;