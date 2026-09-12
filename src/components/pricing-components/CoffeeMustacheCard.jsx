import React from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import AnimatedGradientButton from "../ui/animated-gradient-button";
import LampEffectPricing from "./LampEffectPricing";
import PricingToggle from "./PricingToggle";
import FeatureItem from "./FeatureItem";
import { plans } from "./aiModelsData";

const LumenoorCard = ({
  selectedPlan,
  setSelectedPlan,
  lampHovered,
  setLampHovered,
}) => {
  // Define plan-specific data

  const currentPlan =
    selectedPlan === "aiIntegration" ? plans.aiIntegration : plans.fullBuild;

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative w-full max-w-full sm:max-w-md lg:max-w-none lg:w-[580px] flex-shrink-0 shadow-xl shadow-purple-400/10 dark:shadow-purple-900/10"
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-400/10 rounded-xl lg:rounded-2xl blur-xl scale-105"></div>

      {/* Card content */}
      <div className="relative bg-gradient-to-br from-purple-50/70 to-violet-50/60 dark:from-purple-900/20 dark:to-violet-800/15 backdrop-blur-sm border border-purple-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
        {/* Inner glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

        {/* Lamp Effect */}
        <LampEffectPricing
          lampHovered={lampHovered}
          setLampHovered={setLampHovered}
        />

        {/* Title */}
        <div className="relative z-10 text-center mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">
            {currentPlan.title}
          </h3>
          <div className="text-2xl sm:text-3xl font-bold text-purple-500">
            {currentPlan.price}
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 mt-2">
            {currentPlan.description}
          </p>
        </div>

        {/* Toggle */}
        <PricingToggle
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />

        {/* Features */}
        <div className="relative z-10 space-y-3 lg:space-y-4 mb-6 sm:mb-8 lg:mb-10">
          {currentPlan.features.map((feature, index) => (
            <FeatureItem
              key={index}
              feature={feature}
              index={index}
              delay={0.2 + index * 0.05}
              isPositive={true}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative z-10 mb-3 lg:mb-4"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatedGradientButton
              size="lg"
              variant="primary"
              showArrow={true}
              arrowDirection="right"
              className="w-full px-6 py-3"
            >
              Get Started Now
            </AnimatedGradientButton>
          </motion.div>
        </motion.div>

        {/* Secure Payments Info */}
        <p className="relative z-10 text-xs sm:text-sm text-center text-foreground/60 flex items-center justify-center gap-1.5 lg:gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-purple-500 flex-shrink-0" />
          <span className="text-center">
            Secure invoicing & payments processed via Stripe & direct wire
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default LumenoorCard;

