"use client";
import React from "react";
import { motion } from "framer-motion";
import HoverWrapper from "./HoverWrapper";
import DoubleArrow from "@/assets/DoubleArrow";
export default function Header() {
  const currentYear = new Date().getFullYear();
  return (
    <header className="w-[90%] m-auto text-white pt-4  md:pt-6 lg:pt-8">
      <section className="cursor-pointer flex  items-center">
        <HoverWrapper>
          <DoubleArrow 
          hoverColor="#fff"
          />
        </HoverWrapper>
        <div className="w-full flex relative bg-white ">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 2.5 }}
            className=" border border-black w-[35%] ml-7 absolute left-0"
          >
            <div className="absolute">
              <h1 className="text-black md:text-[18px]">2023</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 2.5 }}
            className=" border border-black w-[35%] ml-5 absolute right-0"
          >
            <div className="absolute right-0">
              <h1 className="text-black md:text-[18px]">{currentYear}</h1>
            </div>
          </motion.div>
        </div>
      </section>
    </header>
  );
}
