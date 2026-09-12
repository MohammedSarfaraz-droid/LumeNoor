import React from "react";
import { motion } from "motion/react";
import { CheckCircle, XCircle } from "lucide-react";

const FeatureItem = ({ feature, index, delay, isPositive = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isPositive ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + index * 0.05 }}
      className="flex items-start space-x-3"
    >
      {/* Icon */}
      {isPositive ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
      ) : (
        <XCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
      )}

      {/* Text */}
      <p className="text-sm sm:text-sm text-foreground/80 leading-snug">
        {feature}
      </p>
    </motion.div>
  );
};

export default FeatureItem;
