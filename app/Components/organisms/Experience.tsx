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
    <section className="w-[90%] m-auto relative bottom-16">
      <div className="group cursor-pointer relative">
        <h1 className="lg:hover:border-b lg:w-0 lg:hover:w-[6.2%] lg:border-black lg:duration-700 absolute">
          EXPERIENCE
        </h1>
      </div>
      <nav className="flex flex-col cursor-pointer pt-10 gap-3">
        <div className="flex items-center gap-3">
          <HoverWrapper>
            <Image
              onClick={() => handleClick("https://www.reeducate.space/")}
              className="rounded-full"
              src={Reeducate}
              width={30}
              height={30}
              alt="ReeducateImg"
            />
          </HoverWrapper>
          <HoverWrapper>
            <li
              onClick={() => handleClick("https://www.reeducate.space/")}
              className="lg:hover:border-b lg:w-[0%] lg:whitespace-nowrap lg:hover:w-[17%] lg:border-black lg:duration-700"
            >
              Re:Educate 3 Month Still Work
            </li>
          </HoverWrapper>
        </div>
        <div className="flex items-center gap-3">
          <HoverWrapper>
            <Image
              onClick={() => handleClick("https://webdoors.ge/ka/")}
              className="rounded-full"
              src={WebdoorsIcon}
              width={30}
              height={30}
              alt="ReeducateImg"
            />
          </HoverWrapper>
          <HoverWrapper>
            <li
              onClick={() => handleClick("https://webdoors.ge/ka/")}
              className="lg:hover:border-b lg:w-[0%] lg:whitespace-nowrap lg:hover:w-[11.9%] lg:border-black lg:duration-700"
            >
              Re:Educate 6 Month
            </li>
          </HoverWrapper>
        </div>
      </nav>
    </section>
  );
}
