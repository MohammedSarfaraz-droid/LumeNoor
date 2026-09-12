import React from "react";
import { motion } from "motion/react";

const CuratorBadge = ({ text = "Built for US Small & Medium Businesses" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      <div className="px-4 xs:px-5 py-2 xs:py-2.5 rounded-full bg-purple-200 dark:bg-purple-900/30 border border-purple-500 dark:border-purple-700/70 backdrop-blur-sm">
        <span className="text-xs xs:text-sm sm:text-base font-medium text-purple-700 dark:text-purple-300">
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default CuratorBadge;
