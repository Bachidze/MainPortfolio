"use client";
import React, { ReactNode } from "react";
import { useCustomCursor } from "./CurstomCursor";


interface HoverWrapperProps {
  children: ReactNode;
}

const HoverWrapper = ({ children }:HoverWrapperProps) => {
  const { onMouseEnter, onMouseLeave } = useCustomCursor();

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverWrapper;
