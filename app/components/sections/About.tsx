"use client";

import Image from "next/image";
import HoverWrapper from "@/app/components/ui/HoverWrapper";
import aboutData from "@/app/data/about.json";
import type { AboutData } from "@/app/types";

const data = aboutData as AboutData;

export default function About() {
  return (
    <section className="hidden xl:flex m-auto w-[90%] relative xl:-mb-16 xxl:-mb-24 3xl:-mb-36">
      <div className="flex items-center justify-center">
        <div>
          <HoverWrapper>
            <p className="w-[95%] lg:text-[22px] tracking-wider relative z-50 hover:text-[#1B263B] duration-[1500ms] leading-10 xl:text-[24px] 2xl:text-[26px]">
              {data.bio}
            </p>
          </HoverWrapper>
        </div>
        <div>
          <HoverWrapper>
            <Image
              className="rounded-full cursor-pointer xl:w-[1100px]"
              src={data.image}
              alt={data.alt}
              width={800}
              height={800}
            />
          </HoverWrapper>
        </div>
      </div>
    </section>
  );
}
