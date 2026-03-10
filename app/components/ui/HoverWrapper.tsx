"use client";

import type { ReactNode } from "react";
import { useCustomCursor } from "@/app/hooks/useCustomCursor";

interface HoverWrapperProps {
  children: ReactNode;
}

export default function HoverWrapper({ children }: HoverWrapperProps) {
  const { onMouseEnter, onMouseLeave } = useCustomCursor();

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
}
