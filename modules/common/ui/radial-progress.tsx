import React from "react";

type RadialProgressProps = {
  value: number; // progress value (0 - 100)
  size?: string; // size of the SVG (e.g., "12rem")
  thickness?: string | number; // thickness of the progress stroke
};

const RadialProgress: React.FC<RadialProgressProps> = ({
  value,
  size = "12rem",
  thickness = "8",
}) => {
  // Ensure thickness is a number for calculation
  const parsedThickness = typeof thickness === "string" ? parseInt(thickness) : thickness;
  const radius = 50 - parsedThickness;
  const circumference = 2 * Math.PI * radius;
  const progress = (circumference * value) / 100;

  return (
    <svg
      className="text-primary"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <circle
        className="text-gray-300"
        strokeWidth={parsedThickness}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        className="text-blue-500"
        strokeWidth={parsedThickness}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <text
        x="50%"
        y="50%"
        fill="#2563eb"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-xl text-blue-500"
      >
        {value}%
      </text>
    </svg>
  );
};

export default RadialProgress;
