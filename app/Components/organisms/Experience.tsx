"use client";
import React from "react";
import Reeducate from "../../../assets/Reedu.ico";
import WebdoorsIcon from "../../../assets/WebdoorsIcon.png";
import Image from "next/image";
import BachiImg from "../../../assets/mainGithubPhoto.jpg"
import HoverWrapper from "./HoverWrapper";

export default function Experience() {
  const handleClick = (url: string) => {
    window.open(url);
  };
  return (
    <>
    
    <section className="w-[90%] m-auto relative bottom-16">
      <div className="group cursor-pointer relative">
        <HoverWrapper>

        <h1 className="md:text-[18px] hover:border-white  hover:text-white z-50  lg:hover:border-b lg:w-0 lg:hover:w-[6.2%] lg:border-black lg:duration-700 text-[18px] lg:text-[20px] xl:text-[]22px absolute">
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
              className="lg:hover:border-b lg:w-[0%] lg:hover:border-white  lg:whitespace-nowrap hover:text-white z-50 relative lg:hover:w-full lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
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
              className="lg:hover:border-b lg:hover:border-white lg:w-[0%] lg:whitespace-nowrap lg:hover:w-full  z-50 relative hover:text-white lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"

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
              className="lg:hover:border-b lg:w-[0%] lg:hover:border-white  lg:whitespace-nowrap hover:text-white  relative z-50 lg:hover:w-full lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
              >
              Technical Univeristy 2022-2026
            </li>
          </HoverWrapper>
        </div>
      </nav>
    </section>
    <section className='hidden lg:block m-auto w-[90%] text-white relative bottom-20 xl:bottom-28'>
        <div className='flex items-center justify-center'>
        <div>
          <HoverWrapper>

            <p className='text-black w-[95%] lg:text-[22px] tracking-wider relative z-50 hover:text-white duration-[1500ms] leading-10 xl:text-[24px] 2xl:text-[26px]'>
            Giorgi Bachidze, 20-year-old full-stack web developer skilled in HTML, CSS, TailwindCSS, Framer Motion, JavaScript, TypeScript, React, Next.js, Material-UI, Node, Express, and NestJS.
            </p>
          </HoverWrapper>
        </div>
        <div>
          <HoverWrapper>

            <Image className='rounded-full cursor-pointer xl:w-[1100px]' src={BachiImg} alt='bachisImg' width={800} height={800} />
          </HoverWrapper>
        </div>
        </div>
    </section>
</>
  );
}
