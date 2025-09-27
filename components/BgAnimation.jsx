"use client";

import Lottie from "lottie-react";
import callAnimation from "@/public/bgAnimation.json"; 
export default function BgAnimation() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
    <Lottie animationData={callAnimation} loop={true} />
  </div>  
  );
}
