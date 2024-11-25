"use client";
import React from "react";
import Reeducate from "../../../assets/Reedu.ico";
import WebdoorsIcon from "../../../assets/WebdoorsIcon.png";
import Image from "next/image";
import HoverWrapper from "./HoverWrapper";

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
        <div className="flex items-center gap-3">
          <HoverWrapper>
            <Image
              onClick={() => handleClick("https://www.reeducate.space/")}
              className="rounded-full  "
              src={Reeducate}
              width={58}
              height={58}
              alt="ReeducateImg"
              />
          </HoverWrapper>
          <HoverWrapper>
            <li
              onClick={() => handleClick("https://www.reeducate.space/")}
              className="lg:hover:border-b lg:w-[0%] text-[15px]  lg:hover:border-white  lg:whitespace-nowrap lg:hover:text-white z-50 relative lg:hover:w-full lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
              >
              Re:educate 3 Month Still Work
            </li>
          </HoverWrapper>
        </div>
        <div className="flex items-center gap-3">
          <HoverWrapper>
            <Image
              onClick={() => handleClick("https://webdoors.ge/ka/")}
              className="rounded-full "
              src={WebdoorsIcon}
              width={58}
              height={58}
              alt="ReeducateImg"
              />
          </HoverWrapper>
          <HoverWrapper>
            <li
              onClick={() => handleClick("https://webdoors.ge/ka/")}
              className="lg:hover:border-b text-[15px]  lg:hover:border-white lg:w-[0%] lg:whitespace-nowrap lg:hover:w-full  z-50 relative lg:hover:text-white lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"

              >
              Webdoors 6 Month
            </li>
          </HoverWrapper>
        </div>
        <div className="flex items-center gap-3">
          <HoverWrapper>
            <div className="flex justify-center items-center w-[58px] h-[58px] relative z-20 bg-purple-600 rounded-full">
              <h2 className="text-white text-[24px]">GTU</h2>
            </div>
          </HoverWrapper>
          <HoverWrapper>
            <li
              onClick={() => handleClick("https://gtu.ge/en/")}
              className="lg:hover:border-b  text-[15px] lg:w-[0%] lg:hover:border-white  lg:whitespace-nowrap lg:hover:text-white  relative z-50 lg:hover:w-full lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
              >
              Technical Univeristy 2022-2026
            </li>
          </HoverWrapper>
        </div>
      </nav>
    </section>
</>
  );
}
