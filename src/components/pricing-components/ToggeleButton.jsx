// ToggleButton.jsx - Individual toggle button component
const ToggleButton = ({
  plan,
  isSelected,
  onClick,
  className,
  radioClassName,
}) => (
  <button onClick={onClick} className={className}>
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
      <div className={radioClassName}>{isSelected && <CheckIcon />}</div>
    </div>
  </button>
);

// CheckIcon.jsx - Reusable check icon
const CheckIcon = () => (
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
);
