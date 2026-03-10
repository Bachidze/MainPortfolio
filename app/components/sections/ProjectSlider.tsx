"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import HoverWrapper from "@/app/components/ui/HoverWrapper";
import slideData from "@/app/data/projects.json";
import type { ProjectSlide } from "@/app/types";

const BREAKPOINTS = [
  { minWidth: 1920, slides: 4 },
  { minWidth: 1600, slides: 3.2 },
  { minWidth: 1000, slides: 2.7 },
  { minWidth: 600, slides: 2 },
] as const;

const DEFAULT_SLIDES = 1.2;

function getSlidesPerView(): number {
  for (const bp of BREAKPOINTS) {
    if (window.innerWidth >= bp.minWidth) return bp.slides;
  }
  return DEFAULT_SLIDES;
}

export default function ProjectSlider() {
  const [slidesPerView, setSlidesPerView] = useState(DEFAULT_SLIDES);

  useEffect(() => {
    const updateSlidesPerView = () => setSlidesPerView(getSlidesPerView());

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const handleSlideClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="mt-12 mb-12 w-[90%] m-auto">
      <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        loop
        spaceBetween={50}
        slidesPerView={slidesPerView}
      >
        {(slideData as ProjectSlide[]).map(({ url, image, alt }) => (
          <SwiperSlide key={url} onClick={() => handleSlideClick(url)}>
            <HoverWrapper>
              <div className="relative outline-none border-black cursor-pointer min-w-[300px] h-[200px] rounded-xl border-2 md:min-w-[335px] xl:min-w-[430px] xl:h-[300px] overflow-hidden">
                <Image
                  className="rounded-md object-cover"
                  src={image}
                  alt={alt}
                  fill
                />
              </div>
            </HoverWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
