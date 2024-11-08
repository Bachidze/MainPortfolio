"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Louie from "../../../assets/LouieThumbnail.png";
import Survey from "../../../assets/Survey.png";
import FullStack from "../../../assets/fullStack.png";
import Webdoors from "../../../assets/Webdoors.png";

const SwiperComponent: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1600) {
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
    <section className="mt-12 mb-24 w-[90%] m-auto max-w-[1920px]">
      <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        loop
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide onClick={() => handleSlideClick("https://final-frontside.vercel.app/")}>
        
            <div className="relative border-black cursor-pointer min-w-[300px] h-[200px] rounded-xl border-2  md:min-w-[335px] xl:min-w-[430px] xl:h-[300px] overflow-hidden">
              <Image
                src={FullStack}
                alt="Slide 3"
                layout="fill"
                objectFit="fit"
              />
            </div>
          
        </SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick("https://survey.reeducate.space/")}>
          
            <div className="relative border-black cursor-pointer hover:shadow-2xl duration-300 ease-in-out min-w-[300px] h-[200px] group rounded-xl border-2   md:min-w-[335px] xl:min-w-[430px] xl:h-[300px] overflow-hidden">
              <Image
                src={Survey}
                alt="Slide 2"
                layout="fill"
                objectFit="fit"
              />
              <div className="absolute left-0 w-0 bg-black hover:w-full">
                
              </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide onClick={() => handleSlideClick("https://www.louie.meme/")}>
        
            <div className="relative border-black cursor-pointer min-w-[300px] h-[200px] rounded-xl border-2  md:min-w-[335px] xl:min-w-[430px] xl:h-[300px] overflow-hidden">
              <Image
                src={Louie}
                alt="Slide 1"
                layout="fill"
                objectFit="fit"

              />
            </div>
          
        </SwiperSlide>



        <SwiperSlide onClick={() => handleSlideClick("https://webdoors-three.vercel.app/")}>
            <div className="relative border-black cursor-pointer min-w-[300px] h-[200px] rounded-xl border-2  md:min-w-[335px] xl:min-w-[430px] xl:h-[300px] overflow-hidden">
              <Image
                src={Webdoors}
                alt="Slide 4"
                layout="fill"
                objectFit="fit"
              />
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
