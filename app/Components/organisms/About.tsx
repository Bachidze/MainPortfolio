import React from 'react'
import HoverWrapper from './HoverWrapper'
import Image from 'next/image'
import BachiImg from "../../../assets/mainGithubPhoto.jpg"
export default function About() {
  return (
    <>
    <section className='hidden lg:flex m-auto w-[90%] text-white relative '>
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
  )
}
