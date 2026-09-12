"use client";
import { cards } from "@/data/features";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";

const Features = () => {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <div id="features" className="w-full relative">
      {/* Header */}
      <div
        className="text-center py-8 lg:py-16 px-4 sm:px-6 lg:px-8"
        ref={headingRef}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground dark:text-white leading-tight"
        >
          High-Converting Web & AI Solutions
          <br />
          <span className="bg-gradient-to-r from-cyan-500 to-[#8b5cf6] bg-clip-text text-transparent">
            Built for US Businesses.
          </span>
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 lg:gap-20 pb-16">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
