"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BgAnimation from "../BgAnimation";
import Link from "next/link";
import { ArrowRight, CircleArrowOutUpRight } from "lucide-react";
import  projects from "@/data/Projects.json";

export default function FeatureProjects() {
  return (
    <section className="relative w-full py-20   text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Our <span className="text-blue-700">Portfolio</span>
        </h2>
        <p className="mt-4 text-gray-400 text-center">
          A glimpse of the work we’ve delivered for clients worldwide.
        </p>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 hover:border-purple-700  transition-all"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-300">{p.desc}</p>
                <div className="py-4  ">
                    <Link href={`${p.link}`}><button className="btn-secondary flex gap-2 items-center
                    ">View<span><CircleArrowOutUpRight size={20}/></span></button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0, // no delay between slides
              disableOnInteraction: false,
            }}
            speed={3000} // speed of transition (higher = slower movement)
            freeMode={true} // continuous smooth movement
          >
            {projects?.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-gray-300">{p.desc}</p>
                    <div className="py-4  ">
                    <Link href={`${p.link}`}><button className="btn-secondary flex gap-2 items-center
                    ">View<span><CircleArrowOutUpRight size={20}/></span></button></Link>
                </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
