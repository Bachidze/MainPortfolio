"use client"
import Image from "next/image";
import React from "react";
import HoverWrapper from "./HoverWrapper";
import Linkedin from "../../../assets/LinkedinPort.png"
import Github from "../../../assets/GithubPort.png"
import Gmail from "../../../assets/GPort.webp"

export default function Media() {
  const handleClick = (url: string) => {
    window.open(url);
  };
  return (
    <>
      <section className="w-[90%] m-auto relative bottom-8 lg:bottom-20  xl:bottom-36 2xl:bottom-44">
        <div className="group cursor-pointer relative">
          <HoverWrapper>
            <h1 className="md:text-[18px] lg:hover:border-white  lg:hover:text-white z-50  lg:hover:border-b lg:w-0 lg:hover:w-[4.4%] lg:border-black lg:duration-700 text-[18px] lg:text-[20px] xl:text-[22px] absolute">
              MEDIA
            </h1>
          </HoverWrapper>
        </div>
        <nav className="flex flex-col cursor-pointer pt-10 gap-3 md:gap-4 lg:pt-12 lg:gap-6">
          <div className="flex items-center gap-3">
            <HoverWrapper>
              <Image
                onClick={() => handleClick("https://www.linkedin.com/in/giorgi-bachidze-11b68426b/")}
                className="rounded-full  "
                src={Linkedin}
                width={58}
                height={58}
                alt="ReeducateImg"
              />
            </HoverWrapper>
            <HoverWrapper>
              <li
                onClick={() => handleClick("https://www.linkedin.com/in/giorgi-bachidze-11b68426b/")}
                className="lg:hover:border-b lg:w-[0%] lg:hover:border-white  lg:whitespace-nowrap lg:hover:text-white z-50 relative lg:hover:w-full lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
              >
                Linkedin
              </li>
            </HoverWrapper>
          </div>
          <div className="flex items-center gap-3">
            <HoverWrapper>
              <Image
                onClick={() => handleClick("https://github.com/Bachidze")}
                className="rounded-full "
                src={Github}
                width={58}
                height={58}
                alt="ReeducateImg"
              />
            </HoverWrapper>
            <HoverWrapper>
              <li
                onClick={() => handleClick("https://github.com/Bachidze")}
                className="lg:hover:border-b lg:hover:border-white lg:w-[0%] lg:whitespace-nowrap lg:hover:w-full  z-50 relative lg:hover:text-white lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
              >
                Github
              </li>
            </HoverWrapper>
          </div>
          <div className="flex items-center gap-3">
            <HoverWrapper>
            <Image
                className="rounded-full border border-black"
                src={Gmail}
                width={58}
                height={58}
                alt="ReeducateImg"
              />
            </HoverWrapper>
            <HoverWrapper>
            <li
                onClick={() => handleClick("mailto:bachidze90@gmail.com")}
                className="lg:hover:border-b lg:w-[0%] lg:hover:border-white lg:whitespace-nowrap lg:hover:text-white z-50 relative lg:hover:w-full lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
              >
                bachidze90@gmail.com
              </li>
            </HoverWrapper>
          </div>
        </nav>
      </section>
    </>
  );
}
