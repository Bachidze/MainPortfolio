"use client";
import React from "react";
import HoverWrapper from "./HoverWrapper";
import Image from "next/image";
import mediaData from "../../../Json/media.json"; 

export default function Media() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <section className="w-[90%] m-auto relative mb-10 mt-4">
        <div className="group cursor-pointer relative">
          <HoverWrapper>
            <h1 className="md:text-[18px] lg:hover:border-white lg:hover:text-white z-50 lg:hover:border-b lg:w-0 lg:hover:w-[4.4%] lg:border-black lg:duration-700 text-[18px] lg:text-[20px] xl:text-[22px] absolute">
              MEDIA
            </h1>
          </HoverWrapper>
        </div>

        <nav className="flex flex-col cursor-pointer pt-10 gap-3 md:gap-4 lg:pt-12 lg:gap-6">
          {mediaData.map((media) => (
            <div className="flex items-center gap-3" key={media.name}>
              <HoverWrapper>
                <Image
                  onClick={() => handleClick(media.url)}
                  className="rounded-full"
                  src={media.image}
                  width={58}
                  height={58}
                  alt={media.alt}
                />
              </HoverWrapper>
              <HoverWrapper>
                <li
                  onClick={() => handleClick(media.url)}
                  className="lg:hover:border-b lg:w-[0%] text-[15px] lg:hover:border-white lg:whitespace-nowrap lg:hover:w-full z-50 relative lg:hover:text-white lg:border-black lg:duration-700 md:text-[18px] lg:text-[20px] xl:text-[22px]"
                >
                  {media.name}
                </li>
              </HoverWrapper>
            </div>
          ))}
        </nav>
      </section>
    </>
  );
}
