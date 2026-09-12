import React from "react";
import { motion } from "motion/react";

const AnimatedMarquee = ({ words = ["Experience.", "Subscription."] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.3,
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="relative overflow-hidden h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 w-32 xs:w-36 sm:w-42 md:w-48 lg:w-64 xl:w-72 rounded-3xl bg-gradient-to-r from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm mt-1 animate-gradient-x"
    >
      {/* Mobile Animation */}
      <motion.div
        animate={{
          y: [0, -40, -80],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute inset-0 sm:hidden"
      >
        {/* First text */}
        <div className="h-10 flex items-center justify-center px-2">
          <span className="text-base font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
        {/* Second text */}
        <div className="h-10 flex items-center justify-center px-2">
          <span className="text-base font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[1]}
          </span>
        </div>
        {/* Third text (loop back to first) */}
        <div className="h-10 flex items-center justify-center px-2">
          <span className="text-base font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
      </motion.div>

      {/* Small screens animation */}
      <motion.div
        animate={{
          y: [0, -44, -88],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute inset-0 hidden sm:block md:hidden"
      >
        <div className="h-11 flex items-center justify-center px-2">
          <span className="text-lg font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
        <div className="h-11 flex items-center justify-center px-2">
          <span className="text-lg font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[1]}
          </span>
        </div>
        <div className="h-11 flex items-center justify-center px-2">
          <span className="text-lg font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
      </motion.div>

      {/* Medium screens animation */}
      <motion.div
        animate={{
          y: [0, -48, -96],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute inset-0 hidden md:block lg:hidden"
      >
        <div className="h-12 flex items-center justify-center px-2">
          <span className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
        <div className="h-12 flex items-center justify-center px-2">
          <span className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[1]}
          </span>
        </div>
        <div className="h-12 flex items-center justify-center px-2">
          <span className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
      </motion.div>

      {/* Large screens animation */}
      <motion.div
        animate={{
          y: [0, -56, -112],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute inset-0 hidden lg:block"
      >
        <div className="h-14 flex items-center justify-center px-2">
          <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
        <div className="h-14 flex items-center justify-center px-2">
          <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[1]}
          </span>
        </div>
        <div className="h-14 flex items-center justify-center px-2">
          <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
            {words[0]}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedMarquee;
