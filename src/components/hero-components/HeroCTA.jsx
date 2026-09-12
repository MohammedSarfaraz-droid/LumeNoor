import React from "react";
import { motion } from "motion/react";
import AnimatedGradientButton from "../ui/animated-gradient-button";

const HeroCTA = ({
  buttonText = "Get Started Now",
  subText = "Built specifically for US small and medium-sized businesses.",
  onButtonClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.7,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="space-y-4 xs:space-y-5 sm:space-y-6 pt-2"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 xs:gap-5 sm:gap-6">
        <AnimatedGradientButton
          size="lg"
          variant="primary"
          showArrow={true}
          arrowDirection="right"
          className="w-auto px-6 py-3"
          onClick={onButtonClick}
        >
          {buttonText}
        </AnimatedGradientButton>
      </div>
      <p className="text-xs xs:text-sm sm:text-base text-foreground/60 dark:text-white/60 text-center lg:text-left px-4 xs:px-2 sm:px-0">
        {subText}
      </p>
    </motion.div>
  );
};

export default HeroCTA;
