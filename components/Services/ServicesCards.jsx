"use client";
import React from "react";
import { AiIcon, DesignIcon, GraphicsIcon, MarketingIcon, WebIcon } from "../ServicesAnimations";
import Link from "next/link";

const serviesList =[
{title:"AI Sloutions", icon: <DesignIcon/> , description: "Smart AI-driven apps that automate workflows, analyze data, and enhance decision-making. From chatbots to predictive systems, we help businesses save time, cut costs, and unlock new opportunities with AI." , links: '/ai-sloutions'},
  
{title:"Website Development" , icon: <AiIcon/> , description:"We build high-performance, scalable, and modern websites using the latest technologies. From responsive business websites to complex web apps, we ensure fast speed, clean design, and seamless user experience.", link:"/web-development"}
,
{title:"Digital Marketing", icon: <MarketingIcon/> , description:"Boost your online presence with data-driven strategies. We specialize in SEO, social media, paid ads, and content marketing to increase traffic, generate leads, and grow your brand authentically.", link:"digital-marketing"},
 
  
{title:"Creative Designs", icon:  <GraphicsIcon/> , description:"Creative visuals that tell your brand’s story. We design logos, branding kits, social media graphics, and UI/UX assets that stand out and make a lasting impression.", link:"creative-designs"}
  

]


export default function ServicesCards() {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-6xl mx-auto px-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-blue-700">Services</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Unlock the power of AI, creativity, and strategy with our tailored solutions.
        </p>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          {serviesList&&serviesList.map((item,index)=>(
                  <div key={index} className="relative group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-5 py-8 shadow-lg transition-transform duration-300  hover:border-purple-500/50">
                  {/* Lottie Placeholder */}
                  <div className="w-20 h-20 mx-auto  my-10 flex items-center justify-center rounded-full shadow-md">
                    <span >{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-6">
  {/* <Link href={'item.link'} className="btn-secondary">Learn More</Link> */}
</div>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
}
