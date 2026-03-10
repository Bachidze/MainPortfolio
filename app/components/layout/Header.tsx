"use client";

import { motion } from "framer-motion";
import HoverWrapper from "@/app/components/ui/HoverWrapper";
import DoubleArrow from "@/app/components/ui/DoubleArrow";

const TIMELINE_ANIMATION = {
  initial: { width: 0 },
  whileInView: { width: "50%" },
  transition: { duration: 2.5 },
};

export default function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <header className="w-[90%] m-auto pt-6 md:pt-8 lg:pt-10">
      <div className="cursor-pointer flex items-center">
        <HoverWrapper>
          <DoubleArrow color="#ffd700" hoverColor="#fff" />
        </HoverWrapper>
        <div className="w-full flex relative bg-[#ffd700]">
          <motion.div
            {...TIMELINE_ANIMATION}
            className="border border-[#ffd700] w-[35%] ml-7 absolute left-0"
          >
            <div className="absolute">
              <span className="text-[#ffd700] md:text-[18px]">2023</span>
            </div>
          </motion.div>
          <motion.div
            {...TIMELINE_ANIMATION}
            className="border border-[#ffd700] w-[35%] ml-5 absolute right-0"
          >
            <div className="absolute right-0">
              <span className="text-[#ffd700] md:text-[18px]">{currentYear}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
