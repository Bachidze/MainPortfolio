"use client";
import { useEffect, useState } from "react";

const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const onMouseEnter = () => setHovering(true);
  const onMouseLeave = () => setHovering(false);

  return { position, hovering, onMouseEnter, onMouseLeave };
};

export default useCustomCursor;
