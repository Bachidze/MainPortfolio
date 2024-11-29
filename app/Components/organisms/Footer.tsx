"use client";
import React from "react";
import { motion } from "framer-motion";
import HoverWrapper from "./HoverWrapper";
import DoubleArrow from "@/public/assets/DoubleArrow";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-[90%] m-auto text-white relative mb-14 ">
        <section className="cursor-pointer flex  items-center gap-6">
          <div className="w-full flex relative bg-white  ">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              transition={{ duration: 2.5 }}
              className=" border border-black w-[35%]  absolute left-0"
            >
              <HoverWrapper>
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  className="absolute"
                >
                  <h1 className="text-black md:text-[18px] lg:hover:text-white lg:relative lg:z-50 lg:duration-1000 lg:ease-in-out lg:transition-all">
                    Download CV
                  </h1>
                </a>
              </HoverWrapper>
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
          <HoverWrapper>
            <DoubleArrow hoverColor="#fff" />
          </HoverWrapper>
        </section>
      </footer>
    </>
  );
}
