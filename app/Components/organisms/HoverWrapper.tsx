"use client";
import React from "react";
import { useCustomCursor } from "./CurstomCursor";


const HoverWrapper = ({ children }:any) => {
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
