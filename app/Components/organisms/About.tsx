"use client";
import React from "react";
import HoverWrapper from "./HoverWrapper";
import Image from "next/image";
import aboutData from "../../../Json/about.json"; // Adjust the path if necessary

export default function About() {
  return (
    <section className="hidden xl:flex m-auto w-[90%] text-white relative xl:-mb-16 xxl:-mb-24 3xl:-mb-36">
      <div className="flex items-center justify-center">
        <div>
          <HoverWrapper>
            <p className="text-black w-[95%] lg:text-[22px] tracking-wider relative z-50 hover:text-white duration-[1500ms] leading-10 xl:text-[24px] 2xl:text-[26px]">
              {aboutData.bio}
            </p>
          </HoverWrapper>
        </div>
        <div>
          <HoverWrapper>
            <Image
              className="rounded-full cursor-pointer xl:w-[1100px]"
              src={aboutData.image}
              alt={aboutData.alt}
              width={800}
              height={800}
            />
          </HoverWrapper>
        </div>
      </div>
    </section>
  );
}
