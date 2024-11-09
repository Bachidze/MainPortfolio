"use client"
import React from 'react'
import { motion } from "framer-motion"
import HoverWrapper from './HoverWrapper'
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
   <>
   <footer className="w-[90%] m-auto text-white relative mb-4 lg:bottom-10 xl:bottom-20 xl:mb-0">
      <section className="cursor-pointer flex  items-center gap-6">
        <div className="w-full flex relative bg-white  ">
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 2.5 }}
            className=" border border-black w-[35%]  absolute left-0"
          >
            <HoverWrapper>

            <a href="/Resiume.pdf" download="Resume.pdf" className="absolute">
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

            <motion.div
              className="min-w-[50px] min-h-[50px] border rounded-full border-black bg-black relative   md:min-w-[60px] md:min-h-[60px] lg:min-w-[75px] lg:min-h-[75px]"
              animate={{ rotate: 360 }}
              transition={{
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity,
                }}
                >
              <div className="border absolute w-[65px] rotate-[45deg] top-[22px] -left-2 border-white md:w-[70px] md:-left-2 md:top-[26px] lg:w-[75px] lg:-left-0 lg:top-[35px]"></div>
              <div className="border absolute w-[65px] -rotate-[45deg] top-[22px] -left-2 border-white md:w-[70px] md:-left-1 md:top-[26px] lg:w-[75px] lg:-left-[1px] lg:top-[36px]"></div>
            </motion.div>
                </HoverWrapper>
      </section>
    </footer>
   </>
  )
}