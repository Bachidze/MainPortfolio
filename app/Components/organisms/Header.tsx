"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="w-[90%] m-auto text-white pt-4">
      <section className="cursor-pointer flex  items-center">
        <motion.div
          className="min-w-[50px] min-h-[50px] border rounded-full border-black bg-black relative"
          animate={{ rotate: 360 }} // Continuously rotate
          transition={{
            duration: 4, // Duration of one full rotation
            ease: "linear", // Linear easing for smooth motion
            repeat: Infinity, // Repeat the animation infinitely
          }}
        >
          <div className="border absolute w-[65px] rotate-[45deg] top-[22px] -left-2 border-white"></div>
          <div className="border absolute w-[65px] -rotate-[45deg] top-[22px] -left-2 border-white"></div>
        </motion.div>
        <div className="w-full flex relative bg-white ">
          <div className="absolute top-1/2 left-1/2 -translate-x-[30%] translate-y-[-80%] text-black">
            EXPERIENCE
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 2.5 }}
            className=" border border-black w-[35%] ml-7 absolute left-0"
          >
            <div className="absolute">
              <h1 className="text-black">2023</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 2.5 }}
            className=" border border-black w-[35%] ml-5 absolute right-0"
          >
            <div className="absolute right-0">
              <h1 className="text-black">2024</h1>
            </div>
          </motion.div>
        </div>
      </section>
    </header>
  );
}
