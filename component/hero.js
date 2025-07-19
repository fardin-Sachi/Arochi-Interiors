import React from 'react'
// import house from '@/public/Portfolio/house.png'
import Image from 'next/image'
// import logo from "@/public/logo-icon-dark-transparent.png"

export default function Hero() {
  return (
    <section className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/portfolio/house.png"
          alt="House"
          fill
          className="object-cover"
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/portfolio/house.png"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#e4e3d3]/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-6 h-full">

        {/* Logo + Title Row */}
        <div className="flex items-center justify-center gap-6 flex-wrap hover:scale-105 transition-transform duration-500 z-20">
          <Image
            src="/logo-icon-dark-transparent.png"
            alt="Arochi Interiors"
            width={140}
            height={140}
            className="w-[90px] sm:w-[110px] md:w-[130px]"
          />
          <h1 className="font-[poppins] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Arochi Interiors
          </h1>
        </div>
        <br /><br />
        {/* Subtitle */}
        <p className="mt-4 font-[poppins] font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-90 transition-transform duration-700 z-10">
          Your Dream Space, Our Creative Passion
        </p>
      </div>
    </section>
  )
}
{/* <div className='flex flex-col items-center justify-center bg-scroll w-full'>
        <div className='relative'>
            <div className=''>
                <Image 
                    src={house}
                    alt='house'
                    placeholder='blur'
                />
            </div>
            <div className="absolute z-20 top-0 left-0 w-full h-full bg-[#e4e3d3]/65 place-content-center">
                <p className='text-center font-semibold text-7xl'>Your Dream Space, Our Creative Passion</p>
            </div>
            
            
        </div>
    </div> */}