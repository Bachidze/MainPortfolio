"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slideData from "../../../Json/slideData.json"
import Image from "next/image";
import HoverWrapper from "./HoverWrapper";

const SwiperComponent: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1920) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1600) {
        setSlidesPerView(3.2);
      } else if (window.innerWidth >= 1000) {
        setSlidesPerView(2.7);
      } else if (window.innerWidth >= 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1.2);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const handleSlideClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <section className="mt-12 mb-12 w-[90%] m-auto">
      <Swiper
      autoplay={{delay:2000}}
      modules={[Pagination,Autoplay]}
      loop
      spaceBetween={50}
      slidesPerView={slidesPerView}
      >
       {slideData.map(({ url, image, alt }, index) => (
          <SwiperSlide key={index} onClick={() => handleSlideClick(url)}>
            <HoverWrapper>
              <div className="relative outline-none border-black cursor-pointer min-w-[300px] h-[200px] rounded-xl border-2 md:min-w-[335px] xl:min-w-[430px] xl:h-[300px] overflow-hidden">
                <Image
                  className="rounded-md"
                  src={image}
                  alt={alt}
                  layout="fill"
                  objectFit="fit"
                />
              </div>
            </HoverWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
