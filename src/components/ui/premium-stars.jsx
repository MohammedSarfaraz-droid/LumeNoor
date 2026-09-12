"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PremiumStarsBackground = ({ stars = 40 }) => {

    const [glowingStars, setGlowingStars] = useState([]);
    const [starPositions, setStarPositions] = useState([]);
    const [usedStars, setUsedStars] = useState(new Set());
    const highlightedStars = useRef([]);

    useEffect(() => {
        // Generate random positions for stars
        const positions = Array.from({ length: stars }, () => ({
            top: Math.random() * 100, // 0-100% of screen height
            left: Math.random() * 100, // 0-100% of screen width
        }));
        setStarPositions(positions);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // Create a pool of available stars for rotation
            const availableStars = Array.from({ length: stars }, (_, i) => i)
                .filter(starIdx => !usedStars.has(starIdx));

            // If we've used most stars, reset the pool
            if (availableStars.length < 8) {
                setUsedStars(new Set());
                return;
            }

            // Select 5-8 random stars from available pool
            const numStars = Math.floor(Math.random() * 4) + 5;
            const selectedStars = [];
            const availablePool = [...availableStars];

            for (let i = 0; i < numStars && availablePool.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availablePool.length);
                const selectedStar = availablePool.splice(randomIndex, 1)[0];
                selectedStars.push(selectedStar);
            }

            highlightedStars.current = selectedStars;
            setGlowingStars([...selectedStars]);

            // Add selected stars to used set
            setUsedStars(prev => new Set([...prev, ...selectedStars]));
        }, 1200); // Slightly faster interval

        return () => clearInterval(interval);
    }, [usedStars, stars]);

    return (
        <div className="h-full w-full relative">
            {[...Array(stars)].map((_, starIdx) => {
                const isGlowing = glowingStars.includes(starIdx);
                const delay = Math.random() * 0.5; // Random delay for each star
                const position = starPositions[starIdx];

                if (!position) return null;

                return (
                    <div
                        key={`premium-star-${starIdx}`}
                        className="absolute"
                        style={{
                            top: `${position.top}%`,
                            left: `${position.left}%`,
                        }}>
                        <PremiumStar
                            isGlowing={isGlowing}
                            delay={delay}
                        />
                        <AnimatePresence mode="wait">
                            {isGlowing && <PremiumGlow delay={delay} />}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

const PremiumStar = ({ isGlowing, delay }) => {
    return (
        <motion.div
            key={delay}
            initial={{
                scale: 1,
                opacity: 0.3,
            }}
            animate={{
                scale: isGlowing ? [1, 1.5, 2.5, 2, 1] : 1,
                opacity: isGlowing ? [0.3, 0.8, 1, 0.9, 0.4] : 0.3,
            }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: delay,
            }}
            className="bg-foreground dark:bg-white h-[2px] w-[2px] rounded-full relative z-20"
        />
    );
};

const PremiumGlow = ({ delay }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                opacity: [0, 0.6, 0.8, 0.4, 0],
                scale: [0.5, 1, 1.2, 1, 0.8],
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: delay,
            }}
            exit={{
                opacity: 0,
                scale: 0.5,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] h-[1px] w-[1px] bg-foreground dark:bg-white rounded-full shadow-[0_0_4px_currentColor,0_0_8px_currentColor] text-foreground dark:text-white"
        />
    );
};
