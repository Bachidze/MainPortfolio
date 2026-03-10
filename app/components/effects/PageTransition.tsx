"use client";

import { motion } from "framer-motion";

const layers = [
  { color: "bg-black", duration: 2.2 },
  { color: "bg-white", duration: 1.7 },
  { color: "bg-black", duration: 1.0 },
];

export default function PageTransition() {
  return (
    <>
      {layers.map(({ color, duration }) => (
        <motion.div
          key={duration}
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ duration, ease: "easeInOut" }}
          className={`fixed top-0 bottom-0 right-full w-screen h-screen z-[9999] ${color}`}
        />
      ))}
    </>
  );
}
