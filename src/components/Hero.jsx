"use client";

import React from "react";
import HeroContent from "./hero-components/HeroContent";
import HeroVisual from "./hero-components/HeroVisual";

const Hero = () => {
  const handleGetStartedClick = () => {
    const target = document.querySelector("#features") || document.querySelector("#pricing");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full pt-24 lg:pt-24 px-6 lg:px-20 pb-14">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[83vh] gap-8 lg:gap-12 relative z-10">
        <HeroContent
          badgeText="Custom Web Dev & AI Growth for US Businesses"
          subheadingText="We build modern, high-converting websites for US small businesses. Plus, we integrate smart AI analytics that track your traffic and bookings to tell you exactly how to grow."
          buttonText="Explore Our Services"
          ctaSubText="Tailor-made frontend design • AI strategy & actionable insights • CRO"
          onButtonClick={handleGetStartedClick}
        />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
