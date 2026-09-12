"use client";

import React, { useState } from "react";
import PricingHeader from "./pricing-components/PricingHeader";
import ExistingPosCard from "./pricing-components/ExistingPosCard";
import VSDivider from "./pricing-components/VSDivider";
import LumenoorCard from "./pricing-components/CoffeeMustacheCard";
import {
  aiModels,
  existingPosFlaws,
  lumenoorFeatures,
} from "./pricing-components/aiModelsData";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("fullBuild");
  const [lampHovered, setLampHovered] = useState(false);

  return (
    <section
      id="pricing"
      className="w-full py-10 min-h-0 overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 xl:px-8 max-w-7xl w-full">
        {/* Header */}
        <PricingHeader
          title="Transparent Partnerships Engineered for Growth"
          highlightText="Tailored Options"
          promoText="Choose dedicated AI Analytics & CRO integration, or a complete custom frontend website with monthly management."
        />

        {/* Pricing Comparison */}
        <div className="w-full mx-auto overflow-x-clip">
          {/* Responsive Layout: stacked until 1280px (xl), row above */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-8 w-full mx-auto">
            {/* Individual AI Subscriptions */}
            <ExistingPosCard
              aiModels={aiModels}
              existingPosFlaws={existingPosFlaws}
            />

            {/* VS Divider */}
            <VSDivider />

            {/* LumeNoor Partnership Plan */}
            <LumenoorCard
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              lampHovered={lampHovered}
              setLampHovered={setLampHovered}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
