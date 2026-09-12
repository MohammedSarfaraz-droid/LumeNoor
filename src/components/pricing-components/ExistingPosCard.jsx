import React from "react";
import { motion } from "motion/react";
import FeatureItem from "./FeatureItem";

const ExistingPosCard = ({ existingPosFlaws }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="bg-black/5 dark:bg-black/30 backdrop-blur-sm border border-red-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 w-full max-w-full sm:max-w-md lg:max-w-none lg:w-[440px] flex-shrink-0 shadow-xl shadow-black/10 dark:shadow-red-900/10"
    >
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg font-semibold text-foreground/90 mb-3">
          Generic Templates & Freelancers
        </h3>
        <div className="mb-2">
          <span className="text-2xl sm:text-3xl font-bold text-red-500">
            Hidden Costs
          </span>
          <span className="text-sm text-foreground/60 ml-1">& Missed Leads</span>
        </div>
        <p className="text-xs sm:text-sm text-foreground/60">
          Why local US small businesses struggle with cookie-cutter websites
        </p>
      </div>

      {/* Flaws */}
      <div className="space-y-2.5 sm:space-y-3">
        {existingPosFlaws.map((flaw, index) => (
          <FeatureItem
            key={index}
            feature={flaw}
            index={index}
            delay={0.28}
            isPositive={false} // ❌ Show as negatives here
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ExistingPosCard;
