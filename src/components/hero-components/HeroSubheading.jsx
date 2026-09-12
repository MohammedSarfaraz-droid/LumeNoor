import React from "react";
import { motion } from "motion/react";

const HeroSubheading = ({ text }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg text-foreground/80 dark:text-white/80 leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto lg:mx-0 px-4 xs:px-2 sm:px-0"
    >
      {text}
    </motion.p>
  );
};

export default HeroSubheading;
