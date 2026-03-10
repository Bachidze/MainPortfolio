"use client";

import { motion } from "framer-motion";
import HoverWrapper from "@/app/components/ui/HoverWrapper";
import DoubleArrow from "@/app/components/ui/DoubleArrow";

const TIMELINE_ANIMATION = {
  initial: { width: 0 },
  whileInView: { width: "50%" },
  transition: { duration: 2.5 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[90%] m-auto relative mb-14">
      <div className="cursor-pointer flex items-center gap-6">
        <div className="w-full flex relative bg-[#ffd700]">
          <motion.div
            {...TIMELINE_ANIMATION}
            className="border border-[#ffd700] w-[35%] absolute left-0"
          >
            <HoverWrapper>
              <a href="/Resume.pdf" download="Resume.pdf" className="absolute">
                <span className="text-[#ffd700] md:text-[18px] lg:hover:text-[#1B263B] lg:relative lg:z-50 lg:duration-1000 lg:ease-in-out lg:transition-all">
                  Download CV
                </span>
              </a>
            </HoverWrapper>
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
        <HoverWrapper>
          <DoubleArrow color="#ffd700" hoverColor="#fff" />
        </HoverWrapper>
      </div>
    </footer>
  );
}
