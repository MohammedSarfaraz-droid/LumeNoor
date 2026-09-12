import React from "react";

const PricingToggle = ({ selectedPlan, setSelectedPlan }) => {
  const togglePlans = [
    {
      id: "aiIntegration",
      title: "AI Analytics & CRO Integration",
      price: "AI Engine",
      period: "Integration",
      label: "For existing websites",
    },
    {
      id: "fullBuild",
      title: "Complete Custom Web Dev + Retainer",
      price: "Full Build",
      period: "Website + Support",
      label: "Complete growth partner",
      labelClass: "text-purple-500 font-semibold",
    },
  ];

  return (
    <div className="relative z-10 grid grid-cols-2 gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
      {togglePlans.map((plan) => (
        <button
          key={plan.id}
          onClick={() => setSelectedPlan(plan.id)}
          className={`relative p-3 lg:p-4 rounded-xl border transition-all duration-200 ${
            selectedPlan === plan.id
              ? "bg-purple-500/30 border-purple-400 text-foreground"
              : "bg-foreground/[0.02] dark:bg-white/[0.02] border-foreground/[0.08] dark:border-white/[0.08] text-foreground/70"
          }`}
        >
          <div className="flex items-start justify-between w-full">
            <div className="text-left">
              <div className="text-lg sm:text-xl font-bold">{plan.price}</div>
              {plan.period && (
                <div className="text-xs sm:text-sm opacity-70 font-medium">
                  {plan.period}
                </div>
              )}
              <div
                className={`text-xs sm:text-sm ${
                  plan.labelClass || "opacity-60 font-medium"
                }`}
              >
                {plan.label}
              </div>
            </div>
            <div
              className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border-2 flex items-center justify-center ${
                selectedPlan === plan.id
                  ? "border-purple-400 bg-purple-400"
                  : "border-foreground/30 dark:border-white/30"
              }`}
            >
              {selectedPlan === plan.id && (
                <svg
                  width="14"
                  height="14"
                  className="sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PricingToggle;
