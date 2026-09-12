"use client";

import React, { useEffect, useState } from "react";
import AnimatedGradientButton from "./animated-gradient-button";

const BackToTopButton = ({ scrollThreshold = 200 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > scrollThreshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollThreshold]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <AnimatedGradientButton
                size="lg"
                variant="primary"
                showArrow={true}
                arrowDirection="up"
                onClick={scrollToTop}
                className="shadow-2xl shadow-purple-500/30 p-4 flex items-center justify-center"
                aria-label="Back to top"
            />
        </div>
    );
};

export default BackToTopButton;
