import React from 'react'
import AnimatedIcon from "@/components/AnimatedIcon";
import BgAnimation from "@/components/BgAnimation";
import AiLinesBackground from "@/components/ParticlesBackground";
import ProcessAnimation from '@/components/ProcessAnimation';

const HeroSection = () => {
  return (
     <section className=" w-full px-6 md:px-12 py-30  min-h-screen flex flex-col md:flex-row   justify-center  items-center gap-10">
       
          {/* <div className="absolute inset-0 overflow-hidden">
            <AiLinesBackground/>
          </div> */}
            {/* <BgAnimation /> */}
          {/* <ProcessAnimation/> */}
    
          {/* Left Side */}
          <div className="md:w-[60%] text-center  md:text-left z-10 ">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Break the Limits with <br /> TechDev
              <span className="text-blue-700">Breakers</span>
            </h1>
            <p className="mt-6  max-w-xl">
              AI solutions, digital marketing, and creative design – built for the
              future.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:justify-normal gap-4  mt-7">
            <button className="btn-primary">See our portfolio</button>
            <button className="btn-secondary">Contact us</button>
            </div>
          </div>
    
          {/* Right Side */}
          <div className="md:w-[40%]   flex justify-center  z-10">
            <AnimatedIcon />
          </div>
        </section>
  )
}

export default HeroSection