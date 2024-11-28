"use client";
import React from "react";
import Image from "next/image";
import HoverWrapper from "./HoverWrapper";

import experienceData from "../../../Json/experienceData.json"; 

export default function Experience() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <section className="w-[90%] m-auto relative xl:-mb-14 xxl:-mb-20 3xl:-mb-36 ">
        <div className="group cursor-pointer relative">
          <HoverWrapper>
            <h1 className="md:text-[18px] lg:hover:border-white  lg:hover:text-white z-50  lg:hover:border-b lg:w-0 lg:hover:w-[8%] lg:border-black lg:duration-700 text-[18px] lg:text-[20px] xl:text-[22px] absolute">
              EXPERIENCE
            </h1>
          </HoverWrapper>
        </div>
        <nav className="flex flex-col cursor-pointer pt-10 gap-3 md:gap-4 lg:pt-12 lg:gap-6">
          {experienceData.map((experience, index) => (
            <div key={index} className="flex items-center gap-3">
              <HoverWrapper>
                <Image
                  onClick={() => handleClick(experience.url)}
                  className="rounded-full"
                  src={experience.image}
                  width={58}
                  height={58}
                  alt={experience.alt}
                />
              </HoverWrapper>
              <HoverWrapper>
                <li
                  onClick={() => handleClick(experience.url)}
                  className="lg:hover:border-b lg:w-[0%] text-[15px] lg:hover:border-white lg:whitespace-nowrap lg:hover:w-full z-50 relative lg:hover:text-white lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
                >
                  {experience.name} {experience.duration}
                </li>
              </HoverWrapper>
            </div>
          ))}
        </nav>
      </section>
    </>
  );
}
