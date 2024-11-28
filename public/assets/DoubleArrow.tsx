import React, { useState } from "react";

interface DoubleArrowProps {
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
}

export default function DoubleArrow({
  width = 61,
  height = 32,
  color = "#33323D",
  hoverColor = "#666",
}: DoubleArrowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      className="relative z-50 duration-700 transition-all ease-in-out"
      width={width}
      height={height}
      viewBox="0 0 61 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
        fill={isHovered ? hoverColor : color}
        style={{ transition: ' 0.7s ease-in-out' }} 
      />
    </svg>
  );
}
