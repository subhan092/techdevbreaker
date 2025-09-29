"use client";

import React from "react";
import ProcessAnimation from "../ProcessAnimation";
import { Quote, Rocket } from "lucide-react";
import { Gem, Zap, Globe } from "lucide-react";



const offers = [
  {
    id: 1,
    title: "Exclusive Launch Offer",
    desc: "20–30% off your first project",
    icon: <Gem size={40} className="text-white drop-shadow-[0_0_8px_#0742f3]" />,
  },
  {
    id: 2,
    title: "Priority Support",
    desc: "Direct access to our team, faster replies",
    icon: <Zap size={40} className="text-white drop-shadow-[0_0_8px_#0742f3]" />,
  },
  {
    id: 3,
    title: "Featured Partner",
    desc: "Your brand showcased in our portfolio & case studies",
    icon: <Globe size={40} className="text-white drop-shadow-[0_0_8px_#0742f3]" />,
  },
  {
    id: 4,
    title: "Early Access to Innovations",
    desc: "Be the first to try our new tools & features",
    icon: <Rocket size={40} className="text-white drop-shadow-[0_0_8px_#0742f3]" />,
  },

];




export default function BreakProblemsSection() {
  return (
    <section className=" w-full z-20    text-white py-20 px-6 md:px-12">
        {/* <ProcessAnimation /> */}
      <div className="max-w-7xl flex flex-col gap-18 justify-center items-center mx-auto">
              <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold lg:text-5xl">Be a Pioneer. Break Barriers With Us</h2>
              <div className="flex justify-center gap-2 "><Quote/> <p className="pt-4 text-shadow-blue-500 shadow-md">first 10 partners aren’t just clients </p><Quote/> <br /> </div> <p> they’re part of our story. Together, we’ll break limits and set new standards in digital innovation.</p>
              </div>
            <div className="grid lg:grid-cols-2 gap-12 justify-center items-center  ">
                {offers.map((item,index)=>(
                  <div key={index} className="bg-white/15 p-4 rounded-md drop-shadow-xl">
                        <div className="flex flex-col justify-center items-center md:flex-row gap-4">
                          <span>{item.icon}</span>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                  </div>
                ))}
            </div>
      </div>
    </section>
  );
}
