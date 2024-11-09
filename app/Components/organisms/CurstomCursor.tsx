
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleHoverChange = (e:any) => setHovering(e.detail);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("cursorHover", handleHoverChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("cursorHover", handleHoverChange);
    };
  }, []);

  return (
    <motion.div
      className="hidden lg:flex fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: hovering ? 2.5 : 1,
        backgroundColor: hovering ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50%",
      }}
    />
  );
};

export const useCustomCursor = () => {
  const onMouseEnter = () =>
    document.dispatchEvent(new CustomEvent("cursorHover", { detail: true }));
  const onMouseLeave = () =>
    document.dispatchEvent(new CustomEvent("cursorHover", { detail: false }));

  return { onMouseEnter, onMouseLeave };
};

export default CustomCursor;
